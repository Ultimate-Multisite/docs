---
id: wu_domain_seller_complete_registration
title: عمل - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# کړنه: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

هغه وخت فعالېږي چې یوه تادیه داسې حالت ته واوړي چې باید د ډومېن ثبت پیل کړي.

## پارامترونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | د تادیې شی. |
| $old_status | `string` | له بدلون مخکې د تادیې پخوانی حالت. |

### له نسخې راهیسې {#since}

- 2.0.0
### سرچینه {#source}

په [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) کې په 266 کرښه کې تعریف شوی.
