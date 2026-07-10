---
title: থীম বিল্ডাৰ অনবৰ্ডিং ফ্লো
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 এ এটা গাইড কৰা **Theme Builder onboarding flow** (থিম বিল্ডাৰৰ প্ৰৱেশ প্ৰক্ৰিয়া) মুৰব্বী কৰি আনিছে, যিয়ে আপোনাক আৰম্ভণিৰ সময়তে এটা কাস্টম ব্লক থিম (custom block theme) বনাওঁত সহায় কৰে। ই আগৰ Site Builder মোডটোৰ সলনি হৈ এটা অধিক নমনীয়, এজন সহায়ক (agent)-সহায়িত পদ্ধতি।

## Theme Builder Onboarding Flow কি? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow হৈছে এটা ইন্টাৰেক্টিভ ছেটআপ উইজार्ड (interactive setup wizard) যিয়ে:

- ডিজাইনৰ সিদ্ধান্তসমূহ (ৰং, টাইপগ্ৰাফি, লেআউট) লৈ আপোনাক গাইড কৰে
- আপোনাৰ সাইটৰ ভিজুৱেল আইডেন্টিটিৰ পছন্দসমূহ সংগ্ৰহ কৰে
- আপোনাৰ প্ৰয়োজনীয়তা অনুসৰি এটা কাস্টম ব্লক থিম জেনারেট কৰে
- সম্পূৰ্ণ হোৱাৰ লগে লগে থিমটো স্বয়ংক্ৰিয়ভাৱে অ্যাক্টিভেট কৰে

এই প্ৰক্ৰিয়াটো **Setup Assistant agent** দ্বাৰা চালিত, যিয়ে স্পষ্টকৰণমূলক প্ৰশ্ন কৰে আৰু আপোনাৰ থিমটো লাহে লাহে বনাই যায়।

## Theme Builder Onboarding আৰম্ভ কৰা {#starting-the-theme-builder-onboarding}

### প্ৰথমবাৰৰ ছেটআপ (First-Run Setup) {#first-run-setup}

যেতিয়া আপুনি নতুন WordPress ইনষ্টলেচনত Superdav AI Agent প্ৰথমবাৰৰ বাবে আৰম্ভ কৰিব, তেতিয়া আপুনি এইটো দেখিব:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Theme Builder onboarding flow-ত প্ৰৱেশ কৰিবলৈ **"Build a custom theme"** বাছি লওক।

### হাতেৰে অ্যাক্টিভেট কৰা (Manual Activation) {#manual-activation}

আপুনি যেতিয়া ইচ্ছা হ'ব, তেতিয়াও এইটো কৰি Theme Builder onboarding আৰম্ভ কৰিব পাৰে:

```
"Start the Theme Builder onboarding"
```

বা

```
"Help me create a custom theme"
```

## Onboardingৰ পদক্ষেপসমূহ (The Onboarding Steps) {#the-onboarding-steps}

### Step 1: মোড নিৰ্বাচন (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent এ আপোনাৰ পছন্দৰ বিষয়ে সোধে:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** (গাইড কৰা মোড) বেছিভাগ ব্যৱহাৰকাৰীৰ বাবে উপযুক্ত; এই agent এ আপোনাৰ উদ্যোগ আৰু লক্ষ্যৰ ওপৰত ভিত্তি কৰি ডিজাইনৰ পৰামৰ্শ দিয়ে।

### Step 2: সাইটৰ বিৱৰণ (Site Specification) {#step-2-site-specification}

আপোনাক আপোনাৰ সাইটৰ বিষয়ে সোধা হ'ব:

- **Site purpose**: E-commerce, blog, portfolio, SaaS, ইত্যাদি।
- **Target audience**: আপোনাৰ ভিজিറ്റർসকল কোন?
- **Brand colors**: প্ৰাইমাৰী আৰু ছেকণ্ডাৰী ৰং (বা "মই নিশ্চিত নহওঁ")
- **Tone**: প্ৰফেশ্যনেল, সৃষ্টিশীল, খেলিমেলি, মিনিমাল, ইত্যাদি।

