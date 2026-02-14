---
id: wu_domain_mapping_register_filters
title: الإجراء - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

بعض الإضافات قد تقوم بحفظ عنوان URL قبل تفعيل التعيين أو قد تبني عناوين URL بطريقة مختلفة لا تتضمنها الفلاتر المذكورة أعلاه.

في مثل هذه الحالات، نريد إضافة فلاتر إضافية. المعامل الثاني الممر هو دالة `mangle_url`. نوصي بعدم استخدام هذا الفلتر مباشرة. بدلاً من ذلك، استخدم طريقة `Domain_Mapping::apply_mapping_to_url`.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $mangle_url | `callable` | الدالة القابلة للتشويه. |
| $domain_mapper | `self` | هذا الكائن. |

### Since

- 2.0.0

### Source

تم تعريفه في [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) في السطر 530
