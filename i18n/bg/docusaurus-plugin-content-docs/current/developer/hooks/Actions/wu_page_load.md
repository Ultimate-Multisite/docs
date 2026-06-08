---
id: wu_page_load
title: Действие - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Действие: wu_page_load

Позволява на разработчиците на плагини да добавят допълнителни хукове към нашите страници.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Идентификаторът (ID) на тази страница. |
| $page_hook | `string` | Хукът на страницата. |
| $admin_page | `self` | Инстанцията на страницата. |

### От

- 1.8.2
- 2.0.4: Добавен трети параметър: инстанцията на страницата.
### Източник

Дефиниран в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) на линия 318
