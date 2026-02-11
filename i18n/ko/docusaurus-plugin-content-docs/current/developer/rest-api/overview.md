---
title: REST API 개요
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API 참조

## 기본 구성

**기본 URL:** `{site_url}/wp-json/wu/v2/`  
**인증:** API Key & Secret (HTTP Basic Auth or URL Parameters)

## 인증

### API 활성화
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API 자격 증명 가져오기
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### 인증 방법

**HTTP Basic Auth (권장):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL 매개변수:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## 핵심 엔드포인트

### 1. 고객 API

**기본 경로:** `/customers`

**모든 고객 가져오기**
```http
GET /wu/v2/customers
```

**단일 고객 가져오기**
```http
GET /wu/v2/customers/{id}
```

**고객 생성**
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

**고객 업데이트**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**고객 삭제**
```http
DELETE /wu/v2/customers/{id}
```

### 2. 사이트 API

**기본 경로:** `/sites`

**사이트 생성**
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

### 3. 멤버십 API

**기본 경로:** `/memberships`

**멤버십 생성**
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

### 4. 제품 API

**기본 경로:** `/products`

**모든 제품 가져오기**
```http
GET /wu/v2/products
```

### 5. 결제 API

**기본 경로:** `/payments`

**결제 생성**
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

### 6. 도메인 API

**기본 경로:** `/domains`

**도메인 매핑**
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

## 등록 엔드포인트

`/register` 엔드포인트는 완전한 체크아웃/등록 흐름을 제공합니다:
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

**응답:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## 오류 응답

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

## 페이지 매김 및 필터링

**쿼리 매개변수:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

일반 매개변수:
- `per_page` - 페이지당 항목 수 (기본값: 20, 최대값: 100)
- `page` - 페이지 번호
- `search` - 검색어
- `orderby` - 정렬 필드
- `order` - 정렬 방향 (asc/desc)
- `status` - 상태별 필터
- `date_created` - 생성 날짜 범위별 필터
