---
title: Tổng quan về REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Tài liệu Tham khảo REST API

## Cấu hình Cơ bản

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Xác thực (Authentication):** API Key & Secret (Sử dụng HTTP Basic Auth hoặc Tham số URL)

## Xác thực

### Bật API
```php
// Bật API trong cài đặt Ultimate Multisite hoặc bằng code
wu_save_setting('enable_api', true);
```

### Lấy Thông tin Xác thực API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Các Phương thức Xác thực

**HTTP Basic Auth (Khuyến nghị):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Tham số URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Các Endpoint Chính

### 1. API Khách hàng (Customers API)

**Base Route:** `/customers`

**Lấy Tất cả Khách hàng**
```http
GET /wu/v2/customers
```

**Lấy Thông tin Khách hàng Cụ thể**
```http
GET /wu/v2/customers/{id}
```

**Tạo Khách hàng Mới**
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

**Cập nhật Thông tin Khách hàng**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "Ghi chú khách hàng VIP"
}
```

**Xóa Khách hàng**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Trang web (Sites API)

**Base Route:** `/sites`

**Tạo Trang web Mới**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Trang web mới của tôi",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. API Hội viên (Memberships API)

**Base Route:** `/memberships`

**Tạo Hội viên Mới**
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

### 4. API Sản phẩm (Products API)

**Base Route:** `/products`

**Lấy Tất cả Sản phẩm**
```http
GET /wu/v2/products
```

### 5. API Thanh toán (Payments API)

**Base Route:** `/payments`

**Tạo Giao dịch Thanh toán**
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

### 6. API Tên miền (Domains API)

**Base Route:** `/domains`

**Ánh xạ Tên miền**
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

## Endpoint Đăng ký (Registration Endpoint)

Endpoint `/register` cung cấp quy trình đăng ký/thanh toán hoàn chỉnh:

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
        "site_title": "Trang web mới của tôi",
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

**Phản hồi (Response):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Phản hồi Lỗi (Error Responses)

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Giá trị tham số không hợp lệ",
    "data": {
        "status": 400,
        "params": {
            "email": "Định dạng email không hợp lệ"
        }
    }
}
```

## Phân trang và Lọc (Pagination and Filtering)

**Tham số Truy vấn (Query Parameters):**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Các tham số phổ biến:
- `per_page` - Số lượng mục trên mỗi trang (mặc định: 20, tối đa: 100)
- `page` - Số trang
- `search` - Từ khóa tìm kiếm
- `orderby` - Trường sắp xếp
- `order` - Hướng sắp xếp (asc/desc)
- `status` - Lọc theo trạng thái
- `date_created` - Lọc theo khoảng ngày
