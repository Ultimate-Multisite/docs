---
id: wu_page_before_render
title: Действие - wu_page_before_render
sidebar_label: wu_page_before_render
_i18n_hash: 80ace5356783d6d6ad2789d77480ace2
---
# Action: wu_page_before_render

Позволява на разработчиците на плагини да добавят допълнително съдържание преди да изведем страницата.

## Параметри

| Име | Тип | Описание |
|------|------|-------------|
| $page_id | `string` | Идентификаторът (ID) на тази страница. |
| $page | `object` | Обектът на страницата. |

### От

- 1.8.2
### Източник

Дефиниран в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L388) на линия 388
