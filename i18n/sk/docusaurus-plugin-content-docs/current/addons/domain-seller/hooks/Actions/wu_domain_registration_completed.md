---
id: wu_domain_registration_completed
title: Akcia - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Spustí sa po úspešnej registrácii domény.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Platba, ktorá spustila registráciu. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadáta registrácie (domain_name, provider_id, years, expiry_date atď.). |
| $result | `array&lt;string,mixed&gt;` | Nespracované pole výsledkov vrátené registrátorom. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) na riadku 1204
