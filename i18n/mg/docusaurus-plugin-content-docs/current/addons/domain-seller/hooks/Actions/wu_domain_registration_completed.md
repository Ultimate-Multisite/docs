---
id: wu_domain_registration_completed
title: Hetsika - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Mitranga rehefa voasoratra soa aman-tsara ny sehatra iray.

## Masontsivana {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ny fandoavam-bola izay niteraka ny fisoratana anarana. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata momba ny fisoratana anarana (domain_name, provider_id, years, expiry_date, sns.). |
| $result | `array&lt;string,mixed&gt;` | Array vokatra manta naverin’ny registrar. |

### Hatramin’ny {#since}

- 2.0.0
### Loharano {#source}

Voafaritra ao amin’ny [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) amin’ny andalana 1204
