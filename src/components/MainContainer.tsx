import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { setSectionTimelines } from "./utils/GsapScroll";
import { startPageLoad } from "./utils/pageLoad";
import { useLoading } from "../context/LoadingProvider";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const { setLoading } = useLoading();

  useEffect(() => {
    let debounce: number | undefined;
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
      window.clearTimeout(debounce);
      debounce = window.setTimeout(() => setSectionTimelines(), 200);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.clearTimeout(debounce);
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  // One-shot: build the scroll timelines, then drive the loading screen off
  // real font + asset readiness so nothing is measured against a fallback font.
  useEffect(() => {
    setSectionTimelines();
    startPageLoad(setLoading);
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
