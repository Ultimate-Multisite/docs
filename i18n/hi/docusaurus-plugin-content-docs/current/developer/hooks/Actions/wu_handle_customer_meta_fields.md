---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

प्लगइन डेवलपर्स को ज़रूरत पड़ने पर मेटा डेटा को अलग-अलग तरीकों से सेव करने की अनुमति देता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | मेटा फ़ील्ड्स की सूची, जो key => value के रूप में संरचित है। |
| $customer | `\Customer` | Ultimate Multisite का ग्राहक ऑब्जेक्ट। |
| $checkout | `\Checkout` | चेकआउट क्लास। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) में लाइन 1211 पर परिभाषित है।
