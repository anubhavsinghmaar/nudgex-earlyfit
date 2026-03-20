import { useState } from "react";

/* ═══ EARLY.FIT LOGO — from official SVG brand asset ═══ */
function EarlySymbol({ size = 24, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="200 700 1150 1220" fill={color}>
      <path d="M611.998169,1312.987061 C488.390259,1312.991089 365.781952,1312.991089 242.405151,1312.991089 C242.405151,1249.934937 242.405151,1187.514526 242.405151,1124.485596 C594.921448,1124.485596 947.424805,1124.485596 1300.647705,1124.485596 C1300.647705,1147.897705 1300.647705,1171.361084 1300.647705,1196.258179 C1155.543457,1196.615967 1010.478210,1196.161133 864.746460,1196.411499 C864.746460,1285.235107 864.746460,1373.044678 864.746460,1462.331177 C948.207886,1462.654175 1031.647949,1462.265137 1115.786865,1462.556763 C1115.786865,1486.966431 1115.786865,1510.735840 1115.786865,1535.458984 C1032.198853,1535.458984 948.711914,1535.458984 864.642700,1535.458984 C864.421936,1539.265259 864.108643,1542.167969 864.107483,1545.070557 C864.095642,1575.401733 863.630310,1605.743530 864.271423,1636.061646 C865.343201,1686.750977 884.907227,1729.040405 923.542847,1762.258911 C958.480469,1792.297974 999.440369,1805.710083 1045.000366,1805.819458 C1126.327637,1806.014648 1207.655640,1805.880127 1288.983398,1805.883423 C1292.629028,1805.883667 1296.274536,1805.883667 1300.687378,1805.883667 C1300.687378,1830.143433 1300.687378,1853.893188 1300.687378,1878.611084 C1297.456665,1878.611084 1294.531982,1878.610352 1291.607300,1878.611206 C1205.279907,1878.635986 1118.952637,1878.651245 1032.625244,1878.691650 C1006.228271,1878.703979 979.957581,1877.083984 954.324829,1870.424072 C893.541809,1854.631470 845.773010,1821.002686 813.528503,1766.456909 C811.500305,1763.025757 809.458923,1759.602539 806.884705,1755.268311 C804.566284,1757.707886 802.422363,1759.611572 800.691772,1761.836670 C764.237305,1808.711670 716.993286,1840.616333 661.657166,1860.708130 C627.235291,1873.206177 591.253540,1878.438721 554.701294,1878.523193 C452.709015,1878.758911 350.715790,1878.600220 248.722961,1878.582764 C246.768768,1878.582397 244.814606,1878.405884 242.230438,1878.281128 C242.230438,1815.149048 242.230438,1752.361938 242.230438,1688.565063 C246.066116,1688.565063 249.640991,1688.565552 253.215881,1688.564941 C359.541626,1688.547241 465.867432,1688.572144 572.192993,1688.434204 C581.147949,1688.422607 590.284485,1688.255249 599.021362,1686.547363 C625.299500,1681.410889 644.762939,1660.401001 647.515259,1633.618530 C648.798340,1621.133179 647.734680,1608.406616 647.734680,1594.767700 C562.334534,1594.767700 477.151398,1594.767700 391.229736,1594.767700 C391.229736,1531.633911 391.229736,1469.520630 391.229736,1406.518555 C476.378815,1406.518555 561.534851,1406.518555 647.510742,1406.518555 C647.510742,1375.232422 647.510742,1344.819214 647.510742,1312.983154 C636.053040,1312.983154 624.525452,1312.983154 611.998169,1312.987061 z"/>
      <path d="M927.818359,912.428833 C933.432556,1009.218689 853.496399,1094.970215 749.008423,1091.664307 C664.784668,1088.999512 594.565735,1027.644043 583.281128,945.626892 C574.499695,881.802551 597.830933,829.383057 647.906006,789.916687 C729.839111,725.341553 850.747742,748.422485 904.303650,837.936768 C917.834900,860.553223 926.106384,885.004089 927.818359,912.428833 z"/>
    </svg>
  );
}

/* ═══ DESIGN TOKENS ═══ */
const T = {
  olive: "#3E4F3C",
  cream: "#F7F4EF",
  creamDk: "#EDE9E1",
  white: "#FDFCFA",
  lime: "#D4E8A0",
  char: "#2C2C2C",
  txt: "#3A3A3A",
  muted: "#8A8A7A",
  light: "#B0AFA5",
  hot: "#C45A3B",
  warm: "#C4923B",
  cold: "#5A7E94",
  prospect: "#7E6BAE",
  fresh: "#4A8B5C",
  card: "#FFFFFF",
  bdr: "#E8E4DC",
  bg: "#F3F0EB",
};

const SC = {
  Hot: T.hot,
  Warm: T.warm,
  Cold: T.cold,
  Prospect: T.prospect,
  New: T.fresh,
};

