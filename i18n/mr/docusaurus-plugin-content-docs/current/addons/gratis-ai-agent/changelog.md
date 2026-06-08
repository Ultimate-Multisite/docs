---
title: changelog
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog

## 1.9.0 — Released on 2026-04-28

### New

- **`create_contact_form` ability** — हे सक्रिय फॉर्म प्लगइन (Contact Form 7, WPForms, Fluent Forms, किंवा Gravity Forms) वापरून कॉन्टॅक्ट फॉर्म तयार करते आणि कोणत्याही पोस्ट किंवा पेजमध्ये एम्बेड करण्यासाठी तयार शॉर्टकोड परत करते.
- **`set_featured_image` ability** — हे विद्यमान Media Library attachment ID किंवा रिमोट URL मधून पोस्ट किंवा पेजला फीचर्ड इमेज नियुक्त करते; URL पुरवल्यास ते आपोआप इमेज इम्पोर्ट करते.
- **`batch_create_posts` ability** — एकाच ability कॉलमध्ये अनेक पोस्ट तयार करते. हे `create_post` प्रमाणेच पॅरामीटर्सला सपोर्ट करते, प्रत्येक पोस्टचे यश/अपयश कळवते, आणि यात पर्यायी `stop_on_error` मोड आहे.
- **`page_template` parameter** — हे `create_post` आणि `update_post` मध्ये जोडले गेले आहे. हे तयार करताना किंवा अपडेट करताना एक PHP पेज टेम्पलेट फाइल (उदा. `page-full-width.php`) नियुक्त करते. `update_post` मध्ये थीमच्या डिफॉल्टवर परत जायचे असल्यास रिकामी स्ट्रिंग पास करा.
- **Client-side screenshot abilities** — `capture_screenshot`, `compare_screenshots`, आणि `review_page_design`. हे सर्व्हर-साइड headless browser द्वारे लाईव्ह पेजचे पूर्ण किंवा व्ह्यूपोर्ट स्क्रीनशॉट्स कॅप्चर करते, दोन स्क्रीनशॉट्सची तुलना करते, आणि लेआउट, टायपोग्राफी, रंग आणि ॲक्सेसिबिलिटी कव्हर करणारा AI-जनरेटेड डिझाइन रिव्ह्यू देते.
- **Five built-in agents** — Content Writer, Site Builder, Design Studio, Plugin Manager, आणि Support Assistant. प्रत्येक एजंटकडे साधनांचा (tools) एक समर्पित संच, एक खास सिस्टम प्रॉम्प्ट आणि स्टार्टर सूचना आहेत. हे नवीन **Agent Picker** मधून स्विच करता येते जे chat header मध्ये आहे. [Built-in Agents](../../user-guide/configuration/built-in-agents) पहा.
- **Feature flags** — नवीन **Settings → Feature Flags** टॅबमध्ये ॲक्सेस-कंट्रोल टॉगल्स (ॲडमिनिस्ट्रेटर्ससाठी प्रतिबंधित करा, नेटवर्क ॲडमिनसाठी प्रतिबंधित करा, सबस्क्रायबर ॲक्सेस, नॉन-मेम्बर्ससाठी अक्षम करा) आणि ब्रँडिंग पर्याय (फूटर ॲट्रिब्यूशन लपवा, कस्टम एजंट नाव, एजंट पिकर लपवा, chat avatar म्हणून साइट आयकॉन वापरा) जोडले आहेत. [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) पहा.
- **Restore last session** — आता chat panel पेज लोड झाल्यावर आणि widget उघडल्यावर सर्वात अलीकडील संभाषण आपोआप reload करतो, त्यामुळे पेज नेव्हिगेशन्स दरम्यान संदर्भ (context) कधीही गमावल्यासारखा वाटत नाही.
- **Plugin action links** — WordPress च्या **Plugins → Installed Plugins** स्क्रीनवर, प्लगइन वर्णनाखाली, Settings आणि Abilities Registry साठी त्वरित लिंक्स दिसू लागल्या आहेत.

### Improved

- **Image source retry** — डाउनलोड अयशस्वी झाल्यास, एजंट आता AI-जनरेटेड इमेजवर fallback करण्यापूर्वी सर्व कॉन्फिगर केलेले मोफत इमेज स्रोत (free image sources) पुन्हा प्रयत्न करतो.
- **Model info panel** — हे chat header मध्ये नेहमी दिसणारे असते; आता पहिल्या मेसेज नंतर लपवले जात नाही.
- **Auto-scroll behaviour** — वापरकर्ता वाचण्यासाठी वर स्क्रोल करतो तेव्हा auto-scroll थांबतो; एक फ्लोटिंग **Scroll to bottom** बटण दिसते आणि वापरकर्ता सर्वात नवीन मेसेजवर पोहोचल्यावर आपोआप गायब होते.
- **Agent Picker UI** — याला फॉर्म-टेबल ओव्हरले म्हणून पुन्हा डिझाइन केले आहे, ज्यात प्रत्येक एजंटचे आयकॉन आहेत, ज्यामुळे एजंट ओळखणे आणि स्विच करणे सोपे झाले आहे.
- **Lazy-loaded JS chunks** — chat widget चा प्रारंभिक JavaScript bundle आता lazy-loaded chunks मध्ये विभाजित केला गेला आहे, ज्यामुळे सुरुवातीच्या bundle sizes मध्ये ७५–९०% कपात झाली आहे.
- **Chat widget redesign** — युनिफाइड AI आयकॉनने पूर्वीचे कस्टम अवतार बदलले आहेत; हे बिल्ट-इन एजंट सिस्टमशी सुसंगत आहे.
- **URL linkification** — सिस्टम मेसेजेस आणि एरर मेसेज बबल्समध्ये दिसणारे URL आता क्लिक करण्यायोग्य लिंक्स म्हणून render केले जातात.

