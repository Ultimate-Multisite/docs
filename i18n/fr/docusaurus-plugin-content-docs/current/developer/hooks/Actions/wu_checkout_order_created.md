---
id: wu_checkout_order_created
title: Action - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

S'exécute après que la commande de paiement soit entièrement assemblée.

Les modules complémentaires peuvent l'utiliser pour créer des adhésions secondaires pour les produits ayant des cycles de facturation indépendants.

## Parameters

| Nom | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | L'objet panier/commande. |
| $customer | `\WP_Ultimo\Models\Customer` | Le client. |
| $membership | `\WP_Ultimo\Models\Membership` | L'adhésion principale. |
| $payment | `\WP_Ultimo\Models\Payment` | Le paiement. |

### Since

- 2.5.0

### Source

Défini dans [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) à la ligne 891
