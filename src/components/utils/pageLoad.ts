import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setProgress } from "../Loading";
import setSplitText from "./splitText";

const waitForWindowLoad = () =>
  new Promise<void>((resolve) => {
    if (document.readyState === "complete") return resolve();
    window.addEventListener("load", () => resolve(), { once: true });
  });

const waitForFonts = () =>
  document.fonts
    ? document.fonts.ready.then(() => undefined)
    : Promise.resolve(undefined);

const after = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * The Geist / JetBrains Mono webfonts are loaded with display=swap, so the page
 * height changes the moment they land. Anything measured before that (pinned
 * sections, SplitText line breaks, ScrollTrigger start/end points) is stale and
 * later sections end up overlapping earlier pinned ones. So: re-split the text
 * with the real font metrics, then refresh every ScrollTrigger.
 */
export const refreshAfterAssets = () => {
  setSplitText();
  ScrollTrigger.refresh(true);
};

let loadStarted = false;

export async function startPageLoad(setLoading: (percent: number) => void) {
  if (loadStarted) return;
  loadStarted = true;

  const progress = setProgress(setLoading);

  // 8s safety net: a blocked font CDN must never leave the loader stuck.
  await Promise.race([
    Promise.all([waitForFonts(), waitForWindowLoad()]),
    after(8000),
  ]);

  refreshAfterAssets();
  await progress.loaded();

  // Fonts can still settle a frame or two after `fonts.ready` resolves, and the
  // reveal animation itself changes layout - refresh once more on the far side.
  requestAnimationFrame(() => ScrollTrigger.refresh(true));
  setTimeout(() => ScrollTrigger.refresh(true), 1200);
}
