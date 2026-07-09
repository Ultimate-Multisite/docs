---
id: wu_model_post_save
title: Hành động - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

Được kích hoạt sau khi một đối tượng được lưu vào cơ sở dữ liệu.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | Slug của model. |
| $data | `array` | Dữ liệu đối tượng sẽ được lưu, đã được tuần tự hóa (serialized). |
| $data_unserialized | `array` | Dữ liệu đối tượng sẽ được lưu. |
| $this | `\Base_Model` | Thể hiện đối tượng. |

### Since {#since}

- 2.0.0
### Source {#source}

- Được định nghĩa tại [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) dòng 613
- Được định nghĩa tại [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) dòng 1743