/* ═══ LEAD DATA ═══ */
const LEADS = [
  { id: 1, name: "Priya Sharma", ini: "PS", status: "Hot", src: "Website", concern: "PCOS, Insulin Resistance", bmi: 31.2, last: "2d ago", act: "Call", imp: 92, age: 29, city: "Mumbai", phone: "+91 98xxx xxxxx",
    why: "Visited pricing page 3 times yesterday. Asked about GLP 1 side effects on last call but did not get a clear answer.",
    hist: [
      { t: "call", d: "Mar 14", n: "Discussed GLP 1 basics. Has PCOS, tried 3 diets. Worried about nausea and cost." },
      { t: "wa", d: "Mar 12", n: "Initial outreach. Sent program overview. Read within 10 min." }
    ],
    tp: ["Address nausea directly: subsides in 2 to 3 weeks", "Reference GLP 1 and insulin resistance data for PCOS", "Lead with monthly breakdown (14K to 17K), not total"],
    obj: ["Side effects", "Cost justification", "Diet fatigue"],
    draft: "Hi Priya, following up on our call about GLP 1 therapy. I checked with our endocrinologist about the nausea concern you raised. For most patients it is mild and settles within 2 to 3 weeks. Shall I book a free 15 min call with Dr. Mehta?"
  },
  { id: 2, name: "Rahul Mehta", ini: "RM", status: "Warm", src: "Instagram", concern: "High Cholesterol, Weight", bmi: 34.8, last: "5d ago", act: "WhatsApp", imp: 78, age: 42, city: "Delhi", phone: "+91 87xxx xxxxx",
    why: "Opened your last message but did not reply. His doctor flagged lipid panel.",
    hist: [
      { t: "wa", d: "Mar 11", n: "Shared intro video. Watched 80%." },
      { t: "call", d: "Mar 9", n: "Exploratory call. Doctor flagged cholesterol." }
    ],
    tp: ["Connect GLP 1 to cholesterol concern", "Mention lab monitoring includes lipid panels", "Suggest wife joins consult"],
    obj: ["Needs wife's agreement", "Wants doctor's opinion", "Skeptical"],
    draft: "Hi Rahul, GLP 1 therapy has shown significant impact on lipid profiles alongside weight. Our program includes regular lab monitoring. Would it help if I sent a summary for your doctor?"
  },
  { id: 3, name: "Ananya Reddy", ini: "AR", status: "Cold", src: "Referral", concern: "Post pregnancy weight", bmi: 28.5, last: "12d ago", act: "WhatsApp", imp: 71, age: 34, city: "Bangalore", phone: "+91 76xxx xxxxx",
    why: "Re engaged. Read the post pregnancy blog post you shared 2 weeks ago.",
    hist: [
      { t: "wa", d: "Mar 4", n: "Sent blog post. No reply." },
      { t: "call", d: "Feb 28", n: "Interested but bad timing. Baby is 8 months." }
    ],
    tp: ["She re engaged. Do not push", "Check breastfeeding status", "Free consult as zero commitment"],
    obj: ["Timing", "Breastfeeding", "Not ready"],
    draft: "Hi Ananya, noticed you checked out the post pregnancy article. If you are curious, our doctors can do a quick 10 min eligibility check, totally free."
  },
  { id: 4, name: "Vikram Patel", ini: "VP", status: "Hot", src: "Website", concern: "BMI 38, Pre diabetic", bmi: 38.1, last: "1d ago", act: "Call", imp: 96, age: 45, city: "Pune", phone: "+91 99xxx xxxxx",
    why: "Requested callback. Pre diabetic, high BMI. Doctor told him to act. Prioritize.",
    hist: [{ t: "web", d: "Mar 17", n: "Callback form. Pre diabetes diagnosis." }],
    tp: ["His doctor said act. Validate urgency", "GLP 1 pre diabetes reversal evidence", "Offer consult within 48 hours"],
    obj: ["May prefer existing doctor", "Cost", "Exploring options"],
    draft: "Hi Vikram, given your doctor's recommendation, can I book you a consultation with our endocrinologist within 48 hours?"
  },
  { id: 5, name: "Deepika Joshi", ini: "DJ", status: "Warm", src: "Instagram", concern: "PCOS, Stubborn weight", bmi: 29.7, last: "3d ago", act: "Resource", imp: 74, age: 26, city: "Jaipur", phone: "+91 88xxx xxxxx",
    why: "Asked has this worked for PCOS in DMs. Send the case study.",
    hist: [
      { t: "wa", d: "Mar 15", n: "Asked for proof." },
      { t: "wa", d: "Mar 13", n: "Responded to IG ad." }
    ],
    tp: ["PCOS case study is right", "Follow up in 24h", "Keep tone casual"],
    obj: ["May not see it as medical", "Price sensitive", "Comparing alternatives"],
    draft: "Hey Deepika, here is a case study from a member with a similar profile. She saw insulin levels normalize within 8 weeks. Want to chat with our doctor?"
  },
  { id: 6, name: "Amit Kumar", ini: "AK", status: "New", src: "Sheets", concern: "Obesity, Sleep Apnea", bmi: 36.4, last: "New", act: "Call", imp: 88, age: 38, city: "Hyderabad", phone: "+91 91xxx xxxxx",
    why: "Doctor referral from Dr. Kapoor. BMI 36+, sleep apnea. Call within 2 hours.",
    hist: [],
    tp: ["Acknowledge Dr. Kapoor referral", "Sleep apnea plus obesity is strong case", "80% listening, 20% explaining"],
    obj: ["May not know GLP 1", "Exploring surgery", "Insurance"],
    draft: "Hi Amit, Dr. Kapoor's team shared your interest in our program. When is a good time for a quick call?"
  },
];

