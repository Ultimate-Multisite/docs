---
id: wu_domain_mapping_register_filters
title: פעולה - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

יש תוספים שישמרו כתובות URL לפני שהמיפוי היה פעיל, או שיבנו כתובות URL בצורה שונה שלא נכללה במסננים (filters) שצוינו למעלה.

במקרים כאלה, אנו רוצים להוסיף מסננים נוספים. הפרמטר השני שנמסר הוא ה-callback `mangle_url`. אנו ממליצים להימנע משימוש במסנן הזה ישירות. במקום זאת, השתמש במתודה `Domain_Mapping::apply_mapping_to_url`.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | ה-callback המבצע את ה-mangle. |
| $domain_mapper | `self` | אובייקט זה. |

### Since

- 2.0.0
### Source

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) at line 530
