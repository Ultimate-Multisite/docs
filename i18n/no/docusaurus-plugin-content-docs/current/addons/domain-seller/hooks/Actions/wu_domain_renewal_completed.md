---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Utløses etter at et domene er blitt vellykket fornyet.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalingen som utløste fornyelsen. |
| $renewal_data | `array<string,mixed>` | Metadata for fornyelsen (domene_navn, år, kunde_id, osv.). |
| $result | `array<string,mixed>` | Rå resultat-array returnert av registrar, inkludert ny `expiry_date`. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) på linje 594
