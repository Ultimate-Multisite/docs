---
id: wu_page_this-id_after_render
title: 'אַקציע - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

ווערט אויסגעפֿירט נאָך דעם רענדערן אַ ספּעציפֿישן בלאַט.

באַניץ: דער דינאַמישער טייל דאַרף ווערן פֿאַרביטן מיט אַ גילטיקן בלאַט־id, למשל add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## פּאַראַמעטערס

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | דער id פֿון דעם בלאַט. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | די אינסטאַנץ פֿון Base Admin Page. |

### זינט

- 1.8.2
### מקור

דעפֿינירט אין [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) ביי שורה 394
