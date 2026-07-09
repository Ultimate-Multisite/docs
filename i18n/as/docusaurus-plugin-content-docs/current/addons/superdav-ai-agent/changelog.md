---
title: সলনি-পঞ্জী
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# পৰিবৰ্তন-সূচী

## 1.18.0 — 2026-06-29-ত মুকলি কৰা হৈছে

### নতুন

- **Google Calendar সঁজুলি** — সময়সূচী-সচেতন স্বয়ংক্ৰিয়কৰণৰ বাবে কনফিগাৰ কৰা কেলেণ্ডাৰ আৰু ইভেণ্ট পঢ়ক
- **যোগাযোগ মেপিং আৰু উপস্থিতিৰ সহায়ক** — কেলেণ্ডাৰ অংশগ্ৰহণকাৰীক ছাইট ব্যৱহাৰকাৰী আৰু যোগাযোগৰ সৈতে মিলাওক
- **মানৱ অনুমোদন গেট আৰু সোঁৱৰাই দিয়া ৰেকৰ্ড** — পৰ্যালোচনাৰ বাবে স্বয়ংক্ৰিয়কৰণ থমকাওক আৰু দ্বৈত জাননী এৰাই চলক
- **TextBee SMS প্ৰদানকাৰী** — TextBee-ৰ জৰিয়তে কনফিগাৰ কৰা টেক্সট-মেছেজ জাননী পঠিয়াওক
- **উন্নত সহযোগী পেকেজ** — WordPress.org বিল্ডৰ পৰা পৃথকে বিতৰণ কৰা বিশ্বাসযোগ্য-বিকাশকাৰী ফাইলচিষ্টেম, ডাটাবেছ, WP-CLI, REST ডিস্পেচাৰ, plugin নিৰ্মাতা, git স্নেপশ্বট, ব্যৱহাৰকাৰী-ব্যৱস্থাপনা, আৰু বেঞ্চমাৰ্ক সঁজুলি যোগ কৰক

### উন্নত

- **Managed Superdav সেৱা ছেটআপ** — সমৰ্থিত ছাইটসমূহৰ বাবে hosted সেৱা endpoint আৰু স্বয়ংক্ৰিয় সংযোগ provision যোগ কৰক
- **মুক্তি পেকেজিং** — পৃথক core আৰু Advanced ZIP নিৰ্মাণ কৰক, দুয়োটা GitHub-ত প্ৰকাশ কৰক, আৰু কেৱল core পেকেজটো WordPress.org-লৈ পঠিয়াওক

### ঠিক কৰা হৈছে

- **AI অনুৰোধৰ নিৰ্ভৰযোগ্যতা** — model বাছনি, অনুৰোধ timeout, ডিফল্ট setup model, reasoning-text handling, আৰু অবৈধ tool call-ৰ বাবে retry guidance উন্নত কৰক
- **কেলেণ্ডাৰ আৰু সোঁৱৰণি শক্তিশালীকৰণ** — Google Calendar token আৰু সোঁৱৰণিৰ deduplication শক্তিশালী কৰক
- **Onboarding আৰু অনুমোদন resume** — frontend onboarding launch আৰু নিশ্চিত কৰা ability resume ঠিক কৰক
- **WordPress.org পেকেজিং পৰ্যালোচনাৰ সমস্যা** — core release-ৰ বাবে পেকেজিং পৰ্যালোচনাৰ feedback সমাধান কৰক

## 1.16.0 — 2026-05-20-ত মুকলি কৰা হৈছে

### নতুন

- **Logo SVG সৃষ্টি কৰাৰ ক্ষমতা** — Theme Builder-এ এতিয়া namespace-safe sanitisation-ৰ সৈতে কাষ্টম logo SVG সৃষ্টি আৰু embed কৰিব পাৰে
- **discovery interview-ত ফটো upload** — Theme Builder discovery interview-ত এতিয়া অধিক সমৃদ্ধ design context-ৰ বাবে এটা ফটো upload ধাপ অন্তৰ্ভুক্ত
- **Palette Contrast validate কৰাৰ ক্ষমতা** — theme-ত প্ৰয়োগ কৰাৰ আগতে WCAG compliance-ৰ বাবে ৰঙৰ জোৰা পৰীক্ষা কৰক
- **আতিথ্য মেনু** — Theme Builder-এ এতিয়া আতিথ্য ব্যৱসায়ৰ বাবে গঠনবদ্ধ খাদ্য আৰু পানীয় মেনু পৃষ্ঠা সৃষ্টি কৰিব পাৰে
- **Desktop আৰু mobile preview rendering** — design-direction বাছনিৰ সময়ত desktop আৰু mobile device-ত আপোনাৰ design preview কৰক
- **Navigation label parameter** — Create Menu ক্ষমতাই এতিয়া পৃষ্ঠা title-ৰ পৰা পৃথক `navigation_label` সমৰ্থন কৰে
- **Tier 1 tool availability** — sd-ai-agent/site-scrape এতিয়া Theme Builder-ত ডিফল্টভাৱে উপলব্ধ এটা Tier 1 tool

### ঠিক কৰা হৈছে

- **AI Client cache** — এতিয়া cross-request persistence-ৰ বাবে transient-ৰ দ্বাৰা backed, যাৰ ফলত দীঘলীয়া agent task-ত data loss ৰোধ হয়
- **Plugin row action link** — স্পষ্টতাৰ বাবে সংশোধন আৰু পুনৰনামকৰণ কৰা হৈছে

## 1.10.0 — 2026-05-05-ত মুকলি কৰা হৈছে

### নতুন

- **Tavily internet search** — Brave Search-ৰ সৈতে অধিক সমৃদ্ধ internet search ফলাফলৰ বাবে Tavily-ক search provider হিচাপে যোগ কৰক
- **Theme-aware built-in skill** — Block Theme, Classic Theme, Kadence Blocks, আৰু Kadence Theme skill guide এতিয়া plugin-ৰ সৈতে আহে
- **ছাইট builder contact form ক্ষমতা** — chat interface-ৰ পৰা পোনপটীয়াকৈ যিকোনো পৃষ্ঠাত contact form যোগ কৰক

### উন্নত

- **WooCommerce integration refactored** — এতিয়া অধিক ভাল নিৰ্ভৰযোগ্যতা আৰু compatibility-ৰ বাবে native WooCommerce API ব্যৱহাৰ কৰে
- **Provider list স্বয়ংক্ৰিয়ভাৱে refresh হয়** — যেতিয়া যিকোনো plugin activate বা deactivate কৰা হয়

### ঠিক কৰা হৈছে

- **navigate-to ক্ষমতা** — কিছুমান admin page-ত অসীম reload loop ঠিক কৰা হৈছে
- **list-posts ক্ষমতা** — এতিয়া category আৰু tag নামসমূহ সঠিকভাৱে slug-লৈ resolve কৰে
- **WP-CLI command** — আগৰ refactor-ৰ পিছত নোহোৱা namespace alias পুনঃস্থাপন কৰা হৈছে
- **Event automation** — automation table এতিয়াও সৃষ্টি নোহোৱা ছাইটসমূহ gracefully handle কৰে
- **memory-save ক্ষমতা** — এতিয়া system instruction builder-ত সঠিক namespace prefix ব্যৱহাৰ কৰে
- **Scalar tool result** — এতিয়া AI-লৈ ঘূৰাই দিয়াৰ আগতে সঠিকভাৱে wrapped কৰা হয়
- **Usage statistics** — এতিয়া পুৰণি version-ৰ পৰা upgrade কৰাৰ সময়ত legacy ability key format সঠিকভাৱে handle কৰে
