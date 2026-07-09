---
title: পরিবর্তনলগ
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# পরিবর্তনলগ

## 1.18.0 — 2026-06-29 তারিখে প্রকাশিত

### নতুন

- **Google Calendar টুল** — সময়সূচি-সচেতন অটোমেশনের জন্য কনফিগার করা ক্যালেন্ডার ও ইভেন্ট পড়ুন
- **Contact ম্যাপিং এবং attendee সহায়ক** — ক্যালেন্ডার অংশগ্রহণকারীদের site ব্যবহারকারী ও contact-এর সঙ্গে মিলিয়ে নিন
- **মানব অনুমোদন গেট এবং রিমাইন্ডার রেকর্ড** — পর্যালোচনার জন্য অটোমেশন বিরত রাখুন এবং ডুপ্লিকেট নোটিফিকেশন এড়ান
- **TextBee SMS provider** — TextBee-এর মাধ্যমে কনফিগার করা টেক্সট-মেসেজ নোটিফিকেশন পাঠান
- **উন্নত companion package** — trusted-developer ফাইলসিস্টেম, ডাটাবেস, WP-CLI, REST dispatcher, plugin builder, git snapshot, user-management, এবং benchmark টুল যোগ করুন, যা WordPress.org বিল্ড থেকে আলাদাভাবে বিতরণ করা হয়

### উন্নত

- **Managed Superdav service setup** — সমর্থিত site-এর জন্য hosted service endpoint এবং স্বয়ংক্রিয় সংযোগ প্রভিশনিং যোগ করুন
- **রিলিজ প্যাকেজিং** — আলাদা core এবং Advanced ZIP তৈরি করুন, দুটিই GitHub-এ প্রকাশ করুন, এবং WordPress.org-এ শুধু core package পাঠান

### সংশোধিত

- **AI request নির্ভরযোগ্যতা** — model নির্বাচন, request timeout, default setup model, reasoning-text পরিচালনা, এবং অবৈধ tool call-এর জন্য retry guidance উন্নত করুন
- **Calendar এবং reminder hardening** — Google Calendar token এবং reminder deduplication আরও শক্তিশালী করুন
- **Onboarding এবং approval resumes** — frontend onboarding launch এবং confirmed ability resume ঠিক করুন
- **WordPress.org packaging review issues** — core release-এর জন্য packaging review feedback সমাধান করুন

## 1.16.0 — 2026-05-20 তারিখে প্রকাশিত

### নতুন

- **Generate Logo SVG ability** — Theme Builder এখন namespace-safe sanitisation সহ custom logo SVG তৈরি ও embed করতে পারে
- **discovery interview-তে photo upload** — আরও সমৃদ্ধ design context-এর জন্য Theme Builder discovery interview-তে এখন photo upload ধাপ রয়েছে
- **Validate Palette Contrast ability** — theme-এ প্রয়োগের আগে WCAG compliance-এর জন্য color pair পরীক্ষা করুন
- **Hospitality menus** — hospitality ব্যবসার জন্য Theme Builder এখন structured food and beverage menu page তৈরি করতে পারে
- **Desktop এবং mobile preview rendering** — design-direction selection-এর সময় desktop এবং mobile device-এ আপনার design preview করুন
- **Navigation label parameter** — Create Menu ability এখন page title থেকে আলাদা একটি স্বতন্ত্র `navigation_label` সমর্থন করে
- **Tier 1 tool availability** — sd-ai-agent/site-scrape এখন Theme Builder-এ defaultভাবে উপলভ্য একটি Tier 1 tool

### সংশোধিত

- **AI Client cache** — এখন cross-request persistence-এর জন্য transient দ্বারা backed, ফলে long-running agent task-এ data loss রোধ হয়
- **Plugin row action links** — স্পষ্টতার জন্য সংশোধন ও পুনর্নামকরণ করা হয়েছে

## 1.10.0 — 2026-05-05 তারিখে প্রকাশিত

### নতুন

- **Tavily internet search** — Brave Search-এর পাশাপাশি আরও সমৃদ্ধ internet search result-এর জন্য Tavily-কে search provider হিসেবে যোগ করুন
- **Theme-aware built-in skills** — Block Themes, Classic Themes, Kadence Blocks, এবং Kadence Theme skill guide এখন plugin-এর সঙ্গে আসে
- **Site builder contact form ability** — chat interface থেকেই যেকোনো page-এ contact form যোগ করুন

### উন্নত

- **WooCommerce integration refactored** — আরও ভালো নির্ভরযোগ্যতা ও compatibility-এর জন্য এখন native WooCommerce API ব্যবহার করে
- **Provider list refreshes automatically** — কোনো plugin activate বা deactivate হলে

### সংশোধিত

- **navigate-to ability** — কিছু admin page-এ infinite reload loop ঠিক করা হয়েছে
- **list-posts ability** — এখন category এবং tag name সঠিকভাবে slug-এ resolve করে
- **WP-CLI commands** — আগের refactor-এর পর অনুপস্থিত namespace alias পুনরুদ্ধার করা হয়েছে
- **Event automation** — automation table এখনো তৈরি হয়নি এমন site সুন্দরভাবে handle করে
- **memory-save ability** — এখন system instruction builder-এ সঠিক namespace prefix ব্যবহার করে
- **Scalar tool results** — AI-তে ফেরত পাঠানোর আগে এখন সঠিকভাবে wrapped হয়
- **Usage statistics** — পুরোনো version থেকে upgrade করার সময় legacy ability key format এখন সঠিকভাবে handle করে
