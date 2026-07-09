---
id: wu_domain_seller_complete_registration
title: Toiminto - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Toiminto: wu_domain_seller_complete_registration

Käynnistyy, kun maksu siirtyy tilaan, jonka pitäisi käynnistää domainin rekisteröinti.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Maksuobjekti. |
| $old_status | `string` | Edellinen maksun tila ennen siirtymää. |

### Alkaen

- 2.0.0
### Lähde

Määritelty tiedostossa [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) rivillä 266
