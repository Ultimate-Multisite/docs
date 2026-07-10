---
id: wu_get_site_domain_and_path
title: Bộ lọc - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Cho phép các nhà phát triển điều chỉnh các cặp domain/path.

Điều này có thể hữu ích cho nhiều mục đích, chẳng hạn như triển khai giải pháp staging (môi trường thử nghiệm), sử dụng các máy chủ khác nhau, v.v.

## Tham số {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | Đối tượng hiện tại chứa các khóa domain và path. |
| $path_or_subdomain | `string` | Đường dẫn/subdomain gốc được truyền vào hàm. |

### Từ phiên bản {#since}

- 2.0.0
### Nguồn {#source}

Được định nghĩa trong [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) tại dòng 235.

## Giá trị trả về {#returns}
Một đối tượng chứa các khóa domain và path.
