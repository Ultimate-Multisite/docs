---
id: wu_page_added
title: عمل - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# عمل: wu_page_added {#action-wupageadded}

plugin ڊولپرز کي اجازت ڏئي ٿو ته جڏهن صفحا رجسٽر ٿين، تڏهن اضافي شيون هلائن.

wu_page_load جي ابتڙ، جيڪو صرف تڏهن هلندو آهي جڏهن ڪو مخصوص صفحو ڏٺو پيو وڃي، هي hook هر admin صفحي جي رجسٽريشن وقت هلندو آهي جيڪو WP Ultimo ڪوڊ استعمال ڪندي شامل ڪيو پيو وڃي.

## پيراميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | هن صفحي جي ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | هن صفحي لاءِ ٺاهيل hook. |

### کان وٺي {#since}

- 2.0.0
### ذريعو {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) ۾ لڪير 203 تي بيان ٿيل آهي.
