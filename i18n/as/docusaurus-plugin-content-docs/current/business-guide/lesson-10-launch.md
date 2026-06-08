---
title: 'পাঠ ১০: আৰম্ভণিৰ দিন'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# পাঠ ১০: লঞ্চ দিন

সকলো বস্তু সাজু হৈ গ'ল। কিন্তু দোকানখন খুলি থকাৰ আগতে, এই পাঠটোৱে এটা প্ৰি-লঞ্চ চেকলিষ্টৰ জৰিয়তে গৈছে যাতে কোনোবা এটা ভাঙি নাই, কোনোবা এটা নাই, বা কোনোবা এটা লাজজনক ভুল নাই।

## আমি ক'ত থমকিছিলো

FitSite-ত টেমপ্লেট, প্লেন, চেকাউট, ব্ৰেণ্ডিং, অনবৰ্ডিং, আৰু মূল্যনিৰ্ধাৰণ (pricing) সকলো বস্তু কনফিগাৰেট কৰা হৈ গ'ল। এতিয়া আমি সকলো বস্তু সঠিকভাৱে কাম কৰিছে নে নাই তাৰ পৰীক্ষা কৰিম আৰু লাইভ কৰিম।

## প্ৰি-লঞ্চ চেকলিষ্ট

প্ৰতিটো আইটেমৰ ওপৰেৰে গৈক। কোনোবাটাও এৰি নিদিব।

### Platfrom Infrastructure (প্ৰণালীৰ ভেটি)

- [ ] Hosting স্থিতিশীল আৰু লোড বহন কৰাত ভালদৰে কাম কৰিছে নেকি
- [ ] Wildcard SSL active আছে নেকি আৰু সকলো subdomain HTTPS ত চলিছে নেকি
- [ ] Domain mapping কাম কৰিছে নেকি -- এটা সাইট সৃষ্টি কৰি আৰু এটা custom domain ম্যাপ কৰাৰ পৰীক্ষা কৰক
- [ ] Backup কনফিগাৰেট আৰু পৰীক্ষা কৰা হৈছে নেকি (কমপক্ষে এটা পুনৰুদ্ধাৰ কৰি পৰীক্ষা কৰক)
- [ ] Monitoring ব্যৱস্থা আছে নেকি -- যদি platfrom ডাউন হয়, তেন্তে আপোনাক জনা যাব

### Templates (টেমপ্লেট)

- [ ] নতুন সাইটত তিনিওটা টেমপ্লেট সঠিকভাৱে লোড হয় নেকি
- [ ] Placeholder content সহায়ক আৰু বানান ভুলমুক্ত নেকি
- [ ] সকলো ছবি সঠিকভাৱে লাইচেঞ্চ কৰা হৈছে নেকি (কোনো stock photo-ৰ watermark নাই)
- [ ] Mobile responsiveness প্ৰতিটো টেমপ্লেট পৃষ্ঠাৰ বাবে কাম কৰে নেকি
- [ ] Page load speed মানানসই নেকি (GTmetrix বা PageSpeed Insights जस्ता টুলৰে পৰীক্ষা কৰক)
- [ ] কোনো টেমপ্লেটত ভাঙি যোৱা link বা নাইকিয়া asset নাইনেকি

### Plans and Products (প্লেন আৰু প্ৰডাক্ট)

- [ ] তিনিওটা প্লেন active আৰু দৃশ্যমান নেকি
- [ ] প্লেনৰ বৰ্ণনা সঠিক আৰু নিৰ্দিষ্ট (niche-specific) নেকি
- [ ] মূল্যনিৰ্ধাৰণ সঠিক নেকি (মাসিক আৰু বৰ্ষিক)
- [ ] Setup fees সঠিক প্লেনত কনফিগাৰেট কৰা হৈছে নেকি
- [ ] Starter plan ত trial period কাম কৰে নেকি
- [ ] Checkout সময়ত Order bumps সঠিকভাৱে দেখুৱায় নেকি
- [ ] Plugin আৰু theme-ৰ সীমাবদ্ধতাসমূহ প্লেন অনুসৰি সঠিকভাৱে বলবৎ কৰা হৈছে নেকি

