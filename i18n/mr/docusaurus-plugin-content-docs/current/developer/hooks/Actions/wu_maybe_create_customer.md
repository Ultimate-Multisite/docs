---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

ग्राहक (customer) जोडल्यावर प्लगइन डेव्हलपर्सना अतिरिक्त काम करण्याची परवानगी मिळते.

येथे आपण ग्राहक-ला मुख्य साईटवर युजर (user) म्हणून जोडण्यासाठी हुक्स (hooks) जोडतो, उदाहरणार्थ.

## पॅरामीटर्स (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | जो ग्राहक (customer) कदाचित तयार झाला आहे. |
| $checkout | `\Checkout` | सध्याची चेकआउट क्लास (checkout class). |

### कधीपासून (Since)

- 2.0.0
### स्रोत (Source)

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) मध्ये लाइन 1156 वर परिभाषित केले आहे.
