---
id: wu_page_this-id_before_render
title: 'Omume - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Na-arụ tupu igosi ibe a kapịrị ọnụ.

Ojiji: A ga-eji id ibe ziri ezi dochie akụkụ dynamic ahụ, dịka add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Paramita {#parameters}

| Aha | Ụdị | Nkọwa |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id nke ibe ahụ. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instance nke Base Admin Page. |

### Kemgbe {#since}

- 1.8.2
### Isi mmalite {#source}

A kọwara ya na [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) na ahịrị 368
