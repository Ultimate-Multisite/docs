---
id: wu_page_this-id_load
title: 'Veprim - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Lejo zhvilluesit e plugin të shtojnë hook-e shtesë në faqe specifike.

Përdorimi: Pjesa dinamike duhet të zëvendësohet me një ID të vlefshme faqeje, p.sh. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametrat {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID-ja e kësaj faqeje. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook-u i gjeneruar për këtë faqe. |

### Që nga {#since}

- 1.8.2
### Burimi {#source}

Përcaktuar në [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) në rreshtin 301
