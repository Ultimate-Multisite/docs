---
id: wu_checkout_order_created
title: Radnja - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Akcija: wu_checkout_order_created {#action-wucheckoutordercreated}

Pokreće se nakon što je narudžba za checkout potpuno sastavljena.

Addoni to mogu koristiti za stvaranje sekundarnih članstava za proizvode s neovisnim ciklusima naplate.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Objekt košarice/narudžbe. |
| $customer | `\WP_Ultimo\Models\Customer` | Kupac. |
| $membership | `\WP_Ultimo\Models\Membership` | Primarno članstvo. |
| $payment | `\WP_Ultimo\Models\Payment` | Plaćanje. |

### Od {#since}

- 2.5.0
### Izvor {#source}

Definirano u [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) u retku 891
