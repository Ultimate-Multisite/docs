---
title: পরিবর্তন তালিকা
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# পৰিৱৰ্তনৰ তালিকা (Changelog)

## ১.৯.০ — মুকলি কৰা হৈ: ২০২৬-০৪-২৮

### নতুন (New)

- **`create_contact_form` সামৰ্থ্য** — এই সামৰ্থিয়ে সক্ৰিয় (active) ফৰ্ম প্লাগইন (Contact Form 7, WPForms, Fluent Forms, বা Gravity Forms) ব্যৱহাৰ কৰি এটা যোগাযোগ ফৰ্ম (contact form) সৃষ্টি কৰে আৰু যিকোনো পোষ্ট বা পেজত ঢাকিবলৈ (embed) সাজু ছৰ্টকোড (shortcode) এটা দিয়ে।
- **`set_featured_image` সামৰ্থ্য** — বিদ্যমান মিডিয়া লাইব্ৰেৰী (Media Library)ৰ এটা attachment ID বা এটা দূৰৰ URL (remote URL) ৰ পৰা এটা পোষ্ট বা পেজৰ বাবে এটা featured image নিৰ্ধাৰণ কৰে; যদি URL দিয়া হয়, তেন্তে ই স্বয়ংক্রিয়ভাৱে ছবিখন আমদানি কৰে।
- **`batch_create_posts` সামৰ্থ্য** — এটা সামৰ্থ্য কল (ability call) ত বহুতো পোষ্ট সৃষ্টি কৰে। ই `create_post` ৰ দৰেই পৰিমান (parameters) সমৰ্থন কৰে, প্ৰতিটো পোষ্টৰ সফলতা/ব্যৰ্থতা প্ৰতিবেদন কৰে, আৰু ইয়াত এটা ঐচ্ছিক `stop_on_error` মোড আছে।
- **`page_template` পৰিমান** — `create_post` আৰু `update_post` ত যোগ কৰা হৈছে। সৃষ্টি কৰাৰ সময় বা আপডেট কৰাৰ সময় এটা PHP পেজ টেমপ্লেট ফাইল (যেনে: `page-full-width.php`) নিৰ্ধাৰণ কৰে। `update_post` ত থিমৰ ডিফল্টলৈ পুনৰ যাবলৈ এটা খালি ছৰং (empty string) প্ৰেৰণ কৰক।
- **Client-side screenshot সামৰ্থ্যসমূহ** — `capture_screenshot`, `compare_screenshots`, আৰু `review_page_design`। এটা ছাৰ্ভাৰ-সাইড headless browser ব্যৱহাৰ কৰি লাইভ পেজৰ সম্পূৰ্ণ বা viewport স্ক্ৰিনশ্বট লয়, দুটা স্ক্ৰিনশ্বটৰ মাজত পাৰ্থক্য (diff) কৰে, আৰু লেআউট, টাইপগ্ৰাফি, ৰং, আৰু accessibility ক কওঁকৈ এটা AI-উৰ্জিত ডিজাইন ৰিভিউ দিয়ে।
- **পাঁচটা বিল্ট-ইন এজেণ্ট (Built-in Agents)** — Content Writer, Site Builder, Design Studio, Plugin Manager, আৰু Support Assistant। প্ৰতিজন এজেণ্টৰ এটা নিৰ্দিষ্ট সঁজুলিৰ set, এটা উপযুক্ত system prompt, আৰু আৰম্ভণিৰ পৰামৰ্শ থাকে। নতুন **Agent Picker** ত এয়া সলনি কৰিব পাৰি। [Built-in Agents](../../user-guide/configuration/built-in-agents) চাওক।
- **Feature flags** — নতুন **Settings → Feature Flags** ট্ৰেছত access-control টগল (administrators-লৈ সীমিত, network admins-লৈ সীমিত, subscriber access, non-membersৰ বাবে অক্ষম) আৰু branding বিকল্প (footer attribution লুকুৱাই, custom agent name, agent picker লুকুৱাই, chat avatar হিচাপে site icon ব্যৱহাৰ কৰা) যোগ কৰা হৈছে। [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) চাওক।
- **Last session পুনৰ লোড কৰা** — এতিয়া চ্যাট প্যানেলটো পেজ লোড হোৱাৰ লগে লগে আৰু widget খুলিলেও আটাইতকৈ শেহতীয়া কথোপকথনটো স্বয়ংক্রিয়ভাৱে পুনৰ লোড কৰে, গতিকে পেজ নেভিগেশ্বনৰ সময়ত কোনো কন্টেক্সট হেৰুৱাই নযায়।
- **Plugin action links** — WordPress **Plugins → Installed Plugins** স্ক্ৰীণত প্লাগইনৰ বৰ্ণনাৰ তলত Settings আৰু Abilities Registry লৈ সোনকালে লিংক (quick links) দেখুৱাই।

