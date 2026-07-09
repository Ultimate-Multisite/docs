---
id: wu_should_create_domain_record_for_site
title: מסנן - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# פילטר: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

מסנן האם Ultimate Multisite צריך ליצור רשומת דומיין עבור אתר שנוצר לאחרונה.

השתמשו בפילטר זה כדי למנוע או לדחות יצירה אוטומטית של רשומת דומיין עבור אתרים שמשתמשים בדומיין בסיס משותף של טופס רכישה, מארח פנימי, או דומיין שאינטגרציה אחרת תנהל בנפרד.

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | האם יש ליצור את רשומת הדומיין. |
| $site | `WP_Site` | אובייקט האתר שנוצר לאחרונה. |

### מאז {#since}

- 2.13.0

### מקור {#source}

מוגדר ב־`inc/functions/domain.php`.


## החזרות {#returns}

ערך בוליאני המציין האם ליצור את רשומת הדומיין.
