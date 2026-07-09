---
id: wu_domain_registration_failed
title: Chiito - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Inotanga mushure mekunge kuedza kunyoresa domain kwakundikana.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Mubhadharo wakakonzera kunyoreswa. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata yekunyoresa inosanganisira status=failed uye error_message. |
| $error_message | `string` | Mharidzo yekukanganisa inoverengeka nevanhu kubva kuna registrar. |

### Kubva {#since}

- 2.0.0
### Source {#source}

Yakatsanangurwa mu [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) pamutsara 1250
