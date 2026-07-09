---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Aksie: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Stel plugin-ontwikkelaars in staat om bykomende funksionaliteit te voer wanneer die kliënt geskep word.

Hier is waar ons die hooks byvoeg om die kliënt -> gebruiker na die hoofwebwerf te voeg, byvoorbeeld.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $customer | `\Customer` | Die kliënt wat moontlik geskep is. |
| $checkout | `\Checkout` | Die huidige afrekenklas. |

### Sedert {#since}

- 2.0.0
### Bron {#source}

Gedefinieer in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) by lyn 1156
