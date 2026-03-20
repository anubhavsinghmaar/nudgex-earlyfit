/**
 * useGemini — Hook for Gemini API integration
 * 
 * Provides AI-powered features:
 * - Post-call summary generation from transcripts
 * - CSAT scoring from conversation analysis
 * - WhatsApp message drafting
 * - Supervisor escalation risk detection
 * 
 * Falls back to mock data when no API key is configured.
 */

import { useState, useCallback } from 'react';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
const API_KEY = typeof import.meta !== 'undefined' ? import.meta.env?.VITE_GEMINI_API_KEY : null;

const callGemini = async (prompt) => {
  if (!API_KEY || API_KEY === 'your_gemini_api_key_here') return null;
  
  try {
    const res = await fetch(`${GEMINI_API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 500 }
      })
    });
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
  } catch (err) {
    console.warn('Gemini API error:', err);
    return null;
  }
};

// Post-call ACW summary generation
export const usePostCallSummary = () => {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(null);

  const generate = useCallback(async (lead, callDuration = "8 minutes") => {
    setLoading(true);
    
    const prompt = `You are an AI assistant for a GLP-1 weight loss sales CRM. Generate a concise post-call summary.

Lead: ${lead.name}, ${lead.age}y, ${lead.city}
Medical concern: ${lead.concern}, BMI: ${lead.bmi}
Lead status: ${lead.status}, Source: ${lead.source}
Call duration: ${callDuration}

Previous interactions:
${lead.history.map(h => `- ${h.date} (${h.type}): ${h.note}`).join('\n')}

Generate a JSON response with:
{
  "summary": "2-3 sentence call summary",
  "csat_score": number between 60-95,
  "sentiment": "Positive" or "Neutral" or "Negative",
  "key_concerns": ["concern1", "concern2"],
  "next_action": "specific next step",
  "next_action_timing": "e.g., In 2 days",
  "status_change": "suggested new status or null"
}

Respond ONLY with valid JSON, no markdown.`;

    const result = await callGemini(prompt);
    
    if (result) {
      try {
        const parsed = JSON.parse(result.replace(/```json|```/g, '').trim());
        setSummary(parsed);
        setLoading(false);
        return parsed;
      } catch {}
    }

    // Fallback mock data
    const mock = {
      summary: `Discussed ${lead.concern.toLowerCase()} in detail. ${lead.name.split(' ')[0]} ${lead.status === 'Hot' ? 'is ready to proceed but wants pricing clarity. Asked about monthly breakdown and EMI options.' : lead.status === 'New' ? 'was receptive to the program overview. Asked about doctor credentials and clinical evidence.' : 'showed renewed interest. Still evaluating timing but didn\'t object to the program itself.'}`,
      csat_score: Math.floor(Math.random() * 20) + 75,
      sentiment: "Positive",
      key_concerns: lead.objections.slice(0, 2),
      next_action: "Follow-up call with pricing breakdown",
      next_action_timing: "In 2 days",
      status_change: lead.status === "Cold" ? "Warm" : null
    };
    setSummary(mock);
    setLoading(false);
    return mock;
  }, []);

  return { generate, summary, loading };
};

// WhatsApp message drafting
export const useWhatsAppDraft = () => {
  const [loading, setLoading] = useState(false);
  const [draft, setDraft] = useState(null);

  const generate = useCallback(async (lead) => {
    setLoading(true);

    const prompt = `You are an AI assistant for Early.fit, India's GLP-1 weight loss platform. Draft a WhatsApp follow-up message for this lead.

Lead: ${lead.name}, ${lead.age}y, ${lead.city}
Concern: ${lead.concern}, BMI: ${lead.bmi}
Status: ${lead.status}, Source: ${lead.source}
Last interactions:
${lead.history.map(h => `- ${h.date} (${h.type}): ${h.note}`).join('\n')}

Rules:
- Keep it under 3 sentences
- Reference their specific medical concern
- Be warm and empathetic, not pushy
- Include a soft call-to-action
- Use natural Indian English (not overly formal)
- Do NOT use exclamation marks excessively

Respond with ONLY the message text, no quotes or formatting.`;

    const result = await callGemini(prompt);
    const final = result || lead.aiWhatsApp;
    setDraft(final);
    setLoading(false);
    return final;
  }, []);

  return { generate, draft, loading };
};

// CSAT scoring from transcript
export const useCSATScoring = () => {
  const [loading, setLoading] = useState(false);
  const [scores, setScores] = useState(null);

  const analyze = useCallback(async (transcript, lead) => {
    setLoading(true);

    const prompt = `Analyze this sales call transcript for a GLP-1 weight loss program. Score the agent's performance.

Lead profile: ${lead.name}, ${lead.concern}, BMI ${lead.bmi}
Transcript: "${transcript}"

Generate JSON:
{
  "csat_score": number 0-100,
  "empathy_score": "High" or "Medium" or "Low",
  "medical_accuracy": "Good" or "Needs Improvement" or "Concerning",
  "escalation_risk": boolean,
  "risk_keywords_found": ["keyword1"],
  "improvement_areas": "1 sentence suggestion",
  "supervisor_nudge": boolean
}

Respond ONLY with valid JSON.`;

    const result = await callGemini(prompt);
    
    if (result) {
      try {
        const parsed = JSON.parse(result.replace(/```json|```/g, '').trim());
        setScores(parsed);
        setLoading(false);
        return parsed;
      } catch {}
    }

    const mock = {
      csat_score: 82,
      empathy_score: "High",
      medical_accuracy: "Good",
      escalation_risk: false,
      risk_keywords_found: [],
      improvement_areas: "Provide specific timeline for side effect resolution (2-3 weeks) when addressing nausea concerns.",
      supervisor_nudge: false
    };
    setScores(mock);
    setLoading(false);
    return mock;
  }, []);

  return { analyze, scores, loading };
};

export default { usePostCallSummary, useWhatsAppDraft, useCSATScoring };
