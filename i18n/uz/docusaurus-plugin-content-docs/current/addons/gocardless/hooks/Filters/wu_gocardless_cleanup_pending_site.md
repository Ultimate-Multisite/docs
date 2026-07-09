---
id: wu_gocardless_cleanup_pending_site
title: Filtr - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Bekor qilingan GoCardless a’zoligi uchun yetim qolgan kutilayotgan saytni o‘chirishdan oldin ishga tushadi.

O‘chirishni oldini olish uchun ushbu filterdan false qaytaring.

## Parametrlar {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | Kutilayotgan saytning WordPress blog IDsi. |
| $membership | `\WP_Ultimo\Models\Membership` | Bekor qilingan a’zolik. |
| $old_status | `string` | Bekor qilishdan oldingi holat. |

### Dan beri {#since}

- 2.0.0
### Manba {#source}

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ichida 1086-qatorda aniqlangan
