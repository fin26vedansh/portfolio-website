import "./styles/WorkIllustration.css";

export type WorkVariant =
  | "ritual"
  | "salon"
  | "shelf"
  | "compass"
  | "signal"
  | "loop";

const frame = (
  <rect x="1" y="1" width="418" height="258" rx="12" className="wi-frame" />
);

/* 01 - What beauty means: a lit mirror, bulbs chasing round it */
const Ritual = () => (
  <svg viewBox="0 0 420 260" className="wi-svg" role="img" aria-label="A lit vanity mirror">
    {frame}
    <defs>
      <radialGradient id="wi-mirror-glow" cx="50%" cy="42%" r="62%">
        <stop offset="0%" stopColor="#c2a4ff" stopOpacity="0.34" />
        <stop offset="100%" stopColor="#c2a4ff" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect x="150" y="46" width="120" height="172" rx="60" className="wi-mirror" />
    <rect
      x="150"
      y="46"
      width="120"
      height="172"
      rx="60"
      fill="url(#wi-mirror-glow)"
    />
    <line x1="176" y1="112" x2="244" y2="112" className="wi-sheen" />
    <line x1="176" y1="130" x2="228" y2="130" className="wi-sheen" />
    {[...Array(14)].map((_, i) => {
      const a = (i / 14) * Math.PI * 2 - Math.PI / 2;
      return (
        <circle
          key={i}
          cx={210 + Math.cos(a) * 100}
          cy={132 + Math.sin(a) * 110}
          r="4.5"
          className="wi-bulb"
          style={{ animationDelay: `${i * 0.14}s` }}
        />
      );
    })}
    <text x="26" y="34" className="wi-mono wi-screen-dim">
      TEN QUIET MINUTES
    </text>
  </svg>
);

/* 02 - The brand: a salon-only bottle filling, stamped and sealed */
const Salon = () => (
  <svg viewBox="0 0 420 260" className="wi-svg" role="img" aria-label="A salon-only professional haircare bottle">
    {frame}
    <defs>
      <clipPath id="wi-bottle-clip">
        <path d="M 152 96 C 152 84 164 80 164 68 L 164 54 L 204 54 L 204 68 C 204 80 216 84 216 96 L 216 214 C 216 222 210 226 202 226 L 166 226 C 158 226 152 222 152 214 Z" />
      </clipPath>
    </defs>
    <g className="wi-pipette">
      <line x1="184" y1="18" x2="184" y2="40" className="wi-axis" />
      <circle cx="184" cy="46" r="4" className="wi-droplet" />
    </g>
    <path
      d="M 152 96 C 152 84 164 80 164 68 L 164 54 L 204 54 L 204 68 C 204 80 216 84 216 96 L 216 214 C 216 222 210 226 202 226 L 166 226 C 158 226 152 222 152 214 Z"
      className="wi-bottle"
    />
    <g clipPath="url(#wi-bottle-clip)">
      <rect x="150" y="106" width="70" height="122" className="wi-liquid" />
    </g>
    <rect x="164" y="140" width="40" height="3" rx="1.5" className="wi-bottle-label" />
    <rect x="164" y="150" width="28" height="3" rx="1.5" className="wi-bottle-label" />
    <g className="wi-seal">
      <circle cx="312" cy="104" r="40" className="wi-seal-ring" />
      <circle cx="312" cy="104" r="32" className="wi-seal-ring wi-seal-inner" />
      <text x="312" y="100" className="wi-mono wi-seal-text" textAnchor="middle">
        SALON
      </text>
      <text x="312" y="116" className="wi-mono wi-seal-text" textAnchor="middle">
        ONLY
      </text>
    </g>
    <text x="26" y="34" className="wi-mono wi-screen-dim">
      SINCE 1909
    </text>
    <text x="272" y="184" className="wi-mono wi-screen-dim">
      SOLD THROUGH
    </text>
    <text x="272" y="200" className="wi-mono wi-screen-label">
      SOMEONE WHO
    </text>
    <text x="272" y="216" className="wi-mono wi-screen-label">
      BELIEVES IT
    </text>
  </svg>
);

/* 03 - Memorable experience: the shelf, and the notes app that judges it */
const Shelf = () => {
  const vials = [
    { x: 34, w: 20, h: 40 },
    { x: 62, w: 24, h: 62 },
    { x: 94, w: 18, h: 34 },
    { x: 120, w: 26, h: 54 },
    { x: 154, w: 20, h: 70 },
    { x: 182, w: 24, h: 44 },
    { x: 214, w: 18, h: 58 },
  ];
  const notes = [
    { ok: true, w: 62 },
    { ok: false, w: 48 },
    { ok: true, w: 70 },
    { ok: false, w: 54 },
    { ok: true, w: 44 },
  ];
  return (
    <svg viewBox="0 0 420 260" className="wi-svg" role="img" aria-label="A shelf of skincare bottles beside a notes list">
      {frame}
      <text x="26" y="34" className="wi-mono wi-screen-dim">
        TRIAL &amp; ERROR
      </text>
      {vials.map((v, i) => (
        <g key={v.x}>
          <rect
            x={v.x}
            y={206 - v.h}
            width={v.w}
            height={v.h}
            rx="4"
            className="wi-vial"
            style={{ animationDelay: `${0.2 + i * 0.09}s` }}
          />
          <rect
            x={v.x + v.w / 2 - 4}
            y={200 - v.h}
            width="8"
            height="8"
            rx="2"
            className="wi-vial-cap"
            style={{ animationDelay: `${0.2 + i * 0.09}s` }}
          />
        </g>
      ))}
      <line x1="26" y1="207" x2="244" y2="207" className="wi-shelf-line" />
      <rect x="272" y="52" width="120" height="164" rx="8" className="wi-note" />
      {notes.map((n, i) => (
        <g
          key={i}
          className="wi-note-row"
          style={{ animationDelay: `${0.7 + i * 0.18}s` }}
        >
          <text
            x="288"
            y={86 + i * 30}
            className={`wi-mono wi-note-mark ${n.ok ? "wi-ok" : "wi-no"}`}
          >
            {n.ok ? "✓" : "✕"}
          </text>
          <rect
            x="304"
            y={78 + i * 30}
            width={n.w}
            height="5"
            rx="2.5"
            className="wi-note-line"
          />
        </g>
      ))}
    </svg>
  );
};

