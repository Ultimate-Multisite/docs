---
id: wu_return_url
title: फ़िल्टर - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url {#filter-wureturnurl}

डेवलपर्स को चेकआउट प्रोसेस के बाद इस्तेमाल होने वाले गेटवे रिटर्न URL को बदलने की अनुमति देता है।

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $return_url | `string` | प्रोसेस के बाद रीडायरेक्ट होने वाला URL। |
| $gateway | `self` | गेटवे का इंस्टेंस। |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite पेमेंट का इंस्टेंस। |
| $cart | `\WP_Ultimo\Checkout\Cart` | वर्तमान Ultimate Multisite कार्ट ऑर्डर। |

### कब से {#since}

- 2.0.20
### स्रोत {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) में लाइन 683 पर परिभाषित किया गया है।


## रिटर्न करता है {#returns}
