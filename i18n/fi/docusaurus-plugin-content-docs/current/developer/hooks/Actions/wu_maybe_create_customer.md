---
id: wu_maybe_create_customer
title: Toiminto - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Toiminto: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Salli lisäosien kehittäjien tehdä lisätoimia, kun asiakas lisätään.

Tässä lisäämme koukut esimerkiksi asiakas-&gt;käyttäjä-parin lisäämiseksi myös pääsivustolle.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $customer | `\Customer` | Asiakas, joka ehkä luotiin. |
| $checkout | `\Checkout` | Nykyinen kassaluokka. |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) rivillä 1156
