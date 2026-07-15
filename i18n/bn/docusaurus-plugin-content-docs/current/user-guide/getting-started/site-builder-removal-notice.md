---
title: সাইট বিল্ডার মোড অপসারণ নোটিশ
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Site Builder Mode অপসারণ বিজ্ঞপ্তি

**Superdav AI Agent v1.12.0 সংস্করণে Site Builder mode সরিয়ে দেওয়া হয়েছে।** আপনি যদি Site Builder mode ব্যবহার করে থাকেন, তবে থিম তৈরি এবং সাইট সেটআপের জন্য আপনার **Setup Assistant agent** ব্যবহার করার পরামর্শ দেওয়া হচ্ছে।

## কী ঘটেছে? {#what-happened}

### Site Builder Mode (পুরোনো) {#site-builder-mode-legacy}

Site Builder mode ব্যবহার করা হতো একটি উইজার্ড-ভিত্তিক ইন্টারফেস হিসেবে যা নিম্নলিখিত কাজগুলো করত:

- টেমপ্লেট থেকে সাইট তৈরি করা
- মৌলিক সেটিংস কনফিগার করা
- একটি থিম নির্বাচন করা
- প্রাথমিক কন্টেন্ট সেটআপ করা

### এর পরিবর্তে কী এসেছে? {#what-replaced-it}

এখন **Setup Assistant agent** সমস্ত Site Builder কার্যকারিতা সামলায়, যা নিম্নলিখিত সুবিধাগুলো নিয়ে এসেছে:

- আরও নমনীয়, agent-নির্দেশিত সেটআপ
- উন্নত থিম কাস্টমাইজেশন অপশন
- Theme Builder অনবোর্ডিং-এর সাথে ইন্টিগ্রেশন
- ভবিষ্যতের সেশনের জন্য স্থায়ী site_brief মেমরি

## আপনি যদি Site Builder Mode ব্যবহার করতেন {#if-you-were-using-site-builder-mode}

### আপনার সাইটগুলো সুরক্ষিত {#your-sites-are-safe}

- Site Builder mode দিয়ে তৈরি বিদ্যমান সাইটগুলো কাজ করে যাবে
- কোনো ডেটা লস বা সাইট বিঘ্ন ঘটবে না
- আপনি স্বাভাবিকভাবে আপনার সাইটগুলো পরিচালনা করতে পারবেন

### Setup Assistant Agent-এ মাইগ্রেট করুন {#migrate-to-setup-assistant-agent}

নতুন সাইট সেটআপ বা থিম পরিবর্তনের জন্য Setup Assistant agent ব্যবহার করুন:

```
"Help me set up a new site"
```

অথবা

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent আরও বেশি নমনীয়তার সাথে একই কার্যকারিতা প্রদান করে।

## তুলনা: Site Builder বনাম Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| বৈশিষ্ট্য | Site Builder (অপসারিত) | Setup Assistant (নতুন) |
|---------|----------------------|----------------------|
| সেটআপ পদ্ধতি | উইজার্ড ফর্ম | agent কথোপকথন |
| থিম নির্বাচন | পূর্বনির্ধারিত টেমপ্লেট | কাস্টম জেনারেশন |
| কাস্টমাইজেশন | সীমিত অপশন | সম্পূর্ণ ডিজাইন সিস্টেম |
| সাইট ব্রিফ | সংরক্ষণ করা হয় না | স্থায়ী মেমরি |
| ভবিষ্যতের সেশন | সেটআপ পুনরাবৃত্তি | সংরক্ষিত site_brief ব্যবহার |
| নমনীয়তা | নির্দিষ্ট ওয়ার্কফ্লো | অভিযোজিত কথোপকথন |

## Setup Assistant Agent-এ মাইগ্রেট করা {#migrating-to-setup-assistant-agent}

### নতুন সাইটের জন্য {#for-new-sites}

Site Builder mode ব্যবহার না করে:

১. অনুরোধ করুন: "Help me set up a new site"
২. Setup Assistant agent আপনাকে নিম্নলিখিত বিষয়গুলো দিয়ে গাইড করবে:
   - সাইট উদ্দেশ্য এবং লক্ষ্য
   - টার্গেট অডিয়েন্স
   - ব্র্যান্ড আইডেন্টিটি
   - থিম জেনারেশন
   - প্রাথমিক কনফিগারেশন

### বিদ্যমান সাইটের জন্য {#for-existing-sites}

যদি আপনার কাছে Site Builder mode থেকে কোনো বিদ্যমান সাইট থাকে:

১. আপনি এটি যেমন আছে তেমনই ব্যবহার করতে পারেন
২. থিম আপডেট করতে, অনুরোধ করুন: "Redesign my site"
৩. Setup Assistant agent আপনাকে একটি নতুন থিম তৈরি করতে সাহায্য করবে
৪. আপনার সাইট ডেটা অপরিবর্তিত থাকবে

### থিম পরিবর্তনের জন্য {#for-theme-changes}

Site Builder mode-এর থিম নির্বাচনের পরিবর্তে:

১. অনুরোধ করুন: "Change my theme"
২. Setup Assistant agent যা করবে:
   - আপনার ডিজাইন পছন্দ সম্পর্কে জিজ্ঞাসা করবে
   - একটি কাস্টম থিম তৈরি করবে
   - এটি আপনার সাইটে সক্রিয় করবে

