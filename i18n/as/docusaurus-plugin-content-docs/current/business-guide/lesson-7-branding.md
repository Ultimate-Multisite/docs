---
title: 'পাঠ ৭: ইয়াক আপোনাৰ কৰি তোলা'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# পাঠ ৭: ইয়াক আপোনাৰ কৰি তোলা {#lesson-7-making-it-yours}

আপোনাৰ গ্ৰাহকসকলে কেতিয়াও এনে অনুভৱ কৰিব নালাগে যে তেওঁলোকে "এটা WordPress plugin" ব্যৱহাৰ কৰি আছে। তেওঁলোকে অনুভৱ কৰিব লাগে যে তেওঁলোকে FitSite ব্যৱহাৰ কৰি আছে — যি তেওঁলোকৰ উদ্যোগৰ বাবে নিৰ্মাণ কৰা এটা Platfrom। এই পাঠটোৱে ব্ৰেণ্ডিং (branding), হোৱাইট-লেবেলিং (white-labeling), আৰু Platfromটোক এটা সামগ্ৰী (product) হিচাপে অনুভৱ কৰাই কৰাৰ বিষয়ে আলোচনা কৰে।

## আমি ক'ত থমকিছিলো {#where-we-left-off}

FitSite-এ এটা কাৰ্য্যক্ষম checkout flow আছে, যিয়ে ফিটনেস ষ্টুডিঅ'ৰ মালিকসকলক প্লেন বাছনি কৰাৰ পৰা এটা সক্ৰিয় স্থান (live site) লৈ লৈ যায়। এতিয়া আমি সমগ্ৰ অভিজ্ঞতাটোক এটা এক-সanga, ব্ৰেণ্ড কৰা সামগ্ৰীৰ দৰে কৰি তুলিম।

## আপোনাৰ Platfrom Domain {#your-platform-domain}

আপোনাৰ ব্ৰেণ্ডৰ ভেটি হৈছে আপোনাৰ Domain। FitSite-ৰ বাবে:

- **Main domain**: `fitsite.com` (আপোনাৰ marketing site আৰু network root)
- **Customer sites**: `studioname.fitsite.com` (subdomains)
- **Custom domains**: Growth আৰু Pro plan-ৰ গ্ৰাহকসকলে তেওঁলোকৰ নিজৰ Domain ম্যাপ কৰিব পাৰে।

### Domain সেটআপ কৰা {#setting-up-your-domain}

১. আপোনাৰ Platfrom domain ৰেকৰ্ড কৰক
২. ইয়াক আপোনাৰ হোষ্টিং প্ৰোভাইডাৰলৈ নিৰ্দেশ কৰক
৩. গ্ৰাহক subdomains-ৰ বাবে wildcard DNS (`*.fitsite.com`) কনফিগাৰ কৰক
৪. wildcard SSL সক্ৰিয় কৰি থকা নিশ্চিত কৰক

বিস্তারিত নিৰ্দেশনাৰ বাবে [How to Configure Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) চাওক।

## Admin Experience-ক White-Labeling কৰা {#white-labeling-the-admin-experience}

এজন ফিটনেস ষ্টুডিঅ'ৰ মালিকজনে তেওঁলোকৰ site dashboard ত লগইন কৰিলে, তেওঁলোকে WordPress বা Ultimate Multisite-ৰ ব্ৰেণ্ডিং নহয়, আপোনাৰ ব্ৰেণ্ডটো দেখা উচিত।

### Custom Login Page {#custom-login-page}

WordPress login page-ক কাস্টমাইজ কৰক যাতে ইয়াত দেখা যায়:

- আপোনাৰ FitSite logo
- ফিটনেস-উপযুক্ত background imagery
- আপোনাৰ ব্ৰেণ্ডৰ ৰংসমূহ

### Dashboard Branding {#dashboard-branding}

[Admin Page Creator](/addons/admin-page-creator) addon ব্যৱহাৰ কৰক বা custom CSS ব্যৱহাৰ কৰি:

- WordPress logo-ক আপোনাৰ FitSite logoৰে সলনি কৰক
- আপোনাৰ ব্ৰেণ্ডৰ সৈতে মিলিবলৈ admin color scheme ক কাস্টমাইজ কৰক
- ফিটনেস-সম্পৰ্কীয় quick links আৰু help resources সহ এটা custom dashboard widget যোগ কৰক

### Custom Admin Pages {#custom-admin-pages}

ফিটনেস ষ্টুডিঅ'ৰ মালিকসকলৰ বাবে আটাইতকৈ গুৰুত্বপূৰ্ণ কাৰ্য্যসমূহক আগুৱাই নিয়াৰ বাবে কাস্টম admin pages সৃষ্টি কৰাৰ কথা ভাবক:

- "Edit Your Class Schedule"
- "Update Trainer Profiles"
- "View Your Site"

এনে কৰিলে সাধাৰণ WordPress মেনুৰ গভীৰতাত লুকুৱাই থকাৰ পৰিৱৰ্তে, বিশেষ উদ্যোগ-সম্পৰ্কীয় কাৰ্য্যসমূহক কেন্দ্ৰত ৰাখি ল'ৰ্ণিং ব্ৰেক (learning curve) ক কম কৰিব পাৰি।

## আপোনাৰ যোগাযোগত ব্ৰেণ্ডিং যোগ কৰা {#branding-your-communications}

প্ৰতিটো ইমেইল, ইনভয়েচ, আৰু notificatioনে আপোনাৰ ব্ৰেণ্ডক শক্তিশালী কৰিব লাগে।

