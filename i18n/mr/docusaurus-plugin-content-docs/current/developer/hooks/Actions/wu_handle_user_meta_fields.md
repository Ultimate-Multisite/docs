---
id: wu_handle_user_meta_fields
title: कृती - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

प्लगइन डेव्हलपर्सना गरज असल्यास युजर मेटा डेटा वेगवेगळ्या प्रकारे सेव्ह करण्याची परवानगी देते.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | मेटा फील्ड्सची यादी, जी key => value या स्वरूपात संरचित आहे. |
| $user | `\WP_User` | वर्डप्रेस युजर ऑब्जेक्ट. |
| $customer | `\Customer` | Ultimate Multisite ग्राहक ऑब्जेक्ट. |
| $checkout | `\Checkout` | चेकआउट क्लास. |

### Since {#since}

- 2.0.4
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) मध्ये लाइन 1244 वर परिभाषित केले आहे.