## মূল পার্থক্যগুলো {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
১. একটি টেমপ্লেট নির্বাচন করুন
২. একটি থিম নির্বাচন করুন
৩. মৌলিক সেটিংস কনফিগার করুন
৪. সম্পন্ন
```

### Setup Assistant Agent {#setup-assistant-agent}

```
১. আপনার সাইটের উদ্দেশ্য বর্ণনা করুন
২. আপনার টার্গেট অডিয়েন্স সংজ্ঞায়িত করুন
৩. ডিজাইন পছন্দগুলি বেছে নিন
৪. agent কাস্টম থিম তৈরি করবে
৫. agent থিম সক্রিয় করবে
৬. ভবিষ্যতের সেশনের জন্য সাইট ব্রিফ সংরক্ষণ করা হবে
```

## Setup Assistant Agent-এর সুবিধা {#benefits-of-setup-assistant-agent}

### আরও নমনীয় {#more-flexible}

- প্রাকৃতিক ভাষায় আপনার সাইট বর্ণনা করুন
- কাস্টম সুপারিশ পান
- আপনার নির্দিষ্ট প্রয়োজন অনুযায়ী মানিয়ে নিতে পারে

### উন্নত কাস্টমাইজেশন {#better-customization}

- কাস্টম থিম জেনারেশন
- ডিজাইন সিস্টেম সিদ্ধান্ত
- স্থায়ী ডিজাইন টোকেন

### স্থায়ী মেমরি {#persistent-memory}

- আপনার site_brief সংরক্ষণ করা হয়
- ভবিষ্যতের agent আপনার সাইট বুঝতে পারে
- সেটআপ তথ্য পুনরাবৃত্তি করার প্রয়োজন নেই

### ইন্টিগ্রেটেড ওয়ার্কফ্লো {#integrated-workflow}

- Theme Builder অনবোর্ডিং
- Design System Aesthetics skill
- Ability Visibility controls
- সব কিছু একসাথে নির্বিঘ্নে কাজ করে

## সমস্যা সমাধান {#troubleshooting}

### আমি Site Builder mode খুঁজে পাচ্ছি না {#i-cant-find-site-builder-mode}

Site Builder mode সরিয়ে দেওয়া হয়েছে। এর পরিবর্তে Setup Assistant agent ব্যবহার করুন:

```
"Help me set up a new site"
```

### আমি Site Builder থেকে একটি সাইট পুনর্নির্মাণ করতে চাই {#i-want-to-recreate-a-site-from-site-builder}

আপনি Setup Assistant agent ব্যবহার করে এটি পুনর্নির্মাণ করতে পারেন:

১. অনুরোধ করুন: "Help me set up a new site"
২. আপনার মূল সাইটটির উদ্দেশ্য এবং ডিজাইন বর্ণনা করুন
৩. agent একটি অনুরূপ থিম তৈরি করবে
৪. আপনার site_brief ভবিষ্যতের রেফারেন্সের জন্য সংরক্ষণ করা হবে

### আমার বিদ্যমান Site Builder সাইটটি কাজ করছে না {#my-existing-site-builder-site-isnt-working}

Site Builder mode দিয়ে তৈরি বিদ্যমান সাইটগুলো কাজ করে যাবে। যদি আপনি কোনো সমস্যার সম্মুখীন হন:

১. পরীক্ষা করুন যে আপনার থিমটি এখনও সক্রিয় আছে কিনা
২. যাচাই করুন যে আপনার প্লাগইনগুলি সক্ষম করা আছে কিনা
৩. ওয়ার্ডপ্রেস এরর লগ চেক করুন
৪. সমস্যা চলতে থাকলে সাপোর্টের সাথে যোগাযোগ করুন

### আমি কি এখনও আমার পুরোনো Site Builder টেমপ্লেট ব্যবহার করতে পারি? {#can-i-still-use-my-old-site-builder-templates}

Site Builder টেমপ্লেট আর উপলব্ধ নেই। তবে:

- আপনার বিদ্যমান সাইটগুলো কাজ করে যাবে
- আপনি Setup Assistant agent দিয়ে অনুরূপ সাইটগুলো পুনর্নির্মাণ করতে পারেন
- Setup Assistant agent আরও বেশি কাস্টমাইজেশন অপশন সরবরাহ করে

## পরবর্তী পদক্ষেপ {#next-steps}

১. **নতুন সাইটের জন্য**: Setup Assistant agent ব্যবহার করুন
২. **বিদ্যমান সাইটের জন্য**: যেমন আছে তেমনই ব্যবহার করতে থাকুন
৩. **থিম পরিবর্তনের জন্য**: Setup Assistant agent-এর কাছ থেকে সাহায্য চান
৪. **ডিজাইন পরিমার্জনের জন্য**: Design System Aesthetics skill ব্যবহার করুন

## সম্পর্কিত বিষয়বস্তু {#related-topics}

- **Theme Builder Onboarding**: কাস্টম থিমের জন্য নির্দেশিত সেটআপ
- **Setup Assistant Agent**: agent-নির্দেশিত সাইট সেটআপ
- **Site Specification Skill**: আপনার সাইটের লক্ষ্য এবং অডিয়েন্স সংজ্ঞায়িত করুন
- **Design System Aesthetics Skill**: আপনার সাইটের ভিজ্যুয়াল আইডেন্টিটি পরিমার্জন করুন
