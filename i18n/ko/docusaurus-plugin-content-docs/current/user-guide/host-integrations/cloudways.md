---
title: Cloudways 통합
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways 통합

## 개요
Cloudways는 DigitalOcean, AWS, Google Cloud 등 다양한 클라우드 제공업체에서 WordPress 사이트를 배포할 수 있는 관리형 클라우드 호스팅 플랫폼입니다. 이 통합은 Ultimate Multisite와 Cloudways 간에 자동 도메인 동기화 및 SSL 인증서 관리를 가능하게 합니다.

## 기능
- 자동 도메인 동기화
- SSL 인증서 관리
- 추가 도메인 지원
- SSL 인증서를 위한 DNS 검증

## 요구 사항
다음 상수는 `wp-config.php` 파일에 정의되어야 합니다:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

옵션으로, 다음 상수도 정의할 수 있습니다:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## 설정 지침

### 1. Cloudways API 자격 증명 가져오기

1. Cloudways 대시보드에 로그인
2. "Account" > "API Keys"로 이동
3. 아직 없으면 API 키를 생성
4. 이메일과 API 키를 복사

### 2. 서버 및 애플리케이션 ID 가져오기

1. Cloudways 대시보드에서 "Servers"로 이동
2. WordPress 멀티사이트가 호스팅되는 서버를 선택
3. 서버 ID는 URL에 표시됩니다: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications"로 이동하여 WordPress 애플리케이션을 선택
5. App ID는 URL에 표시됩니다: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php에 상수 추가

다음 상수를 `wp-config.php` 파일에 추가하세요:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

항상 포함되어야 할 추가 도메인이 있는 경우:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. 통합 활성화

1. WordPress 관리자에서 Ultimate Multisite > 설정으로 이동
2. "Domain Mapping" 탭으로 이동
3. "Host Integrations"로 스크롤
4. Cloudways 통합을 활성화
5. "Save Changes"를 클릭

## 작동 방식

### 도메인 동기화

Ultimate Multisite에서 도메인이 매핑될 때:

1. 통합이 현재 매핑된 모든 도메인을 가져옵니다
2. 새 도메인을 목록에 추가합니다 (해당되는 경우 www 버전도 포함)
3. 전체 목록을 API를 통해 Cloudways에 전송합니다
4. Cloudways가 애플리케이션의 도메인 별칭을 업데이트합니다

참고: Cloudways API는 매번 전체 도메인 목록을 전송해야 하며, 개별 도메인 추가 또는 삭제만 허용하지 않습니다.

### SSL 인증서 관리

도메인이 동기화된 후:

1. 통합이 도메인에 유효한 DNS 레코드가 서버를 가리키는지 확인합니다
2. 해당 도메인에 대한 Let's Encrypt SSL 인증서를 설치하도록 Cloudways에 요청합니다
3. Cloudways가 SSL 인증서 발급 및 설치를 처리합니다

## 추가 도메인

`WU_CLOUDWAYS_EXTRA_DOMAINS` 상수는 Cloudways와 동기화할 때 항상 포함되어야 하는 추가 도메인을 지정할 수 있게 해줍니다. 이는 다음과 같은 경우에 유용합니다:

- Ultimate Multisite에서 관리되지 않는 도메인
- 와일드카드 도메인 (예: `*.example.com`)
- 개발 또는 스테이징 도메인

## 문제 해결

### API 연결 문제

- 이메일과 API 키가 올바른지 확인
- 서버 및 애플리케이션 ID가 올바른지 확인
- Cloudways 계정에 필요한 권한이 있는지 확인

### SSL 인증서 문제

- Cloudways는 SSL 인증서를 발급하기 전에 도메인이 서버를 가리키는 유효한 DNS 레코드를 가져야 합니다
- 통합은 SSL 인증서를 요청하기 전에 DNS 레코드를 검증합니다
- SSL 인증서가 발급되지 않는 경우 도메인이 서버 IP 주소를 올바르게 가리키는지 확인하세요

### 도메인 추가되지 않음

- Ultimate Multisite 로그에서 오류 메시지를 확인하세요
- 도메인이 이미 Cloudways에 추가되지 않았는지 확인하세요
- Cloudways 플랜이 추가하려는 도메인 수를 지원하는지 확인하세요
