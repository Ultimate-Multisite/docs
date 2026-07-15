---
id: wu_connector_enforcement_option_keys
title: Bộ lọc - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Bộ lọc này dùng để áp dụng danh sách các khóa tùy chọn (option keys) của nhà cung cấp AI được buộc phải tuân theo từ trang chính (main site).

Bạn có thể thêm các khóa tùy chọn cho các plugin nhà cung cấp AI tùy chỉnh hoặc của bên thứ ba để đảm bảo rằng các cài đặt của chúng cũng được kế thừa từ trang chính trên các trang con (subsites).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Tên các khóa tùy chọn cần áp dụng (đã bao gồm các khóa kết nối được phát hiện động và EXTRA_PROVIDER_OPTIONS). |

### Since {#since}

- 1.2.0
### Source {#source}

Được định nghĩa trong [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) tại dòng 206
