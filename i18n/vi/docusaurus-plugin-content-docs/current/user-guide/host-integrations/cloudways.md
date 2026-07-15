---
title: Tích hợp Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Tích hợp Cloudways

## Tổng quan {#overview}
Cloudways là một nền tảng lưu trữ đám mây được quản lý, cho phép bạn triển khai các trang WordPress trên nhiều nhà cung cấp đám mây khác nhau như DigitalOcean, AWS, Google Cloud, và nhiều dịch vụ khác. Tích hợp này cho phép đồng bộ tên miền tự động và quản lý chứng chỉ SSL giữa Ultimate Multisite và Cloudways.

## Tính năng {#features}
- Đồng bộ tên miền tự động
- Quản lý chứng chỉ SSL
- Hỗ trợ tên miền bổ sung
- Xác thực DNS cho chứng chỉ SSL

## Yêu cầu {#requirements}
Các hằng số sau phải được định nghĩa trong tệp `wp-config.php` của bạn:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Tùy chọn, bạn cũng có thể định nghĩa:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Hướng dẫn thiết lập {#setup-instructions}

### 1. Lấy thông tin xác thực Cloudways API của bạn {#1-get-your-cloudways-api-credentials}

1. Đăng nhập vào Dashboard Cloudways của bạn
2. Đi tới "Account" > "API Keys"
3. Tạo một API key nếu bạn chưa có
4. Sao chép email và API key của bạn

### 2. Lấy ID máy chủ và ứng dụng của bạn {#2-get-your-server-and-application-ids}

1. Trong Dashboard Cloudways của bạn, đi tới "Servers"
2. Chọn máy chủ nơi WordPress multisite của bạn được lưu trữ
3. Server ID hiển thị trong URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Đi tới "Applications" và chọn ứng dụng WordPress của bạn
5. App ID hiển thị trong URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Thêm hằng số vào wp-config.php {#3-add-constants-to-wp-configphp}

Thêm các hằng số sau vào tệp `wp-config.php` của bạn:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Nếu bạn có thêm các tên miền **bên ngoài** (ngoài mạng multisite của bạn) cần luôn được giữ trong danh sách bí danh Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Không bao gồm wildcard của mạng riêng của bạn
**Không** thêm `*.your-network.com` (hoặc bất kỳ mẫu tên miền phụ nào của mạng riêng của bạn) vào
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Xem [Quan trọng — cạm bẫy SSL wildcard](#important--wildcard-ssl-pitfall)
bên dưới để biết vì sao điều này ngăn chứng chỉ SSL theo từng tenant được cấp.
:::

### 4. Bật tích hợp {#4-enable-the-integration}

1. Trong trang quản trị WordPress của bạn, đi tới Ultimate Multisite > Settings
2. Điều hướng đến tab "Domain Mapping"
3. Cuộn xuống "Host Integrations"
4. Bật tích hợp Cloudways
5. Nhấp "Save Changes"

## Cách hoạt động {#how-it-works}

### Đồng bộ tên miền {#domain-syncing}

Khi một tên miền được ánh xạ trong Ultimate Multisite:

1. Tích hợp truy xuất tất cả các tên miền hiện đang được ánh xạ
2. Nó thêm tên miền mới vào danh sách (cùng với phiên bản www nếu áp dụng)
3. Nó gửi danh sách đầy đủ đến Cloudways thông qua API
4. Cloudways cập nhật các bí danh tên miền cho ứng dụng của bạn

Lưu ý: Cloudways API yêu cầu gửi danh sách tên miền đầy đủ mỗi lần, không chỉ thêm hoặc xóa từng tên miền riêng lẻ.

### Quản lý chứng chỉ SSL {#ssl-certificate-management}

Sau khi tên miền được đồng bộ:

1. Tích hợp kiểm tra những tên miền nào có bản ghi DNS hợp lệ trỏ đến máy chủ của bạn
2. Nó gửi yêu cầu đến Cloudways để cài đặt chứng chỉ SSL Let's Encrypt cho các tên miền đó
3. Cloudways xử lý việc cấp và cài đặt chứng chỉ SSL

Tích hợp luôn yêu cầu chứng chỉ Let's Encrypt **tiêu chuẩn** (không phải wildcard) từ
Cloudways. Nếu một mẫu wildcard được cung cấp trong `WU_CLOUDWAYS_EXTRA_DOMAINS`, phần đầu
`*.` sẽ bị loại bỏ trước yêu cầu SSL — bản thân wildcard không bao giờ được cài đặt bởi
tích hợp này. Để sử dụng chứng chỉ wildcard trên Cloudways, bạn sẽ phải cài đặt thủ công,
nhưng làm như vậy sẽ chặn việc cấp Let's Encrypt theo từng tên miền cho các tên miền tùy chỉnh đã ánh xạ
(xem cạm bẫy bên dưới).

## Tên miền bổ sung {#extra-domains}

Hằng số `WU_CLOUDWAYS_EXTRA_DOMAINS` cho phép bạn chỉ định thêm các tên miền **bên ngoài**
cần luôn được giữ trong danh sách bí danh của ứng dụng Cloudways. Hãy dùng nó cho:

- Các tên miền bên ngoài không được quản lý bởi Ultimate Multisite (ví dụ: một trang marketing riêng biệt dùng chung cùng ứng dụng Cloudways)
- Các tên miền parked hoặc staging mà bạn muốn giữ trong danh sách bí danh ứng dụng

**Không** dùng hằng số này cho wildcard tên miền phụ của mạng riêng của bạn
(ví dụ: `*.your-network.com`). Xem cạm bẫy SSL wildcard bên dưới.

## Quan trọng — cạm bẫy SSL wildcard {#important--wildcard-ssl-pitfall}

Một lỗi phổ biến khi làm theo thiết lập mặc định của Cloudways là thêm một wildcard như
`*.your-network.com` vào `WU_CLOUDWAYS_EXTRA_DOMAINS`, hoặc cài đặt thủ công một chứng chỉ SSL wildcard Cloudways
cho wildcard đó.

**Nếu bạn làm điều này, Cloudways sẽ từ chối cấp chứng chỉ Let's Encrypt cho các
tên miền tùy chỉnh theo từng tenant mà Ultimate Multisite ánh xạ.** Cloudways thay thế chứng chỉ SSL đang hoạt động
trên ứng dụng mỗi lần, và một chứng chỉ wildcard đã tồn tại trên
ứng dụng sẽ chặn việc cấp Let's Encrypt theo từng tên miền mà tích hợp này dựa vào.

### Thiết lập SSL Cloudways được khuyến nghị cho mạng Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Trong tab **SSL Certificate** của ứng dụng Cloudways, hãy cài đặt một **chứng chỉ Let's Encrypt
   tiêu chuẩn** chỉ bao gồm `your-network.com` và `www.your-network.com`
   — **không** phải wildcard.
2. **Không** đặt `*.your-network.com` (hoặc bất kỳ mẫu tên miền phụ nào của mạng riêng của bạn) trong
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Dành hằng số đó chỉ cho các tên miền **bên ngoài**.
3. Tạo wildcard tên miền phụ theo từng tenant chỉ ở cấp **DNS** (một bản ghi `A` cho
   `*.your-network.com` trỏ đến IP máy chủ Cloudways của bạn) để các trang con phân giải. SSL
   cho từng tên miền tùy chỉnh đã ánh xạ sau đó sẽ được tích hợp tự động cấp
   thông qua Let's Encrypt.

Nếu tên miền tùy chỉnh của khách thuê bị kẹt không có SSL, hãy kiểm tra tab SSL của Cloudways. Nếu một
chứng chỉ wildcard đang hoạt động ở đó, hãy gỡ bỏ nó, cấp lại một chứng chỉ Let's Encrypt
tiêu chuẩn chỉ cho tên miền mạng chính, và xóa mọi mục wildcard khỏi
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Sau đó kích hoạt lại việc ánh xạ tên miền (hoặc chờ lần tiếp theo)
và tích hợp sẽ bắt đầu cấp lại chứng chỉ theo từng tên miền.

## Khắc phục sự cố {#troubleshooting}

### Sự cố kết nối API {#api-connection-issues}
- Xác minh rằng email và API key của bạn là chính xác
- Kiểm tra rằng server và application IDs của bạn là chính xác
- Đảm bảo rằng Account Cloudways của bạn có các quyền cần thiết

### Sự cố chứng chỉ SSL {#ssl-certificate-issues}
- Cloudways yêu cầu các tên miền có bản ghi DNS hợp lệ trỏ đến server của bạn trước khi cấp chứng chỉ SSL
- Tích hợp xác thực bản ghi DNS trước khi yêu cầu chứng chỉ SSL
- Nếu chứng chỉ SSL không được cấp, hãy kiểm tra rằng tên miền của bạn đang trỏ đúng đến địa chỉ IP của server
- **Tên miền tùy chỉnh theo từng khách thuê bị kẹt không có SSL?** Kiểm tra tab Chứng chỉ SSL của ứng dụng Cloudways. Nếu một chứng chỉ wildcard (được cài đặt thủ công, hoặc bao phủ `*.your-network.com`) đang hoạt động, Cloudways sẽ không cấp chứng chỉ Let's Encrypt cho các tên miền tùy chỉnh được ánh xạ riêng lẻ. Thay thế nó bằng một chứng chỉ Let's Encrypt tiêu chuẩn chỉ bao phủ tên miền mạng chính (`your-network.com`, `www.your-network.com`) và xóa mọi mục wildcard khỏi `WU_CLOUDWAYS_EXTRA_DOMAINS`. Sau đó kích hoạt lại việc ánh xạ tên miền (hoặc chờ lần tiếp theo) và tích hợp sẽ yêu cầu chứng chỉ theo từng tên miền.

### Tên miền chưa được thêm {#domain-not-added}
- Kiểm tra nhật ký Ultimate Multisite để tìm bất kỳ thông báo lỗi nào
- Xác minh rằng tên miền chưa được thêm vào Cloudways
- Đảm bảo rằng plan Cloudways của bạn hỗ trợ số lượng tên miền bạn đang thêm
