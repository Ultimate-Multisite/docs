---
id: wu_model_post_save
title: "Action - wu_model_post_save"
sidebar_label: "wu_model_post_save"
---

# Action: wu_model_post_save

Fires after an object is stored into the database.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | The model slug. |
| $data | `array` | The object data that will be stored, serialized. |
| $data_unserialized | `array` | The object data that will be stored. |
| $this | `\Base_Model` | The object instance. |

### Since

- 2.0.0
### Source

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) at line 613
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) at line 1743