import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IDS = ["landingTl", "aboutTl", "whatIDoTl", "careerTl", "whatRevealTl"];

let built: gsap.core.Timeline[] = [];

/**
 * Section scroll choreography. Rebuilt from scratch on resize so the desktop
 * and mobile branches never leak into each other.
 */
export function setSectionTimelines() {
  built.forEach((tl) => {
    tl.scrollTrigger?.kill();
    tl.kill();
  });
  built = [];
  IDS.forEach((id) => ScrollTrigger.getById(id)?.kill());

  const isDesktop = window.innerWidth > 1024;

  if (isDesktop) {
    const landingTl = gsap.timeline({
      scrollTrigger: {
        id: "landingTl",
        trigger: ".landing-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    landingTl
      .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
      .to(".landing-container", { y: "40%", duration: 0.8 }, 0)
      .fromTo(".hero-stage", { x: 0 }, { x: "-70%", duration: 1 }, 0)
      .fromTo(".about-me", { y: "-50%" }, { y: "0%" }, 0);

    const aboutTl = gsap.timeline({
      scrollTrigger: {
        id: "aboutTl",
        trigger: ".about-section",
        start: "center 55%",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    aboutTl
      .to(".about-section", { y: "30%", duration: 6 }, 0)
      .to(".about-section", { opacity: 0, delay: 3, duration: 2 }, 0)
      .to(".hero-stage", { x: "-78%", duration: 5, delay: 2 }, 0)
      .to(
        ".hero-glow",
        { opacity: 0, scale: 0.5, y: "-30%", duration: 5, delay: 2 },
        0
      )
      .fromTo(
        ".what-box-in",
        { display: "none" },
        { display: "flex", duration: 0.1, delay: 5 },
        0
      );

    const whatIDoTl = gsap.timeline({
      scrollTrigger: {
        id: "whatIDoTl",
        trigger: ".whatIDO",
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    whatIDoTl
      .fromTo(
        ".hero-visual",
        { y: "0%" },
        { y: "-100%", duration: 4, ease: "none", delay: 1 },
        0
      )
      .fromTo(".whatIDO", { y: 0 }, { y: "15%", duration: 2 }, 0);

    built.push(landingTl, aboutTl, whatIDoTl);
  } else {
    // Mobile keeps everything readable: only reveal the hover cards.
    gsap.set([".about-section", ".landing-container"], {
      clearProps: "opacity,y",
    });
    const whatRevealTl = gsap.timeline({
      scrollTrigger: {
        id: "whatRevealTl",
        trigger: ".what-box-in",
        start: "top 85%",
        invalidateOnRefresh: true,
      },
    });
    whatRevealTl.to(".what-box-in", { display: "flex", duration: 0.1 }, 0);
    built.push(whatRevealTl);
  }

  const careerTl = gsap.timeline({
    scrollTrigger: {
      id: "careerTl",
      trigger: ".career-section",
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  careerTl
    .fromTo(
      ".career-timeline",
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )
    .fromTo(".career-timeline", { opacity: 0 }, { opacity: 1, duration: 0.1 }, 0)
    .fromTo(
      ".career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      { animationIterationCount: "1", delay: 0.3, duration: 0.1 },
      0
    )
    .fromTo(
      ".career-section",
      { y: 0 },
      { y: isDesktop ? "20%" : 0, duration: 0.5, delay: 0.2 },
      0
    );

  built.push(careerTl);
}
