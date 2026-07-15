---
id: wu_gocardless_cleanup_pending_site
title: Penapis - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Berjalan sebelum menghapus situs tertangguh yang tidak terhubung (orphaned) untuk keahlian GoCardless yang dibatalkan.

Kembalikan `false` dari filter ini untuk mencegah penghapusan.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | ID blog WordPress dari situs tertangguh tersebut. |
| $membership | `\WP_Ultimo\Models\Membership` | Keahlian yang dibatalkan. |
| $old_status | `string` | Status sebelum pembatalan. |

### Since {#since}

- 2.0.0
### Source {#source}

Didefinisikan di [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) pada baris 1086
