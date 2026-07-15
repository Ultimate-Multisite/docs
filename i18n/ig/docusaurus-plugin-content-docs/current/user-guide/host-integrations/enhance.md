---
title: Nchegide Ụlọ Ọkụ Nkwado
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Nchegị Integracao Control Panel

## Oghụ {#overview}
Enhance na modern control panel bụ ihe na-eme automation na hosting na management nkwado. Integration a na-eme sync domain automatic na SSL certificate management ọkwaiche n'ime Ultimate Multisite na Enhance Control Panel.

**Nchịkọta Nchegị:** See [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) maka tips na maara ọkwaiche n'ime cộnguntiy na maara ihe ndị ọzọ.

## Ihe Ndị Ọrụ {#features}
- Sync domain automatic mgbe domains na-map in Ultimate Multisite
- Provision SSL certificate automatic via LetsEncrypt mgbe DNS na-resolve
- Subdomain support maka networks na-run in subdomain mode
- Removal domain mgbe mappings na-delete
- Connection testing maka maara credentials API

## Ihe Ndị Ọzọ {#requirements}

### Ihe Ndị Ọrụ System {#system-requirements}
- Enhance Control Panel na-install na-eme ọkwaiche
- WordPress Multisite installation na-host in server Enhance na-connect n'ime enhance server
- Apache web server (Enhance na-support Apache configurations; LiteSpeed Enterprise na-available na-cost abụọ)

### Access API {#api-access}
Ị ga-anọchịrị access administrator na Enhance Control Panel maka ịchete API tokens.

## Ọkụ API Credentials Gị {#getting-your-api-credentials}

### 1. Chete API Token {#1-create-an-api-token}

1. Log in n'Enhance Control Panel gị mgbe administrator
2. Click on **Settings** na navigation menu
3. Navigate to **Access Tokens**
4. Click **Create Token**
5. Give the token oge a onye-eme ọrụ (e.g., "Ultimate Multisite Integration")
6. Assign role **System Administrator**
7. Maka ụbọchị maara:
   - Leave empty ma ọ bụrụ na ị chọrọ token ahụ e ji akwaiche
   - Ma set ụbọchị maara maara maka ihe nchegbu mgbe a dị mma

8. Click **Create**

Depois de tạo, **Access Token** và **Organization ID** của bạn sẽ được hiển thị. Hãy **Lưu chúng ngay lập tức** vì token này chỉ được hiển thị một lần thôi nhé.

### 2. Lấy Organization ID Của Bạn {#2-get-your-organization-id}

Organization ID sẽ được hiển thị trên trang Access Tokens trong một ô thông tin màu xanh có nhãn "Org ID: {your_id}".

Organization ID là một UUID có định dạng như thế này: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Bạn cũng có thể tìm Organization ID của khách hàng bằng cách:
1. Truy cập trang **Customers** (Khách hàng)
2. Nhấn **Manage customer** (Quản lý khách hàng) cho khách hàng liên quan
3. Xem URL - Organization ID là các ký tự chữ và số sau `/customers/`

### 3. Lấy Server ID Của Bạn {#3-get-your-server-id}

Để tìm Server ID của bạn (cần thiết cho các thao tác về domain):

1. Trong Enhance Control Panel, đi đến **Servers** (Máy chủ)
2. Nhấn vào máy chủ nơi cài đặt WordPress của bạn đang chạy
3. Server ID (định dạng UUID) sẽ hiển thị trong URL hoặc chi tiết máy chủ
4. Hoặc, bạn có thể dùng API để liệt kê các server:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID theo định dạng UUID là: `00000000-0000-0000-0000-000000000000`

### 4. Lấy API URL Của Bạn {#4-get-your-api-url}

API URL của bạn là URL Enhance Control Panel của bạn có thêm `/api/`:

```
https://your-enhance-panel.com/api/
```

**Quan trọng:** Đường dẫn `/api/` là bắt buộc. Những lỗi thường gặp bao gồm:
- Chỉ sử dụng tên miền mà không có `/api/`
- Sử dụng HTTP thay vì HTTPS (HTTPS là bắt buộc để bảo mật)

