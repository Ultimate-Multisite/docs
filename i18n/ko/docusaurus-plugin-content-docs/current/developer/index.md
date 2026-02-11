---
title: 개발자 문서
sidebar_position: 1
_i18n_hash: 6443e353aea8cf7592387aa5d9658951
---
# 개발자 문서

이 가이드는 개발자에게 Ultimate Multisite에 통합, 확장 또는 애드온 개발에 필요한 모든 것을 제공합니다. Ultimate Multisite는 WordPress Multisite 네트워크를 Website-as-a-Service (WaaS) 플랫폼으로 변환합니다.

## 제공되는 항목

- **[REST API](./rest-api/overview)** — API 키 인증을 사용한 모든 엔티티(고객, 사이트, 멤버십, 결제, 제품, 도메인)에 대한 CRUD 작업을 완벽하게 지원합니다
- **[Hooks Reference](./hooks/guide)** — 라이프사이클 이벤트 및 사용자 정의를 위한 200개 이상의 액션 훅과 280개 이상의 필터 훅을 제공합니다
- **[Integration Guide](./integration-guide/)** — CRM 통합, 분석, 사용자 정의 게이트웨이 및 웹후크 예시를 제공합니다
- **[Code Examples](./code-examples/)** — 동적 가격 책정, 사이트 프로비저닝, 사용자 정의 제한 및 다중 게이트웨이 처리에 대한 고급 패턴을 제공합니다
- **[Addon Development](./addon-development/getting-started)** — 애드온 플러그인 구축을 위한 구조화된 프레임워크를 제공합니다

## 필수 사항

- WordPress Multisite installation
- PHP 7.4 or higher
- Ultimate Multisite plugin activated

## 빠른 시작

### REST API 사용

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### 이벤트에 연결

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### 애드온 만들기

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

각 섹션에서 자세한 문서와 예제를 확인하세요.
