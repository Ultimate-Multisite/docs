---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

এই দেশের রাজ্যগুলির তালিকাটি ফেরত দেয়।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $states | `array` | এটি XX => Name ফরম্যাটে রাজ্যগুলির একটি তালিকা। |
| $country_code | `string` | দেশের জন্য দুই অক্ষরের ISO কোড। |
| $current_country | `\WP_Ultimo\Country\Country` | বর্তমান ক্লাসের একটি ইনস্ট্যান্স। |

### Since

- 2.0.11
### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) at line 86


## Returns
ফিল্টার করা রাজ্যগুলির তালিকা।
