---
id: wu_domain_renewal_completed
title: Actie - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Wordt uitgevoerd nadat een domein succesvol is verlengd.

## Parameters {#parameters}

| Naam | Type | Beschrijving |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | De betaling die de verlenging heeft veroorzaakt. |
| $renewal_data | `array<string,mixed>` | Metadata over de verlenging (domein_naam, jaren, customer_id, enz.). |
| $result | `array<string,mixed>` | Het ruwe resultaat-array dat door de registrar wordt geretourneerd, inclusief de nieuwe expiry_date. |

### Sinds {#since}

- 2.0.0
### Bron {#source}

Geïndefinieerd in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) op regel 594
