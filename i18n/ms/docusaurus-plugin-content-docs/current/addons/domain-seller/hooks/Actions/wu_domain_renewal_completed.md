---
id: wu_domain_renewal_completed
title: Tindakan - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Dijalankan selepas domain berjaya diperbaharui.

## Parameter

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pembayaran yang mencetuskan pembaharuan. |
| $renewal_data | `array<string,mixed>` | Metadata pembaharuan (domain_name, years, customer_id, dsb.). |
| $result | `array<string,mixed>` | Paparan array hasil mentah yang dikembalikan oleh pendaftar (registrar), termasuk tarikh luput (expiry_date) yang baharu. |

### Sejak

- 2.0.0
### Sumber

Didefinisikan dalam [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) pada baris 594
