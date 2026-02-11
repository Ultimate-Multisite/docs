---
id: wu_page_added
title: Действие - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Действие: wu_page_added

Позволяет разработчикам плагинов выполнять дополнительные действия при регистрации страниц.

В отличие от wu_page_load, который запускается только при просмотре конкретной страницы, этот хук выполняется при регистрации каждой административной страницы, добавляемой с помощью кода Ultimate Multisite.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $page_id | `string` | Идентификатор этой страницы. |
| $page_hook | `string` | Имя хука этой страницы. |

### С версии

- 2.0.0

### Источник

Определено в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) на строке 228
