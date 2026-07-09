---
title: Tích hợp Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Tích hợp Cloudflare {#cloudflare-integration}

## Tổng quan {#overview}
Cloudflare là một mạng phân phối nội dung (CDN) và nhà cung cấp bảo mật hàng đầu giúp bảo vệ và tăng tốc các trang web. Tích hợp này cho phép quản lý tên miền tự động giữa Ultimate Multisite và Cloudflare, đặc biệt cho các cài đặt multisite dạng tên miền phụ.

## Tính năng {#features}
- Tự động tạo tên miền phụ trong Cloudflare
- Hỗ trợ tên miền phụ được proxy
- Quản lý bản ghi DNS
- Hiển thị bản ghi DNS nâng cao trong trang quản trị Ultimate Multisite

## Yêu cầu {#requirements}
Các hằng số sau phải được định nghĩa trong tệp `wp-config.php` của bạn:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Hướng dẫn thiết lập {#setup-instructions}

### 1. Lấy Cloudflare API Key của bạn {#1-get-your-cloudflare-api-key}

1. Đăng nhập vào Cloudflare Dashboard của bạn
2. Đi tới "Hồ sơ của tôi" (nhấp vào email của bạn ở góc trên bên phải)
3. Chọn "API Tokens" từ menu
4. Tạo một API token mới với các quyền sau:
   - Zone.Zone: Đọc
   - Zone.DNS: Chỉnh sửa
5. Sao chép API token của bạn

### 2. Lấy Zone ID của bạn {#2-get-your-zone-id}

1. Trong Cloudflare Dashboard của bạn, chọn tên miền bạn muốn sử dụng
2. Zone ID hiển thị trong tab "Tổng quan", ở thanh bên phải dưới mục "API"
3. Sao chép Zone ID

### 3. Thêm hằng số vào wp-config.php {#3-add-constants-to-wp-configphp}

Thêm các hằng số sau vào tệp `wp-config.php` của bạn:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Bật tích hợp {#4-enable-the-integration}

1. Trong trang quản trị WordPress của bạn, đi tới Ultimate Multisite > Cài đặt
2. Điều hướng đến tab "Ánh xạ tên miền"
3. Cuộn xuống "Tích hợp máy chủ"
4. Bật tích hợp Cloudflare
5. Nhấp "Lưu thay đổi"

## Cách hoạt động {#how-it-works}

### Quản lý tên miền phụ {#subdomain-management}

Khi một trang web mới được tạo trong một cài đặt multisite dạng tên miền phụ:

1. Tích hợp gửi một yêu cầu đến API của Cloudflare để thêm bản ghi CNAME cho tên miền phụ
2. Tên miền phụ được cấu hình mặc định để được proxy qua Cloudflare (điều này có thể được thay đổi bằng các bộ lọc)
3. Khi một trang web bị xóa, tích hợp sẽ xóa tên miền phụ khỏi Cloudflare

### Hiển thị bản ghi DNS {#dns-record-display}

Tích hợp nâng cao hiển thị bản ghi DNS trong trang quản trị Ultimate Multisite bằng cách:

1. Lấy bản ghi DNS trực tiếp từ Cloudflare
2. Hiển thị liệu các bản ghi có được proxy hay không
3. Hiển thị thông tin bổ sung về các bản ghi DNS

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (trước đây gọi là "Cloudflare for SaaS") là một tính năng của Cloudflare cho phép khách hàng của bạn sử dụng tên miền riêng của họ với SSL trên mạng multisite của bạn. Đây là cách tiếp cận được khuyến nghị cho các cài đặt multisite có ánh xạ tên miền sử dụng Cloudflare, vì Cloudflare tự động quản lý việc cấp và gia hạn chứng chỉ SSL cho từng tên miền tùy chỉnh.

### Khác biệt so với tích hợp Cloudflare tiêu chuẩn {#how-it-differs-from-the-standard-cloudflare-integration}

| | Tích hợp tiêu chuẩn | Cloudflare Custom Hostnames |
|---|---|---|
| **Mục đích** | Tự động tạo bản ghi DNS cho tên miền phụ | Bật các tên miền tùy chỉnh (được ánh xạ) với SSL do Cloudflare quản lý |
| **Phù hợp nhất cho** | Multisite dạng tên miền phụ | Multisite có ánh xạ tên miền |
| **SSL** | Được xử lý riêng | Được Cloudflare tự động quản lý |

### Thiết lập Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Trong Cloudflare Dashboard của bạn, mở zone cho tên miền chính của bạn.
2. Đi tới **SSL/TLS > Custom Hostnames**.
3. Thêm một fallback origin trỏ đến IP hoặc hostname của máy chủ của bạn.
4. Với mỗi tên miền khách hàng được ánh xạ trong Ultimate Multisite, thêm một mục Custom Hostname trong Cloudflare. Bạn có thể tự động hóa bước này bằng Cloudflare API.
5. Cloudflare tự động cấp và gia hạn chứng chỉ TLS cho từng custom hostname sau khi DNS của khách hàng được trỏ về mạng của bạn.

Để xem tài liệu tham khảo API đầy đủ, hãy xem [tài liệu Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Cập nhật thuật ngữ
Kể từ Ultimate Multisite v2.6.1, tính năng này được gọi là **Cloudflare Custom Hostnames** trong tất cả cài đặt và nhãn của plugin. Các phiên bản trước sử dụng tên "Cloudflare for SaaS", là tên sản phẩm Cloudflare nền tảng.
:::

## Lưu ý quan trọng {#important-notes}

Kể từ các bản cập nhật gần đây của Cloudflare, proxy wildcard hiện đã có sẵn cho tất cả khách hàng. Điều này có nghĩa là tích hợp DNS Cloudflare tiêu chuẩn không còn quá quan trọng đối với các cài đặt multisite dạng tên miền phụ như trước đây, vì bạn có thể chỉ cần thiết lập một bản ghi DNS wildcard trong Cloudflare.

## Khắc phục sự cố {#troubleshooting}

### Sự cố kết nối API {#api-connection-issues}
- Xác minh rằng API token của bạn chính xác và có các quyền cần thiết
- Kiểm tra rằng Zone ID của bạn chính xác
- Đảm bảo rằng Account Cloudflare của bạn có các quyền cần thiết

### Tên miền phụ không được thêm {#subdomain-not-added}
- Kiểm tra nhật ký Ultimate Multisite để tìm bất kỳ thông báo lỗi nào
- Xác minh rằng tên miền phụ chưa được thêm vào Cloudflare
- Đảm bảo rằng gói Cloudflare của bạn hỗ trợ số lượng bản ghi DNS bạn đang tạo

### Sự cố proxy {#proxying-issues}
- Nếu bạn không muốn các tên miền phụ được proxy, bạn có thể sử dụng bộ lọc `wu_cloudflare_should_proxy`
- Một số tính năng có thể không hoạt động chính xác khi được proxy (ví dụ: một số chức năng quản trị WordPress nhất định)
- Cân nhắc sử dụng Page Rules của Cloudflare để bỏ qua bộ nhớ đệm cho các trang quản trị
