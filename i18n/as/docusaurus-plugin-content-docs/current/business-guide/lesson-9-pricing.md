---
title: 'পাঠ ৯: লাভৰ বাবে মূল্য নিৰ্ধাৰণ'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# পাঠ ৯: লাভৰ বাবে মূল্যনিৰ্ধাৰণ (Pricing for Profit) {#lesson-9-pricing-for-profit}

পাঠ ৫-ত আমি FitSite প্লেনসমূহৰ আৰম্ভণি মূল্য নিৰ্ধাৰণ কৰিছিলো। এতিয়া আমি এনে কিছুমান কৌশলৰ জৰিয়তে মূল্যনিৰ্ধাৰণৰ কৌশলটো উন্নত কৰিম, যাৰ ফলত আয় বাঢ়িব, আপগ্রেড কৰিবলৈ উৎসাহিত হ'ব, আৰু ग्राहकৰ সেৱা বন্ধ কৰাৰ হাৰ (churn) হ্ৰাস পাব।

## আমি কিমান দূৰ আহিছিলো (Where We Left Off) {#where-we-left-off}

FitSite-ত প্লেন, টেমপ্লেট, checkout, branding, আৰু onboarding ব্যৱস্থা কৰা হৈছে। আৰম্ভণি মূল্য আছিল প্ৰতি মাহে $49/$99/$199। এতিয়া আমি সেই মূল্যক অধিক ফলপ্ৰসূ কৰিম।

## Niche Platform-ৰ বাবে মূল্যনিৰ্ধাৰণৰ নীতিসমূহ (Pricing Principles for Niche Platforms) {#pricing-principles-for-niche-platforms}

### মূল্য নিৰ্ধাৰণ কৰক মূল্যৰ ওপৰত, ব্যয়ৰ ওপৰত নহয় (Price on Value, Not Cost) {#price-on-value-not-cost}

আপোনাৰ হোষ্টিং ব্যয় প্ৰতিজন ग्राहकৰ সাইটৰ বাবে $5-$15 হ'ব পাৰে। ইয়াৰ মানে এই নহয় যে আপোনাৰ মূল্য $20 হ'ব লাগিব। আপুনি হোষ্টিং বিক্ৰী কৰি নাই। আপুনি বিক্ৰী কৰিছে:

- এটা পেছাদাৰী ফিটনেছ ওয়েবসাইট, যাক কাস্টমভাৱে নিৰ্মাণ কৰিবলৈ $2,000-$5,000 ব্যয় হ'ব
- চলি থকা মেইনটেনেঞ্চ, আপডেট, আৰু সুৰক্ষা (security) যিটো তেওঁলোকে চিন্তা কৰিবলগীয়া নহ'ব
- Niche-specific বৈশিষ্ট্যসমূহ যিবোৰ সাধাৰণ builder-সমূহে দিয়ে নহয়
- তেওঁলোকৰ উদ্যোগৰ বাবে নিৰ্মাণ কৰা এটা Platfromৰ বিশ্বাসযোগ্যতা

আপুনি কিমান ব্যয় কৰিছে তাৰ ওপৰত নহয়, আপুনি কিমান মূল্য যোগান ধৰিছে তাৰ ওপৰত ভিত্তি কৰি মূল্য নিৰ্ধাৰণ কৰক।

### বিকল্পসমূহৰ সৈতে তুলনা কৰক (Anchor to Alternatives) {#anchor-to-alternatives}

এজন ফিটনেছ ষ্টুডিঅ'ৰ মালিকজনে FitSite মূল্যায়ন কৰোঁতে, তেওঁ ইয়াক তলত দিয়াৰ সৈতে তুলনা কৰে:

- **এজন web developer নিয়োগ কৰা**: $2,000-$5,000 আগতে + $50-$100/মাহ মেইনটেনেঞ্চ
- **Wix/Squarespace**: $16-$45/মাহ কিন্তু ফিটনেছ-specific বৈশিষ্ট্য নাই, তেওঁলোকে নিজে নিৰ্মাণ কৰিব লাগিব
- **কিছুই নকৰা**: অনলাইনত তেওঁলোকক বিচাৰি নোপোৱা সদস্যসকলক হেৰুৱাই দিয়া

