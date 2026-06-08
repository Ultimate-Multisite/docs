---
title: পরিবর্তন তালিকা
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# সালোক বা Changelog

## 1.16.0 — Released on 2026-05-20

### নতুন (New)

- **Generate Logo SVG ability** — Theme Builder এ এতিয়া namespace-safe sanitisation লৈ কাস্টম লোগো SVG জেনারেট কৰিব আৰু embed কৰিব পাৰে।
- **Photo upload in discovery interview** — Theme Builder discovery interview ত এতিয়া অধিক সমৃদ্ধ ডিজাইন প্ৰসংগৰ বাবে ফটো আপলোড কৰাৰ এটা ধাপ যোগ কৰা হৈছে।
- **Validate Palette Contrast ability** — থিমলৈ প্ৰয়োগ কৰাৰ আগতে WCAG compliance বা মানদণ্ড অনুসৰি ৰংৰ জোৰ (colour pairs) পৰীক্ষা কৰিব পাৰি।
- **Hospitality menus** — Theme Builder এ এতিয়া আতিথেয়তা (hospitality) ব্যৱসায়ৰ বাবে গঠনযুক্ত খাদ্য আৰু পানীয় মেনু পৃষ্ঠা জেনারেট কৰিব পাৰে।
- **Desktop and mobile preview rendering** — ডিজাইনৰ দিশ নিৰ্বাচন কৰাৰ সময়ত ডেস্কটপ আৰু মোবাইল দুয়োটা ডিভাইচত আপোনাৰ ডিজাইন প্ৰিভিউ কৰিব পাৰিব।
- **Navigation label parameter** — Create Menu ability এ এতিয়া পৃষ্ঠাৰ শিৰোনামৰ পৰা পৃথক এটা `navigation_label` সমৰ্থন কৰে।
- **Tier 1 tool availability** — sd-ai-agent/site-scrape এতিয়া Theme Builder ত ডিফল্টভাৱে উপলব্ধ এটা Tier 1 tool।

### সংশোধন কৰা (Fixed)

- **AI Client cache** — এতিয়া cross-request persistence বা বিভিন্ন অনুৰোধৰ বাবে ডেটা সংৰক্ষণৰ বাবে transients দ্বাৰা সমৰ্থন কৰা হৈছে, যাৰ ফলত দীঘলীয়া agent কাৰ্য্যৰ সময়ত ডেটা হেৰুওৱা নহ'ব।
- **Plugin row action links** — স্পষ্টতাৰ বাবে সংশোধন কৰা আৰু নাম সলনি কৰা হৈছে।

## 1.10.0 — Released on 2026-05-05

### নতুন (New)

- **Tavily internet search** — Brave Searchৰ লগত অধিক সমৃদ্ধ internet search ফলাফলৰ বাবে Tavily ক এটা search provider হিচাপে যোগ কৰা হৈছে।
- **Theme-aware built-in skills** — Block Themes, Classic Themes, Kadence Blocks, আৰু Kadence Theme skill guide এতিয়া plugin লগত উপলব্ধ।
- **Site builder contact form ability** — চ্যাট interfacetৰ পৰা কোনো পৃষ্ঠাৰ ওপৰত পোনপটীয়াকৈ এটা contact form যোগ কৰিব পাৰি।

### উন্নত (Improved)

- **WooCommerce integration refactored** — এতিয়া উন্নত reliability আৰু compatibilityৰ বাবে native WooCommerce APIs ব্যৱহাৰ কৰে।
- **Provider list refreshes automatically** — যিকোনো plugin activate বা deactivate কৰাৰ সময়ত।

### সংশোধন কৰা (Fixed)

- **navigate-to ability** — কিছুমান admin page ত infinite reload loop সমস্যাটো সমাধান কৰা হৈছে।
- **list-posts ability** — এতিয়া category আৰু tag নামসমূহ সঠিকভাৱে slugs লৈ সমাধান কৰে।
- **WP-CLI commands** — পূৰ্বৰ refactorৰ পিছত হেৰুওৱা namespace aliases পুনৰ স্থাপন কৰা হৈছে।
- **Event automation** — এনে site সমূহক সহজে সামৰি লয় য'ত automation tables এতিয়াও সৃষ্টি হোৱা নাই।
- **memory-save ability** — এতিয়া system instruction builder ত সঠিক namespace prefix ব্যৱহাৰ কৰে।
- **Scalar tool results** — এতিয়া AI লৈ ঘূৰাই দিয়াৰ আগতে সঠিকভাৱে wrap কৰা হয়।
- **Usage statistics** — এতিয়া পুৰণি versionৰ পৰা upgrade কৰাৰ সময়ত legacy ability key format लाई সঠিকভাৱে সামৰি লয়।
