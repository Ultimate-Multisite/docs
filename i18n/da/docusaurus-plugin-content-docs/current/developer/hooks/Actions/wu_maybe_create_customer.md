---
id: wu_maybe_create_customer
title: Handling - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

Gør det muligt for plugin-udviklere at gøre yderligere ting, når kunden tilføjes.

Her er for eksempel stedet, hvor vi også tilføjer hooks til at tilføje kunde-&gt;bruger til hovedwebstedet.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $customer | `\Customer` | Kunden, der måske blev oprettet. |
| $checkout | `\Checkout` | Den aktuelle checkout-klasse. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) på linje 1156
