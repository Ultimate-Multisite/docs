---
id: wu_gocardless_cleanup_pending_site
title: Сүзгі - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Тоқтатылған GoCardless мүшелігі үшін иесіз қалған күтілудегі сайтты жою алдында іске қосылады.

Жоюды болдырмау үшін осы filter-ден false қайтарыңыз.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $blog_id | `int` | Күтілудегі сайттың WordPress блог ID-і. |
| $membership | `\WP_Ultimo\Models\Membership` | Тоқтатылған мүшелік. |
| $old_status | `string` | Тоқтатуға дейінгі күй. |

### Бастап {#since}

- 2.0.0
### Дереккөзі {#source}

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ішінде 1086-жолда анықталған.
