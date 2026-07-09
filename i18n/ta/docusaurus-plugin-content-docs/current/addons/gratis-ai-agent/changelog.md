---
title: மாற்றப் பட்டியல்
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# மாற்றங்கள் பட்டியல் {#changelog}

## 1.9.0 — வெளியிட்ட தேதி: 2026-04-28 {#190--released-on-2026-04-28}

### புதிய அம்சங்கள் (New) {#new}

- **`create_contact_form` திறன்** — இது செயலில் உள்ள form plugin-ஐ (Contact Form 7, WPForms, Fluent Forms, அல்லது Gravity Forms) பயன்படுத்தி ஒரு தொடர்பு படிவத்தை (contact form) உருவாக்கும். மேலும், எந்தப் போஸ்ட் அல்லது பக்கத்திலும் உட்பொதிக்கத் தயாராக இருக்கும் ஒரு shortcode-ஐ இது திருப்பி அளிக்கும்.
- **`set_featured_image` திறன்** — இது ஒரு போஸ்ட் அல்லது பக்கத்திற்கு ஏற்கனவே உள்ள Media Library attachment ID அல்லது ஒரு தொலைதூர URL இலிருந்து ஒரு சிறப்பம்சப் படத்தை (featured image) குறிப்பிடுகிறது. ஒரு URL வழங்கப்பட்டால், அது தானாகவே படத்தைப் பதிவேற்றும் (import) வேலையையும் செய்யும்.
- **`batch_create_posts` திறன்** — ஒரே ஒரு அழைப்பில் பல போஸ்ட்களை உருவாக்க இது உதவுகிறது. இது `create_post`-இன் அதே அளவுருக்களை ஆதரிக்கிறது, ஒவ்வொரு போஸ்டின் வெற்றி/தோல்வி பற்றிய அறிக்கையையும் அளிக்கிறது, மேலும் விருப்பமான `stop_on_error` என்ற பயன்முறையையும் கொண்டுள்ளது.
- **`page_template` அளவுரு** — இது `create_post` மற்றும் `update_post`-இல் சேர்க்கப்பட்டுள்ளது. ஒரு PHP page template கோப்பை (உதாரணமாக, `page-full-width.php`) உருவாக்கும் அல்லது புதுப்பிக்கும் நேரத்தில் குறிப்பிடுகிறது. `update_post`-இல் காலியான சரத்தை (empty string) அனுப்பினால், இது தீம் இயல்பு நிலைக்கு (theme default) திரும்பும்.
- **Client-side screenshot திறன்கள்** — `capture_screenshot`, `compare_screenshots`, மற்றும் `review_page_design` ஆகியவை இதில் அடங்கும். இவை ஒரு சர்வர்-சைட் headless browser மூலம் live பக்கங்களின் முழு அல்லது viewport ஸ்கிரீன்ஷாட்களைப் பிடிக்கிறது, இரண்டு ஸ்கிரீன்ஷாட்களை ஒப்பிடுகிறது (diff), மேலும் லேஅவுட், டைப்போகிராபி, நிறம் மற்றும் அணுகல்தன்மை (accessibility) ஆகியவற்றை உள்ளடக்கிய AI-உருவாக்கப்பட்ட வடிவமைப்பு ஆய்வை (design review) வழங்குகிறது.
- **ஐந்து உள்ளமைக்கப்பட்ட முகவர்கள் (Five built-in agents)** — Content Writer, Site Builder, Design Studio, Plugin Manager, மற்றும் Support Assistant ஆகியவை இதில் உள்ளன. ஒவ்வொரு முகவருக்கும் பிரத்யேக கருவிகள், வடிவமைக்கப்பட்ட system prompt, மற்றும் தொடக்க ஆலோசனைகள் உள்ளன. இவை chat header-இல் உள்ள புதிய **Agent Picker** மூலம் மாற்றப்படலாம். [Built-in Agents](../../user-guide/configuration/built-in-agents)-ஐப் பார்க்கவும்.
- **Feature flags** — அணுகல் கட்டுப்பாட்டு ஸ்விட்ச்களுடன் கூடிய புதிய **Settings → Feature Flags** Tab சேர்க்கப்பட்டுள்ளது (நிர்வாகிகளுக்கு மட்டும் கட்டுப்படுத்துதல், network நிர்வாகிகளுக்கு மட்டும் கட்டுப்படுத்துதல், சந்தாதாரர் அணுகல், உறுப்பினர்கள் அல்லாதவர்களுக்கு முடக்குதல்) மற்றும் பிராண்டிங் விருப்பங்கள் (footer attribution-ஐ மறைத்தல், தனிப்பயன் முகவர் பெயர், agent picker-ஐ மறைத்தல், chat avatar ஆக தள ஐகானைப் பயன்படுத்துதல்). [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings)-ஐப் பார்க்கவும்.
- **கடைசி அமர்வை மீட்டமைத்தல் (Restore last session)** — இப்போது chat panel, பக்கத்தை ஏற்றும்போதும் (page load) widget திறக்கும்போதும் தானாகவே சமீபத்திய உரையாடலை மீண்டும் ஏற்றுகிறது. இதனால் பக்கத்தை வேறு பக்கம் மாற்றுவதால் சூழல் (context) இழக்கப்படுவதில்லை.
- **Plugin action links** — WordPress-இன் **Plugins → Installed Plugins** திரையில், plugin விளக்கத்தின் கீழே, Settings மற்றும் Abilities Registry-க்கான விரைவான இணைப்புகள் இப்போது தோன்றும்.

