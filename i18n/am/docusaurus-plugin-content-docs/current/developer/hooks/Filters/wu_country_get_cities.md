---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

በአንድ ሀገር ውስጥ ባለው ግዛት ውስጥ ያሉ የከተሞች ዝርዝርን ይመልሳል።

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | የክልል የከተማ ስሞች ዝርዝር። ምንም ቁልፍ (keys) የሉም። |
| $country_code | `string` | ለሀገሪቱ የሁለት-ፊደል ISO ኮድ። |
| $state_code | `string` | ለግዛቱ የሁለት-ፊደል ISO ኮድ። |
| $current_country | `\WP_Ultimo\Country\Country` | የአሁኑ ክፍል (class) ተገቢነት (instance)። |

### Since

- 2.0.11
### Source

በ[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) በ146ኛው መስመር ተገልጿል።

## Returns
የተጣረገው የግዛቶች ዝርዝር።
