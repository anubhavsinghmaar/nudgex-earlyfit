# 🟢 NudgeX — AI-Powered Sales Momentum Engine for Early.fit

> **A feature design for Early.fit's Sales CRM that shapes agent behaviour through AI, behavioural science, and contact centre intelligence.**

![NudgeX](https://img.shields.io/badge/NudgeX-Early.fit-3E4F3C?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![Gemini](https://img.shields.io/badge/Gemini_API-AI_Native-4285F4?style=flat-square&logo=google)

---

## 📋 What This Is

NudgeX is a take-home assignment submission for **Early.fit** — India's first full-stack GLP-1 weight loss platform. The brief asked us to design a feature (or set of features) for sales agents that shapes their behaviour in a positive direction.

**The core insight:** In a long-cycle medical sale, the right behaviours (timely follow-ups, thorough profiling, empathetic nurturing) produce results days or weeks later. But agents experience the cost immediately. NudgeX makes invisible effort visible and immediately rewarding.

---

## 🧠 The Four Mechanisms

### 1. Smart Action Queue
AI generates a prioritised daily action list. Each card shows *why* this lead needs attention *right now* — not just that they exist.

### 2. Momentum Score (0-100)  
A composite of **leading indicators**, not conversions. Follow-up discipline, profiling depth, pipeline health, conversation quality, and consistency. Tied directly to incentives.

### 3. AI Conversation Intelligence
- **Pre-call briefing**: Medical context, talking points, likely objections, GLP-1 quick reference
- **Post-call ACW summary**: STT + LLM auto-generates call summary, CSAT score, sentiment, and next action
- **AI WhatsApp composer**: Personalised messages based on lead's medical profile
- **CSAT/QM monitoring**: Auto-scores calls. Flags risk keywords to supervisors

### 4. Streaks, Milestones & Earnings Forecast
Real-time commission projection that updates as agents complete actions. Makes future reward tangible in the present.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/nudgex-earlyfit.git
cd nudgex-earlyfit

# Install dependencies
npm install

# Add your Gemini API key (optional — app works without it using mock data)
cp .env.example .env
# Edit .env and add: VITE_GEMINI_API_KEY=your_key_here

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Deploy to Netlify

```bash
npm run build
# Upload the `dist` folder to Netlify, or connect your GitHub repo for auto-deploy
```

---

## 🏗 Project Structure

```
nudgex-earlyfit/
├── README.md                     # You are here
├── docs/
│   ├── writeup.md                # Full problem analysis & solution design
│   └── ai-prompts.md             # All AI prompts used during the process
├── src/
│   ├── App.jsx                   # Main app with routing
│   ├── components/
│   │   ├── ActionCard.jsx        # Smart Action Queue card
│   │   ├── MomentumRing.jsx      # Animated gauge component
│   │   ├── LeadDetail.jsx        # Lead detail with AI briefing
│   │   ├── PostCallSheet.jsx     # ACW summary bottom sheet
│   │   ├── WhatsAppComposer.jsx  # AI message drafting
│   │   └── MomentumDetail.jsx    # Score breakdown
│   ├── data/
│   │   └── leads.js              # Realistic GLP-1 lead data
│   ├── hooks/
│   │   └── useGemini.js          # Gemini API integration hook
│   ├── utils/
│   │   └── scoring.js            # Momentum & impact scoring logic
│   └── main.jsx                  # Entry point
├── public/
├── .env.example                  # API key template
├── package.json
├── vite.config.js
├── tailwind.config.js
└── index.html
```

---

## 🤖 AI Integration (Gemini API)

NudgeX uses Google's Gemini API for:
- **Call transcript analysis** → CSAT scoring, sentiment, summary generation
- **WhatsApp message drafting** → Personalised based on lead medical profile
- **Lead signal interpretation** → Converting raw engagement data into actionable insights
- **Supervisor escalation** → Keyword + AI-judged risk detection

### Running with AI features:

1. Get a [Gemini API key](https://aistudio.google.com/apikey)
2. Add to `.env`: `VITE_GEMINI_API_KEY=your_key`
3. The app will use real AI for summaries and scoring
4. Without a key, mock data provides the full experience

---

## 🎨 Design Decisions

- **Early.fit brand alignment**: Dark olive (#3E4F3C), warm cream (#F7F4EF), muted earth tones — matched from the published Early.fit app
- **Mobile-first**: Sales agents work from phones. WhatsApp and calls are mobile-native
- **Action-oriented, not data-oriented**: Agents need direction, not dashboards
- **Calm, focused UX**: The opposite of anxiety-inducing CRM interfaces. Generous whitespace, large tap targets, minimal cognitive load

---

## 📊 Key Research Informing This Design

| Insight | Source |
|---------|--------|
| India GLP-1 market: $110.5M → $513M by 2030 (34% CAGR) | CareEdge Ratings, industry reports |
| WhatsApp open rates in Indian healthcare: 70-80% | Healthcare marketing research |
| Intrinsic motivation → performance correlation: 0.30 vs 0.18 for extrinsic | Meta-analytic SDT research |
| Conversation intelligence lifts win rates ~28% | Gong case studies |
| Speed-to-lead (< 10 min) significantly improves conversion | D2C health funnel research |
| Competitors: HealthifyRx, Sugarfit, BeatO, Aamya all offer GLP-1 programs | Market analysis |

---

## 👤 About the Author

**Anubhav Singhmaar** — APM at Sprinklr (4 years)

I own Voice products (IVR, Call Controls) for enterprise contact centres. The patterns in this brief — long sales cycles, agent motivation, multi-channel coordination, quality vs volume tension — are the same patterns I solve daily.

Key results I've delivered that directly inform this design:
- AI post-call automation: wrap-up time ↓35%, data accuracy ↑40%, scaled to 1000+ agents
- AI CSAT scoring: manual audits ↓35%, escalation speed ↑50%
- Diagnostic intelligence: resolution time ↓20%, engineering escalations ↓30%
- Cohort-driven roadmap reprioritisation: customer retention ↑7%

---

## 📝 License

This is a take-home assignment submission. All code and design work is original.

---

## Demo Credentials (Settings Page)

The Settings page is admin-protected. Use these credentials:

- **Email:** abc@earlyfit.com
- **Password:** Early123

These are hardcoded for demo purposes only. Production would use SSO or OAuth.
