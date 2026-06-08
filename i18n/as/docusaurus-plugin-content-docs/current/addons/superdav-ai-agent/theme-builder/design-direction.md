---
title: নকশাৰ দিশা
sidebar_position: 2
_i18n_hash: 0a55afffd66ffad6930c7794d4074971
---
# Design Direction (নকশাৰ দিশা)

**Design Direction** ধাপটোৱে Theme Builder-এ সম্পূৰ্ণ থীমটো সৃষ্টি কৰাৰ আগতে আপোনাৰ থীমৰ ভিজুৱেল ডিজাইন (visual design) এটা পুনৰীক্ষণ কৰিবলৈ, উন্নত কৰিবলৈ আৰু চূড়ান্ত কৰিবলৈ সুযোগ দিয়ে।

## Overview (সামৰণ)

Discovery Interview সম্পূৰ্ণ কৰাৰ পিছত, Theme Builder-এ **desktop আৰু mobile preview rendering** সহ আপোনাৰ ডিজাইনৰ দিশা প্ৰদৰ্শিত কৰে। ই আপোনাক থীমটোত চূড়ান্ত সিদ্ধান্ত ল’বলৈ আগবাঢ়াৰ আগতে বিভিন্ন ডিভাইচত আপোনাৰ ডিজাইনটো কেনেকুৱে দেখিব বুলি স্পষ্টকৈ বুজাই দিয়ে।

## Design Direction Components (নকশাৰ দিশাৰ উপাদানসমূহ)

### 1. Color Palette (ৰংৰ প্যালেট)

আপোনাৰ থীমৰ ৰংৰ স্কীমটো, যাৰ ভিতৰত আছে:

- **Primary color** — বাটন, লিংক আৰু বিশেষ স্থানত ব্যৱহৃত মূল ব্ৰেণ্ড ৰং।
- **Secondary color** — বৈচিত্ৰ্যৰ বাবে সহায়ক ৰং।
- **Accent color** — গুৰুত্বপূৰ্ণ উপাদানসমূহক হাইলাইট কৰিবলৈ ব্যৱহৃত ৰং।
- **Neutral colors** — পটভূমি (background) আৰু পাঠ্যৰ বাবে ধূসৰ আৰু বগা ৰং।
- **Text color** — পঢ়িবলৈ সুবিধা হোৱাকৈ মূল পাঠ্যৰ ৰং।

### 2. Typography (অক্ষৰ শৈলী)

এইবোৰৰ বাবে ফণ্ট নিৰ্বাচন:

- **Heading font** — পৃষ্ঠাৰ শিৰোনাম আৰু অংশৰ হেডিং (section headers) ত ব্যৱহৃত।
- **Body font** — অনুচ্ছেদৰ পাঠ্য আৰু বিষয়বস্তুৰ বাবে ব্যৱহৃত।
- **Font sizes** — বিভিন্ন স্ক্ৰীণ আকাৰৰ বাবে responsive আকাৰ।
- **Line height** — পঢ়িবলৈ সুবিধা হোৱাকৈ শাৰীৰ মাজৰ ফাঁক।
- **Font weights** — bold, regular, আৰু light ধৰণৰ ভিন্নতা।

### 3. Layout and Spacing (লেআউট আৰু ফাঁক)

- **Container width** — বিষয়বস্তুৰ বাবে আটাইতকৈ বেছি আকাৰ।
- **Padding and margins** — উপাদানৰ চাৰিওফালে থকা ফাঁক।
- **Grid system** — responsive ডিজাইনৰ বাবে কলাম লেআউট।
- **Component spacing** — UI উপাদানসমূহৰ মাজৰ দূৰত্ব।

### 4. Visual Elements (ভিজুৱেল উপাদান)

- **Button styles** — primary, secondary, আৰু tertiary বাটনৰ ডিজাইন।
- **Card designs** — বিষয়বস্তুৰ ব্লকৰ বাবে লেআউট।
- **Icons** — আইকনৰ শৈলী আৰু আকাৰ।
- **Borders and shadows** — সূক্ষ্ম ভিজুৱেল গভীৰতা।
- **Hover effects** — ইন্টাৰেক্টিভ ষ্টেটৰ শৈলী।

