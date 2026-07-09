---
id: wu_domain_registration_failed
title: Toiminto - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Toiminto: wu_domain_registration_failed

Käynnistyy, kun verkkotunnuksen rekisteröintiyritys epäonnistuu.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Maksu, joka käynnisti rekisteröinnin. |
| $registration_data | `array&lt;string,mixed&gt;` | Rekisteröinnin metatiedot, mukaan lukien status=failed ja error_message. |
| $error_message | `string` | Ihmisluettava virheilmoitus verkkotunnusrekisteröijältä. |

### Alkaen versiosta

- 2.0.0
### Lähde

Määritelty tiedostossa [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) rivillä 1250
