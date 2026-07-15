---
id: wu_handle_customer_meta_fields
title: عمل - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# عمل: wu_handle_customer_meta_fields

پلگ اِن ڊولپرن کي اجازت ڏيو ته جيڪڏهن کين ضرورت هجي ته ميٽا ڊيٽا مختلف طريقن سان محفوظ ڪن.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $meta_repository | `array` | ميٽا فيلڊن جي فهرست، key =&gt; value ڍانچي ۾. |
| $customer | `\Customer` | Ultimate Multisite گراهڪ آبجيڪٽ. |
| $checkout | `\Checkout` | چيڪ آئوٽ ڪلاس. |

### کان وٺي {#since}

- 2.0.0
### ذريعو {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) ۾ 1211 لائن تي بيان ٿيل.
