# MP2b — 500-word Reflection

---

**What did you build?**

I built Saksham, a four-page accessible reading website for neurodivergent learners aged 10–16 in Indian classrooms — readers with dyslexia, ADHD, or autism currently navigating mainstream EdTech (Byju's, Duolingo, government e-learning apps) that offers no cognitive adaptation. *Saksham* means *capable* in Hindi. This is a design-track project — the interface is the intervention. The home page walks first-time visitors through a name + avatar setup, then drops them on a clean hero with one suggested "Continue reading" passage. The library has eight short culturally-grounded passages across three categories with distinct visual personalities. Inside the reader, dotted-underline words reveal definitions on tap, paragraph-progress dots fill in as you scroll, and word-synchronized read-aloud highlights the spoken word in sync via the Web Speech API. After the passage, an optional reflection prompt invites one sentence. Marking it read goes to a celebration screen with a smart "try this next" suggestion.

**What decisions did you make?**

The biggest one was choosing the platform for the audience, not for the tool. I declared Lovable in MP2a and considered switching to a Python notebook, but the features a neurodivergent reader actually needs only exist in the browser: word-synchronized read-aloud (Web Speech API's `boundary` event), tap-for-definition vocab popovers (DOM events), paragraph-progress dots (`IntersectionObserver`), settings that persist across pages (`localStorage`), and a calm book-like reader (real CSS with drop cap and ornaments). A Python build would have been a *notebook about Saksham*, not Saksham. I built it as hand-written HTML/CSS/JS with Claude as the generative pair-programmer. The Figma also had a Sign Up flow and a 60-minute daily study goal — both contradict the published research, so I replaced sign-up with a `localStorage`-only setup and replaced minutes with passage-count progress.

**What would you do differently?**

Two concrete changes. First, the `SpeechSynthesis.boundary` event is unevenly supported — Safari fires it sparsely, which can stall the word highlight mid-passage. I'd add a fallback timer that estimates word durations from text length and chosen rate so the highlight doesn't desync. Second, the language filter currently labels Hindi, Bengali, Marathi, Gujarati, and Telugu but the passages are English-only. I'd partner with native speakers to produce at least one passage per language at the right register for the target age — that turns the filter from a placeholder into a working tool, and makes good on a promise the multilingual filter is implicitly making.

**What does this work demonstrate?**

**C8 (Building and Deploying a Complete Tool):** Saksham is deployed on GitHub Pages and usable end-to-end — setup, library, reader with word-sync audio, reflection, completion, teacher-dashboard demo. **C1 (Vibecoding and Rapid Prototyping):** used Claude as the generative tool through six visible iterations, with judgment calls on what to keep or roll back (the hand-drawn SVG illustrations were rolled back). **C7 (Critical Evaluation and Professional Judgment):** two specific overrides of the Figma+AI pair — the sign-up flow (replaced with `localStorage` setup) and the daily-minutes goal (replaced with passage-count progress) — because the research argues against both. **C2 (Code Literacy and Documentation):** README written for a stranger, mp2.md mapping each claim to specific code, section-banner JS comments. I'm not claiming C3–C6 — this is HTML/CSS/JS, not Python or data work.
