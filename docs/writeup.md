# NudgeX — Problem Analysis & Solution Design

## 1. Understanding the Problem

Early.fit is selling a high-consideration, deeply personal product: a clinically-backed GLP-1 weight loss program involving endocrinologist consultations, lab diagnostics, medication (semaglutide/tirzepatide at ₹14K-17.5K/month), and ongoing coaching.

India's GLP-1 market inflected in 2025 with Mounjaro approval and is projected to grow at **34% CAGR to $513M by 2030**. But this is not an impulse purchase. A lead considering GLP-1 therapy is navigating medical anxiety, cost justification (₹12K-25K/month out-of-pocket), stigma around "taking shortcuts," and the vulnerability of admitting they need help.

### The Motivation Gap

The central tension is **temporal**. The behaviours that drive conversions — timely follow-ups (WhatsApp open rates in Indian healthcare average 70-80%), thorough medical profiling, empathetic nurturing — produce results days or weeks later. But agents experience the cost immediately: rejection, silence, effort without visible return.

Meta-analytic research on salesperson motivation shows intrinsic motivation (mastery, autonomy, competence) correlates with performance at **0.30 vs 0.18 for extrinsic motivators**. Traditional gamification that relies solely on conversion bonuses produces perverse behaviours: agents over-qualify leads, abandon nurturing, and rush calls.

## 2. The User: Sales Agent

At a 2-10 person startup, sales agents are likely early-career, handling 30-60 leads, switching between WhatsApp and calls throughout the day. They are primarily money-motivated — the design works *with* that motivation.

### Behaviours to Encourage
- **Timely follow-ups** within optimal windows (speed-to-lead < 10 min for best conversion)
- **Deep lead profiling** — medical context, BMI, concerns, eligibility status
- **Consistent nurturing** of warm and cold leads (80% of sales happen after 5+ touchpoints)
- **Quality conversations** with medical empathy
- **Honest documentation** after each interaction

### Behaviours to Discourage
- Cherry-picking only Hot leads
- Abandoning leads after 1-2 rejections
- Generic "just checking in" messages
- Rushing calls for volume over quality

## 3. The Solution: NudgeX

### 3.1 Smart Action Queue
AI generates a prioritised daily action list. Each card shows the lead, the recommended action, *why* this lead needs attention *now*, and a predicted impact score.

### 3.2 Momentum Score (0-100)
Composite of leading indicators: Follow-up Discipline (25%), Profiling Depth (20%), Pipeline Health (20%), Conversation Quality (20%), Consistency (15%). Tied to incentives via multiplier.

### 3.3 AI Conversation Intelligence
- Pre-call briefing with medical context and talking points
- Post-call ACW summary via STT + LLM (Gemini API)
- AI-drafted WhatsApp messages personalised to lead's medical situation
- CSAT/QM scoring with supervisor escalation on risk keywords

### 3.4 Streaks, Milestones & Earnings Forecast
Real-time commission projection that makes future reward tangible in the present moment.

## 4. Success Metrics

| Metric | Target (90 days) |
|--------|------------------|
| Follow-up compliance rate | >70% |
| Lead profile completeness | >60% |
| AI message adoption | >50% |
| Avg Momentum Score | >65 |
| Post-call ACW time | -35%+ |
| Conversion rate | +15-20% |

## 5. Phasing

- **Phase 1 (W1-3):** Smart Action Queue + Post-call AI summaries
- **Phase 2 (W4-6):** Momentum Score + Earnings Forecast
- **Phase 3 (W7-10):** Full AI Conversation Intelligence + CSAT/QM + Escalation