$49-$199/মাহৰ মূল্যত, FitSite-এ এজন developer তকৈ সস্তা, সাধাৰণ builder তকৈ অধিক সক্ষম, আৰু কোনো ওয়েবসাইট নথকাৰ তুলনাত অসীম ভাল।

## মূল্যৰ ভিন্নতা প্ৰয়োগ কৰা (Implementing Price Variations) {#implementing-price-variations}

Annual মূল্যনিৰ্ধাৰণে দায়বদ্ধতা বৃদ্ধি কৰে আৰু churn হ্ৰাস কৰে। প্ৰতিটো প্লেনৰ **Price Variations** ট্ৰিখনলৈ যোৱা আৰু annual বিকল্প যোগ কৰা:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

আপোনাৰ checkout form-ত এটা **Period Selection** field যোগ কৰক যাতে ग्राहकসকলে monthly আৰু annual billing ৰ মাজত টগল কৰিব পাৰে। [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) চাওক।

### Annual মূল্যনিৰ্ধাৰণ কিয় কাম কৰে (Why Annual Pricing Works) {#why-annual-pricing-works}

- **আপোনাৰ বাবে**: আগতে নগদ ধন, কম churn (যি ग्राहकসকলে annual মূল্য দিয়ে তেওঁলোকে মধ্য-কালত বাতিল কৰাৰ সম্ভাৱনা কম)
- **তেওঁলোকৰ বাবে**: প্ৰকৃত সঞ্চয়, বাজেটৰ অনুমান কৰিব পৰা ক্ষমতা

## Setup Fees (স্থাপন ব্যৱস্থাৰ মাচুল) {#setup-fees}

যি প্লেনসমূহত হাতেৰে কনফিগাৰেচন কৰিবলগীয়া হয়, তাৰ বাবে এটা এবাৰৰ setup fee ভাবক:

- **Starter**: কোনো setup fee নাই (প্ৰৱেশৰ বাধা আঁতৰাই দিয়ে)
- **Growth**: $99 setup fee (কাস্টম ডোমেইন কনফিগাৰেচন আৰু আৰম্ভণি আলোচনাৰ বাবে)
- **Pro**: $299 setup fee (বহু স্থানৰ setup আৰু onboarding call-ৰ বাবে)

প্ৰতিটো প্লেনৰ মূল্যনিৰ্ধাৰণ অংশত setup fees কনফিগাৰ কৰক। বিৱৰণৰ বাবে [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) চাওক।

## Trial Periods (প্ৰৱেশকাল) {#trial-periods}

এটা trial আগবঢ়োৱাই signup কৰাৰ সময়ৰ বাধা কম কৰে, কিন্তু ই non-conversion ৰ ঝুঁকিও লয়। FitSite-ৰ বাবে:

- কেৱল Starter প্লেনত **৭-দিনৰ বিনামূলীয়া trial**
- Growth আৰু Pro ত trial নাই (এই ग्राहकসকলে অধিক দায়বদ্ধ আৰু তেওঁলোকে মূল্য দিব বুলি আশা কৰে)

Starter প্লেনৰ মূল্যনিৰ্ধাৰণ অংশত **Offer Trial** টগলটো সক্ষম কৰি আৰু সময়কাল ৭ দিন সেট কৰি trial কনফিগাৰ কৰক।

### Trial ক সফল কৰা (Making Trials Convert) {#making-trials-convert}

এটা trial কেৱল তেতিয়াই কাম কৰে যেতিয়া ग्राहकজনে trial সময়ছোৱাত মূল্য অনুভৱ কৰে। আপোনাৰ onboarding sequence (পাঠ ৮) ইয়াত অতি গুৰুত্বপূৰ্ণ—welcome email সমূহক এনেদৰে সময়মতে কৰক যাতে ৭ দিনৰ ভিতৰত জড়িত হোৱাটো উৎসাহিত হয়।

## Discount Codes (ছাড় কোড) {#discount-codes}

নির্দিষ্ট উদ্দেশ্যৰ বাবে কৌশলগত discount code সৃষ্টি কৰক:

- **FITLAUNCH** -- প্ৰথম ৩ মাহৰ বাবে ৩০% ছাড় (launch promotion-ৰ বাবে)
- **ANNUAL20** -- annual প্লেনৰ বাবে ২০% ছাড় (যদি ইতিমধ্যে ছাড় দিয়া নহয়)
- **REFERRAL** -- ১ মাহৰ বিনামূলীয়া (ग्राहकৰ পৰিচয়ৰ বাবে)

