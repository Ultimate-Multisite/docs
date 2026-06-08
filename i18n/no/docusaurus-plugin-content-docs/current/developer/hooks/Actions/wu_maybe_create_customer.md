---
id: wu_maybe_create_customer
title: Handling - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

Lar plugin-utviklere utføre ekstra handlinger når kunden blir lagt til.

Her legger vi til hooks for å legge til kunden->brukeren på hovednettstedet også, for eksempel.

## Parametere

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | Kunden som kanskje ble opprettet. |
| $checkout | `\Checkout` | Den nåværende kassen (checkout)-klassen. |

### Since

- 2.0.0
### Source

Definert i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) på linje 1156
