---
id: wu_handle_customer_meta_fields
title: عمل - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# عمل: wu_handle_customer_meta_fields

plugin جوړوونکو ته اجازه ورکړئ چې که اړتیا ولري، meta data په بېلابېلو لارو خوندي کړي.

## پارامترونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $meta_repository | `array` | د meta fields لېست، د key =&gt; value په جوړښت. |
| $customer | `\Customer` | د Ultimate Multisite customer څیز. |
| $checkout | `\Checkout` | د checkout class. |

### له {#since}

- 2.0.0
### سرچینه {#source}

په [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) کې په 1211 کرښه تعریف شوی.
