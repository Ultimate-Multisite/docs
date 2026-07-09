---
title: Tích hợp CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Tích hợp CyberPanel {#cyberpanel-integration}

Hướng dẫn này giải thích cách cấu hình tích hợp Ultimate Multisite với CyberPanel để các tên miền được ánh xạ trong mạng của bạn được tự động thêm (và xóa) dưới dạng virtual host trong CyberPanel, cùng với tính năng tùy chọn tự động cấp SSL qua Let's Encrypt.

## Chức năng {#what-it-does}

- Khi một tên miền được ánh xạ trong Ultimate Multisite, tích hợp sẽ gọi API của CyberPanel để tạo một virtual host cho tên miền đó.
- Khi việc ánh xạ tên miền bị xóa, tích hợp sẽ gọi API để xóa virtual host tương ứng.
- Khi tự động cấp SSL được bật, tích hợp sẽ kích hoạt việc cấp chứng chỉ Let's Encrypt ngay sau khi virtual host được tạo.
- Tùy chọn thêm/xóa bí danh `www.` tùy thuộc vào cài đặt "Auto-create www subdomain" (Tự động tạo subdomain www) trong phần Domain Mapping.

## Điều kiện tiên quyết {#prerequisites}

- Một phiên bản CyberPanel đang hoạt động (khuyến nghị v2.3 trở lên) và có thể truy cập được từ máy chủ WordPress của bạn.
- Một trang web hiện có trong CyberPanel đang phục vụ thư mục gốc mạng WordPress của bạn. Tích hợp sẽ gắn các virtual host mới vào máy chủ này.
- Đã bật quyền truy cập CyberPanel API. Xác thực sử dụng tên người dùng và mật khẩu quản trị viên CyberPanel của bạn.
- Các bản ghi DNS cho các tên miền được ánh xạ phải trỏ đến địa chỉ IP của máy chủ của bạn trước khi tự động cấp SSL có thể cấp chứng chỉ hợp lệ.

## Yêu cầu {#requirements}

Các hằng số sau phải được định nghĩa trong tệp `wp-config.php` của bạn:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Tùy chọn, bạn cũng có thể định nghĩa:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Mặc định: true — cấp SSL Let's Encrypt sau khi tạo tên miền
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Mặc định: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Được sử dụng cho liên hệ chứng chỉ SSL
```

## Hướng dẫn thiết lập {#setup-instructions}

### 1. Bật CyberPanel API {#1-enable-the-cyberpanel-api}

1. Đăng nhập vào dashboard CyberPanel của bạn với tư cách quản trị viên.
2. Truy cập **Security** > **SSL** và xác nhận rằng SSL đã hoạt động trên giao diện CyberPanel (bắt buộc cho các lệnh gọi API an toàn).
3. CyberPanel API mặc định có sẵn tại `https://your-server-ip:8090/api/`. Không cần các bước bổ sung để bật nó — nó được bật mặc định cho người dùng quản trị.

### 2. Thêm hằng số vào wp-config.php {#2-add-constants-to-wp-configphp}

Thêm các hằng số sau vào tệp `wp-config.php` của bạn trước dòng `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Để bật tự động cấp SSL (khuyến nghị):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Bật tích hợp {#3-enable-the-integration}

1. Trong khu vực quản trị mạng WordPress của bạn, truy cập **Ultimate Multisite** > **Settings**.
2. Điều hướng đến tab **Domain Mapping**.
3. Cuộn xuống **Host Integrations**.
4. Bật tích hợp **CyberPanel**.
5. Nhấp vào **Save Changes** (Lưu thay đổi).

### 4. Xác minh kết nối {#4-verify-connectivity}

Sử dụng tính năng kiểm tra kết nối tích hợp trong trình hướng dẫn cài đặt:

1. Truy cập **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Nhấp vào **Test Connection** (Kiểm tra kết nối).
3. Thông báo thành công xác nhận rằng plugin có thể kết nối đến CyberPanel API và xác thực chính xác.

## Cách thức hoạt động {#how-it-works}

### Ánh xạ tên miền (Domain Mapping) {#domain-mapping}

Khi một tên miền được ánh xạ trong Ultimate Multisite:

1. Tích hợp sẽ gửi yêu cầu `POST` đến `/api/createWebsite` trên máy chủ CyberPanel của bạn.
2. CyberPanel sẽ tạo một virtual host mới cho tên miền đó dưới gói đã cấu hình.
3. Thư mục gốc (document root) được đặt trỏ đến thư mục gốc mạng WordPress của bạn.
4. Khi việc ánh xạ tên miền bị xóa, tích hợp sẽ gọi `/api/deleteWebsite` để dọn dẹp virtual host.

### Tự động cấp SSL (Auto-SSL) {#auto-ssl}

Khi `WU_CYBERPANEL_AUTO_SSL` là `true`:

1. Sau khi virtual host được tạo, tích hợp sẽ gọi `/api/issueSSL` cho tên miền đó.
2. CyberPanel yêu cầu chứng chỉ Let's Encrypt bằng cách sử dụng thử thách ACME HTTP-01.
3. Chứng chỉ sẽ được CyberPanel tự động gia hạn trước khi hết hạn.

> **Quan trọng:** DNS phải được lan truyền hoàn toàn đến địa chỉ IP của máy chủ trước khi Let's Encrypt có thể xác thực tên miền. Nếu việc cấp SSL thất bại ngay sau khi ánh xạ, hãy đợi quá trình lan truyền DNS và kích hoạt lại SSL từ dashboard CyberPanel tại **SSL** > **Manage SSL**.

### Subdomain www {#www-subdomain}

Nếu **Auto-create www subdomain** được bật trong cài đặt Domain Mapping, tích hợp cũng sẽ tạo một bí danh virtual host cho `www.<domain>` và, khi tự động cấp SSL được bật, sẽ cấp chứng chỉ bao gồm cả các biến thể apex và www.

### Chuyển tiếp Email (Email Forwarders) {#email-forwarders}

Khi addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) được kích hoạt, CyberPanel cũng có thể cung cấp dịch vụ chuyển tiếp email cho khách hàng. Các bộ chuyển tiếp này sẽ định tuyến tin nhắn từ một địa chỉ tên miền đến một hộp thư khác mà không cần tạo hộp thư đầy đủ, rất hữu ích cho các bí danh như `info@customer-domain.test` hoặc `support@customer-domain.test`.

Trước khi bật bộ chuyển tiếp cho khách hàng:

1. Xác nhận các hằng số CyberPanel ở trên đã được cấu hình và kiểm tra kết nối thành công.
2. Bật nhà cung cấp email CyberPanel trong cài đặt addon Emails.
3. Xác nhận tên miền của khách hàng đã tồn tại trong CyberPanel trước khi tạo bộ chuyển tiếp.
4. Tạo một bộ chuyển tiếp thử nghiệm và gửi một tin nhắn qua nó trước khi cung cấp tính năng này trên các gói sản phẩm thực tế.

Nếu việc tạo bộ chuyển tiếp thất bại, hãy kiểm tra nhật ký hoạt động Ultimate Multisite trước, sau đó xác nhận trong CyberPanel rằng tên miền nguồn tồn tại và người dùng API có quyền quản lý email.

## Tài liệu tham khảo cấu hình {#configuration-reference}

| Hằng số | Bắt buộc | Mặc định | Mô tả |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Có | — | URL đầy đủ đến phiên bản CyberPanel của bạn bao gồm cả cổng, ví dụ: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Có | — | Tên người dùng quản trị CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Có | — | Mật khẩu quản trị CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Có | `Default` | Gói lưu trữ CyberPanel được gán cho các virtual host mới |
| `WU_CYBERPANEL_AUTO_SSL` | Không | `true` | Cấp chứng chỉ SSL Let's Encrypt sau khi tạo tên miền |
| `WU_CYBERPANEL_PHP_VERSION` | Không | `PHP 8.2` | Phiên bản PHP cho các virtual host mới (phải khớp với phiên bản đã cài đặt trong CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Không | — | Email liên hệ để đăng ký chứng chỉ SSL |

## Lưu ý quan trọng {#important-notes}

- API của CyberPanel sử dụng xác thực token dựa trên phiên (session-based). Tích hợp tự động xử lý việc lấy token cho mỗi lần gọi API.
- Tài khoản quản trị CyberPanel của bạn phải có quyền tạo và xóa trang web.
- CyberPanel mặc định chạy trên cổng `8090`. Nếu máy chủ của bạn sử dụng tường lửa, hãy đảm bảo cổng này có thể truy cập được từ máy chủ ứng dụng WordPress.
- Tích hợp không quản lý các bản ghi DNS. Bạn phải trỏ DNS tên miền đến địa chỉ IP của máy chủ trước khi ánh xạ tên miền trong Ultimate Multisite.
- Nếu bạn sử dụng OpenLiteSpeed (OLS), một lệnh khởi động lại nhẹ (graceful restart) sẽ được kích hoạt tự động sau khi thay đổi virtual host. Không cần can thiệp thủ công.

## Khắc phục sự cố {#troubleshooting}

### API Connection Refused (Từ chối kết nối API) {#api-connection-refused}

- Kiểm tra xem cổng `8090` đã được mở trên tường lửa máy chủ của bạn chưa.
- Xác nhận giá trị `WU_CYBERPANEL_HOST` bao gồm giao thức (`https://`) và cổng chính xác.
- Kiểm tra xem chứng chỉ SSL CyberPanel của bạn có hợp lệ không; các chứng chỉ tự ký (self-signed) có thể gây ra lỗi xác minh TLS. Chỉ đặt `WU_CYBERPANEL_VERIFY_SSL` thành `false` trong môi trường mạng riêng đáng tin cậy.

### Authentication Errors (Lỗi xác thực) {#authentication-errors}

- Xác nhận `WU_CYBERPANEL_USERNAME` và `WU_CYBERPANEL_PASSWORD` của bạn là chính xác bằng cách đăng nhập trực tiếp vào CyberPanel.
- CyberPanel sẽ khóa tài khoản sau nhiều lần cố gắng đăng nhập thất bại. Kiểm tra **Security** > **Brute Force Monitor** trong CyberPanel nếu xảy ra tình trạng khóa tài khoản.

### Domain Not Created (Không tạo được tên miền) {#domain-not-created}

- Kiểm tra nhật ký hoạt động Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) để tìm các thông báo lỗi API.
- Xác minh rằng gói được định nghĩa trong `WU_CYBERPANEL_PACKAGE` tồn tại trong CyberPanel (**Packages** > **List Packages**).
- Đảm bảo tên miền chưa được đăng ký là một trang web trong CyberPanel — việc tạo trang web trùng lặp sẽ trả về lỗi.

### SSL Certificate Not Issued (Không cấp được chứng chỉ SSL) {#ssl-certificate-not-issued}

- Xác nhận DNS đã lan truyền hoàn toàn: `dig +short your-domain.com` phải trả về địa chỉ IP của máy chủ bạn.
- Let's Encrypt áp dụng giới hạn tốc độ (rate limits). Nếu bạn gần đây đã cấp nhiều chứng chỉ cho cùng một tên miền, hãy đợi trước khi thử lại.
- Kiểm tra nhật ký SSL CyberPanel trong **Logs** > **Error Logs** để biết chi tiết về các lỗi cấp chứng chỉ.
- Là phương án dự phòng, bạn có thể tự cấp SSL thủ công từ CyberPanel: **SSL** > **Manage SSL** > chọn tên miền > **Issue SSL**.

## Tài liệu tham khảo {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
