---
id: wu_this-model_meta_pre_save
title: 'فلتر - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# عامل التصفية: wu_\{$this->model\}_meta_pre_save

يقوم بتصفية بيانات الميتا قبل تسلسلها لتخزينها في قاعدة البيانات.

## المعاملات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $meta | `array` | البيانات الميتا التي ستُخزن، غير مسلسلة/مسلسلة. |
| $data_unserialized | `array` | بيانات الكائن التي ستُخزن. |
| $this | `\Base_Model` | مثيل الكائن. |

### منذ

- 2.0.0

### المصدر

مُعرّف في [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) في السطر 534
