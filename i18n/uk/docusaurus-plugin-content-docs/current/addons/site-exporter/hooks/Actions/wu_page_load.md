---
id: wu_page_load
title: Дія - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Action: wu_page_load

Дозволяє розробникам плагінів додавати додаткові гачки до наших сторінок.

## Параметри

| Ім'я | Тип | Опис |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ідентифікатор цієї сторінки. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Гачок, згенерований для цієї сторінки. |

### З версії

- 1.8.2
### Джерело

Визначено в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) на рядку 289
