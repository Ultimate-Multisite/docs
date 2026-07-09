---
id: wu_this-model_pre_save
title: 'Penapis - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save {#filter-wuthis-modelpresave}

Menapis data objek sebelum ia disimpan ke dalam database.

## Parameter {#parameters}

| Name | Type | Penerangan |
|------|------|-------------|
| $data | `array` | Data objek yang akan disimpan, diserialisasi. |
| $data_unserialized | `array` | Data objek yang akan disimpan. |
| $this | `\Base_Model` | Instans objek. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan dalam [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) pada baris 570
