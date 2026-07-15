---
id: wu_checkout_order_created
title: Ago - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Ago: wu_checkout_order_created

Ekfunkcias post kiam la checkout-mendo estas plene kunmetita.

Aldonaĵoj povas uzi ĉi tion por krei duarangajn membrecojn por produktoj kun sendependaj fakturaj cikloj.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | La ĉaro/mendo-objekto. |
| $customer | `\WP_Ultimo\Models\Customer` | La kliento. |
| $membership | `\WP_Ultimo\Models\Membership` | La ĉefa membreco. |
| $payment | `\WP_Ultimo\Models\Payment` | La pago. |

### Ekde {#since}

- 2.5.0
### Fonto {#source}

Difinita en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ĉe linio 891
