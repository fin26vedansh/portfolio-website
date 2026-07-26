import "./styles/Career.css";

const timeline = [
  {
    role: "Financial Analysis Intern",
    org: "Vardhman Texo Fab",
    when: "2023",
    detail:
      "Benchmarked 5+ industry peers across 10+ ratios, built Excel cost and margin trackers that cut reporting turnaround by 10%+, and wrote 10+ variance and market analysis reports feeding pricing decisions.",
  },
  {
    role: "Business Development Executive",
    org: "FinTree Education",
    when: "'24 - '26",
    detail:
      "Advised 600+ CFA and FRM candidates a year, led a 5+ member team, standardised 5+ lead lifecycle stages in the CRM, and posted the highest individual revenue in the cohort within my first month.",
  },
  {
    role: "MBA - Finance",
    org: "IIM Kozhikode",
    when: "NOW",
    detail:
      "Batch of 2026-28, building on CFA Level I and Bloomberg Market Concepts. Focused on valuation, equity research and business strategy, and looking for a summer role where I can put all three to work.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {timeline.map((item) => (
            <div className="career-info-box" key={item.role}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.org}</h5>
                </div>
                <h3>{item.when}</h3>
              </div>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
