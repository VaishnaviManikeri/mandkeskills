import { useRef } from "react";

const PAYMENT_LINK = "https://rzp.io/rzp/CounterAttack";

// ── Inline SVG icon primitives ──────────────────────────────────────────────
const Icon = ({ d, size = 16, stroke = "currentColor", strokeWidth = 2.2, children, viewBox = "0 0 24 24" }) => (
  <svg width={size} height={size} viewBox={viewBox} fill="none" stroke={stroke}
    strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
    style={{ flexShrink: 0 }}>
    {d ? <path d={d} /> : children}
  </svg>
);

const CalendarIcon = (p) => <Icon {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></Icon>;
const ArrowRight   = (p) => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></Icon>;
const ChevronDown  = (p) => <Icon {...p}><polyline points="6 9 12 15 18 9"/></Icon>;
const ShieldCheck  = (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></Icon>;
const Users        = (p) => <Icon {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></Icon>;
const Monitor      = (p) => <Icon {...p}><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></Icon>;
const SearchIcon   = (p) => <Icon {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></Icon>;
const UserIcon     = (p) => <Icon {...p}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></Icon>;
const MailIcon     = (p) => <Icon {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2 10 12 14 22 10"/></Icon>;
const LockIcon     = (p) => <Icon {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></Icon>;
const ShieldIcon   = (p) => <Icon {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>;
const AlertCircle  = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></Icon>;
const CheckCircle  = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></Icon>;
const ClockIcon    = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></Icon>;
const VideoIcon    = (p) => <Icon {...p}><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></Icon>;
const PlusCircle   = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></Icon>;
const MessageIcon  = (p) => <Icon {...p} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>;
const PlayCircle   = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></Icon>;
const AwardIcon    = (p) => <Icon {...p}><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/><polyline points="9 12 11 14 15 10"/></Icon>;

// ── Styles object with responsive design ──────────────────────────────────
const S = {
  page: {
    fontFamily: "'Montserrat', sans-serif",
    background: "#ffffff",
    color: "#111",
    width: "100%",
    overflowX: "hidden",
  },
  // HERO - Removed background color
  hero: {
    background: "transparent",
    color: "#111",
    padding: "clamp(32px, 5vw, 52px) clamp(16px, 4vw, 40px) clamp(32px, 5vw, 48px)",
    position: "relative",
    overflow: "hidden",
  },
  heroInner: {
    maxWidth: 960,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: "clamp(20px, 4vw, 40px)",
    flexWrap: "wrap",
  },
  heroLeft: {
    flex: "1 1 280px",
    position: "relative",
    zIndex: 1,
    width: "100%",
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: "#e8783a",
    fontSize: "clamp(10px, 1.2vw, 11px)",
    fontWeight: 700,
    letterSpacing: "3.5px",
    textTransform: "uppercase",
    marginBottom: 14,
    flexWrap: "wrap",
  },
  eyebrowLine: {
    flex: 1,
    height: 1,
    background: "#e8783a",
    maxWidth: 40,
    minWidth: 20,
  },
  heroTitle: {
    fontSize: "clamp(32px, 8vw, 64px)",
    fontWeight: 900,
    lineHeight: 1,
    textTransform: "uppercase",
    letterSpacing: "-1.5px",
    marginBottom: 16,
    wordBreak: "break-word",
    color: "#0b1f4f",
  },
  aOrange: { color: "#e8783a" },
  heroSubtitle: {
    background: "#e8783a",
    display: "inline-block",
    padding: "clamp(6px, 1vw, 9px) clamp(14px, 2vw, 22px)",
    borderRadius: 4,
    fontWeight: 800,
    fontSize: "clamp(10px, 1.2vw, 12px)",
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 22,
    wordBreak: "break-word",
    color: "#fff",
  },
  heroTagline: {
    fontWeight: 800,
    fontSize: "clamp(13px, 1.8vw, 15px)",
    letterSpacing: 1,
    marginBottom: 14,
    color: "#0b1f4f",
    wordBreak: "break-word",
  },
  cOrange: { color: "#e8783a" },
  cBlue:   { color: "#1a4fc4" },
  heroDesc: {
    color: "#555",
    fontSize: "clamp(13px, 1.5vw, 14px)",
    lineHeight: 1.75,
    marginBottom: 30,
    fontWeight: 500,
    wordBreak: "break-word",
  },
  boldO: { color: "#e8783a", fontWeight: 800 },
  boldB: { color: "#1a4fc4", fontWeight: 800 },
  btnGroup: {
    display: "flex",
    gap: "clamp(10px, 1.5vw, 14px)",
    flexWrap: "wrap",
    width: "100%",
  },
  btnPrimary: {
    background: "#e8783a",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "clamp(12px, 1.5vw, 14px) clamp(20px, 3vw, 28px)",
    fontWeight: 800,
    fontSize: "clamp(11px, 1.2vw, 13px)",
    cursor: "pointer",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    fontFamily: "'Montserrat',sans-serif",
    textDecoration: "none",
    transition: "background .18s,transform .12s",
    flex: "1 1 auto",
    justifyContent: "center",
    minWidth: "200px",
  },
  btnOutline: {
    background: "transparent",
    color: "#0b1f4f",
    border: "2px solid #0b1f4f",
    borderRadius: 6,
    padding: "clamp(12px, 1.5vw, 14px) clamp(20px, 3vw, 28px)",
    fontWeight: 700,
    fontSize: "clamp(11px, 1.2vw, 13px)",
    cursor: "pointer",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    fontFamily: "'Montserrat',sans-serif",
    textDecoration: "none",
    flex: "1 1 auto",
    justifyContent: "center",
    minWidth: "200px",
  },
  heroBadges: {
    display: "flex",
    gap: "clamp(12px, 2vw, 24px)",
    marginTop: 28,
    flexWrap: "wrap"
  },
  badge: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    fontSize: "clamp(11px, 1.2vw, 12px)",
    color: "#555",
    fontWeight: 600
  },
  heroRight: {
    flex: "0 0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "210px",
    margin: "0 auto",
  },
  shieldWrap: {
    position: "relative",
    width: "clamp(150px, 25vw, 200px)",
    height: "clamp(165px, 27vw, 220px)"
  },
  shieldGlow: {
    position: "absolute",
    inset: "-30px",
    borderRadius: "50%",
    background: "radial-gradient(circle,rgba(75,163,245,0.18) 0%,transparent 68%)",
  },
  shieldRing: {
    position: "absolute",
    inset: "-15px",
    borderRadius: "50%",
    border: "1px solid rgba(75,163,245,0.15)",
  },

  // CARDS
  cardsSection: {
    maxWidth: 960,
    margin: "clamp(20px, 3vw, 32px) auto",
    padding: "0 clamp(16px, 4vw, 40px)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "clamp(16px, 2vw, 20px)",
  },
  cardDark: {
    background: "#0b1f4f",
    borderRadius: 12,
    padding: "clamp(20px, 3vw, 30px)",
    color: "#fff"
  },
  cardOrange: {
    background: "#e8783a",
    borderRadius: 12,
    padding: "clamp(20px, 3vw, 30px)",
    color: "#fff"
  },
  cardHead: {
    display: "flex",
    alignItems: "center",
    gap: 13,
    marginBottom: 10
  },
  cardIconWrap: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    flexShrink: 0,
    background: "rgba(255,255,255,0.13)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: "clamp(14px, 1.8vw, 16px)",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: 0.5
  },
  cardSub: {
    fontSize: "clamp(11px, 1.2vw, 12px)",
    opacity: 0.7,
    marginBottom: 16,
    fontWeight: 600,
    letterSpacing: 0.3
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "clamp(8px, 1.5vw, 12px)"
  },
  cardItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 9,
    fontSize: "clamp(11px, 1.2vw, 12.5px)",
    lineHeight: 1.45,
    fontWeight: 600,
    opacity: 0.95,
    wordBreak: "break-word",
  },

  // STRIP
  stripSection: {
    maxWidth: 960,
    margin: "0 auto clamp(20px, 3vw, 32px)",
    padding: "0 clamp(16px, 4vw, 40px)"
  },
  stripInner: {
    background: "#fff",
    borderRadius: 12,
    padding: "clamp(20px, 3vw, 26px) clamp(20px, 4vw, 36px)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "clamp(16px, 3vw, 20px)",
    boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
  },
  stripItem: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(10px, 2vw, 14px)"
  },
  stripIconWrap: {
    width: "clamp(44px, 6vw, 52px)",
    height: "clamp(44px, 6vw, 52px)",
    borderRadius: "50%",
    border: "2px solid #dde8f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f0f6ff",
    flexShrink: 0,
  },
  stripTop: {
    fontSize: "clamp(9px, 1vw, 10px)",
    color: "#7a90b0",
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 3
  },
  stripMain: {
    fontSize: "clamp(16px, 2.5vw, 20px)",
    fontWeight: 900,
    color: "#0b1f4f"
  },
  stripSub: {
    fontSize: "clamp(10px, 1vw, 11px)",
    color: "#7a90b0",
    fontWeight: 600,
    marginTop: 1
  },
  stripDivider: {
    width: 1,
    height: "clamp(40px, 6vw, 50px)",
    background: "#dde8f8",
    display: "block",
  },

  // TWO COL
  twoCol: {
    maxWidth: 960,
    margin: "0 auto clamp(24px, 4vw, 36px)",
    padding: "0 clamp(16px, 4vw, 40px)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "clamp(30px, 5vw, 40px)",
  },
  sectionTitle: {
    fontSize: "clamp(16px, 2vw, 18px)",
    fontWeight: 900,
    color: "#0b1f4f",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 6
  },
  underlineBar: {
    height: 3,
    width: 50,
    background: "#e8783a",
    borderRadius: 2,
    marginBottom: 22
  },
  learnList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "clamp(12px, 1.5vw, 14px)"
  },
  learnItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    fontSize: "clamp(12px, 1.4vw, 13.5px)",
    color: "#333",
    lineHeight: 1.55,
    fontWeight: 500,
    wordBreak: "break-word",
  },

  instructorInner: {
    display: "flex",
    gap: "clamp(14px, 2vw, 18px)",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  avatar: {
    width: "clamp(70px, 10vw, 84px)",
    height: "clamp(70px, 10vw, 84px)",
    borderRadius: "50%",
    flexShrink: 0,
    background: "linear-gradient(135deg,#1a4fc4,#0b1f4f)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "3px solid #e8783a",
    overflow: "hidden",
  },
  instName: {
    fontSize: "clamp(15px, 1.8vw, 17px)",
    fontWeight: 900,
    color: "#0b1f4f",
    marginBottom: 4
  },
  instRole: {
    fontSize: "clamp(12px, 1.3vw, 13px)",
    fontWeight: 700,
    color: "#e8783a",
    marginBottom: 10
  },
  instBio: {
    fontSize: "clamp(11px, 1.2vw, 12.5px)",
    color: "#555",
    lineHeight: 1.65,
    marginBottom: 14,
    fontWeight: 500,
    wordBreak: "break-word",
  },
  instBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    background: "#f0f6ff",
    borderRadius: 20,
    padding: "6px 14px",
    fontSize: "clamp(11px, 1.2vw, 12px)",
    fontWeight: 700,
    color: "#0b1f4f",
    border: "1px solid #dde8f8",
    flexWrap: "wrap",
  },

  // PRICING - Removed background color
  pricing: {
    background: "transparent",
    padding: "clamp(32px, 5vw, 44px) clamp(16px, 4vw, 40px)"
  },
  pricingInner: {
    maxWidth: 960,
    margin: "0 auto",
    textAlign: "center"
  },
  pricingH: {
    color: "#0b1f4f",
    fontSize: "clamp(20px, 3vw, 26px)",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 7
  },
  pricingSub: {
    color: "#555",
    fontSize: "clamp(13px, 1.5vw, 14px)",
    marginBottom: 30,
    fontWeight: 500
  },
  pricingRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "clamp(20px, 3vw, 28px)",
    flexWrap: "wrap"
  },
  priceBox: {
    background: "#0b1f4f",
    borderRadius: 12,
    padding: "clamp(18px, 2.5vw, 22px) clamp(28px, 5vw, 40px)",
    border: "1.5px solid #0b1f4f",
    minWidth: "120px",
  },
  priceLabel: {
    color: "#e8783a",
    fontSize: "clamp(10px, 1vw, 11px)",
    fontWeight: 800,
    letterSpacing: 2.5,
    textTransform: "uppercase",
    marginBottom: 5
  },
  priceAmount: {
    color: "#e8783a",
    fontSize: "clamp(40px, 6vw, 56px)",
    fontWeight: 900,
    lineHeight: 1
  },
  pricingCtaCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    width: "100%",
    maxWidth: "400px",
  },
  btnBookBig: {
    background: "#e8783a",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "clamp(14px, 2vw, 18px) clamp(32px, 5vw, 48px)",
    fontWeight: 900,
    fontSize: "clamp(14px, 1.8vw, 16px)",
    cursor: "pointer",
    letterSpacing: 1,
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    gap: 11,
    boxShadow: "0 6px 24px rgba(232,120,58,0.45)",
    fontFamily: "'Montserrat',sans-serif",
    textDecoration: "none",
    width: "100%",
    justifyContent: "center",
  },
  secureNote: {
    color: "#555",
    fontSize: "clamp(11px, 1.2vw, 12px)",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: 6,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  featuresStrip: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "clamp(20px, 3vw, 32px)",
    marginTop: "clamp(24px, 4vw, 34px)",
    paddingTop: "clamp(20px, 3vw, 26px)",
    borderTop: "1px solid #e0e0e0",
  },
  feat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 7,
    flex: "0 1 auto",
    minWidth: "80px",
  },
  featIcon: {
    width: "clamp(38px, 5vw, 44px)",
    height: "clamp(38px, 5vw, 44px)",
    borderRadius: "50%",
    background: "#f0f6ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  featLabel: {
    color: "#555",
    fontSize: "clamp(10px, 1vw, 11px)",
    fontWeight: 700,
    textAlign: "center",
    maxWidth: "88px",
    lineHeight: 1.35,
    letterSpacing: 0.2,
    wordBreak: "break-word",
  },
};