### উন্নত (Improved)

- **Image source retry** — ডাউনলোড কৰাত বিফল হোৱাৰ লগে লগে এজেণ্টে কনফিগাৰেট কৰা সকলো বিনামূলীয়া image source পুনৰ চেষ্টা কৰে, তাৰ পিছত AI-উৰ্জিত ছবি এটা দিয়ে।
- **Model info panel** — চ্যাট হেডাৰত সদায় দৃশ্যমান; প্ৰথম বাৰৰ বাৰৰ বাবে নোহোৱা হৈছিল।
- **Auto-scroll behaviour** — যদি ব্যৱহাৰকাৰীয়ে পঢ়িবলৈ ওপৰলৈ স্ক্রল কৰে, তেন্তে auto-scroll বন্ধ হৈ যায়; এটা ভাসমান **Scroll to bottom** বাটন দেখুৱায় আৰু ব্যৱহাৰকাৰীয়ে আটাইতকৈ শেহতীয়া বাৰলৈ গ'লে স্বয়ংক্রিয়ভাৱে অদৃশ্য হৈ যায়।
- **Agent Picker UI** — ইয়াক এটা form-table overlay হিচাপে পুনৰ ডিজাইন কৰা হৈছে, য'ত প্ৰতিজন এজেণ্টৰ আইকন আছে, যাৰ ফলত এক নজৰত এজেণ্ট চিনাক্ত কৰা আৰু সলনি কৰাটো সহজ হৈছে।
- **Lazy-loaded JS chunks** — চ্যাট widget-ৰ আৰম্ভণিৰ JavaScript bundle এতিয়া lazy-loaded chunks ত বিভক্ত কৰা হৈছে, যাৰ ফলত আৰম্ভণিৰ bundle আকাৰ ৭৫–৯০% লহমক হয়।
- **Chat widget redesign** — একত্ৰিত AI আইকনটো আগৰ custom avatar ক স্থান দিছে; ই বিল্ট-ইন এজেণ্ট ব্যৱস্থাৰ সৈতে সামঞ্জস্যপূৰ্ণ।
- **URL linkification** — ব্যৱস্থাৰ বাবে দিয়া বা ভুল বাৰৰ বাবে দিয়া URL সমূহ এতিয়া ক্লিক কৰিব পৰা লিংক হিচাপে দেখুৱдено হয়।

### সংশোধন কৰা হৈ (Fixed)

- **Ability discoverability** — বৰ্ণনা, system prompt references, আৰু namespace alignment সংশোধন কৰা হৈছে যাতে সকলো সামৰ্থ্য এজেণ্টৰ tool list ত নির্ভরযোগ্যভাৱে দেখুৱাই।
- **Providers cache** — providers এতিয়া multisite network ত stale-provider সমস্যা নিৰ্মূল কৰিবলৈ এটা version counterৰ জৰিয়তে site-wide cache কৰা হয়।
- **`ability_invalid_output`** — ১২ টা ability handlers ত সমাধান কৰা হৈছে; সকলোৱে সঠিকভাৱে structured JSON response দিয়ে।
- **`pending_client_tool_calls` pipeline** — end-to-end সংযোগ কৰা হৈছে যাতে client-side tool calls সঠিকভাৱে সম্পন্ন হয় আৰু মডেললৈ ফলাফল দিয়ে।
- **History drawer** — পুনৰ কৰিব নোৱাৰা পৰিৱৰ্তনসমূহ (non-revertable changes) revert listৰ পৰা বাদ দিয়া হৈছে; **View full history** লিংকটো এতিয়া সঠিকভাৱে কাম কৰে।
- **Changes/revert system** — পাঁচটা পৃথক bug সংশোধন কৰি নতুন admin interface ত একত্ৰিত কৰা হৈছে।
- **Save Settings toast** — **Save Settings** ক্লিক কৰাৰ পিছত snackbar notification এতিয়া নির্ভরযোগ্যভাৱে দেখুৱায়।
- **Trash context menu** — **Delete Permanently** বিকল্প যোগ কৰা হৈছে যাতে আইটেমবোৰ ট্ৰ্যাশ ভিউত থকাৰ পৰিৱৰ্তে স্থায়ীভাৱে মুছিব পাৰি।
- **Edit & resend** — এডিট আইকনটো ক্লিক কৰিলে এতিয়া কেৱল ক্লিক কৰা বাৰটো এডিট মোডত যায়, সমগ্ৰ thread-ৰ বাৰবোৰত নহয়।
- **Chat layout height** — যদি প্লাগইন-ইনজেক্ট কৰা কন্টেন্ট (admin notices, banners) পেজৰ ওপৰত দেখুৱায়, তেন্তে চ্যাট প্যানেলটো নিজৰ উচ্চতা সজলি দিয়ে, যাৰ ফলত input area স্ক্রিনৰ বাহিৰলৈ ঠেলি নিয়া নহয়।

