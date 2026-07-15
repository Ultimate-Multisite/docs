---
title: মেনু সৃষ্টি কৰক
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# মেনু সৃষ্টি কৰা

**Create Menu** ক্ষমতা ব্যৱহাৰ কৰি পেজৰ টাইটেলৰ পৰা পৃথক নেভিগেশ্বন লেবেলৰ সমৰ্থনসহ WordPress নেভিগেশ্বন মেনু বনাওঁ।

## সামৰণ (Overview) {#overview}

এই ক্ষমতাটোৱে সাধাৰণ মেনু সৃষ্টিৰ কাৰ্য্যক্ষমতাক এটা `navigation_label` প্যারামিটার নিৰ্ধাৰণ কৰাৰ ক্ষমতাৰ সৈতে বঢ়াই তোলে। ই আপোনাক এনে মেনু বনাওঁ দিব য'ত নেভিগেশ্বনত দেখুওৱা লেবেলটো পেজৰ টাইটেলৰ পৰা বেলেগ হ'ব পাৰে, যাৰ ফলত সাইটৰ গঠন আৰু ব্যৱহাৰকাৰীৰ অভিজ্ঞতাৰ ক্ষেত্ৰত অধিক নমনীয়তা পোৱা যায়।

## প্যারামিটারসমূহ (Parameters) {#parameters}

| প্যারামিটার | ধৰণ (Type) | প্ৰয়োজনীয় (Required) | বৰ্ণনা (Description) |
|-----------|------|----------|-------------|
| `name` | string | Yes | মেনুৰ নাম, উদাহৰণস্বৰূপে `Primary Navigation` |
| `location` | string | No | এই মেনুটি কোনেৰে স্থানত (Theme location) যোগ কৰিব, উদাহৰণস্বৰূপে `primary` |
| `navigation_label` | string | No | নেভিগেশ্বনত দেখুওৱা লেবেল (পেজৰ টাইটেলৰ পৰা পৃথক) |

## পুনৰীমান (Return Value) {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## নেভিগেশ্বন লেবেল বনাম পেজৰ টাইটেল (Navigation Label vs Page Title) {#navigation-label-vs-page-title}

`navigation_label` প্যারামিটারটোৱে আপোনাক আভ্যন্তৰীণ মেনুৰ নামক ব্যৱহাৰকাৰীসকলক দেখুওৱা লেবেলৰ পৰা পৃথক কৰিবলৈ দিয়ে:

- **`name`** — WordPress দ্বাৰা ব্যৱহৃত আভ্যন্তৰীণ মেনু চিনাক্তকৰক (উদাহৰণস্বৰূপে, "Primary Navigation")
- **`navigation_label`** — নেভিগেশ্বনত সাইটৰ ভ্ৰমণকাৰীসকলক দেখুওৱা লেবেল (উদাহৰণস্বৰূপে, "Main Menu")

এইটো ক'ত ব্যৱহাৰিক:
- যেতিয়া আপোনাৰ আভ্যন্তৰীণ নামাকৰণ প্ৰথা ব্যৱহাৰকাৰীৰ আগৰ লেবেলৰ পৰা বেলেগ হয়
- যেতিয়া আপুনি এডমিন প্যানেলতকৈ নেভিগেশ্বনত সৰু লেবেল বিচাৰে
- যেতিয়া আপুনি বিভিন্ন লেবেলদৈৰ্ঘ্যৰ সৈতে বহু ভাষাৰ সমৰ্থন কৰিবলগীয়া হয়
- যেতিয়া আপুনি নিৰ্দিষ্ট অঞ্চল বা ব্যৱহাৰকাৰী গোটৰ বাবে মেনু বনাওঁ

## ব্যৱহাৰৰ উদাহৰণ (Usage Examples) {#usage-examples}

### উদাহৰণ ১: নেভিগেশ্বন লেবেলসহ সৰল মেনু (Simple Menu with Navigation Label) {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**Result:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### উদাহৰণ ২: নিৰ্দিষ্ট থীম স্থানৰ বাবে মেনু (Menu for Specific Theme Location) {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**Result:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Theme Builder লগত সংহতি (Integration with Theme Builder) {#integration-with-theme-builder}

Theme Builder ব্যৱহাৰ কৰোঁতে, Create Menu ক্ষমতাটোৱে:

1. উপলব্ধ থীম মেনু স্থানসমূহ স্বয়ংক্ৰিয়ভাৱে চিনাক্ত কৰে
2. আপোনাৰ ডিজাইনৰ বাবে উপযুক্ত নেভিগেশ্বন লেবেলসহ মেনু বনাওঁ
3. মেনুসমূহ সঠিক থীম স্থানত যোগ কৰে
4. সৃষ্টি কৰাৰ পিছতো মেনু আইটেম যোগ কৰাৰ সমৰ্থন কৰে

## সম্পৰ্কিত ক্ষমতা (Related Abilities) {#related-abilities}

- **`add_menu_item`** — বিদ্যমান মেনুত আইটেম যোগ কৰে
- **`update_menu`** — মেনুৰ নাম সলনি কৰে বা ইয়াক আন এটা থীম স্থানত পুনৰ যোগ কৰে
- **`delete_menu`** — আপোনাৰ সাইটৰ পৰা এটা মেনু আঁতৰায়

## ভাল অভ্যাস (Best Practices) {#best-practices}

- **স্পষ্ট নেভিগেশ্বন লেবেল ব্যৱহাৰ কৰক** — লেবেলবোৰ ব্যৱহাৰকাৰীৰ বাবে সংক্ষিপ্ত আৰু বৰ্ণনামূলক ৰাখক
- **থীম স্থানৰ সৈতে মিল যোগ কৰক** — সঠিক প্ৰদৰ্শনীৰ বাবে মেনুসমূহ সঠিক থীম স্থানত যোগ কৰক
- **মেনুৰ গঠন পৰিকল্পনা কৰক** — আইটেম সৃষ্টি কৰাৰ আগতে আপোনাৰ মেনুৰ অনুক্ৰম (hierarchy) নিৰ্ধাৰণ কৰক
- **প্ৰতিক্ৰিয়াশীলতা পৰীক্ষা কৰক** — মোবাইল ডিভাইচত মেনু সঠিকভাৱে প্ৰদৰ্শিত হয় নে তাৰ পৰীক্ষা কৰক
- **লেবেল স্থানীয়কৰণ কৰক** — বিভিন্ন ভাষাৰ সংস্কৰণৰ বাবে বিভিন্ন নেভিগেশ্বন লেবেল ব্যৱহাৰ কৰক

## সীমাবদ্ধতা (Limitations) {#limitations}

- নেভিগেশ্বন লেবেল কেৱল প্ৰদৰ্শনীৰ বাবেহে; আভ্যন্তৰীণ `name` টোৱে এতিয়াও WordPress চিনাক্তকৰণৰ বাবে ব্যৱহাৰ হয়
- থীম সমৰ্থন ভিন্ন হয়; সকলো থীময়ে সকলো মেনু স্থান সমৰ্থন নকৰে
- মেনু আইটেমবোৰ মেনু সৃষ্টি কৰাৰ পিছত পৃথকভাৱে যোগ কৰিব লাগিব
- নেভিগেশ্বন লেবেল সলনি কৰিবলৈ মেনু আপডেট কৰিব লাগিব

## সম্পৰ্কিত ক্ষমতা (Related Abilities) {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — আপোনাৰ সাইটৰ হেডাৰৰ বাবে লোগো সৃষ্টি কৰে
- [Validate Palette Contrast](./validate-palette-contrast.md) — সহজলভ্য ৰং স্কীম নিশ্চিত কৰে
