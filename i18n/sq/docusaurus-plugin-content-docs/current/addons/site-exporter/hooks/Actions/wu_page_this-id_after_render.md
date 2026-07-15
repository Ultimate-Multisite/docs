---
id: wu_page_this-id_after_render
title: 'Veprim - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Ekzekutohet pas renderimit të një faqeje specifike.

Përdorimi: Pjesa dinamike duhet të zëvendësohet me një ID të vlefshme faqeje, p.sh. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametrat {#parameters}

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID-ja e faqes. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instanca Base Admin Page. |

### Që nga {#since}

- 1.8.2
### Burimi {#source}

Përcaktuar në [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) në rreshtin 394
