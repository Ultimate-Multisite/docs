---
title: Nkwado Pane Integration
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integration GridPane

## Nhìn Chung
GridPane na ọkọ ọkọ đặc biệt nwere WordPress, được xây dựng cho những người làm WordPress chuyên nghiệp. Cái tích hợp này giúp đồng bộ tên miền tự động và quản lý chứng chỉ SSL giữa Ultimate Multisite và GridPane.

## Các Tính Năng
- Đồng bộ tên miền tự động
- Quản lý chứng chỉ SSL
- Cấu hình tự động hằng số SUNRISE

## Yêu Cầu
Các hằng số sau phải được định nghĩa trong tệp `wp-config.php` của bạn:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Hướng Dẫn Thiết Lập

### 1. Lấy Thông Tin API GridPane Của Bạn

1. Đăng nhập vào bảng điều khiển (dashboard) GridPane của bạn
2. Truy cập "Settings" > "API"
3. Tạo một khóa API nếu bạn chưa có
4. Sao chép khóa API của bạn

### 2. Lấy ID Máy Chủ và Trang Web Của Bạn

1. Trong bảng điều khiển GridPane, đi đến "Servers" (Máy chủ)
2. Chọn máy chủ nơi WordPress multisite của bạn được lưu trữ
3. Ghi lại Server ID (có thể thấy trong URL hoặc trên trang chi tiết máy chủ)
4. Đi đến "Sites" (Trang web) và chọn trang WordPress của bạn
5. Ghi lại Site ID (có thể thấy trong URL hoặc trên trang chi tiết trang web)

### 3. Thêm Hằng Số vào wp-config.php

Thêm các hằng số sau vào tệp `wp-config.php` của bạn:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Bật Tích Hợp

1. Trong trình quản trị WordPress của bạn, đi đến Ultimate Multisite > Settings (Cài đặt)
2. Điều hướng đến tab "Domain Mapping" (Ánh xạ tên miền)
3. Cuộn xuống phần "Host Integrations" (Tích hợp máy chủ)
4. Bật tích hợp GridPane
5. Nhấn "Save Changes" (Lưu thay đổi)

## Cách Nó Hoạt Động

Khi một tên miền được ánh xạ trong Ultimate Multisite:

1. Integration-ah anọkụta request na API nke GridPane maka ịchukwu domain ah n'ụ site gị.
2. GridPane ga-eme handle SSL certificate provisioning (ịdịrị/ịdịrị).
3. Mgbe ịhapụ domain mapping, integration ah ga-hapụ domain ah n'Ubuntu GridPane.

Integration ah ga-eme handle constant SUNRISE na file wp-config.php gị ma ọ bụ automatic, nke a bụ ihe a dị m n'aka domain mapping ịrụ ọrụ maka site gị.

## Management na Constant SUNRISE

Ihe dị Ọ dị Ọ dị m n'aka integration GridPane bụ na ọ ga-eme revert constant SUNRISE na wp-config.php ma ọ bụ prevent conflict na sistem ah domain mapping nke GridPane. Ige a na-eme ka oba ikiwa ọkụ na-arụrụ ọrụ n'obi anọ, ọ bụghị ọ dị m n'aka ịdịrị/ịdịrị ah domain mapping.

## Troubleshooting

### Issues na API Connection
- Jere ihe ọ bụ na API key gị bụ nke ọma
- Check na server site gị ma IDs site gị bụ nke ọma
- Ensure na akaunte GridPane gị nwere izin ndị dị m n'aka ịdịrị/ịdịrị ah.

### Issues na SSL Certificate
- GridPane ga-eme take time maka ịdịrị/ịdịrị SSL
- Verify na domain gị bụ nke ọma na-point na IP address server gị
- Check settings SSL na GridPane maka site gị

### Domain Not Added
- Check Ultimate Multisite logs maka ihe ndị dị m n'error messages
- Verify na domain ah bụrụ na ọ bụ na-add na GridPane
- Ensure na DNS records domain gị bụ nke ọma na-configure
