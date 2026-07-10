---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Tải File Mở Rộng Sunrise (Addon Sunrise File Loader) {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 bổ sung trình tải (loader) mở rộng sunrise cho các add-on và các tích hợp custom MU-plugin cần chạy trong quá trình khởi động (bootstrapping) của WordPress sunrise mà không cần chỉnh sửa file `wp-content/sunrise.php` được tạo ra.

## Khi nào nên sử dụng {#when-to-use-it}

Bạn nên sử dụng một extension sunrise khi tích hợp của bạn phải chạy trước khi các plugin thông thường được tải, ví dụ như định tuyến domain tùy chỉnh, xử lý yêu cầu theo host cụ thể, hoặc điều chỉnh mạng lưới (network) sớm.

Đối với các tích hợp thông thường, bạn nên ưu tiên sử dụng các plugin WordPress thông thường, MU-plugins, và các hook được ghi tài liệu của Ultimate Multisite. Code sunrise chạy rất sớm và nên giữ cho nó nhỏ gọn, phòng thủ (defensive), và không phụ thuộc vào các thư viện bên ngoài (dependency-free).

## Quy ước đặt tên file {#file-naming-convention}

Tạo một file PHP có tên là `sunrise.php` trong thư mục add-on có tên bắt đầu bằng `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Trình tải sẽ quét thư mục plugins để tìm mẫu này:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Các file khớp sẽ được tải theo thứ tự bảng chữ cái của đường dẫn add-on.

## Vị trí đặt file {#where-to-place-the-file}

Hãy đặt file này trong thư mục gốc của add-on sở hữu hành vi sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Việc quét này được giải quyết tương đối so với `WP_CONTENT_DIR`, chứ không phải giá trị hiện tại của `WP_PLUGIN_DIR`. Điều này giúp việc khám phá (discovery) ổn định ngay cả khi cơ chế đa thuê (multi-tenancy) hoặc các code khởi động sớm khác thay đổi hằng số thư mục plugin trong quá trình sunrise.

Tuyệt đối không chỉnh sửa trực tiếp file `wp-content/sunrise.php` được tạo ra. Trình tải cho phép code tùy chỉnh mở rộng hành vi sunrise mà không cần phải tạo nhánh (forking) file sunrise cốt lõi mà Ultimate Multisite đã cài đặt và cập nhật.

## Các hook và filter có sẵn {#hooks-and-filters-available}

Các file sunrise add-on chạy sau khi ánh xạ domain của Ultimate Multisite đã được tải và trước khi WordPress kích hoạt `ms_loaded`. Tại thời điểm này, một file sunrise có thể:

- đọc hoặc ghi đè `$current_site` và `$current_blog`;
- truy cập `$wpdb` sau khi cấu hình cơ sở dữ liệu đã được tải;
- định nghĩa các hằng số thời điểm sunrise như `BLOG_ID_CURRENT_SITE` khi cần;
- đọc trạng thái helper sunrise của Ultimate Multisite, bao gồm trạng thái định tuyến được sử dụng bởi các tích hợp multi-tenancy.

Ultimate Multisite kích hoạt `wu_sunrise_loaded` sau khi trình tải sunrise của nó hoàn tất. Hãy sử dụng action này cho các code cần chạy sau khi khởi động sunrise hoàn tất nhưng vẫn thuộc vòng đời sunrise.

Chỉ gọi các hàm đã được tải trong giai đoạn sunrise. Tránh các tác vụ nặng về cơ sở dữ liệu, render template, yêu cầu HTTP, và các code giả định rằng thứ tự tải plugin thông thường đã hoàn thành.

## Ví dụ tối thiểu {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

Sau khi triển khai file, hãy tải một domain đã được ánh xạ và một URL main-site chưa được ánh xạ để xác nhận cả hai đường dẫn vẫn khởi động đúng cách.
