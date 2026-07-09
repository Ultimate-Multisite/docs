---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

Ödəniş domen qeydiyyatını işə salmalı olan bir vəziyyətə keçdikdə işə düşür.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ödəniş obyektidir. |
| $old_status | `string` | Keçidindən əvvəlki ödəniş vəziyyəti. |

### Nə vaxtdan {#since}

- 2.0.0
### Mənbə {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) faylının 266-cı sətirində təyin edilmişdir.
