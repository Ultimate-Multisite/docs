---
id: wu_page_this-id_after_render
title: 'Aðgerð - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Keyrir eftir birtingu tiltekinnar síðu.

Notkun: Skipta þarf út breytilega hlutanum fyrir gilt síðuauðkenni, t.d. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Færibreytur {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Auðkenni síðunnar. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page-tilvikið. |

### Síðan {#since}

- 1.8.2
### Uppruni {#source}

Skilgreint í [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) í línu 394
