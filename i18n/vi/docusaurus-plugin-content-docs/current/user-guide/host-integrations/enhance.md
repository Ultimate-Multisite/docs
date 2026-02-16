---
title: Tăng cường Tích hợp Bảng Điều khiển
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Tích hợp Enhance Control Panel

## Tổng quan
Enhance là một control panel hiện đại cung cấp các tính năng tự động hóa và quản lý hosting mạnh mẽ. Tích hợp này cho phép đồng bộ tên miền tự động và quản lý chứng chỉ SSL giữa Ultimate Multisite và Enhance Control Panel.

**Thảo luận liên quan:** Xem [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) để tìm các mẹo từ cộng đồng và thông tin bổ sung.

## Tính năng
- Tự động đồng bộ tên miền khi tên miền được ánh xạ trong Ultimate Multisite
- Tự động cấp phát chứng chỉ SSL qua LetsEncrypt khi DNS phân giải thành công
- Hỗ trợ subdomain cho các mạng chạy ở chế độ subdomain
- Xóa tên miền khi các ánh xạ bị xóa
- Kiểm tra kết nối để xác minh thông tin API

## Yêu cầu

### Yêu cầu hệ thống
- Enhance Control Panel đã được cài đặt và có thể truy cập
- WordPress Multisite được lưu trữ trên hoặc kết nối với máy chủ Enhance
- Web server Apache (Enhance hiện tại hỗ trợ cấu hình Apache; LiteSpeed Enterprise có sẵn với chi phí thấp hơn)

### Truy cập API
Bạn cần có quyền quản trị viên trên Enhance Control Panel để tạo token API.

## Lấy thông tin xác thực API

### 1. Tạo Token API

1. Đăng nhập vào Enhance Control Panel với quyền quản trị viên
2. Nhấp vào **Settings** trong menu điều hướng
3. Chuyển đến **Access Tokens**
4. Nhấp **Create Token**
5. Đặt tên mô tả cho token (ví dụ: "Ultimate Multisite Integration")
6. Chọn vai trò **System Administrator**
7. Về ngày hết hạn:
   - Để trống nếu bạn muốn token không bao giờ hết hạn
   - Hoặc đặt ngày hết hạn cụ thể vì mục đích bảo mật
8. Nhấp **Create**

Sau khi tạo, **Access Token** và **Organization ID** của bạn sẽ được hiển thị. **Hãy lưu lại ngay** vì token chỉ được hiển thị một lần duy nhất.

### 2. Lấy Organization ID

Organization ID được hiển thị trên trang Access Tokens trong một hộp thông tin màu xanh có nhãn "Org ID: {your_id}".

Organization ID có định dạng UUID như: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Bạn cũng có thể tìm Organization ID của khách hàng bằng cách:
1. Vào trang **Customers**
2. Nhấp **Manage customer** cho khách hàng cần tìm
3. Xem URL - Organization ID là các ký tự chữ và số sau `/customers/`

### 3. Lấy Server ID

Để tìm Server ID (bắt buộc cho các thao tác với tên miền):

1. Trong Enhance Control Panel, chuyển đến **Servers**
2. Nhấp vào máy chủ nơi WordPress của bạn đang chạy
3. Server ID (định dạng UUID) sẽ hiển thị trong URL hoặc chi tiết máy chủ
4. Ngoài ra, bạn có thể sử dụng API để liệt kê các máy chủ:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID có định dạng UUID: `00000000-0000-0000-0000-000000000000`

### 4. Lấy URL API

URL API của bạn là URL của Enhance Control Panel với `/api/` được thêm vào cuối:

```
https://your-enhance-panel.com/api/
```

**Quan trọng:** Đường dẫn `/api/` là bắt buộc. Các lỗi thường gặp bao gồm:
- Chỉ sử dụng tên miền mà không có `/api/`
- Sử dụng HTTP thay vì HTTPS (HTTPS là bắt buộc vì lý do bảo mật)

## Cấu hình

### Các hằng số bắt buộc

Thêm các hằng số sau vào file `wp-config.php` của bạn:

```php
// Tích hợp Enhance Control Panel
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Thiết lập qua Trình hướng dẫn tích hợp

1. Trong trang quản trị WordPress, vào **Ultimate Multisite** > **Settings**
2. Chuyển đến tab **Integrations**
3. Tìm **Enhance Control Panel Integration** và nhấp **Configuration**
4. Trình hướng dẫn sẽ giúp bạn thiết lập:
   - **Bước 1:** Giới thiệu và tổng quan tính năng
   - **Bước 2:** Nhập thông tin xác thực API (Token, URL API, Server ID)
   - **Bước 3:** Kiểm tra kết nối
   - **Bước 4:** Xem lại và kích hoạt

Bạn có thể chọn:
- Để trình hướng dẫn tự động thêm các hằng số vào file `wp-config.php`
- Sao chép định nghĩa các hằng số và thêm thủ công

## Cấu hình WordPress bổ sung

Dựa trên phản hồi từ cộng đồng ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), bạn có thể cần cấu hình thêm các thiết lập sau:

### Cấu hình .htaccess

Nếu bạn gặp vấn đề với ánh xạ tên miền:
1. Xóa file `.htaccess` gốc của Enhance
2. Thay thế bằng file `.htaccess` chuẩn của WordPress Multisite

### Các hằng số Cookie

Thêm các hằng số này vào `wp-config.php` để đảm bảo xử lý cookie đúng cách trên các tên miền được ánh xạ:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Cách hoạt động

### Khi một tên miền được ánh xạ

1. Người dùng ánh xạ tên miền tùy chỉnh trong Ultimate Multisite (hoặc một site mới được tạo ở chế độ subdomain)
2. Tích hợp gửi yêu cầu POST đến API của Enhance: `/servers/{server_id}/domains`
3. Enhance thêm tên miền vào cấu hình máy chủ của bạn
4. Khi DNS phân giải đến máy chủ của bạn, Enhance tự động cấp phát chứng chỉ SSL qua LetsEncrypt
5. Tên miền hoạt động với HTTPS

### Khi một tên miền bị xóa

1. Một ánh xạ tên miền bị xóa trong Ultimate Multisite
2. Tích hợp truy vấn Enhance để tìm ID của tên miền
3. Một yêu cầu DELETE được gửi đến: `/servers/{server_id}/domains/{domain_id}`
4. Enhance xóa tên miền khỏi cấu hình máy chủ của bạn

### Kiểm tra DNS và SSL

Ultimate Multisite có tính năng kiểm tra DNS và SSL tích hợp sẵn:
- Bạn có thể cấu hình khoảng thời gian kiểm tra trong **Domain Mapping Settings** (mặc định: 300 giây/5 phút)
- Hệ thống sẽ xác minh việc phân giải DNS trước khi đánh dấu tên miền là hoạt động
- Tính hợp lệ của chứng chỉ SSL được kiểm tra tự động
- Enhance xử lý việc cấp phát SSL tự động, nên không cần cấu hình SSL thủ công

## Xác minh thiết lập

### Kiểm tra kết nối

1. Trong Trình hướng dẫn tích hợp, sử dụng bước **Test Connection**
2. Plugin sẽ thử liệt kê các tên miền trên máy chủ của bạn
3. Thông báo thành công xác nhận:
   - Thông tin xác thực API chính xác
   - URL API có thể truy cập
   - Server ID hợp lệ
   - Quyền được thiết lập đúng

### Sau khi ánh xạ tên miền

1. Ánh xạ một tên miền thử nghiệm trong Ultimate Multisite
2. Kiểm tra nhật ký Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Xác minh trong Enhance Control Panel rằng tên miền đã được thêm:
   - Vào **Servers** > **Your Server** > **Domains**
   - Tên miền mới sẽ xuất hiện trong danh sách
4. Khi DNS phân giải xong, xác minh SSL được cấp phát tự động

## Xử lý sự cố

### Vấn đề kết nối API

**Lỗi: "Failed to connect to Enhance API"**
- Xác minh `WU_ENHANCE_API_URL` có `/api/` ở cuối
- Đảm bảo bạn đang sử dụng HTTPS, không phải HTTP
- Kiểm tra Enhance panel có thể truy cập từ máy chủ WordPress của bạn
- Xác minh không có quy tắc tường lửa chặn kết nối

**Lỗi: "Enhance API Token not found"**
- Đảm bảo `WU_ENHANCE_API_TOKEN` được định nghĩa trong `wp-config.php`
- Xác minh token chưa bị xóa hoặc hết hạn trong Enhance
- Kiểm tra lỗi chính tả trong giá trị token

**Lỗi: "Server ID is not configured"**
- Xác minh `WU_ENHANCE_SERVER_ID` được định nghĩa trong `wp-config.php`
- Đảm bảo Server ID có định dạng UUID hợp lệ
- Xác nhận máy chủ tồn tại trong Enhance panel của bạn

### Tên miền không được thêm

**Kiểm tra nhật ký:**
1. Vào **Ultimate Multisite** > **Logs**
2. Lọc theo **integration-enhance**
3. Tìm các thông báo lỗi cho biết vấn đề

**Nguyên nhân thường gặp:**
- Định dạng tên miền không hợp lệ
- Tên miền đã tồn tại trong Enhance
- Không đủ quyền API (đảm bảo token có vai trò System Administrator)
- Server ID không khớp với máy chủ thực tế trong Enhance

### Vấn đề chứng chỉ SSL

**SSL không được cấp phát:**
- Xác minh DNS đang trỏ đến địa chỉ IP của máy chủ
- Kiểm tra tên miền phân giải đúng: `nslookup yourdomain.com`
- Enhance yêu cầu DNS phân giải trước khi có thể cấp phát SSL
- Việc cấp phát SSL thường mất 5-10 phút sau khi DNS phân giải
- Kiểm tra nhật ký Enhance Control Panel để tìm lỗi liên quan đến SSL

**Xử lý sự cố SSL thủ công trong Enhance:**
1. Vào **Servers** > **Your Server** > **Domains**
2. Tìm tên miền của bạn và kiểm tra trạng thái SSL
3. Bạn có thể kích hoạt cấp phát SSL thủ công nếu cần

### Khoảng thời gian kiểm tra DNS

Nếu tên miền hoặc chứng chỉ SSL mất quá lâu để kích hoạt:
1. Vào **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Tìm thiết lập **DNS Check Interval**
3. Điều chỉnh từ mặc định 300 giây xuống giá trị thấp hơn (tối thiểu: 10 giây)
4. **Lưu ý:** Khoảng thời gian thấp hơn nghĩa là kiểm tra thường xuyên hơn nhưng tải máy chủ cao hơn

### Lỗi xác thực

**Lỗi HTTP 401/403:**
- Tạo lại token API trong Enhance
- Xác minh token có vai trò **System Administrator**
- Kiểm tra token chưa hết hạn
- Đảm bảo bạn đang sử dụng đúng Organization ID (mặc dù thường không bắt buộc trong URL)

### Phân tích nhật ký

Bật ghi nhật ký chi tiết:
```php
// Thêm vào wp-config.php để debug nâng cao
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Sau đó kiểm tra nhật ký tại:
- Nhật ký Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Nhật ký debug WordPress: `wp-content/debug.log`
- Nhật ký Enhance panel: Có sẵn trong giao diện quản trị của Enhance