---

## ১.৪.০ — মুকলি কৰা হৈ: ২০২৬-০৪-০৯

### নতুন (New)

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI pipelines আৰু model evaluation workflows ৰ বাবে কমাণ্ড লাইনৰ পৰা Agent Capabilities v1 benchmark suite চলায়। ই প্ৰশ্ন অনুসৰি run, provider/model overrides, আৰু JSON/CSV output সমৰ্থন কৰে।
- **Agent Capabilities v1 benchmark suite** — এটা structured set of complex, multi-step prompts যিয়ে সামগ্ৰিক সামৰ্থ্যৰ পৃষ্ঠভাগ (full ability surface) পৰীক্ষা কৰে, য'ত scoring আৰু token/duration reporting থাকে।
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`। এই ৰেজিষ্ট্ৰেচনবোৰ options tableৰ জৰিয়তে restart কৰাৰ পিছতো সংৰক্ষিত থাকে।
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`। ই ঐচ্ছিক rewrite slugs লৈ hierarchical আৰু flat taxonomies সমৰ্থন কৰে।
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`। ইয়াত পাঁচটা curated preset আছে: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`।
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`। WordPress Global Styles API জৰিয়তে theme.json মানবোৰ পঢ়ে আৰু লিখি।
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`। ই nested menus আৰু theme location assignment সমৰ্থন কৰে।
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`। ইয়াৰ লগত এটা built-in safety blocklist আছে যিয়ে critical WordPress options ক পৰিৱৰ্তনৰ পৰা ৰক্ষা কৰে।
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`। WordPress plugins হিচাপে বিতৰণ কৰা সামৰ্থ্য পেকেজসমূহ আৱিষ্কাৰ কৰে আৰু সক্রিয় কৰে।
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`। ইয়াৰ লগত প্লাগইন আৱিষ্কাৰ, step output references, progress tracking, আৰু autonomous error recovery সহ বহু-ধাপৰ site build plan থাকে।
- **Restaurant website benchmark question** (`q-restaurant-website`) — CPT ৰেজিষ্ট্ৰেচন, design system, navigation, আৰু plugin আৱিষ্কাৰ ক কওঁৈ এটা end-to-end test।
- **AI provider connector plugins** স্থানীয় বিকাশৰ বাবে অধিক দ্ৰুত setup কৰিবলৈ WordPress Playground blueprints ত যোগ কৰা হৈছে।

### উন্নত (Improved)

- README ত AI provider connector documentation আৰু setup instructions যোগ কৰা হৈছে।

### সংশোধন কৰা হৈ (Fixed)

- `main` branch ত ২৫ টা PHPUnit test failure সমাধান কৰা হৈছে।
- `blueprint.json` ত GitHub releases URL format সংশোধন কৰা হৈছে।
- পুৰণি ID লগত সংঘাত এৰাবলৈ Task ID পুনৰ সংখ্যাযুক্ত কৰা হৈছে।

---

## ১.৩.x

_পূৰণি মুকলি কৰাৰ টোকা প্লাগইন ৰিপজিটৰী (plugin repository) ত সংৰক্ষিত।_
