---
id: wu_checkout_order_created
title: Akce - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Spustí se po dokončení sestavení objednávky v rámci checkoutu.

Doplňky mohou použít toto k vytvoření sekundárních členství pro produkty, které mají nezávislé cykly fakturace.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Objekt košíku/objednávky. |
| $customer | `\WP_Ultimo\Models\Customer` | Zákazník. |
| $membership | `\WP_Ultimo\Models\Membership` | Primární členství. |
| $payment | `\WP_Ultimo\Models\Payment` | Úhrada. |

### Od {#since}

- 2.5.0
### Zdroj {#source}

Definováno v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) na řádku 891
