---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

এটা দেশৰ এটা ৰাজ্যৰ বাবে চহৰৰ তালিকা ঘূৰাই দিয়ে।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | ৰাজ্যৰ চহৰৰ নামৰ তালিকা। ইয়াত কোনো key নাই। |
| $country_code | `string` | দেশটোৰ দু-অক্ষৰ ISO কোড। |
| $state_code | `string` | ৰাজ্যটোৰ দু-অক্ষৰ ISO কোড। |
| $current_country | `\WP_Ultimo\Country\Country` | বৰ্তমানৰ ক্লাছটোৰ এটা প্ৰতিলিপি (Instance)। |

### কিমানৰ পৰা {#since}

- 2.0.11
### উৎস {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) ফাইলৰ ১ ৪ ৬ নং শাৰীত সংজ্ঞায়িত।

## ঘূৰাই দিয়ে {#returns}
ফিল্টাৰ কৰা ৰাজ্যসমূহৰ তালিকা।
