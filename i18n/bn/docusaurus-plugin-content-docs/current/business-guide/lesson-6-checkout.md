---
title: 'পাঠ ৬: সাইনআপ অভিজ্ঞতা'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lesson 6: The Signup Experience

চেকআউট ফ্লো হলো সেই জায়গা, যেখানে আগ্রহকে আয়ে পরিণত করা হয়। একটি বিভ্রান্তিকর বা সাধারণ সাইনআপ প্রক্রিয়া গ্রাহকদের হারায়। একটি নির্দিষ্ট (niche-specific) ফ্লো যা তাদের ভাষা বোঝে এবং স্বচ্ছন্দ মনে হয়, তা গ্রাহকদের কনভার্ট করে।

## Where We Left Off {#where-we-left-off}

FitSite-এ টেমপ্লেট এবং প্ল্যানগুলো সেট করা আছে। এখন আমরা রেজিস্ট্রেশন এবং চেকআউট অভিজ্ঞতা তৈরি করব, যা ফিটনেস স্টুডিও মালিকদের পেইড কাস্টমারে পরিণত করবে।

## Understanding the Registration Flow {#understanding-the-registration-flow}

Ultimate Multisite-এর চেকআউট ফর্মগুলো সম্পূর্ণ কাস্টমাইজ করা যায় এমন মাল্টি-স্টেপ ফর্ম। FitSite-এর জন্য, আমরা এমন একটি ফ্লো চাই যা:

1. ফিটনেস ব্যবসার জন্য তৈরি বলে মনে হয়
2. শুধুমাত্র প্রয়োজনীয় তথ্য সংগ্রহ করে
3. গ্রাহককে যত দ্রুত সম্ভব একটি কার্যকরী সাইটে নিয়ে যায়

সম্পূর্ণ টেকনিক্যাল রেফারেন্সের জন্য [The Registration Flow](/user-guide/configuration/the-registration-flow) দেখুন।

## Designing the FitSite Checkout {#designing-the-fitsite-checkout}

**Ultimate Multisite > Checkout Forms** এ নেভিগেট করুন এবং একটি নতুন ফর্ম তৈরি করুন।

### Step 1: Plan Selection {#step-1-plan-selection}

একটি ফিটনেস স্টুডিও মালিক সবার প্রথমে যে জিনিসটি দেখতে পাবেন, তা হলো প্ল্যানগুলো, যা এমন পরিভাষায় উপস্থাপন করা হবে যা তারা বোঝেন।

- একটি **Pricing Table** ফিল্ড যোগ করুন
- এটিকে কনফিগার করুন যাতে তিনটি FitSite প্ল্যানই দেখানো যায়
- আপনি Lesson 5-এ যে প্ল্যান বিবরণগুলো লিখেছিলেন, তা এখানে আসবে — নিশ্চিত করুন যে সেগুলি প্রযুক্তিগত বৈশিষ্ট্য নয়, বরং ফিটনেস ব্যবসার চাহিদা নিয়ে কথা বলছে।

:::tip Niche Language Matters
"1 GB storage" একটি জিম মালিকের কাছে কোনো অর্থ বহন করে না। "আপনার পেশাদার স্টুডিও ওয়েবসাইটের জন্য যা কিছু প্রয়োজন" — এর মানে সবকিছু। আপনার গ্রাহকের ভাষায় প্ল্যান বিবরণ লিখুন।
:::

### Step 2: Template Selection {#step-2-template-selection}

একটি প্ল্যান বেছে নেওয়ার পরে, গ্রাহক তাদের শুরুর টেমপ্লেটটি বেছে নেন।

- একটি **Template Selection** ফিল্ড যোগ করুন
- উপলব্ধ টেমপ্লেটগুলো তারা যে প্ল্যানটি বেছে নিয়েছে তার ভিত্তিতে ফিল্টার করা হবে (যা Lesson 5-এ কনফিগার করা হয়েছে)
- প্রতিটি টেমপ্লেটে একটি প্রিভিউ ইমেজ থাকা উচিত যা ফিটনেস-নির্দিষ্ট ডিজাইন দেখাচ্ছে।

### Step 3: Account Creation {#step-3-account-creation}

এটি ন্যূনতম রাখুন। শুধুমাত্র এগুলো সংগ্রহ করুন:

- ইমেল অ্যাড্রেস
- পাসওয়ার্ড
- স্টুডিও/ব্যবসার নাম (এটি তাদের সাইট নাম হয়ে যাবে)

সাইনআপ করার সময় এমন কোনো তথ্য জিজ্ঞাসা করবেন না যা আপনার প্রয়োজন নেই। প্রতিটি অতিরিক্ত ফিল্ড কনভার্সন কমিয়ে দেয়।

### Step 4: Site Setup {#step-4-site-setup}

- **Site title**: Step 3-এ প্রবেশ করানো স্টুডিও নাম থেকে প্রি-ফিল করুন
- **Site URL**: স্টুডিও নাম থেকে স্বয়ংক্রিয়ভাবে তৈরি করুন (যেমন, `ironworks.fitsite.com`)

