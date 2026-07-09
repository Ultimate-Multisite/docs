---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

מאפשר למפתחי תוספים להוסיף hooks נוספים לדף ספציפי.

**שימוש:** יש להחליף את החלק הדינמי במזהה דף (page id) תקין, לדוגמה: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | מזהה הדף הזה. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ה-hook שנוצר עבור דף זה. |

### מאז {#since}

- 1.8.2
### מקור {#source}

מוגדר ב[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) בשורה 301
