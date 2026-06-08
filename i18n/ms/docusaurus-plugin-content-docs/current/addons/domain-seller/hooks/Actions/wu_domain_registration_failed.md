---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Dipicu selepas percubaan pendaftaran domain gagal.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pembayaran yang mencetuskan pendaftaran. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata pendaftaran termasuk status=gagal dan error_message. |
| $error_message | `string` | Mesej ralat yang boleh dibaca manusia daripada pendaftar (registrar). |

### Since

- 2.0.0
### Source

Didefinisikan dalam [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) pada baris 1250
