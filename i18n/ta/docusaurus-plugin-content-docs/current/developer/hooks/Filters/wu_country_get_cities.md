---
id: wu_country_get_cities
title: வடிகட்டி - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

ஒரு நாட்டில் உள்ள ஒரு மாநிலத்திற்கான நகரங்களின் பட்டியலைத் திருப்பி அளிக்கிறது.

## அளவுருக்கள்

| Name | Type | விளக்கம் |
|------|------|-------------|
| $cities | `array` | மாநில நகரங்களின் பட்டியல். இதில் எந்த கீய்களும் (keys) இருக்காது. |
| $country_code | `string` | நாட்டின் இரண்டு எழுத்து ISO குறியீடு. |
| $state_code | `string` | மாநிலத்தின் இரண்டு எழுத்து ISO குறியீடு. |
| $current_country | `\WP_Ultimo\Country\Country` | தற்போதைய வகுப்பின் (class) ஒரு நிகழ்வு (instance). |

### எப்போது இருந்து

- 2.0.11
### ஆதாரம்

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) என்ற கோப்பின் 146 வரியில் வரையறுக்கப்பட்டுள்ளது.

## திரும்ப அளிப்பது
வடிகட்டப்பட்ட மாநிலங்களின் பட்டியல்.
