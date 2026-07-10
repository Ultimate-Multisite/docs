---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Word geaktiveer nadat 'n domein suksesvol geregistreer is.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Die betaling wat die registrasie geplaiseer het. |
| $registration_data | `array<string,mixed>` | Registrasie-metadata (domein_naam, provider_id, years, expiry_date, ens.). |
| $result | `array<string,mixed>` | Die ruwe resultaat-array wat deur die registereur geretourneer word. |

### Sedert {#since}

- 2.0.0
### Bron {#source}

Gedefinieer in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) by lyn 1204
