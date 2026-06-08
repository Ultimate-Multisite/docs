---
title: স্থানৰ বৈশিষ্ট্য নিৰ্ধাৰণৰ দক্ষতা
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# সাইট স্পেসিফিকেশন স্কিল

**Site Specification skill** হৈছে আপোনাৰ সাইটৰ লক্ষ্য, শ্রোতা আৰু ব্ৰেণ্ডৰ পৰিচয় ধৰি ৰখাৰ এক সুসংগঠিত পদ্ধতি। এই তথ্যটো আপোনাৰ **site_brief** মেম’ৰীত সংৰক্ষিত কৰা হয়, যিটো agent-সকলে বিভিন্ন সেশনত ব্যৱহাৰ কৰে যাতে ধ্ৰুত আৰু পৰিস্থিতি-সচেতন সহায় প্ৰদান কৰিব পাৰে।

## Site Specification কি?

Site Specification হৈছে তলত দিয়া বিষয়সমূহ নথিভুক্ত কৰাৰ প্ৰক্ৰিয়া:

- **Site purpose**: আপোনাৰ সাইটটো কি কৰে আৰু ইয়াৰ অস্তিত্ব কিয়?
- **Target audience**: কোনে আপোনাৰ সাইটলৈ আহে আৰু তেওঁলোকক কি লাগে?
- **Brand identity**: আপোনাৰ ৰং, ধাৰা আৰু দৃশ্যমান শৈলী।
- **Business goals**: আপোনাৰ সাইটৰ বাবে সফলতা মানে কি?
- **Content structure**: আপোনাৰ সাইটটো কেনেকৈ সংগঠিত?

এই স্পেসিফিকেচনটোৱে আপোনাৰ **site_brief** হৈ পৰে, যি এটা স্থায়ী স্মৃতি যাৰ সহায়ত agent-সকলে আপোনাৰ সাইটৰ পৰিৱেশ বুজি পায়।

## Site Specification কিয় ব্যৱহাৰ কৰিব লাগে?

### সেশনৰ মাজত ধ্ৰুততা (Consistency Across Sessions)

site_brief নথকাৰ বাবে, নতুন সেশন আৰম্ভ কৰিবলগীয়া প্ৰতিবাৰ আপুনি আপোনাৰ সাইটৰ উদ্দেশ্য পুনৰ ব্যাখ্যা কৰিব লাগিব। site_brief থকাৰ বাবে, agent-সকলে তৎক্ষণাত বুজি পায়:

- আপোনাৰ সাইটৰ লক্ষ্য আৰু শ্রোতা
- আপোনাৰ ব্ৰেণ্ডৰ ৰং আৰু ধাৰা
- আপোনাৰ বিষয়বস্তুৰ গঠন (Content structure)
- আপোনাৰ ব্যৱসায়িক উদ্দেশ্যসমূহ

### উন্নত পৰামৰ্শ (Better Recommendations)

agent-সকলে আপোনাৰ site_brief ব্যৱহাৰ কৰি:

- আপোনাৰ সাইটৰ উদ্দেশ্যৰ সৈতে মিল থকা বৈশিষ্ট্যসমূহৰ পৰামৰ্শ দিয়ে।
- আপোনাৰ লক্ষ্যৰ সৈতে মিল থকা বিষয়বস্তুৰ গঠনৰ পৰামৰ্শ দিয়ে।
- আপোনাৰ ব্ৰেণ্ডৰ সৈতে সামঞ্জস্যপূৰ্ণ ডিজাইন প্ৰস্তাব কৰে।
- বেমানান নোহোৱা বৈশিষ্ট্যসমূহৰ পৰামৰ্শ দিয়াৰ পৰা বিৰত থাকে।

### দ্ৰুত শিক্ষণ (Faster Onboarding)

নতুন agent (বা নতুন সেশনৰ agent) সকলে স্পষ্টীকৰণমূলক প্ৰশ্ন কৰাৰ পৰিৱৰ্তে আপোনাৰ site_brief পঢ়ি সোনকালে কামত লাগিব পাৰে।

## Site Specification আৰম্ভ কৰা

### Theme Builder Onboardingৰ সময়ত

