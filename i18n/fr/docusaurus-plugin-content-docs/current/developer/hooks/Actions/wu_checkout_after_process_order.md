---
id: wu_checkout_after_process_order
title: Action - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order

Permettre aux développeurs de déclencher des hooks supplémentaires.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $checkout | `\Checkout` | L'instance d'objet de paiement. |
| $cart | `\Cart` | L'instance du panier de paiement. |

### Since

- 2.0.9
### Source

Défini dans [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) à la ligne 1013
