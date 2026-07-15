---
id: wu_domain_registration_failed
title: Kev nqis tes - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Khiav tom qab kev sim sau npe domain ua tsis tiav.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Qhov payment uas ua rau kev sau npe pib. |
| $registration_data | `array&lt;string,mixed&gt;` | Registration metadata uas suav nrog status=failed thiab error_message. |
| $error_message | `string` | Lus ceeb toom yuam kev uas tib neeg nyeem tau los ntawm tus registrar. |

### Txij thaum {#since}

- 2.0.0
### Source {#source}

Teev nyob rau hauv [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ntawm kab 1250
