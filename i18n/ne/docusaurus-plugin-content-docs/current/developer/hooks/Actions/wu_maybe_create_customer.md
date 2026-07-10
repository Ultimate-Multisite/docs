---
id: wu_maybe_create_customer
title: कार्य - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# कार्य: wu_maybe_create_customer {#action-wumaybecreatecustomer}

ग्राहक थपिँदा प्लगइन विकासकर्ताहरूलाई थप काम गर्न अनुमति दिन्छ।

उदाहरणका लागि, ग्राहक-&gt;प्रयोगकर्तालाई मुख्य साइटमा पनि थप्नका लागि hooks थप्ने ठाउँ यही हो।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $customer | `\Customer` | सम्भवतः सिर्जना गरिएको ग्राहक। |
| $checkout | `\Checkout` | हालको चेकआउट क्लास। |

### देखि {#since}

- 2.0.0
### स्रोत {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) मा पङ्क्ति 1156 मा परिभाषित गरिएको।
