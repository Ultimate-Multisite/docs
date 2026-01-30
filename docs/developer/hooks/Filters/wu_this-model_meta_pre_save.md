---
id: wu_this-model_meta_pre_save
title: "Filter - wu_{$this->model}_meta_pre_save"
sidebar_label: "wu_{$this->model}_meta_pre_save"
---

# Filter: wu_\{$this->model\}_meta_pre_save

Filters the data meta before it is serialized to be stored into the database.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | The meta data that will be stored, unserializedserialized. |
| $data_unserialized | `array` | The object data that will be stored. |
| $this | `\Base_Model` | The object instance. |

### Since

- 2.0.0
### Source

Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) at line 534

