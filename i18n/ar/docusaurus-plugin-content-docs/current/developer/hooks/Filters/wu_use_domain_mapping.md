---
id: wu_use_domain_mapping
title: فلتر - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# المرشح: wu_use_domain_mapping

تحديد ما إذا كان يجب استخدام التعيين

عادةً، سترغب في السماح باستخدام التعيينات النشطة فقط. ومع ذلك، إذا كنت تريد استخدام منطق أكثر تعقيدًا، أو السماح بتعيين النطاقات غير النشطة أيضًا، ففقط قم بالتصفيه هنا.

## المعلمات

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | هل يجب اعتبار التعيين نشطًا؟ |
| $mapping | `\Domain` | التعيين الذي نقوم بفحصه |
| $domain | `string` |  |

### المصدر

مُعرَّف في `[inc/class-domain-mapping.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391)` في السطر 391
