---
id: wu_domain_registration_completed
title: Toiminto - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Toiminto: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Suoritetaan sen jälkeen, kun verkkotunnus on rekisteröity onnistuneesti.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Maksu, joka käynnisti rekisteröinnin. |
| $registration_data | `array&lt;string,mixed&gt;` | Rekisteröinnin metatiedot (domain_name, provider_id, years, expiry_date jne.). |
| $result | `array&lt;string,mixed&gt;` | Raaka tulostaulukko, jonka verkkotunnusrekisteröijä palautti. |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) rivillä 1204
