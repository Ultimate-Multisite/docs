---
id: wu_page_added
title: عمل - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# عمل: wu_page_added

plugin ڊولپرز کي اجازت ڏيو ته جڏهن صفحا رجسٽر ڪيا وڃن ته اضافي شيون هلائي سگهن.

wu_page_load جي ابتڙ، جيڪو صرف تڏهن هلندو آهي جڏهن ڪو مخصوص صفحو ڏٺو پيو وڃي، هي hook هر منتظم صفحي جي رجسٽريشن وقت هلندو آهي جيڪو WP Ultimo ڪوڊ استعمال ڪندي شامل ڪيو وڃي ٿو.

## پيرا ميٽرز {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | هن صفحي جو ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | هن صفحي لاءِ ٺاهيل hook. |

### کان وٺي {#since}

- 2.0.0
### ماخذ {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) ۾ line 203 تي بيان ڪيل.
