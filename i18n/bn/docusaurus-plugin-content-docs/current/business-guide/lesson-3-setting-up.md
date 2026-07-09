---
title: 'পাঠ ৩: আপনার নেটওয়ার্ক সেটআপ করা'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lesson 3: আপনার নেটওয়ার্ক সেটআপ করা {#lesson-3-setting-up-your-network}

এবার তৈরির পালা। এই লিসনে আপনি Ultimate Multisite ইনস্টল করবেন এবং FitSite নেটওয়ার্কের ভিত্তি তৈরি করবেন। এখানে নেওয়া প্রতিটি সিদ্ধান্তই ফিটনেস নিশের কথা মাথায় রেখে নেওয়া হয়েছে।

## আমরা কোথায় ছিলাম {#where-we-left-off}

আমরা ফিটনেস স্টুডিওকে আমাদের নিশ হিসেবে বেছে নিয়েছি এবং সুযোগটি যাচাই করেছি। এখন আমরা সেই ধারণাটিকে একটি কার্যকরী প্ল্যাটফর্মে রূপ দেব।

## হোস্টিং নির্বাচন করা {#choosing-your-hosting}

একটি একক ওয়েবসাইটের চেয়ে একটি বিশেষায়িত প্ল্যাটফর্মের জন্য আপনার হোস্টিং নির্বাচন করা আরও গুরুত্বপূর্ণ। আপনি শুধু একটি সাইট হোস্ট করছেন না—আপনি একটি নেটওয়ার্ক হোস্ট করছেন যা কয়েক ডজন বা শত শত সাইটে বাড়বে।

### কী দেখবেন {#what-to-look-for}

- **WordPress Multisite সাপোর্ট**: সব হোস্টিং প্রোভাইডার Multisite ভালোভাবে সামলায় না।
- **Wildcard SSL**: সাবডোমেইন-ভিত্তিক নেটওয়ার্কের জন্য এটি অপরিহার্য।
- **স্কেলেবল রিসোর্স**: আপনার বৃদ্ধির জন্য যথেষ্ট জায়গা থাকা দরকার, যাতে মাইগ্রেট করতে না হয়।
- **Ultimate Multisite ইন্টিগ্রেশন**: স্বয়ংক্রিয় ডোমেইন ম্যাপিং এবং SSL অপারেশনাল প্রচেষ্টা অনেক কমিয়ে দেয়।

### প্রস্তাবিত পদ্ধতি {#recommended-approach}

[Compatible Providers](/user-guide/host-integrations/closte) তালিকা থেকে একটি হোস্টিং প্রোভাইডার বেছে নিন। এগুলি Ultimate Multisite দিয়ে পরীক্ষা করা হয়েছে এবং ডোমেইন ম্যাপিং ও SSL অটোমেশনের জন্য আপনার প্রয়োজনীয় ইন্টিগ্রেশন সরবরাহ করে।

FitSite-এর জন্য, আমরা একটি সাবডোমেইন কনফিগারেশন ব্যবহার করব। এর মানে হলো, গ্রাহকদের সাইটগুলি প্রাথমিকভাবে `studioname.fitsite.com` হিসাবে দেখাবে, এরপর তারা ঐচ্ছিকভাবে তাদের নিজস্ব ডোমেইন ম্যাপ করতে পারবে।

## WordPress Multisite ইনস্টল করা {#installing-wordpress-multisite}

যদি আপনার কাছে ইতিমধ্যেই WordPress Multisite ইনস্টলেশন না থাকে:

১. আপনার হোস্টিং প্রোভাইডারে WordPress ইনস্টল করুন।
২. [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) গাইডটি অনুসরণ করুন।
৩. যখন জিজ্ঞাসা করা হবে, তখন **subdomain** কনফিগারেশন বেছে নিন।

:::tip কেন সাবডোমেইন?
সাবডোমেইন প্রতিটি গ্রাহক সাইটকে তার নিজস্ব স্বতন্ত্র ঠিকানা (`studio.fitsite.com`) দেয়, কোনো পাথ (`fitsite.com/studio`) নয়। এটি আপনার গ্রাহকদের জন্য আরও পেশাদার এবং পার্মালিঙ্ক কনফ্লিক্ট এড়াতে সাহায্য করে। বিস্তারিত তুলনার জন্য [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) দেখুন।
:::

## Ultimate Multisite ইনস্টল করা {#installing-ultimate-multisite}

নিম্নলিখিত কাজগুলি করার জন্য [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) গাইডটি অনুসরণ করুন:

১. প্লাগইনটি নেটওয়ার্ক-ব্যাপী আপলোড এবং অ্যাক্টিভেট করুন।
২. [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) চালান।

সেটআপ উইজার্ড চলাকালীন, FitSite নিশের কথা মনে রাখবেন:

- **Currency**: আপনার ফিটনেস স্টুডিও গ্রাহকরা কোন মুদ্রা ব্যবহার করে, তা সেট করুন।
- **Company name**: "FitSite" (বা আপনার নির্বাচিত ব্র্যান্ড নাম)।
- **Company logo**: আপনার ব্র্যান্ড লোগো আপলোড করুন — এটি ইনভয়েস এবং ইমেইলে দেখা যাবে।

## ফিটনেস নিশের জন্য কনফিগার করা {#configuring-for-the-fitness-niche}

Ultimate Multisite ইনস্টল করার পরে, এই নিশ-নির্দিষ্ট কনফিগারেশনগুলি করুন:

### সাধারণ সেটিংস (General Settings) {#general-settings}

**Ultimate Multisite > Settings** এ যান এবং কনফিগার করুন:

- **Site name**: FitSite
- **Default role**: Administrator — ফিটনেস স্টুডিও মালিকদের তাদের সাইট কন্টেন্টের উপর পূর্ণ নিয়ন্ত্রণ থাকা দরকার।
- **Registration**: ব্যবহারকারী রেজিস্ট্রেশন সক্ষম করুন যাতে স্টুডিও মালিকরা নিজেরাই সাইন আপ করতে পারে।

### ইমেল কনফিগারেশন (Email Configuration) {#email-configuration}

আপনার সিস্টেম ইমেলগুলি আপনার নিশের ভাষা ব্যবহার করা উচিত। **Ultimate Multisite > Settings > Emails** এ যান এবং কাস্টমাইজ করুন:

- সাধারণ "your new site" ভাষাটিকে ফিটনেস-নির্দিষ্ট মেসেজিং দিয়ে প্রতিস্থাপন করুন।
- উদাহরণ স্বাগত বিষয়: "আপনার ফিটনেস স্টুডিও ওয়েবসাইট প্রস্তুত"
- উদাহরণ স্বাগত বডি: তাদের স্টুডিও, ক্লাস এবং তাদের ফিটনেস সাইট দিয়ে শুরু করার উল্লেখ করুন।

আমরা লিসন 8 (Customer Onboarding)-এ এগুলো আরও পরিমার্জন করব, তবে এখন টোন সেট করে রাখলে প্রাথমিক টেস্ট সাইনআপগুলিও নিশ-নির্দিষ্ট মনে হবে।

### ডোমেইন কনফিগারেশন (Domain Configuration) {#domain-configuration}

যদি আপনি একটি সামঞ্জস্যপূর্ণ হোস্টিং প্রোভাইডার ব্যবহার করেন, তবে এখন ডোমেইন ম্যাপিং কনফিগার করুন:

১. **Ultimate Multisite > Settings > Domain Mapping** এ যান।
২. আপনার নির্দিষ্ট হোস্টের জন্য ইন্টিগ্রেশন গাইডটি অনুসরণ করুন।
৩. পরীক্ষা করুন যে নতুন সাবসাইটগুলি স্বয়ংক্রিয়ভাবে SSL পাচ্ছে কি না।

এটি নিশ্চিত করে যে পরবর্তী লিসনে আমরা যখন টেমপ্লেট এবং টেস্ট সাইট তৈরি করা শুরু করব, তখন সবকিছু এন্ড-টু-এন্ড কাজ করবে।

## এখন পর্যন্ত FitSite নেটওয়ার্ক {#the-fitsite-network-so-far}

এই লিসনের শেষে, আপনার কাছে যা আছে তা হলো:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## এই লিসনে আমরা যা তৈরি করেছি {#what-we-built-this-lesson}

- **একটি কার্যকরী WordPress Multisite** ইনস্টলেশন সাবডোমেইন মোডে।
- **Ultimate Multisite ইনস্টল** এবং FitSite ব্র্যান্ডিং দিয়ে কনফিগার করা।
- **একটি ক্রমবর্ধমান নেটওয়ার্কের জন্য হোস্টিং এবং SSL** সেটআপ করা।
- আপনার হোস্টিং প্রোভাইডারের জন্য **ডোমেইন ম্যাপিং** কনফিগার করা।
- প্রথম দিন থেকেই **নিশ-নির্দিষ্ট ইমেল টোন** প্রতিষ্ঠা করা।

---

**পরবর্তী:** [Lesson 4: Building Niche Templates](lesson-4-templates) — আমরা সাইট টেমপ্লেট তৈরি করব যা ফিটনেস স্টুডিও মালিকরা সত্যিই ব্যবহার করতে চাইবে।
