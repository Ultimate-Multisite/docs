---
id: wu_domain_registration_failed
title: Azzjoni - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Azzjoni: wu_domain_registration_failed

Tiskatta wara li tentattiv ta' reġistrazzjoni ta' domain ifalli.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Il-ħlas li skattat ir-reġistrazzjoni. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata tar-reġistrazzjoni inklużi status=failed u error_message. |
| $error_message | `string` | Messaġġ ta' żball li jista' jinqara mill-bniedem mir-reġistratur. |

### Minn {#since}

- 2.0.0
### Sors {#source}

Definit fi [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) fil-linja 1250
