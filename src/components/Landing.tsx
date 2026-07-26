import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            VEDANSH
            <br />
            <span>JAISWAL</span>
          </h1>
          <h3 className="landing-tagline">
            CFA Level I · MBA-Finance, IIM Kozhikode
          </h3>
        </div>
        <div className="landing-info">
          <h3>A Markets-First</h3>
          <h2 className="landing-info-h2">
            <div className="landing-h2-1">Analyst</div>
            <div className="landing-h2-2">Strategist</div>
          </h2>
          <h2>
            <div className="landing-h2-info">Strategist</div>
            <div className="landing-h2-info-1">Analyst</div>
          </h2>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Landing;
