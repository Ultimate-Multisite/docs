---
title: REST API 개요
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API 참조 {#rest-api-reference}

## 기본 구성 {#base-configuration}

**기본 URL:** `{site_url}/wp-json/wu/v2/`
**인증:** API Key 및 Secret (HTTP Basic Auth 또는 URL Parameters)

## 인증 {#authentication}

### API 활성화 {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API 자격 증명 가져오기 {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### 인증 방법 {#authentication-methods}

**HTTP Basic Auth (권장):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## 핵심 엔드포인트 {#core-endpoints}

### 1. 고객 API {#1-customers-api}

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

### 2. 사이트 API {#2-sites-api}

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

### 3. 멤버십 API {#3-memberships-api}

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

### 4. 제품 API {#4-products-api}

**기본 경로:** `/products`

**모든 제품 가져오기**
```http
GET /wu/v2/products
```

### 5. 결제 API {#5-payments-api}

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

### 6. 도메인 API {#6-domains-api}

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

## 등록 엔드포인트 {#registration-endpoint}

`/register` 엔드포인트는 완전한 결제/등록 흐름을 제공합니다:

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

## 독립 테넌트 엔드포인트 {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0은 격리된 테넌트를 프로비저닝, 검사 또는 검증하는 통합을 위해 독립 테넌트 REST 범위를 추가합니다.

정확한 요청 페이로드는 활성화된 호스트 기능에 따라 달라지지만, 통합에서는 다음 엔드포인트 그룹을 예상해야 합니다:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

부트스트랩 엔드포인트를 사용하여 테넌트 레지스트리, 데이터베이스, 파일 시스템, 라우팅 상태를 준비하세요. 프로덕션 트래픽을 전환하기 전에 마이그레이션 상태 및 검증 엔드포인트를 사용하세요. 독립 해체에는 삭제 엔드포인트를 사용하여 애드온 정리 흐름을 통해 데이터베이스 자격 증명이 제거되도록 하세요.

일반적인 마이그레이션 상태 응답에는 다음이 포함됩니다:

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

`ready: false`를 출시 전 차단 요소로 취급하세요. 검증 세부 정보를 확인하고, 데이터베이스 호스트 바인딩, 대기열, 사용자 프로비저닝 또는 라우팅 문제를 수정한 다음 검증을 다시 시도하세요.

## 오류 응답 {#error-responses}

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

## 페이지네이션 및 필터링 {#pagination-and-filtering}

**쿼리 매개변수:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

공통 매개변수:
- `per_page` - 페이지당 항목 수 (기본값: 20, 최대: 100)
- `page` - 페이지 번호
- `search` - 검색어
- `orderby` - 정렬 필드
- `order` - 정렬 방향 (asc/desc)
- `status` - 상태별 필터링
- `date_created` - 날짜 범위별 필터링
