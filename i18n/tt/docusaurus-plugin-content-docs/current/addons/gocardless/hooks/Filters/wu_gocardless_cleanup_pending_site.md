---
id: wu_gocardless_cleanup_pending_site
title: Фильтр - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Гамәлдән чыгарылган GoCardless әгъзалыгы өчен ятим көтүдәге сайтны бетерү алдыннан эшли.

Бетерүне булдырмас өчен, бу фильтрдан false кайтарыгыз.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $blog_id | `int` | Көтүдәге сайтның WordPress blog ID-сы. |
| $membership | `\WP_Ultimo\Models\Membership` | Гамәлдән чыгарылган әгъзалык. |
| $old_status | `string` | Гамәлдән чыгару алдыннан статус. |

### Чыгарылыштан башлап {#since}

- 2.0.0
### Чыганак {#source}

1086 нчы юлда [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) эчендә билгеләнгән
