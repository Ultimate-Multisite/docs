---
id: wu_gocardless_cleanup_pending_site
title: Шүүлтүүр - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Цуцлагдсан GoCardless гишүүнчлэлийн өнчин хүлээгдэж буй сайтыг устгахын өмнө ажиллана.

Устгалтаас сэргийлэхийн тулд энэ filter-ээс false буцаана уу.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $blog_id | `int` | Хүлээгдэж буй сайтын WordPress blog ID. |
| $membership | `\WP_Ultimo\Models\Membership` | Цуцлагдсан гишүүнчлэл. |
| $old_status | `string` | Цуцлалтаас өмнөх төлөв. |

### Хувилбараас хойш {#since}

- 2.0.0
### Эх сурвалж {#source}

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086)-д 1086-р мөрөнд тодорхойлогдсон.
