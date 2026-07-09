---
id: wu_maybe_create_customer
title: Gweithred - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Caniatáu i ddatblygwyr ategion wneud pethau ychwanegol pan ychwanegir y cwsmer.

Dyma lle rydym yn ychwanegu'r hooks ar gyfer ychwanegu'r customer-&gt;user at y prif safle hefyd, er enghraifft.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $customer | `\Customer` | Y cwsmer a grëwyd efallai. |
| $checkout | `\Checkout` | Y dosbarth proses dalu cyfredol. |

### Ers {#since}

- 2.0.0
### Ffynhonnell {#source}

Diffiniwyd yn [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) ar linell 1156
