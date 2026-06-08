---
id: wu_connector_enforcement_option_keys
title: مرشح - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

تصفية قائمة مفاتيح خيارات مزود الذكاء الاصطناعي التي يتم فرضها من الموقع الرئيسي.

أضف مفاتيح الخيارات الخاصة بإضافات مزودي الذكاء الاصطناعي المخصصة أو التابعة لجهات خارجية، بحيث يتم وراثة إعداداتها أيضًا من الموقع الرئيسي على المواقع الفرعية.

## المعاملات

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | أسماء مفاتيح الخيارات التي سيتم فرضها (تتضمن بالفعل مفاتيح الموصلات المكتشفة ديناميكيًا ومفاتيح EXTRA_PROVIDER_OPTIONS). |

### منذ

- 1.2.0
### المصدر

مُعرّف في [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) في السطر 206