### Checkout Flow (প্ৰক্ৰিয়াৰ ধাৰা)

- [ ] প্ৰতিটো প্লেনত এটা সম্পূৰ্ণ test signup কৰক (test payment mode ব্যৱহাৰ কৰক)
- [ ] Template selection প্লেন অনুসৰি সঠিক টেমপ্লেট দেখুৱায় নেকি
- [ ] Payment সফলভাৱে প্ৰক্ৰিয়াজাত হয় নেকি
- [ ] signup কৰাৰ পিছত customer-ক welcome email পোৱা যায় নেকি
- [ ] নতুন সাইট সঠিক টেমপ্লেটৰে সৃষ্টি হয় নেকি
- [ ] customer-ক তেওঁলোকৰ নতুন সাইটত তৎক্ষণাত লগ ইন কৰিব পাৰা হয় নেকি
- [ ] Discount codes সঠিকভাৱে কাম কৰে নেকি

### Branding (ব্ৰেণ্ডিং)

- [ ] Login page ত FitSite ব্ৰেণ্ডিং দেখুৱায় নেকি
- [ ] Admin dashboard ত FitSite ব্ৰেণ্ডিং দেখুৱায় নেকি
- [ ] সকলো system email ত FitSite ব্ৰেণ্ডিং আৰু ফিটনেস-সম্পৰ্কীয় ভাষা ব্যৱহাৰ কৰা হয় নেকি
- [ ] Invoices ত আপোনাৰ ব্যৱসায়িক বিৱৰণৰ সৈতে সঠিকভাৱে প্ৰদৰ্শন কৰা হয় নেকি
- [ ] Marketing site live আৰু checkout form লৈ link কৰা হৈছে নেকি

### Onboarding (প্ৰশিক্ষণ)

- [ ] Quick Start widget নতুন customer dashboard ত দেখুৱায় নেকি
- [ ] সকলো Quick Start link সঠিক পৃষ্ঠাৰ ফালে আঙুলিয়াই দিয়ে নেকি
- [ ] Welcome email sequence কনফিগাৰেট আৰু পৰীক্ষা কৰা হৈছে নেকি
- [ ] Knowledge base article প্ৰকাশিত আৰু উপলব্ধ নেকি
- [ ] Account page ত সঠিক প্লেনৰ তথ্য আৰু upgrade বিকল্প দেখুৱায় নেকি

### Legal and Business (আইন আৰু ব্যৱসায়)

- [ ] Terms of service প্ৰকাশিত আৰু checkout ৰ পৰা link কৰা হৈছে নেকি
- [ ] Privacy policy প্ৰকাশিত আৰু উপলব্ধ নেকি
- [ ] Refund policy সংজ্ঞায়িত আৰু নথিভুক্ত কৰা হৈছে নেকি
- [ ] ধন গ্ৰহণ কৰিবলৈ ব্যৱসায়িক সত্তা (Business entity) স্থাপন কৰা হৈছে নেকি
- [ ] Payment gateway live mode ত আছে (test mode ত নহয়)
- [ ] Tax কনফিগাৰেচন আপোনাৰ jurisdication (অধিক্ষেত্ৰ) অনুসৰি সঠিক নেকি

## Soft Launch বনাম Hard Launch

এটা দু-ধাপৰ লঞ্চৰ কথা ভাবক:

### Phase 1: Soft Launch

পাবলিক লঞ্চৰ আগতে ৫-১০ জন ফিটনেস ষ্টুডিঅ'ৰ মালিকক sign up কৰিবলৈ আমন্ত্ৰণ কৰক। এইবোৰ আপোনাৰ beta customer। তেওঁলোকক এটা যথেষ্ট সৰু মূল্যত (জীৱনকালৰ বাবে ৫০% অফ, বা ৩ মাহ বিনামূলীয়াকৈ) দিয়াৰ বিনিময়ত:

