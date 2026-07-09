---
id: wu_page_added
title: אַקציע - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# אַקציע: wu_page_added

דערלויבט plugin־אַנטוויקלערס צו דורכפֿירן נאָך זאַכן ווען בלעטער ווערן רעגיסטרירט.

ניט ווי wu_page_load, וואָס לויפֿט נאָר ווען אַ ספּעציפֿישע בלאַט ווערט געזען, לויפֿט דער hook בײַ רעגיסטראַציע פֿאַר יעדער admin־בלאַט וואָס ווערט צוגעלייגט מיט Ultimate Multisite קאָד.

## פּאַראַמעטערס

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $page_id | `string` | דער ID פֿון דער בלאַט. |
| $page_hook | `string` | דער hook־נאָמען פֿון דער בלאַט. |

### זינט

- 2.0.0
### מקור

דעפֿינירט אין [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) בײַ שורה 228
