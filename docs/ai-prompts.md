# AI Prompts Used During This Process

I used AI tools as a research accelerator and implementation partner. The problem framing, product decisions, and design direction are my own, grounded in 4 years of building contact centre products at Sprinklr.

## Research Phase
**Tool:** Perplexity Deep Research
**What I did:** Gathered current data on Early.fit, Indian GLP 1 market, competitor landscape, and sales CRM patterns. Validated against Early.fit website and app store listings. Also scraped their tech stack via Wappalyzer (Next.js 15, React, Lucide, Bunny CDN, GA4).

**Prompt:** "Research Early.fit, the GLP 1 weight loss market in India (2025 to 2026), and sales CRM patterns for Indian health startups. Cover: product and pricing, GLP 1 regulatory status, competitor landscape (HealthifyRx, Sugarfit, BeatO, Aamya), sales cycle length, WhatsApp conversion tactics, conversion benchmarks by channel."

## Analysis Phase
**Tool:** Claude
**What I did:** Validated my behavioural hypothesis (temporal disconnect between effort and reward) against academic research. Confirmed intrinsic vs extrinsic motivation gap (0.30 vs 0.18) which informed the Momentum Score design.

**Prompt:** "Given Early.fit context (GLP 1 medical weight loss, long sales cycle, incentive driven agents), validate this hypothesis: the primary behavioural problem is temporal, not motivational. Map micro behaviours that predict conversion and behavioural principles that apply."

## Design Phase
**Tool:** Claude
**What I did:** Stress tested my feature architecture against mobile first constraints. This is where I caught the STT limitation: calls happen on agent phones, not VoIP, so I redesigned post call flow to use structured disposition instead of transcription.

**Prompt:** "Review this feature architecture for a mobile first sales CRM. Flag features that assume VoIP call access, real time audio streaming, or enterprise telephony."

## Implementation Phase
**Tool:** Claude
**What I did:** Built the React prototype iterating on design feedback. Matched Early.fit visual language. Built Gemini API hooks with graceful fallback.

**Prompt:** "Create a React prototype for NudgeX matching Early.fit design (olive #3E4F3C, cream #F7F4EF). Mobile first, SVG icons not emojis. Realistic GLP 1 lead data. Post call flow as disposition based since calls happen on personal mobile."
