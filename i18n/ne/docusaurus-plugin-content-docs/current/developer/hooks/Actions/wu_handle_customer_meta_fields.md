---
id: wu_handle_customer_meta_fields
title: कार्य - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# कार्य: wu_handle_customer_meta_fields

plugin विकासकर्ताहरूलाई आवश्यक भएमा meta data फरक तरिकाले सुरक्षित गर्न अनुमति दिनुहोस्।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | meta fields को सूची, key =&gt; value संरचनामा। |
| $customer | `\Customer` | Ultimate Multisite customer वस्तु। |
| $checkout | `\Checkout` | checkout वर्ग। |

### देखि {#since}

- 2.0.0
### स्रोत {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) मा पङ्क्ति 1211 मा परिभाषित।
