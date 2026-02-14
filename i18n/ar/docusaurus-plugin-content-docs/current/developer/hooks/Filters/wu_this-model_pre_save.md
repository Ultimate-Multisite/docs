---
id: wu_this-model_pre_save
title: 'تصفية - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# المرشح: wu_\{$this->model\}_pre_save

يُرشّح بيانات الكائن قبل تخزينها في قاعدة البيانات.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $data | `array` | بيانات الكائن التي ستُخزن، مُسلسلة. |
| $data_unserialized | `array` | بيانات الكائن التي ستُخزن. |
| $this | `\Base_Model` | مثيل الكائن. |

### منذ

- 2.0.0

### المصدر

مُعرّف في [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) في السطر 570
