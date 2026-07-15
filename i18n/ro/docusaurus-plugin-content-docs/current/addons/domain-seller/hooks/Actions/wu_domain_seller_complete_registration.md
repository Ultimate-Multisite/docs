---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Se declanșează când un platiment trece la un statut care ar trebui să declanșeze înregistrarea domeniului.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Obiectul de plată. |
| $old_status | `string` | Statutul anterior al plății înainte de tranziție. |

### De la {#since}

- 2.0.0
### Sursă {#source}

Definit în [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) la linia 266
