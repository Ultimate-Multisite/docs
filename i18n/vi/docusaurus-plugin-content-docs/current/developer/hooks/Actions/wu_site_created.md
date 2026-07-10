---
id: wu_site_created
title: Hành động - wu_site_created
sidebar_label: wu_site_created
_i18n_hash: 0f7bc337be7a1f9c47c1e442fe04b9ae
---
# Action: wu_site_created {#action-wusitecreated}

Hành động này được kích hoạt sau khi một trang web được tạo lần đầu tiên.

Nó sẽ không kích hoạt nếu trang web được nhân bản từ một mẫu (template).

## Tham số {#parameters}

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $data | `array` | Dữ liệu đối tượng sẽ được lưu trữ. |
| $site | `\Site` | Thể hiện đối tượng. |

### Từ phiên bản {#since}

- 2.0.0
### Nguồn {#source}

Được định nghĩa trong [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1652) tại dòng 1652
