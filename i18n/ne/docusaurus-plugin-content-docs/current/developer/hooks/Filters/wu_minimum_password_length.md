---
id: wu_minimum_password_length
title: फिल्टर - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# फिल्टर: wu_minimum_password_length

न्यूनतम पासवर्ड लम्बाइ फिल्टर गर्नुहोस्।

wu_enforce_password_rules true हुँदा मात्र लागू हुन्छ।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $min_length | `int` | न्यूनतम पासवर्ड लम्बाइ। पूर्वनिर्धारित १२ (Defender Pro सँग मिल्छ)। |
| $defender_active | `bool` | Defender Pro Strong Password सक्रिय छ कि छैन। |

### देखि {#since}

- 2.4.0
### स्रोत {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) मा पङ्क्ति ५४३ मा परिभाषित गरिएको छ।
