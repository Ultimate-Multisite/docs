---
id: wu_use_domain_mapping
title: Bộ lọc - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Xác định xem bản ánh xạ có được sử dụng hay không

Thông thường, bạn chỉ muốn cho phép sử dụng các bản ánh xạ đang hoạt động. Tuy nhiên, nếu bạn muốn áp dụng logic phức tạp hơn, hoặc muốn cho phép ánh xạ cả các tên miền không hoạt động, bạn chỉ cần thêm bộ lọc (filter) tại đây.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Bản ánh xạ có được coi là đang hoạt động không? |
| $mapping | `\Domain` | Bản ánh xạ mà chúng ta đang kiểm tra |
| $domain | `string` | |

### Source

Được định nghĩa tại [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) ở dòng 391
