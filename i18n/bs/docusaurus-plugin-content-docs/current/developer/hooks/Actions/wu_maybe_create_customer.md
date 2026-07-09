---
id: wu_maybe_create_customer
title: Akcija - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Omogućava programerima pluginova da urade nešto dodatno kada se kreira kupac.

Ovdje dodajemo hookove za dodavanje kupca-u korisnika i na glavnu stranicu, na primjer.

## Parametri {#parameters}

| Name | Type | Opis |
|------|------|-------------|
| $customer | `\Customer` | Kupac koji je možda kreiran. |
| $checkout | `\Checkout` | Trenutna klasa za checkout. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definisan je u [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) na liniji 1156
