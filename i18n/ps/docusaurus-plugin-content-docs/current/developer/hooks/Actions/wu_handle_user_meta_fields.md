---
id: wu_handle_user_meta_fields
title: عمل - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# کړنه: wu_handle_user_meta_fields

plugin جوړوونکو ته اجازه ورکړئ چې که اړتیا ولري، د کارن meta معلومات په بېلابېلو لارو خوندي کړي.

## پارامیټرونه

| نوم | ډول | تشریح |
|------|------|-------------|
| $meta_repository | `array` | د meta ډګرونو لړلیک، د key =&gt; value په جوړښت کې. |
| $user | `\WP_User` | د WordPress کارن څیز. |
| $customer | `\Customer` | د Ultimate Multisite پېرودونکي څیز. |
| $checkout | `\Checkout` | د تادیې بشپړولو ټولګی. |

### له نسخې

- 2.0.4
### سرچینه

په [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) کې په 1244 کرښه کې تعریف شوی.
