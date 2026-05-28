# Mini Project 2 — Competency Claim(s)

**Project:** Saksham — a calmer way to read
**Author:** Jasmine Sayed
**Course:** HCDE 530, Spring 2026
**Repo:** https://github.com/jsayed23/miniproject2
**Live site:** https://jsayed23.github.io/miniproject2/
**Source research:** *Designing for Neurodiversity: Accessibility in Educational Technology for India's Future Learners* — published in the [Cal Poly TAGA 2026 Journal](https://issuu.com/calpolytaga/docs/cal_poly_taga_2026/132)
**Original Figma prototype:** https://www.figma.com/proto/vOScugmTaA0yo2M25I105V/Saksham-App-Design-File

---

## Project summary

Saksham is a four-page accessible reading website for neurodivergent learners aged roughly 10–16 in Indian classrooms. The home page is the actual tool: setup with name + avatar, a clean hero with greeting and progress, a library of eight short culturally-grounded passages organized into three categories with distinct visual personalities (Stories, Science, Sky & Stars), a book-like reader with word-synchronized read-aloud and inline vocabulary popovers, an optional reflection prompt after each passage, and a completion screen that suggests what to try next. The site also has Achievements (10 self-paced badges), an Educators page with a mock teacher dashboard, and a brief About page. Built as hand-written HTML/CSS/JavaScript with Claude (Anthropic's AI assistant) as the generative pair-programmer, instead of Lovable as my MP2a declaration originally named.

---

## Competency claims

This submission claims **four** of the eight HCDE 530 competency domains: **C8** (required for MP2), and **C1**, **C7**, and **C2** as supporting claims because the work specifically demonstrates them. I am explicitly **not** claiming C3 (data cleaning), C4 (APIs), C5 (pandas analysis), or C6 (data visualization) — this project is HTML/CSS/JS and a static site, not Python/data work; per the rubric's guidance, one strong claim is better than three thin ones.

---

### C8 — Building and Deploying a Complete Tool *(required for MP2)*

**My MP2 is Saksham, an accessible reading website for neurodivergent learners.** It's deployed at https://jsayed23.github.io/miniproject2/ as a static site on GitHub Pages and is usable end-to-end: a first-time visitor walks through name + avatar setup, lands on a personalized hero with one suggested next passage, opens the reader, can change every accessibility setting mid-passage, reads (with optional word-synchronized read-aloud), writes an optional one-sentence reflection, marks the passage read, and gets routed to a "try this next" suggestion. The use case is real: this is the working implementation of my published research on EdTech accessibility for neurodivergent learners in India (Cal Poly TAGA 2026 Journal). The audience — children with dyslexia, ADHD, and autism aged roughly 10–16 — currently navigates mainstream EdTech (Byju's, Duolingo, government e-learning apps) that offers no cognitive adaptation. As declared in my MP2a, **this is a design-track project where the interface is the intervention**: accessibility lives in typography, motion control, and audio-synchronized reading rather than in backend computation. The `mp2.md` file (this document) explains what the tool does, who it's for, and what I learned. The `README.md` explains the tool to a stranger.

**The honest account of what went wrong:** I declared Lovable in MP2a. Once I started implementing the core interaction — the word-by-word read-aloud highlight using `SpeechSynthesis.boundary` — I realized Lovable's component abstraction would make it awkward to wire the boundary-event handler directly to a pre-tokenized array of word `<span>`s. I switched to writing the site by hand with Claude as the generative tool. **The deeper reason the switch had to happen — and the reason I am not delivering this as a Python notebook or Streamlit app — is that the features the audience actually needs only exist in the browser.** Word-synchronized read-aloud needs the Web Speech API's `boundary` event. Tap-for-definition popovers need DOM event handling. Paragraph-progress dots need `IntersectionObserver`. Persistent settings across pages need `localStorage`. A book-like reader with drop cap and ornaments needs real CSS. A Python build would have been a *notebook about Saksham*, not Saksham. The platform was chosen for the audience, not the tool. The cost of the switch was scope: rather than a course catalog, the library shipped with eight passages. **What I'd scope differently next time:** the language filter labels Hindi, Bengali, Marathi, Gujarati, and Telugu but the passages are English-only. I'd start with one filter dimension (English-only, multiple grade levels) instead of building the multilingual chip UI without backing content — right now the filter is a promise the library can't keep.

