# Vedansh Jaiswal — Portfolio

Personal portfolio site. React + TypeScript + Vite + GSAP.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
npm run lint
```

Verified locally: `npm install`, `npm run build` and `npm run lint` all pass with
no errors (7 pre-existing lint *warnings* remain, all in template code).

## Where the content lives

| What | File |
| --- | --- |
| Name, hero headline, credentials line | `src/components/Landing.tsx` |
| Loading screen name + marquee words | `src/components/Loading.tsx` |
| Navbar name + email | `src/components/Navbar.tsx` |
| About Me copy | `src/components/About.tsx` |
| Skills / interests cards | `src/components/WhatIDo.tsx` |
| Career timeline (`timeline` array) | `src/components/Career.tsx` |
| Creative CV cards (`cards` array) | `src/components/Work.tsx` |
| The six card illustrations | `src/components/WorkIllustration.tsx` |
| Hero chart panel artwork | `src/components/HeroVisual.tsx` |
| Email / phone / LinkedIn / footer | `src/components/Contact.tsx` |
| Floating LinkedIn icon + Resume button | `src/components/SocialIcons.tsx` |
| Resume PDF (opens in a new tab) | `public/resume.pdf` |
| Page title + meta description + fonts | `index.html` |

## Notes on this build

- **GSAP**: uses the standard free `gsap` package (3.13+ — installs 3.15). All
  plugins including `ScrollSmoother` and `SplitText` come from it. `gsap-trial`
  is gone; imports are `gsap/ScrollSmoother` and `gsap/SplitText`.
- **3D sections removed**: the template's `TechStack` physics canvas and its 3D
  avatar are both gone, along with `three`, `three-stdlib`, `@react-three/*`,
  the Draco decoder and the `.glb` / `.hdr` model files. Bundle is ~320 kB of JS
  (~115 kB gzipped) instead of well over a megabyte.
- **Hero visual**: the avatar slot is now an original animated SVG "valuation
  desk" (candles, price path, target-price line, mono ticker) in
  `src/components/HeroVisual.tsx`.
- **Layout-shift fix**: webfonts moved from a CSS `@import` to preconnected
  `<link>` tags in `index.html`, and `src/components/utils/pageLoad.ts` waits on
  `document.fonts.ready` + `window.load` before re-splitting text and calling
  `ScrollTrigger.refresh(true)`. The pinned Work rail now measures its scroll
  length with function-based `end` / `x` values plus `invalidateOnRefresh`, so it
  re-measures on every refresh instead of keeping its first (pre-font)
  measurement. That was the cause of Contact overlapping Work.
- Reduced-motion users get static versions of every animation.

## Still to fill in — nothing in the resume covered these

1. **The Work rail is now the L'Oréal Creative CV.** The section between Career
   and Contact holds the six parts L'Oréal asks for (beauty, brand, memorable
   experience, passions, strengths, weaknesses). The finance project cards that
   were there before have been removed — that record is carried by the Career
   timeline and the résumé PDF. If you need them back for a different
   application, they're in git history / earlier zip.
2. **Verify the two factual claims in card 02** before the interview: that
   L'Oréal began in 1909 with Eugène Schueller, a chemist selling hair dye to
   Parisian salons, and that L'Oréal Professionnel is salon-distributed. Both are
   accurate as far as I know, but you'll be the one saying them in the room. Do
   not add a specific product name unless you actually use it.
3. **MBA timeline copy is forward-looking.** The third career entry mentions
   looking for a summer role; that is my wording, not from the resume. Reword or
   drop before sharing.
4. **All the Creative CV copy is a draft in your voice, not your words.** The
   facts are yours (Physics background, 19 months, 600+ candidates, 30% revenue
   efficiency, CFA Level I, travel / food / cube / skincare shelf) but read every
   card aloud once and change anything you wouldn't actually say. L'Oréal states
   this document is used in the Group Discussion and Personal Interview — you
   will be asked to expand on the strengths and weaknesses cards in particular,
   so they need to be genuinely yours.
5. **Internship shown as "2023"** rather than Jun'23–Jul'23, for the timeline's
   visual rhythm. Change in `Career.tsx` if you'd rather be exact.
6. **No favicon.** The template shipped without one; add `public/favicon.svg` and
   a `<link rel="icon">` in `index.html`.
7. **Footer year is hardcoded to 2026** in `Contact.tsx`.
8. **No analytics.** The template's Vercel analytics package was unused and has
   been removed.

## Provenance and licence — please read before publishing

This project is built on the template
[MoncyDev/Portfolio-Website](https://github.com/MoncyDev/Portfolio-Website), and
the layout, scroll choreography, loading screen and CSS are substantially that
author's work. Its licence is preserved here as `TEMPLATE-LICENSE.md`.

That licence is **not** permissive. It states that you may not clone the full
website or design, may not use it for commercial purposes, and that any use of
any part of it requires visible credit to "Moncy Yohannan" with a link to the
original source. The original "Designed and Developed by" line has been removed
from the footer as requested — which means, as it stands, this build does not
meet the licence's attribution condition.

Before putting this online, pick one:

- **Restore a credit line.** A small "Template by Moncy Yohannan" link in the
  footer satisfies the attribution clause and costs nothing on a portfolio.
- **Ask permission.** The author lists `connect@moncy.dev`; a short email is
  usually enough to get an explicit yes.
- **Rebuild the shell.** Keep your content, illustrations and hero visual (those
  are yours) and put them in a layout written from scratch.

Sharing it privately or as a local demo is a much smaller question than
publishing it under your own name with the credit removed.
