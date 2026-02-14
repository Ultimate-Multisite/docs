---
id: wu_model_post_save
title: الإجراء - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# الإجراء: wu_model_post_save

يتم إطلاقه بعد تخزين كائن في قاعدة البيانات.

## المعاملات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $model | `string` | الاسم المختصر للنموذج. |
| $data | `array` | بيانات الكائن التي ستُخزن، مُسلسلة. |
| $data_unserialized | `array` | بيانات الكائن التي ستُخزن. |
| $this | `\Base_Model` | مثيل الكائن. |

### منذ

- 2.0.0

### المصدر

- معرف في [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) في السطر 613
- معرف في [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) في السطر 1743
