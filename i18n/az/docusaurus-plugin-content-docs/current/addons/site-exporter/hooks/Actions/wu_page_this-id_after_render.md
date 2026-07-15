---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Müəyyən bir səhifə göstərildikdən sonra işə düşür.

İstifadəsi: Dinamik hissəni etibarlı bir səhifə ID-si ilə əvəz etmək lazımdır, məsələn: `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Səhifənin ID-si. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page nümunəsi. |

### Nə vaxtdan {#since}

- 1.8.2
### Mənbə {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) faylında 394-cü sətirdə təyin edilmişdir.