---

### C1 — Vibecoding and Rapid Prototyping

**I used Claude (Anthropic's AI assistant) as the generative tool instead of Lovable or Bolt.** Claude is "a similar generative tool" in the rubric's sense — it generates working code from plain-language descriptions — but it isn't a hosted vibecoding platform. The activity is the same: I described what I wanted in natural language, Claude generated HTML/CSS/JS, and I iterated. Deployment was a manual `git push` to GitHub Pages rather than a one-click platform deploy.

**The iteration was substantial — not one prompt.** The site went through visible revisions during the build:

1. First pass: a marketing-style landing page with a fake phone mockup and a separate `app.html`. I rejected it: this wasn't a portfolio site about Saksham, it needed to *be* Saksham.
2. Second pass: a single-page tool with a forced six-step onboarding wizard. I rejected the wizard: the published research insight is that control should be available *immediately*, and a forced wizard contradicts that. Replaced with an always-visible preferences panel.
3. Third pass: a busy four-card dashboard (Today's pick / Your reading / Recently read / Latest milestones) above the library. I cut it down to a single bold-blue hero card with a progress snapshot, because the cards weren't pulling their weight visually.
4. Fourth pass: added the reading interaction loop — inline vocabulary popovers, an optional reflection prompt, and a completion screen with a "try this next" suggestion.
5. Fifth pass: visual polish — gradients, book-like reader typography with drop cap and ornaments, category sections with distinct color stories.
6. Sixth pass: attempted figure illustrations in the hero and setup screen and decorative SVGs in the category tiles. I rolled all of them back when they looked amateurish.

**What Claude got right:** the scaffolding for the `SpeechSynthesis` `boundary`-event handler, the CSS custom-property runtime design-token system, the `IntersectionObserver` paragraph-progress dots, and the `localStorage` state with version-migration from `saksham:v2` to `saksham:v3`. These are the load-bearing technical pieces and Claude wrote them cleanly.

**What I had to correct or redirect:** Claude initially generated a Lovable-style sign-up/log-in flow because the Figma had one — I overrode this because the published research argues privacy-first (see C7 below). Claude also kept proposing illustrations for the hero (a figure with speech bubbles) that I rejected for visual quality. And Claude produced floating-decoration positioning that overlapped the hero text on different viewport widths — I caught the alignment bug on visual inspection and removed the decorations.

---

### C7 — Critical Evaluation and Professional Judgment

**The clearest example: Claude proposed implementing the Figma's Sign Up / Log In flow.** The Figma screen I shared shows email + password fields and a "Create account" button. Claude generated those. I rejected and removed them because they directly contradict the published Saksham research, which argues that privacy is part of the accessibility promise — the site is for minors in school contexts, and parental-consent forms become unavoidable the moment there's an account system. I replaced sign-up with a name + avatar setup that lives entirely in `localStorage`, and I added a verifiable privacy claim to the README and the educators page that says "you can prove this from your browser's network tab." This is a decision I would not have made if I trusted the Figma + Claude pair on autopilot.

**Second example: the Figma's 60-minute daily study goal.** The Figma's "Hi, Adam" header has a `Learned today / 46 min / 60 min` card. Claude implemented it faithfully. I overrode it because the published research's fourth insight is that timed exercises and leaderboards make neurodivergent children feel "stupid" — the research's verbatim word. I replaced the minutes goal with a passage-count progress bar (`3 of 8 passages read`) so the visual identity stays close to the Figma but the underlying message switches from *catch up* to *your own pace*.

**Third example: visual rendering bugs.** Claude generated four floating SVG "chip" decorations in the hero (book, sparkle, leaf, clock) positioned at percentages. On a visual check they overlapped the hero text on medium viewports. I removed all four rather than refine the positioning further. Same call when Claude generated hand-drawn SVG figure illustrations — they technically rendered fine but looked amateurish, so I cut them rather than ship something I wouldn't show to a client.

These are decisions I'd describe to a stakeholder as: I did not trust the Figma + AI pair to override the research, and I did not trust hand-rolled SVG art to clear the design bar. The repo reflects those calls.

---

### C2 — Code Literacy and Documentation

**`README.md` explains the tool to a non-technical reader.** It opens with the meaning of "Saksham" in Hindi, names the audience, lists the four pages and what each does, walks through the reading loop in six concrete steps, maps the six features from the published case study to where each one lives in code, documents the two intentional divergences from the Figma, and explains how the build was done. Someone outside HCDE 530 can read it and run the site themselves.

**Function-level documentation.** The rubric asks for "a docstring on at least one function that says what it takes, what it returns, and what it does." Because this project is JavaScript rather than Python, the equivalent is JSDoc-format block comments. `index.html` has these on five key functions:

- **`loadState()`** — documents that it returns a state object with named fields, falls back to defaults on parse failure, and migrates from an older `saksham:v2` key when present.
- **`openPassage(id)`** — documents the `id` parameter, that all side effects are DOM mutations + a screen transition, and lists what the function actually does (eyebrow, title, meta, paragraph dots, vocab spans, IntersectionObserver wiring, reflection prefill).
- **`speak()`** — documents the use of the Web Speech API's `boundary` event for word-level highlight and notes that it also sets `state.usedAudioOnce = true` to unlock the "Read along" achievement.
- **`checkAchievements()`** — documents that it's idempotent (won't re-unlock), lists which conditions it checks, and notes that the function mutates state, persists, and queues toasts.
- **`showCompletion(passage)`** — documents the smart-next logic (same-category-first → any-unread → "all done").

**Inline comments explain *why*, not just what.** A few examples: the SVG illustrations are marked `aria-hidden="true"` because they're decorative; the `helloAvatar` reference in JS has a guard (`if (avEl)`) with a comment explaining that the element was removed but the code stayed null-safe so the avatar can be re-added without breaking; the `vocab` regex strips surrounding punctuation before lookup with an inline comment noting why; the `data-motion="none"` rule disables animations entirely with a comment naming why (`prefers-reduced-motion` users plus manual override).

**Section-banner organization.** `index.html`'s JS is organized into named blocks (`DATA`, `STATE`, `SCREEN ROUTING`, `FIRST-RUN SETUP`, `LIBRARY`, `READER + SPEECH`, `ACHIEVEMENTS`, `VOICE CUES`, `INIT`). `styles.css` is similarly organized (`HERO SECTION`, `LIBRARY SECTION`, `CATEGORY SECTIONS`, `BOOK-LIKE READER`, `ACHIEVEMENTS`, `TEACHER DASHBOARD`, `VOICE CUE PULSE`).

**`mp2.md`** (this file) is the markdown file in the repo that connects each claim back to either a specific code reference, a specific decision, or a specific override — fulfilling the rubric's "markdown file in your repo that explains the script to a non-technical reader" requirement at a higher fidelity than the README does for technical detail.

---

## Two intentional divergences from the Figma (part of C8's honest account)

1. **No sign-up / log-in flow.** Replaced with name + avatar setup that lives in `localStorage`. Reasoning is in C7 above.
2. **No time-tracked daily goal.** Replaced with passage-count progress. Reasoning is in C7 above.

---

## What this project does **not** claim

This MP2 build is not an evaluation of Saksham with neurodivergent learners. The original research used parents and educators as proxies for ethical reasons (a limitation acknowledged in the published paper). The implementation preserves the design decisions the research produced; it does not re-validate them with the target user group. The Teacher Dashboard uses mock data for the same reason — it demonstrates the differentiation pattern without surveilling real students.
