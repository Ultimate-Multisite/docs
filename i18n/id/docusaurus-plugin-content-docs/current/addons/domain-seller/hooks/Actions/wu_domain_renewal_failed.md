---
id: wu_domain_renewal_failed
title: Aksi - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Dipicu setelah upaya perpanjangan domain gagal.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pembayaran yang memicu perpanjangan. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata perpanjangan (nama domain, tahun, dll.). |
| $error_message | `string` | Pesan kesalahan yang mudah dibaca dari registrar. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan di [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) pada baris 630