Site Specification skill টো **Theme Builder onboarding flow** চলাৰ সময়ত স্বয়ংক্রিয়ভাৱে আৰম্ভ হয়। Setup Assistant agent-এ প্ৰশ্ন কৰে আৰু আপোনাৰ site_brief নিৰ্মাণ কৰে।

### হাতেৰে আৰম্ভ কৰা (Manual Initiation)

আপুনি যেতিয়া ইচ্ছা site_specification আৰম্ভ কৰিব পাৰে:

```
"Let's define my site specification"
```

বা

```
"Help me create a site brief"
```

## Site Specification প্ৰক্ৰিয়া

### Step 1: Site Purpose (সাইটৰ উদ্দেশ্য)

agent-এ সোধে:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

আপুনি এটা categoria বা নিজৰ উদ্দেশ্য বৰ্ণনা কৰিব পাৰে।

### Step 2: Target Audience (লক্ষ্য শ্রোতা)

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Step 3: Brand Identity (ব্ৰেণ্ডৰ পৰিচয়)

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### Step 4: Business Goals (ব্যৱসায়িক লক্ষ্য)

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

### Step 5: Content Structure (বিষয়বস্তুৰ গঠন)

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## আপোনাৰ site_brief মেম’ৰি

Site Specification সম্পূৰ্ণ কৰাৰ পিছত, আপোনাৰ তথ্য **site_brief** হিচাপে আপোনাৰ agent মেম’ৰীত সংৰক্ষিত হয়। এইটো এটা সুসংগঠিত ৰেকৰ্ড য'ত নিম্নলিখিত তথ্য থাকে:

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## site_brief দেখা আৰু আপডেট কৰা

### আপোনাৰ site_brief দেখা

agent-ক সোধক:

```
"Show me my site brief"
```

বা

```
"What do you know about my site?"
```

agent-এ আপোনাৰ সংৰক্ষিত স্পেসিফিকেচনটো প্ৰদৰ্শন কৰিব।

### আপোনাৰ site_brief আপডেট কৰা

যদি আপোনাৰ সাইটৰ বিকাশ হয়, তেন্তে আপুনি ইয়াক আপডেট কৰিব পাৰে:

```
"Update my site brief: we're now targeting B2B customers"
```

বা

```
"Refresh my site specification"
```

এনে কৰিলে Site Specification skill টো আপোনাৰ বিদ্যমান তথ্যক আৰম্ভণি বিন্দু হিচাপে লৈ পুনৰ চলিব।

## agent-সকলে site_brief কেনেকৈ ব্যৱহাৰ কৰে

### ডিজাইনৰ পৰামৰ্শ (Design Recommendations)

আপুনি ডিজাইনৰ পৰিৱৰ্তনৰ বাবে সোধিলে, agent-সকলে আপোনাৰ site_brief ব্যৱহাৰ কৰে:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### বৈশিষ্ট্যৰ পৰামৰ্শ (Feature Suggestions)

agent-সকলে আপোনাৰ লক্ষ্যৰ সৈতে মিল থকা বৈশিষ্ট্যসমূহৰ পৰামৰ্শ দিয়ে:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### বিষয়বস্তুৰ গঠন (Content Structure)

agent-সকলে আপোনাৰ গঠনৰ ওপৰত ভিত্তি কৰি বিষয়বস্তুৰ সংগঠনৰ পৰামৰ্শ দিয়ে:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## উত্তম অভ্যাসসমূহ (Best Practices)

### সুনির্দিষ্ট হ'ব (Be Specific)

"general audience" বুলি কোৱাৰ সলনি, আপোনাৰ প্ৰকৃত শ্রোতাক বৰ্ণনা কৰক:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### নিয়মীয়াকৈ আপডেট কৰক (Update Regularly)

আপোনাৰ সাইটৰ বিকাশ হোৱাৰ লগে লগে, আপোনাৰ site_brief আপডেট কৰক:

- যেতিয়া আপুনি নতুন শ্রোতাৰ দিশে আগবাঢ়ে
- যেতিয়া আপুনি নতুন প্ৰডাক্ট লাইন যোগ কৰে
- যেতিয়া আপোনাৰ ব্ৰেণ্ডৰ পৰিচয় সলনি হয়
- যেতিয়া আপোনাৰ ব্যৱসায়িক লক্ষ্য সলনি হয়