### System Emails {#system-emails}

**Ultimate Multisite > Settings > Emails** লৈ যোৱা আৰু সকলো system email ক কাস্টমাইজ কৰা:

- **From name**: FitSite
- **From email**: hello@fitsite.com
- **Email templates**: আপোনাৰ ব্ৰেণ্ডৰ ৰং আৰু logo ব্যৱহাৰ কৰক
- **Language**: ফিটনেস-সম্পৰ্কীয় বিষয়বস্তুৰে ভৰপূৰ

কাস্টমাইজ কৰিবলগীয়া মূল ইমেইলসমূহ:

| Email | Generic Version | FitSite Version |
|-------|----------------|-----------------|
| Welcome | "Your new site is ready" | "Your fitness studio website is live" |
| Payment receipt | "Payment received" | "FitSite subscription payment confirmed" |
| Trial ending | "Your trial is ending soon" | "Your FitSite trial ends in 3 days -- keep your studio website live" |

### Invoices {#invoices}

নিৰ্দিষ্ট কৰক ইনভয়েচ টেমপ্লেটত:

- আপোনাৰ FitSite logo আৰু ব্ৰেণ্ডৰ ৰং
- আপোনাৰ ব্যৱসায়িক বিৱৰণ (business details)
- ফিটনেস-সম্পৰ্কীয় সামগ্ৰীৰ নাম (generic plan IDs নহয়)

## গ্ৰাহক-সামৰ্ভা স্থান (The Customer-Facing Site) {#the-customer-facing-site}

আপোনাৰ মূল domain (`fitsite.com`) ত এটা marketing site হ'ব লাগিব যিয়ে Platfromটো বিক্ৰী কৰিব। এইটো Ultimate Multisite network admin ৰ পৰা পৃথক — এইটো আপোনাৰ ব্যৱসায়ৰ public face।

মূল পৃষ্ঠা সমূহ:

- **Homepage**: ফিটনেস ব্যৱসায়ৰ বাবে স্পষ্ট মূল্য প্ৰস্তাৱ (clear value proposition)
- **Features**: FitSite কি কৰে, ফিটনেস শব্দৰে বৰ্ণনা কৰা
- **Pricing**: আপোনাৰ তিনিটা প্লেন, বিশেষ উদ্যোগ-সম্পৰ্কীয় বৈশিষ্ট্যৰ তুলনাসমূহ
- **Examples**: Platfrom ওপৰত নিৰ্মাণ কৰা স্থানসমূহৰ প্ৰদৰ্শন
- **Sign Up**: আপোনাৰ checkout form লৈ লিংক

:::tip আপোনাৰ Marketing Site এটা Network Site হ'ব পাৰে
আপোনাৰ marketing site টো আপোনাৰ নিজৰ networkৰ ভিতৰত এটা site হিচাপে সৃষ্টি কৰক। ইয়াৰ দ্বাৰা আপুনি ইয়াক একেটা dashboardৰ পৰা ব্যৱস্থাপনা কৰিব পাৰিব আৰু আপোনাৰ নিজৰ Platfromৰ সামৰ্থ্যক প্ৰদৰ্শন কৰিব পাৰিব।
:::

## গ্ৰাহকসকলৰ বাবে Custom Domain {#custom-domain-for-customers}

যি গ্ৰাহকসকলে custom domain সহ প্লেন লয়, তেওঁলোকৰ বাবে প্ৰক্ৰিয়াটো স্পষ্টভাৱে নথিভুক্ত কৰক:

১. গ্ৰাহকে এটা registrar লৈ তেওঁলোকৰ domain ৰেকৰ্ড কৰে বা স্থানান্তৰ কৰে
২. গ্ৰাহকে DNS আপডেট কৰি আপোনাৰ Platfromলৈ নিৰ্দেশ কৰে (সঠিক ৰেকৰ্ডসমূহ প্ৰদান কৰক)
৩. Ultimate Multisite-এ domain mapping আৰু SSL ব্যৱস্থাপনা কৰে

এই প্ৰক্ৰিয়াটোৰ বাবে এটা help article বা knowledge base entry সৃষ্টি কৰক, যিটো লিখা হৈছে ন-টেকনিক্যাল ফিটনেস ষ্টুডিঅ'ৰ মালিকসকলৰ বাবে।

## FitSite Network এ এতিয়ালৈকে কি কি আছে {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## এই পাঠত আমি কি কি নিৰ্মাণ কৰিলোঁ {#what-we-built-this-lesson}

- ব্ৰেণ্ড কৰা অভিজ্ঞতাৰ বাবে **Platfrom domain আৰু DNS** কনফিগাৰ কৰা
- FitSite ব্ৰেণ্ডিং সহ **White-labeled admin**
- **কাস্টমাইজড যোগাযোগ** — ইমেইল, ইনভয়েচ, আৰু notificatioন সকলো ব্ৰেণ্ডৰ সৈতে
- এটা **marketing site** যিয়ে ফিটনেস ষ্টুডিঅ'ৰ মালিকসকলক FitSite বিক্ৰী কৰে
- যি গ্ৰাহকসকলে নিজৰ domain বিচাৰে তাৰ বাবে **custom domain documentation**

---

**পৰৱৰ্তী:** [Lesson 8: Customer Onboarding](lesson-8-onboarding) — আমি এনে এটা অভিজ্ঞতা ডিজাইন কৰোঁ যিয়ে এটা নতুন sign-up ক এটা সক্ৰিয়, সুখী গ্ৰাহকে ৰূপান্তৰ কৰে।
