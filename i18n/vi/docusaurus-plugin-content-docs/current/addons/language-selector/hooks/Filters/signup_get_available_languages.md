---
id: signup_get_available_languages
title: Bộ lọc - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

Bộ lọc này dùng để lọc danh sách các ngôn ngữ khả dụng khi người dùng đăng ký trang web ở giao diện người dùng (front-end).

Nếu bạn truyền một mảng rỗng vào hook này, việc hiển thị cài đặt trên form đăng ký sẽ bị vô hiệu hóa, và hệ thống sẽ sử dụng ngôn ngữ mặc định khi tạo trang web. Các ngôn ngữ chưa được cài đặt sẽ bị loại bỏ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | Các ngôn ngữ khả dụng. |

### Since {#since}

- 4.4.0
### Source {#source}

Được định nghĩa trong [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) tại dòng 117
