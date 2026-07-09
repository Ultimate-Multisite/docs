---
id: wu_maybe_create_customer
title: Dejanje - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Dejanje: wu_maybe_create_customer

Omogoči razvijalcem vtičnikov, da izvedejo dodatna dejanja, ko je stranka dodana.

Tukaj na primer dodamo hooke tudi za dodajanje customer-&gt;user na glavno spletno mesto.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $customer | `\Customer` | Stranka, ki je bila morda ustvarjena. |
| $checkout | `\Checkout` | Trenutni razred za checkout. |

### Od različice

- 2.0.0
### Vir

Določeno v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) v vrstici 1156