## Preview Rendering (প্ৰিভিউ প্ৰদৰ্শন)

### Desktop Preview (ডেস্কটপ প্ৰিভিউ)

ডেস্কটপ প্ৰিভিউয়ে আপোনাৰ ডিজাইনটো সম্পূৰ্ণ আকাৰত (সাধাৰণতে ১২০০px বা তাতকৈ বেছি) দেখুৱায়:

- সম্পূৰ্ণ নেভিগেশ্বন মেনু।
- সকলো কলাম সহ সম্পূৰ্ণ লেআউট।
- ডাঙৰ টাইপগ্ৰাফি আৰু ফাঁক।
- সকলো ভিজুৱেল উপাদান সম্পূৰ্ণ আকাৰত।

### Mobile Preview (মোবাইল প্ৰিভিউ)

মোবাইল প্ৰিভিউয়ে আপোনাৰ ডিজাইনটো মোবাইল আকাৰত (সাধাৰণতে ৩৭৫px) দেখুৱায়:

- responsive নেভিগেশ্বন (hamburger menu)।
- একক-কলাম লেআউট।
- সামঞ্জস্য কৰা টাইপগ্ৰাফি আৰু ফাঁক।
- টাচ কৰিবলৈ সুবিধা হোৱাকৈ বাটনৰ আকাৰ।

### Responsive Breakpoints (responsive ব্ৰেকপইণ্ট)

Theme Builder-এ এই ব্ৰেকপইণ্টত প্ৰিভিউ প্ৰদৰ্শন কৰে:

| Device | Width | Preview |
|--------|-------|---------|
| **Mobile** | 375px | Portrait phone |
| **Tablet** | 768px | Landscape tablet |
| **Desktop** | 1200px | Full-width desktop |
| **Large Desktop** | 1920px | Ultra-wide display |

## Refining Your Design (আপোনাৰ ডিজাইন উন্নত কৰা)

### Making Adjustments (সংশোধন কৰা)

আপুনি তলত দিয়া ধৰণেৰে আপোনাৰ ডিজাইনৰ দিশা উন্নত কৰিব পাৰে:

1. **Adjusting colors** — প্যালেটে থকা যিকোনো ৰং সলনি কৰক।
2. **Changing fonts** — ভিন্ন টাইপফেছ (typefaces) বাছি লওক।
3. **Modifying spacing** — padding আৰু margins সলনি কৰক।
4. **Updating layout** — container width আৰু grid কলাম সলনি কৰক।
5. **Customizing elements** — বাটনৰ শৈলী, card design আদি সলনি কৰক।

### Preview Updates (প্ৰিভিউ আপডেট)

সংশোধনবোৰ তাৎক্ষণিকভাৱে প্ৰতিফলিত হয়:

- ডেস্কটপ প্ৰিভিউ তৎক্ষণাত আপডেট হয়।
- মোবাইল প্ৰিভিউ তৎক্ষণাত আপডেট হয়।
- সকলো responsive ব্ৰেকপইণ্ট আপডেট হয়।
- আপুনি পৰিৱৰ্তনসমূহ পৰীক্ষা কৰিবলৈ প্ৰিভিউৰ মাজত স্থানান্তৰ হ'ব পাৰে।

### Comparison View (তুলনাৰ দৃশ্য)

আপোনাৰ ডিজাইনৰ দিশাক তলৰ উপাদানসমূহৰ সৈতে তুলনা কৰক:

- **Original design** — কি কি সলনি হ'ল, সেয়া চাওক।
- **Competitor designs** — অনুপ্ৰেৰণাৰ স্থানসমূহৰ সৈতে তুলনা কৰক।
- **Previous versions** — পূৰ্বৰ ডিজাইনৰ দিশালৈ পুনৰ গ'লক।

## Design Direction Approval (নকশাৰ দিশা অনুমোদন)

