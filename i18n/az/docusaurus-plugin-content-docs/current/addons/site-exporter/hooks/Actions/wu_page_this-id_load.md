---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Plugin developerları-nın müəyyən bir səhifəyə əlavə hook-lar əlavə etməsinə imkan verir.

İstifadəsi: Dinamik hissənin etibarlı bir səhifə ID-si ilə əvəz edilməsi lazımdır, məsələn: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## Parametr {#parameters}

| Ad | Növ | Təsvir |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Bu səhifənin ID-si. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Bu səhifə üçün yaradılan hook. |

### Since {#since}

- 1.8.2
### Source {#source}

[inc/admin-pages/class-base-admin-page.php](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) yerində, 301-ci sətirdə təyin edilmişdir.
