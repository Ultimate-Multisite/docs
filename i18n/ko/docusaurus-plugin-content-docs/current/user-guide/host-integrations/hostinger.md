---
title: Hostinger (hPanel) 통합
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) 통합

## 개요

Hostinger는 hPanel이라는 최신 제어판을 사용하는 인기 웹 호스팅 제공업체입니다. Ultimate Multisite Hostinger 통합 기능을 사용하면 Ultimate Multisite와 Hostinger의 hPanel 간에 도메인 동기화가 자동으로 이루어지므로, WordPress 관리자 화면에서 도메인 매핑 및 서브도메인을 직접 관리할 수 있습니다.

## 기능

- hPanel에서 애드온 도메인 자동 생성
- hPanel에서 서브도메인 자동 생성 (서브도메인 멀티사이트 설치 시)
- 매핑 삭제 시 도메인 자동 제거
- hPanel의 도메인 관리 API와 원활하게 통합

## 필수 조건

Hostinger 통합 기능을 사용하려면 다음이 필요합니다.

1. hPanel 접근 권한이 있는 Hostinger 계정
2. Hostinger에서 발급받은 API 토큰
3. `wp-config.php` 파일에 다음 상수 정의:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

선택적으로 다음 상수를 정의할 수도 있습니다.

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // 기본 API 엔드포인트
```

## 설정 방법

### 1. Hostinger API 토큰 생성

1. Hostinger 계정에 로그인하여 hPanel에 접속합니다.
2. **계정 설정(Account Settings)** → **API 토큰(API Tokens)**으로 이동합니다.
3. **새 토큰 생성(Create New Token)**을 클릭합니다.
4. 토큰에 설명이 포함된 이름(예: "Ultimate Multisite")을 지정합니다.
5. 필요한 권한을 선택합니다:
   - 도메인 관리
   - 서브도메인 관리
6. 생성된 토큰을 복사하여 안전하게 보관합니다.

### 2. 계정 ID 찾기

1. hPanel에서 **계정 설정(Account Settings)** → **계정 정보(Account Information)**로 이동합니다.
2. 계정 ID가 이 페이지에 표시됩니다.
3. 이 ID를 복사하여 다음 단계에 사용하기 위해 저장합니다.

### 3. wp-config.php에 상수 추가

다음 상수를 `wp-config.php` 파일에 추가합니다:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Hostinger 계정이 다른 API 엔드포인트를 사용하는 경우, 사용자 지정할 수 있습니다:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. 통합 기능 활성화

1. WordPress 관리자 화면에서 **Ultimate Multisite > 설정(Settings)**으로 이동합니다.
2. **도메인 매핑(Domain Mapping)** 탭으로 이동합니다.
3. **Host Integrations** 섹션까지 스크롤합니다.
4. **Hostinger (hPanel)** 통합 기능을 활성화합니다.
5. **변경 사항 저장(Save Changes)**을 클릭합니다.

## 작동 방식

### 애드온 도메인

Ultimate Multisite에서 도메인을 매핑할 때:

1. 통합 기능은 Hostinger의 API로 요청을 보내 해당 도메인을 애드온 도메인으로 추가합니다.
2. 도메인은 루트 디렉터리를 가리키도록 설정됩니다.
3. 도메인 매핑이 제거되면, 통합 기능은 hPanel에서 애드온 도메인을 자동으로 제거합니다.

### 서브도메인

서브도메인 멀티사이트 설치의 경우, 새 사이트가 생성될 때:

1. 통합 기능은 전체 도메인에서 서브도메인 부분을 추출합니다.
2. Hostinger의 API로 요청을 보내 서브도메인을 추가합니다.
3. 서브도메인은 루트 디렉터리를 가리키도록 설정됩니다.

## 중요 참고 사항

- 이 통합 기능은 Hostinger의 REST API를 사용하여 계정과 통신합니다.
- API 토큰에는 도메인 및 서브도메인 관리에 필요한 권한이 있어야 합니다.
- 이 통합 기능은 DNS 설정을 처리하지 않습니다. 도메인은 이미 Hostinger 계정을 가리키고 있어야 합니다.
- API 요청은 HTTPS를 통해 안전하게 이루어집니다.
- API 토큰은 안전하게 보관하고 절대 외부에 공유하지 마십시오.

## 문제 해결

### API 연결 문제

- API 토큰이 정확하고 만료되지 않았는지 확인합니다.
- 계정 ID가 정확한지 확인합니다.
- API 토큰에 도메인 관리에 필요한 권한이 있는지 확인합니다.
- Hostinger 계정이 활성화되어 있고 정상 상태인지 확인합니다.

### 도메인 추가 실패

- Ultimate Multisite 로그에서 오류 메시지가 있는지 확인합니다.
- 해당 도메인이 이미 Hostinger 계정에 추가되어 있지 않은지 확인합니다.
- Hostinger 계정이 애드온 도메인 제한에 도달하지 않았는지 확인합니다.
- 도메인이 Hostinger 네임서버를 제대로 가리키고 있는지 확인합니다.

### SSL 인증서 문제

- 이 통합 기능은 SSL 인증서 발급을 처리하지 않습니다.
- Hostinger는 일반적으로 AutoSSL을 통해 무료 SSL 인증서를 제공합니다.
- SSL 인증서는 hPanel의 **SSL/TLS** 섹션에서 직접 관리할 수 있습니다.
- 또는 Hostinger의 AutoSSL 기능을 사용하여 Let's Encrypt를 사용하십시오.

## 지원

Hostinger 통합 기능에 대한 추가 도움말은 다음을 참조하십시오:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
