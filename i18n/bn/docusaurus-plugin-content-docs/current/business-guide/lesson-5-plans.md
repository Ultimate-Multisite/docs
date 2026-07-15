---
title: 'পাঠ ৫: আপনার পরিকল্পনা তৈরি করা'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# লেসন ৫: আপনার প্ল্যান ডিজাইন করা

আপনার প্ল্যান টিয়ারগুলো শুধু দামের স্তর নয় — এগুলো দেখায় যে আপনার নির্দিষ্ট ধরনের গ্রাহকরা বাস্তবে কীভাবে কাজ করেন। এই লেসনে আপনি এমন প্রোডাক্ট টিয়ার ডিজাইন করবেন যা বিভিন্ন পর্যায়ে ফিটনেস ব্যবসার আসল চাহিদাগুলোর সাথে মানানসই।

## আমরা কোথায় ছিলাম {#where-we-left-off}

FitSite-এ তিনটি টেমপ্লেট প্রস্তুত আছে (Studio Essential, Gym Pro, Fitness Chain)। এখন আমরা সেই প্ল্যানগুলো তৈরি করব যা নির্ধারণ করবে গ্রাহকরা কী অ্যাক্সেস পাবে এবং তারা কত টাকা পরিশোধ করবে।

## গ্রাহক সেগমেন্টের ভিত্তিতে চিন্তা করা {#thinking-in-customer-segments}

বেশিরভাগ মানুষ যে ভুলটি করে, তা হলো প্ল্যানগুলো টেকনিক্যাল ফিচারের (স্টোরেজ, ব্যান্ডউইথ, পেজের সংখ্যা) ভিত্তিতে ডিজাইন করা। আপনার টার্গেট গ্রাহকরা এই পরিভাষায় চিন্তা করেন না। একজন জিম মালিক তার ব্যবসা চালানোর জন্য কী দরকার, তা নিয়ে চিন্তা করেন।

ফিটনেস স্টুডিওগুলোর জন্য তিনটি স্বাভাবিক সেগমেন্ট বিদ্যমান:

| Segment | তারা কারা | তাদের কী দরকার |
|---------|-------------|----------------|
| **Solo trainers / small studios** | ১-৩ জন কর্মী, একটি লোকেশন, নতুন শুরু করছেন | একটি প্রফেশনাল সাইট, ক্লাসের তথ্য, কন্টাক্ট ফর্ম |
| **Established gyms** | ৫-২০ জন কর্মী, একটি লোকেশন, উন্নতি করছে | উপরের সব কিছু + বুকিং, ব্লগ, গ্যালারি, কাস্টম ডোমেইন |
| **Fitness chains** | একাধিক লোকেশন, প্রতিষ্ঠিত ব্র্যান্ড | উপরের সব কিছু + মাল্টি-সাইট, লোকেশন পেজ, স্টাফ ডিরেক্টরি |

আপনার প্ল্যানগুলো এই সেগমেন্টগুলোর সাথে মানানসই হওয়া উচিত, কোনো এলোমেলো ফিচার বান্ডেলের সাথে নয়।

## FitSite প্ল্যান তৈরি করা {#creating-the-fitsite-plans}

প্রতিটি প্ল্যানের জন্য **Ultimate Multisite > Products > Add Product** এ যান।

### Plan 1: FitSite Starter -- $49/month {#plan-1-fitsite-starter----49month}

**টার্গেট**: সলো ট্রেনার এবং ছোট স্টুডিও

**Description tab**:
- Name: FitSite Starter
- Description: "একটি ব্যক্তিগত প্রশিক্ষক বা ছোট স্টুডিওকে অনলাইনে প্রফেশনাল দেখাতে যা যা দরকার।"

**General tab**:
- Product type: Plan
- Customer role: Administrator

**Site Templates tab**:
- Allow site templates: Enabled
- Available templates: Studio Essential only

**Limitations**:
- Sites: 1
- Disk space: 1 GB
- Custom domain: Disabled (uses `studioname.fitsite.com`)

**Plugins tab**:
- Contact form plugin: Force Activate
- SEO plugin: Force Activate
- Booking plugin: Not Available (upgrade incentive)

**Themes tab**:
- Your selected theme: Force Activate
- All other themes: Hidden

### Plan 2: FitSite Growth -- $99/month {#plan-2-fitsite-growth----99month}

**টার্গেট**: প্রতিষ্ঠিত একক-লোকেশনের জিম

**Description tab**:
- Name: FitSite Growth
- Description: "প্রতিষ্ঠিত জিমগুলোর জন্য যারা তাদের অনলাইন উপস্থিতি বাড়াতে এবং নতুন সদস্য আকর্ষণ করতে প্রস্তুত।"

