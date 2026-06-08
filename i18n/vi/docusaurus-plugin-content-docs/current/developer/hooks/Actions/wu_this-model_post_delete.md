---
id: wu_this-model_post_delete
title: 'Action - wu_{$this->model}_post_delete'
sidebar_label: 'wu_{$this->model}_post_delete'
_i18n_hash: 723d566c67fd82808273b2eb42c96d73
---
# Action: wu_\{$this->model\}_post_delete

Hook này được kích hoạt sau khi một đối tượng đã được lưu vào cơ sở dữ liệu.

## Tham số

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | `True` nếu đối tượng đã được xóa thành công. |
| $this | `\Base_Model` | Thể hiện (instance) của đối tượng. |

### Từ phiên bản

- 2.0.0
### Nguồn

- Được định nghĩa trong [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L663) tại dòng 663
- Được định nghĩa trong [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1503) tại dòng 1503
