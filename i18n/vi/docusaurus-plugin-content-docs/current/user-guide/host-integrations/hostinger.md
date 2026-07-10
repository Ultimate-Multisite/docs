---
title: Tích hợp Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Tích hợp Hostinger (hPanel) {#hostinger-hpanel-integration}

## Tổng quan {#overview}

Hostinger là một nhà cung cấp dịch vụ lưu trữ web phổ biến với bảng điều khiển hiện đại gọi là hPanel. Tích hợp Ultimate Multisite Hostinger cho phép đồng bộ hóa tên miền tự động giữa Ultimate Multisite và hPanel của Hostinger. Điều này giúp bạn quản lý bản đồ tên miền và các subdomain một cách tự động ngay từ trang quản trị WordPress của mình.

## Tính năng {#features}

- Tự động tạo addon domain trong hPanel
- Tự động tạo subdomain trong hPanel (dành cho các cài đặt multisite subdomain)
- Xóa tên miền khi bản đồ tên miền bị xóa
- Tích hợp liền mạch với API quản lý tên miền của hPanel

## Yêu cầu {#requirements}

Để sử dụng tích hợp Hostinger, bạn cần:

1. Tài khoản Hostinger có quyền truy cập hPanel
2. Một token API từ Hostinger
3. Định nghĩa các hằng số sau trong tệp `wp-config.php` của bạn:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Tùy chọn, bạn cũng có thể định nghĩa:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Điểm cuối API mặc định
```

## Hướng dẫn thiết lập {#setup-instructions}

### 1. Tạo Token API Hostinger của bạn {#1-generate-your-hostinger-api-token}

1. Đăng nhập vào tài khoản Hostinger và truy cập hPanel
2. Điều hướng đến **Account Settings** → **API Tokens**
3. Nhấp vào **Create New Token**
4. Đặt tên mô tả cho token của bạn (ví dụ: "Ultimate Multisite")
5. Chọn các quyền cần thiết:
   - Quản lý tên miền (Domain management)
   - Quản lý subdomain (Subdomain management)
6. Sao chép token đã tạo và lưu trữ nó ở nơi an toàn

### 2. Tìm Account ID của bạn {#2-find-your-account-id}

1. Trong hPanel, đi tới **Account Settings** → **Account Information**
2. Account ID của bạn sẽ được hiển thị trên trang này
3. Sao chép và lưu ID này cho bước tiếp theo

### 3. Thêm hằng số vào wp-config.php {#3-add-constants-to-wp-configphp}

Thêm các hằng số sau vào tệp `wp-config.php` của bạn:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Nếu tài khoản Hostinger của bạn sử dụng điểm cuối API khác, bạn có thể tùy chỉnh nó:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Kích hoạt tích hợp {#4-enable-the-integration}

1. Trong trang quản trị WordPress, đi tới **Ultimate Multisite > Settings**
2. Điều hướng đến tab **Domain Mapping**
3. Cuộn xuống **Host Integrations**
4. Bật tích hợp **Hostinger (hPanel)**
5. Nhấp vào **Save Changes**

## Cách thức hoạt động {#how-it-works}

### Addon Domains (Tên miền phụ) {#addon-domains}

Khi bạn ánh xạ (map) một tên miền trong Ultimate Multisite:

1. Tích hợp sẽ gửi yêu cầu đến API của Hostinger để thêm tên miền đó dưới dạng addon domain.
2. Tên miền sẽ được cấu hình để trỏ đến thư mục gốc của bạn.
3. Khi bản đồ tên miền bị xóa, tích hợp sẽ tự động xóa addon domain khỏi hPanel.

### Subdomains {#subdomains}

Đối với các cài đặt multisite subdomain, khi một trang web mới được tạo:

1. Tích hợp sẽ trích xuất phần subdomain từ tên miền đầy đủ.
2. Nó gửi yêu cầu đến API của Hostinger để thêm subdomain đó.
3. Subdomain sẽ được cấu hình để trỏ đến thư mục gốc của bạn.

## Lưu ý quan trọng {#important-notes}

- Tích hợp sử dụng REST API của Hostinger để giao tiếp với tài khoản của bạn.
- Token API của bạn phải có các quyền cần thiết để quản lý tên miền và subdomain.
- Tích hợp không xử lý cấu hình DNS; các tên miền phải được trỏ đến tài khoản Hostinger của bạn trước.
- Các yêu cầu API được thực hiện an toàn qua HTTPS.
- Hãy giữ token API của bạn an toàn và không bao giờ chia sẻ nó công khai.

## Khắc phục sự cố {#troubleshooting}

### Sự cố kết nối API {#api-connection-issues}

- Xác minh rằng token API của bạn là chính xác và chưa hết hạn.
- Kiểm tra xem Account ID của bạn đã đúng chưa.
- Đảm bảo rằng token API của bạn có các quyền cần thiết để quản lý tên miền.
- Xác minh rằng tài khoản Hostinger của bạn đang hoạt động và ở trạng thái tốt.

### Tên miền không được thêm {#domain-not-added}

- Kiểm tra nhật ký (logs) của Ultimate Multisite để tìm bất kỳ thông báo lỗi nào.
- Xác minh rằng tên miền chưa được thêm vào tài khoản Hostinger của bạn.
- Đảm bảo rằng tài khoản Hostinger của bạn chưa đạt giới hạn addon domain.
- Xác nhận rằng tên miền đã được trỏ đúng cách đến các nameserver của Hostinger.

### Sự cố Chứng chỉ SSL {#ssl-certificate-issues}

- Tích hợp không xử lý việc cấp phát chứng chỉ SSL.
- Hostinger thường cung cấp chứng chỉ SSL miễn phí thông qua AutoSSL.
- Bạn có thể quản lý chứng chỉ SSL trực tiếp trong hPanel tại mục **SSL/TLS**.
- Hoặc, sử dụng Let's Encrypt với tính năng AutoSSL của Hostinger.

## Hỗ trợ {#support}

Để được trợ giúp thêm về tích hợp Hostinger, vui lòng tham khảo:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
