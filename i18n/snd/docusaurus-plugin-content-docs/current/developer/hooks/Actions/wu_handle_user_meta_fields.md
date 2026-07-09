---
id: wu_handle_user_meta_fields
title: عمل - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# عمل: wu_handle_user_meta_fields

plugin ڊولپرز کي اجازت ڏيو ته جيڪڏهن کين ضرورت هجي ته صارف جي meta data کي مختلف طريقن سان محفوظ ڪري سگهن.

## پيرا ميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $meta_repository | `array` | meta fields جي فهرست، key =&gt; value ڍانچي ۾. |
| $user | `\WP_User` | WordPress صارف آبجيڪٽ. |
| $customer | `\Customer` | Ultimate Multisite گراهڪ آبجيڪٽ. |
| $checkout | `\Checkout` | چيڪ آئوٽ ڪلاس. |

### کان وٺي

- 2.0.4
### ماخذ

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ۾ لائين 1244 تي بيان ڪيل.
