---
title: Nkwado ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integração com ServerPilot {#serverpilot-integration}

## Tổng quan {#overview}
ServerPilot là một dịch vụ đám mây để lưu trữ các trang web WordPress và các trang web PHP khác trên các máy chủ của DigitalOcean, Amazon, Google hoặc bất kỳ nhà cung cấp máy chủ nào khác. Việc tích hợp này cho phép đồng bộ tên miền tự động và quản lý chứng chỉ SSL giữa Ultimate Multisite và ServerPilot.

## Tính năng {#features}
- Đồng bộ tên miền tự động
- Quản lý chứng chỉ SSL với Let's Encrypt
- Tự động gia hạn SSL

## Yêu cầu {#requirements}
Các hằng số sau phải được định nghĩa trong tệp `wp-config.php` của bạn:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Hướng dẫn thiết lập {#setup-instructions}

### 1. Lấy thông tin xác thực API ServerPilot của bạn {#1-get-your-serverpilot-api-credentials}

1. Đăng nhập vào bảng điều khiển (dashboard) ServerPilot của bạn
2. Truy cập "Account" > "API"
3. Tạo một khóa API mới nếu bạn chưa có
4. Sao chép Client ID và API Key của bạn

### 2. Lấy App ID của bạn {#2-get-your-app-id}

1. Trong bảng điều khiển ServerPilot của bạn, đi đến "Apps"
2. Chọn ứng dụng nơi trang web multisite WordPress của bạn được lưu trữ
3. App ID sẽ hiển thị trong URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Thêm các hằng số vào wp-config.php {#3-add-constants-to-wp-configphp}

Thêm các hằng số sau vào tệp `wp-config.php` của bạn:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Bật tích hợp {#4-enable-the-integration}

1. Trong trình quản trị WordPress của bạn, đi đến Ultimate Multisite > Settings
2. Điều hướng đến tab "Domain Mapping" (Ánh xạ tên miền)
3. Cuộn xuống phần "Host Integrations" (Tích hợp máy chủ)
4. Bật tích hợp ServerPilot
5. Nhấn "Save Changes" (Lưu thay đổi)

## Cách nó hoạt động {#how-it-works}

### Đồng bộ tên miền {#domain-syncing}

Khi một tên miền được ánh xạ trong Ultimate Multisite:

1. Integration no nọkụ (retrieves) list nke domain ndị a na ServerPilot.
2. Ọ na-adda domain ọhụrụ ahụ n'ime list ahụ (naagba www version ma ọ bụrụ na e na-eji).
3. Ọ na-send list ahụ ọhụrụ ahụ nọkwa ServerPilot ya na API.
4. ServerPilot na-update list domain ahụ maka application ị na-eji.

### SSL Certificate Management (Nchekwa SSL Certificate) {#ssl-certificate-management}

Akpọdụ anọkwa domains na-sync:

1. Integration na-enable AutoSSL fọrọ (for your application).
2. ServerPilot na-handle nkwado SSL certificate na-install ya na-eji Let's Encrypt.
3. ServerPilot na-handle renewal automatic SSL certificates ahụ ma ọ bụrụ na e na-eji.

## SSL Certificate Verification (Nchekwa SSL Certificate) {#ssl-certificate-verification}

Integration ahụ na-configure ịkpọta (increase) nkwado SSL certificate verification fọrọ maka ServerPilot, karị m ga-anọchịrị n'ime akụkọ ọ bụla ServerPilot na-issue na-install SSL certificates. Na-adịghị mma, ọ na-try up to 5 times, ma ọ bụrụ na e na-eji filters, ịga dị mma ya.

## Troubleshooting (Nchekwa/Ịkpọta) {#troubleshooting}

### API Connection Issues (Ihe nwere n'ime akụkọ API) {#api-connection-issues}
- Jikọta na Client ID na API Key ha na-agba ọsọ.
- Jikọta na App ID ha na-agba ọsọ.
- Na-enweghị mma na ServerPilot account ha na-enwe izin (permissions) ndị dị mma.

### SSL Certificate Issues (Ihe nwere n'ime akụkọ SSL Certificate) {#ssl-certificate-issues}
- ServerPilot na-enwe ihe na domains na-enwe DNS records ọma na-agba server ha ma ọ bụrụ na e na-issue SSL certificates.
- Ma SSL certificates na-anọchịrị, jikọta na domains ha na-point n'ime IP address server ha mma.
- Karị m ga-anọchịrị n'ime akụkọ ServerPilot na-issue na-install SSL certificates (na-adịghị mma 5-15 minutes).

### Domain Not Added (Domain Na-achie) {#domain-not-added}
- Jikọta na Ultimate Multisite logs ha na-enwe ihe ọ bụla error messages.
- Jikọta na domain ahụ na-achie n'ime ServerPilot ma ọ bụrụ na e na-add ya.
- Na-enweghị mma na ServerPilot plan ha na-support number of domains ị na-addya.

### Afoghị Ịtụ Domain (Domain Removal) {#domain-removal}
- Oge a, ServerPilot API na-eme ihe ọ bụla ịhapụ domain ndị dị n'ụọ.
- Mgbe ịhapụ mapping domain na Ultimate Multisite, integration ahụ ga-arụta update list domain na ServerPilot ka ya hapụ domain ahụ hapụ.
