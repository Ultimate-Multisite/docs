---
title: থিম বিল্ডার অনবোর্ডিং ফ্লো
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 একটি গাইড করা **Theme Builder onboarding flow** নিয়ে এসেছে, যা আপনার প্রাথমিক সেটআপের সময় একটি কাস্টম ব্লক থিম তৈরি করতে সাহায্য করে। এটি লেগ্যাসি Site Builder মোডকে একটি আরও নমনীয়, এজেন্ট-সহায়তা প্রাপ্ত পদ্ধতির সাথে প্রতিস্থাপন করে।

## Theme Builder Onboarding Flow কী? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow হলো একটি ইন্টারেক্টিভ সেটআপ উইজার্ড যা:

- ডিজাইন সংক্রান্ত সিদ্ধান্তগুলো (রঙ, টাইপোগ্রাফি, লেআউট) আপনাকে গাইড করে
- আপনার সাইটের ভিজ্যুয়াল আইডেন্টিটি পছন্দগুলো ধরে রাখে
- আপনার প্রয়োজন অনুযায়ী একটি কাস্টম ব্লক থিম তৈরি করে
- সম্পূর্ণ হওয়ার সাথে সাথে থিমটি স্বয়ংক্রিয়ভাবে সক্রিয় করে

এই ফ্লোটি **Setup Assistant agent** দ্বারা চালিত, যা স্পষ্ট প্রশ্ন করে এবং ধাপে ধাপে আপনার থিমটি তৈরি করে।

## Theme Builder Onboarding শুরু করা {#starting-the-theme-builder-onboarding}

### প্রথমবার সেটআপ (First-Run Setup) {#first-run-setup}

যখন আপনি নতুন WordPress ইনস্টলেশনে Superdav AI Agent প্রথমবার চালু করবেন, তখন আপনি এটি দেখতে পাবেন:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Theme Builder onboarding flow-এ প্রবেশ করতে **"Build a custom theme"** নির্বাচন করুন।

### ম্যানুয়াল অ্যাক্টিভেশন (Manual Activation) {#manual-activation}

আপনি যেকোনো সময় নিম্নলিখিত কমান্ডগুলো ব্যবহার করে Theme Builder onboarding শুরু করতে পারেন:

```
"Start the Theme Builder onboarding"
```

অথবা

```
"Help me create a custom theme"
```

## Onboarding ধাপগুলো {#the-onboarding-steps}

### ধাপ ১: মোড নির্বাচন (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent আপনার পছন্দ সম্পর্কে জিজ্ঞাসা করবে:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

বেশিরভাগ ব্যবহারকারীর জন্য **Guided mode** সুপারিশ করা হয়; এজেন্ট আপনার শিল্প এবং লক্ষ্যগুলির উপর ভিত্তি করে ডিজাইনের পরামর্শ দেয়।

### ধাপ ২: সাইট স্পেসিফিকেশন (Site Specification) {#step-2-site-specification}

আপনার সাইট সম্পর্কে আপনাকে জিজ্ঞাসা করা হবে:

- **Site purpose**: ই-কমার্স, ব্লগ, পোর্টফোলিও, SaaS, ইত্যাদি।
- **Target audience**: আপনার ভিজিটররা কারা?
- **Brand colors**: প্রাথমিক এবং মাধ্যমিক রঙ (অথবা "আমি নিশ্চিত নই")
- **Tone**: পেশাদার, সৃজনশীল, মজাদার, ন্যূনতম, ইত্যাদি।

এই তথ্যগুলি আপনার **site_brief** মেমরিতে সংরক্ষণ করা হয়, যা এজেন্টরা ভবিষ্যতের সেশনগুলিতে রেফারেন্স হিসেবে ব্যবহার করে।

### ধাপ ৩: ডিজাইন সিস্টেম সিদ্ধান্ত (Design System Decisions) {#step-3-design-system-decisions}

এজেন্ট আপনাকে ডিজাইন টোকেন নির্বাচনগুলির মাধ্যমে গাইড করে:

- **Typography**: ফন্ট ফ্যামিলি (serif, sans-serif, monospace) এবং সাইজ স্কেল
- **Color palette**: প্রাথমিক, মাধ্যমিক, অ্যাকসেন্ট এবং নিউট্রাল রঙ
- **Spacing**: কম্প্যাক্ট, নরমাল বা স্পেসিয়াস লেআউট
- **Motion**: অ্যানিমেশন এবং ট্রানজিশন (যদি প্রয়োজন হয়)

### ধাপ ৪: থিম জেনারেশন (Theme Generation) {#step-4-theme-generation}

Setup Assistant agent নিম্নলিখিত উপাদানগুলি দিয়ে আপনার কাস্টম ব্লক থিমটি তৈরি করে:

- `theme.json` যেখানে আপনার সমস্ত ডিজাইন টোকেন থাকে
- সাধারণ লেআউটের জন্য ব্লক টেমপ্লেট (হোমপেজ, ব্লগ, কন্টাক্ট)
- আপনার ডিজাইন সিস্টেমের সাথে মিল রেখে কাস্টম ব্লক স্টাইল
- থিম মেটাডেটা এবং WordPress সাপোর্ট ডিক্লারেশন

### ধাপ ৫: অ্যাক্টিভেশন এবং যাচাইকরণ (Activation and Verification) {#step-5-activation-and-verification}

