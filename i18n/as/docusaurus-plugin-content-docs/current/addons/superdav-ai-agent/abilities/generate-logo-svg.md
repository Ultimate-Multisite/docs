---
title: লোগো SVG বনাও
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# SVG লোগো সৃষ্টি কৰা

**Generate Logo SVG** ক্ষমতাৰ জৰিয়তে Theme Builder-ক আপোনাৰ WordPress সাইটত কাস্টম লোগো SVG সৃষ্টি কৰিবলৈ আৰু সেয়া স্বয়ংক্রিয়ভাৱে namespace-safe sanitisation কৰি এমবেড কৰিবলৈ সক্ষম কৰে।

## Overview

এই ক্ষমতাটোৱে আপোনাৰ সাইটৰ ব্ৰেণ্ডিং দিশ আৰু ডিজাইন পছন্দৰ ওপৰত ভিত্তি কৰি স্কেল কৰিব পৰা ভেক্টৰ গ্ৰাফিক্স (SVG) লোগো সৃষ্টি কৰে। সৃষ্টি কৰা SVG সমূহ স্বয়ংক্রিয়ভাৱে sanitise কৰা হয় যাতে সেয়া WordPress-ত ব্যৱহাৰ কৰিবলৈ নিৰাপদ হয় আৰু ইয়াৰ দৃশ্যমান অখণ্ডতা (visual integrity) বজাই ৰাখিব পাৰে।

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | লোগো সৃষ্টি কৰিবলগীয়া সাইটৰ নাম |
| `style` | string | Yes | ডিজাইন শৈলী (উদাহৰণস্বৰূপে, "modern", "classic", "minimalist", "playful") |
| `colors` | array | No | লোগোত ব্যৱহাৰ কৰিবলগীয়া হেক্স ৰঙৰ কোডৰ তালিকা (উদাহৰণস্বৰূপে, `["#678233", "#ffffff"]`) |
| `width` | number | No | পিক্সেলত SVGৰ চওড়া (default: 200) |
| `height` | number | No | পিক্সেলত SVGৰ উচ্চতা (default: 200) |
| `include_text` | boolean | No | লোগোত সাইটৰ নাম টেক্সট হিচাপে অন্তৰ্ভুক্ত কৰিব নে নাই (default: true) |

## Output Format

এই ক্ষমতাটোৱে তলত দিয়া গঠনৰ সৈতে এটা SVG string फिৰম কৰে:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG Sanitisation Behaviour

সৃষ্ট SVG সমূহ স্বয়ংক্রিয় namespace-safe sanitisation-ৰ অধীনত যায় যাতে:

- **Unsafe attributes আঁতৰাই দিয়া হয়** — ইভেন্ট handler, script, আৰু সম্ভৱতঃ বিপদজনক attributes আঁতৰাই দিয়ে।
- **Namespaces বজাই ৰখা হয়** — সঠিক ৰেণ্ডাৰিংৰ বাবে SVG namespaces (xmlns, xlink) বজাই ৰাখে।
- **Structure validate কৰা হয়** — ই নিশ্চিত কৰে যে SVG-এ W3C মানদণ্ড অনুসৰণ কৰে।
- **Entities encode কৰা হয়** — টেক্সট সামগ্ৰীত বিশেষ ক্যৰেক্টাৰসমূহ সঠিকভাৱে escape কৰে।
- **External references আঁতৰাই দিয়া হয়** — বাহ্যিক stylesheet আৰু image references আঁতৰাই দিয়ে।

এনেক কৰাৰ ফলত SVG-টো WordPress-ত এমবেড কৰিবলৈ নিৰাপদ হয় আৰু ইয়াৰ বাবে কোনো এটা অতিৰিক্ত sanitisationৰ প্ৰয়োজন নহয়।

## Usage Example

**Prompt:**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**Result:**
এই ক্ষমতাটোৱে এটা SVG লোগো সৃষ্টি কৰে যিটো:
- "CloudSync" সাইটৰ নাম অন্তৰ্ভুক্ত কৰে
- নিৰ্দিষ্ট নীল আৰু শুভ্ৰ ৰঙৰ স্কীম ব্যৱহাৰ কৰে
- আধুনিক ডিজাইন নীতি অনুসৰণ কৰে
- স্বয়ংক্রিয়ভাৱে sanitize কৰা হৈ নিৰ্মাণ আৰু ব্যৱহাৰৰ বাৰী সাজু।

## Integration with Theme Builder

Theme Builder-ৰ ডিজাইন-দিশা নিৰ্বাচন ব্যৱহাৰ কৰোঁতে, Generate Logo SVG ক্ষমতাটোৱে:

1. আপোনাৰ ডিজাইন দিশ আৰু ৰঙৰ প্যালেট বিশ্লেষণ কৰে।
2. আপোনাৰ পছন্দৰ সৈতে মিল থকা এটা কাস্টম SVG লোগো সৃষ্টি কৰে।
3. স্বয়ংক্রিয়ভাৱে লোগোটি আপোনাৰ সাইটৰ header/branding area ত এমবেড কৰে।
4. SVG-টোক WordPress media ত এটা কাস্টম লোগো হিচাপে সংৰক্ষণ কৰে।

## Best Practices

- **স্পষ্ট শৈলী পছন্দ প্ৰদান কৰক** — আপুনি কি ধৰণৰ ডিজাইন বিচাৰে (modern, classic, playful, ইত্যাদি) সেয়া বৰ্ণনা কৰক।
- **ৰঙ নিৰ্ধাৰণ কৰক** — সামঞ্জস্যৰ বাবে আপোনাৰ ব্ৰেণ্ডৰ ৰঙ অন্তৰ্ভুক্ত কৰক।
- **Rendering পৰীক্ষা কৰক** — বিভিন্ন স্ক্ৰীণ আকাৰত লোগোটো সঠিকভাৱে প্ৰদৰ্শন হয় নে নাই তাৰ পৰীক্ষা কৰক।
- **আৰু কাস্টমাইজ কৰক** — আকাৰ আৰু স্থান সলনি কৰিবলৈ WordPress-ৰ লোগো কাস্টমাইজেশ্যন টুল ব্যৱহাৰ কৰক।

## Limitations

- SVG লোগোবোৰ স্থিৰ গ্ৰাফিক্স হিচাপে সৃষ্টি হয় (এনেকটিছ নহয়)।
- বহু উপাদান থকা জটিল লোগোবোৰক হাতেৰে সংশোধন কৰাৰ প্ৰয়োজন হ'ব পাৰে।
- কাস্টম ফণ্ট সমৰ্থন কৰা নহয়; টেক্সটৰ বাবে সিস্টেম ফণ্ট ব্যৱহাৰ কৰা হয়।
- অতি ডাঙৰ বা অতি সৰু dimension-এ গুণগত মানত প্ৰভাৱ পেলাব পাৰে।

## Related Abilities

- [Validate Palette Contrast](./validate-palette-contrast.md) — সহজলভ্যতাৰ বাবে ৰঙৰ বৈসাদৃশ্য (color contrast) পৰীক্ষা কৰক।
- [Create Menu](./create-menu.md) — আপোনাৰ সাইটৰ বাবে নেভিগেশ্যন মেনু সৃষ্টি কৰক।
