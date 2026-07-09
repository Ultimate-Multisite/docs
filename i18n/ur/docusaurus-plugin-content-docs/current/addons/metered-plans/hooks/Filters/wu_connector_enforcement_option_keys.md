---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

مین سائٹ سے لاگو ہونے والی AI فراہم کنندہ (AI provider) کی آپشن کیز کی فہرست کو فلٹر کرتا ہے۔

یہ آپشن کیز شامل کرنے کے لیے کہ کسٹم یا تھرڈ پارٹی AI فراہم کنندہ پلگ انز کی سیٹنگز بھی سب سائیٹس پر مین سائٹ سے وراثت میں ملیں (inherited)۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | وہ آپشن کیز جنہیں لاگو کرنا ہے (اس میں پہلے سے ہی ڈائنامیک طور پر دریافت شدہ کنیکٹر کیز اور EXTRA_PROVIDER_OPTIONS شامل ہیں)۔ |

### Since {#since}

- 1.2.0
### Source {#source}

Defined in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) at line 206
