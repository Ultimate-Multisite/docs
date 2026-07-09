---
title: Khuaws cia RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integration {#runcloud-integration}

## Tổng quan (Overview) {#overview}
RunCloud هو platform management server-based cloud, allows you to deploy and manage web applications easily on your own cloud servers. Integration này cho phép đồng bộ tên miền tự động và quản lý SSL certificate giữa Ultimate Multisite và RunCloud.

## Tính năng (Features) {#features}
- Đồng bộ tên miền tự động (Automatic domain syncing)
- Quản lý chứng chỉ SSL (SSL certificate management)
- Xóa tên miền khi các ánh xạ (mappings) bị xóa (Domain removal when mappings are deleted)

## Yêu cầu (Requirements) {#requirements}
Các hằng số sau phải được định nghĩa trong file `wp-config.php` của bạn:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Hướng dẫn thiết lập (Setup Instructions) {#setup-instructions}

### 1. Lấy thông tin API của RunCloud (Get Your RunCloud API Credentials) {#1-get-your-runcloud-api-credentials}

1. Đăng nhập vào dashboard của bạn trên RunCloud.
2. Vào "User Profile" (nhấp vào ảnh đại diện ở góc trên bên phải).
3. Chọn "API" từ menu.
4. Nhấn "Generate API Key" nếu bạn chưa có.
5. Sao chép API Key và API Secret của bạn.

### 2. Lấy ID Server và App của bạn (Get Your Server and App IDs) {#2-get-your-server-and-app-ids}

1. Trong dashboard RunCloud, vào mục "Servers".
2. Chọn server nơi WordPress multisite của bạn được lưu trữ.
3. Server ID sẽ hiển thị trong URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Vào "Web Applications" và chọn ứng dụng WordPress của bạn.
5. App ID sẽ hiển thị trong URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Thêm các hằng số vào wp-config.php (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

Thêm các hằng số sau vào file `wp-config.php` của bạn:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Kích hoạt tích hợp (Enable the Integration) {#4-enable-the-integration}

1. 끕 WordPress admin-iin, Ultimate Multisite > Settings-t tsoom.
2. "Domain Mapping" tab-t tsoom.
3. "Host Integrations"-t tsoom.
4. RunCloud integration-t enable qhia.
5. "Save Changes"-t click qhia.

## 뒨 삔 (How It Works) {#how-it-works}

Ultimate Multisite-iin domain tsoom hmong ua raws li:

1. Integration-t API-t rau RunCloud-t hais txog domain tsoom rau koj application hais.
2. Domain tsoom hais zoo heev, integration-t SSL certificates tsoom los (redeploy).
3. Thaum domain mapping tsoom tsoom, integration-t domain tsoom RunCloud tsoom los.

Subdomain tsoom tsoom rau installation tsoom hmong, integration-t automatically handle creation of subdomains hais RunCloud tha koj network tsoom sites tsoom los.

## Tsoom tsoom (Troubleshooting) {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- Koj API credentials zoo heev qhia.
- Server ID thiab app ID zoo heev qhia.
- Koj RunCloud account muaj hauv txhua yam permissions zoo heev qhia.

### SSL Certificate Issues {#ssl-certificate-issues}
- RunCloud tsoom los SSL certificates tsoom los ua ntau lub sijhawm.
- Koj domain tsoom IP address ntawm koj server zoo heev qhia.
- Koj application rau RunCloud SSL settings tsoom los hais.

### Domain Not Added {#domain-not-added}
- Ultimate Multisite logs hais txog error messages tsoom los hais.
- Domain tsoom RunCloud tsoom los muaj heev qhia.
- Koj RunCloud plan muaj lub domain ntau zoo heev qhia.
