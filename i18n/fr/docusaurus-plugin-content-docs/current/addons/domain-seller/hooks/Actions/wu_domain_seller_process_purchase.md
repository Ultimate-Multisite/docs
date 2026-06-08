---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Se déclenche lorsque l'achat d'un domaine est en cours de traitement après la finalisation du paiement.

## Paramètres

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | L'objet de paiement. |
| $checkout_data | `array&lt;string,mixed&gt;` | Toutes les données de la commande provenant du formulaire d'inscription. |

### Depuis

- 2.0.0
### Source

Défini dans [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) à la ligne 246
