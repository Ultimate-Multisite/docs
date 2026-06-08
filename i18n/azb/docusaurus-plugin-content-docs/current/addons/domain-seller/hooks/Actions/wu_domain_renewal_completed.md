---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Aksi ini akan dijalankan setelah sebuah domain berhasil diperbarui.

## Parameter

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pembayaran yang memicu pembaruan. |
| $renewal_data | `array<string,mixed>` | Metadata pembaruan (seperti `domain_name`, `years`, `customer_id`, dll.). |
| $result | `array<string,mixed>` | Array hasil mentah yang dikembalikan oleh registrar, termasuk `expiry_date` yang baru. |

### Sejak

- 2.0.0
### Sumber

Didefinisikan di [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) pada baris 594
