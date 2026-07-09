---
id: wu_domain_registration_completed
title: Azzjoni - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Azzjoni: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Jattiva wara li dominju jkun ġie rreġistrat b’suċċess.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Il-ħlas li attiva r-reġistrazzjoni. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata tar-reġistrazzjoni (domain_name, provider_id, years, expiry_date, eċċ.). |
| $result | `array&lt;string,mixed&gt;` | Array tar-riżultat mhux ipproċessat ritornat mir-reġistratur. |

### Minn {#since}

- 2.0.0
### Sors {#source}

Iddefinit f’[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) fil-linja 1204
