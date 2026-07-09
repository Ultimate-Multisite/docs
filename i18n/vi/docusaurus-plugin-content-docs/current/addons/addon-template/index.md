---
title: Mẫu Addon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Mẫu Addon {#addon-template}

{{ADDON_DESCRIPTION}}

## Yêu cầu {#requirements}

- WordPress 5.3 trở lên
- PHP 7.4 trở lên
- Plugin Multisite Ultimate (đang kích hoạt)

## Cài đặt {#installation}

1. Tải các tệp addon lên thư mục `/wp-content/plugins/`
2. Kích hoạt plugin thông qua menu 'Plugins' trong WordPress
3. Cấu hình các cài đặt addon trong khu vực quản trị mạng (network admin)

## Phát triển {#development}

### Thiết lập {#setup}

```bash
# Cài đặt các dependencies
composer install
npm install

# Chạy các bài kiểm tra
npm run test

# Chạy kiểm tra tiêu chuẩn mã nguồn
vendor/bin/phpcs
vendor/bin/phpstan

# Sửa các vấn đề về phong cách mã nguồn
vendor/bin/phpcbf

# Build cho môi trường sản xuất
npm run build
```

### Cấu trúc dự án {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Các lớp và tệp PHP
│   ├── class-multisite-ultimate-updater.php  # Bộ xử lý cập nhật
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Chức năng chính
├── tests/                        # Các bài kiểm tra đơn vị
│   ├── bootstrap.php            # Khởi động kiểm tra
│   ├── class-*-base.php         # Lớp kiểm tra cơ sở
│   └── class-*-test.php         # Các trường hợp kiểm tra
├── views/                       # Các tệp mẫu
├── assets/                      # Tài sản tĩnh
│   ├── css/                     # Bảng kiểu (Stylesheets)
│   ├── js/                      # Các tệp JavaScript
│   └── images/                  # Hình ảnh
├── lang/                        # Các tệp ngôn ngữ
├── composer.json                # Các dependencies PHP
├── package.json                 # Các dependencies Node.js
├── phpunit.xml.dist             # Cấu hình PHPUnit
├── .phpcs.xml.dist              # Cấu hình tiêu chuẩn mã nguồn
└── rector.php                   # Quy tắc hiện đại hóa mã nguồn
```

### Kiểm thử {#testing}

Addon bao gồm một framework kiểm thử toàn diện:

- **Bài kiểm tra đơn vị (Unit Tests)**: Các bài kiểm tra dựa trên PHPUnit cùng với bộ kiểm thử của WordPress.
- **Lớp kiểm tra cơ sở (Base Test Class)**: Cung cấp các phương thức hỗ trợ cho các kịch bản kiểm tra phổ biến.
- **Độ bao phủ kiểm thử (Test Coverage)**: Được cấu hình để theo dõi độ bao phủ mã nguồn.
- **Kiểm thử Multisite**: Các bài kiểm tra chạy trong môi trường multisite.

### Tiêu chuẩn mã nguồn {#code-standards}

- **Tiêu chuẩn mã nguồn WordPress**: Được thực thi bằng PHPCS.
- **Tương thích PHP 7.4+**: Hỗ trợ các tính năng PHP hiện đại.
- **Phân tích tĩnh (Static Analysis)**: Tích hợp PHPStan để kiểm tra kiểu dữ liệu.
- **Hiện đại hóa mã nguồn (Code Modernization)**: Quy tắc Rector để nâng cấp PHP.

### Hệ thống Build {#build-system}

- **Xử lý tài sản (Asset Processing)**: Thu gọn (Minification) cho các tệp CSS/JS.
- **Dịch thuật (Translation)**: Tạo tệp POT.
- **Đóng gói (Packaging)**: Tạo kho lưu trữ (archive) để phân phối.
- **Chế độ phát triển (Development Mode)**: Tài sản chưa thu gọn để gỡ lỗi.

## Cấu hình {#configuration}

Addon hỗ trợ nhiều tùy chọn cấu hình khác nhau, có thể truy cập thông qua giao diện quản trị mạng.

## Hooks và Filters {#hooks-and-filters}

### Actions (Hành động) {#actions}

- `ultimate-multisite-addon-template_init` - Được kích hoạt sau khi addon được khởi tạo.
- `ultimate-multisite-addon-template_loaded` - Được kích hoạt sau khi tất cả các tệp addon được tải.

### Filters (Bộ lọc) {#filters}

- `ultimate-multisite-addon-template_settings` - Sửa đổi cài đặt của addon.
- `ultimate-multisite-addon-template_enabled` - Ghi đè trạng thái bật/tắt của addon.

## Giấy phép {#license}

Addon này được cấp phép theo GPL v3 trở lên.

## Hỗ trợ {#support}

Để được hỗ trợ và tài liệu chi tiết, vui lòng truy cập [MultisiteUltimate.com](https://multisiteultimate.com)
## Nhật ký thay đổi (Changelog) {#changelog}

- Version 1.0.1 (2025-09-28): đổi tên tiền tố thành ultimate-multisite; cập nhật text domain; tăng phiên bản.


- Version (2025-09-28): đổi tên tiền tố thành ultimate-multisite; cập nhật text domain; tăng phiên bản.
