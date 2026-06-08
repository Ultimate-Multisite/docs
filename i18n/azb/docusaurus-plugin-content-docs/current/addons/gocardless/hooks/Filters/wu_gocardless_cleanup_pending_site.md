---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gococardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Bu filter, iptal edilen bir GoCardless üyeliği için terk edilmiş (orphaned) bir beklemedeki site silinmeden önce çalışır.

Silmeyi engellemek için bu filter'dan `false` döndürün.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | Beklemedeki sitenin WordPress blog ID'si. |
| $membership | `\WP_Ultimo\Models\Membership` | İptal edilen üyelik. |
| $old_status | `string` | İptal edilmeden önceki durum. |

### Since

- 2.0.0
### Source

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) dosyasının 1086. satırında tanımlanmıştır.
