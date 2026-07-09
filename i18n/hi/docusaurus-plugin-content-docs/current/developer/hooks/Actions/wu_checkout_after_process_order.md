---
id: wu_checkout_after_process_order
title: क्रिया - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order {#action-wucheckoutafterprocessorder}

डेवलपर्स को अतिरिक्त हुक्स (hooks) को ट्रिगर करने की अनुमति देता है।

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $checkout | `\Checkout` | चेकआउट ऑब्जेक्ट का उदाहरण (instance)। |
| $cart | `\Cart` | चेकआउट कार्ट का उदाहरण (instance)। |

### कब से {#since}

- 2.0.9
### स्रोत {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) में लाइन 1013 पर परिभाषित।
