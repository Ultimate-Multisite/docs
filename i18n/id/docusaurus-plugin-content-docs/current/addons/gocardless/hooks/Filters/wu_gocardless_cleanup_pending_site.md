---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

Dipicu sebelum menghapus situs pending yatim piatu (orphaned) untuk keanggotaan GoCardless yang dibatalkan.

Kembalikan `false` dari filter ini untuk mencegah penghapusan.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $blog_id | `int` | ID blog WordPress dari situs pending. |
| $membership | `\WP_Ultimo\Models\Membership` | Keanggotaan yang dibatalkan. |
| $old_status | `string` | Status sebelum pembatalan. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan di [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) pada baris 1086
