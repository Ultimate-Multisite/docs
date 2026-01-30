---
id: wu_handle_user_meta_fields
title: "Action - wu_handle_user_meta_fields"
sidebar_label: "wu_handle_user_meta_fields"
---

# Action: wu_handle_user_meta_fields

Allow plugin developers to save user meta data in different ways if they need to.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | The list of meta fields, key =&gt; value structured. |
| $user | `\WP_User` | The WordPress user object. |
| $customer | `\Customer` | The Ultimate Multisite customer object. |
| $checkout | `\Checkout` | The checkout class. |

### Since

- 2.0.4
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) at line 1244

