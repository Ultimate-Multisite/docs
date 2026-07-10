---
id: wu_domain_seller_search_delay
title: Bộ lọc - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Bộ lọc này dùng để điều chỉnh độ trễ (debounce delay) tìm kiếm tên miền tính bằng mili giây.

Bạn nên tăng giá trị này nếu muốn giảm số lượng lời gọi API khi kết nối mạng của người dùng chậm.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | Độ trễ chống rung (debounce delay) tính bằng mili giây. Mặc định là 500. |

### Since {#since}

- 2.1.0
### Source {#source}

Được định nghĩa trong [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) tại dòng 854
