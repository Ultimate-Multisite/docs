---
title: 'পাঠ ৩: আপোনাৰ নেটৱৰ্ক স্থাপন কৰা'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# পাঠ ৩: আপোনাৰ নেটৱৰ্ক স্থাপন কৰা

বনাওঁৰ সময়। এই পাঠত আপুনি Ultimate Multisite ইনষ্টল কৰিব আৰু FitSite নেটৱৰ্কৰ ভেটি স্থাপন কৰিব। ইয়াত লোৱা প্ৰতিটো সিদ্ধান্ত ফিটনেছ (fitness) ক্ষেত্ৰখনৰ কথা মনত ৰাখি লোৱা হৈছে।

## আমি ক'ত থমকিছিলো {#where-we-left-off}

আমি ফিটনেছ ষ্টুডিঅ'ক আমাৰ বিশেষ ক্ষেত্ৰ (niche) হিচাপে বাছি লৈ সুযোগটো প্ৰমাণ কৰিছিলো। এতিয়া আমি সেই ধাৰণাটো এটা কাৰ্য্যক্ষম Platfromত ৰূপান্তৰ কৰিম।

## আপোনাৰ হোষ্টিং বাছনি {#choosing-your-hosting}

এটা বিশেষ ক্ষেত্ৰৰ Platfromৰ বাবে আপোনাৰ হোষ্টিং বাছনি এটা একক ওয়েবসাইটৰ বাবে কৰাৰ দৰে গুৰুত্বপূৰ্ণ নহয়। আপুনি কেৱল এটা сайт হোষ্ট নকৰিব — আপুনি এটা নেটৱৰ্ক হোষ্ট কৰি আছে যিটো দুৰ্গণ বা শতিকাজাকৈ অধিক সাইটলৈ ডাঙৰ হ'ব।

### কি বিচাৰিব লাগে {#what-to-look-for}

- **WordPress Multisite সমৰ্থন**: সকলো হোষ্টৰক Multisite ভালদৰে সামৰিব নোৱাৰে।
- **Wildcard SSL**: সাবডোমেইন-ভিত্তিক নেটৱৰ্কৰ বাবে অতি জৰুৰী।
- **স্কেল কৰিব পৰা সম্পদ (Scalable resources)**: আপোনাৰ ডাঙৰ হ'বলৈ যথেষ্ট ঠাই লাগে, কোনো স্থানান্তৰ (migrating) নকৰাকৈ।
- **Ultimate Multisite ইন্টিগ্ৰেচন**: স্বয়ংক্রিয় ডোমেইন ম্যাপিং আৰু SSL-এ যথেষ্ট কাৰ্য্যগত প্ৰচেষ্টা কম কৰে।

### পৰামৰ্শ দিয়া পদ্ধতি {#recommended-approach}

[Compatible Providers](/user-guide/host-integrations/closte) তালিকাৰ পৰা এটা হোষ্ট বাছক। এইবোৰক Ultimate Multisite লৈ পৰীক্ষা কৰা হৈছে আৰু ডোমেইন ম্যাপিং আৰু SSL স্বয়ংক্রিয়তাৰ বাবে আপোনাক প্ৰয়োজনীয় ইন্টিগ্ৰেচন প্ৰদান কৰে।

FitSite-ৰ বাবে, আমি এটা সাবডোমেইন কনফিগাৰেচন ব্যৱহাৰ কৰিম। ইয়াৰ অৰ্থ হ'ল যে গ্ৰাহকৰ সাইটবোৰ सुरुত `studioname.fitsite.com` হিচাপে দেখুৱাব, তাৰ পাছত তেওঁলোকে ঐচ্ছিকভাৱে নিজৰ ডোমেইন ম্যাপিং কৰিব পাৰিব।

## WordPress Multisite ইনষ্টল কৰা {#installing-wordpress-multisite}

যদি আপোনাৰ ইতিমধ্যে WordPress Multisite ইনষ্টলেচন নাই:

১. আপোনাৰ হোষ্টিং প্ৰোভাইডাৰত WordPress ইনষ্টল কৰক।
২. [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) গাইড অনুসৰণ কৰক।
৩. কোৱা হ'লে **subdomain** কনফিগাৰেচন বাছি লওক।

:::tip কিয় Subdomains?
Subdomains এ প্ৰতিজন গ্ৰাহকৰ সাইটক এটা পৃথক ঠিকনা (`studio.fitsite.com`) দিয়ে, কোনো পথ (path) (`fitsite.com/studio`) নহয়। ই আপোনাৰ গ্ৰাহকসকলৰ বাবে অধিক পেছাদাৰী আৰু ই permalink সংঘাত (conflicts) এৰাত সহায় কৰে। অধিক বিৱৰণৰ তুলনালৈ [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) চাওক।
:::

## Ultimate Multisite ইনষ্টল কৰা {#installing-ultimate-multisite}

নিম্নলিখিত গাইড অনুসৰণ কৰি: [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite)

১. প্লাগইনটো নেটৱৰ্ক-ব্যাপী আপলোড আৰু অ্যাক্টিভেট কৰক।
২. [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) চলোৱক।

Setup wizard চলাকালীন, FitSite বিশেষ ক্ষেত্ৰখন মনত ৰাখক:

