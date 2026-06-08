---
id: wu_password_require_lowercase
title: Filter - wu_password_require_lowercase
sidebar_label: wu_password_require_lowercase
_i18n_hash: 5afaa63a8b318dc2167edd1bba3e0b27
---
# Filter: wu_password_require_lowercase

கடவுச்சொற்களில் சிறிய எழுத்துக்களை (lowercase letters) கட்டாயமாக்க வேண்டுமா இல்லையா என்பதைத் தீர்மானிக்கும் ஃபில்டர்.

## அளவுருக்கள்

| Name | Type | Description |
|------|------|-------------|
| $require | `bool` | விதிகள் செயல்படுத்தப்படும்போது சிறிய எழுத்துக்கள் கட்டாயமாக்க வேண்டுமா இல்லையா. இயல்பாகவே உண்மை (true) என இருக்கும். |
| $defender_active | `bool` | Defender Pro Strong Password செயல்படுகிறதா இல்லையா. |

### எப்போது இருந்து

- 2.4.0
### மூலம்

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L563) என்ற கோப்பில் 563 வரியில் வரையறுக்கப்பட்டுள்ளது.
