---
title: Nkwado Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration

## Tổng quan {#overview}
Cloudflare là một mạng lưới phân phối nội dung (CDN) và nhà cung cấp bảo mật hàng đầu giúp bảo vệ và tăng tốc các trang web. Việc tích hợp này cho phép quản lý tên miền tự động giữa Ultimate Multisite và Cloudflare, đặc biệt là đối với các cài đặt đa trang phụ (subdomain multisite).

## Tính năng {#features}
- Tự động tạo subdomain trong Cloudflare
- Hỗ trợ subdomain được proxy (chuyển tiếp)
- Quản lý bản ghi DNS
- Hiển thị bản ghi DNS nâng cao trong admin của Ultimate Multisite

## Yêu cầu {#requirements}
Các hằng số sau phải được định nghĩa trong tệp `wp-config.php` của bạn:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Hướng dẫn thiết lập {#setup-instructions}

### 1. Lấy API Key Cloudflare của bạn {#1-get-your-cloudflare-api-key}

1. Đăng nhập vào bảng điều khiển (dashboard) Cloudflare của bạn
2. Truy cập "My Profile" (nhấp vào email của bạn ở góc trên bên phải)
3. Chọn "API Tokens" từ menu
4. Tạo một API token mới với các quyền sau:
   - Zone.Zone: Đọc (Read)
   - Zone.DNS: Chỉnh sửa (Edit)
5. Sao chép API token của bạn

### 2. Lấy Zone ID của bạn {#2-get-your-zone-id}

1. Trong bảng điều khiển Cloudflare của bạn, chọn tên miền mà bạn muốn sử dụng
2. Zone ID sẽ hiển thị trong tab "Overview", ở thanh bên phải dưới mục "API"
3. Sao chép Zone ID

### 3. Thêm các hằng số vào wp-config.php {#3-add-constants-to-wp-configphp}

Thêm các hằng số sau vào tệp `wp-config.php` của bạn:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Bật tích hợp {#4-enable-the-integration}

1. Trong admin WordPress của bạn, đi đến Ultimate Multisite > Settings
2. Điều hướng đến tab "Domain Mapping" (Ánh xạ tên miền)
3. Cuộn xuống mục "Host Integrations" (Tích hợp Host)
4. Bật tích hợp Cloudflare
5. Nhấp vào "Save Changes" (Lưu thay đổi)

## Cách nó hoạt động {#how-it-works}

### Quản lý Subdomain {#subdomain-management}

Khi một trang web mới được tạo trong cài đặt đa trang phụ (subdomain multisite):

1. Integration-ah anọkụ akwụ na-akọ (request) n'API nke Cloudflare ka ọ gban akụkọ CNAME fọrọ mgbata (subdomain).
2. Subdomain ah a na-asịkwa ịbụrụ proxied na-akọ (proxied) na-akọ Cloudflare ma ọ bụ default (o chụrụ nke a nwere ike ịgban na-akọ filters).
3. Mgbe site ah anọghị anọ, integration ah ga-anọghị akụkọ subdomain ah ah na Cloudflare.

### Nkwado Akụkọ DNS (DNS Record Display) {#dns-record-display}

Integration ah na-agbanwe nkwado akụkọ DNS na admin Ultimate Multisite ma ọ bụ:

1. Na-akwụ akụkọ DNS direkt n'Cloudflare
2. Na-akwụ akụkọ ndị ah na-asịkwa proxied na-akọ (or not)
3. Na-akwụ akụkọ ihe ndị ọzọ maka akụkọ DNS ah

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (ediri aka "Cloudflare for SaaS") bụ ihe nwere n'Cloudflare na-agbanwe na-eme ka ndị khách nwere ike iji domain ha die na SSL na ọkụmụ multisite ha. Ọ bụ cara a-agbanwe maka instalasyon multisite nke na-akọ domain, onye na-akọ Cloudflare, karịsịrị, karara akụkọ SSL ma ọ bụ nwere ike ịgban na-akọ (renewal) fọrọ mgbata ah. Ọ bụ cara a-agbanwe maka instalasyon multisite nke na-akọ domain, onye na-akọ Cloudflare, karara akụkọ SSL ma ọ bụ nwere ike ịgban na-akọ (renewal) fọrọ mgbata ah.

### Mgbe ọ chọrọ dị ka integration standard Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Integration Standard | Cloudflare Custom Hostnames |
|---|---|---|
| **Ndu** | Na-akwụ akụkọ DNS auto-creates fọrọ mgbata (subdomains) | Na-eme ka domain custom (mapped) na-akọ SSL nke Cloudflare na-agbanwe |
| **Maka** | Multisite subdomain | Multisite domain-mapped |
| **SSL** | Na-asịkwa n'ụlọ ọjọ ah | Na-agbanwe na-akọ (managed) na-akọ Cloudflare ma ọ bụ automatic |

### Ịchọta Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Na dashboard Cloudflare-nwa, buka zone na domain principal ninyi.
2. Go na **SSL/TLS > Custom Hostnames**.
3. Add fallback origin wey dey point to IP or hostname server ninyi.
4. For each customer domain we map for Ultimate Multisite, add Custom Hostname entry na Cloudflare. You fit automate step this using Cloudflare API.
5. Cloudflare go issue and renew TLS certificates for each custom hostname automatically once DNS customer e point to network ninyi.

For full API reference, see [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Update na Terminology
As of Ultimate Multisite v2.6.1, this feature e be called **Cloudflare Custom Hostnames** for all plugin settings and labels. Versions earlier used the name "Cloudflare for SaaS", which is the underlying Cloudflare product name.
:::

## Important Notes {#important-notes}

As of recent updates from Cloudflare, wildcard proxying now available for all customers. This means that standard Cloudflare DNS integration no too critical for subdomain multisite installations like before, because you fit simply set up a wildcard DNS record in Cloudflare.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- Check say your API token na correct and e naga necessary permissions
- Verify say Zone ID ninyi na correct
- Ensure say account Cloudflare ninyi na haina necessary permissions

### Subdomain Not Added {#subdomain-not-added}
- Check Ultimate Multisite logs for any error messages
- Verify say subdomain no already add to Cloudflare
- Ensure say plan Cloudflare ninyi fit support number of DNS records you dey create

### Issues with Proxying {#proxying-issues}

- Ka ọ bụrụ na ị chụrụ subdomains dị ka proxy, ị ga-arịrụ filter `wu_cloudflare_should_proxy`.
- Ọ bụrụ na ụfọdụ features dịghị ike n'ụzọ ahụ mgbe ọ dịka proxy (nke a bụ ihe ataka n'ụzọ ahụ, dị ka ụfọdụ admin WordPress).
- Biko ị chọta ịnye Cloudflare Page Rules iji ịgụ akụkọ cache (cache) maka mga pages admin.
