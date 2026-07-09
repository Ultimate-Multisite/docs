---
id: wu_connector_enforcement_option_keys
title: فلتەر - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

لیستی کلیلەکانی هەڵبژاردنی دابینکەری AI کە لە ماڵپەڕی سەرەکییەوە جێبەجێ دەکرێن، فلتەر بکە.

کلیلەکانی هەڵبژاردن زیاد بکە بۆ plugin ـەکانی دابینکەری AI ـی تایبەت یان لایەنی سێیەم، بۆ ئەوەی ڕێکخستنەکانیان لەسەر ماڵپەڕە ژێرەکانیشدا لە ماڵپەڕی سەرەکییەوە وەربگیرێن.

## پارامێتەرەکان

| ناو | جۆر | وەسف |
|------|------|-------------|
| $keys | `string[]` | ناوەکانی کلیلی هەڵبژاردن کە دەبێت جێبەجێ بکرێن (پێشتر کلیلەکانی connector ـی دۆزراوە بە شێوەی دینامیکی و EXTRA_PROVIDER_OPTIONS لەخۆ دەگرێت). |

### لە وەشانی

- 1.2.0
### سەرچاوە

لە [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) لە هێڵی 206 پێناسە کراوە