- **Currency**: আপোনাৰ ফিটনেছ ষ্টুডিঅ' গ্ৰাহকসকলে ব্যৱহাৰ কৰা মুদ্রাটো সেট কৰক।
- **Company name**: "FitSite" (বা আপুনি বাছনি কৰা ব্ৰেণ্ড নাম)।
- **Company logo**: আপোনাৰ ব্ৰেণ্ড লোগো আপলোড কৰক — ই ইনভויচে আৰু ইমেইলত দেখুৱাব।

## ফিটনেছ বিশেষ ক্ষেত্ৰৰ বাবে কনফিগাৰ কৰা {#configuring-for-the-fitness-niche}

Ultimate Multisite ইনষ্টল কৰাৰ লগে লগে, এই বিশেষ ক্ষেত্ৰৰ বাবে কিছুমান কনফিগাৰেশ্যন বাছি লওক:

### সাধাৰণ সেটিংছ (General Settings) {#general-settings}

**Ultimate Multisite > Settings** লৈ যোৱা আৰু কনফিগাৰ কৰক:

- **Site name**: FitSite
- **Default role**: Administrator — ফিটনেছ ষ্টুডিঅ' মালিকসকলক তেওঁলোকৰ সাইটৰ বিষয়বস্তুৰ ওপৰত সম্পূৰ্ণ নিয়ন্ত্ৰণৰ প্ৰয়োজন।
- **Registration**: ব্যৱহাৰকাৰী পঞ্জী (user registration) সক্ষম কৰক যাতে ষ্টুডিঅ' মালিকসকলে নিজে পঞ্জী কৰিব পাৰে।

### ইমেইল কনফিগাৰেচন (Email Configuration) {#email-configuration}

আপোনাৰ ছিষ্টেম ইমেইলবোৰে আপোনাৰ বিশেষ ক্ষেত্ৰখনৰ ভাষা কথা ক'ব লাগে। **Ultimate Multisite > Settings > Emails** লৈ যোৱা আৰু কাস্টমাইজ কৰক:

- সাধাৰণ "your new site" ভাষাৰ সলনি ফিটনেছ-ভিত্তিক বাৰ্তা প্ৰেৰণ কৰক।
- উদাহৰণ স্বাগতম বিষয় (subject): "আপোনাৰ ফিটনেছ ষ্টুডিঅ' ওয়েবসাইট সাজু হৈছে"
- উদাহৰণ স্বাগতম বডি: তেওঁলোকৰ ষ্টুডিঅ', ক্লাছ আৰু তেওঁলোকৰ ফিটনেছ সাইটৰে আৰম্ভ কৰাৰ বিষয়ে উল্লেখ কৰক।

আমি এইবোৰ পাঠ ৮ (Customer Onboarding) ত আৰু উন্নত কৰিম, কিন্তু এতিয়া টোনটো সেট কৰিলে প্ৰাৰম্ভিক পৰীক্ষাৰ বাবে পঞ্জী কৰা লোকসকলেও বিশেষ ক্ষেত্ৰৰ অনুভৱ কৰিব।

### ডোমেইন কনফিগাৰেচন (Domain Configuration) {#domain-configuration}

যদি আপুনি এটা সামঞ্জস্যপূৰ্ণ হোষ্টিং প্ৰোভাইডাৰ ব্যৱহাৰ কৰে, তেন্তে এতিয়াই ডোমেইন ম্যাপিং কনফিগাৰ কৰক:

১. **Ultimate Multisite > Settings > Domain Mapping** লৈ যোৱা।
২. আপোনাৰ নিৰ্দিষ্ট হোষ্টৰ বাবে ইন্টিগ্ৰেচন গাইড অনুসৰণ কৰক।
৩. পৰীক্ষা কৰক যে নতুন সাবসাইটবোৰ স্বয়ংক্রিয়ভাৱে SSL পায় নে।

এনে কৰিলে নিশ্চিত হয় যে আমি পৰৱৰ্তী পাঠত টেমপ্লেট আৰু পৰীক্ষাৰ সাইট বনাওঁৰ সময়ত, সকলোৱে আৰম্ভৰ পৰা শেষলৈকে কাৰ্য্য কৰে।

## FitSite নেটৱৰ্ক এতিয়ালৈকে {#the-fitsite-network-so-far}

এই পাঠটোৰ শেষত, আপোনাৰ কি আছে:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## এই পাঠত আমি কি বনাওঁ {#what-we-built-this-lesson}

- **এটা কাৰ্য্যক্ষম WordPress Multisite** ইনষ্টলেচন সাবডোমেইন মোডত।
- **Ultimate Multisite ইনষ্টল** আৰু FitSite ব্ৰেণ্ডিংৰে কনফিগাৰ কৰা।
- **এটা ডাঙৰ নেটৱৰ্কৰ বাবে হোষ্টিং আৰু SSL** সেট কৰা।
- আপোনাৰ হোষ্টিং প্ৰোভাইডাৰৰ বাবে **ডোমেইন ম্যাপিং** কনফিগাৰ কৰা।
- দিনৰ পৰা বিশেষ ক্ষেত্ৰ-ভিত্তিক ইমেইল টোন স্থাপন কৰা।

---

**পৰৱৰ্তী:** [Lesson 4: Building Niche Templates](lesson-4-templates) — আমি এনে কিছুমান সাইট টেমপ্লেট বনাওঁ যিবোৰ ফিটনেছ ষ্টুডিঅ' মালিকসকলে ব্যৱহাৰ কৰিব বিচাৰিব।
