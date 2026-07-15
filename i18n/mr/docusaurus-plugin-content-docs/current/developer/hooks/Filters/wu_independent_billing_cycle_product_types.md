---
id: wu_independent_billing_cycle_product_types
title: फिल्टर - wu_independent_billing_cycle_product_types
sidebar_label: wu_independent_billing_cycle_product_types
_i18n_hash: 2b9bd3b68a53424272c1c93c6bdc3ef5
---
# Filter: wu_independent_billing_cycle_product_types

ज्या प्रोडक्ट प्रकारांची (product types) बिलिंग सायकल स्वतंत्र असते, त्यांना फिल्टर करण्यासाठी हा हुक (hook) वापरा.

ज्या प्रोडक्टची बिलिंग सायकल स्वतंत्र असते, त्यांना कार्टमध्ये (cart) असलेल्या प्लॅनच्या बिलिंग कालावधीशी जुळण्याची गरज नसते. उदाहरणार्थ, डोमेन नोंदणी (domain registrations) यांसारख्या प्रोडक्टसाठी हे उपयुक्त आहे, कारण प्लॅन मासिक (monthly) असो वा वार्षिक (annual), त्यांची बिलिंग नेहमीच वार्षिकच होते.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $types | `array` | ज्या प्रोडक्ट प्रकारांची बिलिंग सायकल स्वतंत्र असते, अशा प्रोडक्ट प्रकारांची ॲरे (array). |

### Since {#since}

- 2.5.0
### Source {#source}

[`inc/functions/product.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/product.php#L227) मध्ये लाइन 227 वर परिभाषित केले आहे.


## Returns {#returns}
