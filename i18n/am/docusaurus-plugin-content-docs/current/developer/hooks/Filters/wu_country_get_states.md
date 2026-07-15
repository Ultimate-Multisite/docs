---
id: wu_country_get_states
title: ማጣሪያ - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

ለዚህ ሀገር የክልል ዝርዝርን ይመልሳል።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $states | `array` | የክልሎች ዝርዝር በ XX => ስም (Name) ቅርጸት። |
| $country_code | `string` | ለሀገሪቱ ባለሁለት-ፊደል ISO ኮድ። |
| $current_country | `\WP_Ultimo\Country\Country` | የወቅቱ ክፍል ተገዢ (Instance of the current class)። |

### Since {#since}

- 2.0.11
### Source {#source}

በ[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) በ86ኛው መስመር ተገልጿል።


## Returns {#returns}
የተጣራ የክልል ዝርዝር።
