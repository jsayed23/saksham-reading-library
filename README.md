# Saksham

**An accessible reading library for neurodivergent learners.** *Saksham* means *capable* in Hindi. Set the font, contrast, pace, motion, and audio to whatever your brain wants. Pick a passage. Read at your own speed. No accounts, no streaks, no comparisons. Everything stays in your browser.

This is the working web implementation of the Saksham design originally published in the [Cal Poly TAGA 2026 Journal](https://issuu.com/calpolytaga/docs/cal_poly_taga_2026/132). The visual language mirrors the original [Figma prototype](https://www.figma.com/proto/vOScugmTaA0yo2M25I105V/Saksham-App-Design-File) — onboarding, category cards, soft brand palette — adapted from mobile screens to a responsive multi-page website.

**Live site:** https://jsayed23.github.io/miniproject2/
**Repo:** https://github.com/jsayed23/miniproject2

## What it is

A four-page static website built around a working reading tool:

| Page | What it does |
|---|---|
| `index.html` | **Library + reader.** First-time visitors get a setup screen (name + avatar color). Returning visitors get a clean hero with greeting, reading-progress snapshot, and a single "Continue reading [next title]" CTA. Below the hero: three category sections (Stories, Science, Sky & Stars) — each with its own icon, colored underline, and italic tagline. Tapping a passage opens the book-like reader. |
| `achievements.html` | A grid of 10 self-paced badges. No comparison, no leaderboard — just personal markers for reading milestones, font exploration, theme exploration, and pace. |
| `educators.html` | Teacher-dashboard demo (mock Grade 6 Section B roster showing six students with varied settings) plus a practical classroom guide and privacy note. |
| `about.html` | Brief account of the research lineage and how the build is constructed. |

Plus `styles.css` (shared design system), `mp2.md` (HCDE 530 competency claim), and `reflection.md` (the Canvas reflection).

## The reading flow

Saksham was designed around a clean learning loop:

1. **Pick a passage** from the library — or click the hero's "Continue reading" button, which jumps to the next unread one.
2. **Read it.** The reader shows the category as an eyebrow label (e.g. STORIES) above the title, a decorative top line ornament, paragraph-progress dots that light up as you scroll, and a drop cap on the first paragraph. Words with a dotted underline have definitions — tap or focus them for an inline popover.
3. **Turn on read-aloud** if you want — the current spoken word is visually highlighted in sync with the voice via the Web Speech API's `boundary` event.
4. **Reflect.** After the passage, a quiet panel asks one open-ended question (different per passage) with an optional 280-character textarea. Saves to `localStorage`. Never graded, never shared.
5. **Mark it read.** A completion screen celebrates with a check icon + animated sparkles, then suggests "Try this next?" — preferring an unread passage from the same category, then any unread one, then a warm "you've read everything" message.
6. **Achievements unlock** behind the scenes — a small toast slides up briefly when you hit a new milestone.

## Six features from the Saksham case study, each implemented

The portfolio case study lists six core features. Each is in this build:

| Case-study feature | Where it lives |
|---|---|
| **Customizable Dashboard** | Setup screen + always-available preferences panel with font (Atkinson Hyperlegible / Lexend / OpenDyslexic / system), size, contrast (cream / soft blue / dark / high contrast), motion (full / reduced / none), audio toggle, voice cues, pace slider. |
| **Guided Reading Mode** | `utter.onboundary` handler maps `charIndex` to word `<span>` elements; the spoken word gets a `.spoken` class and gentle scroll-into-view. |
| **Offline Functionality** | Static HTML/CSS/JS site. Fonts cached after first load. All state in `localStorage`. |
| **Gamified Progress** | 10 self-paced milestones in the `ACHIEVEMENTS` array. Toast on unlock, full grid on the achievements page. **No comparison anywhere.** |
| **Teacher Dashboard** | Top of `educators.html`: mock Grade 6 Section B roster with six varied learner profiles. Explicit "this is a demo with mock data" note because the real Saksham doesn't track real students. |
| **Voice Cues for Non-Readers** | Toggle in preferences. When on, focusing or hovering an interactive element speaks its label via the Web Speech API (separate utterance from the read-aloud, with `cancel()` to prevent overlap). |

## Two intentional divergences from the Figma

The original Figma prototype shows a Sign Up / Log In flow and a 60-minute-per-day study goal. The published research overrides both:

- **No accounts.** The published research argues privacy-first; verifiable from the network tab.
- **No time goal.** "Comparison kills motivation" — replaced minutes-tracked progress with passage-count progress. The reading-snapshot in the hero shows "3 of 8 passages read" rather than "X of Y minutes."

Both decisions are documented in `mp2.md`.

## Who it's for

**Primary users:** neurodivergent learners aged roughly 10–16 in Indian classrooms — readers with dyslexia, ADHD, or autism, or any combination — who currently learn through mainstream EdTech platforms like **Byju's, Duolingo, and government e-learning apps** that offer no cognitive adaptation. Those interfaces are visually overloaded and comparison-driven; they trigger sensory overwhelm and shutdown, or get abandoned entirely.

**Secondary beneficiaries:** educators like Meera, the teacher in the original Saksham research who said *"I have 40 students and no tools."* Saksham gives them a calm reading surface they can hand to a student without first building accessibility scaffolds from scratch.

This is a **design-track project: the interface is the intervention.** Accessibility lives in typography, motion control, and audio-synchronized reading — not in backend computation.

## How to use it

**The fastest way is the live link above.** Any modern browser on any device.

**To run it locally:**

1. Clone or download this repo.
2. Open `index.html` directly in a browser. The site is static HTML/CSS/JS — no build, no install, no dependencies.

**To host your own copy on GitHub Pages:**

1. Fork or copy the repo.
2. **Settings → Pages**, source = `main` branch, root folder.
3. After ~1 minute, your copy is live at `https://<your-username>.github.io/<repo-name>/`.

## File layout

```
miniproject2/
├── index.html          Library + reader + setup + completion (the actual tool)
├── achievements.html   Self-paced milestone grid
├── educators.html      Teacher dashboard + classroom guide
├── about.html          About the project
├── styles.css          Shared design system
├── README.md           This file
├── mp2.md              HCDE 530 competency claim
└── reflection.md       500-word Canvas reflection
```

## Accessibility, concretely

- Skip-to-main-content link on every page.
- All controls keyboard-reachable; `:focus-visible` outlines explicit at 2–3 px.
- ARIA state on every toggle and radio group: `aria-pressed`, `aria-checked`, `aria-current`, `aria-live`, `role="radiogroup"`, `role="toolbar"`.
- High-contrast theme is true high contrast: black with #FFD301 sun-yellow text, WCAG AAA.
- `prefers-reduced-motion` is detected automatically; the user can also override Full / Reduced / None.
- Voice cues toggle reads button labels aloud for emerging readers.
- All state in `localStorage`. The privacy claim is verifiable from the network tab.

## Tech

Plain HTML, CSS, and vanilla JavaScript. No frameworks, no build step, no backend. Fonts via CDN: Poppins, Atkinson Hyperlegible, and Lexend from Google Fonts; OpenDyslexic from cdnfonts.

Notable computational pieces:
- CSS custom properties as a runtime design-token system, switched by `data-` attributes on `<body>`.
- Web Speech API's `boundary` event drives the word-level highlight during read-aloud.
- `IntersectionObserver` drives the paragraph-progress dots in the reader.
- All-`localStorage` state with version-migration from older keys (`saksham:v2` → `saksham:v3`).

## How it was built

The MP2a declaration named Lovable as the platform. The actual build was done as a hand-written multi-page site in HTML/CSS/JavaScript, drafted and iterated with **Claude** (Anthropic's AI assistant) as the pair-programmer.

**The platform choice was driven by what the audience needs, not by tool preference.** The features that make Saksham serve a neurodivergent reader specifically — not just describe one — depend on browser APIs that no Python framework can reach:

- **Word-synchronized read-aloud** uses the browser's Web Speech API and its `boundary` event to highlight each word as it's spoken. Jupyter, Streamlit, and Gradio have no equivalent.
- **Inline vocabulary popovers** triggered by tap or keyboard focus require DOM event handling that lives in the browser.
- **Paragraph-progress dots that light up as the reader scrolls** use `IntersectionObserver`, which is browser-only.
- **Settings that apply globally across every page** use `localStorage` and CSS custom properties switched at runtime. A notebook is one document; it doesn't have "across pages."
- **The calm, book-like reader typography** (drop cap, ornaments, line-height, custom fonts via CDN) needs real CSS. Streamlit limits you to a small set of themes; a Jupyter cell renders default-styled markdown.

A Python build of Saksham would be a *notebook about the tool*, not the tool. The HTML build is the tool. That's the design call.

The design itself went through several visible iterations during the build, each captured in successive commits: a marketing-style landing with a phone mock, then a tool-focused single-page app with a forced six-step onboarding, then a calmer site with always-visible settings, then a personalized dashboard, then a full learning loop with vocabulary, reflection, and completion screen. Several attempts at illustrations (figure + speech bubbles in the hero, setup screen, and category tiles) were rolled back when they didn't meet the visual bar; small functional icons stayed.

## Context

Saksham started as a 2024–2025 solo research and design project at Cal Poly, published in the Cal Poly TAGA 2026 Journal. The browser build is the implementation, made for HCDE 530 (Computational Methods in Human Centered Design and Engineering) at the University of Washington, Spring 2026.

## License

Class project. Feel free to fork. A credit back to the original Saksham research is appreciated.

## Author

Jasmine Sayed — [portfolio](https://jasminesayedportfolio.com) · [LinkedIn](https://www.linkedin.com/in/sayedjasmine) · [sayedjasmine@gmail.com](mailto:sayedjasmine@gmail.com)
