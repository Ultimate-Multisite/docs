---
title: পরিবর্তন লগ
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog

## 1.9.0 — Released on 2026-04-28 {#190--released-on-2026-04-28}

### নতুন (New) {#new}

- **`create_contact_form` ability** — সক্রিয় ফর্ম প্লাগইন (Contact Form 7, WPForms, Fluent Forms, বা Gravity Forms) ব্যবহার করে একটি কন্টাক্ট ফর্ম তৈরি করে এবং যেকোনো পোস্ট বা পেজে এমবেড করার জন্য একটি শর্টকোড ফিরিয়ে দেয়।
- **`set_featured_image` ability** — একটি বিদ্যমান Media Library attachment ID বা একটি রিমোট URL থেকে একটি পোস্ট বা পেজে ফিচার্ড ইমেজ সেট করে; URL প্রদান করা হলে স্বয়ংক্রিয়ভাবে ছবিটি ইমপোর্ট করে।
- **`batch_create_posts` ability** — একটি একক ability কলের মাধ্যমে একাধিক পোস্ট তৈরি করে। এটি `create_post`-এর মতো প্যারামিটার সমর্থন করে, প্রতিটি পোস্টের সাফল্য/ব্যর্থতা রিপোর্ট করে, এবং একটি ঐচ্ছিক `stop_on_error` মোড রয়েছে।
- **`page_template` parameter** — `create_post` এবং `update_post`-এ যোগ করা হয়েছে। এটি পোস্ট তৈরি বা আপডেট করার সময় একটি PHP পেজ টেমপ্লেট ফাইল (যেমন: `page-full-width.php`) সেট করে। `update_post`-এ একটি খালি স্ট্রিং পাস করলে থিমের ডিফল্টে ফিরে যায়।
- **Client-side screenshot abilities** — `capture_screenshot`, `compare_screenshots`, এবং `review_page_design`। একটি সার্ভার-সাইড headless browser ব্যবহার করে লাইভ পেজের সম্পূর্ণ বা ভিউপোর্ট স্ক্রিনশট ক্যাপচার করে, দুটি স্ক্রিনশট তুলনা করে, এবং লেআউট, টাইপোগ্রাফি, রঙ এবং অ্যাক্সেসিবিলিটি কভার করে একটি AI-জেনারেটেড ডিজাইন রিভিউ পায়।
- **পাঁচটি বিল্ট-ইন এজেন্ট** — Content Writer, Site Builder, Design Studio, Plugin Manager, এবং Support Assistant। প্রতিটি এজেন্টের নিজস্ব টুলস, একটি কাস্টম সিস্টেম প্রম্পট এবং স্টার্টিং সাজেশন রয়েছে। নতুন **Agent Picker** থেকে এটি পরিবর্তন করা যায়, যা চ্যাট হেডার-এ থাকে। [Built-in Agents](../../user-guide/configuration/built-in-agents) দেখুন।
- **Feature flags** — অ্যাক্সেস-কন্ট্রোল টগলস (অ্যাডমিনিস্ট্রেটরদের জন্য সীমাবদ্ধ, নেটওয়ার্ক অ্যাডমিনদের জন্য সীমাবদ্ধ, সাবস্ক্রাইবার অ্যাক্সেস, নন-মেম্বারদের জন্য নিষ্ক্রিয়) এবং ব্র্যান্ডিং অপশনস (ফুটার অ্যাট্রিবিউশন হাইড করুন, কাস্টম এজেন্ট নাম, এজেন্ট পিকার হাইড করুন, চ্যাট অবতার হিসাবে সাইট আইকন ব্যবহার করুন) সহ নতুন **Settings → Feature Flags** ট্যাব। [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) দেখুন।
- **Restore last session** — চ্যাট প্যানেল এখন পেজ লোড হওয়ার সময় এবং উইজেট খোলার সময় স্বয়ংক্রিয়ভাবে সবচেয়ে সাম্প্রতিক কথোপকথনটি পুনরায় লোড করে, যাতে পেজ নেভিগেশনের সময় কনটেক্সট কখনও হারিয়ে না যায়।
- **Plugin action links** — এখন ওয়ার্ডপ্রেসের **Plugins → Installed Plugins** স্ক্রিনে প্লাগইন বিবরণের নিচে সেটিংস এবং Abilities Registry-এর জন্য দ্রুত লিঙ্ক দেখা যায়।