// ── Shield SVG ──────────────────────────────────────────────────────────────
function ShieldIllustration() {
  return (
    <div style={S.shieldWrap}>
      <div style={S.shieldGlow} />
      <div style={S.shieldRing} />
      <svg viewBox="0 0 200 230" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shieldL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"  stopColor="#1a4fc4" />
            <stop offset="50%" stopColor="#1a4fc4" />
            <stop offset="50%" stopColor="#e8783a" />
            <stop offset="100%" stopColor="#e8783a" />
          </linearGradient>
          <radialGradient id="glowR" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(75,163,245,0.22)" />
            <stop offset="100%" stopColor="rgba(75,163,245,0)" />
          </radialGradient>
          <filter id="sh">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.3)" />
          </filter>
        </defs>
        <circle cx="100" cy="115" r="95" fill="url(#glowR)" />
        <path d="M100 14 L178 50 L178 116 C178 162 140 194 100 210 C60 194 22 162 22 116 L22 50 Z"
              fill="url(#shieldL)" filter="url(#sh)" />
        <path d="M100 14 L178 50 L178 116 C178 162 140 194 100 210 C60 194 22 162 22 116 L22 50 Z"
              fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" />
        <line x1="100" y1="14" x2="100" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <circle cx="100" cy="96" r="24" fill="rgba(255,255,255,0.9)" />
        <path d="M58 158 Q58 130 100 130 Q142 130 142 158" fill="rgba(255,255,255,0.9)" />
      </svg>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────
export default function Webinar() {
  const go = () => window.open(PAYMENT_LINK, "_blank");

  const protectItems = [
    { icon: <UserIcon  size={14} stroke="#4ba3f5" />, label: "Deepfake Nudes" },
    { icon: <MailIcon  size={14} stroke="#4ba3f5" />, label: "Phishing & Scams" },
    { icon: <LockIcon  size={14} stroke="#4ba3f5" />, label: "Identity Theft" },
    { icon: <ShieldIcon size={14} stroke="#4ba3f5" />, label: "Account Takeover" },
    { icon: <AlertCircle size={14} stroke="#4ba3f5" />, label: "Online Harassment" },
  ];
  const investigateItems = [
    "Check if your profile has been hacked",
    "Secure and recover your accounts",
    "Detect if someone is stalking you",
    "Know your rights and report abuse",
    "Trace suspicious activity",
  ];
  const learnItems = [
    "Understand how online attacks happen",
    "Protect your personal data and digital identity",
    "Detect hacking, stalking and suspicious activity",
    "Use tools and techniques used by professionals",
    "Take action and report cyber crimes",
    "Stay safe and secure in the digital world",
  ];
  const features = [
    { icon: <VideoIcon  size={20} stroke="#1a4fc4" />, label: "Live Interactive Session" },
    { icon: <PlusCircle size={20} stroke="#1a4fc4" />, label: "Practical Insights" },
    { icon: <MessageIcon size={20} stroke="#1a4fc4" />, label: "Q&A Session" },
    { icon: <PlayCircle size={20} stroke="#1a4fc4" />, label: "Recording Access (Limited Time)" },
    { icon: <AwardIcon  size={20} stroke="#1a4fc4" />, label: "Certificate Included" },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div style={S.page}>

        {/* ── HERO ── */}
        <section style={S.hero}>
          <div style={S.heroInner}>
            <div style={S.heroLeft}>
              <div style={S.eyebrow}>
                <span style={S.eyebrowLine} />
                MILES PRESENTS
                <span style={S.eyebrowLine} />
              </div>
              <h1 style={S.heroTitle}>
                COUNTER <span style={S.aOrange}>A</span>TTACK
              </h1>
              <div style={S.heroSubtitle}>ONLINE SAFETY &amp; INVESTIGATION WORKSHOP</div>
              <p style={S.heroTagline}>
                LEARN.&nbsp;
                <span style={S.cOrange}>PROTECT.</span>&nbsp;
                <span style={S.cBlue}>INVESTIGATE.</span>&nbsp;
                TAKE CONTROL.
              </p>
              <p style={S.heroDesc}>
                This workshop will teach you how to{" "}
                <strong style={S.boldO}>PROTECT YOURSELF</strong> from online attacks and{" "}
                <strong style={S.boldB}>INVESTIGATE</strong> if anyone has hacked your profile or is stalking you.
              </p>
              <div style={S.btnGroup}>
                <a href={PAYMENT_LINK} target="_blank" rel="noreferrer" style={S.btnPrimary}>
                  <CalendarIcon size={16} />
                  BOOK YOUR SEAT NOW
                  <ArrowRight size={16} />
                </a>
                <a href={PAYMENT_LINK} target="_blank" rel="noreferrer" style={S.btnOutline}>
                  VIEW WORKSHOP DETAILS
                  <ChevronDown size={16} />
                </a>
              </div>
              <div style={S.heroBadges}>
                <div style={S.badge}><ShieldCheck size={15} stroke="#1a4fc4" /> Beginner Friendly</div>
                <div style={S.badge}><Users size={15} stroke="#1a4fc4" /> All Ages Welcome</div>
                <div style={S.badge}><Monitor size={15} stroke="#1a4fc4" /> Certificate of Participation</div>
              </div>
            </div>
            <div style={S.heroRight}><ShieldIllustration /></div>
          </div>
        </section>

        {/* ── FEATURE CARDS ── */}
        <div style={S.cardsSection}>
          <div style={S.cardDark}>
            <div style={S.cardHead}>
              <div style={S.cardIconWrap}><ShieldCheck size={20} stroke="#4ba3f5" /></div>
              <div style={S.cardTitle}>PROTECT YOURSELF</div>
            </div>
            <p style={S.cardSub}>Learn how to stay safe from:</p>
            <div style={S.cardGrid}>
              {protectItems.map((item) => (
                <div key={item.label} style={S.cardItem}>
                  {item.icon} {item.label}
                </div>
              ))}
            </div>
          </div>

          <div style={S.cardOrange}>
            <div style={S.cardHead}>
              <div style={S.cardIconWrap}><SearchIcon size={20} stroke="#fff" /></div>
              <div style={S.cardTitle}>INVESTIGATE &amp; TAKE ACTION</div>
            </div>
            <p style={S.cardSub}>Learn how to:</p>
            <div style={S.cardGrid}>
              {investigateItems.map((label) => (
                <div key={label} style={S.cardItem}>
                  <CheckCircle size={14} stroke="#fff" strokeWidth={2.5} style={{ marginTop: 2 }} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── WHO / DATE / DURATION ── */}
        <div style={S.stripSection}>
          <div style={S.stripInner}>
            <div style={S.stripItem}>
              <div style={S.stripIconWrap}><Users size={24} stroke="#1a4fc4" strokeWidth={2} /></div>
              <div>
                <div style={S.stripTop}>WHO SHOULD JOIN?</div>
                <div style={S.stripMain}>ALL NETIZENS</div>
                <div style={S.stripSub}>All ages welcome!</div>
              </div>
            </div>
            <div style={S.stripDivider} />
            <div style={S.stripItem}>
              <div style={S.stripIconWrap}><CalendarIcon size={24} stroke="#1a4fc4" strokeWidth={2} /></div>
              <div>
                <div style={S.stripTop}>DATE</div>
                <div style={S.stripMain}>5<sup style={{ fontSize: 12 }}>TH</sup> JULY</div>
              </div>
            </div>
            <div style={S.stripDivider} />
            <div style={S.stripItem}>
              <div style={S.stripIconWrap}><ClockIcon size={24} stroke="#1a4fc4" strokeWidth={2} /></div>
              <div>
                <div style={S.stripTop}>DURATION</div>
                <div style={S.stripMain}>120 MINS</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── LEARN + INSTRUCTOR ── */}
        <div style={S.twoCol}>
          <div>
            <div style={S.sectionTitle}>WHAT YOU WILL LEARN</div>
            <div style={S.underlineBar} />
            <ul style={S.learnList}>
              {learnItems.map((item) => (
                <li key={item} style={S.learnItem}>
                  <CheckCircle size={17} stroke="#e8783a" strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={S.sectionTitle}>YOUR INSTRUCTOR</div>
            <div style={S.underlineBar} />
            <div style={S.instructorInner}>
              <div style={S.avatar}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="22" r="13" fill="rgba(255,255,255,0.88)" />
                  <path d="M6 56 C6 40 54 40 54 56" fill="rgba(255,255,255,0.88)" />
                </svg>
              </div>
              <div>
                <div style={S.instName}>Prathamesh Mandke</div>
                <div style={S.instRole}>Cyber Intelligence Expert</div>
                <div style={S.instBio}>
                  Founder of MILES. Cybersecurity professional with years of experience in investigation, digital forensics and cyber safety training.
                </div>
                <div style={S.instBadge}>
                  <Users size={14} stroke="#1a4fc4" strokeWidth={2.2} />
                  Trained 1000+ Students
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── PRICING BANNER ── */}
        <section style={S.pricing}>
          <div style={S.pricingInner}>
            <h2 style={S.pricingH}>LIMITED SEATS. HIGH IMPACT.</h2>
            <p style={S.pricingSub}>Reserve your seat now and take control of your digital life.</p>

            <div style={S.pricingRow}>
              <div style={S.priceBox}>
                <div style={S.priceLabel}>WORKSHOP FEE</div>
                <div style={S.priceAmount}>₹125</div>
              </div>
              <div style={S.pricingCtaCol}>
                <a href={PAYMENT_LINK} target="_blank" rel="noreferrer" style={S.btnBookBig}>
                  BOOK YOUR SEAT NOW
                  <ArrowRight size={18} />
                </a>
                <div style={S.secureNote}>
                  <LockIcon size={13} stroke="#555" strokeWidth={2.2} />
                  Secure Payment | Instant Confirmation
                </div>
              </div>
            </div>

            <div style={S.featuresStrip}>
              {features.map((f) => (
                <div key={f.label} style={S.feat}>
                  <div style={S.featIcon}>{f.icon}</div>
                  <span style={S.featLabel}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}