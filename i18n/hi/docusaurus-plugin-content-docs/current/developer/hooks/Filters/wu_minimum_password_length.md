---
id: wu_minimum_password_length
title: फ़िल्टर - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

न्यूनतम पासवर्ड लंबाई को फ़िल्टर करें।

यह केवल तभी लागू होता है जब `wu_enforce_password_rules` true हो।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | न्यूनतम पासवर्ड लंबाई। डिफ़ॉल्ट 12 (Defender Pro से मेल खाता है)। |
| $defender_active | `bool` | यह कि Defender Pro Strong Password सक्रिय है या नहीं। |

### Since

- 2.4.0
### Source

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) में लाइन 543 पर परिभाषित है
