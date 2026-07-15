---
title: Tổng quan REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Tài liệu tham khảo REST API

## Cấu hình cơ sở {#base-configuration}

**URL cơ sở:** `{site_url}/wp-json/wu/v2/`
**Xác thực:** Khóa API & Secret (HTTP Basic Auth hoặc tham số URL)

## Xác thực {#authentication}

### Bật API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Lấy thông tin xác thực API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Phương thức xác thực {#authentication-methods}

**HTTP Basic Auth (Được khuyến nghị):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Tham số URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Các điểm cuối cốt lõi {#core-endpoints}

### 1. API khách hàng {#1-customers-api}

**Tuyến cơ sở:** `/customers`

**Lấy tất cả khách hàng**
```http
GET /wu/v2/customers
```

**Lấy một khách hàng**
```http
GET /wu/v2/customers/{id}
```

**Tạo khách hàng**
```http
POST /wu/v2/customers
Content-Type: application/json

{
    "user_id": 123,
    "email_verification": "verified",
    "type": "customer",
    "has_trialed": false,
    "vip": false
}
```

**Cập nhật khách hàng**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Xóa khách hàng**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API trang {#2-sites-api}

**Tuyến cơ sở:** `/sites`

**Tạo trang**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "My New Site",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. API tư cách thành viên {#3-memberships-api}

**Tuyến cơ sở:** `/memberships`

**Tạo tư cách thành viên**
```http
POST /wu/v2/memberships
Content-Type: application/json

{
    "customer_id": 5,
    "plan_id": 3,
    "status": "active",
    "gateway": "stripe",
    "gateway_subscription_id": "sub_1234567890",
    "auto_renew": true
}
```

### 4. API sản phẩm {#4-products-api}

**Tuyến cơ sở:** `/products`

**Lấy tất cả sản phẩm**
```http
GET /wu/v2/products
```

### 5. API thanh toán {#5-payments-api}

**Tuyến cơ sở:** `/payments`

**Tạo thanh toán**
```http
POST /wu/v2/payments
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "status": "completed",
    "gateway": "stripe",
    "gateway_payment_id": "pi_1234567890",
    "total": 29.99,
    "currency": "USD"
}
```

### 6. API tên miền {#6-domains-api}

**Tuyến cơ sở:** `/domains`

**Ánh xạ tên miền**
```http
POST /wu/v2/domains
Content-Type: application/json

{
    "domain": "custom-domain.com",
    "customer_id": 5,
    "primary_domain": 1,
    "stage": "domain-mapping"
}
```

## Điểm cuối đăng ký {#registration-endpoint}

Điểm cuối `/register` cung cấp một luồng thanh toán/đăng ký hoàn chỉnh:

```http
POST /wu/v2/register
Content-Type: application/json

{
    "customer": {
        "username": "newuser",
        "password": "securepass123",
        "email": "user@example.com"
    },
    "products": ["basic-plan"],
    "duration": 1,
    "duration_unit": "month",
    "auto_renew": true,
    "site": {
        "site_url": "mynewsite",
        "site_title": "My New Site",
        "template_id": 1
    },
    "payment": {
        "status": "completed"
    },
    "membership": {
        "status": "active"
    }
}
```

**Phản hồi:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Điểm cuối đối tượng thuê độc lập {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 bổ sung phạm vi REST cho đối tượng thuê độc lập dành cho các tích hợp cấp phát, kiểm tra hoặc xác minh các đối tượng thuê biệt lập.

Payload yêu cầu chính xác phụ thuộc vào năng lực máy chủ đã bật, nhưng các tích hợp nên dự kiến các nhóm điểm cuối này:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Sử dụng điểm cuối bootstrap để chuẩn bị sổ đăng ký đối tượng thuê, cơ sở dữ liệu, hệ thống tệp và trạng thái định tuyến. Sử dụng các điểm cuối trạng thái di chuyển và xác minh trước khi chuyển đổi lưu lượng sản xuất. Sử dụng điểm cuối xóa để tháo dỡ đối tượng thuê độc lập, nhờ đó thông tin xác thực cơ sở dữ liệu được xóa thông qua luồng dọn dẹp addon.

Các phản hồi trạng thái di chuyển điển hình bao gồm:

```json
{
    "site_id": 123,
    "isolation_model": "sovereign",
    "database_host": "localhost",
    "verification": {
        "no_legacy": "passed",
        "sovereign_push": "passed",
        "tenant_users": "passed"
    },
    "ready": true
}
```

Xem `ready: false` là một yếu tố chặn trước khi ra mắt. Kiểm tra chi tiết xác minh, khắc phục ràng buộc máy chủ cơ sở dữ liệu, hàng đợi, cấp phát người dùng hoặc vấn đề định tuyến, rồi thử lại xác minh.

## Phản hồi lỗi {#error-responses}

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Invalid parameter value",
    "data": {
        "status": 400,
        "params": {
            "email": "Invalid email format"
        }
    }
}
```

## Phân trang và lọc {#pagination-and-filtering}

**Tham số truy vấn:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Các tham số phổ biến:
- `per_page` - Mục trên mỗi trang (mặc định: 20, tối đa: 100)
- `page` - Số trang
- `search` - Cụm từ tìm kiếm
- `orderby` - Trường sắp xếp
- `order` - Hướng sắp xếp (asc/desc)
- `status` - Lọc theo trạng thái
- `date_created` - Lọc theo khoảng ngày
