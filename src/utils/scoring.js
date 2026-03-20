/**
 * Scoring Engine for NudgeX
 * 
 * Computes: Momentum Score, Lead Impact Score, Earnings Forecast
 */

// Momentum Score Components (weights sum to 100)
const MOMENTUM_WEIGHTS = {
  followUp: 25,      // Follow-up discipline
  profiling: 20,     // Lead profile completeness  
  pipeline: 20,      // Pipeline health (working all stages)
  quality: 20,       // Conversation quality (AI-scored)
  consistency: 15,   // Daily activity streaks
};

/**
 * Calculate Momentum Score from agent activity data
 */
export const calculateMomentumScore = (agentData) => {
  const {
    followUpsOnTime = 0,
    followUpsDue = 1,
    profilesComplete = 0,
    profilesTotal = 1,
    stagesWorked = [],
    avgCSAT = 75,
    streakDays = 0,
  } = agentData;

  const followUpScore = Math.min(100, (followUpsOnTime / Math.max(followUpsDue, 1)) * 100);
  const profilingScore = Math.min(100, (profilesComplete / Math.max(profilesTotal, 1)) * 100);
  
  // Pipeline health: reward working across multiple stages
  const allStages = ['New', 'Hot', 'Warm', 'Cold', 'Prospect'];
  const pipelineScore = Math.min(100, (stagesWorked.length / allStages.length) * 120); // bonus for full coverage
  
  const qualityScore = Math.min(100, avgCSAT);
  
  // Consistency: streak bonus with diminishing returns
  const consistencyScore = Math.min(100, streakDays * 12); // 8+ days = max

  const components = {
    followUp: { raw: followUpScore, weighted: (followUpScore / 100) * MOMENTUM_WEIGHTS.followUp },
    profiling: { raw: profilingScore, weighted: (profilingScore / 100) * MOMENTUM_WEIGHTS.profiling },
    pipeline: { raw: pipelineScore, weighted: (pipelineScore / 100) * MOMENTUM_WEIGHTS.pipeline },
    quality: { raw: qualityScore, weighted: (qualityScore / 100) * MOMENTUM_WEIGHTS.quality },
    consistency: { raw: consistencyScore, weighted: (consistencyScore / 100) * MOMENTUM_WEIGHTS.consistency },
  };

  const total = Object.values(components).reduce((sum, c) => sum + c.weighted, 0);

  return { score: Math.round(total), components };
};

/**
 * Calculate Lead Impact Score
 * Higher = more likely to convert with action NOW
 */
export const calculateImpactScore = (lead) => {
  let score = 50; // baseline

  // Source quality
  const sourceBonus = { 'Website': 15, 'Referral': 18, 'Google Sheets': 10, 'Instagram': 5 };
  score += sourceBonus[lead.source] || 0;

  // BMI urgency (higher BMI = more clinical urgency)
  if (lead.bmi >= 35) score += 15;
  else if (lead.bmi >= 30) score += 10;
  else if (lead.bmi >= 27) score += 5;

  // Status signals
  const statusBonus = { 'Hot': 12, 'Warm': 5, 'Cold': -5, 'New': 8, 'Prospect': 3 };
  score += statusBonus[lead.status] || 0;

  // Recency of engagement (if they re-engaged, big boost)
  if (lead.reEngaged) score += 15;

  // Profile completeness (more data = better targeting)
  if (lead.concern && lead.bmi && lead.city) score += 5;

  return Math.min(99, Math.max(10, Math.round(score)));
};

/**
 * Calculate Earnings Forecast
 */
export const calculateEarningsForecast = (pipeline, momentumScore, conversionRate = 0.08) => {
  const avgDealValue = 15000; // ₹15K avg first-month revenue per conversion
  const commissionRate = 0.10; // 10% base commission

  // Momentum multiplier: agents above 75 get up to 1.5x
  const momentumMultiplier = momentumScore >= 75
    ? 1 + ((momentumScore - 75) / 50) // 75 = 1.0x, 100 = 1.5x
    : 0.8 + (momentumScore / 375);     // 0 = 0.8x, 75 = 1.0x

  const hotLeads = pipeline.filter(l => l.status === 'Hot').length;
  const warmLeads = pipeline.filter(l => l.status === 'Warm').length;

  // Expected conversions this month
  const expectedConversions = (hotLeads * 0.25) + (warmLeads * 0.10);
  
  const baseEarnings = expectedConversions * avgDealValue * commissionRate;
  const projectedEarnings = Math.round(baseEarnings * momentumMultiplier);

  // If queue is completed, add bonus from improved follow-up
  const queueBonus = Math.round(baseEarnings * 0.07); // ~7% uplift from timely follow-ups

  return {
    current: projectedEarnings,
    withQueueComplete: projectedEarnings + queueBonus,
    momentumMultiplier: momentumMultiplier.toFixed(2),
    expectedConversions: expectedConversions.toFixed(1),
  };
};

/**
 * Risk keyword detection for supervisor escalation
 */
export const ESCALATION_KEYWORDS = [
  'cancel', 'refund', 'complaint', 'not working', 'scam', 'fraud',
  'side effect', 'allergic', 'emergency', 'hospital', 'worst',
  'legal', 'lawyer', 'report', 'terrible', 'dangerous'
];

export const detectEscalationRisk = (transcript) => {
  const lower = transcript.toLowerCase();
  const found = ESCALATION_KEYWORDS.filter(kw => lower.includes(kw));
  return {
    isRisk: found.length > 0,
    keywords: found,
    severity: found.length >= 3 ? 'high' : found.length >= 1 ? 'medium' : 'low'
  };
};
