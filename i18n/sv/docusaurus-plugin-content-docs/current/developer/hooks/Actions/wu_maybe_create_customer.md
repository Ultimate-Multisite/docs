---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Åtgärd: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Låter plugin-utvecklare göra ytterligare saker när kunden skapas.

Här lägger vi till hooks för att lägga till kunden som användare på huvudsidan också, till exempel.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $customer | `\Customer` | Kunden som eventuellt skapades. |
| $checkout | `\Checkout` | Den aktuella checkout-klassen. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) på rad 1156
