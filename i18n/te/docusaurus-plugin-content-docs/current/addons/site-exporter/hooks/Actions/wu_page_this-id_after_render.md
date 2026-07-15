---
id: wu_page_this-id_after_render
title: 'చర్య - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_{$this->id}_after_render

ఒక నిర్దిష్ట పేజీని రెండర్ చేసిన తర్వాత ఇది ట్రిగ్గర్ అవుతుంది.

Usage: ఇక్కడ డైనమిక్ భాగాన్ని (dynamic part) చెల్లుబాటు అయ్యే పేజీ ID తో మార్చాలి, ఉదాహరణకు: `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | పేజీ యొక్క ID. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page యొక్క ఉదాహరణ (instance). |

### Since {#since}

- 1.8.2
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) at line 394