### மேம்படுத்தப்பட்டது (Improved) {#improved}

- **பட மூலத்தை மீண்டும் முயற்சித்தல் (Image source retry)** — பதிவிறக்க தோல்வியடைவதற்கு முன், முகவர் இப்போது கட்டமைக்கப்பட்ட அனைத்து இலவச பட மூலங்களையும் மீண்டும் முயற்சிக்கிறது. அதன் பிறகு, AI-உருவாக்கப்பட்ட படத்திற்கு fallback செய்யும்.
- **Model info panel** — இது chat header-இல் எப்போதும் தெரியும்; முதல் செய்தியைப் பிறகும் மறைந்து போவதில்லை.
- **Auto-scroll நடத்தை (Auto-scroll behaviour)** — பயனர் படிக்க மேலே ஸ்க்ரோல் செய்யும் போது ஆட்டோ-ஸ்க்ரோல் இடைநிறுத்தப்படும்; ஒரு மிதக்கும் **Scroll to bottom** பொத்தான் தோன்றி, பயனர் சமீபத்திய செய்திக்கு வரும்போது தானாகவே மறைந்துவிடும்.
- **Agent Picker UI** — இது ஒரு form-table overlay ஆக மறுவடிவமைக்கப்பட்டுள்ளது. ஒவ்வொரு முகவருக்கும் தனித்தனி ஐகான்கள் இருப்பதால், ஒரே பார்வையில் முகவர்களை அடையாளம் காணவும் மாற்றவும் இது எளிதாக்குகிறது.
- **Lazy-loaded JS chunks** — chat widget-இன் ஆரம்ப JavaScript bundle இப்போது lazy-loaded chunks ஆகப் பிரிக்கப்பட்டுள்ளது. இதனால் ஆரம்ப bundle அளவு 75–90% குறைந்துள்ளது.
- **Chat widget redesign** — ஒருங்கிணைக்கப்பட்ட AI ஐகான் முந்தைய தனிப்பயன் அவதாரத்தை (custom avatar) மாற்றியுள்ளது; இது உள்ளமைக்கப்பட்ட முகவர் அமைப்புடன் ஒத்துப்போகிறது.
- **URL linkification** — system messages மற்றும் error message bubbles-இல் தோன்றும் URL-கள் இப்போது கிளிக் செய்யக்கூடிய இணைப்புகளாக (clickable links) காட்டப்படுகின்றன.

### சரி செய்யப்பட்டது (Fixed) {#fixed}

- **Ability discoverability** — அனைத்து திறன்களும் (abilities) நம்பகமாக முகவரின் கருவிப் பட்டியலில் தோன்றுமாறு விளக்கங்கள், system prompt குறிப்புகள் மற்றும் namespace சீரமைப்பு ஆகியவை சரி செய்யப்பட்டுள்ளன.
- **Providers cache** — multisite network-களில் காலாவதியான-provider சிக்கல்களைத் தடுக்க, providers இப்போது ஒரு version counter மூலம் site-wide cache செய்யப்படுகின்றன.
- **`ability_invalid_output`** — 12 ability handlers முழுவதும் சரிசெய்யப்பட்டது; இவை அனைத்தும் சரியாக கட்டமைக்கப்பட்ட JSON பதில்களைத் திருப்பி அளிக்கும்.
- **`pending_client_tool_calls` pipeline** — client-side tool calls சரியாக முடிந்து, முடிவுகளை model-க்குத் திருப்பி அனுப்பும் வகையில் end-to-end இணைக்கப்பட்டுள்ளது.
- **History drawer** — திரும்பப் பெற முடியாத மாற்றங்கள் (non-revertable changes) revert பட்டியலில் இருந்து விலக்கப்பட்டுள்ளன; **View full history** என்ற இணைப்பு இப்போது சரியாக வேலை செய்கிறது.
- **Changes/revert system** — ஐந்து தனித்தனி பிழைகள் சரி செய்யப்பட்டு, புதிய admin interface-இன் கீழ் ஒன்றிணைக்கப்பட்டுள்ளன.
- **Save Settings toast** — **Save Settings** என்பதைக் கிளிக் செய்த பிறகு snackbar அறிவிப்பு இப்போது நம்பகமாக தோன்றும்.
- **Trash context menu** — **Delete Permanently** என்ற விருப்பம் சேர்க்கப்பட்டுள்ளது. இதனால் items-ஐ trash view-ஐ விட்டு வெளியேறாமல் hard-delete செய்ய முடியும்.
- **Edit & resend** — edit ஐகானைக் கிளிக் செய்வது இப்போது உரையாடலில் உள்ள அனைத்து செய்திகளுக்கும் அல்ல, கிளிக் செய்யப்பட்ட செய்திக்கு மட்டும் edit mode-இல் நுழைகிறது.
- **Chat layout height** — plugin-இன் மூலம் செருகப்படும் உள்ளடக்கம் (admin notices, banners) பக்கத்தின் மேலே தோன்றும் போது, chat panel அதன் உயரத்தை மாற்றியமைக்கிறது. இதனால் உள்ளீட்டுப் பகுதி (input area) திரைக்கு வெளியே தள்ளப்படுவதில்லை.

