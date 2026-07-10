---
id: wu_domain_registration_failed
title: Dejanje - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Dejanje: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Sproži se, ko poskus registracije domene ne uspe.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plačilo, ki je sprožilo registracijo. |
| $registration_data | `array&lt;string,mixed&gt;` | Metapodatki registracije, vključno s status=failed in error_message. |
| $error_message | `string` | Človeku berljivo sporočilo o napaki registrarja. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Opredeljeno v [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) v vrstici 1250
