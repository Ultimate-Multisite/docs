---
id: wu_page_this-id_before_render
title: 'אַקציע - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

ווערט אויסגעפֿירט איידער דאָס רענדערן פֿון אַ ספּעציפֿישער זײַט.

ניצן: דער דינאַמישער טייל דאַרף ווערן פֿאַרביטן מיט אַ גילטיקן זײַט-id, למשל add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## פּאַראַמעטערס

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | דער id פֿון דער זײַט. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | דער Base Admin Page אינסטאַנץ. |

### זינט

- 1.8.2
### מקור

דעפֿינירט אין [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) אויף שורה 368
