---
id: wu_domain_renewal_completed
title: Azzjoni - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Jiskatta wara li domain ikun ġie mġedded b’suċċess.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Il-pagament li skattat it-tiġdid. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata tat-tiġdid (domain_name, years, customer_id, eċċ.). |
| $result | `array&lt;string,mixed&gt;` | Array tar-riżultat mhux ipproċessat mibgħut lura mir-reġistratur inkluż expiry_date ġdid. |

### Minn {#since}

- 2.0.0
### Sors {#source}

Iddefinit fi [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) fil-linja 594