থিমটি স্বয়ংক্রিয়ভাবে সক্রিয় হয়ে যায় এবং আপনি এটি দেখতে পাবেন:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

এরপর আপনি আপনার সাইটে গিয়ে যাচাই করতে পারেন যে থিমটি সঠিকভাবে দেখাচ্ছে কিনা।

## Site Specification এবং site_brief Memory {#site-specification-and-sitebrief-memory}

অনবোর্ডিং চলাকালীন, এজেন্ট আপনার সাইটের স্পেসিফিকেশন একটি **site_brief** মেমরি ক্যাটাগরিতে ধরে রাখে। এর মধ্যে রয়েছে:

- সাইট উদ্দেশ্য এবং লক্ষ্য
- টার্গেট অডিয়েন্স
- ব্র্যান্ড রঙ এবং টোন
- ডিজাইন পছন্দ
- কন্টেন্ট কাঠামো

### site_brief কেন গুরুত্বপূর্ণ {#why-sitebrief-matters}

ভবিষ্যৎ সেশনগুলিতে, এজেন্টরা আপনার site_brief ব্যবহার করে:

- পরিবর্তনের সময় ডিজাইন সামঞ্জস্য বজায় রাখতে
- আপনার সাইটের উদ্দেশ্যের সাথে সামঞ্জস্যপূর্ণ বৈশিষ্ট্যগুলি পরামর্শ দিতে
- প্রসঙ্গ-সচেতন সুপারিশ প্রদান করতে
- সেটআপ প্রশ্নগুলি পুনরাবৃত্তি এড়াতে

### আপনার site_brief দেখা {#viewing-your-sitebrief}

আপনি এজেন্টকে জিজ্ঞাসা করতে পারেন:

```
"Show me my site brief"
```

অথবা

```
"What do you know about my site?"
```

এজেন্ট আপনার সংরক্ষিত সাইট স্পেসিফিকেশনটি প্রদর্শন করবে।

## Onboarding-এর পরে কাস্টমাইজ করা {#customizing-after-onboarding}

Theme Builder onboarding সম্পূর্ণ হওয়ার পরে, আপনি যা করতে পারেন:

### Design System Aesthetics Skill ব্যবহার করা {#use-the-design-system-aesthetics-skill}

ডিজাইন পরিমার্জন করার জন্য অনুরোধ করুন:

```
"Refine the typography to be more modern"
```

অথবা

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** আপনাকে লক্ষ্যযুক্ত ডিজাইন আপডেটগুলির মাধ্যমে গাইড করে।

### theme.json সরাসরি এডিট করা {#edit-themejson-directly}

উন্নত ব্যবহারকারীদের জন্য, রঙ টোকেন, টাইপোগ্রাফি স্কেল, স্পেসিং ভ্যালু, বর্ডার এবং শ্যাডো সংজ্ঞাগুলি সামঞ্জস্য করতে `/wp-content/themes/[theme-name]/theme.json` এডিট করুন:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### কাস্টম ব্লক টেমপ্লেট তৈরি করা {#create-custom-block-templates}

হোমপেজ লেআউট, ব্লগ পোস্ট পেজ, প্রোডাক্ট পেজ, কন্টাক্ট ফর্মের জন্য কাস্টম টেমপ্লেট তৈরি করতে WordPress ব্লক এডিটর ব্যবহার করুন:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## তুলনা: পুরোনো বনাম নতুন Onboarding {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## সমস্যা সমাধান (Troubleshooting) {#troubleshooting}

**onboarding flow সম্পূর্ণ হয়নি**
- ফ্লোটি পুনরায় শুরু করুন: "Start the Theme Builder onboarding"
- নিশ্চিত করুন যে আপনার WordPress ইনস্টলেশনটি আপ টু ডেট আছে
- যাচাই করুন যে Setup Assistant agent সক্রিয় করা আছে

**আমার site_brief ব্যবহার করা হচ্ছে না**
- নিশ্চিত করুন যে এজেন্টের মেমরিতে অ্যাক্সেস আছে
- এজেন্টকে "recall my site brief" জিজ্ঞাসা করুন
- নিশ্চিত করুন যে আপনার সেটিংসে মেমরি সক্রিয় করা আছে

**তৈরি হওয়া থিমটি আমার পছন্দগুলির সাথে মিলছে না**
- এটি পরিমার্জন করতে Design System Aesthetics skill ব্যবহার করুন
- এজেন্টকে "regenerate the theme with [specific changes]" জিজ্ঞাসা করুন
- সঠিক নিয়ন্ত্রণের জন্য সরাসরি theme.json এডিট করুন

## পরবর্তী পদক্ষেপ (Next Steps) {#next-steps}

Theme Builder onboarding সম্পন্ন করার পরে:

1. **আপনার সাইট যাচাই করুন**: নতুন থিমটি দেখতে আপনার সাইটে যান
2. **ডিজাইন পরিমার্জন করুন**: অ্যাডজাস্টমেন্টের জন্য Design System Aesthetics skill ব্যবহার করুন
3. **কন্টেন্ট যোগ করুন**: আপনার সাইটের কন্টেন্ট তৈরি করা শুরু করুন
4. **ক্ষমতাগুলি অন্বেষণ করুন**: scaffold-block-theme এবং activate-theme-এর মতো অন্যান্য এজেন্ট ক্ষমতা সম্পর্কে জানুন
