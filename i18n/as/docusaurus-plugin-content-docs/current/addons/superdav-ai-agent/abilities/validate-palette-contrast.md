---
title: প্যালেটৰ বৈসাদৃশ্য পৰীক্ষা কৰক
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# প্যালেট কনট্রাস্ট ভ্যালিডেট কৰা {#validate-palette-contrast}

**প্যালেট কনট্রাস্ট ভ্যালিডেট কৰা** সুবিধাটোৱে আপোনাৰ ডিজাইন প্যালেটৰ ৰঙৰ যোৰসমূহ WCAG (Web Content Accessibility Guidelines) মান অনুসৰি সঠিক আছে নে নাই, তাৰ পৰীক্ষা কৰে, তাৰ পিছতহে আপুনি ইয়াক আপোনাৰ থীমত ব্যৱহাৰ কৰিব পাৰে।

## Overview {#overview}

এই সুবিধাটোৱে নিশ্চিত কৰে যে আপোনাৰ সাইটৰ ৰঙৰ স্কীমটোৱে অ্যাক্সেসিবিলিটিৰ মানদণ্ড পূৰণ কৰে। ই টেক্সট আৰু ব্যাকগ্ৰাউণ্ড ৰঙৰ মাজৰ কনট্রাস্ট ৰেশিও (contrast ratio) ভ্যালিডেট কৰি এটা সহায় কৰে। ই এনে ৰঙৰ সংমিশ্ৰণক প্ৰতিৰোধ কৰে যিবোৰ দৃষ্টিহীন বা দৃষ্টিজনিত সমস্যা থকা ব্যৱহাৰকাৰীৰ বাবে পঢ়িবলৈ কঠিন হ'ব পাৰে।

## Input Format {#input-format}

এই সুবিধাটোৱে এটা ৰঙৰ প্যালেট ইনপুট হিচাপে লয়:

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### Parameters {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | `name` আৰু `hex` প্ৰ’পৰ্টি থকা ৰঙৰ বস্তুৰ (color objects) এটা তালিকা |
| `wcag_level` | string | No | WCAG মানদণ্ডৰ স্তৰ: "A", "AA" (default), বা "AAA" |
| `pairs_to_check` | array | No | ভ্যালিডেট কৰিবলগীয়া নিৰ্দিষ্ট ৰঙৰ যোৰ (উদাহৰণস্বৰূপে, `["primary-text", "background-text"]`) |

## WCAG Levels Checked {#wcag-levels-checked}

এই সুবিধাটোৱে WCAG মানদণ্ড অনুসৰি কনট্রাস্ট ৰেশিও ভ্যালিডেট কৰে:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normal Text** — ১৮pt তকৈ সৰু টেক্সট (বা ১৪pt বোল্ড)
- **Large Text** — ১৮pt বা তাতকৈ ডাঙৰ টেক্সট (বা ১৪pt বোল্ড বা তাতকৈ ডাঙৰ)

## Output Schema {#output-schema}

এই সুবিধাটোৱে এটা বিশদ ভ্যালিডেশ্যন প্ৰতিবেদন (validation report) ঘূৰাই দিয়ে:

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### Output Fields {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | সৰু প্যালেটটোৱে নিৰ্দিষ্ট WCAG স্তৰ পূৰণ কৰে নে নাই |
| `wcag_level` | string | কোন WCAG স্তৰটো পৰীক্ষা কৰা হৈছিল |
| `pairs` | array | প্ৰতিটো ৰঙৰ যোৰৰ বাবে বিশদ ফলাফল |
| `contrast_ratio` | number | গণনা কৰা কনট্রাস্ট ৰেশিও (1:1 ৰ পৰা 21:1 লৈ) |
| `status` | string | প্ৰতিটো যোৰৰ বাবে "pass" বা "fail" |
| `recommendations` | array | ন-প্ৰাপ্ত যোৰসমূহ উন্নত কৰাৰ বাবে পৰামৰ্শ |

