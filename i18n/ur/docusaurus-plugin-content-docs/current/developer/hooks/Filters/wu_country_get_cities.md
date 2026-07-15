---
id: wu_country_get_cities
title: فلٹر - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

یہ ایک ملک میں کسی ریاست کے شہروں کی فہرست واپس کرتا ہے۔

## پیرامیٹرز (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | ریاست کے شہروں کے ناموں کی فہرست۔ اس میں کوئی کی (key) موجود نہیں ہوتی۔ |
| $country_code | `string` | ملک کا دو حروف پر مشتمل ISO کوڈ۔ |
| $state_code | `string` | ریاست کا دو حروف پر مشتمل ISO کوڈ۔ |
| $current_country | `\WP_Ultimo\Country\Country` | موجودہ کلاس کا ایک انسٹنس۔ |

### سے (Since) {#since}

- 2.0.11
### ماخذ (Source) {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) میں لائن 146 پر ڈیفائن کیا گیا ہے۔

## واپسی (Returns) {#returns}
ریاستوں کی فلٹر شدہ فہرست۔
