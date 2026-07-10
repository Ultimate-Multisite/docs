---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states {#filter-wucountrygetstates}

یہ ملک کی ریاستوں کی فہرست واپس کرتا ہے۔

## پیرامیٹرز (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $states | `array` | ریاستوں کی فہرست جو "XX => نام" فارمیٹ میں ہو۔ |
| $country_code | `string` | ملک کا دو حرفی ISO کوڈ۔ |
| $current_country | `\WP_Ultimo\Country\Country` | موجودہ کلاس کا ایک نمونہ (Instance). |

### سے (Since) {#since}

- 2.0.11
### ماخذ (Source) {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) میں لائن 86 پر بیان کیا گیا ہے۔

## واپسی (Returns) {#returns}
فلٹر کی گئی ریاستوں کی فہرست۔
