---
id: wu_country_get_cities
title: ফিল্টার - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

এটি একটি দেশের একটি রাজ্যের জন্য শহরগুলির তালিকা ফিরিয়ে দেয়।

## প্যারামিটারসমূহ {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $cities | `array` | রাজ্যের শহরগুলির তালিকা। কোনো কী (key) নেই। |
| $country_code | `string` | দেশের জন্য দুই অক্ষরের ISO কোড। |
| $state_code | `string` | রাজ্যের জন্য দুই অক্ষরের ISO কোড। |
| $current_country | `\WP_Ultimo\Country\Country` | বর্তমান ক্লাসের একটি উদাহরণ (Instance)। |

### কবে থেকে {#since}

- 2.0.11
### উৎস {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146)-এ লাইন ১৪৬-এ সংজ্ঞায়িত।

## রিটার্ন {#returns}

ফিল্টার করা রাজ্যগুলির তালিকা।
