---
id: wu_page_added
title: Дејство - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Дејство: wu_page_added

Овозможува на развивачите на plugin-и да извршуваат дополнителни работи кога страниците се регистрираат.

За разлика од wu_page_load, кој се извршува само кога се гледа одредена страница, овој hook се извршува при регистрација за секоја администраторска страница што се додава со користење на WP Ultimo код.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID-то на оваа страница. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook-от генериран за оваа страница. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) на линија 203
