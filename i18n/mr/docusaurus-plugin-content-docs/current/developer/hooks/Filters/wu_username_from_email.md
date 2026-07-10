---
id: wu_username_from_email
title: Filter - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email {#filter-wuusernamefromemail}

नवीन ग्राहकाचे युजरनेम (username) फिल्टर करण्यासाठी.

## मापदंड (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $username | `string` | ग्राहकाचे युजरनेम. |
| $email | `string` | नवीन ग्राहकाचा ईमेल ॲड्रेस. |
| $new_user_args | `array` | नवीन युजरसाठीचे ॲरे (array), ज्यात पहिले आणि आडनाव (first and last names) देखील असू शकते. |
| $suffix | `string` | युजरनेममध्ये जोडून त्याला युनिक (unique) बनवणारे अक्षर (string). |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) मध्ये लाइन 516 वर परिभाषित केले आहे.
