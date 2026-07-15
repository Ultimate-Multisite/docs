---
id: wu_maybe_create_customer
title: Acció - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Aquesta acció: wu_maybe_create_customer

Permet als desenvolupadors de plugins fer coses addicionals quan es crea un client.

Aquí és on afegim els *hooks* per a afegir el customer-&gt;user al lloc principal, per exemple.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $customer | `\Customer` | El customer que es pot haver creat. |
| $checkout | `\Checkout` | La classe de checkout actual. |

### Des de {#since}

- 2.0.0
### Font {#source}

Definït en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) a la línia 1156
