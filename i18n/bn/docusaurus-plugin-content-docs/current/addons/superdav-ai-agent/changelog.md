---
title: পরিবর্তন লগ
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Changelog

## 1.16.0 — Released on 2026-05-20

### New

- **Generate Logo SVG ability** — Theme Builder এখন নেমস্পেস-সেফ স্যানিটাইজেশন সহ কাস্টম লোগো SVG তৈরি এবং এমবেড করতে পারে।
- **Photo upload in discovery interview** — Theme Builder discovery interview-এ এখন আরও সমৃদ্ধ ডিজাইন কনটেক্সটের জন্য একটি ফটো আপলোড ধাপ যুক্ত করা হয়েছে।
- **Validate Palette Contrast ability** — থিমে প্রয়োগ করার আগে WCAG সম্মতি যাচাই করার জন্য কালার পেয়ার চেক করা যায়।
- **Hospitality menus** — Theme Builder এখন হসপিটালিটি ব্যবসার জন্য কাঠামোগত ফুড এবং বেভারেজ মেনু পেজ তৈরি করতে পারে।
- **Desktop and mobile preview rendering** — ডিজাইন-ডিরেকশন নির্বাচনের সময় আপনি ডেস্কটপ এবং মোবাইল ডিভাইসে আপনার ডিজাইন প্রিভিউ করতে পারবেন।
- **Navigation label parameter** — Create Menu ability এখন পেজের টাইটেল থেকে আলাদা একটি স্বতন্ত্র `navigation_label` সমর্থন করে।
- **Tier 1 tool availability** — sd-ai-agent/site-scrape এখন Theme Builder-এ ডিফল্টভাবে উপলব্ধ একটি Tier 1 টুল।

### Fixed

- **AI Client cache** — এখন ক্রস-রিকোয়েস্ট পারসিসটেন্সের জন্য ট্রানজিয়েন্ট (transients) দ্বারা সমর্থিত, যা দীর্ঘ সময় ধরে চলা agent টাস্কে ডেটা লস হওয়া থেকে রক্ষা করে।
- **Plugin row action links** — স্পষ্টতার জন্য সংশোধন এবং নাম পরিবর্তন করা হয়েছে।

## 1.10.0 — Released on 2026-05-05

### New

- **Tavily internet search** — Brave Search এর পাশাপাশি আরও সমৃদ্ধ ইন্টারনেট সার্চ ফলাফলের জন্য Tavily কে একটি সার্চ প্রোভাইডার হিসেবে যুক্ত করা হয়েছে।
- **Theme-aware built-in skills** — Block Themes, Classic Themes, Kadence Blocks, এবং Kadence Theme skill guides এখন প্লাগইনটির সাথে আসে।
- **Site builder contact form ability** — চ্যাট ইন্টারফেস থেকে সরাসরি যেকোনো পেজে একটি কন্টাক্ট ফর্ম যুক্ত করা যায়।

### Improved

- **WooCommerce integration refactored** — এখন আরও ভালো নির্ভরযোগ্যতা এবং সামঞ্জস্যতার জন্য নেটিভ WooCommerce API ব্যবহার করে।
- **Provider list refreshes automatically** — যখন কোনো প্লাগইন সক্রিয় বা নিষ্ক্রিয় করা হয়।

### Fixed

- **navigate-to ability** — কিছু অ্যাডমিন পেজে ইনফিনিট রিলোড লুপ ঠিক করা হয়েছে।
- **list-posts ability** — এখন ক্যাটাগরি এবং ট্যাগ নামগুলিকে সঠিকভাবে স্লাগে (slugs) সমাধান করে।
- **WP-CLI commands** — পূর্ববর্তী রিফ্যাক্টরিং-এর পরে অনুপস্থিত নেমস্পেস Alias গুলো পুনরুদ্ধার করা হয়েছে।
- **Event automation** — যেসব সাইটে অটোমেশন টেবিল এখনও তৈরি হয়নি, সেগুলোকে সুন্দরভাবে সামলানো হয়।
- **memory-save ability** — এখন সিস্টেম ইন্সট্রাকশন বিল্ডারে সঠিক নেমস্পেস প্রিফিক্স ব্যবহার করে।
- **Scalar tool results** — এখন AI-এর কাছে ফেরত দেওয়ার আগে সঠিকভাবে র‍্যাপ করা হয়।
- **Usage statistics** — এখন পুরোনো সংস্করণ থেকে আপগ্রেড করার সময় লেগ্যাসি ability key ফরম্যাটকে সঠিকভাবে পরিচালনা করে।