## Tham chiếu API

### Xác thực
Tất cả các yêu cầu API sử dụng xác thực Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Các endpoint thường dùng

**Liệt kê máy chủ:**
```
GET /servers
```

**Liệt kê tên miền trên máy chủ:**
```
GET /servers/{server_id}/domains
```

**Thêm tên miền:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Xóa tên miền:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Tài liệu API đầy đủ
Tài liệu API đầy đủ: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Các phương pháp tốt nhất

### Bảo mật
- **Không bao giờ commit token API vào hệ thống quản lý phiên bản**
- Lưu token trong `wp-config.php` - file này nên được loại trừ khỏi Git
- Sử dụng token với quyền phù hợp (System Administrator cho tích hợp đầy đủ)
- Đặt ngày hết hạn token cho môi trường production
- Xoay vòng token định kỳ

### Hiệu suất
- Sử dụng khoảng thời gian kiểm tra DNS mặc định (300 giây) để tránh gọi API quá nhiều
- Giám sát tài nguyên máy chủ Enhance khi thực hiện các thao tác tên miền quy mô lớn
- Cân nhắc phân tán việc thêm tên miền nếu ánh xạ nhiều tên miền cùng lúc

### Giám sát
- Thường xuyên kiểm tra nhật ký Ultimate Multisite để tìm lỗi tích hợp
- Thiết lập giám sát cho các trường hợp thêm tên miền thất bại
- Xác minh chứng chỉ SSL được cấp phát đúng cách
- Theo dõi dung lượng máy chủ Enhance và giới hạn tên miền

## Tài nguyên bổ sung

- **Tài liệu chính thức của Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Tài liệu API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Diễn đàn cộng đồng Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Thảo luận GitHub:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Hướng dẫn ánh xạ tên miền Ultimate Multisite:** Xem trang wiki "How to Configure Domain Mapping v2"

## Hỗ trợ

Nếu bạn gặp vấn đề:
1. Kiểm tra phần Xử lý sự cố ở trên
2. Xem lại nhật ký Ultimate Multisite
3. Tham khảo [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Liên hệ hỗ trợ Enhance cho các vấn đề liên quan đến panel
5. Tạo thảo luận mới với nhật ký lỗi chi tiết để nhận trợ giúp từ cộng đồng

## Ghi chú

- Tích hợp này chỉ xử lý bí danh tên miền; Enhance quản lý SSL tự động
- Tích hợp hỗ trợ cả ánh xạ tên miền tùy chỉnh và các site dựa trên subdomain
- Tự động tạo subdomain www có thể được cấu hình trong thiết lập Domain Mapping
- Enhance hiện tại hỗ trợ cấu hình Apache (LiteSpeed Enterprise có sẵn)
- Việc xóa tên miền khỏi Ultimate Multisite sẽ xóa tên miền khỏi Enhance nhưng có thể không xóa các chứng chỉ SSL liên quan ngay lập tức
