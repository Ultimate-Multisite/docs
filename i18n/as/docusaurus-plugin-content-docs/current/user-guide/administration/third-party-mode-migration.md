---
title: ত্ৰিটিয়-পাৰ্টি মোড মাইগ্ৰেচন
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Third-Party Mode Migration

Superdav AI Agent v1.12.0 ले third-party ক্ষমতা কেনেকৈ ব্যৱহাৰ কৰা হয়, সেই বিষয়ে সলনি কৰিছে। **Third-party mode এতিয়া স্বয়ংক্ৰিয়ভাৱে (auto) সেট হৈ থাকে**, যাৰ ফলত WordPress 7.0+ ত কোনো হাতেৰে কনফিগাৰেচন নকৰাকৈয়ে native WordPress Abilities API ইন্টিগ্ৰেচন সম্ভৱ হৈছে।

## কি সলনি হ'ল? {#what-changed}

### v1.12.0 পূৰ্বে {#before-v1120}

Third-party ক্ষমতা ব্যৱহাৰ কৰিবলৈ হাতেৰে কনফিগাৰেচন কৰিবলগীয়া হৈছিল:

- আপুনি স্পষ্টকৈ "third-party mode" সক্ষম কৰিব লাগিছিল
- ক্ষমতা এটা custom registry ৰ পৰা লোড কৰা হৈছিল
- WordPress Abilities API লগত ইন্টিগ্ৰেচনটো ঐচ্ছিক আছিল
- Legacy mode আছিল ডিফল্ট

### v1.12.0 পাছত {#after-v1120}

Third-party ক্ষমতা স্বয়ংক্রিয়ভাৱে কাম কৰে:

- Third-party mode ডিফল্টভাৱে "auto" হয়
- ক্ষমতাগুলি WordPress Abilities API লগত natively ইন্টিগ্ৰেট হয়
- WordPress 7.0+ ত কোনো হাতেৰে কনফিগাৰেচনৰ প্ৰয়োজন নাই
- পুৰণি WordPress সংস্কৰণৰ বাবে Legacy mode এতিয়াও উপলব্ধ

## কাৰ বাবে প্ৰভাৱিত? {#who-is-affected}

### নতুন ইনষ্টলেচন (WordPress 7.0+) {#new-installations-wordpress-70}

**কোনো কাৰ্য্যৰ প্ৰয়োজন নাই।** Third-party mode স্বয়ংক্রিয়ভাৱে "auto" সেট হয়, আৰু ক্ষমতাগুলি ব্যৱহাৰ কৰিবলৈ সাজু থাকে।

### থকা ইনষ্টলেচন (Existing Installations) {#existing-installations}

**আপোনাৰ সেটিংবোৰ সংৰক্ষিত।** যদি আপুনি ব্যৱহাৰ কৰি আছিল:

- **Legacy mode**: আপুনি Legacy mode তই থাকিব (কোনো সলনি নাই)
- **Manual third-party mode**: আপুনি Manual mode তই থাকিব (কোনো সলনি নাই)
- **Auto mode**: আপুনি Auto mode লৈ যাব (কোনো সলনি নাই)

### 7.0 পূৰৰ WordPress সংস্কৰণ {#wordpress-versions-before-70}

**Legacy mode এতিয়াও উপলব্ধ।** যদি আপুনি WordPress 6.x বা তাৰ পূৰ্বে কোনো সংস্কৰণত আছে:

- Third-party mode ডিফল্টভাৱে "legacy" হয়
- যদি চাব লাগে তেন্তে আপুনি হাতেৰে third-party mode সক্ষম কৰিব পাৰে
- native Abilities API ব্যৱহাৰ কৰিবলৈ WordPress 7.0+ লৈ আপগ্রেড কৰক

## মোডবোৰ বুজি লোৱা {#understanding-the-modes}

### Auto Mode (নতুন ডিফল্ট) {#auto-mode-new-default}

**Auto mode** ले native WordPress Abilities API ইন্টিগ্ৰেচন ব্যৱহাৰ কৰে:

- ক্ষমতাগুলি WordPress hooks যোগেৰে ৰেজিষ্টাৰ কৰা হয়
- WordPress 7.0+ Abilities API লগত সম্পূৰ্ণ সামঞ্জস্যতা
- third-party ক্ষমতাৰ স্বয়ংক্রিয় আৱিষ্কাৰ (Automatic discovery)
- কোনো হাতেৰে কনফিগাৰেচনৰ প্ৰয়োজন নাই

