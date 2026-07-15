---
id: wu_checkout_order_created
title: Handling - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Utløses etter at kasseordren er fullstendig satt sammen.

Addons kan bruke dette til å opprette sekundære medlemskap for produkter med uavhengige faktureringssykluser.

## Parametere {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Kurv-/ordrensobjektet. |
| $customer | `\WP_Ultimo\Models\Customer` | Kunden. |
| $membership | `\WP_Ultimo\Models\Membership` | Det primære medlemskapet. |
| $payment | `\WP_Ultimo\Models\Payment` | Betalingen. |

### Siden {#since}

- 2.5.0
### Kilde {#source}

Definert i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) på linje 891
