---
id: wu_country_get_administrative_division_name
title: ማጣሪያ - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

የሀገር አስተዳደራዊ ንዑስ ክፍሎችን የሚያምር ስም ይመልሳል።

## መለኪያዎች (Parameters)

| Name | Type | መግለጫ (Description) |
|------|------|-------------|
| $name | `string` | የክፍሉ ስም ነው። አብዛኛውን ጊዜ እንደ ስቴት፣ ፕሮቪንስ፣ ክልል ወዘተ. ሊሆን ይችላል። |
| $country_code | `string` | የሀገሪቱ ባለሁለት-ፊደል ISO ኮድ። |
| $state_code | `string` | የክልሉ (state) ባለሁለት-ፊደል ISO ኮድ። |
| $ucwords | `bool` | ቃላቱን ወደ ትልቁ ፊደል (uppercase) ካደረግን። |
| $current_country | `\WP_Ultimo\Country\Country` | የአሁኑ ክፍል ተልዕኮ (Instance of the current class)። |

### Since

- 2.0.11
### Source

በ[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) በ250ኛው መስመር ተገልጿል።

## ይመልሳል (Returns)
የተሻሻለው የክፍል ስም ነው።
