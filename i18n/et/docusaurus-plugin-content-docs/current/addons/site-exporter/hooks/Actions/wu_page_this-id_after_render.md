---
id: wu_page_this-id_after_render
title: 'Tegevus - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Käivitub pärast konkreetse lehe renderdamist.

Kasutus: dünaamiline osa tuleb asendada kehtiva lehe id-ga, nt add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Lehe id. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page’i instants. |

### Alates {#since}

- 1.8.2
### Allikas {#source}

Määratletud failis [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) real 394
