---
id: wu_maybe_create_customer
title: Akcja - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Akcja: wu_maybe_create_customer

Pozwala deweloperom pluginów na wykonanie dodatkowych czynności, gdy zostanie dodany klient.

Tutaj dodajemy np. hooki odpowiedzialne za dodanie klienta (customer) jako użytkownika (user) na główną witrynę.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $customer | `\Customer` | Klient, który został (być może) utworzony. |
| $checkout | `\Checkout` | Aktualna klasa realizacji zamówienia (checkout). |

### Od {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowane w [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) w linii 1156
