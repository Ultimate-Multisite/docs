---
id: wu_dashboard_this-tab_widgets
title: 'Action - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_\{$this->tab\}_widgets

מאפשר למפתחי תוספים להוסיף ווידג'טים (widgets) לפאנל ה-Dashboard של הרשת (Network Dashboard Panel).

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $tab | `string` | הכרטיסייה הנוכחית. |
| $screen | `\WP_Screen` | אובייקט המסך. |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | מופע (instance) של דף המנהל של Ultimate Multisite. |

### מאז {#since}

- 2.0.0
### מקור {#source}

מוגדר ב[`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) בשורה 214
