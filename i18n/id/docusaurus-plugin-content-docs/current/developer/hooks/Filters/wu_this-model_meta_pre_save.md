---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Menyaring data meta sebelum data tersebut diserialisasi dan disimpan ke dalam database.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | Data meta yang akan disimpan, setelah diserialisasi. |
| $data_unserialized | `array` | Data objek yang akan disimpan. |
| $this | `\Base_Model` | Instance objek. |

### Since

- 2.0.0
### Source

Didefinisikan di [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) pada baris 534
