---
id: wu_domain_renewal_failed
title: Actie - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Wordt uitgevoerd nadat een poging tot domeinvernieuwing mislukt is.

## Parameters {#parameters}

| Naam | Type | Beschrijving |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | De betaling die de vernieuwing heeft veroorzaakt. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata over de vernieuwing (domein_naam, jaren, enz.). |
| $error_message | `string` | Een leesbare foutmelding van de registrar. |

### Sinds {#since}

- 2.0.0
### Bron {#source}

Geïndefinieerd in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) op regel 630
