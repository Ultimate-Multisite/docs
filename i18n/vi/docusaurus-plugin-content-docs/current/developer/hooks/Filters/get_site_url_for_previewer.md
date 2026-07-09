---
id: get_site_url_for_previewer
title: Bộ lọc - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Cho phép các nhà phát triển plugin lọc (filter) URL được sử dụng trong khu vực xem trước (previewer).

## Tham số {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | Tên miền mặc định đang được sử dụng, hữu ích cho việc thao tác. |
| $domain_options | `array` | Danh sách tất cả các tùy chọn tên miền đã nhập trong Ultimate Multisite Settings -> Network Settings -> Domain Options |

### Từ phiên bản {#since}

- 1.7.2
### Nguồn {#source}

Được định nghĩa trong [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) tại dòng 812.

## Trả về {#returns}
Tên miền mới sẽ được sử dụng.
