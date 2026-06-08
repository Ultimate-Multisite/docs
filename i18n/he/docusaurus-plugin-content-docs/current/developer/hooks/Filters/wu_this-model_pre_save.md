---
id: wu_this-model_pre_save
title: 'מסנן - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

מסנן את נתוני האובייקט לפני שהם נשמרים במסד הנתונים.

## פרמטרים

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | נתוני האובייקט שישנר (serialized) ויישמרו. |
| $data_unserialized | `array` | נתוני האובייקט שישמרו. |
| $this | `\Base_Model` | מופע האובייקט. |

### מאז

- 2.0.0
### מקור

מוגדר ב-[inc/models/class-base-model.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) בשורה 570
