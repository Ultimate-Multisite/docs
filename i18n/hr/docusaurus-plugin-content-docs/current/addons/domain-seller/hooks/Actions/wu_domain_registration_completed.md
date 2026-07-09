---
id: wu_domain_registration_completed
title: Radnja - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Pokreće se nakon što je domena uspješno registrirana.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plaćanje koje je pokrenulo registraciju. |
| $registration_data | `array&lt;string,mixed&gt;` | Metapodaci registracije (domain_name, provider_id, years, expiry_date itd.). |
| $result | `array&lt;string,mixed&gt;` | Neobrađeni niz rezultata koji je vratio registrar. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) u retku 1204
