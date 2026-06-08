---
id: wu_domain_registration_completed
title: Acțiune - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Se declanșează după ce un domeniu a fost înregistrat cu succes.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plățile care au declanșat înregistrarea. |
| $registration_data | `array<string,mixed>` | Metadatele de înregistrare (domain_name, provider_id, years, expiry_date, etc.). |
| $result | `array<string,mixed>` | Matricea de rezultate brute returnată de registrar. |

### De la

- 2.0.0
### Sursă

Definit în [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) la linia 1204
