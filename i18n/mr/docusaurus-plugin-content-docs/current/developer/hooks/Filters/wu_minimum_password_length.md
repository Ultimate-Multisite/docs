---
id: wu_minimum_password_length
title: फिल्टर - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

पासवर्डची किमान लांबी (minimum password length) फिल्टर करा.

हा फिल्टर तेव्हाच लागू होतो जेव्हा `wu_enforce_password_rules` हे `true` असते.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | पासवर्डची किमान लांबी. डीफॉल्ट १२ (Defender Pro शी जुळते). |
| $defender_active | `bool` | Defender Pro Strong Password सक्रिय आहे की नाही. |

### Since

- 2.4.0
### Source

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) या ठिकाणी ५४३ क्रमांकाच्या ओळीत परिभाषित केले आहे.
