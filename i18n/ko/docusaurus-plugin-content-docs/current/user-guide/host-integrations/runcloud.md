---
title: RunCloud 통합
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud 통합

## 개요
RunCloud는 자체 클라우드 서버에서 웹 애플리케이션을 쉽게 배포하고 관리할 수 있는 클라우드 기반 서버 관리 플랫폼입니다. 이 통합은 Ultimate Multisite와 RunCloud 간에 자동 도메인 동기화 및 SSL 인증서 관리를 가능하게 합니다.

## 기능
- 자동 도메인 동기화
- SSL 인증서 관리
- 매핑이 삭제될 때 도메인 제거

## 요구 사항
다음 상수는 `wp-config.php` 파일에 정의되어야 합니다:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## 설정 지침

### 1. RunCloud API 자격 증명 가져오기

1. RunCloud 대시보드에 로그인합니다.
2. 오른쪽 상단에 있는 프로필 사진을 클릭하여 '사용자 프로필'로 이동합니다.
3. 메뉴에서 'API'를 선택합니다.
4. 아직 없으시면 'Generate API Key'를 클릭합니다.
5. API Key와 API Secret을 복사합니다.

### 2. 서버 및 앱 ID 가져오기

1. RunCloud 대시보드에서 'Servers'로 이동합니다.
2. WordPress 멀티사이트가 호스팅되는 서버를 선택합니다.
3. 서버 ID는 URL에서 확인할 수 있습니다: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. 'Web Applications'로 이동하여 WordPress 애플리케이션을 선택합니다.
5. 앱 ID는 URL에서 확인할 수 있습니다: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php에 상수 추가

다음 상수를 `wp-config.php` 파일에 추가합니다:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. 통합 활성화

1. WordPress 관리자에서 Ultimate Multisite > 설정으로 이동합니다.
2. 'Domain Mapping' 탭으로 이동합니다.
3. 'Host Integrations'까지 스크롤합니다.
4. RunCloud 통합을 활성화합니다.
5. 'Save Changes'를 클릭합니다.

## 작동 방식

Ultimate Multisite에서 도메인이 매핑될 때:

1. 통합은 RunCloud API에 요청을 보내 도메인을 애플리케이션에 추가합니다.
2. 도메인이 성공적으로 추가되면 통합은 SSL 인증서를 재배포합니다.
3. 도메인 매핑이 제거되면 통합은 RunCloud에서 도메인을 제거합니다.

서브도메인 설치의 경우, 통합은 네트워크에 새 사이트가 추가될 때 RunCloud에서 서브도메인 생성을 자동으로 처리합니다.

## 문제 해결

### API 연결 문제

- API 자격 증명이 올바른지 확인합니다.
- 서버 및 앱 ID가 올바른지 확인합니다.
- RunCloud 계정에 필요한 권한이 있는지 확인합니다.

### SSL 인증서 문제

- RunCloud가 SSL 인증서를 발급하는 데 시간이 걸릴 수 있습니다.
- 도메인이 서버의 IP 주소를 올바르게 가리키는지 확인합니다.
- 애플리케이션의 RunCloud SSL 설정을 확인합니다.

### 도메인이 추가되지 않음

- Ultimate Multisite 로그에서 오류 메시지를 확인합니다.
- 도메인이 이미 RunCloud에 추가되지 않았는지 확인합니다.
- RunCloud 플랜이 다중 도메인을 지원하는지 확인합니다.