**Site Templates tab**:
- Available templates: Studio Essential and Gym Pro

**Limitations**:
- Sites: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Plugins tab**:
- Starter-এ যা যা আছে, তার সাথে:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Blog functionality: Available

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 2

### Plan 3: FitSite Pro -- $199/month {#plan-3-fitsite-pro----199month}

**টার্গেট**: একাধিক লোকেশনের ফিটনেস চেইন

**Description tab**:
- Name: FitSite Pro
- Description: "একাধিক লোকেশন সহ ফিটনেস ব্র্যান্ডগুলোর জন্য সম্পূর্ণ প্ল্যাটফর্ম।"

**Site Templates tab**:
- Available templates: All three templates

**Limitations**:
- Sites: 5 (প্রতি লোকেশনের জন্য একটি)
- Disk space: 20 GB
- Custom domain: Enabled

**Plugins tab**:
- Growth-এ যা যা আছে, তার সাথে:
- All premium plugins: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## Plan Group সেটআপ করা {#setting-up-the-plan-group}

প্ল্যান গ্রুপ নিশ্চিত করে যে গ্রাহকরা শুধুমাত্র FitSite প্ল্যান পরিবারের মধ্যেই আপগ্রেড বা ডাউনগ্রেড করতে পারে। প্রতিটি প্ল্যানের **Up & Downgrades** ট্যাবে:

১. সব প্ল্যানের জন্য **Plan Group** "FitSite Plans" সেট করুন
২. **Product Order** ১ (Starter), ২ (Growth), ৩ (Pro) সেট করুন

এতে একটি স্পষ্ট আপগ্রেড পাথ তৈরি হয়: Starter → Growth → Pro।

## অর্ডার বাম্প যোগ করা (Adding Order Bumps) {#adding-order-bumps}

অর্ডার বাম্প হলো চেকআউটের সময় দেওয়া অতিরিক্ত পণ্য। FitSite-এর জন্য, আপনি বিবেচনা করতে পারেন:

- **Extra Storage Pack** ($19/month) -- অতিরিক্ত ৫ GB ডিস্ক স্পেস
- **Priority Support** ($29/month) -- দ্রুত রেসপন্স টাইম
- **Additional Site** ($39/month) -- যেসব গ্রাহকের প্ল্যান অনুযায়ী আরও বেশি সাইট দরকার

এগুলো Ultimate Multisite-এ **Package** ধরনের পণ্য হিসেবে তৈরি করুন এবং সেগুলোকে সংশ্লিষ্ট প্ল্যানগুলোর সাথে যুক্ত করুন।

## এই কাঠামোটি কেন কাজ করে {#why-this-structure-works}

- **Starter** এন্ট্রি বাধারোধ করে — কম দাম, সহজ অফারিং, ট্রেনারদের দ্রুত অনলাইনে নিয়ে আসে
- **Growth** জিমগুলো যে ফিচারগুলো আসলে চায়, তা যোগ করে — বুকিং, গ্যালারি, কাস্টম ডোমেইন
- **Pro** সেই উচ্চ-মূল্যের সেগমেন্টকে পরিষেবা দেয় যাদের মাল্টি-লোকেশনের সাপোর্ট দরকার
- **Order bumps** গ্রাহকদের মূল প্ল্যানগুলো জটিল না করে কাস্টমাইজ করতে দেয়
- **স্পষ্ট আপগ্রেড পাথ** মানে হলো গ্রাহকরা চলে না, বরং আপনার সাথে সাথে বড় হয়

## FitSite Network এখন পর্যন্ত {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## এই লেসনে আমরা যা তৈরি করলাম {#what-we-built-this-lesson}

- বাস্তব ফিটনেস ব্যবসার সেগমেন্টের সাথে মানানসই **তিনটি প্ল্যান টিয়ার**
- Ultimate Multisite-এর প্লাগইন এবং টেমপ্লেট নিয়ন্ত্রণ ব্যবহার করে **ফিচার গেটিং**
- একটি স্পষ্ট আপগ্রেড পাথ সহ **একটি প্ল্যান গ্রুপ**
- অতিরিক্ত আয়ের জন্য **অর্ডার বাম্প পণ্য**
- গ্রাহকের মূল্যের উপর ভিত্তি করে একটি **মূল্য কাঠামো**, টেকনিক্যাল স্পেসিফিকেশনের উপর নয়

---

**পরবর্তী:** [Lesson 6: The Signup Experience](lesson-6-checkout) — আমরা একটি চেকআউট ফ্লো তৈরি করব যা ফিটনেস স্টুডিও মালিকদের পেইড কাস্টমারে রূপান্তরিত করবে।
