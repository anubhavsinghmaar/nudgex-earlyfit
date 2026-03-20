export const LEADS = [
  {
    id: 1, name: "Priya Sharma", avatar: "PS", status: "Hot", source: "Website",
    concern: "PCOS + Insulin Resistance", bmi: 31.2, lastContact: "2 days ago",
    action: "Call", impact: 92, age: 29, city: "Mumbai",
    reason: "Visited pricing page 3x yesterday. Asked about GLP-1 side effects on last call — didn't get a clear answer.",
    history: [
      { type: "call", date: "Mar 14", note: "Discussed GLP-1 basics. Has PCOS, tried 3 diets. Worried about nausea and cost." },
      { type: "whatsapp", date: "Mar 12", note: "Initial outreach. Sent program overview. Read within 10 min." },
    ],
    talkingPoints: [
      "Address nausea directly — subsides in 2-3 weeks for most patients",
      "Reference clinical data on GLP-1 + insulin resistance in PCOS",
      "Lead with monthly breakdown (₹14K-17K), not program total"
    ],
    objections: ["Side effects (nausea)", "Cost justification", "Diet fatigue — skeptical"],
    aiWhatsApp: "Hi Priya, following up on our call about GLP-1 therapy. I checked with our endocrinologist about the nausea concern you raised — for most patients it's mild and settles within 2-3 weeks. Shall I book a free 15-min call with Dr. Mehta so she can address your specific situation?"
  },
  {
    id: 2, name: "Rahul Mehta", avatar: "RM", status: "Warm", source: "Instagram",
    concern: "High Cholesterol + Weight", bmi: 34.8, lastContact: "5 days ago",
    action: "WhatsApp", impact: 78, age: 42, city: "Delhi",
    reason: "Opened your last message but didn't reply. His doctor flagged lipid panel — send the cholesterol + GLP-1 resource.",
    history: [
      { type: "whatsapp", date: "Mar 11", note: "Shared intro video. Watched 80%. Asked about doctor credentials." },
      { type: "call", date: "Mar 9", note: "Exploratory call. Doctor flagged cholesterol. Wife suggested he look into programs." },
    ],
    talkingPoints: [
      "Connect GLP-1 to his doctor's cholesterol concern — medically aligned",
      "Mention lab monitoring includes lipid panels",
      "Suggest wife joins initial consult — she's the decision ally"
    ],
    objections: ["Needs wife's buy-in", "Wants to check with existing doctor", "Skeptical of online medical"],
    aiWhatsApp: "Hi Rahul, wanted to share something your doctor might find relevant — GLP-1 therapy has shown significant impact on lipid profiles alongside weight. Our program includes regular lab monitoring including cholesterol panels. Would it help if I sent a summary you could show your doctor?"
  },
  {
    id: 3, name: "Ananya Reddy", avatar: "AR", status: "Cold", source: "Referral",
    concern: "Post-pregnancy weight", bmi: 28.5, lastContact: "12 days ago",
    action: "WhatsApp", impact: 71, age: 34, city: "Bangalore",
    reason: "🔥 Re-engaged! Read the post-pregnancy blog post you shared 2 weeks ago — full article, today.",
    history: [
      { type: "whatsapp", date: "Mar 4", note: "Sent blog post on post-pregnancy weight. No reply." },
      { type: "call", date: "Feb 28", note: "Interested but bad timing — baby is 8 months. Concerned about GLP-1 while breastfeeding." },
    ],
    talkingPoints: [
      "She re-engaged with content — acknowledge naturally, don't push",
      "Check if still breastfeeding — GLP-1 eligibility depends on this",
      "If eligible, position free doctor consult as zero-commitment"
    ],
    objections: ["Timing (new baby)", "Breastfeeding compatibility", "Not ready to commit"],
    aiWhatsApp: "Hi Ananya! Noticed you checked out the post-pregnancy article — hope it was helpful. How are things going with the little one? If you're curious about whether the program could work for your situation, our doctors can do a quick 10-min eligibility check, totally free and no commitment."
  },
  {
    id: 4, name: "Vikram Patel", avatar: "VP", status: "Hot", source: "Website",
    concern: "BMI 38 + Pre-diabetic", bmi: 38.1, lastContact: "1 day ago",
    action: "Call", impact: 96, age: 45, city: "Pune",
    reason: "Requested callback. Pre-diabetic, high BMI — clinically urgent. Doctor told him to act. Prioritize.",
    history: [
      { type: "website", date: "Mar 17", note: "Callback form. Mentioned pre-diabetes diagnosis and doctor recommendation." },
    ],
    talkingPoints: [
      "Medically motivated — his doctor said act. Validate urgency",
      "GLP-1 has strong pre-diabetes reversal evidence — share confidently",
      "Offer doctor consultation within 48 hours"
    ],
    objections: ["May prefer existing doctor's plan", "Cost at higher priority", "Exploring multiple options"],
    aiWhatsApp: "Hi Vikram, I saw your callback request. Given your doctor's recommendation, I'd like to get you connected with our endocrinologist quickly. Can I book a consultation within the next 48 hours?"
  },
  {
    id: 5, name: "Deepika Joshi", avatar: "DJ", status: "Warm", source: "Instagram",
    concern: "PCOS + Stubborn weight", bmi: 29.7, lastContact: "3 days ago",
    action: "Send Resource", impact: 74, age: 26, city: "Jaipur",
    reason: "Asked 'has this actually worked for someone with PCOS?' — send the case study, it's your highest-converting resource.",
    history: [
      { type: "whatsapp", date: "Mar 15", note: "DM conversation. Asked for proof — 'has this worked for PCOS?'" },
      { type: "whatsapp", date: "Mar 13", note: "Responded to IG ad. Basic questions about program." },
    ],
    talkingPoints: [
      "She asked for proof — PCOS case study is exactly right",
      "Follow up in 24hr with free doctor call offer",
      "She's 26, on Instagram — keep tone casual, not clinical"
    ],
    objections: ["Young, may not see weight loss as 'medical'", "Price sensitive", "Comparing influencer alternatives"],
    aiWhatsApp: "Hey Deepika! You asked about PCOS results — here's a case study from a member with a really similar profile. She saw insulin levels normalize within 8 weeks alongside the weight loss. Let me know if you want to chat with our doctor about your specific situation 💚"
  },
  {
    id: 6, name: "Amit Kumar", avatar: "AK", status: "New", source: "Google Sheets",
    concern: "Obesity + Sleep Apnea", bmi: 36.4, lastContact: "New lead",
    action: "Call", impact: 88, age: 38, city: "Hyderabad",
    reason: "Doctor referral from Dr. Kapoor's clinic. Pre-qualified: BMI 36+, sleep apnea. Call within 2 hours.",
    history: [],
    talkingPoints: [
      "Doctor-referred = high trust baseline. Acknowledge Dr. Kapoor",
      "Sleep apnea + obesity = strong clinical case for GLP-1",
      "First call: 80% listening, 20% explaining"
    ],
    objections: ["May not know what GLP-1 is", "Could be exploring surgery", "Insurance coverage questions"],
    aiWhatsApp: "Hi Amit, Dr. Kapoor's team shared that you're interested in our weight management program. I'd love to walk you through how it works — it's a doctor-led program designed for situations like yours. When's a good time for a quick call?"
  },
];

export const STATUS_COLORS = {
  Hot: "#D45A3B",
  Warm: "#D4993B",
  Cold: "#6B8EA4",
  Prospect: "#7E6BAE",
  New: "#5A9A6B",
};

export const ACTION_ICONS = {
  "Call": "📞",
  "WhatsApp": "💬",
  "Send Resource": "📎",
};
