---
id: wu_model_post_save
title: פעולה - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# פעולה: wu_model_post_save

מופעל לאחר שמירת אובייקט במסד הנתונים.

## פרמטרים

| שם | סוג | תיאור |
|------|------|-------------|
| $model | `string` | הסלוג של המודל. |
| $data | `array` | נתוני האובייקט שיישמרו, לאחר הקידוד (serialized). |
| $data_unserialized | `array` | נתוני האובייקט כפי שהם, לפני הקידוד. |
| $this | `\Base_Model` | מופע האובייקט הנוכחי. |

### מאז

- 2.0.0
### מקור

- מוגדר ב[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) בשורה 613
- מוגדר ב[`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) בשורה 1743
