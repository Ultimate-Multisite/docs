---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_{$this->id}_after_render

જ્યારે કોઈ ચોક્કસ પેજ રેન્ડર થઈ જાય, ત્યારે આ એક્શન ફાયર થાય છે.

ઉપયોગ: અહીં જે ડાયનેમિક ભાગ છે, તેને માન્ય પેજ ID સાથે બદલવાની જરૂર છે, ઉદાહરણ તરીકે: `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | પેજની ID. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page નું ઇન્સ્ટન્સ. |

### Since

- 1.8.2
### Source

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) પર લાઇન 394 પર વ્યાખ્યાયિત છે.
