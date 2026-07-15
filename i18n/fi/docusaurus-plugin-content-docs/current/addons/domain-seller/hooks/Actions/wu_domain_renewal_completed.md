---
id: wu_domain_renewal_completed
title: Toiminto - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Toiminto: wu_domain_renewal_completed

Käynnistyy sen jälkeen, kun verkkotunnus on onnistuneesti uusittu.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Maksu, joka käynnisti uusimisen. |
| $renewal_data | `array&lt;string,mixed&gt;` | Uusimisen metatiedot (domain_name, years, customer_id jne.). |
| $result | `array&lt;string,mixed&gt;` | Verkkotunnusvälittäjän palauttama raakatulostaulukko, joka sisältää uuden expiry_date-arvon. |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) rivillä 594
