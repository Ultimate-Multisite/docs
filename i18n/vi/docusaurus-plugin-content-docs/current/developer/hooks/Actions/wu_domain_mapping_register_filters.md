---
id: wu_domain_mapping_register_filters
title: Hành động - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Một số plugin có thể lưu URL trước khi tính năng mapping này được kích hoạt, hoặc chúng có thể xây dựng URL theo cách khác không được bao gồm trong các bộ lọc đã nêu ở trên.

Trong những trường hợp như vậy, chúng ta cần thêm các bộ lọc bổ sung. Tham số thứ hai được truyền vào là callback `mangle_url`. Chúng tôi không khuyến khích sử dụng bộ lọc này trực tiếp. Thay vào đó, bạn nên sử dụng phương thức `Domain_Mapping::apply_mapping_to_url`.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | Hàm gọi (callable) `mangle`. |
| $domain_mapper | `self` | Đối tượng này. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) tại dòng 530
