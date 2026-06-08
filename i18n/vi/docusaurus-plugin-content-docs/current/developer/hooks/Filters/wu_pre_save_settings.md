---
id: wu_pre_save_settings
title: Bộ lọc - wu_pre_save_settings
sidebar_label: wu_pre_save_settings
_i18n_hash: 9fe0dc9f71e2d9da3869f40ab53dc453
---
# Bộ lọc: wu_pre_save_settings

Bộ lọc này cho phép các nhà phát triển tùy chỉnh (lọc) các cài đặt trước khi chúng được lưu lại bởi Ultimate Multisite.

## Tham số

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $settings | `array` | Các cài đặt cần được lưu. |
| $settings_to_save | `array` | Các cài đặt mới cần thêm vào. |
| $saved_settings | `array` | Các cài đặt hiện tại đã được lưu. |

### Từ phiên bản

- 2.0.18
### Nguồn

Được định nghĩa trong [`inc/class-settings.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-settings.php#L296) tại dòng 296
