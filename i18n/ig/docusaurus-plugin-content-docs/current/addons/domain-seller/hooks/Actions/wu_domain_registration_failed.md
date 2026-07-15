---
id: wu_domain_registration_failed
title: Omume - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Na-eme mgbe mgbalị ndebanye domain dara.

## Paramita {#parameters}

| Aha | Ụdị | Nkọwa |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ịkwụ ụgwọ kpalitere ndebanye ahụ. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata ndebanye gụnyere status=failed na error_message. |
| $error_message | `string` | Ozi njehie mmadụ nwere ike ịgụ sitere n’aka onye na-edeba aha. |

### Kemgbe {#since}

- 2.0.0
### Isi mmalite {#source}

Akọwapụtara na [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) na ahịrị 1250
