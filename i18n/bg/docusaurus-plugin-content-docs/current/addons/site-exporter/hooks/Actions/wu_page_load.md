---
id: wu_page_load
title: Действие - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Action: wu_page_load

Позволява на разработчиците на плагини да добавят допълнителни хукове към нашите страници.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID на тази страница. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Хукът, генериран за тази страница. |

### От версия {#since}

- 1.8.2
### Източник {#source}

Дефиниран в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) на линия 289
