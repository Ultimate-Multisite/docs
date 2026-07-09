---
id: wu_this-model_meta_pre_save
title: 'Bộ lọc - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Bộ lọc này sẽ xử lý dữ liệu meta trước khi nó được tuần tự hóa và lưu vào cơ sở dữ liệu.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | Dữ liệu meta sẽ được lưu, đã được giải tuần tự hóa. |
| $data_unserialized | `array` | Dữ liệu đối tượng sẽ được lưu. |
| $this | `\Base_Model` | Thể hiện đối tượng (object instance). |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) tại dòng 534
