---
id: wu_page_this-id_before_render
title: 'Veprim - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Aktivizohet para renderimit të një faqeje specifike.

Përdorimi: Pjesa dinamike duhet të zëvendësohet me një id të vlefshëm faqeje, p.sh. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parametrat

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id-ja e faqes. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instanca Base Admin Page. |

### Që nga

- 1.8.2
### Burimi

Përcaktuar në [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) në rreshtin 368
