---
id: wu_minimum_password_length
title: வடிகட்டி - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

குறைந்தபட்ச கடவுச்சொல் நீளத்தை வடிகட்டுகிறது.

`wu_enforce_password_rules` என்பது `true` ஆக இருக்கும்போது மட்டுமே இது செயல்படுத்தப்படும்.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | குறைந்தபட்ச கடவுச்சொல் நீளம். இயல்புநிலை 12 (Defender Pro உடன் பொருந்துகிறது). |
| $defender_active | `bool` | Defender Pro Strong Password செயல்படுகிறதா இல்லையா. |

### Since {#since}

- 2.4.0
### Source {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) என்ற இடத்தில், 543 வரியில் வரையறுக்கப்பட்டுள்ளது.