এইবোৰ সৃষ্টি কৰিবলৈ **Ultimate Multisite > Discount Codes** লৈ যোৱা। সম্পূৰ্ণ গাইডৰ বাবে [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) চাওক।

:::tip ডিফল্টভাৱে ছাড় নিদিব (Do Not Discount by Default)
ছাড় হ'ব লাগে কৌশলগত সঁজুলি, স্থায়ী ব্যৱস্থা নহয়। যদি সকলোৱে ছাড় পায়, তেন্তে সেয়া ছাড় নহয়—সেয়া আপোনাৰ প্ৰকৃত মূল্য। ইয়াক নিৰ্দিষ্ট কেম্পেইন, পৰিচয়, আৰু সময়-সীমাবদ্ধ প্ৰমোচনৰ বাবে ব্যৱহাৰ কৰক।
:::

## Tax Handling (ট্যাক্স ব্যৱস্থাপনা) {#tax-handling}

যদি আপুনি এনে কোনো অঞ্চলত কাম কৰে য'ত ট্ৰাক সংগ্ৰহ কৰিবলগীয়া হয়:

১. **Ultimate Multisite > Settings > Taxes** ত ট্ৰাক হাৰ কনফিগাৰ কৰক
২. আপোনাৰ প্লেনসমূহত ট্ৰাক categoria যোগ কৰক
৩. নিশ্চিত কৰক যে invoice ত ট্ৰাক সঠিকভাৱে প্ৰদৰ্শিত হয়

বিৱৰণৰ বাবে [Tax Handling](/user-guide/payment-gateways/tax-handling) চাওক। যদি আপুনি আন্তঃৰ্জাতিক ग्राहकসকলক সেৱা আগবঢ়ায়, তেন্তে EU compliance-ৰ বাবে [VAT addon](/addons/vat) বিবেচনা কৰক।

## আপোনাৰ মূল্যনিৰ্ধাৰণ পুনৰীক্ষণ কৰা (Reviewing Your Pricing) {#reviewing-your-pricing}

launch হোৱাৰ পিছত, মূল্যনিৰ্ধাৰণ পুনৰquartely কৰক। তলত দিয়া বিষয়সমূহ চাওক:

- **প্লেন অনুসৰি conversion rate**: যদি Starter ভালদৰে convert কৰে কিন্তু Growth কৰে নালাগে, তেন্তে দুয়োটাৰ মাজৰ ব্যৱধান বেছি হ'ব পাৰে
- **Upgrade rate**: যদি কম সংখ্যক ग्राहकসকলে Starter ৰ পৰা Growth লৈ upgrade কৰে, তেন্তে Growth প্লেনটোৱে যথেষ্ট অধিক মূল্য যোগান ধৰা নাই
- **প্লেন অনুসৰি churn**: যদি annual ग्राहकসকলে কম churn কৰে, তেন্তে annual মূল্যনিৰ্ধাৰণক অধিক গুৰুত্ব দিয়ক
- **Competitor pricing**: বিকল্পসমূহে কিমান টকা লৈছে? আপুনি সঠিক স্থানত আছে নে?

## FitSite Network এতিয়ালৈকে কিমান কৰিলে (The FitSite Network So Far) {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## এই পাঠত আমি কি নিৰ্মাণ কৰিলোঁ (What We Built This Lesson) {#what-we-built-this-lesson}

- দায়বদ্ধতা উৎসাহিত কৰিবলৈ ২০% ছাড় সহ **Annual মূল্যনিৰ্ধাৰণ**
- onboarding প্ৰচেছ কওঁবলৈ উচ্চ স্তৰত **Setup fees**
- signup কৰাৰ সময়ৰ বাধা কম কৰিবলৈ এন্ট্ৰী-লেভেল প্লেনত **এটা trial period**
- launch, referrals, আৰু কেম্পেইনৰ বাবে **কৌশলগত discount codes**
- compliant billing-ৰ বাবে **Tax configuration**
- অবিৰত অপটিমাইজেচনৰ বাবে **এটা মূল্যনিৰ্ধাৰণ পুনৰীক্ষণ কাঠামো**

---

**পৰৱৰ্তী:** [Lesson 10: Launch Day](lesson-10-launch) — pre-launch checklist আৰু live কৰা।