এই তথ্যবোৰ আপোনাৰ **site_brief** মেমৰি (memory) ত সংৰক্ষিত হয়, যাক agent সমূহ ভৱিষ্যতৰ ছেছনত ব্যৱহাৰ কৰে।

### Step 3: ডিজাইন ছিষ্টেমৰ সিদ্ধান্ত (Design System Decisions) {#step-3-design-system-decisions}

agent এ আপোনাক ডিজাইন টোকেন (design token) নিৰ্বাচনৰ জৰিয়তে গাইড কৰে:

- **Typography**: ফণ্ট পৰিয়াল (serif, sans-serif, monospace) আৰু সাইজ স্কেল
- **Color palette**: প্ৰাইমাৰী, ছেকণ্ডাৰী, একেন্ট, আৰু নিউট্ৰেল ৰং
- **Spacing**: কম্পেক্ট, নৰমাল, বা স্পেছিয়াস লেআউট
- **Motion**: এনিমেচন আৰু ট্ৰানজিচন (যদি লাগে)

### Step 4: থিম জেনারেচন (Theme Generation) {#step-4-theme-generation}

Setup Assistant agent এ তলত দিয়া উপাদানৰে আপোনাৰ কাস্টম ব্লক থিমটোৰ কাঠামো (scaffolds) দিয়ে:

- `theme.json` য'ত আপোনাৰ সকলো ডিজাইন টোকেন থাকে
- সাধাৰণ লেআউটৰ বাবে ব্লক টেমপ্লেট (homepage, blog, contact)
- আপোনাৰ ডিজাইন ছিষ্টেমৰ সৈতে মিল থকা কাস্টম ব্লক ষ্টাইল
- থিম মেটাডেটা আৰু WordPress সমৰ্থন ঘোষণা (support declarations)

### Step 5: অ্যাক্টিভেশ্যন আৰু পৰীক্ষা (Activation and Verification) {#step-5-activation-and-verification}

থিমটো স্বয়ংক্ৰিয়ভাৱে অ্যাক্টিভেট হয়, আৰু আপুনি এইটো দেখিব:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

আপুনি তাৰ পাছত আপোনাৰ সাইটলৈ গৈ থিমটো সঠিকভাৱে প্ৰদৰ্শন হৈছে নে নাই, সেয়া পৰীক্ষা কৰিব পাৰে।

## Site Specification আৰু site_brief Memory {#site-specification-and-sitebrief-memory}

Onboarding সময়ত, agent এ আপোনাৰ সাইটৰ বিৱৰণটো এটা **site_brief** মেমৰি categoria ত সংগ্ৰহ কৰে। ইয়াৰ ভিতৰত আছে:

- সাইটৰ উদ্দেশ্য আৰু লক্ষ্য
- লক্ষ্য শ্রোতা (Target audience)
- ব্ৰেণ্ড ৰং আৰু টোন
- ডিজাইনৰ পছন্দসমূহ
- বিষয়বস্তুৰ গঠন (Content structure)

### site_brief কিমান গুৰুত্বপূৰ্ণ {#why-sitebrief-matters}

ভৱিষ্যতৰ ছেছনত, agent সমূহয়ে site_brief ব্যৱহাৰ কৰে:

- পৰিৱৰ্তনৰ সময়ত ডিজাইনৰ সামঞ্জস্য বজাই ৰাখিবলৈ
- আপোনাৰ সাইটৰ উদ্দেশ্যৰ সৈতে মিল থকা বৈশিষ্ট্যসমূহৰ পৰামৰ্শ দিবলৈ
- প্ৰাসংগিক পৰামৰ্শ দিবলৈ
- ছেটআপৰ প্ৰশ্নসমূহ পুনৰ নকওঁবলৈ

### আপোনাৰ site_brief দেখা {#viewing-your-sitebrief}

আপুনি agent লৈ এইটো সোধিব পাৰে:

```
"Show me my site brief"
```

বা

```
"What do you know about my site?"
```

agent এ আপোনাৰ সংৰক্ষিত সাইটৰ বিৱৰণটো প্ৰদৰ্শন কৰিব।

## Onboardingৰ পাছত কাস্টমাইজ কৰা (Customizing After Onboarding) {#customizing-after-onboarding}

Theme Builder onboarding সম্পূৰ্ণ হোৱাৰ পাছত, আপুনি:

### Design System Aesthetics Skill ব্যৱহাৰ কৰা {#use-the-design-system-aesthetics-skill}

ডিজাইনৰ সংশোধনৰ বাবে অনুৰোধ কৰক:

```
"Refine the typography to be more modern"
```

বা

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** এ আপোনাক লক্ষ্যভিত্তিক ডিজাইন আপডেটৰ জৰিয়তে গাইড কৰে।

### theme.json পোনপটীয়াকৈ সম্পাদনা কৰা (Edit theme.json Directly) {#edit-themejson-directly}

উন্নত ব্যৱহাৰকাৰীসকলৰ বাবে, তলৰ উপাদানসমূহ সলনি কৰিবলৈ `/wp-content/themes/[theme-name]/theme.json` ফাইলটো সম্পাদনা কৰক:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### কাস্টম ব্লক টেমপ্লেট সৃষ্টি কৰা (Create Custom Block Templates) {#create-custom-block-templates}

WordPress block editor ব্যৱহাৰ কৰি তলৰ বাবে কাস্টম টেমপ্লেট সৃষ্টি কৰক:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## তুলনা: পুৰণি বনাম নতুন Onboarding (Comparison: Old vs. New Onboarding) {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## সমস্যা সমাধান (Troubleshooting) {#troubleshooting}

**Onboarding flow সম্পূৰ্ণ নহ'ল**
- flow টো পুনৰ আৰম্ভ কৰক: "Start the Theme Builder onboarding"
- পৰীক্ষা কৰক যে আপোনাৰ WordPress ইনষ্টলেচন আপডেট হৈ আছে নেকি
- পৰীক্ষা কৰক যে Setup Assistant agent সক্ষম (enabled) হৈ আছে নেকি

**মোৰ site_brief ব্যৱহাৰ হোৱা নাই**
- নিশ্চিত কৰক যে agent-এ মেমৰি (memory) অ্যাক্সেস কৰিব পাৰিছে
- agent লৈ "recall my site brief" বুলি সোধক
- পৰীক্ষা কৰক যে আপোনাৰ ছেটিংছত মেমৰি সক্ষম হৈ আছে নেকি

**জেনারেট কৰা থিমটো মোৰ পছন্দৰ সৈতে মিল নাই**
- ইয়াক সংশোধন কৰিবলৈ Design System Aesthetics skill ব্যৱহাৰ কৰক
- agent লৈ "regenerate the theme with [specific changes]" বুলি সোধক
- সঠিক নিয়ন্ত্ৰণৰ বাবে theme.json পোনপটীয়াকৈ সম্পাদনা কৰক

## পৰৱৰ্তী পদক্ষেপসমূহ (Next Steps) {#next-steps}

Theme Builder onboarding সম্পূৰ্ণ হোৱাৰ পাছত:

1. **আপোনাৰ সাইট পৰীক্ষা কৰক**: নতুন থিমটো দেখাৰ বাবে আপোনাৰ সাইটলৈ যাওক
2. **ডিজাইন সংশোধন কৰক**: পৰিৱৰ্তনৰ বাবে Design System Aesthetics skill ব্যৱহাৰ কৰক
3. **বিষয়বস্তু যোগ কৰক**: আপোনাৰ সাইটৰ বিষয়বস্তু বনাওঁত আৰম্ভ কৰক
4. **ক্ষমতা সমূহ অন্বেষণ কৰক**: scaffold-block-theme আৰু activate-theme जस्ता আন agent ক্ষমতাৰ বিষয়ে জানক
