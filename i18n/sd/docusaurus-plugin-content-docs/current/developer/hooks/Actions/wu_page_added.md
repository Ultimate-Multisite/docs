---
id: wu_page_added
title: عمل - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# عمل: wu_page_added

پلگ اِن ڊولپرن کي اجازت ڏيو ته جڏهن صفحا رجسٽر ٿين، تڏهن اضافي شيون هلائي سگهن.

wu_page_load جي ابتڙ، جيڪو صرف تڏهن هلندو آهي جڏهن ڪو مخصوص صفحو ڏٺو پيو وڃي، هي hook هر ايڊمن صفحي جي رجسٽريشن تي هلندو آهي جيڪو Ultimate Multisite ڪوڊ استعمال ڪندي شامل ڪيو پيو وڃي.

## پيرا ميٽرز

| نالو | قسم | وضاحت |
|------|------|-------------|
| $page_id | `string` | هن صفحي جي ID. |
| $page_hook | `string` | هن صفحي جو hook نالو. |

### کان وٺي

- 2.0.0
### ذريعو

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) ۾ لڪير 228 تي بيان ٿيل آهي.