## Usage Example {#usage-example}

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**Result:**
এই সুবিধাটোৱে সকলো ৰঙৰ সংমিশ্ৰণ পৰীক্ষা কৰি তলত দিয়া ফলাফল ঘূৰাই দিয়ে:
- ✅ Primary + Text: 5.2:1 ৰেশিও (WCAG AA পূৰণ কৰে)
- ✅ Background + Text: 12.1:1 ৰেশিও (WCAG AAA পূৰণ কৰে)
- সামগ্ৰিকভাৱে: WCAG AA ৰ সৈতে পূৰণশীল

## Integration with Theme Builder {#integration-with-theme-builder}

Theme Builder-ৰ ডিজাইন-দিৰ্꺛ীক্ষণ (design-direction) নিৰ্বাচন কৰোঁতে, Validate Palette Contrast সুবিধাটোৱে:

1. আপোনাৰ নিৰ্বাচিত ৰঙৰ প্যালেট বিশ্লেষণ কৰে
2. সকলো টেক্সট-ব্যাকগ্ৰাউণ্ড সংমিশ্ৰণ পৰীক্ষা কৰে
3. আপোনাৰ নিৰ্বাচিত WCAG স্তৰৰ সৈতে ভ্যালিডেট কৰে
4. মানদণ্ড পূৰণ নকৰা যোৰসমূহৰ বাবে পৰামৰ্শ দিয়ে
5. অ্যাক্সেসিবল নোহোৱা ৰঙৰ স্কীম ব্যৱহাৰ কৰা প্ৰতিৰোধ কৰে

## Best Practices {#best-practices}

- **AA স্তৰৰ পৰা আৰম্ভ কৰক** — WCAG AA হৈছে বেছিভাগ ওয়েবসাইটৰ বাবে মানক।
- **ব্যৱহাৰ কৰাৰ আগতে পৰীক্ষা কৰক** — ডিজাইন কৰাৰ আগতে আপোনাৰ প্যালেটটো ভ্যালিডেট কৰক।
- **সকলো সংমিশ্ৰণ পৰীক্ষা কৰক** — নিশ্চিত কৰক যে টেক্সট, লিংক, আৰু UI এলিমেন্টসমূহ সকলো মানদণ্ড পূৰণ কৰে।
- **ব্যৱহাৰকাৰীৰ পছন্দ বিবেচনা কৰক** — কিছুমান ব্যৱহাৰকাৰীৰ অধিক ৰঙৰ সংবেদনশীলতা থাকিব পাৰে।
- **কনট্রাস্ট চেকার ব্যৱহাৰ কৰক** — পৰীক্ষাৰ বাবে এই সুবিধাটোক ব্ৰাউজাৰ টুলছৰ সৈতে সংমিশ্ৰণ কৰক।

## Failing Pairs and Recommendations {#failing-pairs-and-recommendations}

যদি কোনো ৰঙৰ যোৰে ভ্যালিডেশ্যনত অনুগ্ৰহ কৰে, তেন্তে সুবিধাটোৱে পৰামৰ্শ দিয়ে:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "টেক্সট ৰঙক #ffffff লৈ পাতল কৰক (ৰেশিও 5.2:1 হ'ব)",
    "ব্যাকগ্ৰাউণ্ড ৰঙক #556b2f লৈ গাঢ় কৰক (ৰেশিও 4.8:1 হ'ব)",
    "#4a6b1f जस्तो আন এটা primary ৰঙ ব্যৱহাৰ কৰক (ৰেশিও 6.1:1 হ'ব)"
  ]
}
```

## Related Abilities {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — আপোনাৰ ভ্যালিডেট কৰা ৰঙৰ প্যালেটৰে লোগো সৃষ্টি কৰক
- [Create Menu](./create-menu.md) — অ্যাক্সেসিবল ৰঙৰে নেভিগেশ্যন বনাওক