## Cấu hình {#configuration}

### Các Hằng số Bắt buộc {#required-constants}

Thêm các hằng số sau vào tệp `wp-config.php` của bạn:

// Ncheta Integration Control Panel
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Setup qua Integration Wizard {#setup-via-integration-wizard}

1. Na admin WordPress của bạn, đi đến **Ultimate Multisite** > **Settings**
2. Đi tới tab **Integrations** (Ncheta)
3. Tìm **Enhance Control Panel Integration** và nhấn **Configuration** (Cấu hình)
4. Cái wizard sẽ hướng dẫn bạn thiết lập:
   - **Bước 1:** Giới thiệu và tổng quan tính năng
   - **Bước 2:** Nhập thông tin API của bạn (Token, API URL, Server ID)
   - **Bước 3:** Kiểm tra kết nối
   - **Bước 4:** Xem lại và kích hoạt

Bạn có thể chọn:
- Để wizard tự động đưa các hằng số vào file `wp-config.php` của bạn
- Sao chép định nghĩa hằng số và thêm chúng thủ công

## Cấu hình WordPress Bổ sung {#additional-wordpress-configuration}

Dựa trên phản hồi của cộng đồng ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), bạn có thể cần cấu hình các cài đặt bổ sung này:

### Cấu hình .htaccess {#htaccess-configuration}

Nếu bạn gặp vấn đề với việc ánh xạ tên miền (domain mapping):
1. Xóa file `.htaccess` Enhance gốc
2. Thay thế nó bằng file `.htaccess` Multisite chuẩn của WordPress

### Các Hằng số Cookie {#cookie-constants}

