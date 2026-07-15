---
title: 개발자 문서
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# 개발자 문서

이 가이드는 개발자에게 Ultimate Multisite와 통합하거나, 이를 확장하거나, Ultimate Multisite용 애드온을 개발하는 데 필요한 모든 것을 제공합니다. Ultimate Multisite는 WordPress Multisite 네트워크를 Website-as-a-Service(WaaS) 플랫폼으로 변환합니다.

## 사용 가능한 항목 {#whats-available}

- **[REST API](./rest-api/overview)** — API 키 인증을 사용하여 모든 엔터티(고객, 사이트, 멤버십, 결제, 상품, 도메인)에 대한 완전한 CRUD 작업
- **[훅 참조](./hooks/guide)** — 수명 주기 이벤트 및 사용자 지정을 위한 200개 이상의 액션 훅과 280개 이상의 필터 훅
- **[통합 가이드](./integration-guide/)** — CRM 통합, 분석, 사용자 지정 게이트웨이 및 웹훅 예시
- **[코드 예시](./code-examples/)** — 동적 가격 책정, 사이트 프로비저닝, 사용자 지정 제한 및 다중 게이트웨이 처리를 위한 고급 패턴
- **[애드온 개발](./addon-development/getting-started)** — 애드온 plugin 구축을 위한 구조화된 프레임워크

## 요구 사항 {#requirements}

- WordPress Multisite 설치
- PHP 7.4 이상
- Ultimate Multisite plugin 활성화됨

## Composer / Bedrock 설치 {#composer--bedrock-installation}

Ultimate Multisite는 [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite)에서 `ultimate-multisite/ultimate-multisite`로 제공됩니다. 이는 [Bedrock](https://roots.io/bedrock/) 기반 WordPress 설정 및 기타 Composer로 관리되는 환경에 권장되는 설치 방법입니다.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note 이름이 변경된 패키지(v2.6.1+)
Composer 패키지는 v2.6.1에서 `devstone/ultimate-multisite`에서 `ultimate-multisite/ultimate-multisite`로 이름이 변경되었습니다. `composer.json`이 이전 벤더 이름을 참조하는 경우 require 항목을 업데이트하고 `composer update`를 실행하세요.
:::

설치 후 Network Admin에서 plugin을 네트워크 활성화하세요.

```bash
wp plugin activate ultimate-multisite --network
```

또는 Bedrock의 autoloader를 통해 plugin을 must-use plugin으로 로드하는 경우, 활성화 가드를 우회하려면 `wp_ultimo_skip_network_active_check` 필터를 사용하세요.

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## 빠른 시작 {#quick-start}

### REST API 사용 {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### 이벤트에 훅 연결 {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### 애드온 빌드 {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

자세한 문서와 예시는 각 섹션을 참조하세요.
