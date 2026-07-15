---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

Kích hoạt sau khi một đối tượng được lưu vào cơ sở dữ liệu.

## Tham số {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | Dữ liệu đối tượng sẽ được lưu. |
| $this | `\Base_Model` | Thể hiện (instance) của đối tượng. |
| $new | `bool` | `True` nếu đối tượng là mới. |

### Từ phiên bản {#since}

- 2.0.0
### Nguồn {#source}

- Được định nghĩa trong [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) tại dòng 624
- Được định nghĩa trong [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) tại dòng 1754
