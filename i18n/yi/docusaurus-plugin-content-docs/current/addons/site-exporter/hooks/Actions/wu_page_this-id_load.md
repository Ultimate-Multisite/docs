---
id: wu_page_this-id_load
title: 'אַקציע - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

דערלויבט plugin־אַנטוויקלערס צוצולייגן נאָך hooks צו אַ ספּעציפישער בלאַט.

באַניץ: דער דינאַמישער טייל דאַרף ווערן ערזעצט מיט אַ גילטיקער בלאַט־ID, למשל add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## פּאַראַמעטערס {#parameters}

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | דער ID פֿון דעם בלאַט. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | דער hook געשאַפֿן פֿאַר דעם בלאַט. |

### זינט {#since}

- 1.8.2
### מקור {#source}

דעפֿינירט אין [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) אויף שורה 301
