---
title: WP Engine 통합
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integration

## 개요

WP Engine은 WordPress 사이트에 최적화된 성능, 보안 및 확장성을 제공하는 프리미엄 관리형 WordPress 호스팅 플랫폼입니다. 이 통합은 Ultimate Multisite와 WP Engine 간의 자동 도메인 동기화를 가능하게 합니다.

## 기능

- 자동 도메인 동기화
- 다중 사이트 설치용 서브도메인 지원
- WP Engine의 기존 시스템과 원활한 통합

## 요구 사항

이 통합은 WP Engine에서 호스팅 중인지 자동으로 감지하고 내장된 WP Engine API를 사용합니다. WP Engine 플러그인이 활성화되고 제대로 구성되어 있으면 추가 구성이 필요 없습니다.

그러나 수동으로 통합을 구성해야 하는 경우 `wp-config.php` 파일에 다음 상수 중 하나를 정의할 수 있습니다:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferred method
// OR
define('WPE_API', 'your_api_key'); // Alternative method
```

## 설정 지침

### 1. WP Engine 플러그인 확인

WP Engine에서 호스팅 중이라면 WP Engine 플러그인이 이미 설치되고 활성화되어 있어야 합니다. 다음을 확인하세요:

1. WP Engine 플러그인이 활성화되어 있습니다
2. 파일 `wp-content/mu-plugins/wpengine-common/class-wpeapi.php`가 존재합니다

### 2. 통합 활성화

1. WordPress 관리자에서 Ultimate Multisite > 설정으로 이동
2. "Domain Mapping" 탭으로 이동
3. "Host Integrations"로 스크롤
4. WP Engine 통합을 활성화
5. "Save Changes"를 클릭

## 작동 방식

### 도메인 동기화

Ultimate Multisite에서 도메인이 매핑될 때:

1. 통합은 WP Engine API를 사용하여 도메인을 WP Engine 설치에 추가합니다
2. WP Engine은 도메인 구성 및 SSL 인증서 발급을 처리합니다
3. 도메인 매핑이 제거되면 통합은 WP Engine에서 도메인을 제거합니다

### 서브도메인 지원

서브도메인 다중 사이트 설치의 경우:

1. 통합은 새 사이트가 생성될 때마다 각 서브도메인을 WP Engine에 추가합니다
2. WP Engine은 서브도메인 구성을 처리합니다
3. 사이트가 삭제되면 통합은 WP Engine에서 서브도메인을 제거합니다

## 중요 사항

### 와일드카드 도메인

서브도메인 다중 사이트 설치의 경우, 와일드카드 도메인 구성을 요청하기 위해 WP Engine 지원팀에 연락하는 것이 좋습니다. 이렇게 하면 각 서브도메인을 개별적으로 추가할 필요 없이 모든 서브도메인이 자동으로 동작합니다.

### SSL 인증서

WP Engine은 이 통합을 통해 추가된 모든 도메인에 대해 SSL 인증서 발급 및 갱신을 자동으로 처리합니다. 추가 구성이 필요 없습니다.

## 문제 해결

### API 연결 문제

- WP Engine 플러그인이 활성화되고 제대로 구성되어 있는지 확인하세요
- 수동으로 API 키를 정의한 경우 올바른지 확인하세요
- API에 문제가 있는 경우 WP Engine 지원팀에 연락하세요

### 도메인 추가되지 않음

- Ultimate Multisite 로그에서 오류 메시지를 확인하세요
- 도메인이 이미 WP Engine에 추가되어 있지 않은지 확인하세요
- WP Engine 플랜이 추가하려는 도메인 수를 지원하는지 확인하세요

### 서브도메인 문제

- 서브도메인이 작동하지 않으면 WP Engine 지원팀에 연락하여 와일드카드 도메인 구성을 요청하세요
- 메인 도메인 및 서브도메인에 대한 DNS 설정이 올바르게 구성되어 있는지 확인하세요
