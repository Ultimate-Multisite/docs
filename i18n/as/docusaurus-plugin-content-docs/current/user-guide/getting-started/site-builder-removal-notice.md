---
title: স্থান নিৰ্মাতা মোড অপসারণৰ বিজ্ঞপ্তি
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Site Builder Mode অপনয়নৰ বিষয়ে {#site-builder-mode-removal-notice}

**Superdav AI Agent v1.12.0 ত Site Builder mode অপনয়ন কৰা হৈছে।** যদি আপুনি Site Builder mode ব্যৱহাৰ কৰি আছিল, তেন্তে থীম সৃষ্টি আৰু সাইট সেটআপৰ বাবে আপুনি **Setup Assistant agent** ব্যৱহাৰ কৰিব লাগিব।

## কি হ'ল? {#what-happened}

### Site Builder Mode (Legacy) {#site-builder-mode-legacy}

Site Builder mode আছিল এটা উইজार्ड-ভিত্তিক আন্তঃপৃষ্ঠ (wizard-based interface) যি তলৰ কামসমূহৰ বাবে ব্যৱহৃত হৈছিল:

- টেমপ্লেটৰ পৰা সাইট সৃষ্টি কৰা
- মৌলিক সেটিংছ কনফিগাৰ কৰা
- এটা থীম বাছনি কৰা
- আৰম্ভণিৰ বিষয়বস্তু সেটআপ কৰা

### ইয়াৰ সলনি কি হ'ল? {#what-replaced-it}

**Setup Assistant agent** এ এতিয়া Site Builder-ৰ সকলো কাৰ্য্যক্ষমতা সামৰি লৈছে, যি তলত দিয়া ধৰণে উন্নত:

- অধিক নমনীয়, agent-নির্দেশিত সেটআপ
- উন্নত থীম কাস্টমাইজেশ্যন বিকল্প
- Theme Builder অনবৰ্ডিংৰ সৈতে ইন্টিগ্ৰেচন
- ভৱিষ্যতৰ সেশনৰ বাবে স্থায়ী site_brief মেমৰি

## যদি আপুনি Site Builder Mode ব্যৱহাৰ কৰি আছিল {#if-you-were-using-site-builder-mode}

### আপোনাৰ সাইটবোৰ নিৰাপদ {#your-sites-are-safe}

- Site Builder modeৰে সৃষ্টি কৰা বিদ্যমান সাইটবোৰ কাম কৰি থাকিব
- কোনো তথ্য হেৰুৱা বা সাইট ব্যাহত হোৱা নাই
- আপুনি আপোনাৰ সাইটবোৰ সাধাৰণভাৱে ব্যৱস্থাপনা কৰি যাব পাৰে

### Setup Assistant Agent লৈ স্থানান্তৰ কৰক {#migrate-to-setup-assistant-agent}

নতুন সাইট সেটআপ বা থীম সলনি কৰাৰ বাবে, Setup Assistant agent ব্যৱহাৰ কৰক:

```
"Help me set up a new site"
```

অথবা

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent এ অধিক নমনীয়তাৰ সৈতে একেটা কাৰ্য্যক্ষমতা প্ৰদান কৰে।

## তুলনা: Site Builder বনাম Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| বৈশিষ্ট্য | Site Builder (অপনয়ন কৰা) | Setup Assistant (নতুন) |
|---------|----------------------|----------------------|
| সেটআপ পদ্ধতি | উইজार्ड ফৰ্ম | agent কথোপকথন |
| থীম বাছনি | পূৰ্বনিৰ্ধাৰিত টেমপ্লেট | কাস্টম সৃষ্টি |
| কাস্টমাইজেশ্যন | সীমিত বিকল্প | সম্পূৰ্ণ ডিজাইন ছিষ্টেম |
| সাইট ব্ৰীফ | সঞ্চিত নহয় | স্থায়ী মেমৰি |
| ভৱিষ্যত সেশন | সেটআপ পুনৰ কৰা | সঞ্চিত site_brief ব্যৱহাৰ কৰা |
| নমনীয়তা | নিৰ্দিষ্ট কাৰ্য্যধাৰা (Fixed workflow) | অভিযোজিত কথোপকথন (Adaptive conversation) |

## Setup Assistant Agent লৈ স্থানান্তৰ কৰা {#migrating-to-setup-assistant-agent}

### নতুন সাইটৰ বাবে {#for-new-sites}

Site Builder mode ব্যৱহাৰ কৰাৰ সলনি:

1. অনুৰোধ: "Help me set up a new site"
2. Setup Assistant agent ले আপোনাক এইবোৰৰ জৰিয়তে পথ প্ৰদৰ্শন কৰিব:
   - সাইটৰ উদ্দেশ্য আৰু লক্ষ্য
   - লক্ষ্য শ্রোতা (Target audience)
   - ব্ৰেণ্ডৰ পৰিচয় (Brand identity)
   - থীম সৃষ্টি
   - আৰম্ভণি কনফিগাৰেচন

### বিদ্যমান সাইটৰ বাবে {#for-existing-sites}

যদি আপোনাৰ Site Builder modeৰ পৰা এটা বিদ্যমান সাইট আছে:

1. আপুনি ইয়াক এনেদৰে ব্যৱহাৰ কৰি যাব পাৰে
2. থীম আপডেট কৰিবলৈ, অনুৰোধ কৰক: "Redesign my site"
3. Setup Assistant agent ले আপোনাক এটা নতুন থীম সৃষ্টি কৰাত সহায় কৰিব
4. আপোনাৰ সাইটৰ তথ্য সলনি নহ'ব

### থীম সলনিৰ বাবে {#for-theme-changes}

Site Builder mode-ৰ থীম বাছনিৰ সলনি:

1. অনুৰোধ: "Change my theme"
2. Setup Assistant agent ले:
   - আপোনাৰ ডিজাইন পছন্দৰ বিষয়ে সোধিব
   - এটা কাস্টম থীম সৃষ্টি কৰিব
   - ইয়াক আপোনাৰ সাইটত active কৰিব

## মূল পাৰ্থক্যসমূহ {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. এটা টেমপ্লেট বাছক
2. এটা থীম বাছক
3. মৌলিক সেটিংছ কনফিগাৰ কৰক
4. সম্পন্ন
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. আপোনাৰ সাইটৰ উদ্দেশ্য বৰ্ণনা কৰক
2. আপোনাৰ লক্ষ্য শ্রোতা সংজ্ঞায়িত কৰক
3. ডিজাইন পছন্দ বাছক
4. agent এ কাস্টম থীম সৃষ্টি কৰে
5. agent এ থীম active কৰে
6. ভৱিষ্যত সেশনৰ বাবে সাইট ব্ৰীফ সঞ্চিত হয়
```

## Setup Assistant Agent-ৰ সুবিধা {#benefits-of-setup-assistant-agent}

### অধিক নমনীয় {#more-flexible}

- আপোনাৰ সাইটক সাধাৰণ ভাষাত বৰ্ণনা কৰক
- কাস্টম পৰামৰ্শ লাভ কৰক
- আপোনাৰ নিৰ্দিষ্ট প্ৰয়োজনীয়তাৰ সৈতে খাপ খুৱাই লওক

### উন্নত কাস্টমাইজেশ্যন {#better-customization}

- কাস্টম থীম সৃষ্টি
- ডিজাইন ছিষ্টেমৰ সিদ্ধান্ত
- স্থায়ী ডিজাইন টোকেন (Persistent design tokens)

### স্থায়ী মেমৰি {#persistent-memory}

- আপোনাৰ site_brief সঞ্চিত হয়
- ভৱিষ্যত agent বোৰে আপোনাৰ সাইট বুজি পায়
- সেটআপ তথ্য পুনৰাবৃত্তি কৰাৰ প্ৰয়োজন নাই

### ইন্টিগ্ৰেটেড কাৰ্য্যধাৰা (Integrated Workflow) {#integrated-workflow}

- Theme Builder অনবৰ্ডিং
- Design System Aesthetics skill
- Ability Visibility controls
- সকলোৱে একগোট হৈ নিৰৱচ্ছিন্নভাৱে কাম কৰে

## সমস্যা সমাধান (Troubleshooting) {#troubleshooting}

### মই Site Builder mode পাওঁ নাই {#i-cant-find-site-builder-mode}

Site Builder mode অপনয়ন কৰা হৈছে। তাৰ সলনি Setup Assistant agent ব্যৱহাৰ কৰক:

```
"Help me set up a new site"
```

### মই Site Builder ৰ পৰা এটা সাইট পুনৰ সৃষ্টি কৰিব বিচাৰোঁ {#i-want-to-recreate-a-site-from-site-builder}

আপুনি Setup Assistant agent ব্যৱহাৰ কৰি ইয়াক পুনৰ সৃষ্টি কৰিব পাৰে:

1. অনুৰোধ: "Help me set up a new site"
2. আপোনাৰ মূল সাইটৰ উদ্দেশ্য আৰু ডিজাইন বৰ্ণনা কৰক
3. agent ले এটা একেধৰণৰ থীম সৃষ্টি কৰিব
4. আপোনাৰ site_brief ভৱিষ্যত প্ৰয়োজনীয়তাৰ বাবে সঞ্চিত হ'ব

### মোৰ বিদ্যমান Site Builder সাইটটো কাম নকৰে {#my-existing-site-builder-site-isnt-working}

Site Builder modeৰে সৃষ্টি কৰা বিদ্যমান সাইটবোৰ কাম কৰি থাকিব। যদি আপুনি কোনো সমস্যাৰ সন্মুখীন হয়:

1. পৰীক্ষা কৰক যে আপোনাৰ থীমটো এতিয়াও active আছে নেকি
2. পৰীক্ষা কৰক যে আপোনাৰ plugins enable কৰা হৈ আছে নেকি
3. WordPress error logs পৰীক্ষা কৰক
4. সমস্যা অব্যাহত থাকিলে সহায়কৰ সৈতে যোগাযোগ কৰক

### মই এতিয়াও মোৰ পুৰণি Site Builder টেমপ্লেট ব্যৱহাৰ কৰিব পাওঁ নেকি? {#can-i-still-use-my-old-site-builder-templates}

Site Builder টেমপ্লেট আৰু উপলব্ধ নহয়। তথাপিও:

- আপোনাৰ বিদ্যমান সাইটবোৰ কাম কৰি থাকিব
- আপুনি Setup Assistant agent ব্যৱহাৰ কৰি একেধৰণৰ সাইট পুনৰ সৃষ্টি কৰিব পাৰে
- Setup Assistant agent ले অধিক কাস্টমাইজেশ্যন বিকল্প প্ৰদান কৰে

## পৰৱৰ্তী পদক্ষেপসমূহ {#next-steps}

1. **নতুন সাইটৰ বাবে**: Setup Assistant agent ব্যৱহাৰ কৰক
2. **বিদ্যমান সাইটৰ বাবে**: এনেদৰে ব্যৱহাৰ কৰি যাবলৈ অব্যাহত ৰাখক
3. **থীম সলনিৰ বাবে**: Setup Assistant agent ৰ পৰা সহায় অনুৰোধ কৰক
4. **ডিজাইন পৰিৱৰ্তনৰ বাবে**: Design System Aesthetics skill ব্যৱহাৰ কৰক

## সম্পৰ্কিত বিষয়সমূহ {#related-topics}

- **Theme Builder Onboarding**: কাস্টম থীমৰ বাবে পথ প্ৰদৰ্শিত সেটআপ
- **Setup Assistant Agent**: agent-নির্দেশিত সাইট সেটআপ
- **Site Specification Skill**: আপোনাৰ সাইটৰ লক্ষ্য আৰু শ্রোতা সংজ্ঞায়িত কৰক
- **Design System Aesthetics Skill**: আপোনাৰ সাইটৰ দৃশ্যমান পৰিচয় উন্নত কৰক