আপুনি আপোনাৰ ডিজাইনটোত সন্তুষ্ট হোৱাৰ পিছত:

1. **Review both previews** — ডেস্কটপ আৰু মোবাইল দুয়োটা ভাল লাগিছে নে নাই, পৰীক্ষা কৰক।
2. **Check all colors** — contrast আৰু accessibility নিশ্চিত কৰক।
3. **Test typography** — সকলো আকাৰত পঢ়িবলৈ সুবিধা হয় নে নাই, পৰীক্ষা কৰক।
4. **Confirm layout** — ফাঁক আৰু alignment পৰীক্ষা কৰক।
5. **Approve design** — থীম সৃষ্টিৰ বাবে আগবাঢ়ক।

## Next Steps (পৰৱৰ্তী পদক্ষেপ)

আপুনি আপোনাৰ ডিজাইনৰ দিশা অনুমোদন কৰাৰ পিছত:

1. Theme Builder-এ আপোনাৰ সম্পূৰ্ণ থীমটো সৃষ্টি কৰে।
2. থীমটো আপোনাৰ WordPress সাইটত install কৰা হয়।
3. আপুনি WordPress customizer ব্যৱহাৰ কৰি আৰু অধিক customize কৰিব পাৰে।
4. [Hospitality Menus](./hospitality-menus.md) বা আন বৈশিষ্ট্যলৈ আগবাঢ়ক।

## Best Practices (ভাল অভ্যাস)

- **Test on real devices** — সম্ভৱ হ'লে সঁচাকৈৰ ফোন আৰু টাবলেট ব্যৱহাৰ কৰক।
- **Check readability** — নিশ্চিত কৰক যে সকলো আকাৰত পাঠ্য পঢ়িবলৈ সুবিধা হয়।
- **Verify contrast** — accessibilityৰ বাবে [Validate Palette Contrast](../abilities/validate-palette-contrast.md) ব্যৱহাৰ কৰক।
- **Consider performance** — গতিৰ বাবে ছবি আৰু ফণ্ট অপটিমাইজ কৰক।
- **Plan for content** — নিশ্চিত কৰক যে লেআউটটো আপোনাৰ সঁচাকৈৰ বিষয়বস্তুৰ সৈতে কাম কৰে।

## Troubleshooting (সমস্যা সমাধান)

### Preview Not Updating (প্ৰিভিউ আপডেট নহ'লে)

- পৃষ্ঠা Refresh কৰক।
- Browser cache Clear কৰক।
- অন্য Browser এটা চেষ্টা কৰক।
- Internet connection পৰীক্ষা কৰক।

### Colors Look Different (ৰং বেলেগ লাগলে)

- Monitor color settings পৰীক্ষা কৰক।
- বিভিন্ন ডিভাইচত চেষ্টা কৰক।
- accessibility tools ব্যৱহাৰ কৰি color contrast পৰীক্ষা কৰক।
- color blindness simulators বিবেচনা কৰক।

### Typography Issues (টাইপগ্ৰাফিৰ সমস্যা)

- ফণ্ট ফাইলবোৰ load হৈছে নে নাই, পৰীক্ষা কৰক।
- বিভিন্ন ব্ৰেকপইণ্টত ফণ্ট আকাৰ পৰীক্ষা কৰক।
- সঁচাকৈৰ বিষয়বস্তুৰে পৰীক্ষা কৰক।
- পঢ়িবলৈ সুবিধা হোৱাকৈ শাৰীৰ দৈৰ্ঘ্য (line length) বিবেচনা কৰক।

## Related Documentation (সম্পৰক ডকুমেন্টেশ্বন)

- [Discovery Interview](./discovery-interview.md) — ডিজাইনৰ তথ্য সংগ্ৰহ কৰক।
- [Hospitality Menus](./hospitality-menus.md) — structured menu page সৃষ্টি কৰক।
- [Validate Palette Contrast](../abilities/validate-palette-contrast.md) — color accessibility পৰীক্ষা কৰক।
- [Generate Logo SVG](../abilities/generate-logo-svg.md) — custom logo সৃষ্টি কৰক।
