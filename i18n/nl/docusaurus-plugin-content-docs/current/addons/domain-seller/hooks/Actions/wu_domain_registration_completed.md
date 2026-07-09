---
id: wu_domain_registration_completed
title: Actie - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Wordt geactiveerd nadat een domein succesvol is geregistreerd.

## Parameters {#parameters}

| Naam | Type | Beschrijving |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | De betaling die de registratie heeft getriggerd. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata van de registratie (domain_name, provider_id, years, expiry_date, enz.). |
| $result | `array&lt;string,mixed&gt;` | Het ruwe resultaat-array dat door de registrar wordt geretourneerd. |

### Sinds {#since}

- 2.0.0
### Bron {#source}

Geïndefinieerd in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) op regel 1204
