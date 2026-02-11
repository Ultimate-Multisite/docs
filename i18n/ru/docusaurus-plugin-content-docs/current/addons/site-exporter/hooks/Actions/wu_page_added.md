---
id: wu_page_added
title: ''
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Позволяет разработчикам плагинов выполнять дополнительные действия при регистрации страниц.

В отличие от wu_page_load, который запускается только при просмотре конкретной страницы, этот хук выполняется при регистрации каждой административной страницы, добавляемой с помощью кода WP Ultimo.

## Parameters

| Имя | Тип | Описание |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Идентификатор этой страницы. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Хук, сгенерированный для этой страницы. |

### С версии

- 2.0.0

### Источник

Определено в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) на строке 203
