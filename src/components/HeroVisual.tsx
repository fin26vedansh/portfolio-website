import "./styles/HeroVisual.css";

/**
 * Original artwork for this portfolio: a "valuation desk" panel.
 * Candles grow on load, the price path redraws on a loop, and a mono
 * ticker of valuation vocabulary scrolls underneath.
 */

const candles = [
  { x: 34, low: 150, high: 196, open: 158, close: 190, dir: "down" },
  { x: 62, low: 138, high: 188, open: 182, close: 150, dir: "up" },
  { x: 90, low: 128, high: 170, open: 160, close: 136, dir: "up" },
  { x: 118, low: 132, high: 176, open: 140, close: 168, dir: "down" },
  { x: 146, low: 108, high: 152, open: 148, close: 118, dir: "up" },
  { x: 174, low: 96, high: 140, open: 132, close: 104, dir: "up" },
  { x: 202, low: 100, high: 146, open: 108, close: 138, dir: "down" },
  { x: 230, low: 78, high: 124, open: 118, close: 86, dir: "up" },
  { x: 258, low: 62, high: 108, open: 100, close: 70, dir: "up" },
  { x: 286, low: 66, high: 112, open: 74, close: 104, dir: "down" },
  { x: 314, low: 44, high: 92, open: 88, close: 52, dir: "up" },
  { x: 342, low: 30, high: 74, open: 66, close: 38, dir: "up" },
];

const pricePath =
  "M 34 174 L 62 166 L 90 146 L 118 154 L 146 132 L 174 118 L 202 124 L 230 100 L 258 84 L 286 90 L 314 66 L 342 48";

const tickerWords = "DCF · FCFF · WACC · EV/EBITDA · TERMINAL VALUE · BETA · ";

const HeroVisual = () => {
  return (
    <div className="hero-visual">
      <div className="hero-stage">
        <div className="hero-glow" aria-hidden="true"></div>
        <svg
        className="hero-panel"
        viewBox="0 0 400 300"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Animated chart panel showing a rising price series with a target price line"
      >
        <defs>
          <clipPath id="hero-ticker-clip">
            <rect x="16" y="256" width="368" height="28" />
          </clipPath>
          <linearGradient id="hero-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c2a4ff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#c2a4ff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* panel frame */}
        <rect
          x="8"
          y="8"
          width="384"
          height="284"
          rx="14"
          className="hero-frame"
        />
        <rect x="8" y="8" width="384" height="120" rx="14" fill="url(#hero-fade)" />

        {/* header */}
        <circle cx="28" cy="28" r="3.5" className="hero-led hero-led-1" />
        <circle cx="40" cy="28" r="3.5" className="hero-led hero-led-2" />
        <circle cx="52" cy="28" r="3.5" className="hero-led hero-led-3" />
        <text x="68" y="32" className="hero-label">
          VALUATION DESK
        </text>
        <text x="372" y="32" className="hero-label hero-label-dim" textAnchor="end">
          LIVE
        </text>
        <line x1="16" y1="44" x2="384" y2="44" className="hero-rule" />

        {/* gridlines */}
        {[80, 120, 160, 200].map((y) => (
          <line key={y} x1="24" y1={y} x2="376" y2={y} className="hero-grid" />
        ))}

        <g transform="translate(0,40)">
        {/* target line */}
        <g className="hero-target">
          <line x1="24" y1="18" x2="330" y2="18" className="hero-target-line" />
          <rect x="300" y="8" width="76" height="20" rx="10" className="hero-pill" />
          <text x="338" y="22" className="hero-pill-text" textAnchor="middle">
            +15% UPSIDE
          </text>
        </g>

        {/* candles */}
        <g className="hero-candles">
          {candles.map((c, i) => {
            const bodyTop = Math.min(c.open, c.close);
            const bodyHeight = Math.max(Math.abs(c.close - c.open), 3);
            return (
              <g
                key={c.x}
                className={`hero-candle hero-candle-${c.dir}`}
                style={{ animationDelay: `${0.35 + i * 0.07}s` }}
              >
                <line x1={c.x} y1={c.low} x2={c.x} y2={c.high} className="hero-wick" />
                <rect
                  x={c.x - 5}
                  y={bodyTop}
                  width="10"
                  height={bodyHeight}
                  rx="1.5"
                  className="hero-body"
                />
              </g>
            );
          })}
        </g>

        {/* price path */}
        <path d={pricePath} className="hero-path" />
        </g>

        {/* footer ticker */}
        <line x1="16" y1="250" x2="384" y2="250" className="hero-rule" />
        <g clipPath="url(#hero-ticker-clip)">
          <g className="hero-ticker">
            <text
              x="16"
              y="274"
              className="hero-ticker-text"
              textLength="368"
              lengthAdjust="spacingAndGlyphs"
            >
              {tickerWords}
            </text>
            <text
              x="384"
              y="274"
              className="hero-ticker-text"
              textLength="368"
              lengthAdjust="spacingAndGlyphs"
            >
              {tickerWords}
            </text>
          </g>
        </g>
        </svg>
      </div>
    </div>
  );
};

export default HeroVisual;
