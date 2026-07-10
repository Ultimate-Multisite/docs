---
title: থিম বিল্ডার ক্ষমতা
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Abilities: Scaffold and Activate Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 introduces two powerful abilities that allow you to generate and deploy custom block themes directly from the chat interface.

## Overview {#overview}

The **scaffold-block-theme** এবং **activate-theme** abilities ব্যবহার করে এজেন্টরা যা করতে পারে:
- আপনার নির্দিষ্ট চাহিদা অনুযায়ী সম্পূর্ণ, ব্যবহারের জন্য প্রস্তুত ব্লক থিম তৈরি করা
- ম্যানুয়াল হস্তক্ষেপ ছাড়াই স্বয়ংক্রিয়ভাবে আপনার সাইটে থিম সক্রিয় করা
- নির্দেশিত ডিজাইন সিদ্ধান্তের মাধ্যমে একটি সুসংগঠিত ভিজ্যুয়াল পরিচয় তৈরি করা

## Scaffold Block Theme {#scaffold-block-theme}

**scaffold-block-theme** ability ব্যবহার করে একটি নতুন WordPress ব্লক থিম তৈরি করা হয়, যার মধ্যে নিম্নলিখিত বিষয়গুলো অন্তর্ভুক্ত থাকে:

- ডিজাইন টোকেন সহ `theme.json` কনফিগারেশন
- সাধারণ লেআউটের জন্য ব্লক টেমপ্লেট ফাইল
- কাস্টম ব্লক স্টাইল এবং ভ্যারিয়েশন
- থিম মেটাডেটা এবং সাপোর্ট ডিক্লারেশন

### How to Invoke {#how-to-invoke}

Superdav AI Agent-এর সাথে আপনার চ্যাটে, আপনি থিম তৈরির অনুরোধ করতে পারেন:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

এজেন্টটি যা করবে:
1. কথোপকথনের মাধ্যমে আপনার ডিজাইন পছন্দগুলো সংগ্রহ করবে
2. সম্পূর্ণ থিম কাঠামো তৈরি করবে
3. সমস্ত প্রয়োজনীয় থিম ফাইল তৈরি করবে
4. সক্রিয় করার জন্য থিমটি প্রস্তুত করবে

### Expected Output {#expected-output}

যখন এই ability টি সফলভাবে কার্যকর হবে, তখন আপনি দেখতে পাবেন:

- থিমটি scaffold করা হয়েছে তার নিশ্চিতকরণ
- থিমটির নাম এবং অবস্থান
- প্রয়োগ করা ডিজাইন টোকেনগুলোর সারাংশ (রঙ, টাইপোগ্রাফি, স্পেসিং)
- সক্রিয় করার জন্য প্রস্তুত স্ট্যাটাস

