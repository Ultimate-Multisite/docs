---
id: wu_gocardless_cleanup_pending_site
title: Filtre - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

İptal edilen bir GoCardless üyeliği nedeniyle yetim kalmış bir beklemede olan site silinmeden önce tetiklenir.

Silinmeyi önlemek için bu filtreten `false` döndürün.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $blog_id | `int` | Beklemede olan sitenin WordPress blog ID'si. |
| $membership | `\WP_Ultimo\Models\Membership` | İptal edilen üyelik. |
| $old_status | `string` | İptalden önceki durum. |

### Kullanılmaya Başladığı Versiyon {#since}

- 2.0.0
### Kaynak {#source}

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) dosyasının 1086. satırında tanımlanmıştır.
