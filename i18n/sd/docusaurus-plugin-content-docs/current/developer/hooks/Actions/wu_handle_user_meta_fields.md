---
id: wu_handle_user_meta_fields
title: عمل - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# عمل: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

پلگ اِن ترقيڪارن کي اجازت ڏيو ته جيڪڏهن کين ضرورت هجي ته استعمال ڪندڙ جي ميٽا ڊيٽا مختلف طريقن سان محفوظ ڪن.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $meta_repository | `array` | ميٽا فيلڊز جي فهرست، key =&gt; value ڍانچي ۾. |
| $user | `\WP_User` | WordPress استعمال ڪندڙ آبجيڪٽ. |
| $customer | `\Customer` | Ultimate Multisite گراهڪ آبجيڪٽ. |
| $checkout | `\Checkout` | checkout ڪلاس. |

### کان وٺي {#since}

- 2.0.4
### ذريعو {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ۾ لڪير 1244 تي بيان ٿيل.
