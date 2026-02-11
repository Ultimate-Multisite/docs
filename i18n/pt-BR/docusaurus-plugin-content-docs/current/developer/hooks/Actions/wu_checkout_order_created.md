---
id: wu_checkout_order_created
title: Ação - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Ação: wu_checkout_order_created

Fires after the checkout order is fully assembled.

Addons can use this to create secondary memberships for products with independent billing cycles.

## Parameters

| Nome | Tipo | Descrição |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | O objeto do carrinho/pedido. |
| $customer | `\WP_Ultimo\Models\Customer` | O cliente. |
| $membership | `\WP_Ultimo\Models\Membership` | A associação principal. |
| $payment | `\WP_Ultimo\Models\Payment` | O pagamento. |

### Desde

- 2.5.0

### Fonte

Definido em [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) na linha 891
