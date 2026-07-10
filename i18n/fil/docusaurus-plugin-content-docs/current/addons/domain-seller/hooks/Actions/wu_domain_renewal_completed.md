---
id: wu_domain_renewal_completed
title: Aksyon - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Ito ay tumutugon (fires) pagkatapos matagumpay na ma-renew ang isang domain.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang bayad na nag-trigger ng pag-renew. |
| $renewal_data | `array<string,mixed>` | Mga metadata ng pag-renew (tulad ng domain_name, years, customer_id, atbp.). |
| $result | `array<string,mixed>` | Ang raw result array na ibinalik ng registrar, kasama na ang bagong `expiry_date`. |

### Since {#since}

- 2.0.0
### Source {#source}

Tinukoy sa [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) sa linya 594