/* ═══ SIDEBAR ═══ */
function Sidebar({ active, onNav }) {
  const items = [
    { key: "dashboard", label: "Dashboard" },
    { key: "leads", label: "Leads" },
    { key: "pipeline", label: "Pipeline" },
    { key: "settings", label: "Settings" },
  ];

  return (
    <div style={{ width: 200, background: T.olive, display: "flex", flexDirection: "column", padding: "20px 0", flexShrink: 0 }}>
      <div style={{ padding: "0 20px 20px", borderBottom: "1px solid rgba(255,255,255,.1)", display: "flex", alignItems: "center", gap: 10 }}>
        <EarlySymbol size={28} color="#fff" />
        <div>
          <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", letterSpacing: .5 }}>NudgeX</div>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,.35)", marginTop: 1 }}>by Early.fit</div>
        </div>
      </div>
      <div style={{ flex: 1, padding: "12px 10px" }}>
        {items.map(function(it) {
          var isActive = active === it.key;
          return (
            <div key={it.key} onClick={function() { onNav(it.key); }} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
              borderRadius: 8, marginBottom: 3, cursor: "pointer",
              background: isActive ? "rgba(255,255,255,.12)" : "transparent",
            }}>
              <span style={{ fontSize: 13, fontWeight: isActive ? 600 : 400, color: isActive ? "#fff" : "rgba(255,255,255,.55)" }}>{it.label}</span>
            </div>
          );
        })}
      </div>
      <div style={{ padding: "12px 20px", borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,.5)" }}>Logged in as</div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", marginTop: 2 }}>Sales Agent</div>
      </div>
    </div>
  );
}

