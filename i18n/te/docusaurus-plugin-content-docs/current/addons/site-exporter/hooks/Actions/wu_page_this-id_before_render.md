---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

ఒక నిర్దిష్ట పేజీ రెండర్ (render) అవ్వడానికి ముందు ఇది పనిచేస్తుంది.

**వినియోగం:** ఇక్కడ ఉన్న డైనమిక్ భాగాన్ని (dynamic part) సరైన పేజీ ID తో భర్తీ చేయాలి. ఉదాహరణకు: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | పేజీ యొక్క ID. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page యొక్క ఇన్స్టాన్స్. |

### Since {#since}

- 1.8.2
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) లోని 368వ లైన్‌లో నిర్వచించబడింది.
