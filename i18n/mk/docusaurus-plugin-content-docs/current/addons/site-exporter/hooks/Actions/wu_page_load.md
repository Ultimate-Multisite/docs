---
id: wu_page_load
title: Акција - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Action: wu_page_load {#action-wupageload}

Дозволува на развивачите на plugin-и да додаваат дополнителни hooks на нашите страници.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID на оваа страница. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook генериран за оваа страница. |

### Од верзија {#since}

- 1.8.2
### Извор {#source}

Дефинирано во [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) на линија 289
