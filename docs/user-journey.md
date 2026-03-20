# NudgeX: Web CRM and Mobile App

## How Web and Mobile Relate

The web CRM and mobile app are **two interfaces to the same system**, designed for different contexts. They are not linked in this prototype (each runs independently with demo data), but in production they would share a backend and sync in real time.

**Web CRM Dashboard (primary workspace)**
The agent sits at a desk or has a laptop open. The web CRM is where the real work happens: reviewing the Smart Action Queue, opening lead detail with AI briefing side by side, logging calls with post call disposition, managing the pipeline, and configuring settings. It is the system of record. Designed for focus and depth.

**Mobile App (companion for the field)**
When the agent is commuting, between meetings, or away from their desk, the mobile app gives them a quick view of their action queue, Momentum Score, and the ability to send an AI drafted WhatsApp message. It is read heavy, action light. Designed for awareness and quick actions on the go.

This is the standard enterprise CRM pattern. Salesforce, HubSpot, and Freshsales all have desktop web dashboards as the primary tool with mobile companions for field access.

## What Works Without Gemini API (default)

Everything runs fully with intelligent demo data. No API key needed.

| Feature | How It Works |
|---------|-------------|
| Smart Action Queue | 6 leads with AI insight, impact scores, recommended actions |
| Pre Call Briefing | Medical context, talking points, objections from lead profile |
| Post Call Summary | Agent taps disposition, template generates structured summary |
| WhatsApp AI Draft | Pre written personalised messages per lead |
| Quality Monitor | Scores from WhatsApp analysis and disposition data |
| Momentum Score | Full 5 component breakdown |
| Earnings Forecast | Projected commission from pipeline |
| Settings Auth | Admin login, keyword config, Momentum weights, Gemini key |
| Pipeline and Leads | Full kanban board and filterable lead list |

## What Changes With Gemini API

| Feature | Without (mock) | With (live AI) |
|---------|---------------|---------------|
| Post Call Summary | Template based from disposition | Gemini generates unique contextual summaries each time |
| WhatsApp Draft | Pre written per lead | Fresh AI generated messages incorporating latest interaction |
| Quality Scoring | Static mock scores | Gemini analyses WhatsApp text for empathy, accuracy, tone |
| Escalation | Keyword matching only | Keywords plus Gemini sentiment analysis |

## Demo Credentials (Settings Page)

Email: abc@earlyfit.com
Password: Early123

For demo purposes only. Production would use SSO or OAuth.

## How to Add Gemini Key

1. Go to https://aistudio.google.com/apikey
2. Create a free key
3. In the prototype: Settings > Authenticate > Paste key > Save
4. In the codebase: Copy .env.example to .env, add key, restart