**কहिले ব্যৱহাৰ কৰিব**: WordPress 7.0+ আৰু third-party ক্ষমতা থকা সময়ত

### Manual Mode {#manual-mode}

**Manual mode** লৈ স্পষ্ট কনফিগাৰেচনৰ প্ৰয়োজন:

- আপুনি কোন third-party ক্ষমতা লোড কৰিব লাগে, সেয়া নিৰ্ধাৰণ কৰে
- পৰীক্ষা কৰা বা নিৰ্দিষ্ট ক্ষমতা লোড কৰাৰ বাবে উপকাৰী
- কনফিগাৰেচন ফাইল সম্পাদনা কৰিব লাগিব
- অধিক নিয়ন্ত্ৰণ, কিন্তু অধিক সেটআপ

**কहिले ব্যৱহাৰ কৰিব**: পৰীক্ষা কৰা, নিৰ্দিষ্ট ক্ষমতা লোড কৰা, বা custom কনফিগাৰেচনৰ বাবে

### Legacy Mode {#legacy-mode}

**Legacy mode** ले পুৰণি third-party ক্ষমতা ব্যৱস্থা ব্যৱহাৰ কৰে:

- custom ability registry (WordPress Abilities API নহয়)
- পুৰণি WordPress সংস্কৰণৰ লগত সামঞ্জস্যপূৰ্ণ
- কোনো native WordPress ইন্টিগ্ৰেচন নাই
- Deprecated, কিন্তু এতিয়াও সমৰ্থন কৰা হয়

**কहिले ব্যৱহাৰ কৰিব**: WordPress 6.x বা তাৰ পূৰ্বে, বা যেতিয়া আপোনাৰ Legacy compatibility লাগে

## আপোনাৰ বৰ্তমান মোড পৰীক্ষা কৰা {#checking-your-current-mode}

### Admin Panel যোগেৰে {#via-admin-panel}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** লৈ যাওক
2. **Third-Party Mode** সেটিংটো বিচাৰক
3. আপুনি আপোনাৰ বৰ্তমান মোড আৰু ইয়াক সলনি কৰাৰ বিকল্প দেখিব।

