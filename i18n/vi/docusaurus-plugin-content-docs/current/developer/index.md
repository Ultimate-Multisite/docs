---
title: Tài liệu dành cho nhà phát triển
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Tài liệu dành cho nhà phát triển

Hướng dẫn này cung cấp cho các nhà phát triển mọi thứ cần thiết để tích hợp, mở rộng hoặc phát triển các addon cho Ultimate Multisite. Ultimate Multisite biến một mạng WordPress Multisite thành một nền tảng Website-as-a-Service (WaaS).

## Các tính năng có sẵn {#whats-available}

- **[REST API](./rest-api/overview)** — Thực hiện đầy đủ các thao tác CRUD cho tất cả các thực thể (khách hàng, trang web, thành viên, thanh toán, sản phẩm, tên miền) với xác thực bằng khóa API
- **[Hooks Reference](./hooks/guide)** — Hơn 200 hook action và hơn 280 hook filter cho các sự kiện vòng đời và tùy chỉnh
- **[Integration Guide](./integration-guide/)** — Các ví dụ về tích hợp CRM, phân tích (analytics), cổng thanh toán tùy chỉnh và webhooks
- **[Code Examples](./code-examples/)** — Các mẫu nâng cao cho định giá động, cấp phát trang web, giới hạn tùy chỉnh và xử lý đa cổng thanh toán
- **[Addon Development](./addon-development/getting-started)** — Khung cấu trúc để xây dựng các plugin addon

## Yêu cầu {#requirements}

- Cài đặt WordPress Multisite
- PHP 7.4 trở lên
- Plugin Ultimate Multisite đã được kích hoạt

## Cài đặt bằng Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite có sẵn trên [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) với tên `ultimate-multisite/ultimate-multisite`. Đây là phương pháp cài đặt được khuyến nghị cho các thiết lập WordPress dựa trên [Bedrock](https://roots.io/bedrock/) và các môi trường được quản lý bằng Composer khác.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Tên gói đã đổi (v2.6.1+)
Gói Composer đã được đổi tên từ `devstone/ultimate-multisite` thành `ultimate-multisite/ultimate-multisite` trong phiên bản v2.6.1. Nếu `composer.json` của bạn tham chiếu đến tên vendor cũ, hãy cập nhật mục `require` và chạy `composer update`.
:::

Sau khi cài đặt, hãy kích hoạt plugin ở cấp độ mạng (network-activate) từ Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Hoặc, nếu bạn đang tải plugin như một plugin bắt buộc sử dụng (must-use plugin) thông qua autoloader của Bedrock, hãy sử dụng filter `wp_ultimo_skip_network_active_check` để bỏ qua cơ chế kiểm tra kích hoạt:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Bắt đầu nhanh {#quick-start}

### Sử dụng REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hook vào các sự kiện {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Phản ứng với việc đăng ký khách hàng mới
});
```

### Xây dựng một Addon {#build-an-addon}

```bash
# Tạo khung addon từ template
bash create-addon.sh
```

Hãy xem từng phần để biết tài liệu và ví dụ chi tiết.
