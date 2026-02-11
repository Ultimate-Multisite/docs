---
title: GridPane 통합
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane 통합

## 개요
GridPane는 진지한 WordPress 전문가를 위해 설계된 전문 WordPress 호스팅 제어판입니다. 이 통합은 Ultimate Multisite와 GridPane 간에 자동 도메인 동기화 및 SSL 인증서 관리를 가능하게 합니다.

## 기능
- 자동 도메인 동기화
- SSL 인증서 관리
- SUNRISE 상수의 자동 구성

## 요구 사항
다음 상수는 `wp-config.php` 파일에 정의되어야 합니다:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## 설정 지침

### 1. GridPane API 자격 증명 가져오기
1. GridPane 대시보드에 로그인하세요.
2. 'Settings' > 'API'로 이동하세요.
3. 아직 API 키가 없으면 생성하세요.
4. API 키를 복사하세요.

### 2. 서버 및 사이트 ID 가져오기
1. GridPane 대시보드에서 'Servers'로 이동하세요.
2. WordPress 멀티사이트가 호스팅되는 서버를 선택하세요.
3. 서버 ID를 기록하세요 (URL 또는 서버 상세 페이지에서 확인 가능).
4. 'Sites'로 이동하여 WordPress 사이트를 선택하세요.
5. 사이트 ID를 기록하세요 (URL 또는 사이트 상세 페이지에서 확인 가능).

### 3. wp-config.php에 상수 추가
다음 상수를 `wp-config.php` 파일에 추가하세요:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. 통합 활성화
1. WordPress 관리자에서 Ultimate Multisite > Settings로 이동하세요.
2. 'Domain Mapping' 탭으로 이동하세요.
3. 'Host Integrations'까지 스크롤하세요.
4. GridPane 통합을 활성화하세요.
5. 'Save Changes'를 클릭하세요.

## 작동 방식
Ultimate Multisite에서 도메인이 매핑될 때:
1. 통합이 GridPane API에 요청을 보내 도메인을 사이트에 추가합니다.
2. GridPane이 SSL 인증서 발급을 자동으로 처리합니다.
3. 도메인 매핑이 해제되면 통합이 GridPane에서 도메인을 제거합니다.

통합은 또한 도메인 매핑이 제대로 작동하도록 필요한 wp-config.php 파일의 SUNRISE 상수를 자동으로 처리합니다.

## SUNRISE 상수 관리
GridPane 통합의 독특한 기능 중 하나는 wp-config.php의 SUNRISE 상수를 자동으로 되돌려 GridPane 자체 도메인 매핑 시스템과 충돌을 방지하는 것입니다. 이를 통해 두 시스템이 문제 없이 함께 작동할 수 있습니다.

## 문제 해결

### API 연결 문제
- API 키가 올바른지 확인하세요.
- 서버 및 사이트 ID가 올바른지 확인하세요.
- GridPane 계정에 필요한 권한이 있는지 확인하세요.

### SSL 인증서 문제
- GridPane이 SSL 인증서를 발급하는 데 시간이 걸릴 수 있습니다.
- 도메인이 서버 IP 주소를 올바르게 가리키는지 확인하세요.
- 사이트의 GridPane SSL 설정을 확인하세요.

### 도메인 추가되지 않음
- Ultimate Multisite 로그에서 오류 메시지를 확인하세요.
- 도메인이 이미 GridPane에 추가되지 않았는지 확인하세요.
- 도메인의 DNS 레코드가 올바르게 구성되었는지 확인하세요.
