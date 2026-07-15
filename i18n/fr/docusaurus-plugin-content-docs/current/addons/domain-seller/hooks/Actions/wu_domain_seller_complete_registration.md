---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Se déclenche lorsqu'un paiement passe à un statut qui doit déclencher l'enregistrement du domaine.

## Paramètres {#parameters}

| Nom | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | L'objet de paiement. |
| $old_status | `string` | Le statut de paiement précédent avant la transition. |

### Depuis {#since}

- 2.0.0
### Source {#source}

Défini dans [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) à la ligne 266
