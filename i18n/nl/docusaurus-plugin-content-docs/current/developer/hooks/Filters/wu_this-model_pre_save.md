---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Filtert de objectgegevens voordat ze in de database worden opgeslagen.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | De objectgegevens die worden opgeslagen, geserialiseerd. |
| $data_unserialized | `array` | De objectgegevens die worden opgeslagen. |
| $this | `\Base_Model` | De objectinstantie. |

### Since

- 2.0.0
### Source

Gedefinieerd in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) op regel 570
