---
id: wu_page_added
title: Действие - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added {#action-wupageadded}

Позволява на разработчиците на плагини да изпълнят допълнителни действия, когато страниците бъдат регистрирани.

За разлика от `wu_page_load`, който се изпълнява само когато се гледа конкретна страница, този hook се изпълнява при регистрация за всяка административна страница, добавена с код на WP Ultimo.

## Параметри {#parameters}

| Name | Type | Описание |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID на тази страница. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook, генериран за тази страница. |

### От версия {#since}

- 2.0.0
### Източник {#source}

Дефиниран в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) на линия 203
