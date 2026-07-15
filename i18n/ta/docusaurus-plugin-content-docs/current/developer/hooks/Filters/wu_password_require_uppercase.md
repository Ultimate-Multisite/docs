---
id: wu_password_require_uppercase
title: Filter - wu_password_require_uppercase
sidebar_label: wu_password_require_uppercase
_i18n_hash: eeb317b6890110f5f0eac4b541d18213
---
# Filter: wu_password_require_uppercase

கடவுச்சொற்களில் (passwords) பெரிய எழுத்துக்கள் (uppercase letters) தேவைப்படுகிறதா என்பதை வடிகட்டுகிறது (filter).

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | விளக்கம் (Description) |
|------|------|-------------|
| $require | `bool` | பெரிய எழுத்துக்கள் தேவையா என்பதை இது தீர்மானிக்கிறது. விதிகள் செயல்படுத்தப்பட்டால் இயல்பாகவே (default) உண்மை (true) என இருக்கும். |
| $defender_active | `bool` | Defender Pro Strong Password செயலில் உள்ளதா என்பதை இது தீர்மானிக்கிறது. |

### எப்போது இருந்து (Since) {#since}

- 2.4.0
### மூலம் (Source) {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L553) என்ற கோப்பில் 553 வரியில் வரையறுக்கப்பட்டுள்ளது.
