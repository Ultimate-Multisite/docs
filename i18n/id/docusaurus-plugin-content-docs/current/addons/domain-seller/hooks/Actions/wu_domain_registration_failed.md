---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Dipicu setelah upaya pendaftaran domain gagal.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pembayaran yang memicu pendaftaran. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata pendaftaran yang mencakup status=failed dan error_message. |
| $error_message | `string` | Pesan kesalahan yang mudah dibaca dari registrar. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan di [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) pada baris 1250
