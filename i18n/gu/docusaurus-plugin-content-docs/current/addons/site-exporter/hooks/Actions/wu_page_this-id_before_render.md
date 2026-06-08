---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_{$this->id}_before_render

જ્યારે કોઈ ચોક્કસ પેજ બતાવવામાં આવે તે પહેલાં આ એક્શન ટ્રિગર થાય છે.

ઉપયોગ (Usage): અહીં 'dynamic part' ને માન્ય પેજ ID (valid page id) થી બદલવાની જરૂર છે, ઉદાહરણ તરીકે: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## પેરામીટર્સ (Parameters)

| નામ (Name) | પ્રકાર (Type) | વર્ણન (Description) |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | પેજની ID. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page નું ઇન્સ્ટન્સ. |

### ક્યારથી (Since)

- 1.8.2
### સ્ત્રોત (Source)

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) માં લાઇન 368 પર વ્યાખ્યાયિત છે.
