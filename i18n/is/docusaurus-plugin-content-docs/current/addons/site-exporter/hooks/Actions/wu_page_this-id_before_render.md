---
id: wu_page_this-id_before_render
title: 'Aðgerð - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Keyrist áður en tiltekin síða er birt.

Notkun: Skipta þarf út breytilega hlutanum fyrir gilt síðuauðkenni, t.d. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Færibreytur {#parameters}

| Heiti | Gerð | Lýsing |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Auðkenni síðunnar. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page-tilvikið. |

### Síðan {#since}

- 1.8.2
### Uppruni {#source}

Skilgreint í [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) í línu 368
