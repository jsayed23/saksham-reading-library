/* =========================================================================
   SAKSHAM — Internationalisation data
   -------------------------------------------------------------------------
   This file holds every translatable string in the app, in six languages:
     en  English      hi  हिन्दी (Hindi)      bn  বাংলা (Bengali)
     mr  मराठी (Marathi)  gu  ગુજરાતી (Gujarati)  te  తెలుగు (Telugu)

   Two exports are attached to window:
     • SAKSHAM_LANGS   — list of languages (code, native + english name, speech tag)
     • SAKSHAM_STRINGS — interface labels, keyed by language code
     • SAKSHAM_PASSAGES — the reading library; each passage carries a per-language
       block with its title, paragraphs, vocabulary, and reflection prompt.

   NOTE ON TRANSLATION QUALITY: the non-English passages were drafted with an AI
   translator and should be proofread by a native speaker before classroom use.
   They are faithful in meaning but may need polish for register and idiom.
   ========================================================================= */

/* Languages, in the order they appear in the filter. `speech` is the BCP-47
   tag handed to the Web Speech API; if the reader's device has no voice for
   that tag, read-aloud falls back to the default voice. */
window.SAKSHAM_LANGS = [
  { code: "english",  key: "en", native: "English",      english: "English",  speech: "en-US" },
  { code: "hindi",    key: "hi", native: "हिन्दी",        english: "Hindi",    speech: "hi-IN" },
  { code: "bengali",  key: "bn", native: "বাংলা",         english: "Bengali",  speech: "bn-IN" },
  { code: "marathi",  key: "mr", native: "मराठी",          english: "Marathi",  speech: "mr-IN" },
  { code: "gujarati", key: "gu", native: "ગુજરાતી",        english: "Gujarati", speech: "gu-IN" },
  { code: "telugu",   key: "te", native: "తెలుగు",         english: "Telugu",   speech: "te-IN" }
];

/* Interface strings. Placeholders {n}, {t}, {g}, {lang} are filled at runtime.
   Keys are grouped by screen for readability. */
