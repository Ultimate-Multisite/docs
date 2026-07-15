---
id: wu_return_url
title: फिल्टर - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# फिल्टर: wu_return_url

विकासकर्ताहरूलाई checkout प्रक्रियाहरू पछि प्रयोग गरिने gateway return URL परिवर्तन गर्न अनुमति दिनुहोस्।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $return_url | `string` | प्रक्रिया पछि redirect गर्ने URL। |
| $gateway | `self` | gateway instance। |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite भुक्तानी instance। |
| $cart | `\WP_Ultimo\Checkout\Cart` | हालको Ultimate Multisite cart order। |

### देखि {#since}

- 2.0.20
### स्रोत {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) मा line 683 मा परिभाषित


## फिर्ता मानहरू {#returns}
