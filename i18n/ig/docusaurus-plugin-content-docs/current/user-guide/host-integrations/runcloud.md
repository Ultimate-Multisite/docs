---
title: Nkwado RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integracja RunCloud

## Tổng quan
RunCloud na-eme platform de server management n'ụlụ (cloud) nke na-eme gị ịkwado deploy na-eme web applications ọkụ na server cloud gị. Integrasi ọ bụ eziokwu syncing domain na SSL certificate management ọkụ na Ultimate Multisite na RunCloud.

## Ihe Ọrụ
- Automatic domain syncing (syncing domain ọkụ)
- SSL certificate management (management SSL certificate)
- Domain removal when mappings are deleted (nwe domain mgbe aka ndị a anọghị anọ)

## Ihe Ịchọta
Ihe ndị a na-eme iji define n'file `wp-config.php` gị:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Nkwado Setup

### 1. Kụzi API Credentials RunCloud Gị

1. Log in na dashboard RunCloud gị
2. Mene "User Profile" (click na picture profile gị n'ụlụ-akụkụ akụkụ)
3. Chere "API" na menu
4. Click "Generate API Key" ma ọ bụrụ na ị iche n'ime, onye a
5. Copy API Key gị na API Secret gị

### 2. Kụzi Server ID na App IDs Gị

1. Na dashboard RunCloud gị, mene "Servers"
2. Chere server na-eme WordPress multisite gị
3. Server ID bụ ihe ọkụ n'URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Mene "Web Applications" ma chere application WordPress gị
5. App ID bụ ihe ọkụ n'URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Add Constants na wp-config.php

Add ihe ndị a na file `wp-config.php` gị:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Enable Integrasi ọkụ

1. Na admin WordPress của bạn, đi đến Ultimate Multisite > Settings (Cài đặt)
2. Đi tới tab "Domain Mapping" (Ánh xạ Tên miền)
3. Cuộn xuống phần "Host Integrations" (Tích hợp Máy chủ)
4. Bật tích hợp RunCloud
5. Nhấn "Save Changes" (Lưu Thay đổi)

## Cách Nó Hoạt Động

Khi một tên miền được ánh xạ trong Ultimate Multisite:

1. Tích hợp sẽ gửi yêu cầu đến API của RunCloud để thêm tên miền đó vào ứng dụng của bạn
2. Nếu tên miền được thêm thành công, tích hợp cũng sẽ triển khai lại các chứng chỉ SSL
3. Khi việc ánh xạ tên miền bị xóa, tích hợp sẽ gỡ bỏ tên miền đó khỏi RunCloud

Đối với việc cài đặt tên miền phụ (subdomain), tích hợp sẽ tự động xử lý việc tạo tên miền phụ trong RunCloud khi có trang web mới được thêm vào mạng của bạn.

## Khắc Phục Sự Cố

### Vấn đề Kết nối API
- Kiểm tra xem thông tin đăng nhập API của bạn đã đúng chưa
- Xem lại xem ID máy chủ (server) và ứng dụng (app IDs) của bạn đã chính xác chưa
- Đảm bảo rằng tài khoản RunCloud của bạn có đủ quyền cần thiết

### Vấn đề Chứng chỉ SSL
- RunCloud có thể mất một chút thời gian để cấp chứng chỉ SSL
- Kiểm tra xem tên miền của bạn đã trỏ đúng về địa chỉ IP của máy chủ chưa
- Xem cài đặt SSL của RunCloud cho ứng dụng của bạn

### Tên Miền Không Được Thêm
- Kiểm tra nhật ký (logs) của Ultimate Multisite để tìm bất kỳ thông báo lỗi nào
- Xác minh xem tên miền đó đã có trong RunCloud hay chưa
- Đảm bảo rằng gói dịch vụ RunCloud của bạn hỗ trợ nhiều tên miền
