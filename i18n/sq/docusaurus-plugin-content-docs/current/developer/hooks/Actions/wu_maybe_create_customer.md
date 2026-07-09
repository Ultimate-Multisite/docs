---
id: wu_maybe_create_customer
title: Veprim - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Veprim: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Lejon zhvilluesit e shtojcave të bëjnë gjëra shtesë kur klienti shtohet.

Ja ku i shtojmë hooks për shtimin e customer-&gt;user edhe në faqen kryesore, për shembull.

## Parametrat {#parameters}

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $customer | `\Customer` | Klienti që mund të jetë krijuar. |
| $checkout | `\Checkout` | Klasa aktuale e procesit të pagesës. |

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) në rreshtin 1156
