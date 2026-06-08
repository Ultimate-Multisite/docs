---
id: wu_page_added
title: Действие - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Позволява на разработчиците на плагини да изпълнят допълнителна логика, когато страниците бъдат регистрирани.

За разлика от `wu_page_load`, който се изпълнява само когато се гледа конкретна страница, този hook се изпълнява при регистрация за всяка административна страница, добавена с код на Ultimate Multisite.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ID на тази страница. |
| $page_hook | `string` | Име на hook-а на тази страница. |

### От версия

- 2.0.0
### Източник

Дефиниран в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) на линия 228
