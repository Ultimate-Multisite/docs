---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states {#filter-wucountrygetstates}

இந்த நாட்டிற்கான மாநிலங்களின் பட்டியலைத் திருப்பி அளிக்கும்.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | விளக்கம் (Description) |
|------|------|-------------|
| $states | `array` | XX => Name வடிவத்தில் உள்ள மாநிலங்களின் பட்டியல். |
| $country_code | `string` | நாட்டிற்கான இரண்டு எழுத்து ISO குறியீடு. |
| $current_country | `\WP_Ultimo\Country\Country` | தற்போதைய வகுப்பின் (class) ஒரு நிகழ்வு (instance). |

### எப்போது இருந்து (Since) {#since}

- 2.0.11
### ஆதாரம் (Source) {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) இல், 86 வரியில் வரையறுக்கப்பட்டுள்ளது.

## திரும்ப அளிப்பது (Returns) {#returns}
வடிகட்டப்பட்ட மாநிலங்களின் பட்டியல்.