Example output:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activate Theme {#activate-theme}

**activate-theme** ability ব্যবহার করে আপনার সাইটটি একটি নতুন scaffold করা বা বিদ্যমান ব্লক থিমে পরিবর্তন করা যায়।

### How to Invoke {#how-to-invoke-1}

একটি থিম scaffold করার পরে, আপনি এটি তাৎক্ষণিকভাবে সক্রিয় করতে পারেন:

```
"Activate the Modern Agency theme"
```

অথবা যেকোনো বিদ্যমান থিম সক্রিয় করতে পারেন:

```
"Switch to the Twentytwentyfour theme"
```

### Expected Output {#expected-output-1}

সক্রিয়করণ সফল হলে:

- সক্রিয় থিমটির নিশ্চিতকরণ
- পূর্ববর্তী থিমটির নাম (রেফারেন্সের জন্য)
- সাইট URL যেখানে থিমটি এখন লাইভ
- থিম-নির্দিষ্ট কোনো সেটআপ নোট

Example output:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Workflow: Scaffold and Activate {#workflow-scaffold-and-activate}

একটি সাধারণ workflow উভয় ability-কে একত্রিত করে:

1. **থিম তৈরির অনুরোধ**: "Create a block theme for my SaaS landing page"
2. **এজেন্ট থিমটি scaffold করে**: ফাইল এবং ডিজাইন টোকেন তৈরি করে
3. **পর্যালোচনা এবং পরিমার্জন**: প্রয়োজনে ডিজাইন পরিবর্তন নিয়ে আলোচনা করা
4. **সক্রিয় করা**: "Activate the theme now"
5. **যাচাই করা**: নতুন ডিজাইনটি লাইভ আছে কিনা তা নিশ্চিত করতে আপনার সাইট ভিজিট করা

## Design Tokens and Customization {#design-tokens-and-customization}

Scaffolded থিমগুলো WordPress design tokens (via `theme.json`) ব্যবহার করে নিম্নলিখিত বিষয়গুলোর জন্য কাজ করে:

- **Colors**: Primary, secondary, accent, neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Padding, margin, gap scales
- **Borders**: Radius and width tokens
- **Shadows**: Elevation levels

এই টোকেনগুলো `theme.json`-এ কেন্দ্রীয়ভাবে রাখা থাকে, যা আপনাকে একটি ফাইল থেকেই আপনার পুরো ডিজাইন সিস্টেমটি সহজে অ্যাডজাস্ট করতে সাহায্য করে।

## Limitations and Notes {#limitations-and-notes}

- থিমগুলো `/wp-content/themes/`-এ scaffold করা হয় এবং এগুলোকে WordPress নামকরণের নিয়ম অনুসরণ করতে হয়
- সক্রিয় করার জন্য আপনার WordPress সাইটে উপযুক্ত অনুমতি (permissions) প্রয়োজন
- থিমগুলিতে কাস্টম PHP কোড খুব কম থাকে; জটিল কার্যকারিতার জন্য প্লাগইন ব্যবহার করুন
- ব্লক থিমগুলো WordPress 5.9 এবং তার পরবর্তী সংস্করণের সাথে সবচেয়ে ভালো কাজ করে

## Troubleshooting {#troubleshooting}

**Theme doesn't appear after scaffolding**
- যাচাই করুন যে থিম ডিরেক্টরিটি বিদ্যমান এবং এটির সঠিক অনুমতি আছে
- নিশ্চিত করুন যে `theme.json` একটি বৈধ JSON
- নিশ্চিত করুন যে থিমটির নাম বিদ্যমান থিমগুলোর সাথে কোনো সংঘাত সৃষ্টি করছে না

**Activation fails**
- নিশ্চিত করুন যে আপনার অ্যাডমিনিস্ট্রেটর অনুমতি আছে
- যাচাই করুন যে থিম ডিরেক্টরিটি WordPress দ্বারা পড়া যায় (readable)
- বিস্তারিত জানার জন্য WordPress error logs পর্যালোচনা করুন

**Design tokens not applying**
- যাচাই করুন যে `theme.json` সিনট্যাক্সটি সঠিক
- কোনো ক্যাশিং প্লাগইন থাকলে তা পরিষ্কার করুন (Clear any caching plugins)
- নিশ্চিত করুন যে আপনার WordPress সংস্করণটি আপনি যে টোকেনগুলো ব্যবহার করছেন তা সমর্থন করে

## Next Steps {#next-steps}

আপনার থিম সক্রিয় করার পরে, আপনি যা করতে পারেন:
- টাইপোগ্রাফি, রঙ এবং স্পেসিং পরিমার্জন করতে **Design System Aesthetics skill** ব্যবহার করা
- WordPress block editor-এর মাধ্যমে ব্যক্তিগত ব্লক স্টাইল কাস্টমাইজ করা
- থিমের `style.css` ফাইলে কাস্টম CSS যোগ করা
- নির্দিষ্ট পেজ প্রকারের জন্য কাস্টম ব্লক টেমপ্লেট তৈরি করা
