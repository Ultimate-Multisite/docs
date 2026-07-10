---
id: wu_maybe_create_customer
title: Radnja - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Radnja: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Omogućuje programerima dodataka da obave dodatne stvari kada se kupac doda.

Ovdje, primjerice, dodajemo hookove za dodavanje customer-&gt;user na glavnu web-lokaciju.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $customer | `\Customer` | Kupac koji je možda stvoren. |
| $checkout | `\Checkout` | Trenutačna klasa naplate. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) u retku 1156
