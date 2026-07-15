---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

מופעל לפני הצגת עמוד ספציפי.

שימוש: יש להחליף את החלק הדינמי במזהה עמוד תקין, לדוגמה: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | מזהה העמוד. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | מופע (instance) של דף המנהל הבסיסי (Base Admin Page). |

### מאז {#since}

- 1.8.2
### מקור {#source}

מוגדר ב-[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) בשורה 368
