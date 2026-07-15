---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Inatolewa baada ya neno la kikoa (domain) kusajiliwa kwa mafanikio.

## Vigezo (Parameters) {#parameters}

| Jina | Aina | Maelezo |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Malipo yaliyosababisha usajili. |
| $registration_data | `array<string,mixed>` | Data ya meta ya usajili (domain_name, provider_id, years, expiry_date, n.k.). |
| $result | `array<string,mixed>` | Array ya matokeo halisi iliyorejeshwa na rejista (registrar). |

### Tangu {#since}

- 2.0.0
### Chanzo {#source}

Imefafanuliwa katika [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) kwenye mstari wa 1204
