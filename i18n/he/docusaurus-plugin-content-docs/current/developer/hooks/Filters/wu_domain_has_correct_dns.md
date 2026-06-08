---
id: wu_domain_has_correct_dns
title: פילטר - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

מאפשר למפתחי תוספים להוסיף בדיקות חדשות כדי להגדיר את התוצאות.

## פרמטרים

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | התוצאה הנוכחית. |
| $domain | `self` | מופע הדומיין הנוכחי. |
| $domains_and_ips | `array` | רשימת הדומיינים וכתובות ה-IP שנמצאו בבדיקת ה-DNS. |

### מאז

- 2.0.4
### מקור

מוגדר ב[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) בשורה 455


## מחזיר
אם ה-DNS מוגדר כראוי או לא.
