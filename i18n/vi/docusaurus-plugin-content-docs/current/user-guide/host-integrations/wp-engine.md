---
title: WP Engine Integration
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Tích hợp WP Engine {#wp-engine-integration}

## Tổng quan {#overview}
WP Engine là nền tảng hosting WordPress quản lý cao cấp, cung cấp hiệu suất tối ưu, bảo mật và khả năng mở rộng cho các trang WordPress. Tích hợp này cho phép đồng bộ tên miền tự động giữa Ultimate Multisite và WP Engine.

## Tính năng {#features}
- Đồng bộ tên miền tự động
- Hỗ trợ subdomain cho cài đặt multisite
- Tích hợp liền mạch với các hệ thống hiện có của WP Engine

## Yêu cầu {#requirements}
Tích hợp này tự động phát hiện nếu bạn đang hosting trên WP Engine và sử dụng API WP Engine tích hợp sẵn. Không cần cấu hình thêm nếu plugin WP Engine đã được kích hoạt và cấu hình đúng cách.

Tuy nhiên, nếu bạn cần cấu hình tích hợp thủ công, bạn có thể định nghĩa một trong các hằng số sau trong file `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Phương pháp được khuyên dùng
// HOẶC
define('WPE_API', 'your_api_key'); // Phương pháp thay thế
```

## Hướng dẫn cài đặt {#setup-instructions}

### 1. Kiểm tra Plugin WP Engine {#1-verify-wp-engine-plugin}

Nếu bạn đang hosting trên WP Engine, plugin WP Engine đáng lẽ đã được cài đặt và kích hoạt sẵn. Hãy xác nhận rằng:

1. Plugin WP Engine đang hoạt động
2. File `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` tồn tại

### 2. Bật tích hợp {#2-enable-the-integration}

1. Trong trang quản trị WordPress, vào Ultimate Multisite > Settings
2. Chuyển đến tab "Domain Mapping"
3. Cuộn xuống phần "Host Integrations"
4. Bật tích hợp WP Engine
5. Nhấn "Save Changes"

## Cách hoạt động {#how-it-works}

### Đồng bộ tên miền {#domain-syncing}

Khi một tên miền được ánh xạ trong Ultimate Multisite:

1. Tích hợp sử dụng API WP Engine để thêm tên miền vào cài đặt WP Engine của bạn
2. WP Engine xử lý cấu hình tên miền và cấp chứng chỉ SSL
3. Khi một ánh xạ tên miền bị xóa, tích hợp sẽ xóa tên miền khỏi WP Engine

### Hỗ trợ Subdomain {#subdomain-support}

Đối với cài đặt multisite dạng subdomain:

1. Tích hợp thêm mỗi subdomain vào WP Engine khi một trang mới được tạo
2. WP Engine xử lý cấu hình subdomain
3. Khi một trang bị xóa, tích hợp sẽ xóa subdomain khỏi WP Engine

## Lưu ý quan trọng {#important-notes}

### Tên miền Wildcard {#wildcard-domains}

Đối với cài đặt multisite dạng subdomain, bạn nên liên hệ bộ phận hỗ trợ WP Engine để yêu cầu cấu hình tên miền wildcard. Điều này cho phép tất cả subdomain hoạt động tự động mà không cần thêm từng cái một.

### Chứng chỉ SSL {#ssl-certificates}

WP Engine tự động xử lý việc cấp và gia hạn chứng chỉ SSL cho tất cả tên miền được thêm thông qua tích hợp này. Không cần cấu hình thêm.

## Xử lý sự cố {#troubleshooting}

### Vấn đề kết nối API {#api-connection-issues}
- Xác nhận rằng plugin WP Engine đang hoạt động và được cấu hình đúng cách
- Nếu bạn đã định nghĩa API key thủ công, kiểm tra xem nó có chính xác không
- Liên hệ bộ phận hỗ trợ WP Engine nếu bạn gặp vấn đề với API

### Tên miền không được thêm {#domain-not-added}
- Kiểm tra nhật ký Ultimate Multisite để xem có thông báo lỗi nào không
- Xác nhận rằng tên miền chưa được thêm vào WP Engine
- Đảm bảo gói WP Engine của bạn hỗ trợ số lượng tên miền bạn đang thêm

### Vấn đề Subdomain {#subdomain-issues}
- Nếu subdomain không hoạt động, liên hệ bộ phận hỗ trợ WP Engine để yêu cầu cấu hình tên miền wildcard
- Xác nhận rằng cài đặt DNS của bạn được cấu hình đúng cho tên miền chính và các subdomain
