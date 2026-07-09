---
id: wu_this-model_pre_save
title: 'Bộ lọc - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save {#filter-wuthis-modelpresave}

Bộ lọc này sẽ lọc dữ liệu đối tượng trước khi dữ liệu đó được lưu vào cơ sở dữ liệu.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | Dữ liệu đối tượng sẽ được lưu, đã được tuần tự hóa (serialized). |
| $data_unserialized | `array` | Dữ liệu đối tượng sẽ được lưu. |
| $this | `\Base_Model` | Thể hiện đối tượng (object instance). |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa tại [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) ở dòng 570
