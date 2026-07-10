---
id: wu_domain_registration_failed
title: Ketso - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Ketso: wu_domain_registration_failed {#action-wudomainregistrationfailed}

E sebetsa ka mor'a hore teko ea ngoliso ea domain e hlolehe.

## Dipharamitha {#parameters}

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Tefo e qalileng ngoliso. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata ya ngoliso e kenyeletsang status=failed le error_message. |
| $error_message | `string` | Molaetsa wa phoso o balwang ke motho o tswang ho mongodisi. |

### Ho tloha {#since}

- 2.0.0
### Mohlodi {#source}

E hlalositsoe ho [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) moleng wa 1250
