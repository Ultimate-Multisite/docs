---
id: wu_page_this-id_after_render
title: 'Aiki - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Yana faruwa bayan nuna wani takamaiman shafi.

Amfani: Ana buƙatar a maye gurbin ɓangaren dynamic da sahihin page id, misali add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Sigogi

| Suna | Nau’i | Bayani |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id na shafin. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Misalin Base Admin Page. |

### Tun daga

- 1.8.2
### Tushe

An bayyana a cikin [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) a layi na 394
