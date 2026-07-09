---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Belirli bir səhifənin render edilməsindən əvvəl işə düşür.

İstifadəsi: Dinamik hissəni etibarlı bir səhifə ID-si ilə əvəz etmək lazımdır, məsələn: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Səhifənin ID-si. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page nümunəsi. |

### Nə vaxtdan {#since}

- 1.8.2
### Mənbə {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) faylında 368-ci sətirdə təyin edilmişdir.
