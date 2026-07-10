---
id: wu_page_this-id_after_render
title: 'Ago - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Ekigas post bildigo de specifa paĝo.

Uzado: La dinamika parto devas esti anstataŭigita per valida paĝa id, ekz. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | La id de la paĝo. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | La Base Admin Page-instanco. |

### Ekde {#since}

- 1.8.2
### Fonto {#source}

Difinita en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) ĉe linio 394
