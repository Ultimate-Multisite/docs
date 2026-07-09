---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

प्लगइन डेव्हलपर्सना गरज असल्यास मेटा डेटा वेगवेगळ्या प्रकारे सेव्ह करण्याची परवानगी देते.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | मेटा फील्ड्सची यादी, की => व्हॅल्यू संरचित. |
| $customer | `\Customer` | Ultimate Multisite चा ग्राहक ऑब्जेक्ट. |
| $checkout | `\Checkout` | चेकआउट क्लास. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) at line 1211
