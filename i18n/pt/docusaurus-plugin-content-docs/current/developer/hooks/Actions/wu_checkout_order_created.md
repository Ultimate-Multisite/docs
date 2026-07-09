---
id: wu_checkout_order_created
title: Ação - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Ação: wu_checkout_order_created {#action-wucheckoutordercreated}

Dispara depois de a encomenda de checkout estar totalmente montada.

Addons podem usar isto para criar memberships secundárias para produtos com ciclos de faturação independentes.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | O objeto carrinho/encomenda. |
| $customer | `\WP_Ultimo\Models\Customer` | O cliente. |
| $membership | `\WP_Ultimo\Models\Membership` | A membership principal. |
| $payment | `\WP_Ultimo\Models\Payment` | O pagamento. |

### Desde {#since}

- 2.5.0
### Fonte {#source}

Definido em [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) na linha 891