window.SAKSHAM_STRINGS = {
  en: {
    nav_library: "Library", nav_achievements: "Achievements", nav_educators: "For educators", nav_about: "About", menu: "☰ Menu",

    setup_title: "Saksham — inclusive learning for all.",
    setup_meaning: "सक्षम · capable",
    setup_lede: "Empowering every learner, whatever their ability or background. Let's set things up for the way your brain works. Nothing here is permanent — you can change any of it later.",
    setup_name_label: "What should I call you?",
    setup_name_ph: "Just a first name is fine",
    setup_avatar_label: "Pick an avatar",
    setup_open: "Open my library →", setup_skip: "Skip — just call me Reader",
    av_blue: "Fox", av_green: "Turtle", av_warm: "Butterfly", av_sun: "Bee", av_lav: "Owl", av_rose: "Panda",

    g_welcome: "Welcome", g_welcome_back: "Welcome back", g_morning: "Good morning", g_afternoon: "Good afternoon", g_evening: "Good evening", g_late: "Up late", g_done: "Done — and welcome back",
    hero_sub_new: "Pick something to read at your own pace. Words with a dotted underline have definitions you can tap. Your settings travel with you across every page.",
    hero_sub_mid: "Pick up where you left off, or try something new. Nothing here is timed.",
    hero_sub_done: "You've read everything. Re-reading counts. Or come back tomorrow.",
    read_count: "{n} of {t} passages read",
    milestones: "Milestones →", continue_reading: "Continue reading →", browse_library: "Browse the library →",
    read_titled: "Read “{t}” →", reading_prefs: "⚙ Reading preferences", change_name: "Not me? Change name",

    your_library: "Your library", filter_passages: "Filter passages",
    library_intro: "Short passages across three shelves. Words with a dotted underline have definitions — tap them.",
    cat_stories: "Stories", cat_science: "Science", cat_sky: "Sky & stars",
    tag_stories: "Short tales worth carrying with you.", tag_science: "How the world quietly works.", tag_sky: "What's overhead, and why.",
    n_passages: "{n} passages", one_passage: "1 passage",
    shelf: "Shelf", empty_shelf: "No passages match your filters. Try clearing a filter.",

    prefs_title: "Reading preferences", prefs_hint: "Change anything. Every page remembers.",
    font: "Font", size: "Size", theme: "Theme", motion: "Motion", readaloud: "Read-aloud", voicecues: "Voice cues", pace: "Pace",
    size_m: "Medium", size_l: "Large", size_xl: "Extra large",
    theme_cream: "Warm cream", theme_soft: "Soft blue", theme_dark: "Dark", theme_high: "High contrast",
    motion_full: "Full", motion_reduced: "Reduced", motion_none: "None",
    readaloud_desc: "Hear the words while you see them.", voicecues_desc: "Speaks button labels when you focus on them. For emerging readers.",

    filter_title: "Find passages that fit you", filter_hint: "Filter by language, learning need, or grade.",
    f_language: "Language", f_needs: "Learning needs", f_grade: "Grade level",
    need_dyslexia: "Dyslexia", need_adhd: "ADHD", need_autism: "Autism", need_speech: "Speech", need_visual: "Visual / Motor",
    filter_clear: "Clear all", filter_apply: "Apply filters",
    filter_result: "{lang} · Grade {g} · Showing {n} of {total} passages.",
    filters_active: "{n} filters active.",
    sug_dyslexia: "Try OpenDyslexic font and turn on read-aloud.",
    sug_adhd: "Try Reduced or No motion, and High contrast for fewer visual distractions.",
    sug_autism: "Try the warm cream or dark theme. Turn off audio if it adds to the load.",
    sug_speech: "Read-aloud is on by default — no spoken response required from the reader.",
    sug_visual: "Increase text size to Large or Extra Large; try the high-contrast theme.",
    sug_prefix: "Suggestions for your filters: ",

    back_to_library: "← Back to library", read_aloud: "▶ Read aloud", stop: "■ Stop", more_prefs: "⚙ More preferences",
    n_paragraphs: "{n} paragraphs",
    reflect_title: "Take a moment.", reflect_ph: "Type a sentence or two. Or leave it empty. Both are fine.",
    reflect_saved: "Saved to this device only.", i_read_this: "I read this", skip_note: "You can leave the note empty — it's not a test.",
    your_last_note: "Your last note", char_count: "{n} / 280",

    complete_title: "Nice. You read {t}.", complete_sub: "Take a breath. There's no rush on what's next.",
    complete_saved: "Your note has been saved to this device.", try_next: "Try this next?", back_to_library2: "Back to library",
    all_done: "🌱 You've read every passage in the library. Come back any time — re-reading counts.",

    milestone_label: "Milestone",
    footer_tagline: "Saksham — capable learning, your way.", footer_source: "Source",
    voice_on: "🔊 Voice cues on",
    level_Easy: "Easy", level_Medium: "Medium", min_label: "{n} min", read_done: "✓ You read this"
  },

  hi: {
    nav_library: "पुस्तकालय", nav_achievements: "उपलब्धियाँ", nav_educators: "शिक्षकों के लिए", nav_about: "परिचय", menu: "☰ मेन्यू",

    setup_title: "सक्षम — सबके लिए समावेशी शिक्षा।",
    setup_meaning: "सक्षम · capable",
    setup_lede: "हर विद्यार्थी को सशक्त बनाना, चाहे उसकी क्षमता या पृष्ठभूमि कुछ भी हो। आइए सब कुछ आपके मस्तिष्क के अनुसार सेट करें। यहाँ कुछ भी स्थायी नहीं है — आप बाद में कुछ भी बदल सकते हैं।",
    setup_name_label: "मैं आपको क्या कहकर बुलाऊँ?",
    setup_name_ph: "सिर्फ़ पहला नाम भी ठीक है",
    setup_avatar_label: "एक अवतार चुनें",
    setup_open: "मेरा पुस्तकालय खोलें →", setup_skip: "छोड़ें — मुझे बस पाठक कहें",
    av_blue: "लोमड़ी", av_green: "कछुआ", av_warm: "तितली", av_sun: "मधुमक्खी", av_lav: "उल्लू", av_rose: "पांडा",

    g_welcome: "स्वागत है", g_welcome_back: "वापसी पर स्वागत है", g_morning: "सुप्रभात", g_afternoon: "नमस्कार", g_evening: "शुभ संध्या", g_late: "देर रात", g_done: "पूरा हुआ — और वापसी पर स्वागत है",
    hero_sub_new: "अपनी गति से पढ़ने के लिए कुछ चुनें। बिंदीदार रेखांकित शब्दों के अर्थ हैं — उन्हें छूएँ। आपकी सेटिंग्स हर पन्ने पर आपके साथ रहती हैं।",
    hero_sub_mid: "जहाँ छोड़ा था वहीं से शुरू करें, या कुछ नया आज़माएँ। यहाँ कुछ भी समयबद्ध नहीं है।",
    hero_sub_done: "आपने सब कुछ पढ़ लिया है। दोबारा पढ़ना भी गिना जाता है। या कल फिर आइए।",
    read_count: "{t} में से {n} अंश पढ़े",
    milestones: "मील के पत्थर →", continue_reading: "पढ़ना जारी रखें →", browse_library: "पुस्तकालय देखें →",
    read_titled: "“{t}” पढ़ें →", reading_prefs: "⚙ पढ़ने की पसंद", change_name: "मैं नहीं? नाम बदलें",

    your_library: "आपका पुस्तकालय", filter_passages: "अंश छाँटें",
    library_intro: "तीन अलमारियों में छोटे अंश। बिंदीदार रेखांकित शब्दों के अर्थ हैं — उन्हें छूएँ।",
    cat_stories: "कहानियाँ", cat_science: "विज्ञान", cat_sky: "आकाश और तारे",
    tag_stories: "साथ ले जाने लायक छोटी कहानियाँ।", tag_science: "दुनिया चुपचाप कैसे काम करती है।", tag_sky: "ऊपर क्या है, और क्यों।",
    n_passages: "{n} अंश", one_passage: "1 अंश",
    shelf: "अलमारी", empty_shelf: "आपके फ़िल्टर से कोई अंश मेल नहीं खाता। कोई फ़िल्टर हटाकर देखें।",

    prefs_title: "पढ़ने की पसंद", prefs_hint: "कुछ भी बदलें। हर पन्ना याद रखता है।",
    font: "फ़ॉन्ट", size: "आकार", theme: "थीम", motion: "गति", readaloud: "ज़ोर से पढ़ें", voicecues: "आवाज़ संकेत", pace: "रफ़्तार",
    size_m: "मध्यम", size_l: "बड़ा", size_xl: "बहुत बड़ा",
    theme_cream: "गर्म क्रीम", theme_soft: "हल्का नीला", theme_dark: "गहरा", theme_high: "उच्च कंट्रास्ट",
    motion_full: "पूर्ण", motion_reduced: "कम", motion_none: "कोई नहीं",
    readaloud_desc: "शब्द देखते हुए उन्हें सुनें।", voicecues_desc: "जिस बटन पर ध्यान दें उसका नाम बोलता है। नए पाठकों के लिए।",

    filter_title: "अपने लिए उपयुक्त अंश खोजें", filter_hint: "भाषा, सीखने की ज़रूरत या कक्षा के अनुसार छाँटें।",
    f_language: "भाषा", f_needs: "सीखने की ज़रूरतें", f_grade: "कक्षा स्तर",
    need_dyslexia: "डिस्लेक्सिया", need_adhd: "ADHD", need_autism: "ऑटिज़्म", need_speech: "वाणी", need_visual: "दृष्टि / गति",
    filter_clear: "सब हटाएँ", filter_apply: "फ़िल्टर लगाएँ",
    filter_result: "{lang} · कक्षा {g} · {total} में से {n} अंश दिखा रहे हैं।",
    filters_active: "{n} फ़िल्टर सक्रिय।",
    sug_dyslexia: "OpenDyslexic फ़ॉन्ट आज़माएँ और ज़ोर से पढ़ना चालू करें।",
    sug_adhd: "कम या बिना गति आज़माएँ, और कम दृश्य विकर्षण के लिए उच्च कंट्रास्ट।",
    sug_autism: "गर्म क्रीम या गहरी थीम आज़माएँ। अगर बोझ लगे तो ऑडियो बंद करें।",
    sug_speech: "ज़ोर से पढ़ना पहले से चालू है — पाठक को बोलकर जवाब देने की ज़रूरत नहीं।",
    sug_visual: "टेक्स्ट का आकार बड़ा या बहुत बड़ा करें; उच्च कंट्रास्ट थीम आज़माएँ।",
    sug_prefix: "आपके फ़िल्टर के लिए सुझाव: ",

    back_to_library: "← पुस्तकालय पर लौटें", read_aloud: "▶ ज़ोर से पढ़ें", stop: "■ रोकें", more_prefs: "⚙ और पसंद",
    n_paragraphs: "{n} अनुच्छेद",
    reflect_title: "एक पल रुकें।", reflect_ph: "एक-दो वाक्य लिखें। या खाली छोड़ दें। दोनों ठीक हैं।",
    reflect_saved: "केवल इसी डिवाइस पर सहेजा गया।", i_read_this: "मैंने यह पढ़ा", skip_note: "नोट खाली छोड़ सकते हैं — यह परीक्षा नहीं है।",
    your_last_note: "आपका पिछला नोट", char_count: "{n} / 280",

    complete_title: "बढ़िया। आपने {t} पढ़ा।", complete_sub: "एक साँस लें। आगे क्या है, उसकी कोई जल्दी नहीं।",
    complete_saved: "आपका नोट इस डिवाइस पर सहेज लिया गया है।", try_next: "अब यह आज़माएँ?", back_to_library2: "पुस्तकालय पर लौटें",
    all_done: "🌱 आपने पुस्तकालय का हर अंश पढ़ लिया है। कभी भी लौटें — दोबारा पढ़ना भी गिना जाता है।",

    milestone_label: "मील का पत्थर",
    footer_tagline: "सक्षम — आपका तरीका, सक्षम शिक्षा।", footer_source: "स्रोत",
    voice_on: "🔊 आवाज़ संकेत चालू",
    level_Easy: "आसान", level_Medium: "मध्यम", min_label: "{n} मिनट", read_done: "✓ आपने यह पढ़ा"
  },

  bn: {
    nav_library: "গ্রন্থাগার", nav_achievements: "অর্জন", nav_educators: "শিক্ষকদের জন্য", nav_about: "পরিচিতি", menu: "☰ মেনু",

    setup_title: "সক্ষম — সবার জন্য অন্তর্ভুক্তিমূলক শিক্ষা।",
    setup_meaning: "সক্ষম · capable",
    setup_lede: "প্রতিটি শিক্ষার্থীকে ক্ষমতায়িত করা, তার সক্ষমতা বা পটভূমি যাই হোক না কেন। চলুন আপনার মস্তিষ্ক যেভাবে কাজ করে সেভাবে সব সাজাই। এখানে কিছুই স্থায়ী নয় — পরে যেকোনো কিছু বদলাতে পারবেন।",
    setup_name_label: "আমি আপনাকে কী বলে ডাকব?",
    setup_name_ph: "শুধু প্রথম নামই যথেষ্ট",
    setup_avatar_label: "একটি অবতার বেছে নিন",
    setup_open: "আমার গ্রন্থাগার খুলুন →", setup_skip: "বাদ দিন — শুধু পাঠক বলুন",
    av_blue: "শেয়াল", av_green: "কচ্ছপ", av_warm: "প্রজাপতি", av_sun: "মৌমাছি", av_lav: "প্যাঁচা", av_rose: "পান্ডা",

    g_welcome: "স্বাগতম", g_welcome_back: "ফিরে আসায় স্বাগতম", g_morning: "শুভ সকাল", g_afternoon: "শুভ অপরাহ্ণ", g_evening: "শুভ সন্ধ্যা", g_late: "অনেক রাত", g_done: "সম্পন্ন — আবার স্বাগতম",
    hero_sub_new: "নিজের গতিতে পড়ার জন্য কিছু বেছে নিন। বিন্দু-আঁকা শব্দগুলোর অর্থ আছে — সেগুলো ছুঁয়ে দেখুন। আপনার সেটিংস প্রতিটি পাতায় আপনার সঙ্গে থাকে।",
    hero_sub_mid: "যেখানে থেমেছিলেন সেখান থেকে শুরু করুন, বা নতুন কিছু চেষ্টা করুন। এখানে কোনো সময়সীমা নেই।",
    hero_sub_done: "আপনি সব পড়ে ফেলেছেন। আবার পড়াও গোনা হয়। বা কাল ফিরে আসুন।",
    read_count: "{t}টির মধ্যে {n}টি অংশ পড়া হয়েছে",
    milestones: "মাইলফলক →", continue_reading: "পড়া চালিয়ে যান →", browse_library: "গ্রন্থাগার দেখুন →",
    read_titled: "“{t}” পড়ুন →", reading_prefs: "⚙ পড়ার পছন্দ", change_name: "আমি নই? নাম বদলান",

    your_library: "আপনার গ্রন্থাগার", filter_passages: "অংশ ছাঁকুন",
    library_intro: "তিনটি তাকে ছোট অংশ। বিন্দু-আঁকা শব্দগুলোর অর্থ আছে — সেগুলো ছুঁয়ে দেখুন।",
    cat_stories: "গল্প", cat_science: "বিজ্ঞান", cat_sky: "আকাশ ও তারা",
    tag_stories: "সঙ্গে নিয়ে যাওয়ার মতো ছোট গল্প।", tag_science: "পৃথিবী কীভাবে নীরবে কাজ করে।", tag_sky: "মাথার উপরে কী আছে, আর কেন।",
    n_passages: "{n}টি অংশ", one_passage: "১টি অংশ",
    shelf: "তাক", empty_shelf: "আপনার ছাঁকনির সঙ্গে কোনো অংশ মেলেনি। একটি ছাঁকনি সরিয়ে দেখুন।",

    prefs_title: "পড়ার পছন্দ", prefs_hint: "যেকোনো কিছু বদলান। প্রতিটি পাতা মনে রাখে।",
    font: "ফন্ট", size: "আকার", theme: "থিম", motion: "চলন", readaloud: "সরবে পড়া", voicecues: "কণ্ঠ-সংকেত", pace: "গতি",
    size_m: "মাঝারি", size_l: "বড়", size_xl: "অতি বড়",
    theme_cream: "উষ্ণ ক্রিম", theme_soft: "নরম নীল", theme_dark: "অন্ধকার", theme_high: "উচ্চ বৈসাদৃশ্য",
    motion_full: "পূর্ণ", motion_reduced: "কম", motion_none: "কিছু না",
    readaloud_desc: "শব্দ দেখার সঙ্গে সঙ্গে শুনুন।", voicecues_desc: "যে বোতামে মনোযোগ দেবেন তার নাম বলে। নতুন পাঠকদের জন্য।",

    filter_title: "আপনার উপযোগী অংশ খুঁজুন", filter_hint: "ভাষা, শেখার প্রয়োজন বা শ্রেণি অনুসারে ছাঁকুন।",
    f_language: "ভাষা", f_needs: "শেখার প্রয়োজন", f_grade: "শ্রেণি স্তর",
    need_dyslexia: "ডিসলেক্সিয়া", need_adhd: "ADHD", need_autism: "অটিজম", need_speech: "বাক্‌", need_visual: "দৃষ্টি / সঞ্চালন",
    filter_clear: "সব মুছুন", filter_apply: "ছাঁকনি প্রয়োগ করুন",
    filter_result: "{lang} · শ্রেণি {g} · {total}টির মধ্যে {n}টি অংশ দেখানো হচ্ছে।",
    filters_active: "{n}টি ছাঁকনি সক্রিয়।",
    sug_dyslexia: "OpenDyslexic ফন্ট চেষ্টা করুন এবং সরবে পড়া চালু করুন।",
    sug_adhd: "কম বা চলন বন্ধ করুন, এবং কম দৃশ্য বিক্ষেপের জন্য উচ্চ বৈসাদৃশ্য।",
    sug_autism: "উষ্ণ ক্রিম বা অন্ধকার থিম চেষ্টা করুন। ভার বাড়লে অডিও বন্ধ করুন।",
    sug_speech: "সরবে পড়া আগে থেকেই চালু — পাঠকের মুখে উত্তর দেওয়ার দরকার নেই।",
    sug_visual: "লেখার আকার বড় বা অতি বড় করুন; উচ্চ বৈসাদৃশ্য থিম চেষ্টা করুন।",
    sug_prefix: "আপনার ছাঁকনির জন্য পরামর্শ: ",

    back_to_library: "← গ্রন্থাগারে ফিরুন", read_aloud: "▶ সরবে পড়ুন", stop: "■ থামুন", more_prefs: "⚙ আরও পছন্দ",
    n_paragraphs: "{n}টি অনুচ্ছেদ",
    reflect_title: "একটু থামুন।", reflect_ph: "এক-দুই বাক্য লিখুন। বা খালি রাখুন। দুটোই ঠিক আছে।",
    reflect_saved: "শুধু এই ডিভাইসে সংরক্ষিত।", i_read_this: "আমি এটি পড়েছি", skip_note: "নোট খালি রাখতে পারেন — এটি পরীক্ষা নয়।",
    your_last_note: "আপনার শেষ নোট", char_count: "{n} / 280",

    complete_title: "বেশ। আপনি {t} পড়েছেন।", complete_sub: "একটু শ্বাস নিন। পরে কী, তার কোনো তাড়া নেই।",
    complete_saved: "আপনার নোট এই ডিভাইসে সংরক্ষিত হয়েছে।", try_next: "এখন এটি চেষ্টা করবেন?", back_to_library2: "গ্রন্থাগারে ফিরুন",
    all_done: "🌱 আপনি গ্রন্থাগারের প্রতিটি অংশ পড়ে ফেলেছেন। যেকোনো সময় ফিরে আসুন — আবার পড়াও গোনা হয়।",

    milestone_label: "মাইলফলক",
    footer_tagline: "সক্ষম — আপনার মতো করে, সক্ষম শিক্ষা।", footer_source: "উৎস",
    voice_on: "🔊 কণ্ঠ-সংকেত চালু",
    level_Easy: "সহজ", level_Medium: "মাঝারি", min_label: "{n} মিনিট", read_done: "✓ আপনি এটি পড়েছেন"
  },

  mr: {
    nav_library: "ग्रंथालय", nav_achievements: "यश", nav_educators: "शिक्षकांसाठी", nav_about: "परिचय", menu: "☰ मेन्यू",

    setup_title: "सक्षम — सर्वांसाठी समावेशक शिक्षण.",
    setup_meaning: "सक्षम · capable",
    setup_lede: "प्रत्येक विद्यार्थ्याला सक्षम करणे, त्याची क्षमता किंवा पार्श्वभूमी काहीही असो. चला तुमचा मेंदू ज्या पद्धतीने काम करतो त्यानुसार सर्व मांडूया. इथे काहीही कायमचे नाही — तुम्ही नंतर काहीही बदलू शकता.",
    setup_name_label: "मी तुम्हाला काय म्हणू?",
    setup_name_ph: "फक्त पहिले नाव पुरेसे आहे",
    setup_avatar_label: "एक अवतार निवडा",
    setup_open: "माझे ग्रंथालय उघडा →", setup_skip: "वगळा — मला फक्त वाचक म्हणा",
    av_blue: "कोल्हा", av_green: "कासव", av_warm: "फुलपाखरू", av_sun: "मधमाशी", av_lav: "घुबड", av_rose: "पांडा",

    g_welcome: "स्वागत आहे", g_welcome_back: "परत आल्याबद्दल स्वागत", g_morning: "शुभ सकाळ", g_afternoon: "नमस्कार", g_evening: "शुभ संध्याकाळ", g_late: "रात्र उशिरा", g_done: "पूर्ण — आणि परत स्वागत",
    hero_sub_new: "तुमच्या गतीने वाचण्यासाठी काहीतरी निवडा. ठिपक्यांची रेघ असलेल्या शब्दांचे अर्थ आहेत — त्यांना स्पर्श करा. तुमची सेटिंग्ज प्रत्येक पानावर तुमच्यासोबत राहतात.",
    hero_sub_mid: "जिथे थांबला होता तिथून सुरू करा, किंवा काहीतरी नवीन करून पहा. इथे काहीही वेळेवर बांधलेले नाही.",
    hero_sub_done: "तुम्ही सर्व वाचले आहे. पुन्हा वाचणेही मोजले जाते. किंवा उद्या परत या.",
    read_count: "{t} पैकी {n} उतारे वाचले",
    milestones: "टप्पे →", continue_reading: "वाचन सुरू ठेवा →", browse_library: "ग्रंथालय पहा →",
    read_titled: "“{t}” वाचा →", reading_prefs: "⚙ वाचनाची पसंती", change_name: "मी नाही? नाव बदला",

    your_library: "तुमचे ग्रंथालय", filter_passages: "उतारे गाळा",
    library_intro: "तीन कप्प्यांमध्ये लहान उतारे. ठिपक्यांची रेघ असलेल्या शब्दांचे अर्थ आहेत — त्यांना स्पर्श करा.",
    cat_stories: "गोष्टी", cat_science: "विज्ञान", cat_sky: "आकाश आणि तारे",
    tag_stories: "सोबत घेऊन जाण्यासारख्या छोट्या गोष्टी.", tag_science: "जग शांतपणे कसे चालते.", tag_sky: "वर काय आहे, आणि का.",
    n_passages: "{n} उतारे", one_passage: "१ उतारा",
    shelf: "कप्पा", empty_shelf: "तुमच्या गाळणीशी कोणताही उतारा जुळत नाही. एखादी गाळणी काढून पहा.",

    prefs_title: "वाचनाची पसंती", prefs_hint: "काहीही बदला. प्रत्येक पान लक्षात ठेवते.",
    font: "फॉन्ट", size: "आकार", theme: "थीम", motion: "हालचाल", readaloud: "मोठ्याने वाचा", voicecues: "आवाज सूचना", pace: "गती",
    size_m: "मध्यम", size_l: "मोठा", size_xl: "खूप मोठा",
    theme_cream: "उबदार क्रीम", theme_soft: "मऊ निळा", theme_dark: "गडद", theme_high: "उच्च कॉन्ट्रास्ट",
    motion_full: "पूर्ण", motion_reduced: "कमी", motion_none: "काहीही नाही",
    readaloud_desc: "शब्द पाहताना ते ऐका.", voicecues_desc: "तुम्ही ज्या बटणावर लक्ष द्याल त्याचे नाव बोलते. नवीन वाचकांसाठी.",

    filter_title: "तुम्हाला साजेसे उतारे शोधा", filter_hint: "भाषा, शिकण्याची गरज किंवा इयत्तेनुसार गाळा.",
    f_language: "भाषा", f_needs: "शिकण्याच्या गरजा", f_grade: "इयत्ता स्तर",
    need_dyslexia: "डिस्लेक्सिया", need_adhd: "ADHD", need_autism: "ऑटिझम", need_speech: "वाचा", need_visual: "दृष्टी / हालचाल",
    filter_clear: "सर्व काढा", filter_apply: "गाळणी लावा",
    filter_result: "{lang} · इयत्ता {g} · {total} पैकी {n} उतारे दाखवत आहे.",
    filters_active: "{n} गाळण्या सक्रिय.",
    sug_dyslexia: "OpenDyslexic फॉन्ट वापरून पहा आणि मोठ्याने वाचणे चालू करा.",
    sug_adhd: "कमी किंवा हालचाल बंद करा, आणि कमी दृश्य विचलनासाठी उच्च कॉन्ट्रास्ट.",
    sug_autism: "उबदार क्रीम किंवा गडद थीम वापरून पहा. भार वाटल्यास ऑडिओ बंद करा.",
    sug_speech: "मोठ्याने वाचणे आधीच चालू आहे — वाचकाने बोलून उत्तर देण्याची गरज नाही.",
    sug_visual: "मजकुराचा आकार मोठा किंवा खूप मोठा करा; उच्च कॉन्ट्रास्ट थीम वापरून पहा.",
    sug_prefix: "तुमच्या गाळणीसाठी सूचना: ",

    back_to_library: "← ग्रंथालयाकडे परत", read_aloud: "▶ मोठ्याने वाचा", stop: "■ थांबा", more_prefs: "⚙ अधिक पसंती",
    n_paragraphs: "{n} परिच्छेद",
    reflect_title: "एक क्षण थांबा.", reflect_ph: "एक-दोन वाक्ये लिहा. किंवा रिकामे ठेवा. दोन्ही ठीक आहे.",
    reflect_saved: "फक्त याच उपकरणावर जतन केले.", i_read_this: "मी हे वाचले", skip_note: "टीप रिकामी ठेवू शकता — ही परीक्षा नाही.",
    your_last_note: "तुमची शेवटची टीप", char_count: "{n} / 280",

    complete_title: "छान. तुम्ही {t} वाचले.", complete_sub: "एक श्वास घ्या. पुढे काय, याची घाई नाही.",
    complete_saved: "तुमची टीप या उपकरणावर जतन केली आहे.", try_next: "आता हे करून पहा?", back_to_library2: "ग्रंथालयाकडे परत",
    all_done: "🌱 तुम्ही ग्रंथालयातील प्रत्येक उतारा वाचला आहे. कधीही परत या — पुन्हा वाचणेही मोजले जाते.",

    milestone_label: "टप्पा",
    footer_tagline: "सक्षम — तुमच्या पद्धतीने, सक्षम शिक्षण.", footer_source: "स्रोत",
    voice_on: "🔊 आवाज सूचना चालू",
    level_Easy: "सोपा", level_Medium: "मध्यम", min_label: "{n} मिनिटे", read_done: "✓ तुम्ही हे वाचले"
  },

  gu: {
    nav_library: "પુસ્તકાલય", nav_achievements: "સિદ્ધિઓ", nav_educators: "શિક્ષકો માટે", nav_about: "પરિચય", menu: "☰ મેનુ",

    setup_title: "સક્ષમ — સૌ માટે સમાવેશી શિક્ષણ.",
    setup_meaning: "સક્ષમ · capable",
    setup_lede: "દરેક વિદ્યાર્થીને સશક્ત બનાવવો, તેની ક્ષમતા કે પૃષ્ઠભૂમિ ગમે તે હોય. ચાલો તમારું મગજ જે રીતે કામ કરે છે તે રીતે બધું ગોઠવીએ. અહીં કશું કાયમી નથી — તમે પછી કંઈ પણ બદલી શકો છો.",
    setup_name_label: "હું તમને શું કહીને બોલાવું?",
    setup_name_ph: "ફક્ત પહેલું નામ પણ ચાલશે",
    setup_avatar_label: "એક અવતાર પસંદ કરો",
    setup_open: "મારું પુસ્તકાલય ખોલો →", setup_skip: "છોડો — મને ફક્ત વાચક કહો",
    av_blue: "શિયાળ", av_green: "કાચબો", av_warm: "પતંગિયું", av_sun: "મધમાખી", av_lav: "ઘુવડ", av_rose: "પાંડા",

    g_welcome: "સ્વાગત છે", g_welcome_back: "પાછા ફરવા બદલ સ્વાગત", g_morning: "સુપ્રભાત", g_afternoon: "નમસ્કાર", g_evening: "શુભ સાંજ", g_late: "મોડી રાત", g_done: "પૂર્ણ — અને પાછા સ્વાગત",
    hero_sub_new: "તમારી ગતિએ વાંચવા માટે કંઈક પસંદ કરો. ટપકાંવાળી રેખા હેઠળના શબ્દોના અર્થ છે — તેમને સ્પર્શ કરો. તમારી સેટિંગ્સ દરેક પાના પર તમારી સાથે રહે છે.",
    hero_sub_mid: "જ્યાં છોડ્યું હતું ત્યાંથી શરૂ કરો, અથવા કંઈક નવું અજમાવો. અહીં કશું સમયબદ્ધ નથી.",
    hero_sub_done: "તમે બધું વાંચી લીધું છે. ફરી વાંચવું પણ ગણાય છે. અથવા કાલે પાછા આવો.",
    read_count: "{t} માંથી {n} ફકરા વાંચ્યા",
    milestones: "સીમાચિહ્નો →", continue_reading: "વાંચન ચાલુ રાખો →", browse_library: "પુસ્તકાલય જુઓ →",
    read_titled: "“{t}” વાંચો →", reading_prefs: "⚙ વાંચન પસંદગી", change_name: "હું નહીં? નામ બદલો",

    your_library: "તમારું પુસ્તકાલય", filter_passages: "ફકરા ગાળો",
    library_intro: "ત્રણ ઘોડામાં ટૂંકા ફકરા. ટપકાંવાળી રેખા હેઠળના શબ્દોના અર્થ છે — તેમને સ્પર્શ કરો.",
    cat_stories: "વાર્તાઓ", cat_science: "વિજ્ઞાન", cat_sky: "આકાશ અને તારા",
    tag_stories: "સાથે લઈ જવા જેવી ટૂંકી વાર્તાઓ.", tag_science: "દુનિયા શાંતિથી કેવી રીતે ચાલે છે.", tag_sky: "ઉપર શું છે, અને કેમ.",
    n_passages: "{n} ફકરા", one_passage: "૧ ફકરો",
    shelf: "ઘોડો", empty_shelf: "તમારા ગાળકો સાથે કોઈ ફકરો મેળ ખાતો નથી. એક ગાળક કાઢીને જુઓ.",

    prefs_title: "વાંચન પસંદગી", prefs_hint: "કંઈ પણ બદલો. દરેક પાનું યાદ રાખે છે.",
    font: "ફોન્ટ", size: "કદ", theme: "થીમ", motion: "ગતિ", readaloud: "મોટેથી વાંચો", voicecues: "અવાજ સંકેત", pace: "ઝડપ",
    size_m: "મધ્યમ", size_l: "મોટું", size_xl: "ખૂબ મોટું",
    theme_cream: "ઉષ્માભર્યું ક્રીમ", theme_soft: "નરમ વાદળી", theme_dark: "ઘેરું", theme_high: "ઉચ્ચ કોન્ટ્રાસ્ટ",
    motion_full: "પૂર્ણ", motion_reduced: "ઓછું", motion_none: "કંઈ નહીં",
    readaloud_desc: "શબ્દો જોતાં જોતાં તેમને સાંભળો.", voicecues_desc: "તમે જે બટન પર ધ્યાન આપો તેનું નામ બોલે છે. નવા વાચકો માટે.",

    filter_title: "તમને અનુકૂળ ફકરા શોધો", filter_hint: "ભાષા, શીખવાની જરૂર કે ધોરણ પ્રમાણે ગાળો.",
    f_language: "ભાષા", f_needs: "શીખવાની જરૂરિયાતો", f_grade: "ધોરણ સ્તર",
    need_dyslexia: "ડિસ્લેક્સિયા", need_adhd: "ADHD", need_autism: "ઓટિઝમ", need_speech: "વાણી", need_visual: "દૃષ્ટિ / ગતિ",
    filter_clear: "બધું કાઢો", filter_apply: "ગાળક લાગુ કરો",
    filter_result: "{lang} · ધોરણ {g} · {total} માંથી {n} ફકરા બતાવી રહ્યા છીએ.",
    filters_active: "{n} ગાળક સક્રિય.",
    sug_dyslexia: "OpenDyslexic ફોન્ટ અજમાવો અને મોટેથી વાંચન ચાલુ કરો.",
    sug_adhd: "ઓછી કે ગતિ બંધ કરો, અને ઓછા દૃશ્ય વિક્ષેપ માટે ઉચ્ચ કોન્ટ્રાસ્ટ.",
    sug_autism: "ઉષ્માભર્યું ક્રીમ કે ઘેરી થીમ અજમાવો. ભાર લાગે તો ઓડિયો બંધ કરો.",
    sug_speech: "મોટેથી વાંચન પહેલેથી ચાલુ છે — વાચકે બોલીને જવાબ આપવાની જરૂર નથી.",
    sug_visual: "લખાણનું કદ મોટું કે ખૂબ મોટું કરો; ઉચ્ચ કોન્ટ્રાસ્ટ થીમ અજમાવો.",
    sug_prefix: "તમારા ગાળક માટે સૂચનો: ",

    back_to_library: "← પુસ્તકાલય પર પાછા", read_aloud: "▶ મોટેથી વાંચો", stop: "■ રોકો", more_prefs: "⚙ વધુ પસંદગી",
    n_paragraphs: "{n} ફકરા",
    reflect_title: "એક ક્ષણ થોભો.", reflect_ph: "એક-બે વાક્ય લખો. અથવા ખાલી રાખો. બંને બરાબર છે.",
    reflect_saved: "ફક્ત આ ઉપકરણ પર સાચવ્યું.", i_read_this: "મેં આ વાંચ્યું", skip_note: "નોંધ ખાલી રાખી શકો — આ પરીક્ષા નથી.",
    your_last_note: "તમારી છેલ્લી નોંધ", char_count: "{n} / 280",

    complete_title: "સરસ. તમે {t} વાંચ્યું.", complete_sub: "એક શ્વાસ લો. આગળ શું છે, તેની ઉતાવળ નથી.",
    complete_saved: "તમારી નોંધ આ ઉપકરણ પર સાચવાઈ છે.", try_next: "હવે આ અજમાવો?", back_to_library2: "પુસ્તકાલય પર પાછા",
    all_done: "🌱 તમે પુસ્તકાલયનો દરેક ફકરો વાંચી લીધો છે. ગમે ત્યારે પાછા આવો — ફરી વાંચવું પણ ગણાય છે.",

    milestone_label: "સીમાચિહ્ન",
    footer_tagline: "સક્ષમ — તમારી રીતે, સક્ષમ શિક્ષણ.", footer_source: "સ્રોત",
    voice_on: "🔊 અવાજ સંકેત ચાલુ",
    level_Easy: "સરળ", level_Medium: "મધ્યમ", min_label: "{n} મિનિટ", read_done: "✓ તમે આ વાંચ્યું"
  },

  te: {
    nav_library: "గ్రంథాలయం", nav_achievements: "విజయాలు", nav_educators: "ఉపాధ్యాయుల కోసం", nav_about: "పరిచయం", menu: "☰ మెను",

    setup_title: "సక్షమ్ — అందరికీ సమ్మిళిత విద్య.",
    setup_meaning: "సక్షమ్ · capable",
    setup_lede: "ప్రతి విద్యార్థిని శక్తివంతం చేయడం, వారి సామర్థ్యం లేదా నేపథ్యం ఏదైనా కావచ్చు. మీ మెదడు పనిచేసే విధంగా అన్నీ అమర్చుకుందాం. ఇక్కడ ఏదీ శాశ్వతం కాదు — తర్వాత మీరు ఏదైనా మార్చవచ్చు.",
    setup_name_label: "నేను మిమ్మల్ని ఏమని పిలవాలి?",
    setup_name_ph: "మొదటి పేరు చాలు",
    setup_avatar_label: "ఒక అవతార్ ఎంచుకోండి",
    setup_open: "నా గ్రంథాలయాన్ని తెరువు →", setup_skip: "వదిలెయ్యి — నన్ను పాఠకుడు అని పిలువు",
    av_blue: "నక్క", av_green: "తాబేలు", av_warm: "సీతాకోకచిలుక", av_sun: "తేనెటీగ", av_lav: "గుడ్లగూబ", av_rose: "పాండా",

    g_welcome: "స్వాగతం", g_welcome_back: "తిరిగి స్వాగతం", g_morning: "శుభోదయం", g_afternoon: "నమస్కారం", g_evening: "శుభ సాయంత్రం", g_late: "రాత్రి ఆలస్యం", g_done: "పూర్తయింది — తిరిగి స్వాగతం",
    hero_sub_new: "మీ వేగంతో చదవడానికి ఏదైనా ఎంచుకోండి. చుక్కల గీత ఉన్న పదాలకు అర్థాలు ఉన్నాయి — వాటిని తాకండి. మీ సెట్టింగ్‌లు ప్రతి పేజీలో మీతో ఉంటాయి.",
    hero_sub_mid: "ఆపిన చోటు నుండి కొనసాగించండి, లేదా కొత్తది ప్రయత్నించండి. ఇక్కడ ఏదీ సమయానికి కట్టుబడి లేదు.",
    hero_sub_done: "మీరు అన్నీ చదివారు. మళ్ళీ చదవడం కూడా లెక్కిస్తాం. లేదా రేపు తిరిగి రండి.",
    read_count: "{t} లో {n} భాగాలు చదివారు",
    milestones: "మైలురాళ్ళు →", continue_reading: "చదవడం కొనసాగించండి →", browse_library: "గ్రంథాలయం చూడండి →",
    read_titled: "“{t}” చదవండి →", reading_prefs: "⚙ చదవడ ప్రాధాన్యతలు", change_name: "నేను కాదా? పేరు మార్చు",

    your_library: "మీ గ్రంథాలయం", filter_passages: "భాగాలను వడపోయండి",
    library_intro: "మూడు అరల్లో చిన్న భాగాలు. చుక్కల గీత ఉన్న పదాలకు అర్థాలు ఉన్నాయి — వాటిని తాకండి.",
    cat_stories: "కథలు", cat_science: "విజ్ఞానం", cat_sky: "ఆకాశం & నక్షత్రాలు",
    tag_stories: "మీతో తీసుకెళ్ళదగిన చిన్న కథలు.", tag_science: "ప్రపంచం నిశ్శబ్దంగా ఎలా పనిచేస్తుంది.", tag_sky: "పైన ఏముంది, ఎందుకు.",
    n_passages: "{n} భాగాలు", one_passage: "1 భాగం",
    shelf: "అర", empty_shelf: "మీ వడపోతలకు ఏ భాగమూ సరిపోలేదు. ఒక వడపోతను తీసివేసి చూడండి.",

    prefs_title: "చదవడ ప్రాధాన్యతలు", prefs_hint: "ఏదైనా మార్చండి. ప్రతి పేజీ గుర్తుంచుకుంటుంది.",
    font: "ఫాంట్", size: "పరిమాణం", theme: "థీమ్", motion: "చలనం", readaloud: "బిగ్గరగా చదువు", voicecues: "స్వర సూచనలు", pace: "వేగం",
    size_m: "మధ్యమం", size_l: "పెద్ద", size_xl: "చాలా పెద్ద",
    theme_cream: "వెచ్చని క్రీమ్", theme_soft: "మృదు నీలం", theme_dark: "చీకటి", theme_high: "అధిక కాంట్రాస్ట్",
    motion_full: "పూర్తి", motion_reduced: "తక్కువ", motion_none: "ఏదీ కాదు",
    readaloud_desc: "పదాలను చూస్తూ వాటిని వినండి.", voicecues_desc: "మీరు దృష్టి పెట్టిన బటన్ పేరును పలుకుతుంది. కొత్త పాఠకుల కోసం.",

    filter_title: "మీకు సరిపోయే భాగాలను కనుగొనండి", filter_hint: "భాష, నేర్చుకునే అవసరం లేదా తరగతి ప్రకారం వడపోయండి.",
    f_language: "భాష", f_needs: "నేర్చుకునే అవసరాలు", f_grade: "తరగతి స్థాయి",
    need_dyslexia: "డిస్లెక్సియా", need_adhd: "ADHD", need_autism: "ఆటిజం", need_speech: "వాక్కు", need_visual: "దృష్టి / చలనం",
    filter_clear: "అన్నీ తొలగించు", filter_apply: "వడపోతలు వర్తింపజేయి",
    filter_result: "{lang} · తరగతి {g} · {total} లో {n} భాగాలు చూపుతోంది.",
    filters_active: "{n} వడపోతలు చురుకుగా ఉన్నాయి.",
    sug_dyslexia: "OpenDyslexic ఫాంట్ ప్రయత్నించండి, బిగ్గరగా చదవడం ఆన్ చేయండి.",
    sug_adhd: "తక్కువ లేదా చలనం లేకుండా, తక్కువ దృశ్య అంతరాయాల కోసం అధిక కాంట్రాస్ట్.",
    sug_autism: "వెచ్చని క్రీమ్ లేదా చీకటి థీమ్ ప్రయత్నించండి. భారం అనిపిస్తే ఆడియో ఆపండి.",
    sug_speech: "బిగ్గరగా చదవడం ఇప్పటికే ఆన్ — పాఠకుడు మాట్లాడి జవాబు ఇవ్వాల్సిన అవసరం లేదు.",
    sug_visual: "అక్షర పరిమాణం పెద్దది లేదా చాలా పెద్దది చేయండి; అధిక కాంట్రాస్ట్ థీమ్ ప్రయత్నించండి.",
    sug_prefix: "మీ వడపోతల కోసం సూచనలు: ",

    back_to_library: "← గ్రంథాలయానికి తిరిగి", read_aloud: "▶ బిగ్గరగా చదువు", stop: "■ ఆపు", more_prefs: "⚙ మరిన్ని ప్రాధాన్యతలు",
    n_paragraphs: "{n} పేరాలు",
    reflect_title: "ఒక క్షణం ఆగండి.", reflect_ph: "ఒకటి రెండు వాక్యాలు రాయండి. లేదా ఖాళీగా ఉంచండి. రెండూ సరే.",
    reflect_saved: "ఈ పరికరంలో మాత్రమే సేవ్ చేయబడింది.", i_read_this: "నేను దీన్ని చదివాను", skip_note: "గమనికను ఖాళీగా ఉంచవచ్చు — ఇది పరీక్ష కాదు.",
    your_last_note: "మీ చివరి గమనిక", char_count: "{n} / 280",

    complete_title: "బాగుంది. మీరు {t} చదివారు.", complete_sub: "ఒక శ్వాస తీసుకోండి. తర్వాత ఏమిటో, తొందరేమీ లేదు.",
    complete_saved: "మీ గమనిక ఈ పరికరంలో సేవ్ చేయబడింది.", try_next: "ఇప్పుడు ఇది ప్రయత్నించండి?", back_to_library2: "గ్రంథాలయానికి తిరిగి",
    all_done: "🌱 మీరు గ్రంథాలయంలోని ప్రతి భాగాన్ని చదివారు. ఎప్పుడైనా తిరిగి రండి — మళ్ళీ చదవడం కూడా లెక్కిస్తాం.",

    milestone_label: "మైలురాయి",
    footer_tagline: "సక్షమ్ — మీ పద్ధతిలో, సమర్థ విద్య.", footer_source: "మూలం",
    voice_on: "🔊 స్వర సూచనలు ఆన్",
    level_Easy: "సులభం", level_Medium: "మధ్యమం", min_label: "{n} నిమి", read_done: "✓ మీరు దీన్ని చదివారు"
  }
};

