---
id: wu_domain_seller_complete_registration
title: Dejanje - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

Sproži se, ko plačilo preide v status, ki naj sproži registracijo domene.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objekt plačila. |
| $old_status | `string` | Prejšnji status plačila pred prehodom. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Določeno v [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) v vrstici 266
