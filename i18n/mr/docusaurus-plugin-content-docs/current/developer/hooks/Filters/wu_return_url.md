---
id: wu_return_url
title: फिल्टर - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Developers ला चेकआउट प्रक्रिया पूर्ण झाल्यानंतर वापरले जाणारे गेटवे रिटर्न URL बदलण्याची परवानगी देते.

## पॅरामीटर्स {#parameters}

| नाव | प्रकार | वर्णन |
|------|------|-------------|
| $return_url | `string` | प्रक्रियेनंतर रीडायरेक्ट करण्यासाठी URL. |
| $gateway | `self` | गेटवेची इन्स्टन्स. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite पेमेंटची इन्स्टन्स. |
| $cart | `\WP_Ultimo\Checkout\Cart` | सध्याचा Ultimate Multisite कार्ट ऑर्डर. |

### कधीपासून {#since}

- 2.0.20
### स्रोत {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) मध्ये लाइन 683 वर परिभाषित केले आहे.


## परत करते {#returns}
