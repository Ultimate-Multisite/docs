---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save {#filter-wuthis-modelpresave}

Memfilter data objek sebelum data tersebut disimpan ke database.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | Data objek yang akan disimpan, diserialisasi. |
| $data_unserialized | `array` | Data objek yang akan disimpan. |
| $this | `\Base_Model` | Instance objek. |

### Since {#since}

- 2.0.0
### Source {#source}

Didefinisikan di [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) pada baris 570
