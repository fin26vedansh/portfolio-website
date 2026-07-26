import "./styles/Work.css";
import WorkIllustration, { WorkVariant } from "./WorkIllustration";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Card {
  title: string;
  kicker: string;
  body: string;
  art: WorkVariant;
}

const cards: Card[] = [
  {
    title: "What Beauty Means to Me",
    kicker: "In my own words",
    body: "Beauty, to me, is the quietest form of self-respect. It's the ten minutes before the day starts where you decide how you want to meet it. Not looking like someone else - just the small, repeated care that makes you walk into a room a little more like yourself. And the honest verdict on any of it isn't the ad. It's whether you reach for the bottle again on a Tuesday morning when nobody's watching.",
    art: "ritual",
  },
  {
    title: "The Brand I Relate To",
    kicker: "The one I use",
    body: "L'Oreal Professionnel. It's what's in my bathroom, but it's also the part of the business I find most interesting: it only reaches you through someone who had to be convinced first. A stylist stakes their own reputation on it before you ever see the bottle. The company started that way in 1909 - a chemist selling dye to Parisian salons - and I spent nineteen months in a job with exactly that logic. The recommendation only works if the person giving it actually believes it.",
    art: "salon",
  },
  {
    title: "A Memorable Experience",
    kicker: "Trial and error",
    body: "My skincare shelf is embarrassing and I've stopped apologising for it. It started as one moisturiser and turned into a small research project - patch tests, three-week trials, a note on my phone tracking what actually worked. I've wasted money on good packaging and been surprised by cheap things that delivered. It taught me something I use everywhere now: I trust what I've tested myself over what I've been told.",
    art: "shelf",
  },
  {
    title: "What Drives Me",
    kicker: "Outside the spreadsheet",
    body: "New cities, mostly - and the street food stall with no menu and a queue that tells you everything. A Rubik's Cube I keep trying to solve faster. What connects them is that I like problems with a pattern hiding inside, and I like the moment the pattern shows up. Nineteen months of talking to 600+ people a year taught me that works on people too. Just slower, and with better stories.",
    art: "compass",
  },
  {
    title: "Strengths",
    kicker: "What I bring",
    body: "Reading people quickly - a thousand-odd client conversations taught me to hear what someone is actually asking underneath what they said. Building systems that outlive me: I standardised five lead-lifecycle stages in a CRM and revenue efficiency climbed 30%. And a stubborn appetite for detail - CFA Level I, 70%+ in every subject, mostly because I couldn't leave the parts I didn't understand alone.",
    art: "signal",
  },
  {
    title: "Weaknesses",
    kicker: "What I'm working on",
    body: "I overanalyse. I'll keep pulling at a problem long after it's been answered - re-running assumptions on a model I'd already finished, rebuilding something a third time before anyone has seen the first version. It makes the work accurate and it makes it late. I'm fixing it the unglamorous way: setting a point where the analysis stops and the draft goes out, and letting other people's questions do the work I was trying to do alone.",
    art: "loop",
  },
];

const Work = () => {
  useGSAP(() => {
    const getTranslateX = () => {
      const box = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      if (!box.length || !container) return 0;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      return rect.width * box.length - (rectLeft + parentWidth) + padding;
    };

    // Function-based values + invalidateOnRefresh mean the pin length is
    // recalculated on every ScrollTrigger.refresh() - including the refreshes
    // fired once webfonts and images have settled. Without this the pin keeps
    // its first (pre-font) measurement and Contact overlaps this rail.
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Beyond the <span>R&eacute;sum&eacute;</span>
        </h2>
        <div className="work-flex">
          {cards.map((card, index) => (
            <div className="work-box" key={card.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{card.title}</h4>
                    <p>{card.kicker}</p>
                  </div>
                </div>
                <p className="work-body">{card.body}</p>
              </div>
              <WorkIllustration variant={card.art} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
