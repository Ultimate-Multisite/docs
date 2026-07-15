---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

यह प्लगइन डेवलपर्स को ग्राहक (customer) जोड़े जाने पर अतिरिक्त कार्य करने की अनुमति देता है।

उदाहरण के लिए, यहाँ वह जगह है जहाँ हम ग्राहक के यूज़र को मुख्य साइट पर भी जोड़ने के लिए हुक्स (hooks) जोड़ते हैं।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | वह ग्राहक जिसे जोड़ा गया था। |
| $checkout | `\Checkout` | वर्तमान चेकआउट क्लास। |

### कब से {#since}

- 2.0.0
### स्रोत {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) में लाइन 1156 पर परिभाषित।
