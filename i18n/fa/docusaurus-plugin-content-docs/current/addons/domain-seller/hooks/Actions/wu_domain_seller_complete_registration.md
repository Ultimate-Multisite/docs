---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

این اکشن زمانی فعال می‌شود که وضعیت یک پرداخت به وضعیتی تغییر کند که باید باعث شروع ثبت دامنه شود.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | شیء پرداخت. |
| $old_status | `string` | وضعیت قبلی پرداخت قبل از تغییر وضعیت. |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

Defined in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) at line 266
