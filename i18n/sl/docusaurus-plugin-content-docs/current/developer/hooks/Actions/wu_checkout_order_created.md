---
id: wu_checkout_order_created
title: Dejanje - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Sproži se, ko je naročilo checkouta v celoti sestavljeno.

Addons lahko to uporabijo za ustvarjanje sekundarnih članstev za izdelke z neodvisnimi obračunskimi cikli.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Objekt košarice/naročila. |
| $customer | `\WP_Ultimo\Models\Customer` | Stranka. |
| $membership | `\WP_Ultimo\Models\Membership` | Primarno članstvo. |
| $payment | `\WP_Ultimo\Models\Payment` | Plačilo. |

### Od različice {#since}

- 2.5.0
### Vir {#source}

Določeno v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) v vrstici 891
