---
id: wu_enforce_password_rules
title: வடிகட்டி - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

கூடுதல் கடவுச்சொல் விதிகளை கட்டாயமாக்க வேண்டுமா என்று வடிகட்டுகிறது.

இது `true` ஆக இருந்தால், குறைந்தபட்ச நீளம் மற்றும் எழுத்துத் தேவைகளை கட்டாயமாக்குகிறது. "Super Strong" அமைப்பிற்காகவோ அல்லது Defender Pro-வின் Strong Password அம்சம் செயல்படும்போதோ இது தானாகவே இயக்கப்படும்.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | கூடுதல் விதிகளை கட்டாயமாக்க வேண்டுமா. |
| $strength_setting | `string` | நிர்வாக அமைப்பின் மதிப்பு. |
| $defender_active | `bool` | Defender Pro Strong Password செயல்படுகிறதா. |

### Since {#since}

- 2.4.0
### Source {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) என்ற இடத்தில், 531 வரியில் வரையறுக்கப்பட்டுள்ளது.