/* 04 - What drives me: a route with pins, and a cube still scrambled */
const Compass = () => (
  <svg viewBox="0 0 420 260" className="wi-svg" role="img" aria-label="A travel route beside an unsolved Rubik's cube">
    {frame}
    <text x="26" y="34" className="wi-mono wi-screen-dim">
      PATTERNS I CHASE
    </text>
    <path
      d="M 40 190 C 96 190 84 108 140 104 C 190 100 200 62 258 62"
      className="wi-route"
    />
    {[
      [40, 190],
      [140, 104],
      [258, 62],
    ].map(([x, y], i) => (
      <g
        key={i}
        className="wi-pin"
        style={{ animationDelay: `${0.9 + i * 0.35}s` }}
      >
        <path
          d={`M ${x} ${y + 6} L ${x - 7} ${y - 6} A 8 8 0 1 1 ${x + 7} ${y - 6} Z`}
          className="wi-pin-body"
        />
        <circle cx={x} cy={y - 8} r="3" className="wi-pin-dot" />
      </g>
    ))}
    {[...Array(9)].map((_, i) => (
      <rect
        key={i}
        x={286 + (i % 3) * 34}
        y={140 + Math.floor(i / 3) * 34}
        width="28"
        height="28"
        rx="4"
        className="wi-tile"
        style={{ animationDelay: `${i * 0.22}s` }}
      />
    ))}
    <text x="286" y="248" className="wi-mono wi-screen-dim">
      STILL SCRAMBLED
    </text>
  </svg>
);

/* 05 - Strengths: noise resolving into signal */
const Signal = () => (
  <svg viewBox="0 0 420 260" className="wi-svg" role="img" aria-label="A noisy waveform resolving into a clean line">
    {frame}
    <text x="30" y="42" className="wi-mono wi-screen-dim">
      NOISE
    </text>
    <text x="390" y="42" className="wi-mono wi-screen-label" textAnchor="end">
      SIGNAL
    </text>
    <polyline
      points="30,104 40,78 50,122 60,86 70,126 80,92 90,70 100,118 110,88 120,128 130,82 140,112 150,74 160,122 170,94 180,114 190,84 200,106"
      className="wi-noise"
    />
    <line x1="206" y1="58" x2="206" y2="146" className="wi-divider" />
    <path
      d="M 212 106 C 256 106 266 78 310 78 C 352 78 360 98 390 96"
      className="wi-clean"
    />
    {[
      "READING THE ROOM",
      "SYSTEMS THAT OUTLIVE ME",
      "FINISHING THE DETAIL",
    ].map((label, i) => (
      <g
        key={label}
        className="wi-pip"
        style={{ animationDelay: `${1.1 + i * 0.18}s` }}
      >
        <circle cx="40" cy={182 + i * 26} r="4" className="wi-pip-dot" />
        <text x="56" y={186 + i * 26} className="wi-mono wi-pip-text">
          {label}
        </text>
      </g>
    ))}
  </svg>
);

/* 06 - Weakness: the loop, and the way out of it */
const Loop = () => (
  <svg viewBox="0 0 420 260" className="wi-svg" role="img" aria-label="A repeating loop with an arrow breaking out of it">
    {frame}
    <text x="26" y="34" className="wi-mono wi-screen-dim">
      THE LOOP
    </text>
    <circle cx="132" cy="136" r="54" className="wi-loop" />
    <polygon points="126,78 142,84 126,90" className="wi-loop-head" />
    <text x="132" y="222" className="wi-mono wi-screen-dim" textAnchor="middle">
      OVERANALYSE
    </text>
    <g className="wi-escape">
      <line x1="192" y1="136" x2="330" y2="136" className="wi-escape-line" />
      <polygon points="326,128 348,136 326,144" className="wi-escape-head" />
      <text x="300" y="116" className="wi-mono wi-screen-label" textAnchor="middle">
        SHIP IT
      </text>
    </g>
  </svg>
);

const variants: Record<WorkVariant, () => JSX.Element> = {
  ritual: Ritual,
  salon: Salon,
  shelf: Shelf,
  compass: Compass,
  signal: Signal,
  loop: Loop,
};

const WorkIllustration = ({ variant }: { variant: WorkVariant }) => {
  const Art = variants[variant];
  return (
    <div className="work-image">
      <div className="work-illustration">
        <Art />
      </div>
    </div>
  );
};

export default WorkIllustration;
