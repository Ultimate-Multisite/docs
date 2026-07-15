---
id: wu_country_get_administrative_division_name
title: ফিল্টার - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

দেশের প্রশাসনিক উপ-বিভাগগুলোর সুন্দর নাম ফেরত দেয়।

## প্যারামিটারগুলো {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | উপ-বিভাগের নাম। সাধারণত এটি স্টেট, প্রদেশ বা অঞ্চল জাতীয় কিছু হয়। |
| $country_code | `string` | দেশের জন্য দুই-অক্ষরের আইএসও কোড। |
| $state_code | `string` | রাজ্যের জন্য দুই-অক্ষরের আইএসও কোড। |
| $ucwords | `bool` | যদি আমরা শব্দগুলোকে বড় হাতের অক্ষরে (uppercase) করতে চাই। |
| $current_country | `\WP_Ultimo\Country\Country` | বর্তমান ক্লাসের একটি উদাহরণ (Instance)। |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250)-এ লাইন ২৫০-এ সংজ্ঞায়িত।

## Returns {#returns}
পরিবর্তিত উপ-বিভাগের নামটি।
