---
id: wu_domain_renewal_completed
title: Darbība - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Tiek izpildīts pēc tam, kad domēns ir veiksmīgi atjaunots.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Maksājums, kas izraisīja atjaunošanu. |
| $renewal_data | `array&lt;string,mixed&gt;` | Atjaunošanas metadati (domain_name, years, customer_id utt.). |
| $result | `array&lt;string,mixed&gt;` | Neapstrādāts rezultātu masīvs, ko atgrieza reģistrators, tostarp jaunais expiry_date. |

### Kopš

- 2.0.0
### Avots

Definēts [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) 594. rindā
