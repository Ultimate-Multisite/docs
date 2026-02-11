---
id: wu_page_load
title: Действие - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Действие: wu_page_load

Позволяет разработчикам плагинов добавлять дополнительные хуки к нашим страницам.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $id | `string` | Идентификатор этой страницы. |
| $page_hook | `string` | Ключ страницы этой страницы. |
| $admin_page | `self` | Экземпляр страницы. |

### С версии

- 1.8.2
- 2.0.4: Добавлен третий параметр: экземпляр страницы.

### Источник

Определено в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) на строке 318