Thêm các hằng số này vào `wp-config.php` để đảm bảo xử lý cookie đúng trên các tên miền đã được ánh xạ:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Cách Nó Hoạt Động {#how-it-works}

### Khi Một Tên Miền Được Ánh Xạ {#when-a-domain-is-mapped}

1. User map a custom domain in Ultimate Multisite (or create a new site in subdomain mode)
2. Integration send POST request to Enhance's API: `/servers/{server_id}/domains`
3. Enhance add the domain to your server configuration
4. When DNS resolve to your server, Enhance automatically provision an SSL certificate via LetsEncrypt
5. Domain become active with HTTPS

### Khi Một Tên Miền Bị Xóa (When a Domain is Removed) {#when-a-domain-is-removed}

1. Xóa ánh xạ tên miền trong Ultimate Multisite
2. Integration hỏi Enhance để tìm ID của tên miền đó
3. Gửi request DELETE đến: `/servers/{server_id}/domains/{domain_id}`
4. Enhance xóa tên miền khỏi cấu hình máy chủ của bạn

### Kiểm Tra DNS và SSL (DNS and SSL Checking) {#dns-and-ssl-checking}

Ultimate Multisite có sẵn tính năng kiểm tra DNS và SSL:
- Bạn có thể thiết lập khoảng thời gian kiểm tra trong **Domain Mapping Settings** (mặc định: 300 giây/5 phút)
- Hệ thống sẽ xác minh sự lan truyền của DNS trước khi đánh dấu một tên miền là hoạt động
- Tính hợp lệ của chứng chỉ SSL được kiểm tra tự động
- Enhance xử lý việc cấp phát SSL tự động, nên không cần cấu hình SSL thủ công

## Xác Minh Cài Đặt (Verifying Setup) {#verifying-setup}

### Kiểm Tra Kết Nối (Test the Connection) {#test-the-connection}

1. Trong Integration Wizard, sử dụng bước **Test Connection**
2. Plugin sẽ cố gắng liệt kê các tên miền trên máy chủ của bạn
3. Một thông báo thành công xác nhận:
   - Thông tin đăng nhập API là chính xác
   - URL API có thể truy cập được
   - Server ID hợp lệ
   - Quyền đã được thiết lập đúng

### Sau Khi Ánh Xạ Một Tên Miền (After Mapping a Domain) {#after-mapping-a-domain}

1. Ánh xạ một tên miền thử nghiệm trong Ultimate Multisite
2. Kiểm tra log của Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Xác minh trong Enhance Control Panel rằng tên miền đã được thêm:
   - Truy cập **Servers** > **Your Server** > **Domains**
   - Tên miền mới sẽ xuất hiện trong danh sách
4. Khi DNS lan truyền, hãy kiểm tra xem SSL đã được cấp phát tự động chưa

## Troubleshooting {#troubleshooting}

### Issues with API Connection {#api-connection-issues}

**Error: "Failed to connect to Enhance API"**
- Chú ọ `WU_ENHANCE_API_URL` nwere `/api/` na ya anụrịta.
- Ọ bụrụ na ị chọpụta HTTPS, ma bụ HTTP.
- Jiji na panel Enhance bụ ihe gị nwere ike ịgụ obere server WordPress gị.
- Jiji na ọ bụ olu firewall na-anọchịrị connection ahụ.

**Error: "Enhance API Token not found"**
- Jiji na `WU_ENHANCE_API_TOKEN` anọchitere anya n' `wp-config.php`.
- Jiji na token ahụ aka anọchitere anya ma ọ bụ lafo ya n' Enhance.
- Jiji na ị chọpụta asụsụ (typos) n' giá token ahụ.

**Error: "Server ID is not configured"**
- Jiji na `WU_ENHANCE_SERVER_ID` anọchitere anya n' `wp-config.php`.
- Jiji na Server ID bụ format UUID ọ bụla.
- Jiji na server ahụ anọchitere anya n' panel Enhance gị.

### Domain Not Added {#domain-not-added}

**Jiji logs:**
1. Jupụ **Ultimate Multisite** > **Logs**
2. Filter na **integration-enhance**
3. Jiji ihe ndị dị nwere ike ịdị mma anọchitere anya olu ahụ.

**Nchekwa ndị dị nwere ike ịbụ:**
- Format ogluwe (domain name) ọ bụla ma ọ bụ lafo ya.
- Ogluwe ahụ aka anọchitere anya na Enhance.
- Ọ dị mminọrọ API permissions (jiji na token ahụ nwere role System Administrator).
- Server ID ahụ na-agba na server ọ bụla n' Enhance.

### Issues with SSL Certificate {#ssl-certificate-issues}

**SSL na-achịkọta:**
- Jiji na DNS na-agba na IP address server gị.
- Jiji na ogluwe ahụ na-agba mma: `nslookup yourdomain.com`
- Enhance na-agba DNS ịdị mma ma ọ bụrụ na ya na-achịkọta SSL.
- Na-achịkọta SSL na-achịkọta nwere ike ịra 5-10 minụ abụọkpọrọ tar soapụ DNS na-agba.
- Jiji logs Control Panel Enhance na-achịkọta ihe ndị dị mminọrọ SSL ahụ.

**Nchekwa SSL ọ bụla n' Enhance:**
1. Jupụ **Servers** > **Your Server** > **Domains**
2. Jiji ogluwe gị ma jiji status SSL ahụ.
3. Ị chụrụ SSL provisioning ọ bụla ị chọrọ.

### DNS Check Interval {#dns-check-interval}

Ka ihe na domain or SSL certificates na-akwụ akụkọta nchek (activate) nchekịrị:
1. Mene **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Le anyị **DNS Check Interval** setting
3. Jiji ya dị ka ọ bụ 300 seconds, gaa dịka ọkụkọ dị aka (minimum: 10 seconds)
4. **Note:** Ihe dị kacha dị ka interval ndị a dị nwere ike ịchekere nkwado mgbe ọ dị elu na server.

### Erori Nchek (Authentication Errors) {#authentication-errors}

**HTTP 401/403 errors:**
- Jiji API token tupu ya n'Enhance
- Jiji iji nwe role **System Administrator**
- Jiji ka e ji token ahụ dị mma (expired)
- Jiji ka ị na-agba Organization ID ọ bụla (maka ọ dịghị risiti n'URL anụ ahụ)

### Ọkụkọ Ihe (Log Analysis) {#log-analysis}

Kvælọ logging dị mkpa:
```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Tupu, jiji logs na:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Ọ dị n'Enhance admin interface

## API Reference {#api-reference}

### Nchek (Authentication) {#authentication}
Ihe ọ bụla API requests na-agba Bearer token authentication:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Common Endpoints Na-agba Onye {#common-endpoints-used}

**List Servers:**
```
GET /servers
```

**List Domains on a Server:**
```
GET /servers/{server_id}/domains
```

**Add a Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Delete a Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### API Documentation Toụ Ali {#full-api-documentation}
API documentation toụ ali: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices {#best-practices}

### Security {#security}
- **Ndiye commit API tokens na version control** (Never commit API tokens to version control)
- Store tokens in `wp-config.php` which should be excluded from Git (Tụi nwere store tokens na `wp-config.php` nke a ga-anghị ịbụ na Git)
- Use tokens with appropriate permissions (System Administrator for full integration) (Jiri token ndị ọrụ dị mma (System Administrator maka ịnwụ nche gị) maka ịnwụ nche mgbe ọ bụla)
- Set token expiry dates for production environments (Kọrọ ụbọchị wanụ token na nchekwa nke eji n'ụzọ ọgwụ)
- Rotate tokens periodically (Chọpọta token ndị a nchekwa dị ka ọgụrụ dịka ọgụrụ)

### Performance {#performance}
- Use the default DNS check interval (300 seconds) to avoid excessive API calls (Gịnị na ịgbanwe akụkọ DNS (300 sekond) iji ịghọta akụkọ API dị ukwuu)
- Monitor Enhance server resources when running large-scale domain operations (Nche nkwado server Enhance mgbe ịrụ ihe ndị a na ọgụrụ dị ukwuu)
- Consider staggering domain additions if mapping many domains at once (Chọpọta ịgba ọkụ ụwa (domain) ndị a na-agbanwe ma ọ bụrụ na ị chọrọ ịgba ọtụtụ akụkọ karịta)

### Monitoring {#monitoring}
- Regularly check Ultimate Multisite logs for integration errors (Nche nkwado Ultimate Multisite logs dịka ọgụrụ dị ka ihe ndị a na-agbanwe)
- Set up monitoring for failed domain additions (Kọrọ ịnọchị nkwado akụkọ ndị a na-agbanwe)
- Verify SSL certificates are provisioning correctly (Nche iji gba sertifikat SSL dị mma)
- Keep an eye on Enhance server capacity and domain limits (Chọpọta nkwado nkwado server Enhance na oge ọkụ ụwa)

## Additional Resources {#additional-resources}

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** See wiki page "How to Configure Domain Mapping v2" (Nche ihe nwere Ultimate Multisite na ịgba ọkụ ụwa: Jiji wiki page "How to Configure Domain Mapping v2")

## Support {#support}

If you encounter issues:
1. Check the Troubleshooting section above (Ọ bụrụ na ị chọrọ ihe ndị a, jiji check Troubleshooting section a)
2. Review the Ultimate Multisite logs (Nche nwere Ultimate Multisite logs)
3. Consult the [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) ([GitHub Discussions])
4. Contact Enhance support for panel-specific issues (Jiri Enhance support maka ihe ndị dị n'ụlọ ahụ)
5. Create a new discussion with detailed error logs for community assistance (Chịkọta ọchịch dị ọhụrụ na-agba log nkwado dị mkpa maka ịnwụ nche n'ime cộngu)

## Notes {#notes}

- Integration a bụfọdụ anọchịrị na alias domain-sị; Enhance na-adịghị SSL maara.
- Integration a na-anọchi mmepụta custom domain mappings na sites ndị nwere subdomain.
- Ịgbagta www subdomain automatic na-agbata n'Settings Domain Mapping.
- Enhance na-anọchi configurations Apache (LiteSpeed Enterprise na-anọchi).
- Ụdị domain na Ultimate Multisite ga-anụghị domain na Enhance, ma ọ bụrụ na ya ga-anụghị SSL certificates ahụ a na-adịghị anọchitere anyị n'aka mgbe ọ dị.