### উন্নত (Improved) {#improved}

- **Image source retry** — ডাউনলোড ব্যর্থ হলে এজেন্ট এখন কনফিগার করা সমস্ত ফ্রি ইমেজ সোর্স পুনরায় চেষ্টা করে, তারপর AI-জেনারেটেড ইমেজে ফিরে যায়।
- **Model info panel** — চ্যাট হেডারে সর্বদা দৃশ্যমান; প্রথম বার্তার পরে আর লুকানো থাকে না।
- **Auto-scroll behaviour** — ব্যবহারকারী পড়ার জন্য স্ক্রল আপ করলে অটো-স্ক্রল বিরতি নেয়; একটি ভাসমান **Scroll to bottom** বাটন দেখা যায় এবং ব্যবহারকারী সর্বশেষ মেসেজে পৌঁছালে স্বয়ংক্রিয়ভাবে অদৃশ্য হয়ে যায়।
- **Agent Picker UI** — এটিকে একটি ফর্ম-টেবিল ওভারলে হিসাবে নতুন করে ডিজাইন করা হয়েছে, যেখানে প্রতিটি এজেন্টের জন্য আইকন রয়েছে, যা এক নজরে এজেন্ট শনাক্ত করা এবং পরিবর্তন করা সহজ করে তোলে।
- **Lazy-loaded JS chunks** — চ্যাট উইজেটটির প্রাথমিক জাভাস্ক্রিপ্ট বান্ডিল এখন ল্যাজি-লোড করা চঙ্কে বিভক্ত করা হয়েছে, যা প্রাথমিক বান্ডিল সাইজকে ৭৫–৯০% কমিয়ে দিয়েছে।
- **Chat widget redesign** — একটি ইউনিফাইড AI আইকন পূর্বের কাস্টম অবতারের স্থান নিয়েছে; এটি বিল্ট-ইন এজেন্ট সিস্টেমের সাথে সামঞ্জস্যপূর্ণ।
- **URL linkification** — সিস্টেম মেসেজ এবং এরর মেসেজ বাবলগুলিতে প্রদর্শিত URL গুলি এখন ক্লিকযোগ্য লিঙ্কে রূপান্তরিত হয়।

### ঠিক করা (Fixed) {#fixed}

- **Ability discoverability** — বর্ণনা, সিস্টেম প্রম্পট রেফারেন্স এবং নেমস্পেস অ্যালাইনমেন্ট সংশোধন করা হয়েছে যাতে সমস্ত ability নির্ভরযোগ্যভাবে এজেন্টের টুল তালিকায় প্রদর্শিত হয়।
- **Providers cache** — মাল্টিসাইট নেটওয়ার্কে স্টেল-প্রোভাইডার সমস্যা এড়াতে এখন প্রোভাইডারগুলিকে একটি ভার্সন কাউন্টারের মাধ্যমে সাইট-ব্যাপী ক্যাশ করা হয়।
- **`ability_invalid_output`** — ১২টি ability হ্যান্ডলারে সমাধান করা হয়েছে; সবগুলি সঠিকভাবে কাঠামোবদ্ধ JSON প্রতিক্রিয়া ফিরিয়ে দেয়।
- **`pending_client_tool_calls` pipeline** — এন্ড-টু-এন্ডভাবে ওয়্যার করা হয়েছে যাতে ক্লায়েন্ট-সাইড টুল কলগুলি সঠিকভাবে সম্পন্ন হয় এবং মডেলকে ফলাফল ফিরিয়ে দেয়।
- **History drawer** — অপরিবর্তনীয় পরিবর্তনগুলি রিভার্ট তালিকা থেকে বাদ দেওয়া হয়েছে; **View full history** লিঙ্কটি এখন সঠিকভাবে কাজ করে।
- **Changes/revert system** — পাঁচটি আলাদা বাগ ঠিক করে নতুন অ্যাডমিন ইন্টারফেসের অধীনে একত্রিত করা হয়েছে।
- **Save Settings toast** — **Save Settings** ক্লিক করার পরে এখন নির্ভরযোগ্যভাবে স্নাকবার নোটিফিকেশন দেখা যায়।
- **Trash context menu** — **Delete Permanently** অপশন যোগ করা হয়েছে যাতে আইটেমগুলি ট্র্যাশ ভিউতে না থেকে হার্ড-ডিলিট করা যায়।
- **Edit & resend** — এডিট আইকনে ক্লিক করলে এখন শুধুমাত্র ক্লিক করা মেসেজটি এডিট মোডে যায়, পুরো থ্রেডের মেসেজগুলি নয়।
- **Chat layout height** — চ্যাট প্যানেলটি তার উচ্চতা পরিবর্তন করে যখন প্লাগইন-ইনজেক্টেড কন্টেন্ট (অ্যাডমিন নোটিশ, ব্যানার) পেজের উপরে আসে, যা ইনপুট এলাকাকে স্ক্রিন থেকে সরে যাওয়া থেকে রক্ষা করে।

