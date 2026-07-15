---
id: wu_page_this-id_before_render
title: 'Ago - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Ekigas antaŭ bildigo de specifa paĝo.

Uzo: La dinamika parto devas esti anstataŭigita per valida paĝa id, ekz. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | La id de la paĝo. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | La ekzemplero de Base Admin Page. |

### Ekde {#since}

- 1.8.2
### Fonto {#source}

Difinita en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) ĉe linio 368
