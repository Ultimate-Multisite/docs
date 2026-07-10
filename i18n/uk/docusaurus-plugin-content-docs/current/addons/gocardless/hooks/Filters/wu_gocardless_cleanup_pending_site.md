---
id: wu_gocardless_cleanup_pending_site
title: Фільтр - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Фільтр: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Запускається перед видаленням сиротної очікувальної сторінки після скасування членства GoCardless.

Поверніть `false` з цього фільтра, щоб запобігти видаленню.

## Параметри {#parameters}

| Ім'я | Тип | Опис |
|------|------|-------------|
| $blog_id | `int` | ID блогу WordPress очікувальної сторінки. |
| $membership | `\WP_Ultimo\Models\Membership` | Скасоване членство. |
| $old_status | `string` | Статус до скасування. |

### Зверніть увагу {#since}

- 2.0.0
### Джерело {#source}

Визначено у [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) на рядку 1086
