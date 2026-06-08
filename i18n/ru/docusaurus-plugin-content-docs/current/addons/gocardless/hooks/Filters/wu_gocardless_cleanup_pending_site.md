---
id: wu_gocardless_cleanup_pending_site
title: Фильтр - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Фильтр: wu_gocardless_cleanup_pending_site

Срабатывает перед удалением осиротевшего ожидающего сайта после отмены членства GoCardless.

Чтобы предотвратить удаление, верните `false` из этого фильтра.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $blog_id | `int` | ID блога WordPress ожидающего сайта. |
| $membership | `\WP_Ultimo\Models\Membership` | Отмененное членство. |
| $old_status | `string` | Статус до отмены. |

### С версии

- 2.0.0
### Источник

Определен в [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) в строке 1086
