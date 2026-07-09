---
id: wu_checkout_order_created
title: Veprim - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Ekzekutohet pasi porosia e checkout të jetë ndërtuar plotësisht.

Shtesat mund ta përdorin këtë për të krijuar anëtarësi dytësore për produktet me cikle faturimi të pavarura.

## Parametrat {#parameters}

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Objekti i shportës/porosisë. |
| $customer | `\WP_Ultimo\Models\Customer` | Klienti. |
| $membership | `\WP_Ultimo\Models\Membership` | Anëtarësia kryesore. |
| $payment | `\WP_Ultimo\Models\Payment` | Pagesa. |

### Që nga {#since}

- 2.5.0
### Burimi {#source}

Përcaktuar në [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) në rreshtin 891
