---
id: wu_domain_registration_completed
title: Darbība - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Darbība: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Tiek palaista pēc tam, kad domēns ir veiksmīgi reģistrēts.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Maksājums, kas izraisīja reģistrāciju. |
| $registration_data | `array&lt;string,mixed&gt;` | Reģistrācijas metadati (domain_name, provider_id, years, expiry_date u. c.). |
| $result | `array&lt;string,mixed&gt;` | Neapstrādāts rezultātu masīvs, ko atgriezis reģistrators. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) 1204. rindā