/* =========================================================================
   THE LIBRARY
   -------------------------------------------------------------------------
   Each passage carries shared metadata (category, reading minutes, level,
   grade range, and the learning needs it suits — used by the filters) plus a
   per-language block: title, paragraphs, vocabulary, and a reflection prompt.
   `gmin`/`gmax` define the grade band a passage is shown for.
   ========================================================================= */
window.SAKSHAM_PASSAGES = [
  {
    id: "banyan", cat: "stories", minutes: 3, level: "Easy", gmin: 3, gmax: 6, needs: ["dyslexia", "autism"],
    en: {
      title: "The Banyan Tree",
      paragraphs: [
        "In many Indian villages, the biggest tree in the middle of the square is a banyan. A banyan does not grow tall like other trees. Instead, it grows wide. Its branches reach out, and from those branches, long roots drop down like ropes.",
        "When the roots touch the ground, they grow into the soil and become new trunks. After many years, one banyan tree can look like a small forest. Some banyans in India are more than two thousand years old. People sit under them to rest, talk, and study.",
        "Scientists call the banyan a fig tree. Its fruit is small and round, and birds love it. When a bird eats a fig and lands on another tree, the seed can sprout right on that tree's branch. That is how new banyans begin life high in the air, before sending roots down to the ground."
      ],
      vocab: [
        { word: "trunk", def: "The main stem of a tree, the thick part that holds up the branches." },
        { word: "sprout", def: "To start to grow. A seed sprouts when its first little stem pushes out." }
      ],
      prompt: "Is there a tree near where you live that feels important to your neighbourhood?"
    },
    hi: {
      title: "बरगद का पेड़",
      paragraphs: [
        "भारत के कई गाँवों में चौक के बीच का सबसे बड़ा पेड़ बरगद होता है। बरगद दूसरे पेड़ों की तरह ऊँचा नहीं बढ़ता। बल्कि यह चौड़ाई में फैलता है। इसकी शाखाएँ दूर तक जाती हैं, और उन शाखाओं से लंबी जड़ें रस्सियों की तरह नीचे लटकती हैं।",
        "जब ये जड़ें ज़मीन को छूती हैं, तो मिट्टी में उतरकर नए तने बन जाती हैं। कई सालों बाद एक बरगद का पेड़ छोटे जंगल जैसा दिख सकता है। भारत में कुछ बरगद दो हज़ार साल से भी पुराने हैं। लोग उनके नीचे बैठकर आराम करते हैं, बातें करते हैं और पढ़ते हैं।",
        "वैज्ञानिक बरगद को अंजीर का पेड़ कहते हैं। इसका फल छोटा और गोल होता है, और पक्षियों को बहुत पसंद है। जब कोई पक्षी अंजीर खाकर दूसरे पेड़ पर बैठता है, तो बीज उसी पेड़ की शाखा पर अंकुरित हो सकता है। इस तरह नए बरगद हवा में ऊँचाई पर जीवन शुरू करते हैं, फिर ज़मीन की ओर जड़ें भेजते हैं।"
      ],
      vocab: [
        { word: "तना", def: "पेड़ का मुख्य भाग, वह मोटा हिस्सा जो शाखाओं को थामे रखता है।" },
        { word: "अंकुरित", def: "बढ़ना शुरू होना। बीज तब अंकुरित होता है जब उसका पहला नन्हा अंकुर निकलता है।" }
      ],
      prompt: "क्या आपके घर के पास कोई ऐसा पेड़ है जो आपके मोहल्ले के लिए ख़ास है?"
    },
    bn: {
      title: "বটগাছ",
      paragraphs: [
        "ভারতের অনেক গ্রামে চকের মাঝখানের সবচেয়ে বড় গাছটি হলো বট। বটগাছ অন্য গাছের মতো উঁচু হয় না। বরং এটি চওড়ায় ছড়িয়ে পড়ে। এর ডালপালা দূরে ছড়ায়, আর সেই ডাল থেকে লম্বা শিকড় দড়ির মতো নিচে ঝোলে।",
        "শিকড় যখন মাটি ছোঁয়, তখন মাটিতে ঢুকে নতুন কাণ্ড হয়ে ওঠে। বহু বছর পরে একটি বটগাছ ছোট একটি বনের মতো দেখায়। ভারতের কিছু বটগাছ দু'হাজার বছরেরও পুরনো। মানুষ তার নিচে বসে বিশ্রাম নেয়, কথা বলে, পড়াশোনা করে।",
        "বিজ্ঞানীরা বটকে ডুমুর জাতের গাছ বলেন। এর ফল ছোট ও গোল, পাখিরা খুব ভালোবাসে। কোনো পাখি ডুমুর খেয়ে অন্য গাছে বসলে বীজটি সেই গাছের ডালেই অঙ্কুরিত হতে পারে। এভাবেই নতুন বটগাছ অনেক উঁচুতে বাতাসে জীবন শুরু করে, পরে মাটির দিকে শিকড় পাঠায়।"
      ],
      vocab: [
        { word: "কাণ্ড", def: "গাছের মূল অংশ, যে মোটা অংশটি ডালপালা ধরে রাখে।" },
        { word: "অঙ্কুরিত", def: "বেড়ে ওঠা শুরু করা। বীজ থেকে প্রথম ছোট্ট অঙ্কুর বেরোলে তা অঙ্কুরিত হয়।" }
      ],
      prompt: "তোমার বাড়ির কাছে এমন কোনো গাছ আছে যা তোমার পাড়ার কাছে গুরুত্বপূর্ণ মনে হয়?"
    },
    mr: {
      title: "वडाचे झाड",
      paragraphs: [
        "भारतातील अनेक गावांत चौकाच्या मध्यभागी सर्वात मोठे झाड वडाचे असते. वड इतर झाडांसारखे उंच वाढत नाही. उलट ते रुंदीने पसरते. त्याच्या फांद्या दूरवर जातात, आणि त्या फांद्यांतून लांब मुळे दोरीसारखी खाली लोंबतात.",
        "मुळे जमिनीला स्पर्श करतात तेव्हा ती मातीत शिरून नवे खोड बनतात. अनेक वर्षांनंतर एक वडाचे झाड लहान जंगलासारखे दिसते. भारतातील काही वड दोन हजार वर्षांहूनही जुने आहेत. लोक त्याखाली बसून विश्रांती घेतात, गप्पा मारतात आणि अभ्यास करतात.",
        "शास्त्रज्ञ वडाला अंजिराचे झाड म्हणतात. त्याचे फळ लहान आणि गोल असते, आणि पक्ष्यांना ते खूप आवडते. एखादा पक्षी अंजीर खाऊन दुसऱ्या झाडावर बसला, तर बी त्याच झाडाच्या फांदीवर रुजू शकते. अशा प्रकारे नवे वड हवेत उंचावर जीवन सुरू करतात, मग जमिनीकडे मुळे पाठवतात."
      ],
      vocab: [
        { word: "खोड", def: "झाडाचा मुख्य भाग, फांद्यांना तोलून धरणारा जाड भाग." },
        { word: "रुजू", def: "वाढायला सुरुवात होणे. बीचा पहिला कोंब बाहेर आला की ते रुजते." }
      ],
      prompt: "तुमच्या घराजवळ असे एखादे झाड आहे का जे तुमच्या वस्तीला महत्त्वाचे वाटते?"
    },
    gu: {
      title: "વડનું ઝાડ",
      paragraphs: [
        "ભારતના ઘણા ગામોમાં ચોકની વચ્ચે સૌથી મોટું ઝાડ વડ હોય છે. વડ બીજાં ઝાડની જેમ ઊંચું વધતું નથી. પણ તે પહોળાઈમાં ફેલાય છે. તેની ડાળીઓ દૂર સુધી જાય છે, અને એ ડાળીઓમાંથી લાંબાં મૂળ દોરડાંની જેમ નીચે લટકે છે.",
        "મૂળ જમીનને અડે ત્યારે માટીમાં ઊતરીને નવાં થડ બની જાય છે. ઘણાં વર્ષો પછી એક વડ નાના જંગલ જેવું દેખાય છે. ભારતમાં કેટલાંક વડ બે હજાર વર્ષથીય જૂનાં છે. લોકો તેની નીચે બેસીને આરામ કરે, વાતો કરે અને ભણે છે.",
        "વૈજ્ઞાનિકો વડને અંજીરનું ઝાડ કહે છે. તેનું ફળ નાનું ને ગોળ હોય છે, અને પક્ષીઓને બહુ ગમે છે. કોઈ પક્ષી અંજીર ખાઈને બીજા ઝાડ પર બેસે, ત્યારે બીજ એ જ ઝાડની ડાળી પર ઊગી શકે છે. આમ નવાં વડ હવામાં ઊંચે જીવન શરૂ કરે છે, પછી જમીન તરફ મૂળ મોકલે છે."
      ],
      vocab: [
        { word: "થડ", def: "ઝાડનો મુખ્ય ભાગ, ડાળીઓને ટેકવી રાખતો જાડો ભાગ." },
        { word: "ઊગી", def: "વધવાનું શરૂ થવું. બીજનો પહેલો નાનો અંકુર નીકળે ત્યારે તે ઊગે છે." }
      ],
      prompt: "તમારા ઘરની નજીક એવું કોઈ ઝાડ છે જે તમારા વિસ્તાર માટે મહત્ત્વનું લાગે?"
    },
    te: {
      title: "మర్రి చెట్టు",
      paragraphs: [
        "భారతదేశంలోని చాలా గ్రామాల్లో నడిబొడ్డున ఉండే అతిపెద్ద చెట్టు మర్రి. మర్రి ఇతర చెట్లలా ఎత్తుగా పెరగదు. బదులుగా అది వెడల్పుగా విస్తరిస్తుంది. దాని కొమ్మలు దూరంగా చాచుకుంటాయి, ఆ కొమ్మల నుండి పొడవైన వేర్లు తాళ్ళలా కిందికి వేలాడతాయి.",
        "వేర్లు నేలను తాకినప్పుడు మట్టిలోకి దిగి కొత్త కాండాలుగా మారతాయి. చాలా ఏళ్ళ తర్వాత ఒక మర్రి చెట్టు ఒక చిన్న అడవిలా కనిపిస్తుంది. భారతదేశంలో కొన్ని మర్రి చెట్లు రెండు వేల ఏళ్ళకు పైగా పురాతనమైనవి. ప్రజలు వాటి కింద కూర్చుని విశ్రాంతి తీసుకుంటారు, మాట్లాడుకుంటారు, చదువుకుంటారు.",
        "శాస్త్రవేత్తలు మర్రిని అత్తి జాతి చెట్టు అంటారు. దాని పండు చిన్నగా, గుండ్రంగా ఉంటుంది, పక్షులకు చాలా ఇష్టం. ఒక పక్షి అత్తి తిని మరో చెట్టుపై వాలితే, విత్తనం ఆ చెట్టు కొమ్మపైనే మొలకెత్తవచ్చు. ఇలా కొత్త మర్రి చెట్లు గాలిలో ఎత్తున జీవితం మొదలుపెట్టి, తర్వాత నేల వైపు వేర్లు పంపుతాయి."
      ],
      vocab: [
        { word: "కాండం", def: "చెట్టు ప్రధాన భాగం, కొమ్మలను నిలబెట్టే మందమైన భాగం." },
        { word: "మొలక", def: "పెరగడం మొదలవడం. విత్తనం నుండి మొదటి చిన్న మొలక బయటకు వచ్చినప్పుడు అది మొలకెత్తుతుంది." }
      ],
      prompt: "మీ ఇంటి దగ్గర మీ పరిసరాలకు ముఖ్యమైనదిగా అనిపించే చెట్టు ఏదైనా ఉందా?"
    }
  },
  {
    id: "rani", cat: "stories", minutes: 4, level: "Easy", gmin: 4, gmax: 7, needs: ["adhd", "autism"],
    en: {
      title: "Rani's Rainy Day",
      paragraphs: [
        "Rani stood at the door of her flat in Mumbai and watched the rain. It had been raining for three days. The road was a long brown river now. Cars moved slowly through it, and people waded with their slippers in their hands.",
        "Her grandmother handed her a cup of warm chai. \"In the monsoon,\" her grandmother said, \"everything slows down. That is the gift of it. The city has to learn patience.\"",
        "Rani thought about her week. School was cancelled. Her friends were stuck at home too. Usually she felt rushed. Today, there was nothing to rush toward. She drank her chai slowly and watched a frog sit very still on the windowsill, waiting out the rain.",
        "When the rain finally stopped, the air smelled clean. Children came out and splashed in the puddles. Rani went to join them. The road was still a mess, but no one minded."
      ],
      vocab: [
        { word: "monsoon", def: "The rainy season in South Asia, when it rains heavily for weeks at a time." },
        { word: "patience", def: "The ability to wait calmly without getting upset." }
      ],
      prompt: "When does your world slow down? What does that feel like?"
    },
    hi: {
      title: "रानी का बरसाती दिन",
      paragraphs: [
        "रानी मुंबई में अपने फ्लैट के दरवाज़े पर खड़ी होकर बारिश देख रही थी। तीन दिन से बारिश हो रही थी। सड़क अब एक लंबी भूरी नदी बन गई थी। उसमें से कारें धीरे-धीरे चल रही थीं, और लोग हाथ में चप्पलें लिए पानी में चल रहे थे।",
        "उसकी दादी ने उसे गरम चाय का एक कप थमाया। दादी ने कहा, \"बरसात में सब कुछ धीमा हो जाता है। यही तो इसका तोहफ़ा है। शहर को धैर्य सीखना पड़ता है।\"",
        "रानी ने अपने हफ़्ते के बारे में सोचा। स्कूल बंद था। उसके दोस्त भी घर में फँसे थे। आमतौर पर उसे जल्दी रहती थी। आज, जल्दी जाने को कुछ नहीं था। उसने धीरे-धीरे चाय पी और खिड़की की चौखट पर एक मेंढक को बिल्कुल शांत बैठे, बारिश थमने का इंतज़ार करते देखा।",
        "जब आख़िरकार बारिश रुकी, तो हवा साफ़ महकने लगी। बच्चे बाहर आकर पानी के गड्ढों में छपछप करने लगे। रानी भी उनके साथ हो ली। सड़क अब भी गंदी थी, पर किसी को परवाह नहीं थी।"
      ],
      vocab: [
        { word: "बरसात", def: "दक्षिण एशिया का वर्षा का मौसम, जब हफ़्तों तक तेज़ बारिश होती है।" },
        { word: "धैर्य", def: "बिना परेशान हुए शांति से इंतज़ार करने की क्षमता।" }
      ],
      prompt: "आपकी दुनिया कब धीमी होती है? वह कैसा महसूस होता है?"
    },
    bn: {
      title: "রানির বৃষ্টির দিন",
      paragraphs: [
        "রানি মুম্বইয়ে তার ফ্ল্যাটের দরজায় দাঁড়িয়ে বৃষ্টি দেখছিল। তিন দিন ধরে বৃষ্টি পড়ছিল। রাস্তাটা এখন একটা লম্বা বাদামি নদী। তার ভেতর দিয়ে গাড়ি ধীরে ধীরে চলছিল, আর মানুষ হাতে চটি নিয়ে জলে হেঁটে যাচ্ছিল।",
        "তার ঠাকুমা তাকে এক কাপ গরম চা এগিয়ে দিলেন। ঠাকুমা বললেন, \"বর্ষায় সব কিছু ধীর হয়ে যায়। এটাই এর উপহার। শহরকে ধৈর্য শিখতে হয়।\"",
        "রানি তার সপ্তাহের কথা ভাবল। স্কুল বন্ধ। তার বন্ধুরাও ঘরে আটকে। সাধারণত তার তাড়াহুড়ো লাগত। আজ, তাড়া করার মতো কিছু ছিল না। সে ধীরে ধীরে চা খেল আর জানালার ধারে একটা ব্যাঙকে একেবারে স্থির হয়ে বসে বৃষ্টি থামার অপেক্ষায় দেখল।",
        "অবশেষে বৃষ্টি থামলে বাতাসে পরিষ্কার গন্ধ এল। বাচ্চারা বেরিয়ে এসে জলের গর্তে ছপছপ করতে লাগল। রানিও তাদের সঙ্গে যোগ দিল। রাস্তা তখনও কাদায় ভরা, কিন্তু কারও কিছু মনে হলো না।"
      ],
      vocab: [
        { word: "বর্ষা", def: "দক্ষিণ এশিয়ার বৃষ্টির ঋতু, যখন সপ্তাহের পর সপ্তাহ ভারী বৃষ্টি হয়।" },
        { word: "ধৈর্য", def: "বিরক্ত না হয়ে শান্তভাবে অপেক্ষা করার ক্ষমতা।" }
      ],
      prompt: "তোমার জগৎ কখন ধীর হয়ে যায়? সেটা কেমন লাগে?"
    },
    mr: {
      title: "राणीचा पावसाळी दिवस",
      paragraphs: [
        "राणी मुंबईत आपल्या फ्लॅटच्या दारात उभी राहून पाऊस पाहत होती. तीन दिवसांपासून पाऊस पडत होता. रस्ता आता एक लांब तपकिरी नदी झाला होता. त्यातून गाड्या हळूहळू जात होत्या, आणि लोक हातात चपला घेऊन पाण्यातून चालत होते.",
        "तिच्या आजीने तिला गरम चहाचा कप दिला. आजी म्हणाली, \"पावसाळ्यात सगळं काही मंदावतं. हीच त्याची देणगी. शहराला संयम शिकावा लागतो.\"",
        "राणीने आपल्या आठवड्याचा विचार केला. शाळेला सुट्टी होती. तिचे मित्रही घरात अडकले होते. नेहमी तिला घाई वाटायची. आज, घाई करण्यासारखं काही नव्हतं. तिने हळूहळू चहा प्याला आणि खिडकीच्या कडेला एक बेडूक अगदी स्तब्ध बसून पाऊस थांबण्याची वाट पाहताना पाहिला.",
        "शेवटी पाऊस थांबला तेव्हा हवेला स्वच्छ वास येऊ लागला. मुलं बाहेर येऊन पाण्याच्या डबक्यांत उड्या मारू लागली. राणीही त्यांच्यात सामील झाली. रस्ता अजूनही चिखलाने भरला होता, पण कुणाला त्याची पर्वा नव्हती."
      ],
      vocab: [
        { word: "पावसाळा", def: "दक्षिण आशियातील पावसाचा ऋतू, जेव्हा आठवडेच्या आठवडे जोरदार पाऊस पडतो." },
        { word: "संयम", def: "अस्वस्थ न होता शांतपणे वाट पाहण्याची क्षमता." }
      ],
      prompt: "तुमचं जग कधी मंदावतं? ते कसं वाटतं?"
    },
    gu: {
      title: "રાનીનો વરસાદી દિવસ",
      paragraphs: [
        "રાની મુંબઈમાં પોતાના ફ્લેટના બારણે ઊભી રહીને વરસાદ જોઈ રહી હતી. ત્રણ દિવસથી વરસાદ પડતો હતો. રસ્તો હવે એક લાંબી ભૂખરી નદી બની ગયો હતો. તેમાંથી ગાડીઓ ધીમે ધીમે જતી હતી, અને લોકો હાથમાં ચંપલ લઈને પાણીમાં ચાલતા હતા.",
        "તેની દાદીએ તેને ગરમ ચાનો કપ આપ્યો. દાદીએ કહ્યું, \"ચોમાસામાં બધું ધીમું પડી જાય છે. એ જ તો તેની ભેટ છે. શહેરે ધીરજ શીખવી પડે છે.\"",
        "રાનીએ પોતાના અઠવાડિયા વિશે વિચાર્યું. શાળા બંધ હતી. તેના મિત્રો પણ ઘરમાં ફસાયા હતા. સામાન્ય રીતે તેને ઉતાવળ રહેતી. આજે, ઉતાવળ કરવા જેવું કંઈ નહોતું. તેણે ધીમે ધીમે ચા પીધી અને બારીની કિનારે એક દેડકાને એકદમ સ્થિર બેસીને વરસાદ થંભવાની રાહ જોતો જોયો.",
        "આખરે વરસાદ થંભ્યો ત્યારે હવામાં સ્વચ્છ સુગંધ આવી. બાળકો બહાર આવીને પાણીના ખાબોચિયામાં છબછબિયાં કરવા લાગ્યાં. રાની પણ તેમની સાથે જોડાઈ. રસ્તો હજુ કાદવથી ભરેલો હતો, પણ કોઈને પરવા નહોતી."
      ],
      vocab: [
        { word: "ચોમાસું", def: "દક્ષિણ એશિયાની વરસાદની ઋતુ, જ્યારે અઠવાડિયાં સુધી ભારે વરસાદ પડે છે." },
        { word: "ધીરજ", def: "અકળાયા વિના શાંતિથી રાહ જોવાની ક્ષમતા." }
      ],
      prompt: "તમારી દુનિયા ક્યારે ધીમી પડે છે? એ કેવું લાગે છે?"
    },
    te: {
      title: "రాణి వర్షపు రోజు",
      paragraphs: [
        "రాణి ముంబైలో తన ఫ్లాట్ తలుపు దగ్గర నిలబడి వర్షాన్ని చూస్తోంది. మూడు రోజులుగా వర్షం పడుతోంది. రోడ్డు ఇప్పుడు ఒక పొడవైన గోధుమ రంగు నదిలా మారింది. దాని గుండా కార్లు నెమ్మదిగా కదులుతున్నాయి, ప్రజలు చేతిలో చెప్పులు పట్టుకుని నీళ్ళలో నడుస్తున్నారు.",
        "ఆమె నాయనమ్మ ఆమెకు వేడి చాయ్ కప్పు అందించింది. \"వర్షాకాలంలో అన్నీ నెమ్మదిస్తాయి. అదే దాని కానుక. నగరం ఓర్పును నేర్చుకోవాలి,\" అని నాయనమ్మ అన్నది.",
        "రాణి తన వారం గురించి ఆలోచించింది. స్కూల్ సెలవు. ఆమె స్నేహితులు కూడా ఇంట్లో చిక్కుకున్నారు. సాధారణంగా ఆమెకు తొందర అనిపించేది. ఈరోజు, తొందరపడాల్సింది ఏమీ లేదు. ఆమె నెమ్మదిగా చాయ్ తాగుతూ, కిటికీ అంచున ఒక కప్ప కదలకుండా కూర్చుని వర్షం ఆగడం కోసం ఎదురుచూడటం చూసింది.",
        "చివరికి వర్షం ఆగినప్పుడు గాలి శుభ్రంగా వాసన వేసింది. పిల్లలు బయటకు వచ్చి నీటి గుంటల్లో చిందులు వేశారు. రాణి కూడా వారితో కలిసింది. రోడ్డు ఇంకా బురదమయంగానే ఉంది, కానీ ఎవరూ పట్టించుకోలేదు."
      ],
      vocab: [
        { word: "వర్షాకాలం", def: "దక్షిణాసియాలో వర్షపు కాలం, వారాల తరబడి భారీ వర్షం కురిసే సమయం." },
        { word: "ఓర్పు", def: "కలత చెందకుండా ప్రశాంతంగా వేచి ఉండగల సామర్థ్యం." }
      ],
      prompt: "మీ ప్రపంచం ఎప్పుడు నెమ్మదిస్తుంది? అది ఎలా అనిపిస్తుంది?"
    }
  },
  {
    id: "lamp", cat: "stories", minutes: 4, level: "Medium", gmin: 6, gmax: 9, needs: ["dyslexia", "speech"],
    en: {
      title: "The Lamp Lighter",
      paragraphs: [
        "Before electric lights came to her village, Tara's grandfather was the lamp lighter. Every evening just before sunset, he walked the same route with a long pole, lighting each oil lamp on its tall wooden post. The pole had a small flame at the end. He would touch the flame to the wick, watch it catch, and move on to the next post.",
        "Tara remembers waiting at the corner of her street when she was small. She wanted to see her grandfather come around the bend. He always carried a small notebook, where he wrote down which lamps needed new wicks or more kerosene. He was very patient with the work. He said each lamp had its own personality. Some caught quickly. Some needed a moment to think about it.",
        "When the electric lines were finally laid in the village, the kerosene lamps were taken down one by one. Her grandfather was not sad. He said it was good that families could now see each other clearly at dinner. But he kept one of the old lamps in the kitchen. On nights when the power went out, which still happened often, he would light it with a match. The kitchen would fill with a soft yellow glow.",
        "Tara lives in the city now. When the lights go out in her apartment building, which doesn't happen often, she lights a candle. The room becomes a small room again, the way her grandfather's kitchen used to be."
      ],
      vocab: [
        { word: "wick", def: "The string or strip of cloth in a candle or lamp that soaks up oil and burns." },
        { word: "kerosene", def: "A kind of oil that was once used in lamps and is still used in some stoves." }
      ],
      prompt: "What's something old that still has a quiet job in your home?"
    },
    hi: {
      title: "दीया जलाने वाला",
      paragraphs: [
        "तारा के गाँव में बिजली आने से पहले, उसके दादाजी दीये जलाने वाले थे। हर शाम सूरज ढलने से ठीक पहले, वे एक लंबा डंडा लेकर उसी रास्ते पर निकलते और ऊँचे लकड़ी के खंभों पर रखे हर तेल के दीये को जलाते। डंडे के सिरे पर एक छोटी लौ होती। वे लौ को बत्ती से छुआते, उसे जलते हुए देखते, और अगले खंभे की ओर बढ़ जाते।",
        "तारा को याद है कि छोटी थी तब वह अपनी गली के मोड़ पर इंतज़ार करती थी। वह दादाजी को मोड़ से आते देखना चाहती थी। वे हमेशा एक छोटी कॉपी रखते, जिसमें लिखते कि किस दीये को नई बत्ती चाहिए या और मिट्टी का तेल। वे इस काम में बहुत धैर्यवान थे। वे कहते कि हर दीये का अपना मिज़ाज होता है। कुछ जल्दी जल उठते। कुछ को सोचने के लिए एक पल चाहिए होता।",
        "जब आख़िरकार गाँव में बिजली के तार बिछे, तो मिट्टी के तेल के दीये एक-एक करके उतार लिए गए। दादाजी उदास नहीं थे। उन्होंने कहा कि अच्छा है, अब परिवार रात के खाने पर एक-दूसरे को साफ़ देख सकते हैं। पर उन्होंने एक पुराना दीया रसोई में रख लिया। जिन रातों बिजली जाती, जो अब भी अक्सर होता, वे उसे माचिस से जला देते। रसोई एक नरम पीली रोशनी से भर जाती।",
        "तारा अब शहर में रहती है। जब उसकी इमारत में बिजली जाती है, जो कम ही होता है, वह एक मोमबत्ती जला लेती है। कमरा फिर से एक छोटा कमरा बन जाता है, जैसे कभी दादाजी की रसोई हुआ करती थी।"
      ],
      vocab: [
        { word: "बत्ती", def: "मोमबत्ती या दीये में लगा धागा या कपड़े की पट्टी जो तेल सोखकर जलती है।" },
        { word: "मिट्टी", def: "एक तरह का तेल (मिट्टी का तेल) जो कभी दीयों में जलता था और अब भी कुछ चूल्हों में काम आता है।" }
      ],
      prompt: "आपके घर में ऐसी कौन-सी पुरानी चीज़ है जो आज भी चुपचाप कोई काम करती है?"
    },
    bn: {
      title: "প্রদীপ জ্বালানিয়া",
      paragraphs: [
        "তারার গ্রামে বিদ্যুৎ আসার আগে, তার দাদু ছিলেন প্রদীপ জ্বালানিয়া। প্রতিদিন সন্ধ্যায় সূর্য ডোবার ঠিক আগে তিনি একটা লম্বা লাঠি নিয়ে সেই একই পথে হাঁটতেন, উঁচু কাঠের খুঁটির ওপরের প্রতিটি তেলের প্রদীপ জ্বালাতেন। লাঠির আগায় একটা ছোট শিখা থাকত। তিনি শিখাটা সলতেয় ছোঁয়াতেন, জ্বলে উঠতে দেখতেন, তারপর পরের খুঁটিতে এগিয়ে যেতেন।",
        "তারার মনে আছে ছোটবেলায় সে তার গলির মোড়ে অপেক্ষা করত। সে দাদুকে বাঁক ঘুরে আসতে দেখতে চাইত। তিনি সবসময় একটা ছোট খাতা রাখতেন, যাতে লিখতেন কোন প্রদীপের নতুন সলতে বা আরও কেরোসিন দরকার। কাজে তিনি খুব ধৈর্যশীল ছিলেন। তিনি বলতেন প্রতিটি প্রদীপের নিজস্ব স্বভাব আছে। কিছু তাড়াতাড়ি জ্বলে ওঠে। কিছুর ভাবতে একটু সময় লাগে।",
        "অবশেষে গ্রামে বিদ্যুতের তার বসলে কেরোসিনের প্রদীপগুলো একে একে নামিয়ে নেওয়া হলো। দাদু দুঃখ পাননি। তিনি বললেন ভালোই হলো, পরিবার এখন রাতের খাবারে একে অপরকে স্পষ্ট দেখতে পায়। কিন্তু তিনি একটা পুরনো প্রদীপ রান্নাঘরে রেখে দিলেন। যেসব রাতে বিদ্যুৎ যেত, যা তখনও প্রায়ই হতো, তিনি দেশলাই দিয়ে সেটি জ্বালাতেন। রান্নাঘর নরম হলুদ আলোয় ভরে যেত।",
        "তারা এখন শহরে থাকে। তার ফ্ল্যাটে যখন আলো নিভে যায়, যা প্রায়ই হয় না, সে একটা মোমবাতি জ্বালায়। ঘরটা আবার ছোট একটা ঘর হয়ে ওঠে, ঠিক যেমন দাদুর রান্নাঘর হতো।"
      ],
      vocab: [
        { word: "সলতে", def: "মোমবাতি বা প্রদীপের সুতো বা কাপড়ের ফালি, যা তেল শুষে জ্বলে।" },
        { word: "কেরোসিন", def: "এক ধরনের তেল, এক সময় প্রদীপে ব্যবহার হতো, এখনও কিছু স্টোভে চলে।" }
      ],
      prompt: "তোমার বাড়িতে এমন কোন পুরনো জিনিস আছে যা আজও নীরবে কোনো কাজ করে?"
    },
    mr: {
      title: "दिवे लावणारा",
      paragraphs: [
        "ताराच्या गावात वीज येण्याआधी, तिचे आजोबा दिवे लावणारे होते. दररोज संध्याकाळी सूर्य मावळण्याच्या आधी ते एक लांब काठी घेऊन त्याच वाटेने जायचे, उंच लाकडी खांबांवरचा प्रत्येक तेलाचा दिवा लावायचे. काठीच्या टोकाला एक छोटी ज्योत असायची. ते ज्योत वातीला लावायचे, ती पेटताना पाहायचे, आणि पुढच्या खांबाकडे जायचे.",
        "ताराला आठवतं की लहान असताना ती आपल्या गल्लीच्या कोपऱ्यावर वाट पाहायची. आजोबा वळणावरून येताना दिसावेत असं तिला वाटायचं. ते नेहमी एक छोटी वही ठेवायचे, ज्यात कोणत्या दिव्याला नवी वात किंवा अधिक रॉकेल हवं ते लिहायचे. कामात ते खूप संयमी होते. ते म्हणायचे प्रत्येक दिव्याचा स्वतःचा स्वभाव असतो. काही लगेच पेटायचे. काहींना विचार करायला क्षणभर लागायचा.",
        "शेवटी गावात विजेचे तार आले, तेव्हा रॉकेलचे दिवे एकेक करून उतरवले गेले. आजोबा दुःखी नव्हते. ते म्हणाले बरं झालं, आता कुटुंबं रात्रीच्या जेवणाला एकमेकांना स्पष्ट पाहू शकतात. पण त्यांनी एक जुना दिवा स्वयंपाकघरात ठेवला. ज्या रात्री वीज जायची, जे तेव्हाही अनेकदा व्हायचं, ते तो काडीने पेटवायचे. स्वयंपाकघर मऊ पिवळ्या प्रकाशाने भरून जायचं.",
        "तारा आता शहरात राहते. तिच्या इमारतीत वीज गेली, जे फारसं होत नाही, तेव्हा ती एक मेणबत्ती लावते. खोली पुन्हा एक छोटी खोली होते, जशी कधी आजोबांची स्वयंपाकघर असायची."
      ],
      vocab: [
        { word: "वात", def: "मेणबत्ती किंवा दिव्यातील दोरा किंवा कापडाची पट्टी जी तेल शोषून जळते." },
        { word: "रॉकेल", def: "एक प्रकारचे तेल जे पूर्वी दिव्यांत वापरले जायचे आणि अजूनही काही शेगड्यांत वापरतात." }
      ],
      prompt: "तुमच्या घरात अशी कोणती जुनी वस्तू आहे जी आजही शांतपणे काही काम करते?"
    },
    gu: {
      title: "દીવા પ્રગટાવનાર",
      paragraphs: [
        "તારાના ગામમાં વીજળી આવી તે પહેલાં, તેના દાદા દીવા પ્રગટાવનાર હતા. દરરોજ સાંજે સૂરજ આથમે તે પહેલાં તેઓ એક લાંબી લાકડી લઈને એ જ રસ્તે ચાલતા, ઊંચા લાકડાના થાંભલા પરનો દરેક તેલનો દીવો પ્રગટાવતા. લાકડીના છેડે એક નાની જ્યોત હતી. તેઓ જ્યોત વાટને અડાડતા, તે સળગતી જોતા, અને આગળના થાંભલા તરફ જતા.",
        "તારાને યાદ છે કે નાની હતી ત્યારે તે પોતાની શેરીના ખૂણે રાહ જોતી. તે દાદાને વળાંકથી આવતા જોવા માગતી. તેઓ હંમેશાં એક નાની નોટ રાખતા, જેમાં લખતા કે કયા દીવાને નવી વાટ કે વધારે કેરોસીન જોઈએ. કામમાં તેઓ બહુ ધીરજવાન હતા. તેઓ કહેતા કે દરેક દીવાનો પોતાનો સ્વભાવ હોય છે. કેટલાક ઝટ સળગી ઊઠતા. કેટલાકને વિચારવા ક્ષણ જોઈતી.",
        "આખરે ગામમાં વીજળીના તાર નખાયા, ત્યારે કેરોસીનના દીવા એક પછી એક ઉતારી લેવાયા. દાદા દુઃખી નહોતા. તેમણે કહ્યું સારું થયું, હવે પરિવાર રાતના ભોજને એકબીજાને સ્પષ્ટ જોઈ શકે છે. પણ તેમણે એક જૂનો દીવો રસોડામાં રાખ્યો. જે રાતે વીજળી જતી, જે ત્યારે પણ વારંવાર થતું, તેઓ તેને દીવાસળીથી પ્રગટાવતા. રસોડું નરમ પીળા પ્રકાશથી ભરાઈ જતું.",
        "તારા હવે શહેરમાં રહે છે. તેના મકાનમાં લાઇટ જાય, જે ભાગ્યે જ થાય છે, ત્યારે તે એક મીણબત્તી પ્રગટાવે છે. ઓરડો ફરી એક નાનો ઓરડો બની જાય છે, જેવો ક્યારેક દાદાનું રસોડું હતું."
      ],
      vocab: [
        { word: "વાટ", def: "મીણબત્તી કે દીવામાંનો દોરો કે કાપડની પટ્ટી જે તેલ ચૂસીને સળગે છે." },
        { word: "કેરોસીન", def: "એક પ્રકારનું તેલ જે પહેલાં દીવામાં વપરાતું અને હજુ કેટલાક ચૂલામાં વપરાય છે." }
      ],
      prompt: "તમારા ઘરમાં એવી કઈ જૂની વસ્તુ છે જે આજેય શાંતિથી કોઈ કામ કરે છે?"
    },
    te: {
      title: "దీపం వెలిగించేవాడు",
      paragraphs: [
        "తార గ్రామానికి విద్యుత్తు రాకముందు, ఆమె తాత దీపాలు వెలిగించేవాడు. ప్రతి సాయంత్రం సూర్యుడు అస్తమించే ముందు ఆయన ఒక పొడవైన కర్రతో అదే దారిలో నడిచి, ఎత్తైన చెక్క స్తంభాలపై ఉన్న ప్రతి నూనె దీపాన్ని వెలిగించేవాడు. కర్ర చివర ఒక చిన్న మంట ఉండేది. ఆయన మంటను వత్తికి తాకించి, అది అంటుకోవడం చూసి, తర్వాతి స్తంభం వైపు సాగేవాడు.",
        "తనకు చిన్నప్పుడు తన వీధి మూలలో ఎదురుచూసిన సంగతి తారకు గుర్తుంది. తాత మలుపు తిరిగి రావడం చూడాలనుకునేది. ఆయన ఎప్పుడూ ఒక చిన్న నోటు పుస్తకం ఉంచుకునేవాడు, అందులో ఏ దీపానికి కొత్త వత్తి లేదా ఎక్కువ కిరోసిన్ కావాలో రాసేవాడు. పనిలో ఆయన చాలా ఓర్పుగా ఉండేవాడు. ప్రతి దీపానికీ దాని స్వభావం ఉందని చెప్పేవాడు. కొన్ని వెంటనే అంటుకునేవి. కొన్నింటికి ఆలోచించడానికి ఒక క్షణం కావాల్సి వచ్చేది.",
        "చివరికి గ్రామంలో విద్యుత్ తీగలు వేసినప్పుడు, కిరోసిన్ దీపాలను ఒక్కొక్కటిగా దించేశారు. తాత బాధపడలేదు. ఇప్పుడు కుటుంబాలు రాత్రి భోజనం వద్ద ఒకరినొకరు స్పష్టంగా చూడగలగడం మంచిదే అన్నాడు. కానీ ఆయన ఒక పాత దీపాన్ని వంటగదిలో ఉంచుకున్నాడు. విద్యుత్తు పోయే రాత్రుల్లో, అప్పటికీ తరచూ జరిగేది, ఆయన దాన్ని అగ్గిపుల్లతో వెలిగించేవాడు. వంటగది మృదువైన పసుపు కాంతితో నిండిపోయేది.",
        "తార ఇప్పుడు నగరంలో ఉంటోంది. ఆమె అపార్ట్‌మెంట్‌లో దీపాలు ఆరిపోయినప్పుడు, అది తరచూ జరగదు, ఆమె ఒక కొవ్వొత్తి వెలిగిస్తుంది. గది మళ్ళీ ఒక చిన్న గదిగా మారుతుంది, తాత వంటగది ఒకప్పుడు ఎలా ఉండేదో అలా."
      ],
      vocab: [
        { word: "వత్తి", def: "కొవ్వొత్తి లేదా దీపంలో నూనెను పీల్చుకుని కాలే దారం లేదా గుడ్డ పట్టీ." },
        { word: "కిరోసిన్", def: "ఒకప్పుడు దీపాల్లో వాడిన, ఇప్పటికీ కొన్ని పొయ్యిల్లో వాడే ఒక రకమైన నూనె." }
      ],
      prompt: "మీ ఇంట్లో ఇప్పటికీ నిశ్శబ్దంగా ఏదో పని చేసే పాత వస్తువు ఏదైనా ఉందా?"
    }
  },
  {
    id: "honey", cat: "science", minutes: 4, level: "Medium", gmin: 5, gmax: 8, needs: ["adhd", "visual"],
    en: {
      title: "How Honey Gets to Your Table",
      paragraphs: [
        "A jar of honey looks simple, but it took thousands of bees to fill it. A single honeybee visits about fifty flowers in one trip. To make one teaspoon of honey, bees from a whole hive must visit more than ten thousand flowers together.",
        "When a bee finds a good patch of flowers, she flies back to the hive and dances. The dance is shaped like a figure eight. The angle of the dance tells the other bees which direction to fly. The length of the dance tells them how far. This is one of the few times in nature that an animal tells another animal directions with a kind of map.",
        "Bees carry nectar in a special stomach. Back at the hive, they pass the nectar from bee to bee, breathing on it to make it dry. Then they store it in the honeycomb and seal it with wax. The honey is finished. It can stay good for thousands of years, which is why archaeologists have found honey in old jars and it was still safe to eat."
      ],
      vocab: [
        { word: "nectar", def: "A sweet liquid that flowers make. Bees drink it and turn it into honey." },
        { word: "honeycomb", def: "The wax structure bees build, made of small six-sided rooms for honey." }
      ],
      prompt: "If you could send a 'dance message' to a friend, what would it say?"
    },
    hi: {
      title: "शहद आपकी मेज़ तक कैसे पहुँचता है",
      paragraphs: [
        "शहद का एक मर्तबान सरल दिखता है, पर इसे भरने में हज़ारों मधुमक्खियाँ लगती हैं। एक मधुमक्खी एक चक्कर में करीब पचास फूलों पर जाती है। एक चम्मच शहद बनाने के लिए, पूरे छत्ते की मधुमक्खियों को मिलकर दस हज़ार से ज़्यादा फूलों पर जाना पड़ता है।",
        "जब किसी मधुमक्खी को फूलों का अच्छा झुंड मिलता है, तो वह छत्ते में लौटकर नाचती है। यह नाच आठ के अंक जैसी आकृति का होता है। नाच का कोण बाकी मधुमक्खियों को बताता है कि किस दिशा में उड़ना है। नाच की लंबाई बताती है कि कितनी दूर। प्रकृति में यह उन गिनी-चुनी घटनाओं में से एक है जब कोई जीव दूसरे जीव को एक तरह के नक्शे से रास्ता बताता है।",
        "मधुमक्खियाँ रस को एक खास पेट में ले जाती हैं। छत्ते में लौटकर वे रस को एक से दूसरी मधुमक्खी को देती हैं, उस पर साँस फेंककर उसे सुखाती हैं। फिर वे उसे छत्ते के खानों में रखकर मोम से बंद कर देती हैं। शहद तैयार है। यह हज़ारों साल तक खराब नहीं होता, इसीलिए पुरातत्वविदों को पुराने मर्तबानों में शहद मिला है जो तब भी खाने लायक था।"
      ],
      vocab: [
        { word: "रस", def: "फूलों से बनने वाला मीठा तरल। मधुमक्खियाँ इसे पीकर शहद बनाती हैं।" },
        { word: "छत्ते", def: "मोम से बनी वह रचना जो मधुमक्खियाँ बनाती हैं, जिसमें शहद के लिए छोटे छह-कोने वाले खाने होते हैं।" }
      ],
      prompt: "अगर आप किसी दोस्त को 'नाच का संदेश' भेज सकते, तो वह क्या कहता?"
    },
    bn: {
      title: "মধু কীভাবে তোমার টেবিলে আসে",
      paragraphs: [
        "এক বয়াম মধু সহজ মনে হয়, কিন্তু তা ভরতে হাজার হাজার মৌমাছি লাগে। একটি মৌমাছি এক যাত্রায় প্রায় পঞ্চাশটি ফুলে যায়। এক চামচ মধু বানাতে গোটা চাকের মৌমাছিদের একসঙ্গে দশ হাজারেরও বেশি ফুলে যেতে হয়।",
        "কোনো মৌমাছি ভালো এক ঝাঁক ফুল খুঁজে পেলে সে চাকে ফিরে নাচে। নাচটা আট সংখ্যার মতো আকারের। নাচের কোণ অন্য মৌমাছিদের বলে কোন দিকে উড়তে হবে। নাচের দৈর্ঘ্য বলে কত দূর। প্রকৃতিতে এটা সেই অল্প কয়েকবারের একটি, যখন একটি প্রাণী আরেকটি প্রাণীকে এক ধরনের মানচিত্র দিয়ে পথ বলে দেয়।",
        "মৌমাছিরা ফুলের মধু একটি বিশেষ পেটে বয়ে আনে। চাকে ফিরে তারা মধু এক মৌমাছি থেকে আরেকজনকে দেয়, তাতে নিঃশ্বাস ফেলে শুকিয়ে নেয়। তারপর মৌচাকে রেখে মোম দিয়ে বন্ধ করে দেয়। মধু তৈরি। এটি হাজার হাজার বছর ভালো থাকে, তাই প্রত্নতাত্ত্বিকরা পুরনো বয়ামে মধু পেয়েছেন যা তখনও খাওয়ার যোগ্য ছিল।"
      ],
      vocab: [
        { word: "মধু", def: "ফুল যে মিষ্টি তরল তৈরি করে। মৌমাছিরা তা পান করে মধু বানায়।" },
        { word: "মৌচাক", def: "মৌমাছিদের তৈরি মোমের গঠন, মধুর জন্য ছোট ছয়-কোণা ঘর দিয়ে গড়া।" }
      ],
      prompt: "তুমি যদি কোনো বন্ধুকে 'নাচের বার্তা' পাঠাতে পারতে, তা কী বলত?"
    },
    mr: {
      title: "मध तुमच्या टेबलापर्यंत कसा पोहोचतो",
      paragraphs: [
        "मधाची एक बरणी साधी दिसते, पण ती भरायला हजारो मधमाश्या लागतात. एक मधमाशी एका फेरीत सुमारे पन्नास फुलांना भेट देते. एक चमचा मध बनवायला संपूर्ण पोळ्यातील मधमाश्यांना मिळून दहा हजारांहून अधिक फुलांना भेट द्यावी लागते.",
        "एखाद्या मधमाशीला फुलांचा चांगला घोळका सापडला, की ती पोळ्यात परत येऊन नाचते. हा नाच आठ आकड्यासारख्या आकाराचा असतो. नाचाचा कोन इतर मधमाश्यांना सांगतो कोणत्या दिशेला उडायचं. नाचाची लांबी सांगते किती दूर. निसर्गात हे त्या मोजक्या वेळांपैकी एक आहे जेव्हा एक प्राणी दुसऱ्या प्राण्याला एका प्रकारच्या नकाशाने वाट सांगतो.",
        "मधमाश्या मकरंद एका खास पोटात वाहून नेतात. पोळ्यात परत येऊन त्या मकरंद एका मधमाशीकडून दुसरीकडे देतात, त्यावर श्वास सोडून तो वाळवतात. मग तो पोळ्याच्या कप्प्यांत साठवून मेणाने बंद करतात. मध तयार. तो हजारो वर्षे टिकतो, म्हणूनच पुरातत्त्वशास्त्रज्ञांना जुन्या बरण्यांत मध सापडला जो तेव्हाही खाण्यायोग्य होता."
      ],
      vocab: [
        { word: "मकरंद", def: "फुलं तयार करतात तो गोड द्रव. मधमाश्या तो पिऊन मध बनवतात." },
        { word: "पोळं", def: "मधमाश्या बनवतात ती मेणाची रचना, मधासाठी लहान सहा-कोनी कप्पे असलेली." }
      ],
      prompt: "तुम्ही एखाद्या मित्राला 'नाचाचा संदेश' पाठवू शकलात, तर तो काय सांगेल?"
    },
    gu: {
      title: "મધ તમારા ટેબલ સુધી કેવી રીતે પહોંચે છે",
      paragraphs: [
        "મધની એક બરણી સાદી લાગે છે, પણ તેને ભરવા હજારો મધમાખીઓ લાગે છે. એક મધમાખી એક ફેરામાં લગભગ પચાસ ફૂલોની મુલાકાત લે છે. એક ચમચી મધ બનાવવા આખા મધપૂડાની મધમાખીઓએ સાથે મળીને દસ હજારથી વધુ ફૂલોની મુલાકાત લેવી પડે છે.",
        "કોઈ મધમાખીને ફૂલોનો સારો ઝૂમખો મળે, ત્યારે તે મધપૂડામાં પાછી આવીને નાચે છે. આ નાચ આઠના આંકડા જેવા આકારનો હોય છે. નાચનો ખૂણો બીજી મધમાખીઓને કહે છે કઈ દિશામાં ઊડવું. નાચની લંબાઈ કહે છે કેટલે દૂર. કુદરતમાં આ એ ગણતરીના પ્રસંગોમાંનો એક છે જ્યારે એક પ્રાણી બીજા પ્રાણીને એક પ્રકારના નકશાથી રસ્તો બતાવે છે.",
        "મધમાખીઓ મકરંદ એક ખાસ પેટમાં વહન કરે છે. મધપૂડામાં પાછી આવીને તે મકરંદ એક મધમાખીથી બીજીને આપે છે, તેના પર શ્વાસ ફૂંકીને સૂકવે છે. પછી તેને મધપૂડાના ખાનામાં સંઘરીને મીણથી બંધ કરે છે. મધ તૈયાર. તે હજારો વર્ષ સારું રહે છે, એટલે જ પુરાતત્ત્વવિદોને જૂની બરણીઓમાં મધ મળ્યું છે જે ત્યારેય ખાવાલાયક હતું."
      ],
      vocab: [
        { word: "મકરંદ", def: "ફૂલ બનાવે છે તે મીઠું પ્રવાહી. મધમાખીઓ તે પીને મધ બનાવે છે." },
        { word: "મધપૂડો", def: "મધમાખીઓ બનાવે છે તે મીણનું માળખું, મધ માટે નાના છ-ખૂણાવાળા ખાનાંથી બનેલું." }
      ],
      prompt: "તમે કોઈ મિત્રને 'નાચનો સંદેશ' મોકલી શકો, તો તે શું કહેત?"
    },
    te: {
      title: "తేనె మీ బల్లపైకి ఎలా చేరుతుంది",
      paragraphs: [
        "ఒక సీసా తేనె సాధారణంగా కనిపిస్తుంది, కానీ దాన్ని నింపడానికి వేల తేనెటీగలు పడ్డాయి. ఒక తేనెటీగ ఒక ప్రయాణంలో దాదాపు యాభై పూలను సందర్శిస్తుంది. ఒక చెంచా తేనె తయారు చేయడానికి, ఒక తేనెపట్టు మొత్తం తేనెటీగలు కలిసి పది వేలకు పైగా పూలను సందర్శించాలి.",
        "ఒక తేనెటీగ మంచి పూల గుంపును కనుగొంటే, అది తేనెపట్టుకు తిరిగి వచ్చి నృత్యం చేస్తుంది. ఆ నృత్యం ఎనిమిది అంకె ఆకారంలో ఉంటుంది. నృత్య కోణం మిగతా తేనెటీగలకు ఏ దిశలో ఎగరాలో చెబుతుంది. నృత్య పొడవు ఎంత దూరమో చెబుతుంది. ప్రకృతిలో ఒక జంతువు మరో జంతువుకు ఒక రకమైన పటంతో దారి చెప్పే అరుదైన సందర్భాల్లో ఇది ఒకటి.",
        "తేనెటీగలు మకరందాన్ని ఒక ప్రత్యేక కడుపులో మోసుకొస్తాయి. తేనెపట్టుకు తిరిగి వచ్చి అవి మకరందాన్ని ఒక టీగ నుండి మరో టీగకు అందిస్తాయి, దానిపై ఊపిరి వదిలి ఆరబెడతాయి. తర్వాత దాన్ని తేనెతెట్టెలో నిల్వ చేసి మైనంతో మూసేస్తాయి. తేనె తయారు. అది వేల ఏళ్ళు చెడిపోకుండా ఉంటుంది, అందుకే పురావస్తు శాస్త్రవేత్తలు పాత సీసాల్లో దొరికిన తేనె అప్పటికీ తినదగినదిగా ఉంది."
      ],
      vocab: [
        { word: "మకరందం", def: "పూలు తయారు చేసే తీపి ద్రవం. తేనెటీగలు దాన్ని తాగి తేనెగా మారుస్తాయి." },
        { word: "తేనెతెట్టె", def: "తేనెటీగలు కట్టే మైనపు నిర్మాణం, తేనె కోసం చిన్న ఆరు-కోణాల గదులతో." }
      ],
      prompt: "మీరు ఒక స్నేహితుడికి 'నృత్య సందేశం' పంపగలిగితే, అది ఏమి చెప్పేది?"
    }
  },
  {
    id: "birds", cat: "science", minutes: 4, level: "Medium", gmin: 6, gmax: 9, needs: ["autism", "speech"],
    en: {
      title: "Why Birds Sing in the Morning",
      paragraphs: [
        "If you wake up early enough, before the cars and the people and the traffic, you can hear it. Birds singing all at once. It is called the dawn chorus, and it happens almost everywhere there are birds, every morning, just before sunrise.",
        "Scientists have wondered for a long time why birds sing more at dawn than at any other time of day. There are a few good guesses. The air just before sunrise is still and cool, and sound travels far in still cool air. A song sung at dawn can reach almost twenty times more birds than the same song at noon. So the dawn is the moment when one bird can be heard by the most other birds at once.",
        "There is also another reason. Many male birds sing to defend their territory. Singing tells other birds, this is my patch of forest. Singing at dawn is a way of saying it before anyone else has the chance.",
        "Different birds sing in a rough order. Robins and thrushes start first. Sparrows and tits join in. Crows are usually last. If you listen carefully one morning, you can hear the layers add themselves one by one, like instruments coming into a song."
      ],
      vocab: [
        { word: "dawn", def: "The time just before and during sunrise, when the sky first gets light." },
        { word: "territory", def: "An area that an animal considers its own and will defend from others." }
      ],
      prompt: "What's the earliest sound you remember hearing in the morning?"
    },
    hi: {
      title: "पक्षी सुबह क्यों गाते हैं",
      paragraphs: [
        "अगर आप काफ़ी जल्दी उठें, कारों, लोगों और ट्रैफ़िक से पहले, तो आप इसे सुन सकते हैं। पक्षी एक साथ गाते हुए। इसे भोर का गायन कहते हैं, और यह लगभग हर जगह होता है जहाँ पक्षी हैं, हर सुबह, सूरज निकलने से ठीक पहले।",
        "वैज्ञानिक लंबे समय से सोचते आए हैं कि पक्षी दिन के किसी और समय से ज़्यादा भोर में क्यों गाते हैं। कुछ अच्छे अनुमान हैं। सूरज निकलने से ठीक पहले की हवा शांत और ठंडी होती है, और शांत ठंडी हवा में आवाज़ दूर तक जाती है। भोर में गाया गीत दोपहर के उसी गीत से करीब बीस गुना ज़्यादा पक्षियों तक पहुँच सकता है। इसलिए भोर वह पल है जब एक पक्षी की आवाज़ एक साथ सबसे ज़्यादा पक्षियों तक पहुँचती है।",
        "एक और वजह भी है। कई नर पक्षी अपने इलाके की रक्षा के लिए गाते हैं। गाना दूसरे पक्षियों से कहता है, यह जंगल का मेरा हिस्सा है। भोर में गाना इसे किसी और के मौका मिलने से पहले कह देने का तरीका है।",
        "अलग-अलग पक्षी एक मोटे क्रम में गाते हैं। रॉबिन और थ्रश सबसे पहले शुरू करते हैं। गौरैया और टिटहरी शामिल होती हैं। कौवे आमतौर पर सबसे आख़िर में। अगर आप किसी सुबह ध्यान से सुनें, तो आप परतों को एक-एक करके जुड़ते सुन सकते हैं, जैसे किसी गीत में बारी-बारी वाद्य आते हों।"
      ],
      vocab: [
        { word: "भोर", def: "सूरज निकलने से ठीक पहले और उस दौरान का समय, जब आसमान में पहली रोशनी आती है।" },
        { word: "इलाके", def: "वह क्षेत्र जिसे कोई जीव अपना मानता है और दूसरों से उसकी रक्षा करता है।" }
      ],
      prompt: "सुबह की सबसे पहली आवाज़ कौन-सी है जो आपको याद है?"
    },
    bn: {
      title: "পাখিরা সকালে কেন গান গায়",
      paragraphs: [
        "যথেষ্ট ভোরে উঠলে, গাড়ি, মানুষ আর যানজটের আগে, তুমি তা শুনতে পাবে। পাখিরা একসঙ্গে গাইছে। একে বলে ভোরের সমবেত গান, আর যেখানেই পাখি আছে প্রায় সেখানেই এটি ঘটে, প্রতিদিন সকালে, সূর্য ওঠার ঠিক আগে।",
        "বিজ্ঞানীরা বহুকাল ধরে ভেবেছেন পাখিরা দিনের অন্য সময়ের চেয়ে ভোরে বেশি গান গায় কেন। কয়েকটি ভালো অনুমান আছে। সূর্য ওঠার ঠিক আগের বাতাস স্থির ও ঠান্ডা, আর স্থির ঠান্ডা বাতাসে শব্দ দূরে যায়। ভোরে গাওয়া একটা গান দুপুরের একই গানের চেয়ে প্রায় কুড়ি গুণ বেশি পাখির কাছে পৌঁছায়। তাই ভোর হলো সেই মুহূর্ত যখন একটা পাখির ডাক একসঙ্গে সবচেয়ে বেশি পাখির কানে যায়।",
        "আরেকটা কারণও আছে। অনেক পুরুষ পাখি তাদের এলাকা রক্ষায় গান গায়। গান অন্য পাখিদের বলে, এই বনটুকু আমার। ভোরে গান গাওয়া হলো অন্য কেউ সুযোগ পাওয়ার আগেই তা বলে দেওয়ার উপায়।",
        "নানা পাখি মোটামুটি একটা ক্রমে গায়। রবিন আর থ্রাশ আগে শুরু করে। চড়াই আর টুনটুনি যোগ দেয়। কাক সাধারণত সবার শেষে। কোনো সকালে মন দিয়ে শুনলে স্তরগুলো একে একে যুক্ত হতে শুনবে, যেন একটা গানে একে একে বাদ্যযন্ত্র ঢুকছে।"
      ],
      vocab: [
        { word: "ভোর", def: "সূর্য ওঠার ঠিক আগের ও সেই সময়ের কাল, যখন আকাশে প্রথম আলো ফোটে।" },
        { word: "এলাকা", def: "যে অঞ্চলকে কোনো প্রাণী নিজের মনে করে এবং অন্যদের থেকে রক্ষা করে।" }
      ],
      prompt: "সকালে শোনা সবচেয়ে আগের কোন শব্দ তোমার মনে আছে?"
    },
    mr: {
      title: "पक्षी सकाळी का गातात",
      paragraphs: [
        "तुम्ही पुरेसे लवकर उठलात, गाड्या, माणसं आणि वाहतुकीच्या आधी, तर तुम्हाला ते ऐकू येतं. पक्षी एकत्र गाताना. याला पहाटेचं गायन म्हणतात, आणि जिथे पक्षी आहेत तिथे जवळपास सगळीकडे हे घडतं, दररोज सकाळी, सूर्य उगवण्याच्या आधी.",
        "पक्षी दिवसाच्या इतर वेळेपेक्षा पहाटे जास्त का गातात, याबद्दल शास्त्रज्ञ खूप काळापासून विचार करत आले आहेत. काही चांगले अंदाज आहेत. सूर्य उगवण्याच्या आधीची हवा शांत आणि थंड असते, आणि शांत थंड हवेत आवाज दूरवर जातो. पहाटे गायलेलं गाणं दुपारच्या त्याच गाण्यापेक्षा जवळपास वीस पट जास्त पक्ष्यांपर्यंत पोहोचतं. म्हणून पहाट हा तो क्षण आहे जेव्हा एका पक्ष्याचा आवाज एकाच वेळी सर्वाधिक पक्ष्यांना ऐकू जातो.",
        "आणखी एक कारणही आहे. अनेक नर पक्षी आपल्या हद्दीचं रक्षण करण्यासाठी गातात. गाणं इतर पक्ष्यांना सांगतं, हा जंगलाचा माझा भाग आहे. पहाटे गाणं म्हणजे दुसऱ्या कुणाला संधी मिळण्याआधीच ते सांगण्याचा मार्ग.",
        "वेगवेगळे पक्षी साधारण एका क्रमाने गातात. रॉबिन आणि थ्रश आधी सुरू करतात. चिमण्या आणि टिटव्या सामील होतात. कावळे सहसा शेवटी. एखाद्या सकाळी लक्षपूर्वक ऐकलंत, तर थर एकेक करून जोडले जाताना ऐकू येतील, जणू एखाद्या गाण्यात एकेक वाद्य येतंय."
      ],
      vocab: [
        { word: "पहाट", def: "सूर्य उगवण्याच्या आधीचा आणि त्या वेळचा काळ, जेव्हा आकाशात पहिला उजेड येतो." },
        { word: "हद्द", def: "जो भाग एखादा प्राणी आपला मानतो आणि इतरांपासून त्याचं रक्षण करतो." }
      ],
      prompt: "सकाळी ऐकलेला सर्वात पहिला कोणता आवाज तुम्हाला आठवतो?"
    },
    gu: {
      title: "પક્ષીઓ સવારે કેમ ગાય છે",
      paragraphs: [
        "તમે પૂરતા વહેલા ઊઠો, ગાડીઓ, લોકો અને ટ્રાફિક પહેલાં, તો તમે તે સાંભળી શકો. પક્ષીઓ એકસાથે ગાતાં. તેને પરોઢનું ગાન કહે છે, અને જ્યાં પક્ષીઓ હોય ત્યાં લગભગ બધે આ બને છે, દરરોજ સવારે, સૂરજ ઊગે તે પહેલાં.",
        "પક્ષીઓ દિવસના બીજા સમય કરતાં પરોઢે વધારે કેમ ગાય છે, એ વિશે વૈજ્ઞાનિકો લાંબા સમયથી વિચારતા આવ્યા છે. કેટલાક સારા અંદાજ છે. સૂરજ ઊગે તે પહેલાંની હવા શાંત અને ઠંડી હોય છે, અને શાંત ઠંડી હવામાં અવાજ દૂર સુધી જાય છે. પરોઢે ગાયેલું ગીત બપોરના એ જ ગીત કરતાં લગભગ વીસ ગણાં વધારે પક્ષીઓ સુધી પહોંચે છે. તેથી પરોઢ એ ક્ષણ છે જ્યારે એક પક્ષીનો અવાજ એકસાથે સૌથી વધુ પક્ષીઓ સુધી પહોંચે છે.",
        "બીજું એક કારણ પણ છે. ઘણા નર પક્ષીઓ પોતાના વિસ્તારની રક્ષા માટે ગાય છે. ગાવું બીજાં પક્ષીઓને કહે છે, આ જંગલનો મારો ભાગ છે. પરોઢે ગાવું એ બીજા કોઈને તક મળે તે પહેલાં જ એ કહી દેવાની રીત છે.",
        "જુદાં જુદાં પક્ષીઓ લગભગ એક ક્રમમાં ગાય છે. રોબિન અને થ્રશ પહેલાં શરૂ કરે છે. ચકલીઓ ને નાનાં પક્ષીઓ જોડાય છે. કાગડા સામાન્ય રીતે છેલ્લે. કોઈ સવારે ધ્યાનથી સાંભળો, તો સ્તરો એક પછી એક ઉમેરાતા સંભળાશે, જાણે કોઈ ગીતમાં એક પછી એક વાજિંત્ર આવતાં હોય."
      ],
      vocab: [
        { word: "પરોઢ", def: "સૂરજ ઊગે તે પહેલાંનો અને એ વખતનો સમય, જ્યારે આકાશમાં પહેલો પ્રકાશ આવે છે." },
        { word: "વિસ્તાર", def: "જે ભાગને કોઈ પ્રાણી પોતાનો ગણે છે અને બીજાથી તેની રક્ષા કરે છે." }
      ],
      prompt: "સવારે સાંભળેલો સૌથી પહેલો કયો અવાજ તમને યાદ છે?"
    },
    te: {
      title: "పక్షులు ఉదయాన్నే ఎందుకు పాడతాయి",
      paragraphs: [
        "కార్లు, మనుషులు, ట్రాఫిక్ కంటే ముందు, తగినంత పెందలాడే లేస్తే, మీరు దాన్ని వినవచ్చు. పక్షులు ఒకేసారి పాడటం. దీన్ని తెల్లవారు సమూహ గానం అంటారు, పక్షులు ఉన్న దాదాపు ప్రతిచోటా, ప్రతి ఉదయం, సూర్యోదయానికి ముందే ఇది జరుగుతుంది.",
        "పక్షులు రోజులోని ఇతర సమయాల కంటే తెల్లవారుజామున ఎక్కువగా ఎందుకు పాడతాయో శాస్త్రవేత్తలు చాలాకాలంగా ఆలోచిస్తున్నారు. కొన్ని మంచి అంచనాలు ఉన్నాయి. సూర్యోదయానికి ముందు గాలి నిశ్చలంగా, చల్లగా ఉంటుంది, నిశ్చల చల్లని గాలిలో శబ్దం దూరం ప్రయాణిస్తుంది. తెల్లవారుజామున పాడిన పాట మధ్యాహ్నం అదే పాట కంటే దాదాపు ఇరవై రెట్లు ఎక్కువ పక్షులకు చేరుతుంది. కాబట్టి ఒక పక్షి శబ్దం ఒకేసారి అత్యధిక పక్షులకు వినిపించే క్షణం తెల్లవారుజామే.",
        "మరో కారణం కూడా ఉంది. చాలా మగ పక్షులు తమ సరిహద్దును కాపాడుకోవడానికి పాడతాయి. పాడటం ఇతర పక్షులకు చెబుతుంది, ఈ అడవి భాగం నాది. తెల్లవారుజామున పాడటం అంటే మరెవరికీ అవకాశం రాకముందే దాన్ని చెప్పేయడం.",
        "వేర్వేరు పక్షులు దాదాపు ఒక క్రమంలో పాడతాయి. రాబిన్‌లు, థ్రష్‌లు ముందుగా మొదలుపెడతాయి. పిచ్చుకలు చేరతాయి. కాకులు సాధారణంగా చివర. ఏదైనా ఉదయం శ్రద్ధగా వింటే, ఒక పాటలో ఒక్కొక్క వాద్యం చేరినట్లు, పొరలు ఒక్కొక్కటిగా కలవడం వినవచ్చు."
      ],
      vocab: [
        { word: "తెల్లవారు", def: "సూర్యోదయానికి ముందు, ఆ సమయంలో, ఆకాశంలో మొదటి వెలుగు వచ్చే వేళ." },
        { word: "సరిహద్దు", def: "ఒక జంతువు తనదిగా భావించి ఇతరుల నుండి కాపాడుకునే ప్రాంతం." }
      ],
      prompt: "ఉదయాన్నే మీరు విన్న తొలి శబ్దం ఏది మీకు గుర్తుంది?"
    }
  },
  {
    id: "music", cat: "science", minutes: 4, level: "Medium", gmin: 6, gmax: 10, needs: ["adhd", "dyslexia"],
    en: {
      title: "The Math Hiding in Music",
      paragraphs: [
        "Music feels like feeling. But under that feeling, there is math. Every note has a number, and every rhythm is a fraction.",
        "When a drummer plays four steady beats, that is a count of four. If she splits one of those beats in half, she is playing eighths. Splitting again gives sixteenths. The faster the drum, the smaller the fractions. Drummers do not usually think in fractions, but their hands have learned them.",
        "Indian classical music uses cycles called taal. A taal of sixteen beats is called teentaal. It is the same length as four bars of four in Western music, but it is felt differently. A tabla player can clap the sixteen beats and find the same pattern over and over, even when the melody floats freely on top.",
        "Once you notice this, math stops feeling like a school subject. It is just the shape under the song."
      ],
      vocab: [
        { word: "rhythm", def: "The pattern of beats in music — short, long, fast, slow." },
        { word: "taal", def: "A rhythm cycle in Indian classical music. Teentaal has sixteen beats." }
      ],
      prompt: "What's a pattern in your day you've noticed but never named?"
    },
    hi: {
      title: "संगीत में छिपा गणित",
      paragraphs: [
        "संगीत एहसास जैसा लगता है। पर उस एहसास के नीचे गणित है। हर सुर का एक अंक होता है, और हर ताल एक भिन्न है।",
        "जब कोई ढोल वादक चार बराबर थाप बजाता है, तो वह चार की गिनती है। अगर वह उनमें से एक थाप को आधा कर दे, तो वह आठवें हिस्से बजा रहा है। फिर से बाँटने पर सोलहवें हिस्से मिलते हैं। ढोल जितना तेज़, भिन्न उतनी छोटी। वादक आमतौर पर भिन्नों में नहीं सोचते, पर उनके हाथ उन्हें सीख चुके होते हैं।",
        "भारतीय शास्त्रीय संगीत ताल नाम के चक्र इस्तेमाल करता है। सोलह मात्रा की ताल को तीनताल कहते हैं। यह पश्चिमी संगीत के चार-चार के चार खंडों जितनी ही लंबी है, पर इसका एहसास अलग है। एक तबला वादक सोलह मात्राओं पर ताली बजाकर बार-बार वही पैटर्न पा सकता है, भले ही धुन ऊपर स्वतंत्र रूप से तैरती रहे।",
        "जैसे ही आप इसे देख लेते हैं, गणित स्कूल का विषय जैसा लगना बंद हो जाता है। यह तो बस गीत के नीचे की आकृति है।"
      ],
      vocab: [
        { word: "ताल", def: "संगीत में थापों का क्रम — छोटा, लंबा, तेज़, धीमा।" },
        { word: "तीनताल", def: "भारतीय शास्त्रीय संगीत का एक ताल चक्र। तीनताल में सोलह मात्राएँ होती हैं।" }
      ],
      prompt: "आपके दिन में ऐसा कौन-सा पैटर्न है जो आपने देखा तो है पर कभी नाम नहीं दिया?"
    },
    bn: {
      title: "সঙ্গীতে লুকিয়ে থাকা গণিত",
      paragraphs: [
        "সঙ্গীত অনুভূতির মতো লাগে। কিন্তু সেই অনুভূতির নিচে আছে গণিত। প্রতিটি সুরের একটা সংখ্যা আছে, আর প্রতিটি তালই একটা ভগ্নাংশ।",
        "কোনো ঢাকি যখন চারটি সমান চাপড় বাজায়, সেটা চারের গোনা। সে যদি তার একটা চাপড়কে অর্ধেক করে ফেলে, তবে সে অষ্টমাংশ বাজাচ্ছে। আবার ভাগ করলে ষোড়শাংশ পাওয়া যায়। ঢাক যত দ্রুত, ভগ্নাংশ তত ছোট। বাজিয়েরা সাধারণত ভগ্নাংশে ভাবে না, কিন্তু তাদের হাত সেগুলো শিখে গেছে।",
        "ভারতীয় শাস্ত্রীয় সঙ্গীতে তাল নামে চক্র ব্যবহার হয়। ষোলো মাত্রার তালকে তিনতাল বলে। পশ্চিমা সঙ্গীতের চার-চারের চারটি বারের সমান দৈর্ঘ্য, কিন্তু অনুভূতিটা আলাদা। একজন তবলাবাদক ষোলো মাত্রায় তালি দিয়ে বারবার একই প্যাটার্ন খুঁজে পান, এমনকি সুর ওপরে স্বাধীনভাবে ভেসে বেড়ালেও।",
        "একবার এটা খেয়াল করলে গণিত আর স্কুলের বিষয়ের মতো লাগে না। এটা তো গানের নিচের আকৃতি মাত্র।"
      ],
      vocab: [
        { word: "তাল", def: "সঙ্গীতে চাপড়ের বিন্যাস — ছোট, লম্বা, দ্রুত, ধীর।" },
        { word: "তিনতাল", def: "ভারতীয় শাস্ত্রীয় সঙ্গীতের একটি তাল চক্র। তিনতালে ষোলো মাত্রা থাকে।" }
      ],
      prompt: "তোমার দিনে এমন কোন প্যাটার্ন আছে যা তুমি লক্ষ করেছ কিন্তু কখনও নাম দাওনি?"
    },
    mr: {
      title: "संगीतात दडलेलं गणित",
      paragraphs: [
        "संगीत भावनेसारखं वाटतं. पण त्या भावनेखाली गणित आहे. प्रत्येक सुराला एक आकडा असतो, आणि प्रत्येक ताल हा एक अपूर्णांक असतो.",
        "एखादा ढोलकवादक चार सम ठोके वाजवतो, तेव्हा ती चारची गणती असते. त्याने त्यातला एक ठोका अर्धा केला, तर तो अष्टमांश वाजवतोय. पुन्हा भाग केला की षोडशांश मिळतात. ढोल जितका जलद, अपूर्णांक तितके लहान. वादक सहसा अपूर्णांकात विचार करत नाहीत, पण त्यांच्या हातांना ते शिकले आहेत.",
        "भारतीय शास्त्रीय संगीत ताल नावाची चक्रं वापरतं. सोळा मात्रांच्या तालाला तीनताल म्हणतात. पाश्चात्त्य संगीतातील चार-चारच्या चार आवर्तनांइतकाच तो लांब आहे, पण त्याची जाणीव वेगळी असते. एक तबलावादक सोळा मात्रांवर टाळी वाजवून पुन्हा पुन्हा तोच आकृतिबंध शोधू शकतो, जरी वर सूर मुक्तपणे तरंगत असला तरी.",
        "एकदा हे लक्षात आलं की गणित शाळेच्या विषयासारखं वाटेनासं होतं. तो तर फक्त गाण्याखालचा आकार आहे."
      ],
      vocab: [
        { word: "ताल", def: "संगीतातील ठोक्यांचा क्रम — छोटा, लांब, जलद, संथ." },
        { word: "तीनताल", def: "भारतीय शास्त्रीय संगीतातील एक ताल चक्र. तीनतालात सोळा मात्रा असतात." }
      ],
      prompt: "तुमच्या दिवसातला असा कोणता आकृतिबंध आहे जो तुम्ही पाहिलाय पण कधी नाव दिलं नाही?"
    },
    gu: {
      title: "સંગીતમાં છુપાયેલું ગણિત",
      paragraphs: [
        "સંગીત લાગણી જેવું લાગે છે. પણ એ લાગણીની નીચે ગણિત છે. દરેક સૂરનો એક આંકડો હોય છે, અને દરેક તાલ એ એક અપૂર્ણાંક છે.",
        "કોઈ ઢોલવાદક ચાર સરખા ઠોકા વગાડે, ત્યારે એ ચારની ગણતરી છે. તે એમાંના એક ઠોકાને અડધો કરે, તો તે અષ્ટમાંશ વગાડે છે. ફરી ભાગ કરતાં ષોડશાંશ મળે છે. ઢોલ જેટલો ઝડપી, અપૂર્ણાંક એટલા નાના. વાદકો સામાન્ય રીતે અપૂર્ણાંકમાં વિચારતા નથી, પણ તેમના હાથ તે શીખી ગયા હોય છે.",
        "ભારતીય શાસ્ત્રીય સંગીત તાલ નામનાં ચક્રો વાપરે છે. સોળ માત્રાના તાલને તીનતાલ કહે છે. પશ્ચિમી સંગીતના ચાર-ચારના ચાર આવર્તન જેટલો જ લાંબો છે, પણ તેની અનુભૂતિ જુદી છે. એક તબલાવાદક સોળ માત્રા પર તાળી પાડીને વારંવાર એ જ ભાત શોધી શકે છે, ભલે ઉપર સૂર મુક્તપણે તરતો રહે.",
        "એક વાર આ ધ્યાનમાં આવે, પછી ગણિત શાળાના વિષય જેવું લાગવાનું બંધ થાય છે. એ તો ફક્ત ગીતની નીચેનો આકાર છે."
      ],
      vocab: [
        { word: "તાલ", def: "સંગીતમાં ઠોકાનો ક્રમ — ટૂંકો, લાંબો, ઝડપી, ધીમો." },
        { word: "તીનતાલ", def: "ભારતીય શાસ્ત્રીય સંગીતનું એક તાલ ચક્ર. તીનતાલમાં સોળ માત્રા હોય છે." }
      ],
      prompt: "તમારા દિવસમાં એવી કઈ ભાત છે જે તમે જોઈ છે પણ ક્યારેય નામ આપ્યું નથી?"
    },
    te: {
      title: "సంగీతంలో దాగిన గణితం",
      paragraphs: [
        "సంగీతం ఒక భావనలా అనిపిస్తుంది. కానీ ఆ భావన కింద గణితం ఉంది. ప్రతి స్వరానికి ఒక సంఖ్య ఉంది, ప్రతి తాళం ఒక భిన్నం.",
        "ఒక డప్పు వాయించేవాడు నాలుగు సమ దెబ్బలు వాయిస్తే, అది నాలుగు లెక్క. అతను వాటిలో ఒక దెబ్బను సగం చేస్తే, అష్టమాంశాలు వాయిస్తున్నాడు. మళ్ళీ విభజిస్తే షోడశాంశాలు వస్తాయి. డప్పు ఎంత వేగమో, భిన్నాలు అంత చిన్నవి. వాయించేవారు సాధారణంగా భిన్నాల్లో ఆలోచించరు, కానీ వారి చేతులు వాటిని నేర్చుకున్నాయి.",
        "భారతీయ శాస్త్రీయ సంగీతం తాళం అనే చక్రాలను వాడుతుంది. పదహారు మాత్రల తాళాన్ని తీన్‌తాల్ అంటారు. పాశ్చాత్య సంగీతంలోని నాలుగు-నాలుగు నాలుగు బార్‌ల పొడవే, కానీ అనుభూతి వేరు. ఒక తబలా వాయించేవాడు పదహారు మాత్రలపై చప్పట్లు కొట్టి, పైన రాగం స్వేచ్ఛగా తేలుతున్నా, మళ్ళీ మళ్ళీ అదే నమూనాను కనుగొనగలడు.",
        "ఒకసారి దీన్ని గమనిస్తే, గణితం బడి సబ్జెక్టులా అనిపించడం ఆగిపోతుంది. అది కేవలం పాట కింది ఆకృతి మాత్రమే."
      ],
      vocab: [
        { word: "తాళం", def: "సంగీతంలో దెబ్బల నమూనా — చిన్నది, పొడవు, వేగం, నెమ్మది." },
        { word: "తీన్‌తాల్", def: "భారతీయ శాస్త్రీయ సంగీతంలోని ఒక తాళ చక్రం. తీన్‌తాల్‌లో పదహారు మాత్రలు ఉంటాయి." }
      ],
      prompt: "మీ రోజులో మీరు గమనించినా ఎప్పుడూ పేరు పెట్టని నమూనా ఏది?"
    }
  },
  {
    id: "stars", cat: "sky", minutes: 3, level: "Easy", gmin: 4, gmax: 7, needs: ["autism", "visual"],
    en: {
      title: "Stars That Tell Stories",
      paragraphs: [
        "On a clear night far from city lights, you can see thousands of stars. People all over the world have looked up at those same stars for thousands of years. To remember the patterns, they made up stories.",
        "In Indian astronomy, the sky is divided into twenty-seven groups of stars called nakshatras. Each one has a name and a story. The nakshatra called Rohini is shaped like a cart. The one called Mrigashira looks like the head of a deer.",
        "Other cultures see the same stars differently. The shape we call the Big Dipper is called the Plough in Britain and Saptarishi, the Seven Sages, in India. The stars are not really arranged that way in space. They only look like a shape from where we stand on Earth.",
        "Looking at stars is one of the oldest things a human can do. The light you see has been travelling for many years. When it finally lands in your eye, you and that ancient light are meeting for the first time."
      ],
      vocab: [
        { word: "nakshatra", def: "One of the twenty-seven groups of stars in Indian astronomy, each with its own name and story." },
        { word: "constellation", def: "A group of stars that, from Earth, looks like a shape or figure." }
      ],
      prompt: "If you made up a name for a constellation, what shape would it be?"
    },
    hi: {
      title: "कहानियाँ सुनाने वाले तारे",
      paragraphs: [
        "शहर की रोशनी से दूर किसी साफ़ रात में आप हज़ारों तारे देख सकते हैं। दुनिया भर के लोग हज़ारों सालों से उन्हीं तारों को ऊपर देखते आए हैं। आकृतियाँ याद रखने के लिए उन्होंने कहानियाँ गढ़ीं।",
        "भारतीय खगोल विज्ञान में आकाश को तारों के सत्ताईस समूहों में बाँटा गया है, जिन्हें नक्षत्र कहते हैं। हर एक का एक नाम और एक कहानी है। रोहिणी नाम का नक्षत्र गाड़ी जैसा दिखता है। मृगशिरा नाम का हिरण के सिर जैसा।",
        "दूसरी संस्कृतियाँ उन्हीं तारों को अलग ढंग से देखती हैं। जिस आकृति को हम सप्तर्षि कहते हैं, उसे ब्रिटेन में 'द प्लाऊ' कहते हैं और भारत में सप्तर्षि, यानी सात ऋषि। तारे अंतरिक्ष में सचमुच उस तरह सजे नहीं होते। वे बस धरती पर हमारे खड़े होने की जगह से किसी आकृति जैसे दिखते हैं।",
        "तारों को देखना उन सबसे पुराने कामों में से एक है जो इंसान कर सकता है। जो रोशनी आप देखते हैं वह कई सालों से सफ़र कर रही है। जब वह आख़िरकार आपकी आँख में उतरती है, तो आप और वह प्राचीन रोशनी पहली बार मिल रहे होते हैं।"
      ],
      vocab: [
        { word: "नक्षत्र", def: "भारतीय खगोल विज्ञान में तारों के सत्ताईस समूहों में से एक, हर एक का अपना नाम और कहानी।" },
        { word: "तारामंडल", def: "तारों का एक समूह जो धरती से किसी आकृति या आकार जैसा दिखता है।" }
      ],
      prompt: "अगर आप किसी तारामंडल का नाम गढ़ें, तो वह किस आकृति का होता?"
    },
    bn: {
      title: "গল্প বলা তারা",
      paragraphs: [
        "শহরের আলো থেকে দূরে কোনো পরিষ্কার রাতে তুমি হাজার হাজার তারা দেখতে পাবে। সারা পৃথিবীর মানুষ হাজার হাজার বছর ধরে সেই একই তারার দিকে তাকিয়ে এসেছে। আকৃতিগুলো মনে রাখতে তারা গল্প বানিয়েছে।",
        "ভারতীয় জ্যোতির্বিজ্ঞানে আকাশকে সাতাশটি তারার দলে ভাগ করা হয়, যাদের বলে নক্ষত্র। প্রতিটির একটা নাম আর একটা গল্প আছে। রোহিণী নামের নক্ষত্রটা গাড়ির মতো আকারের। মৃগশিরা নামেরটা হরিণের মাথার মতো দেখায়।",
        "অন্য সংস্কৃতি একই তারা আলাদাভাবে দেখে। যে আকৃতিকে আমরা সপ্তর্ষি বলি, ব্রিটেনে তাকে বলে 'দ্য প্লাও' আর ভারতে সপ্তর্ষি, অর্থাৎ সাত ঋষি। তারা আসলে মহাকাশে ওভাবে সাজানো নয়। পৃথিবীতে আমরা যেখানে দাঁড়াই সেখান থেকেই কেবল একটা আকৃতির মতো লাগে।",
        "তারার দিকে তাকানো মানুষের করা সবচেয়ে পুরনো কাজগুলোর একটি। তুমি যে আলো দেখছ তা বহু বছর ধরে ভ্রমণ করছে। অবশেষে সেটা যখন তোমার চোখে পড়ে, তখন তুমি আর সেই প্রাচীন আলো প্রথমবার দেখা করছ।"
      ],
      vocab: [
        { word: "নক্ষত্র", def: "ভারতীয় জ্যোতির্বিজ্ঞানে তারার সাতাশটি দলের একটি, প্রতিটির নিজস্ব নাম ও গল্প।" },
        { word: "তারামণ্ডল", def: "তারার একটি দল, পৃথিবী থেকে যা কোনো আকৃতি বা মূর্তির মতো দেখায়।" }
      ],
      prompt: "তুমি যদি কোনো তারামণ্ডলের নাম বানাতে, সেটা কী আকৃতির হতো?"
    },
    mr: {
      title: "गोष्टी सांगणारे तारे",
      paragraphs: [
        "शहराच्या प्रकाशापासून दूर एखाद्या स्वच्छ रात्री तुम्ही हजारो तारे पाहू शकता. जगभरातील माणसं हजारो वर्षांपासून त्याच ताऱ्यांकडे वर पाहत आली आहेत. आकृत्या लक्षात ठेवण्यासाठी त्यांनी गोष्टी रचल्या.",
        "भारतीय खगोलशास्त्रात आकाश ताऱ्यांच्या सत्तावीस गटांत विभागलं आहे, ज्यांना नक्षत्रं म्हणतात. प्रत्येकाला एक नाव आणि एक गोष्ट आहे. रोहिणी नावाचं नक्षत्र गाडीसारखं दिसतं. मृगशीर्ष नावाचं हरणाच्या डोक्यासारखं.",
        "इतर संस्कृती त्याच ताऱ्यांना वेगळ्या पद्धतीने पाहतात. ज्या आकृतीला आपण सप्तर्षी म्हणतो, तिला ब्रिटनमध्ये 'द प्लाऊ' म्हणतात आणि भारतात सप्तर्षी, म्हणजे सात ऋषी. तारे अवकाशात खरंतर तसे मांडलेले नसतात. ते फक्त पृथ्वीवर आपण उभे असतो तिथून एखाद्या आकृतीसारखे दिसतात.",
        "ताऱ्यांकडे पाहणं हे माणूस करू शकेल अशा सर्वात जुन्या गोष्टींपैकी एक आहे. तुम्ही पाहता तो प्रकाश अनेक वर्षांपासून प्रवास करत आहे. तो शेवटी तुमच्या डोळ्यात उतरतो, तेव्हा तुम्ही आणि तो प्राचीन प्रकाश पहिल्यांदाच भेटत असता."
      ],
      vocab: [
        { word: "नक्षत्र", def: "भारतीय खगोलशास्त्रातील ताऱ्यांच्या सत्तावीस गटांपैकी एक, प्रत्येकाचं स्वतःचं नाव आणि गोष्ट." },
        { word: "तारकासमूह", def: "ताऱ्यांचा एक गट जो पृथ्वीवरून एखाद्या आकृती किंवा आकारासारखा दिसतो." }
      ],
      prompt: "तुम्ही एखाद्या तारकासमूहाचं नाव रचलंत, तर तो कोणत्या आकृतीचा असेल?"
    },
    gu: {
      title: "વાર્તાઓ કહેતા તારા",
      paragraphs: [
        "શહેરની રોશનીથી દૂર કોઈ સ્વચ્છ રાતે તમે હજારો તારા જોઈ શકો. દુનિયાભરના લોકો હજારો વર્ષોથી એ જ તારાઓ સામે ઉપર જોતા આવ્યા છે. આકૃતિઓ યાદ રાખવા તેમણે વાર્તાઓ રચી.",
        "ભારતીય ખગોળશાસ્ત્રમાં આકાશને તારાઓના સત્તાવીસ સમૂહોમાં વહેંચ્યું છે, જેને નક્ષત્ર કહે છે. દરેકનું એક નામ ને એક વાર્તા છે. રોહિણી નામનું નક્ષત્ર ગાડા જેવું દેખાય છે. મૃગશીર્ષ નામનું હરણના માથા જેવું.",
        "બીજી સંસ્કૃતિઓ એ જ તારાઓને જુદી રીતે જુએ છે. જે આકૃતિને આપણે સપ્તર્ષિ કહીએ, તેને બ્રિટનમાં 'ધ પ્લાઉ' કહે છે ને ભારતમાં સપ્તર્ષિ, એટલે સાત ઋષિ. તારા ખરેખર અવકાશમાં એ રીતે ગોઠવાયેલા નથી. તે ફક્ત પૃથ્વી પર આપણે જ્યાં ઊભા છીએ ત્યાંથી જ કોઈ આકૃતિ જેવા દેખાય છે.",
        "તારાઓ સામે જોવું એ માણસ કરી શકે એવાં સૌથી જૂનાં કામોમાંનું એક છે. તમે જે પ્રકાશ જુઓ છો તે ઘણાં વર્ષોથી મુસાફરી કરી રહ્યો છે. તે આખરે તમારી આંખમાં ઊતરે, ત્યારે તમે ને એ પ્રાચીન પ્રકાશ પહેલી વાર મળી રહ્યા હો છો."
      ],
      vocab: [
        { word: "નક્ષત્ર", def: "ભારતીય ખગોળશાસ્ત્રમાં તારાઓના સત્તાવીસ સમૂહોમાંનો એક, દરેકનું પોતાનું નામ ને વાર્તા." },
        { word: "નક્ષત્રમંડળ", def: "તારાઓનો એક સમૂહ જે પૃથ્વી પરથી કોઈ આકૃતિ કે આકાર જેવો દેખાય છે." }
      ],
      prompt: "તમે કોઈ નક્ષત્રમંડળનું નામ રચો, તો તે કઈ આકૃતિનું હોત?"
    },
    te: {
      title: "కథలు చెప్పే నక్షత్రాలు",
      paragraphs: [
        "నగర వెలుగులకు దూరంగా ఒక స్వచ్ఛమైన రాత్రి మీరు వేల నక్షత్రాలను చూడవచ్చు. ప్రపంచమంతటా ప్రజలు వేల ఏళ్ళుగా అవే నక్షత్రాల వైపు చూస్తూ వచ్చారు. ఆకృతులను గుర్తుంచుకోవడానికి వారు కథలు అల్లారు.",
        "భారతీయ ఖగోళశాస్త్రంలో ఆకాశాన్ని ఇరవై ఏడు నక్షత్ర సమూహాలుగా విభజించారు, వాటిని నక్షత్రాలు అంటారు. ప్రతిదానికీ ఒక పేరు, ఒక కథ ఉంది. రోహిణి అనే నక్షత్రం బండి ఆకారంలో ఉంటుంది. మృగశిర అనేది లేడి తలలా కనిపిస్తుంది.",
        "ఇతర సంస్కృతులు అవే నక్షత్రాలను వేరుగా చూస్తాయి. మనం సప్తర్షి అనే ఆకృతిని బ్రిటన్‌లో 'ద ప్లౌ' అని, భారతదేశంలో సప్తర్షి, అంటే ఏడుగురు ఋషులు అని పిలుస్తారు. నక్షత్రాలు అంతరిక్షంలో నిజంగా అలా అమర్చి ఉండవు. భూమిపై మనం నిలబడ్డ చోటి నుండి మాత్రమే అవి ఒక ఆకృతిలా కనిపిస్తాయి.",
        "నక్షత్రాలను చూడటం మనిషి చేయగల అత్యంత పురాతన పనుల్లో ఒకటి. మీరు చూసే వెలుగు చాలా ఏళ్ళుగా ప్రయాణిస్తోంది. చివరికి అది మీ కంటిలో పడినప్పుడు, మీరూ ఆ పురాతన వెలుగూ మొదటిసారి కలుసుకుంటున్నారు."
      ],
      vocab: [
        { word: "నక్షత్రం", def: "భారతీయ ఖగోళశాస్త్రంలో ఇరవై ఏడు నక్షత్ర సమూహాల్లో ఒకటి, ప్రతిదానికీ సొంత పేరు, కథ." },
        { word: "నక్షత్రరాశి", def: "నక్షత్రాల సమూహం, భూమి నుండి ఒక ఆకృతి లేదా రూపంలా కనిపించేది." }
      ],
      prompt: "మీరు ఒక నక్షత్రరాశికి పేరు పెడితే, అది ఏ ఆకారంలో ఉండేది?"
    }
  },
  {
    id: "moon", cat: "sky", minutes: 3, level: "Medium", gmin: 6, gmax: 9, needs: ["dyslexia", "visual"],
    en: {
      title: "The Moon's Quiet Side",
      paragraphs: [
        "The moon always shows us the same face. The same dark patches, the same mountains, the same craters. This is not a coincidence. The moon turns once on its axis in exactly the time it takes to orbit Earth, so the same side faces us every night.",
        "For most of human history, no one had any idea what the other side of the moon looked like. It was a great unknown. In 1959, a Soviet spacecraft called Luna 3 flew past the moon's far side and took the first photographs. The pictures came back grainy and dark, but they were the first time human eyes had ever seen what was over there.",
        "The far side, it turned out, looks very different. The near side that faces Earth is covered in large dark plains called maria, ancient seas of cooled lava. The far side has almost none of those. It is mostly bright mountains and craters, smaller and more rugged. Scientists are still figuring out why the two sides ended up so different.",
        "The far side is sometimes called the dark side, but that is not quite right. It gets just as much sunlight as the near side. It is just the side that is always turned away from us — a side that has its own quiet life, in plain view of the sun, hidden only from the world it has always quietly circled."
      ],
      vocab: [
        { word: "orbit", def: "The curved path one object takes around another in space, like the moon around Earth." },
        { word: "maria", def: "The dark, flat areas on the moon. 'Maria' is Latin for 'seas,' though they have no water." }
      ],
      prompt: "What's something close to you that you've never really looked at?"
    },
    hi: {
      title: "चाँद का शांत पहलू",
      paragraphs: [
        "चाँद हमें हमेशा वही चेहरा दिखाता है। वही गहरे धब्बे, वही पहाड़, वही गड्ढे। यह कोई संयोग नहीं है। चाँद अपनी धुरी पर एक चक्कर ठीक उतने ही समय में पूरा करता है जितने में वह पृथ्वी की परिक्रमा करता है, इसलिए हर रात उसका वही हिस्सा हमारी ओर रहता है।",
        "इंसानी इतिहास के अधिकांश समय में किसी को अंदाज़ा नहीं था कि चाँद का दूसरा हिस्सा कैसा दिखता है। वह एक बड़ा रहस्य था। 1959 में लूना 3 नाम का एक सोवियत अंतरिक्ष यान चाँद के दूर वाले हिस्से के पास से गुज़रा और पहली तस्वीरें लीं। तस्वीरें धुँधली और गहरी आईं, पर वे पहली बार थीं जब इंसानी आँखों ने देखा कि वहाँ क्या है।",
        "पता चला कि दूर वाला हिस्सा बहुत अलग दिखता है। पृथ्वी की ओर वाला नज़दीकी हिस्सा बड़े गहरे मैदानों से ढका है, जिन्हें मारिया कहते हैं—ठंडे हुए लावा के प्राचीन समुद्र। दूर वाले हिस्से में वे लगभग नहीं हैं। वह ज़्यादातर चमकीले पहाड़ों और गड्ढों से भरा है, छोटे और ज़्यादा ऊबड़-खाबड़। वैज्ञानिक अब भी समझ रहे हैं कि दोनों हिस्से इतने अलग क्यों निकले।",
        "दूर वाले हिस्से को कभी-कभी 'अँधेरा पहलू' कहते हैं, पर यह बिल्कुल सही नहीं है। उसे नज़दीकी हिस्से जितनी ही धूप मिलती है। वह बस वह हिस्सा है जो हमेशा हमसे दूर मुड़ा रहता है—एक ऐसा पहलू जिसका अपना शांत जीवन है, सूरज की पूरी रोशनी में, छिपा है तो सिर्फ़ उस दुनिया से जिसके चारों ओर वह हमेशा चुपचाप घूमता रहा है।"
      ],
      vocab: [
        { word: "परिक्रमा", def: "अंतरिक्ष में एक वस्तु का दूसरी के चारों ओर लिया गया घुमावदार रास्ता, जैसे चाँद का पृथ्वी के चारों ओर।" },
        { word: "मारिया", def: "चाँद पर के गहरे, समतल इलाके। 'मारिया' लातिन में 'समुद्र' है, हालाँकि उनमें पानी नहीं।" }
      ],
      prompt: "आपके पास ऐसी कौन-सी चीज़ है जिसे आपने कभी सचमुच गौर से नहीं देखा?"
    },
    bn: {
      title: "চাঁদের নীরব দিক",
      paragraphs: [
        "চাঁদ আমাদের সবসময় একই মুখ দেখায়। একই কালো দাগ, একই পাহাড়, একই গর্ত। এটা কাকতালীয় নয়। চাঁদ নিজের অক্ষের চারপাশে একবার ঘোরে ঠিক ততটা সময়ে যতটা সময়ে সে পৃথিবীকে প্রদক্ষিণ করে, তাই প্রতি রাতে তার একই দিক আমাদের দিকে থাকে।",
        "মানব ইতিহাসের বেশিরভাগ সময় কারও কোনো ধারণা ছিল না চাঁদের অন্য দিকটা দেখতে কেমন। এটা ছিল এক বিরাট অজানা। ১৯৫৯ সালে লুনা ৩ নামের একটা সোভিয়েত মহাকাশযান চাঁদের দূরের দিক পেরিয়ে গিয়ে প্রথম ছবি তোলে। ছবিগুলো দানাদার ও অন্ধকার এল, কিন্তু সেই প্রথমবার মানুষের চোখ দেখল ওপাশে কী আছে।",
        "দেখা গেল, দূরের দিকটা একেবারে আলাদা দেখায়। পৃথিবীর দিকের কাছের দিকটা বড় বড় কালো সমভূমিতে ঢাকা, যাদের বলে মারিয়া—জমে যাওয়া লাভার প্রাচীন সমুদ্র। দূরের দিকে সেগুলো প্রায় নেই। সেটা বেশিরভাগ উজ্জ্বল পাহাড় ও গর্তে ভরা, ছোট আর বেশি অমসৃণ। দুই দিক কেন এত আলাদা হলো, বিজ্ঞানীরা এখনও তা বোঝার চেষ্টা করছেন।",
        "দূরের দিকটাকে কখনও 'অন্ধকার দিক' বলা হয়, কিন্তু সেটা ঠিক নয়। কাছের দিকের মতোই সে সমান সূর্যালোক পায়। এটা শুধু সেই দিক যা সবসময় আমাদের থেকে মুখ ফিরিয়ে থাকে—এমন এক দিক যার নিজস্ব নীরব জীবন আছে, সূর্যের পূর্ণ দৃষ্টিতে, লুকানো শুধু সেই জগৎ থেকে যাকে ঘিরে সে সবসময় নীরবে ঘুরেছে।"
      ],
      vocab: [
        { word: "প্রদক্ষিণ", def: "মহাকাশে এক বস্তু অন্যটির চারপাশে যে বাঁকা পথে ঘোরে, যেমন চাঁদ পৃথিবীর চারপাশে।" },
        { word: "মারিয়া", def: "চাঁদের কালো, সমতল অঞ্চল। 'মারিয়া' ল্যাটিনে 'সমুদ্র', যদিও সেখানে জল নেই।" }
      ],
      prompt: "তোমার কাছের এমন কী আছে যা তুমি কখনও সত্যিই খুঁটিয়ে দেখোনি?"
    },
    mr: {
      title: "चंद्राची शांत बाजू",
      paragraphs: [
        "चंद्र आपल्याला नेहमी तोच चेहरा दाखवतो. तेच गडद डाग, तेच पर्वत, तेच विवर. हा योगायोग नाही. चंद्र आपल्या अक्षाभोवती एक फेरी पूर्ण करतो तितक्याच वेळात तो पृथ्वीभोवती प्रदक्षिणा करतो, म्हणून दर रात्री त्याची तीच बाजू आपल्याकडे असते.",
        "मानवी इतिहासाच्या बहुतांश काळात चंद्राची दुसरी बाजू कशी दिसते याची कुणाला कल्पना नव्हती. ते एक मोठं गूढ होतं. १९५९ मध्ये लूना ३ नावाचं एक सोव्हिएत अंतराळयान चंद्राच्या दूरच्या बाजूजवळून गेलं आणि पहिले फोटो काढले. फोटो धूसर आणि गडद आले, पण मानवी डोळ्यांनी पहिल्यांदाच पाहिलं की तिकडे काय आहे.",
        "कळलं की दूरची बाजू खूप वेगळी दिसते. पृथ्वीकडची जवळची बाजू मोठ्या गडद मैदानांनी झाकलेली आहे, ज्यांना मारिया म्हणतात—थंड झालेल्या लाव्ह्याचे प्राचीन समुद्र. दूरच्या बाजूला ते जवळपास नाहीत. ती बहुतांश तेजस्वी पर्वत आणि विवरांनी भरलेली आहे, लहान आणि अधिक खडबडीत. दोन्ही बाजू इतक्या वेगळ्या का झाल्या, हे शास्त्रज्ञ अजूनही शोधत आहेत.",
        "दूरच्या बाजूला कधी 'अंधारी बाजू' म्हणतात, पण ते अगदी बरोबर नाही. तिला जवळच्या बाजूइतकाच सूर्यप्रकाश मिळतो. ती फक्त ती बाजू आहे जी नेहमी आपल्यापासून दूर वळलेली असते—अशी एक बाजू जिचं स्वतःचं शांत जीवन आहे, सूर्याच्या पूर्ण दृष्टीत, लपलेली फक्त त्या जगापासून जिच्याभोवती ती नेहमी शांतपणे फिरत आली आहे."
      ],
      vocab: [
        { word: "प्रदक्षिणा", def: "अवकाशात एक वस्तू दुसरीभोवती घेते तो वळणदार मार्ग, जसा चंद्र पृथ्वीभोवती." },
        { word: "मारिया", def: "चंद्रावरील गडद, सपाट भाग. 'मारिया' म्हणजे लॅटिनमध्ये 'समुद्र', जरी त्यात पाणी नसलं तरी." }
      ],
      prompt: "तुमच्या जवळची अशी कोणती गोष्ट आहे जिच्याकडे तुम्ही कधी खरंच नीट पाहिलं नाही?"
    },
    gu: {
      title: "ચંદ્રની શાંત બાજુ",
      paragraphs: [
        "ચંદ્ર આપણને હંમેશાં એ જ ચહેરો બતાવે છે. એ જ ઘેરા ડાઘ, એ જ પર્વતો, એ જ ખાડા. આ યોગાનુયોગ નથી. ચંદ્ર પોતાની ધરી પર એક ફેરો એટલા જ સમયમાં પૂરો કરે છે જેટલામાં તે પૃથ્વીની પ્રદક્ષિણા કરે છે, એટલે દર રાતે તેની એ જ બાજુ આપણી તરફ રહે છે.",
        "માનવ ઇતિહાસના મોટાભાગના સમયમાં ચંદ્રની બીજી બાજુ કેવી દેખાય છે તેની કોઈને કલ્પના નહોતી. એ એક મોટું રહસ્ય હતું. ૧૯૫૯માં લૂના ૩ નામનું એક સોવિયેત અંતરિક્ષયાન ચંદ્રની દૂરની બાજુ પાસેથી પસાર થયું ને પહેલા ફોટા લીધા. ફોટા ઝાંખા ને ઘેરા આવ્યા, પણ માનવ આંખે પહેલી વાર જોયું કે ત્યાં શું છે.",
        "જાણવા મળ્યું કે દૂરની બાજુ બહુ જુદી દેખાય છે. પૃથ્વી તરફની નજીકની બાજુ મોટાં ઘેરાં મેદાનોથી ઢંકાયેલી છે, જેને મારિયા કહે છે—ઠંડા પડેલા લાવાના પ્રાચીન સમુદ્રો. દૂરની બાજુએ એ લગભગ નથી. તે મોટેભાગે ચળકતા પર્વતો ને ખાડાથી ભરેલી છે, નાનાં ને વધુ ખરબચડાં. બંને બાજુ આટલી જુદી કેમ થઈ, એ વૈજ્ઞાનિકો હજુ સમજવાનો પ્રયત્ન કરે છે.",
        "દૂરની બાજુને ક્યારેક 'અંધારી બાજુ' કહે છે, પણ એ બરાબર નથી. તેને નજીકની બાજુ જેટલો જ સૂર્યપ્રકાશ મળે છે. તે ફક્ત એ બાજુ છે જે હંમેશાં આપણાથી દૂર ફરેલી રહે છે—એવી બાજુ જેનું પોતાનું શાંત જીવન છે, સૂરજની પૂરી નજરમાં, છુપાયેલી ફક્ત એ જગતથી જેની આસપાસ તે હંમેશાં શાંતિથી ફરતી રહી છે."
      ],
      vocab: [
        { word: "પ્રદક્ષિણા", def: "અંતરિક્ષમાં એક વસ્તુ બીજીની આસપાસ લે છે તે વળાંકવાળો માર્ગ, જેમ ચંદ્ર પૃથ્વીની આસપાસ." },
        { word: "મારિયા", def: "ચંદ્ર પરના ઘેરા, સપાટ વિસ્તાર. 'મારિયા' એટલે લૅટિનમાં 'સમુદ્રો', ભલે તેમાં પાણી ન હોય." }
      ],
      prompt: "તમારી નજીકની એવી કઈ વસ્તુ છે જેને તમે ક્યારેય ખરેખર ધ્યાનથી જોઈ નથી?"
    },
    te: {
      title: "చంద్రుని నిశ్శబ్ద వైపు",
      paragraphs: [
        "చంద్రుడు మనకు ఎప్పుడూ అదే ముఖాన్ని చూపిస్తాడు. అవే నల్లని మచ్చలు, అవే పర్వతాలు, అవే గుంటలు. ఇది యాదృచ్ఛికం కాదు. చంద్రుడు తన అక్షం చుట్టూ ఒకసారి తిరగడానికి, భూమి చుట్టూ తిరగడానికి సరిగ్గా అంతే సమయం పడుతుంది, అందుకే ప్రతి రాత్రి అతని అదే వైపు మన వైపు ఉంటుంది.",
        "మానవ చరిత్రలో చాలాకాలం చంద్రుని అవతలి వైపు ఎలా ఉంటుందో ఎవరికీ తెలియదు. అది ఒక గొప్ప అజ్ఞాతం. 1959లో లూనా 3 అనే సోవియట్ అంతరిక్ష నౌక చంద్రుని దూరపు వైపును దాటి మొదటి ఫోటోలు తీసింది. ఫోటోలు మసకగా, చీకటిగా వచ్చాయి, కానీ అక్కడ ఏముందో మానవ కళ్ళు చూసింది అదే తొలిసారి.",
        "దూరపు వైపు చాలా భిన్నంగా కనిపిస్తుందని తేలింది. భూమి వైపు ఉన్న దగ్గరి వైపు మారియా అనే పెద్ద నల్లని మైదానాలతో కప్పబడి ఉంది—చల్లారిన లావా పురాతన సముద్రాలు. దూరపు వైపు అవి దాదాపు లేవు. అది ఎక్కువగా ప్రకాశవంతమైన పర్వతాలు, గుంటలతో నిండి, చిన్నవిగా, మరింత గరుకుగా ఉంటుంది. రెండు వైపులు ఎందుకు ఇంత భిన్నంగా మారాయో శాస్త్రవేత్తలు ఇంకా తెలుసుకుంటున్నారు.",
        "దూరపు వైపును కొన్నిసార్లు 'చీకటి వైపు' అంటారు, కానీ అది సరి కాదు. దగ్గరి వైపుకు ఎంత సూర్యకాంతి వస్తుందో అంతే దానికీ వస్తుంది. అది కేవలం ఎప్పుడూ మన నుండి తిరిగి ఉండే వైపు—తనదైన నిశ్శబ్ద జీవితం ఉన్న వైపు, సూర్యుని పూర్తి దృష్టిలో, తాను ఎప్పుడూ నిశ్శబ్దంగా చుట్టూ తిరిగిన ప్రపంచం నుండి మాత్రమే దాగి."
      ],
      vocab: [
        { word: "కక్ష్య", def: "అంతరిక్షంలో ఒక వస్తువు మరో దాని చుట్టూ తిరిగే వంపు మార్గం, చంద్రుడు భూమి చుట్టూ తిరిగినట్లు." },
        { word: "మారియా", def: "చంద్రునిపై నల్లని, చదునైన ప్రాంతాలు. 'మారియా' అంటే లాటిన్‌లో 'సముద్రాలు', అయినా వాటిలో నీరు లేదు." }
      ],
      prompt: "మీ దగ్గర మీరు ఎప్పుడూ నిజంగా నిశితంగా చూడని వస్తువు ఏది?"
    }
  }
];


