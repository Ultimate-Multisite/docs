---
id: wu_handle_user_meta_fields
title: कार्य - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# कार्य: wu_handle_user_meta_fields

plugin विकासकर्ताहरूलाई आवश्यक परेमा फरक तरिकाले प्रयोगकर्ता meta data सुरक्षित गर्न अनुमति दिनुहोस्।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | meta fields को सूची, key =&gt; value संरचनामा। |
| $user | `\WP_User` | WordPress प्रयोगकर्ता object। |
| $customer | `\Customer` | Ultimate Multisite ग्राहक object। |
| $checkout | `\Checkout` | checkout class। |

### Since {#since}

- 2.0.4
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) मा line 1244 मा परिभाषित।