### সামঞ্জস্যপূৰ্ণ শব্দভাণ্ডাৰ ব্যৱহাৰ কৰক (Use Consistent Terminology)

সেশনৰ সকলো সময়তে একে শব্দ ব্যৱহাৰ কৰক:

- ✓ সদায় "sustainable jewelry" কওক (নহয় "eco-friendly jewelry" আৰু "green products")
- ✓ আপোনাৰ শ্রোতাক সদায় একে ধৰণে উল্লেখ কৰক

### পৰিৱেশ যোগ কৰক (Include Context)

agent-সকলে আপোনাৰ সিদ্ধান্তবোৰ বুজিবলৈ সহায় কৰা পটভূমি প্ৰদান কৰক:

- "We're targeting professionals who value quality over price"
- "Our audience is tech-savvy and expects modern design"
- "We're a bootstrapped startup, so we need cost-effective solutions"

## Theme Builder Onboardingৰ সৈতে সম্পৰ্ক

Site Specification skill টো **Theme Builder onboarding flow** ত সংহত কৰা হৈছে। আপুনি onboarding সম্পূৰ্ণ কৰাৰ লগে লগে, আপুনি দিয়া তথ্যৰে site_brief স্বয়ংক্রিয়ভাৱে সৃষ্টি হয়।

যদি আপুনি নিজে কৰিব বিচাৰে তেন্তে আপুনি Site Specification স্বাধীনভাৱে চলিব পাৰে:

- প্ৰাৰম্ভিক সেটআপৰ পিছত আপোনাৰ স্পেসিফিকেচন সংশোধন কৰিবলৈ
- আপোনাৰ সাইট বিকাশ হোৱাৰ লগে লগে আপোনাৰ site brief আপডেট কৰিবলৈ
- Theme Builder আৰম্ভ কৰাৰ আগতে এটা বিশদ স্পেসিফিকেচন সৃষ্টি কৰিবলৈ

## সমস্যা সমাধান (Troubleshooting)

**মোৰ site_brief ব্যৱহাৰ হোৱা নাই**
- নিশ্চিত কৰক যে agent-এ মেম’ৰি অ্যাক্সেছ কৰিব পাৰিছে।
- agent-ক "recall my site brief" বুলি সোধক।
- পৰীক্ষা কৰক যে আপোনাৰ settings ত মেম’ৰি সক্ষম হৈ আছে।

**মই এটা নতুন site_brief লৈ পুনৰ আৰম্ভ কৰিব বিচাৰোঁ**
- agent-ক সোধক: "Clear my site brief and start fresh"
- তাৰ পিছত Site Specification পুনৰ চলোৱক।

**agent-এ এনে পৰামৰ্শ দিছে যি মোৰ site_brief লগত মিল নাই**
- agent-ক "review my site brief" বুলি সোধক।
- যদি আপোনাৰ site_brief পুৰণি হৈ গৈছে তেন্তে ইয়াক আপডেট কৰক।
- আপোনাৰ অনুৰোধত অধিক পৰিৱেশ যোগ কৰক।

## পৰৱৰ্তী পদক্ষেপ (Next Steps)

আপোনাৰ site specification সংজ্ঞায়িত কৰাৰ পিছত:

1. **Theme Builder ব্যৱহাৰ কৰক**: আপোনাৰ site_brief ওপৰত ভিত্তি কৰি এটা কাস্টম থীম সৃষ্টি কৰক।
2. **ডিজাইন সংশোধন কৰক**: বিশদ ডিজাইন কামৰ বাবে Design System Aesthetics skill ব্যৱহাৰ কৰক।
3. **বিষয়বস্তু পৰিকল্পনা কৰক**: বিষয়বস্তুৰ গঠনৰ পৰামৰ্শৰ বাবে agent-সকলক সোধক।
4. **বৈশিষ্ট্য নিৰ্মাণ কৰক**: আপোনাৰ ব্যৱসায়িক লক্ষ্যৰ সৈতে মিল থকা বৈশিষ্ট্যসমূহৰ বাবে অনুৰোধ কৰক।
