---
title: cPanel 통합
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel 통합

## 개요
cPanel은 많은 공유 및 전용 호스팅 제공업체에서 사용되는 가장 인기 있는 웹 호스팅 제어판 중 하나입니다. 이 통합은 Ultimate Multisite와 cPanel 간에 자동 도메인 동기화를 가능하게 하여 도메인 별칭 및 서브도메인을 cPanel 계정에 자동으로 추가할 수 있도록 합니다.

## 기능
- cPanel에서 자동 애드온 도메인 생성
- cPanel에서 자동 서브도메인 생성 (서브도메인 멀티사이트 설치용)
- 매핑이 삭제될 때 도메인 제거

## 요구 사항
다음 상수는 `wp-config.php` 파일에 정의되어야 합니다:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

선택적으로 다음을 정의할 수도 있습니다:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## 설치 지침

### 1. cPanel 자격 증명 가져오기

1. 호스팅 제공업체에서 cPanel 사용자 이름과 비밀번호를 받으십시오
2. cPanel 호스트를 결정하십시오 (일반적으로 `cpanel.yourdomain.com` 또는 `yourdomain.com:2083`)

### 2. wp-config.php에 상수 추가

다음 상수를 `wp-config.php` 파일에 추가하십시오:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

선택적으로 포트와 루트 디렉터리를 사용자 정의할 수 있습니다:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. 통합 활성화

1. WordPress 관리 화면에서 Ultimate Multisite > 설정으로 이동하십시오
2. "도메인 매핑" 탭으로 이동하십시오
3. "호스트 통합"으로 스크롤하십시오
4. cPanel 통합을 활성화하십시오
5. "변경 사항 저장"을 클릭하십시오

## 작동 방식

### 애드온 도메인

Ultimate Multisite에서 도메인이 매핑될 때:

1. 통합은 cPanel API에 요청을 보내 도메인을 애드온 도메인으로 추가합니다
2. 도메인이 루트 디렉터리를 가리키도록 구성됩니다
3. 도메인 매핑이 제거되면 통합은 cPanel에서 애드온 도메인을 제거합니다

### 서브도메인

서브도메인 멀티사이트 설치에서 새 사이트가 생성될 때:

1. 통합은 전체 도메인에서 서브도메인 부분을 추출합니다
2. cPanel API에 요청을 보내 서브도메인을 추가합니다
3. 서브도메인이 루트 디렉터리를 가리키도록 구성됩니다

## 중요 사항

- 통합은 cPanel의 API2를 사용하여 cPanel 계정과 통신합니다
- cPanel 계정은 애드온 도메인 및 서브도메인 추가 권한이 있어야 합니다
- 일부 호스팅 제공업체는 생성할 수 있는 애드온 도메인 또는 서브도메인 수를 제한할 수 있습니다
- 통합은 DNS 구성을 처리하지 않으므로 도메인을 서버 IP 주소로 가리켜야 합니다

## 문제 해결

### API 연결 문제

- cPanel 사용자 이름과 비밀번호가 올바른지 확인하십시오
- cPanel 호스트가 올바르고 접근 가능한지 확인하십시오
- cPanel 계정에 필요한 권한이 있는지 확인하십시오
- 호스트에 전체 URL(예: `https://cpanel.yourdomain.com`)을 사용해 보십시오

### 도메인 추가되지 않음

- Ultimate Multisite 로그에서 오류 메시지를 확인하십시오
- 도메인이 이미 cPanel에 추가되지 않았는지 확인하십시오
- cPanel 계정이 애드온 도메인 또는 서브도메인 한도에 도달하지 않았는지 확인하십시오

### SSL 인증서 문제

- 통합은 SSL 인증서 발급을 처리하지 않습니다
- 도메인에 SSL 인증서를 발급하려면 cPanel의 SSL/TLS 도구 또는 AutoSSL 기능을 사용해야 합니다
- 또는 cPanel의 AutoSSL과 함께 Let's Encrypt와 같은 서비스를 사용할 수 있습니다
