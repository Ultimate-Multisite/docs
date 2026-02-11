---
title: ServerPilot 통합
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot 통합

## 개요
ServerPilot은 DigitalOcean, Amazon, Google 또는 다른 서버 제공업체의 서버에서 WordPress 및 기타 PHP 웹사이트를 호스팅하기 위한 클라우드 서비스입니다. 이 통합은 Ultimate Multisite와 ServerPilot 간에 자동 도메인 동기화 및 SSL 인증서 관리를 가능하게 합니다.

## 기능
- 자동 도메인 동기화
- Let's Encrypt를 사용한 SSL 인증서 관리
- 자동 SSL 갱신

## 요구 사항
다음 상수는 `wp-config.php` 파일에 정의되어야 합니다:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## 설정 지침

### 1. ServerPilot API 자격 증명 가져오기
1. ServerPilot 대시보드에 로그인합니다  
2. "Account" > "API"로 이동합니다  
3. 아직 없으시면 새 API 키를 생성합니다  
4. 클라이언트 ID와 API 키를 복사합니다

### 2. 앱 ID 가져오기
1. ServerPilot 대시보드에서 "Apps"로 이동합니다  
2. WordPress 멀티사이트가 호스팅되는 앱을 선택합니다  
3. 앱 ID는 URL에서 확인할 수 있습니다: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. wp-config.php에 상수 추가
다음 상수를 `wp-config.php` 파일에 추가합니다:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. 통합 활성화
1. WordPress 관리자에서 Ultimate Multisite > 설정으로 이동합니다  
2. "Domain Mapping" 탭으로 이동합니다  
3. "Host Integrations"로 스크롤합니다  
4. ServerPilot 통합을 활성화합니다  
5. "Save Changes"를 클릭합니다

## 작동 방식

### 도메인 동기화
Ultimate Multisite에서 도메인이 매핑될 때:
1. 통합은 ServerPilot에서 현재 도메인 목록을 가져옵니다  
2. 새 도메인을 목록에 추가합니다 (해당되는 경우 www 버전도 포함)  
3. 업데이트된 목록을 API를 통해 ServerPilot에 전송합니다  
4. ServerPilot은 귀하의 애플리케이션에 대한 도메인 목록을 업데이트합니다

### SSL 인증서 관리
도메인이 동기화된 후:
1. 통합은 귀하의 애플리케이션에 AutoSSL을 자동으로 활성화합니다  
2. ServerPilot은 Let's Encrypt를 사용하여 SSL 인증서 발급 및 설치를 처리합니다  
3. ServerPilot은 SSL 인증서의 자동 갱신도 처리합니다

## SSL 인증서 검증
통합은 ServerPilot이 SSL 인증서를 발급하고 설치하는 데 시간이 걸릴 수 있으므로 ServerPilot에 대한 SSL 인증서 검증 시도를 늘리도록 구성됩니다. 기본적으로 최대 5회 시도하지만 필터를 사용하여 조정할 수 있습니다.

## 문제 해결

### API 연결 문제
- 클라이언트 ID와 API 키가 올바른지 확인합니다  
- 앱 ID가 올바른지 확인합니다  
- ServerPilot 계정에 필요한 권한이 있는지 확인합니다

### SSL 인증서 문제
- ServerPilot은 SSL 인증서를 발급하기 전에 도메인이 서버를 가리키는 유효한 DNS 레코드를 가져야 합니다  
- SSL 인증서가 발급되지 않는 경우 도메인이 서버의 IP 주소를 올바르게 가리키는지 확인합니다  
- ServerPilot이 SSL 인증서를 발급하고 설치하는 데 시간이 걸릴 수 있습니다 (보통 5-15분)

### 도메인 추가되지 않음
- Ultimate Multisite 로그에서 오류 메시지를 확인합니다  
- 도메인이 이미 ServerPilot에 추가되지 않았는지 확인합니다  
- ServerPilot 플랜이 추가하려는 도메인 수를 지원하는지 확인합니다

### 도메인 제거
현재 ServerPilot API는 개별 도메인을 제거하는 방법을 제공하지 않습니다  
Ultimate Multisite에서 도메인 매핑이 제거되면 통합은 ServerPilot의 도메인 목록을 업데이트하여 제거된 도메인을 제외합니다
