---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

ملک کی انتظامی ذیلی تقسیمات کا اچھا نام واپس کرتا ہے۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | تقسیم کا نام۔ عام طور پر یہ کچھ ایسا ہوتا ہے جیسے state، province، region، وغیرہ۔ |
| $country_code | `string` | ملک کے لیے دو حروف کا ISO کوڈ۔ |
| $state_code | `string` | ریاست کے لیے دو حروف کا ISO کوڈ۔ |
| $ucwords | `bool` | کیا الفاظ کو بڑے حروف (uppercase) میں تبدیل کرنا ہے۔ |
| $current_country | `\WP_Ultimo\Country\Country` | موجودہ کلاس کا انسٹنس۔ |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) میں لائن 250 پر ڈیفائن کیا گیا ہے۔

## Returns {#returns}
تبدیل شدہ تقسیم کا نام۔
