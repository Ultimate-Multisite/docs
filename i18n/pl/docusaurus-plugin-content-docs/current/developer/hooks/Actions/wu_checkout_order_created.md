---
id: wu_checkout_order_created
title: Akcja - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Akcja: wu_checkout_order_created {#action-wucheckoutordercreated}

Wyzwala się po pełnym złożeniu zamówienia w koszyku.

Dodatki mogą użyć tego do utworzenia wtórnych członkostw dla produktów z niezależnymi cyklami rozliczeniowymi.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Obiekt koszyka/zamówienia. |
| $customer | `\WP_Ultimo\Models\Customer` | Klient. |
| $membership | `\WP_Ultimo\Models\Membership` | Główne członkostwo. |
| $payment | `\WP_Ultimo\Models\Payment` | Płatność. |

### Od {#since}

- 2.5.0
### Źródło {#source}

Zdefiniowane w [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) w linii 891
