---
id: wu_domain_seller_complete_registration
title: Aksyon - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Aksyon: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

Moandar kung ang usa ka bayad mobalhin ngadto sa status nga kinahanglan mopahinabo sa pagparehistro sa domain.

## Mga Parameter {#parameters}

| Ngalan | Tipo | Deskripsyon |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang object sa bayad. |
| $old_status | `string` | Ang naunang status sa bayad sa wala pa ang pagbalhin. |

### Sukad {#since}

- 2.0.0
### Tinubdan {#source}

Gihubit sa [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) sa linya 266
