---
id: wu_domain_registration_completed
title: Hereket - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Hereket: wu_domain_registration_completed

Domen üstünlikli hasaba alnandan soň işledilýär.

## Parametrler {#parameters}

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Hasaba almagy ýüze çykaran töleg. |
| $registration_data | `array&lt;string,mixed&gt;` | Hasaba alyş metamaglumatlary (domain_name, provider_id, years, expiry_date, we ş.m.). |
| $result | `array&lt;string,mixed&gt;` | Registrar tarapyndan gaýtarylan çig netije massiwi. |

### Şondan bäri {#since}

- 2.0.0
### Çeşme {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) faýlynda 1204-nji setirde kesgitlenen.
