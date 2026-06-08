---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

ప్లగిన్ డెవలపర్‌లు నిర్దిష్ట పేజీకి అదనపు హుక్స్ (hooks) జోడ చేయడానికి ఇది అనుమతిస్తుంది.

వినియోగం: డైనమిక్ భాగాన్ని (dynamic part) చెల్లుబాటు అయ్యే పేజీ ID తో భర్తీ చేయాలి, ఉదాహరణకు: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## పారామీటర్లు

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ఈ పేజీ యొక్క ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ఈ పేజీకి రూపొందించబడిన హుక్. |

### Since

- 1.8.2
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) at line 301