---

## 1.4.0 — Released on 2026-04-09 {#140--released-on-2026-04-09}

### নতুন (New) {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI পাইপলাইন এবং মডেল মূল্যায়ন ওয়ার্কফ্লোর জন্য কমান্ড লাইন থেকে Agent Capabilities v1 বেঞ্চমার্ক স্যুট চালায়। এটি প্রতি-প্রশ্ন রান, প্রোভাইডার/মডেল ওভাররাইড এবং JSON/CSV আউটপুট সমর্থন করে।
- **Agent Capabilities v1 benchmark suite** — একটি কাঠামোগত সেট জটিল, বহু-ধাপের প্রম্পট যা সম্পূর্ণ ability সারফেসকে পরীক্ষা করে, যার সাথে স্কোরিং এবং টোকেন/সময়কাল রিপোর্ট করা হয়।
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`। রেজিস্ট্রেশনগুলি অপশনস টেবিলের মাধ্যমে রিস্টার্টের পরেও বজায় থাকে।
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`। ঐচ্ছিক রিরাইট স্ল্যাগ সহ হায়ারারকিক্যাল এবং ফ্ল্যাট ট্যাক্সোনমি সমর্থন করে।
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`। এতে পাঁচটি কিউরেটেড প্রিসেট রয়েছে: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`।
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`। ওয়ার্ডপ্রেস Global Styles API এর মাধ্যমে theme.json মান পড়ে এবং লেখে।
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`। নেস্টেড মেনু এবং থিম লোকেশন অ্যাসাইনমেন্ট সমর্থন করে।
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`। এতে একটি বিল্ট-ইন সেফটি ব্লকলিস্ট রয়েছে যা গুরুত্বপূর্ণ ওয়ার্ডপ্রেস অপশনগুলিকে পরিবর্তন করা থেকে রক্ষা করে।
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`। ওয়ার্ডপ্রেস প্লাগইন হিসাবে বিতরণ করা ability প্যাকগুলি আবিষ্কার এবং সক্রিয় করতে পারে।
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`। প্লাগইন আবিষ্কার, ধাপ আউটপুট রেফারেন্স, অগ্রগতি ট্র্যাকিং এবং স্বায়ত্তশাসিত ত্রুটি পুনরুদ্ধারের সাথে বহু-পর্যায়ের সাইট বিল্ড প্ল্যান।
- **Restaurant website benchmark question** (`q-restaurant-website`) — CPT রেজিস্ট্রেশন, ডিজাইন সিস্টেম, নেভিগেশন এবং প্লাগইন আবিষ্কার কভার করে এন্ড-টু-এন্ড টেস্ট।
- **AI provider connector plugins** দ্রুত লোকাল ডেভেলপমেন্ট সেটআপের জন্য WordPress Playground blueprints-এ যোগ করা হয়েছে।

### উন্নত (Improved) {#improved-1}

- README আপডেট করা হয়েছে AI provider connector ডকুমেন্টেশন এবং সেটআপ নির্দেশাবলী সহ।

### ঠিক করা (Fixed) {#fixed-1}

- `main` ব্রাঞ্চে ২৫টি PHPUnit টেস্ট ব্যর্থতা সমাধান করা হয়েছে।
- `blueprint.json`-এ GitHub releases URL ফরম্যাট সংশোধন করা হয়েছে।
- পুরানো ID-গুলির সাথে সংঘর্ষ এড়াতে টাস্ক ID রিনামারিং করা হয়েছে।

---

## 1.3.x {#13x}

_পূর্ববর্তী রিলিজ নোটগুলি প্লাগইন রিপোজিটরিতে বজায় রাখা হয়েছে।_
