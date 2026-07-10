---
id: wu_username_from_email
title: फिल्टर - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email {#filter-wuusernamefromemail}

नए ग्राहक का उपयोगकर्ता नाम (username) फ़िल्टर करें।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $username | `string` | ग्राहक का उपयोगकर्ता नाम। |
| $email | `string` | नए ग्राहक का ईमेल पता। |
| $new_user_args | `array` | नए उपयोगकर्ता के तर्क (args) का ऐरे, जिसमें पहले और अंतिम नाम भी शामिल हो सकते हैं। |
| $suffix | `string` | उपयोगकर्ता नाम को अद्वितीय (unique) बनाने के लिए जोड़ा जाने वाला स्ट्रिंग। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) में लाइन 516 पर परिभाषित।