---

## 1.4.0 — வெளியிட்ட தேதி: 2026-04-09 {#140--released-on-2026-04-09}

### புதிய அம்சங்கள் (New) {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI pipelines மற்றும் model evaluation workflows-க்காக command line-இல் இருந்து Agent Capabilities v1 benchmark suite-ஐ இயக்குகிறது. இது ஒவ்வொரு கேள்விக்கும் தனித்தனியாக இயக்குதல், provider/model override, மற்றும் JSON/CSV வெளியீட்டை ஆதரிக்கிறது.
- **Agent Capabilities v1 benchmark suite** — இது சிக்கலான, பல-படி prompt-களின் கட்டமைக்கப்பட்ட தொகுப்பு. இது முழு ability surface-ஐ சோதித்து, ஸ்கோரிங் மற்றும் token/duration அறிக்கையிடலை வழங்குகிறது.
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`. பதிவேற்றங்கள் (Registrations) options table மூலம் restart செய்த பிறகும் நிலைத்திருக்கும்.
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. இது விருப்பமான rewrite slugs உடன் படிநிலை (hierarchical) மற்றும் தட்டையான (flat) taxomony-களை ஆதரிக்கிறது.
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. இதில் ஐந்து தொகுக்கப்பட்ட presets உள்ளன: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. இது WordPress Global Styles API மூலம் theme.json மதிப்புகளைப் படிக்கவும் எழுதவும் உதவுகிறது.
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. இது nested menus மற்றும் theme location assignment-ஐ ஆதரிக்கிறது.
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`. முக்கியமான WordPress options-ஐ மாற்றியமைப்பிலிருந்து பாதுகாக்கும் ஒரு உள்ளமைக்கப்பட்ட பாதுகாப்பு blocklist இதில் உள்ளது.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. WordPress plugins ஆக விநியோகிக்கப்படும் ability packs-ஐ கண்டறிந்து செயல்படுத்தலாம்.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. இது plugin discovery, step output references, progress tracking, மற்றும் தானியங்கி பிழை மீட்பு (autonomous error recovery) கொண்ட பல-கட்ட தள உருவாக்கத் திட்டங்களை (multi-phase site build plans) வழங்குகிறது.
- **Restaurant website benchmark question** (`q-restaurant-website`) — CPT registration, design system, navigation, மற்றும் plugin discovery ஆகியவற்றை உள்ளடக்கிய end-to-end சோதனை.
- **AI provider connector plugins** — விரைவான உள்ளூர் மேம்பாட்டு அமைப்புக்கு (local development setup) WordPress Playground blueprints-இல் சேர்க்கப்பட்டுள்ளது.

### மேம்படுத்தப்பட்டது (Improved) {#improved-1}

- README, AI provider connector ஆவணங்கள் மற்றும் setup வழிமுறைகளுடன் புதுப்பிக்கப்பட்டுள்ளது.

### சரி செய்யப்பட்டது (Fixed) {#fixed-1}

- `main` branch-இல் உள்ள 25 PHPUnit test தோல்விகள் சரி செய்யப்பட்டன.
- `blueprint.json`-இல் GitHub releases URL வடிவம் சரி செய்யப்பட்டது.
- பழைய ID-களுடன் மோதலைத் தவிர்க்க Task ID மீண்டும் எண்ணப்பட்டது.

---

## 1.3.x {#13x}

_முந்தைய வெளியீட்டு குறிப்புகள் (Prior release notes) plugin repository-இல் பராமரிக்கப்படுகின்றன._