### Step 5: Payment {#step-5-payment}

- **Payment** ফিল্ডটি যোগ করুন
- আপনার পেমেন্ট গেটওয়ে কনফিগার করুন ([Stripe](/user-guide/payment-gateways/stripe) সাবস্ক্রিপশন বিলিংয়ের জন্য প্রস্তাবিত)
- আপনি যদি Lesson 5-এ অর্ডার বাম্প তৈরি করে থাকেন, তবে পেমেন্ট স্টেপের আগে একটি **Order Bump** ফিল্ড যোগ করুন

### Step 6: Confirmation {#step-6-confirmation}

- ফিটনেস-নির্দিষ্ট ভাষা দিয়ে কনফার্মেশন মেসেজটি কাস্টমাইজ করুন
- উদাহরণ: "আপনার ফিটনেস স্টুডিও ওয়েবসাইট তৈরি করা হচ্ছে। কয়েক সেকেন্ডের মধ্যে আপনাকে আপনার নতুন সাইটে রিডাইরেক্ট করা হবে।"

## Adding a Period Selection Toggle {#adding-a-period-selection-toggle}

আপনি যদি আপনার প্ল্যানগুলিতে মূল্য বৈচিত্র্য (মাসিক বনাম বার্ষিক) সেট করে থাকেন, তবে চেকআউট ফর্মে একটি **Period Selection** ফিল্ড যোগ করুন যাতে গ্রাহকরা বিলিং পিরিয়ডের মধ্যে টগল করতে পারেন। নির্দেশাবলীর জন্য [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) দেখুন।

## Configuring Payment {#configuring-payment}

যদি আপনি এখনও কোনো পেমেন্ট গেটওয়ে সেট না করে থাকেন:

1. **Ultimate Multisite > Settings > Payment Gateways** এ নেভিগেট করুন
2. [Stripe setup guide](/user-guide/payment-gateways/stripe) অথবা আপনার পছন্দের গেটওয়ে অনুসরণ করুন
3. একটি টেস্ট পেমেন্ট দিয়ে সম্পূর্ণ চেকআউট ফ্লো পরীক্ষা করুন

পেমেন্টগুলো আপনার অ্যাকাউন্টে কীভাবে পৌঁছায়, তার বিস্তারিত জানতে [Getting Paid](/user-guide/payment-gateways/getting-paid) দেখুন।

## Testing the Flow {#testing-the-flow}

এগিয়ে যাওয়ার আগে, একটি সম্পূর্ণ টেস্ট সাইনআপ সম্পন্ন করুন:

1. একটি ইনকগনিটো/প্রাইভেট ব্রাউজার উইন্ডোতে চেকআউট ফর্মটি খুলুন
2. একটি প্ল্যান নির্বাচন করুন
3. একটি টেমপ্লেট বেছে নিন
4. একটি অ্যাকাউন্ট তৈরি করুন
5. পেমেন্ট সম্পন্ন করুন (টেস্ট মোড ব্যবহার করুন)
6. যাচাই করুন যে সাইটটি সঠিক টেমপ্লেট দিয়ে তৈরি হয়েছে

যাচাই করুন যে:

- [ ] প্ল্যান বিবরণগুলি স্পষ্ট এবং niche-specific
- [ ] টেমপ্লেট প্রিভিউগুলি ফিটনেস-উপযোগী ডিজাইন দেখাচ্ছে
- [ ] সাইট URL স্টুডিও নাম থেকে সঠিকভাবে তৈরি হচ্ছে
- [ ] পেমেন্ট সফলভাবে প্রক্রিয়া করা যাচ্ছে
- [ ] গ্রাহক নির্বাচিত টেমপ্লেট সহ একটি কার্যকরী সাইটে ল্যান্ড করছেন
- [ ] কনফার্মেশন ইমেলগুলিতে ফিটনেস-নির্দিষ্ট ভাষা ব্যবহার করা হয়েছে

## The FitSite Network So Far {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## What We Built This Lesson {#what-we-built-this-lesson}

- ফিটনেস স্টুডিও মালিকদের জন্য তৈরি **একটি মাল্টি-স্টেপ চেকআউট ফর্ম**
- সাইনআপ ফ্লো জুড়ে **niche-specific ভাষা**
- **ন্যূনতম বাধা** — শুধুমাত্র প্রয়োজনীয় ফিল্ড, কার্যকরী সাইটে দ্রুত পথ
- টেস্ট যাচাইকরণের সাথে **পেমেন্ট ইন্টিগ্রেশন**
- প্ল্যান নির্বাচন থেকে কার্যকরী সাইট পর্যন্ত **একটি পরীক্ষিত end-to-end ফ্লো**

---

**Next:** [Lesson 7: Making It Yours](lesson-7-branding) — আমরা প্ল্যাটফর্মটিকে white-label করব এবং FitSite-কে একটি ব্র্যান্ড হিসেবে প্রতিষ্ঠা করব।
