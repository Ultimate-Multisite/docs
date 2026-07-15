---
id: wu_maybe_create_customer
title: Toiming - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Tegevus: wu_maybe_create_customer

Võimalda plugina arendajatel teha lisatoiminguid, kui klient lisatakse.

Siin lisame näiteks hook'id kliendi-&gt;kasutaja lisamiseks ka põhisaidile.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $customer | `\Customer` | The customer that was maybe created. |
| $checkout | `\Checkout` | The current checkout class. |

### Alates {#since}

- 2.0.0
### Allikas {#source}

Määratletud failis [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) real 1156
