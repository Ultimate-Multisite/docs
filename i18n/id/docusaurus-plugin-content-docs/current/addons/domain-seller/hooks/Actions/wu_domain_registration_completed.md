---
id: wu_domain_registration_completed
title: Aksi - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Dipicu setelah domain berhasil didaftarkan.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pembayaran yang memicu pendaftaran. |
| $registration_data | `array<string,mixed>` | Metadata pendaftaran (domain_name, provider_id, years, expiry_date, dll.). |
| $result | `array<string,mixed>` | Array hasil mentah yang dikembalikan oleh registrar. |

### Sejak

- 2.0.0
### Sumber

Didefinisikan di [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) pada baris 1204
