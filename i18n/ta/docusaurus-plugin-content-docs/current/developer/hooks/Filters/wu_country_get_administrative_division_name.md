---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

நாட்டின் நிர்வாக துணைப் பிரிவுகளின் அழகான பெயரை இது திருப்பி அளிக்கும்.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | விளக்கம் (Description) |
|------|------|-------------|
| $name | `string` | பிரிவுப் பெயர். இது பொதுவாக மாநிலம் (state), மாகாணம் (province), பிராந்தியம் (region) போன்ற ஒன்றாக இருக்கும். |
| $country_code | `string` | நாட்டின் இரண்டு எழுத்துக்கள் கொண்ட ISO குறியீடு. |
| $state_code | `string` | மாநிலத்தின் இரண்டு எழுத்துக்கள் கொண்ட ISO குறியீடு. |
| $ucwords | `bool` | வார்த்தைகளை பெரிய எழுத்துக்களில் (uppercase) மாற்ற வேண்டுமா. |
| $current_country | `\WP_Ultimo\Country\Country` | தற்போதைய வகுப்பின் (class) ஒரு எடுத்துக்காட்டு (Instance). |

### எப்போது இருந்து (Since) {#since}

- 2.0.11
### மூலம் (Source) {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) என்ற கோப்பில் 250 வரியில் வரையறுக்கப்பட்டுள்ளது.

## திருப்பி அளிப்பது (Returns) {#returns}
மாற்றப்பட்ட பிரிவுப் பெயர்.