### Code যোগেৰে {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', বা 'legacy'
```

## আপোনাৰ মোড সলনি কৰা {#changing-your-mode}

### Auto Mode লৈ যোৱা {#switch-to-auto-mode}

যদি আপুনি WordPress 7.0+ ত আছে আৰু auto mode ব্যৱহাৰ কৰিব বিচাৰে:

1. **Superdav AI Agent** → **Settings** লৈ যাওক
2. **Third-Party Mode** বিচাৰক
3. **Auto (WordPress Abilities API)** বাছক
4. **Save** ক্লিক কৰক

Superdav AI Agent স্বয়ংক্রিয়ভাৱে third-party ক্ষমতা আৱিষ্কাৰ কৰি ৰেজিষ্টাৰ কৰিব।

### Manual Mode লৈ যোৱা {#switch-to-manual-mode}

যদি আপুনি কোন ক্ষমতা লোড কৰিব লাগে, সেয়া হাতেৰে নিয়ন্ত্ৰণ কৰিব বিচাৰে:

1. **Superdav AI Agent** → **Settings** লৈ যাওক
2. **Third-Party Mode** বিচাৰক
3. **Manual** বাছক
4. **Save** ক্লিক কৰক
5. কোন ক্ষমতা লোড কৰিব লাগে, সেয়া নিৰ্ধাৰণ কৰিবলৈ আপোনাৰ কনফিগাৰেচন ফাইল সম্পাদনা কৰক

### Legacy Mode লৈ যোৱা {#switch-to-legacy-mode}

যদি আপোনাৰ Legacy compatibility লাগে:

1. **Superdav AI Agent** → **Settings** লৈ যাওক
2. **Third-Party Mode** বিচাৰক
3. **Legacy** বাছক
4. **Save** ক্লিক কৰক

## Auto Mode-ৰ সুবিধা {#benefits-of-auto-mode}

### স্বয়ংক্রিয় আৱিষ্কাৰ (Automatic Discovery) {#automatic-discovery}

ক্ষমতাগুলি স্বয়ংক্রিয়ভাৱে তলৰ পৰা আৱিষ্কৃত হয়:

- ইনষ্টল কৰা plugins
- active theme
- must-use plugins
- drop-in plugins

হাতেৰে কোনো ৰেজিষ্ট্ৰেচনৰ প্ৰয়োজন নাই।

### Native ইন্টিগ্ৰেচন {#native-integration}

ক্ষমতাগুলি WordPress Abilities API লগত ইন্টিগ্ৰেট হয়:

- WordPress core লগত সামঞ্জস্যপূৰ্ণ
- WordPress admin লগত কাম কৰে
- Abilities API ব্যৱহাৰ কৰা আন plugins লগত সামঞ্জস্যপূৰ্ণ
- WordPress বিকশিত হোৱাৰ লগে লগে ভৱিষ্যতৰ বাবে উপযুক্ত

### সহজ ব্যৱস্থাপনা (Simplified Management) {#simplified-management}

- সম্পাদনা কৰিবলগীয়া কোনো কনফিগাৰেচন ফাইল নাই
- কোনো হাতেৰে ক্ষমতা ৰেজিষ্টাৰ কৰাৰ প্ৰয়োজন নাই
- Ability Visibility controls স্বয়ংক্রিয়ভাৱে কাম কৰে
- Admin notices ত আপোনাক শ্রেণীবদ্ধ নোহোৱা ক্ষমতাৰ বিষয়ে সতর্ক কৰে

### উন্নত কাৰ্য্যক্ষমতা (Better Performance) {#better-performance}

- ক্ষমতাগুলি cache কৰা হয়
- চাহিদা অনুসৰি lazy-load কৰা হয়
- WordPress 7.0+ ৰ বাবে অনুকূল কৰা হৈছে

## Migration Path {#migration-path}

### যদি আপুনি WordPress 6.x ত আছে {#if-youre-on-wordpress-6x}

1. **WordPress 7.0+ লৈ আপগ্রেড কৰক** (যিমান সোনকালে সম্ভৱ)
2. **Superdav AI Agent** लाई v1.12.0+ লৈ আপডেট কৰক
3. **third-party mode लाई Auto লৈ সলনি কৰক** (ঐচ্ছিক; legacy mode এতিয়াও কাম কৰে)
4. সঠিক access control নিশ্চিত কৰিবলৈ **ability visibility** পৰীক্ষা কৰক

### যদি আপুনি WordPress 7.0+ ত আছে {#if-youre-on-wordpress-70}

1. **Superdav AI Agent** लाई v1.12.0+ লৈ আপডেট কৰক
2. **third-party mode Auto সেট হৈ আছে বুলি পৰীক্ষা কৰক** (এইটো ডিফল্টভাৱে হ'ব লাগে)
3. সঠিক access control নিশ্চিত কৰিবলৈ **ability visibility** পৰীক্ষা কৰক
4. নিশ্চিত কৰিবলৈ **third-party ক্ষমতাগুলি পৰীক্ষা কৰক** যে तिनीहरू কাম কৰিছে

## সমস্যা সমাধান (Troubleshooting) {#troubleshooting}

### auto mode ত ক্ষমতা লোড নহ'ল {#abilities-arent-loading-in-auto-mode}

- পৰীক্ষা কৰক যে আপুনি WordPress 7.0+ ত আছে
- নিশ্চিত কৰক যে third-party mode "Auto" সেট কৰা হৈছে
- পৰীক্ষা কৰক যে ক্ষমতা যোগ কৰা plugin active আছে
- ৰেজিষ্ট্ৰেচনৰ ভুলৰ বাবে WordPress error logs পৰীক্ষা কৰক

### মই legacy mode ৰাখিব বিচাৰোঁ {#i-want-to-keep-legacy-mode}

- **Settings** → **Third-Party Mode** লৈ যাওক
- **Legacy** বাছক
- **Save** ক্লিক কৰক
- Legacy mode কাম কৰি থাকিব

### মোৰ custom ক্ষমতা দেখা নহ'ল {#my-custom-abilities-arent-showing}

- পৰীক্ষা কৰক যে तिनीहरू WordPress hooks যোগেৰে ৰেজিষ্টাৰ কৰা হৈছে
- পৰীক্ষা কৰক যে तिनीहरू Abilities API সঠিকভাৱে প্ৰয়োগ কৰিছে
- WordPress error logs পৰীক্ষা কৰক
- সকলো ৰেজিষ্টাৰ কৰা ক্ষমতা দেখাৰ বাবে **Ability Visibility** admin page ব্যৱহাৰ কৰক

### মই "unclassified ability" notices পাই আছো {#im-getting-unclassified-ability-notices}

- এইটো নতুন third-party ক্ষমতাৰ বাবে সাধাৰণ।
- admin notice ত ইয়াক পৰীক্ষা কৰি শ্রেণীবদ্ধ কৰক।
- শ্রেণীবদ্ধকৰণৰ বিৱৰণৰ বাবে **Ability Visibility** চাওক

## Backward Compatibility {#backward-compatibility}

### থকা কনফিগাৰেচন {#existing-configurations}

যদি আপোনাৰ থকা third-party ক্ষমতা কনফিগাৰেচন আছে:

- **Legacy mode**: আপোনাৰ কনফিগাৰেচন কাম কৰি থাকিব
- **Manual mode**: আপোনাৰ কনফিগাৰেচন কাম কৰি থাকিব
- **Auto mode**: আপোনাৰ কনফিগাৰেচন উপেক্ষা কৰা হয় (auto mode লৈ যায়)

আপোনাৰ custom কনফিগাৰেচন ৰাখিবলৈ Manual বা Legacy mode ত থকাটো ভাল।

### Deprecation Timeline {#deprecation-timeline}

- **v1.12.0**: Legacy আৰু Manual mode এতিয়াও সম্পূৰ্ণ সমৰ্থন কৰা হয়
- **v1.13.0+**: Legacy mode ত deprecation notices দেখুৱাব পাৰে
- **v2.0.0**: Legacy mode আঁতৰ কৰা হ'ব পাৰে (TBD)

## Best Practices {#best-practices}

### নতুন ইনষ্টলেচনৰ বাবে {#for-new-installations}

- Auto mode ব্যৱহাৰ কৰক (এইটো ডিফল্ট)
- Superdav AI Agent लाई স্বয়ংক্রিয়ভাৱে ক্ষমতা আৱিষ্কাৰ কৰিবলৈ দিয়ক
- access নিয়ন্ত্ৰণ কৰিবলৈ Ability Visibility ব্যৱহাৰ কৰক

### থকা ইনষ্টলেচনৰ বাবে {#for-existing-installations}

- সম্ভৱ হ'লে WordPress 7.0+ লৈ আপগ্রেড কৰক
- সহজ ব্যৱস্থাপনাৰ বাবে Auto mode লৈ সলনি কৰক
- Ability Visibility ব্যৱহাৰ কৰি ক্ষমতা পৰীক্ষা কৰক আৰু শ্রেণীবদ্ধ কৰক

### Custom ক্ষমতাৰ বাবে {#for-custom-abilities}

- WordPress hooks (Abilities API) যোগেৰে ক্ষমতা ৰেজিষ্টাৰ কৰক
- custom ability registry এৰাই চলক
- Auto mode লগত WordPress 7.0+ ত পৰীক্ষা কৰক

## Next Steps {#next-steps}

1. **আপোনাৰ WordPress সংস্কৰণ পৰীক্ষা কৰক**: Auto mode-ৰ বাবে আপুনি 7.0+ ত আছে বুলি নিশ্চিত কৰক
2. **আপোনাৰ third-party mode পৰীক্ষা কৰক**: Settings লৈ যাওক আৰু আপোনাৰ বৰ্তমান মোড পৰীক্ষা কৰক
3. **প্রয়োজন অনুসৰি আপডেট কৰক**: যদি আপুনি WordPress 7.0+ ত আছে তেন্তে Auto mode লৈ সলনি কৰক
4. **ক্ষমতা শ্রেণীবদ্ধ কৰক**: কোনো শ্রেণীবদ্ধ নোহোৱা ক্ষমতা পৰীক্ষা কৰক আৰু শ্রেণীবদ্ধ কৰক
5. **পৰীক্ষা কৰক**: নিশ্চিত কৰক যে আপোনাৰ third-party ক্ষমতাগুলি সঠিকভাৱে কাম কৰিছে

## Related Topics {#related-topics}

- **Ability Visibility**: কোন ক্ষমতা ক'ত প্ৰকাশ কৰিব লাগে, সেয়া নিয়ন্ত্ৰণ কৰক
- **WordPress Abilities API**: native WordPress ability ৰেজিষ্ট্ৰেচনৰ বিষয়ে জানক
- **Third-Party Ability Development**: Auto mode লগত কাম কৰা ক্ষমতা সৃষ্টি কৰক
