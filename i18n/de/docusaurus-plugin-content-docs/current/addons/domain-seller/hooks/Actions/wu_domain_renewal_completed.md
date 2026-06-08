---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Wird ausgelöst, nachdem eine Domain erfolgreich verlängert wurde.

## Parameter

| Name | Type | Beschreibung |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Die Zahlung, die die Verlängerung ausgelöst hat. |
| $renewal_data | `array<string,mixed>` | Metadaten zur Verlängerung (domain_name, years, customer_id usw.). |
| $result | `array<string,mixed>` | Das rohe Ergebnis-Array, das vom Registrar zurückgegeben wird und das neue expiry_date enthält. |

### Seit

- 2.0.0
### Quelle

Definiert in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) in Zeile 594