/* ═══ STATS BAR ═══ */
function StatsBar() {
  var stats = [
    { l: "Momentum Score", v: "80", s: "+4 today", c: T.olive },
    { l: "Projected Earnings", v: "\u20B918,400", s: "\u20B919,600 if queue done", c: T.char },
    { l: "Streak", v: "7 days", s: "3 more for bonus", c: T.hot },
    { l: "Queue Progress", v: "0 / 6", s: "actions completed", c: T.olive },
  ];

  return (
    <div style={{ display: "flex", gap: 12, padding: "16px 24px", background: T.white, borderBottom: "1px solid " + T.bdr }}>
      {stats.map(function(s, i) {
        return (
          <div key={i} style={{ flex: 1, padding: "12px 16px", background: T.cream, borderRadius: 10, border: "1px solid " + T.bdr }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: .8 }}>{s.l}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: s.c, letterSpacing: -.5, marginTop: 3 }}>{s.v}</div>
            <div style={{ fontSize: 10.5, color: T.fresh, fontWeight: 500, marginTop: 2 }}>{s.s}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ═══ DETAIL PANEL ═══ */
function DetailPanel({ lead }) {
  const [tab, setTab] = useState("brief");
  const [showPost, setShowPost] = useState(false);
  const [done, setDone] = useState(false);
  const [showWA, setShowWA] = useState(false);
  const [disp, setDisp] = useState(null);

  if (!lead) {
    return (
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: T.light, fontSize: 13 }}>
        Select a lead from the queue to see their AI briefing
      </div>
    );
  }

  var dispositions = ["Interested, needs follow up", "Wants to book consult", "Objections raised", "Not interested", "No answer"];

  function getSummary(d) {
    if (d.includes("Interested")) return "Wants pricing clarity. Send breakdown, follow up in 2 days.";
    if (d.includes("consult")) return "Book endocrinologist within 48 hours.";
    if (d.includes("Objections")) return "Address " + lead.obj[0].toLowerCase() + " next touchpoint.";
    if (d.includes("Not interested")) return "Re engage in 30 days.";
    return "Retry tomorrow. Send WhatsApp now.";
  }

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", borderLeft: "1px solid " + T.bdr, position: "relative" }}>
      {/* Header */}
      <div style={{ padding: "14px 20px", background: T.white, borderBottom: "1px solid " + T.bdr }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: T.char }}>{lead.name}</span>
              <span style={{ fontSize: 8.5, fontWeight: 700, background: SC[lead.status], color: "#fff", padding: "2px 8px", borderRadius: 8, textTransform: "uppercase" }}>{lead.status}</span>
            </div>
            <div style={{ fontSize: 11, color: T.muted, marginTop: 3 }}>{lead.city} / {lead.age}y / BMI {lead.bmi} / {lead.src} / {lead.phone}</div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <div onClick={function() { setShowPost(true); }} style={{ padding: "7px 14px", borderRadius: 8, background: T.olive, color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Log Call</div>
            <div onClick={function() { setShowWA(true); }} style={{ padding: "7px 14px", borderRadius: 8, background: "#25D366", color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>WhatsApp</div>
            <div style={{ padding: "7px 14px", borderRadius: 8, background: T.cream, color: T.txt, fontSize: 12, fontWeight: 600, border: "1px solid " + T.bdr }}>Resource</div>
          </div>
        </div>
        <div style={{ marginTop: 10, padding: "8px 12px", background: T.olive + "06", borderRadius: 8, borderLeft: "3px solid " + T.olive + "30", fontSize: 12, color: T.txt, lineHeight: 1.5 }}>
          <span style={{ fontWeight: 600, color: T.olive }}>AI Insight: </span>{lead.why}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", padding: "0 20px", background: T.white, borderBottom: "1px solid " + T.bdr }}>
        {[["brief", "AI Briefing"], ["hist", "History"], ["qm", "Quality Monitor"]].map(function(item) {
          return (
            <div key={item[0]} onClick={function() { setTab(item[0]); }} style={{
              padding: "9px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer",
              color: tab === item[0] ? T.olive : T.muted,
              borderBottom: tab === item[0] ? "2px solid " + T.olive : "2px solid transparent",
            }}>{item[1]}</div>
          );
        })}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: "auto", padding: 20 }}>
        {tab === "brief" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <div style={{ background: T.olive + "05", borderRadius: 12, padding: 16, border: "1px solid " + T.olive + "10" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: T.olive, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 10 }}>Pre Call Briefing</div>
                <div style={{ fontSize: 9.5, fontWeight: 700, color: T.char, textTransform: "uppercase", letterSpacing: .4, marginBottom: 4 }}>Medical Context</div>
                <div style={{ fontSize: 12, color: T.txt, lineHeight: 1.6, marginBottom: 14 }}>
                  {lead.concern}. {lead.bmi >= 30 ? "Clinically obese." : "Overweight."} {lead.src === "Website" ? "High intent." : lead.src === "Instagram" ? "Needs education." : "High trust referral."}
                </div>
                <div style={{ fontSize: 9.5, fontWeight: 700, color: T.char, textTransform: "uppercase", letterSpacing: .4, marginBottom: 5 }}>Talking Points</div>
                {lead.tp.map(function(p, i) {
                  return <div key={i} style={{ fontSize: 12, color: T.txt, lineHeight: 1.5, marginBottom: 6, paddingLeft: 10, borderLeft: "2px solid " + T.lime }}>{p}</div>;
                })}
              </div>
            </div>
            <div>
              <div style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 9.5, fontWeight: 700, color: T.hot, textTransform: "uppercase", letterSpacing: .4, marginBottom: 6 }}>Likely Objections</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {lead.obj.map(function(o, i) {
                    return <span key={i} style={{ fontSize: 10.5, color: T.hot, background: T.hot + "08", padding: "4px 10px", borderRadius: 14, border: "1px solid " + T.hot + "15" }}>{o}</span>;
                  })}
                </div>
              </div>
              <div style={{ background: T.card, borderRadius: 10, padding: 14, border: "1px solid " + T.bdr }}>
                <div style={{ fontSize: 9.5, fontWeight: 700, color: T.olive, textTransform: "uppercase", letterSpacing: .4, marginBottom: 8 }}>GLP 1 Quick Reference</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                  {[["Eligibility", "BMI 27+ comorbidity"], ["Cost", "14K to 17.5K/mo"], ["Side Effects", "Nausea, 2 to 3 wks"], ["Evidence", "Pre diabetes reversal"]].map(function(pair, i) {
                    return (
                      <div key={i} style={{ padding: "6px 8px", background: T.cream, borderRadius: 6 }}>
                        <div style={{ fontSize: 8, color: T.muted, fontWeight: 600, textTransform: "uppercase" }}>{pair[0]}</div>
                        <div style={{ fontSize: 11, color: T.txt, fontWeight: 500, marginTop: 1 }}>{pair[1]}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "hist" && (
          <div style={{ maxWidth: 500 }}>
            {lead.hist.length === 0 ? (
              <div style={{ padding: 32, color: T.muted, fontSize: 12.5 }}>New lead. No interactions yet.</div>
            ) : lead.hist.map(function(h, i) {
              return (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: T.olive + "0D", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: T.olive, fontWeight: 700, flexShrink: 0 }}>
                    {h.t === "call" ? "C" : h.t === "wa" ? "W" : "S"}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: T.muted, fontWeight: 500, marginBottom: 2 }}>{h.d}</div>
                    <div style={{ fontSize: 12, color: T.txt, lineHeight: 1.5 }}>{h.n}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {tab === "qm" && (
          <div style={{ maxWidth: 520 }}>
            <div style={{ background: T.card, borderRadius: 10, padding: 16, border: "1px solid " + T.bdr, marginBottom: 12 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.olive, textTransform: "uppercase", letterSpacing: .4, marginBottom: 8 }}>Quality Monitor</div>
              <div style={{ fontSize: 12, color: T.txt, lineHeight: 1.6, marginBottom: 12 }}>
                Scores from <strong>WhatsApp analysis</strong> (sentiment, accuracy, response time) and <strong>post call disposition</strong>.
              </div>
              {lead.hist.length > 0 && (
                <div style={{ display: "flex", gap: 8 }}>
                  {[["Tone", "Good", T.fresh], ["Response", "Under 4h", T.olive], ["Accuracy", "Good", T.warm]].map(function(item, i) {
                    return (
                      <div key={i} style={{ flex: 1, textAlign: "center", padding: "10px 6px", background: item[2] + "08", borderRadius: 8 }}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: item[2] }}>{item[1]}</div>
                        <div style={{ fontSize: 9, color: T.muted, fontWeight: 600, marginTop: 2 }}>{item[0]}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div style={{ background: T.card, borderRadius: 10, padding: 16, border: "1px solid " + T.bdr }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.hot, textTransform: "uppercase", letterSpacing: .4, marginBottom: 6 }}>Supervisor Escalation</div>
              <div style={{ fontSize: 12, color: T.txt, lineHeight: 1.6 }}>AI monitors WhatsApp for risk keywords. Auto nudges supervisor. Configure in Settings.</div>
            </div>
          </div>
        )}
      </div>

      {/* WhatsApp Modal */}
      {showWA && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.25)", zIndex: 20, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={function() { setShowWA(false); }}>
          <div onClick={function(e) { e.stopPropagation(); }} style={{ width: 440, background: T.white, borderRadius: 14, padding: 24, boxShadow: "0 12px 40px rgba(0,0,0,.12)" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: T.olive, marginBottom: 12 }}>AI Drafted WhatsApp Message</div>
            <div style={{ background: "#E8F5E9", borderRadius: 10, padding: 14, marginBottom: 12, fontSize: 13, color: T.txt, lineHeight: 1.7, borderLeft: "3px solid #25D366" }}>{lead.draft}</div>
            <div style={{ fontSize: 11, color: T.muted, marginBottom: 14 }}>Personalised from {lead.name}'s medical profile</div>
            <div style={{ display: "flex", gap: 8 }}>
              <div onClick={function() { setShowWA(false); }} style={{ flex: 1, background: "#25D366", color: "#fff", textAlign: "center", padding: 10, borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Send</div>
              <div onClick={function() { setShowWA(false); }} style={{ padding: "10px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, color: T.muted, cursor: "pointer", border: "1px solid " + T.bdr }}>Edit</div>
            </div>
          </div>
        </div>
      )}

      {/* Post Call Modal */}
      {showPost && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.25)", zIndex: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 480, background: T.white, borderRadius: 14, padding: 24, boxShadow: "0 12px 40px rgba(0,0,0,.12)" }}>
            {!done ? (
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: T.olive, marginBottom: 14 }}>Log Call with {lead.name}</div>
                <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
                  {dispositions.map(function(d, i) {
                    return (
                      <div key={i} onClick={function() { setDisp(d); }} style={{
                        padding: "8px 14px", borderRadius: 8, fontSize: 12, fontWeight: 500, cursor: "pointer",
                        background: disp === d ? T.olive + "12" : T.cream,
                        color: disp === d ? T.olive : T.muted,
                        border: "1px solid " + (disp === d ? T.olive + "30" : T.bdr),
                      }}>{d}</div>
                    );
                  })}
                </div>
                {disp && (
                  <div>
                    <div style={{ background: T.cream, borderRadius: 10, padding: 14, marginBottom: 14, fontSize: 12.5, color: T.txt, lineHeight: 1.7 }}>
                      <strong>AI Summary:</strong> Call with {lead.name} ({lead.concern}). {disp}. {getSummary(disp)}
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <div onClick={function() { setDone(true); }} style={{ flex: 1, background: T.olive, color: "#fff", textAlign: "center", padding: 10, borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Save</div>
                      <div onClick={function() { setShowPost(false); }} style={{ padding: "10px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, color: T.muted, cursor: "pointer", border: "1px solid " + T.bdr }}>Discard</div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ fontSize: 32, color: T.fresh, marginBottom: 8 }}>&#10003;</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: T.olive }}>Saved</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: T.olive, marginTop: 10, padding: "5px 14px", background: T.olive + "08", borderRadius: 7, display: "inline-block" }}>+5 Momentum</div>
                <div onClick={function() { setShowPost(false); setDone(false); setDisp(null); }} style={{ marginTop: 14, color: T.olive, fontWeight: 600, cursor: "pointer", fontSize: 13 }}>Done</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══ SETTINGS WITH AUTH ═══ */
function WebSettings() {
  const [authed, setAuthed] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [gemKey, setGemKey] = useState("");
  const [keySaved, setKeySaved] = useState(false);
  const [keywords, setKeywords] = useState(["cancel", "complaint", "refund", "not working", "scam", "fraud", "legal"]);
  const [newKw, setNewKw] = useState("");

  function handleLogin() {
    if (email === "abc@earlyfit.com" && pass === "Early123") {
      setError("");
      setVerifying(true);
      setTimeout(function() { setVerifying(false); setVerified(true); }, 1200);
      setTimeout(function() { setVerified(false); setAuthed(true); }, 2400);
    } else {
      setError("Invalid credentials. Check the demo credentials below.");
    }
  }

  function removeKw(i) {
    setKeywords(keywords.filter(function(_, idx) { return idx !== i; }));
  }

  function addKw() {
    var kw = newKw.trim().toLowerCase();
    if (kw && !keywords.includes(kw)) {
      setKeywords(keywords.concat([kw]));
      setNewKw("");
    }
  }

  if (!authed) {
    return (
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
        {verifying ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 48, height: 48, border: "3px solid " + T.bdr, borderTop: "3px solid " + T.olive, borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 16px" }} />
            <style>{"@keyframes spin{to{transform:rotate(360deg)}}"}</style>
            <div style={{ fontSize: 14, color: T.muted }}>Verifying credentials...</div>
          </div>
        ) : verified ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: T.fresh + "15", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", border: "2px solid " + T.fresh }}>
              <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={T.fresh} strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: T.fresh }}>Verified</div>
            <div style={{ fontSize: 12, color: T.muted, marginTop: 4 }}>Admin access granted</div>
          </div>
        ) : (
          <div style={{ width: 380 }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: T.olive + "10", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke={T.olive} strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: T.char }}>Admin Access Required</div>
              <div style={{ fontSize: 13, color: T.muted, marginTop: 6, lineHeight: 1.5 }}>Settings is restricted to authorised admins. Please verify to continue.</div>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: T.muted, textTransform: "uppercase", letterSpacing: .4, marginBottom: 4 }}>Email</div>
              <input value={email} onChange={function(e) { setEmail(e.target.value); }} placeholder="admin@earlyfit.com" style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1px solid " + T.bdr, fontSize: 13, outline: "none", fontFamily: "inherit", background: T.white, boxSizing: "border-box" }} />
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: T.muted, textTransform: "uppercase", letterSpacing: .4, marginBottom: 4 }}>Password</div>
              <input type="password" value={pass} onChange={function(e) { setPass(e.target.value); }} placeholder="Enter password" onKeyDown={function(e) { if (e.key === "Enter") handleLogin(); }} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1px solid " + T.bdr, fontSize: 13, outline: "none", fontFamily: "inherit", background: T.white, boxSizing: "border-box" }} />
            </div>
            {error && <div style={{ fontSize: 12, color: T.hot, marginBottom: 10 }}>{error}</div>}
            <div onClick={handleLogin} style={{ background: T.olive, color: "#fff", textAlign: "center", padding: 12, borderRadius: 9, fontSize: 14, fontWeight: 600, cursor: "pointer", marginTop: 4 }}>Verify and Continue</div>
            <div style={{ marginTop: 16, padding: "12px 14px", background: T.olive + "06", borderRadius: 8, border: "1px solid " + T.olive + "12" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.olive, textTransform: "uppercase", letterSpacing: .4, marginBottom: 4 }}>Demo Credentials</div>
              <div style={{ fontSize: 12, color: T.txt }}>Email: <strong>abc@earlyfit.com</strong></div>
              <div style={{ fontSize: 12, color: T.txt }}>Password: <strong>Early123</strong></div>
              <div style={{ fontSize: 10, color: T.muted, marginTop: 6 }}>For demo purposes only. Production would use SSO or OAuth.</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ flex: 1, overflow: "auto", padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: T.char }}>Settings</div>
        <span style={{ fontSize: 11, color: T.olive, background: T.olive + "10", padding: "4px 12px", borderRadius: 8, fontWeight: 600 }}>Admin Verified</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: T.card, borderRadius: 12, padding: 20, border: "1px solid " + T.bdr }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.char, marginBottom: 6 }}>Gemini API Key</div>
          <div style={{ fontSize: 12, color: T.muted, marginBottom: 12, lineHeight: 1.5 }}>Powers AI features: post call summaries, WhatsApp drafts, quality scoring. Get a free key at aistudio.google.com/apikey</div>
          <input value={gemKey} onChange={function(e) { setGemKey(e.target.value); }} placeholder="Paste your Gemini API key" style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid " + T.bdr, fontSize: 13, outline: "none", fontFamily: "inherit", background: T.cream, boxSizing: "border-box" }} />
          <div onClick={function() { if (gemKey.trim()) { setKeySaved(true); setTimeout(function() { setKeySaved(false); }, 2000); } }} style={{ marginTop: 10, background: T.olive, color: "#fff", textAlign: "center", padding: 10, borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>{keySaved ? "Key Saved" : "Save Key"}</div>
        </div>
        <div style={{ background: T.card, borderRadius: 12, padding: 20, border: "1px solid " + T.bdr }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.char, marginBottom: 6 }}>Escalation Keywords</div>
          <div style={{ fontSize: 12, color: T.muted, marginBottom: 12, lineHeight: 1.5 }}>AI monitors WhatsApp for these keywords. Click to remove, type to add.</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
            {keywords.map(function(kw, i) {
              return (
                <span key={i} onClick={function() { removeKw(i); }} style={{ fontSize: 11, color: T.hot, background: T.hot + "08", padding: "4px 12px", borderRadius: 14, border: "1px solid " + T.hot + "15", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                  {kw}<span style={{ fontSize: 14, lineHeight: 1 }}>{"\u00D7"}</span>
                </span>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <input value={newKw} onChange={function(e) { setNewKw(e.target.value); }} onKeyDown={function(e) { if (e.key === "Enter") addKw(); }} placeholder="Add keyword" style={{ flex: 1, padding: "9px 12px", borderRadius: 8, border: "1px solid " + T.bdr, fontSize: 12, outline: "none", fontFamily: "inherit", background: T.cream, boxSizing: "border-box" }} />
            <div onClick={addKw} style={{ padding: "9px 16px", borderRadius: 8, background: T.olive, color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Add</div>
          </div>
        </div>
      </div>
      <div style={{ background: T.card, borderRadius: 12, padding: 20, border: "1px solid " + T.bdr, marginTop: 16, maxWidth: 480 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: T.char, marginBottom: 6 }}>Momentum Score Weights</div>
        {[["Follow up Discipline", "25%"], ["Profiling Depth", "20%"], ["Pipeline Health", "20%"], ["Conversation Quality", "20%"], ["Consistency", "15%"]].map(function(pair, i) {
          return (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i < 4 ? "1px solid " + T.bdr : "none" }}>
              <span style={{ fontSize: 12.5, color: T.txt }}>{pair[0]}</span>
              <span style={{ fontSize: 12.5, fontWeight: 700, color: T.olive }}>{pair[1]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══ LEADS VIEW ═══ */
function LeadsView({ onSelect }) {
  const [filter, setFilter] = useState("All");
  var filtered = filter === "All" ? LEADS : LEADS.filter(function(l) { return l.status === filter; });

  return (
    <div style={{ flex: 1, padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: T.char }}>All Leads</div>
        <div style={{ display: "flex", gap: 4 }}>
          {["All", "Hot", "Warm", "Cold", "New"].map(function(s) {
            return (
              <div key={s} onClick={function() { setFilter(s); }} style={{
                padding: "5px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer",
                background: filter === s ? (s === "All" ? T.olive : SC[s]) + "15" : T.cream,
                color: filter === s ? (s === "All" ? T.olive : SC[s]) : T.muted,
                border: "1px solid " + (filter === s ? (s === "All" ? T.olive : SC[s]) + "30" : T.bdr),
              }}>{s}</div>
            );
          })}
        </div>
      </div>
      <div style={{ background: T.white, borderRadius: 10, border: "1px solid " + T.bdr, overflow: "hidden" }}>
        {filtered.map(function(lead) {
          return (
            <div key={lead.id} onClick={function() { onSelect(lead); }} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderBottom: "1px solid " + T.bdr, cursor: "pointer" }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: SC[lead.status] + "12", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: SC[lead.status], flexShrink: 0 }}>{lead.ini}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: T.char }}>{lead.name}</div>
                <div style={{ fontSize: 10.5, color: T.muted }}>{lead.concern} / {lead.city}</div>
              </div>
              <div style={{ fontSize: 11, color: T.muted, flexShrink: 0 }}>{lead.src}</div>
              <span style={{ fontSize: 9, fontWeight: 700, background: SC[lead.status] + "12", color: SC[lead.status], padding: "3px 8px", borderRadius: 6, textTransform: "uppercase", flexShrink: 0 }}>{lead.status}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══ PIPELINE VIEW ═══ */
function PipelineView({ onSelect }) {
  var stages = ["New", "Hot", "Warm", "Cold", "Prospect"];

  return (
    <div style={{ flex: 1, padding: 24, overflow: "auto" }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: T.char, marginBottom: 16 }}>Pipeline</div>
      <div style={{ display: "flex", gap: 12 }}>
        {stages.map(function(stage) {
          var leads = LEADS.filter(function(l) { return l.status === stage; });
          return (
            <div key={stage} style={{ flex: 1, minWidth: 170 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10, padding: "6px 10px", background: SC[stage] + "10", borderRadius: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: SC[stage] }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: SC[stage] }}>{stage}</span>
                <span style={{ fontSize: 10, color: T.muted, marginLeft: "auto" }}>{leads.length}</span>
              </div>
              {leads.map(function(lead) {
                return (
                  <div key={lead.id} onClick={function() { onSelect(lead); }} style={{ background: T.white, borderRadius: 9, padding: "10px 12px", marginBottom: 8, border: "1px solid " + T.bdr, cursor: "pointer" }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: T.char }}>{lead.name}</div>
                    <div style={{ fontSize: 10, color: T.muted, marginTop: 2 }}>{lead.concern}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
                      <span style={{ fontSize: 10, color: T.light }}>{lead.last}</span>
                      <span style={{ fontSize: 14, fontWeight: 800, color: lead.imp >= 85 ? T.olive : T.warm }}>{lead.imp}</span>
                    </div>
                  </div>
                );
              })}
              {leads.length === 0 && <div style={{ padding: 16, textAlign: "center", color: T.light, fontSize: 11 }}>No leads</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══ DASHBOARD VIEW ═══ */
function DashboardView({ selected, onSelect }) {
  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
      <div style={{ width: 380, flexShrink: 0, display: "flex", flexDirection: "column", borderRight: "1px solid " + T.bdr }}>
        <div style={{ padding: "14px 16px", borderBottom: "1px solid " + T.bdr }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: T.char }}>Today's Actions</div>
          <div style={{ fontSize: 11, color: T.muted }}>AI prioritised by conversion impact</div>
        </div>
        <div style={{ padding: "8px 16px", background: T.olive + "05", borderBottom: "1px solid " + T.bdr, fontSize: 11.5, color: T.txt }}>
          <strong>2 cold leads you nurtured moved to Warm.</strong> Patience pays off.
        </div>
        <div style={{ flex: 1, overflow: "auto" }}>
          {LEADS.map(function(lead) {
            var isActive = selected && selected.id === lead.id;
            return (
              <div key={lead.id} onClick={function() { onSelect(lead); }} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "11px 16px",
                background: isActive ? T.olive + "08" : T.white, cursor: "pointer",
                borderBottom: "1px solid " + T.bdr,
                borderLeft: isActive ? "3px solid " + T.olive : "3px solid transparent",
              }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: SC[lead.status] + "12", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: SC[lead.status], flexShrink: 0 }}>{lead.ini}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: T.char }}>{lead.name}</span>
                    <span style={{ fontSize: 8, fontWeight: 700, background: SC[lead.status] + "12", color: SC[lead.status], padding: "2px 6px", borderRadius: 6, textTransform: "uppercase" }}>{lead.status}</span>
                  </div>
                  <div style={{ fontSize: 10.5, color: T.muted, marginTop: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lead.concern}</div>
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, color: lead.imp >= 85 ? T.olive : T.warm, lineHeight: 1, flexShrink: 0 }}>{lead.imp}</div>
                <div style={{ fontSize: 10.5, fontWeight: 600, color: T.olive, background: T.olive + "0A", padding: "4px 10px", borderRadius: 14, flexShrink: 0 }}>{lead.act}</div>
              </div>
            );
          })}
        </div>
      </div>
      <DetailPanel lead={selected} />
    </div>
  );
}

/* ═══ MAIN APP ═══ */
export default function App() {
  const [page, setPage] = useState("dashboard");
  const [selected, setSelected] = useState(null);

  function selectAndGo(lead) {
    setSelected(lead);
    setPage("dashboard");
  }

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", background: T.bg }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&display=swap" rel="stylesheet" />
      <Sidebar active={page} onNav={setPage} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <StatsBar />
        {page === "dashboard" && <DashboardView selected={selected} onSelect={setSelected} />}
        {page === "leads" && <LeadsView onSelect={selectAndGo} />}
        {page === "pipeline" && <PipelineView onSelect={selectAndGo} />}
        {page === "settings" && <WebSettings />}
      </div>
    </div>
  );
}