- signup আৰু onboarding অভিজ্ঞতাৰ ওপৰত সঁচা মতামত
- তেওঁলোকৰ সাইটক এটা প্ৰদৰ্শনমূলক উদাহৰণ হিচাপে ব্যৱহাৰ কৰাৰ অনুমতি
- তেওঁলোকে সন্মুখীন হোৱা কোনো bug বা সমস্যা প্ৰতিবেদন কৰা

এনেৰে আপোনাক প্ৰকৃত customer feedback আৰু public-ৰ আগতে প্ৰদৰ্শন কৰিবলৈ live সাইট পোৱা যায়।

### Phase 2: Public Launch

Soft launch-ৰ feedback অন্তৰ্ভুক্ত কৰাৰ পিছত:

- Payment gateway लाई live mode ত সলনি কৰক
- আপোনাৰ marketing site প্ৰকাশ কৰক
- customer acquisition আৰম্ভ কৰক (Lesson 11)
- প্ৰাসংগিক ফিটনেস উদ্যোগৰ চেনেলত ঘোষণা কৰক

## লঞ্চ দিনৰ কাৰ্য্যসমূহ

যি দিন আপুনি public হয়:

1. **Live payments ত সলনি কৰক** -- আপোনাৰ payment gateway ত test mode বন্ধ কৰক
2. **আৰু এবাৰ পৰীক্ষা কৰক** -- এটা প্ৰকৃত ধনৰে সম্পূৰ্ণ test signup কৰক (পৰৱৰ্তী সময়ত নিজকে refund কৰক)
3. **ঘনিষ্ঠভাৱে নিৰীক্ষণ কৰক** -- error, ব্যর্থ signup, বা payment সমস্যাৰ বাবে চাই থাকক
4. **উপলব্ধ থাকক** -- আপোনাৰ প্ৰথম প্ৰকৃত customer-সকলে সহায়ৰ প্ৰয়োজন হ'ব পাৰে, আৰু দ্ৰুত প্ৰতিক্ৰিয়াই বিশ্বাস গঢ়ে
5. **সংক্ষিপ্ত উদযাপন কৰক** -- তাৰ পিছত কামত লাগি পৰক

## কি ভুল হ'ব পাৰে

এইবোৰৰ বাবে সাজু থাকক:

- **Payment gateway সমস্যা**: আপোনাৰ gateway provider-ৰ support contact সাজু ৰাখক
- **SSL certificate সমস্যা**: certificate কেনেকৈ পৰীক্ষা কৰিব আৰু পুনৰনিৰ্মাণ কৰিব সেয়া জনা থাকক
- **Email delivery failure**: ইমেইলবোৰ প্ৰকৃততে আহিছে নেকি পৰীক্ষা কৰক (spam folder চাওক)
- **Performance under load**: যদি আপোনাৰ traffic spike হয়, তেন্তে আপোনাৰ hosting কেনেকৈ scale কৰিব সেয়া জনা থাকক
- **Customer confusion**: আপোনাৰ knowledge base আৰু support channel সাজু ৰাখক

## FitSite Network এ এতিয়ালৈকে কি কি আছে

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## এই পাঠত আমি কি কি সজা লৈ গ'লোঁ

- **এটা বিস্তৃত প্ৰি-লঞ্চ চেকলিষ্ট** যিয়ে infrastructure, content, payments, আৰু legal ক কওঁ।
- **এটা soft launch strategy** যাতে public হোৱাৰ আগতে প্ৰকৃত feedback পোৱা যায়।
- **লঞ্চ দিনৰ প্ৰক্ৰিয়া** যাতে আত্মবিশ্বাসেৰে live হ'ব পাৰি।
- **এটা contingency plan** সাধাৰণ লঞ্চ দিনৰ সমস্যাসমূহৰ বাবে।

---

**পৰৱৰ্তী:** [Lesson 11: Finding Customers](lesson-11-customers) -- FitSite লাইভ হোৱাৰ পিছত, ফিটনেস ষ্টুডিঅ'ৰ মালিকক কেনেকৈ sign up কৰাব?