### Fixed

- **Ability discoverability** — वर्णने (descriptions), सिस्टम प्रॉम्प्ट संदर्भ (system prompt references), आणि नेमस्पेस अलाइनमेंट (namespace alignment) दुरुस्त केले आहेत, ज्यामुळे सर्व abilities एजंटच्या टूल लिस्टमध्ये विश्वसनीयपणे दिसतात.
- **Providers cache** — providers आता version counter द्वारे साइट-व्यापी cache केले जातात, ज्यामुळे multisite networks वर stale-provider समस्या टाळली जाते.
- **`ability_invalid_output`** — १२ ability handlers मध्ये दुरुस्त केले; सर्व आता योग्य संरचित JSON प्रतिसाद (properly structured JSON responses) परत करतात.
- **`pending_client_tool_calls` pipeline** — हे end-to-end जोडले गेले आहे जेणेकरून client-side tool calls योग्यरित्या पूर्ण होतील आणि परिणाम मॉडेलला परत करतील.
- **History drawer** — revert करण्यायोग्य नसलेले बदल (non-revertable changes) revert लिस्टमधून वगळले जातात; **View full history** लिंक आता योग्यरित्या काम करते.
- **Changes/revert system** — पाच स्वतंत्र बग्स दुरुस्त केले आणि नवीन ॲडमिन इंटरफेसखाली एकत्र केले.
- **Save Settings toast** — **Save Settings** वर क्लिक केल्यानंतर snackbar नोटिफिकेशन आता विश्वसनीयपणे दिसते.
- **Trash context menu** — **Delete Permanently** पर्याय जोडला आहे जेणेकरून आयटम्स ट्रॅश व्ह्यू सोडून हार्ड-डिलीट केले जाऊ शकतात.
- **Edit & resend** — एडिट आयकॉनवर क्लिक केल्याने आता फक्त क्लिक केलेल्या मेसेजसाठी एडिट मोडमध्ये प्रवेश होतो, संपूर्ण थ्रेडमधील मेसेजेससाठी नाही.
- **Chat layout height** — जेव्हा प्लगइन-इंजेक्টেড कंटेंट (admin notices, banners) पेजच्या वर दिसतो, तेव्हा chat panel त्याची उंची समायोजित करतो, ज्यामुळे इनपुट एरिया स्क्रीनच्या बाहेर ढकला जात नाही.

---

## 1.4.0 — Released on 2026-04-09

### New

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI pipelines आणि model evaluation workflows साठी कमांड लाईनवरून Agent Capabilities v1 benchmark suite चालवतो. हे प्रति-प्रश्न रन, प्रदाता/मॉडेल ओव्हरराइड्स, आणि JSON/CSV आउटपुटला सपोर्ट करते.
- **Agent Capabilities v1 benchmark suite** — हे जटिल, बहु-टप्प्यांच्या प्रॉम्प्ट्सचा (multi-step prompts) संरचित संच आहे जो संपूर्ण ability surface चा वापर करतो, ज्यात स्कोअरिंग आणि टोकन/कालावधी अहवाल (token/duration reporting) समाविष्ट आहे.
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`. नोंदणी (Registrations) पर्याय टेबल (options table) द्वारे रीस्टार्ट्स दरम्यान टिकून राहते.
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. हे पर्यायी rewrite slugs सह hierarchical आणि flat taxonomies ला सपोर्ट करते.
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. यात पाच क्युरेटेड प्रीसेट (curated presets) समाविष्ट आहेत: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. हे WordPress Global Styles API द्वारे theme.json व्हॅल्यूज वाचते आणि लिहिते.
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. हे नेस्टेड मेन्यू आणि थीम लोकेशन असाइनमेंटला सपोर्ट करते.
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`. यात महत्त्वपूर्ण WordPress options ला बदलापासून वाचवणारा एक बिल्ट-इन सेफ्टी ब्लॉकलिस्ट (safety blocklist) समाविष्ट आहे.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. हे WordPress प्लगइन्स म्हणून वितरित केलेल्या ability पॅक्स शोधून सक्रिय करते.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. यात प्लगइन डिस्कव्हरी, स्टेप आउटपुट संदर्भ (step output references), प्रगती ट्रॅकिंग आणि स्वायत्त त्रुटी पुनर्प्राप्ती (autonomous error recovery) असलेले मल्टी-फेज साइट बिल्ड प्लॅन्स आहेत.
- **Restaurant website benchmark question** (`q-restaurant-website`) — CPT नोंदणी, डिझाइन सिस्टम, नेव्हिगेशन आणि प्लगइन डिस्कव्हरी कव्हर करणारा end-to-end चाचणी.
- **AI provider connector plugins** स्थानिक विकासाची (local development) जलद सेटअप करण्यासाठी WordPress Playground blueprints मध्ये जोडले.

### Improved

- README मध्ये AI provider connector documentation आणि setup instructions अद्यतनित केले.

### Fixed

- `main` branch वर २५ PHPUnit चाचणी अपयश (test failures) सोडवले.
- `blueprint.json` मध्ये GitHub releases URL स्वरूपण (format) दुरुस्त केले.
- जुन्या IDs शी टक्कर टाळण्यासाठी Task ID पुन्हा क्रमांकित केले.

---

## 1.3.x

_मागील रिलीझ नोट्स प्लगइन रिपॉझरीमध्ये उपलब्ध आहेत._
