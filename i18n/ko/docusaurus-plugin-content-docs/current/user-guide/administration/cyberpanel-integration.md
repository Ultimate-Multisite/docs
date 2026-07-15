---
title: CyberPanel 통합
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel 통합

이 가이드는 Ultimate Multisite CyberPanel 통합을 설정하는 방법을 설명합니다. 이 설정을 통해 네트워크에 매핑된 도메인이 CyberPanel의 가상 호스트로 자동으로 추가(및 제거)되며, 선택적으로 Let's Encrypt를 통한 자동 SSL 프로비저닝도 가능합니다.

## 기능 설명 {#what-it-does}

*   Ultimate Multisite에서 도메인이 매핑되면, 통합 기능은 CyberPanel API를 호출하여 해당 도메인에 대한 가상 호스트를 생성합니다.
*   도메인 매핑이 제거되면, 통합 기능은 API를 호출하여 해당 가상 호스트를 삭제합니다.
*   자동 SSL이 활성화되면, 통합 기능은 가상 호스트가 생성된 직후 Let's Encrypt 인증서 발급을 트리거합니다.
*   선택적으로, 도메인 매핑 설정의 "www 서브도메인 자동 생성" 설정에 따라 `www.` 별칭을 추가하거나 제거합니다.

## 필수 조건 {#prerequisites}

*   WordPress 서버에서 접근 가능한 실행 중인 CyberPanel 인스턴스 (v2.3 이상 권장).
*   WordPress 네트워크 루트를 이미 서비스하고 있는 CyberPanel 내 기존 웹사이트. 통합 기능은 이 서버에 새로운 가상 호스트를 연결합니다.
*   CyberPanel API 접근이 활성화되어 있어야 합니다. 인증에는 CyberPanel 관리자 사용자 이름과 비밀번호가 사용됩니다.
*   자동 SSL이 인증서를 발급하려면, 매핑된 도메인의 DNS 레코드가 이미 서버의 IP 주소를 가리키고 있어야 합니다.

## 요구 사항 {#requirements}

다음 상수는 `wp-config.php` 파일에 정의되어야 합니다.

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

선택적으로 다음 상수를 정의할 수도 있습니다.

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // 기본값: true — 도메인 생성 후 Let's Encrypt SSL 발급
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // 기본값: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL 인증서 연락처로 사용
```

## 설정 방법 {#setup-instructions}

### 1. CyberPanel API 활성화 {#1-enable-the-cyberpanel-api}

1.  관리자로 CyberPanel 대시보드에 로그인합니다.
2.  **Security** > **SSL**로 이동하여 CyberPanel 인터페이스 자체에서 SSL이 활성화되어 있는지 확인합니다 (안전한 API 호출에 필요).
3.  CyberPanel API는 기본적으로 `https://your-server-ip:8090/api/`에서 사용할 수 있습니다. 관리자 사용자에게는 기본적으로 활성화되어 있으므로 추가 단계는 필요하지 않습니다.

### 2. wp-config.php에 상수 추가 {#2-add-constants-to-wp-configphp}

다음 상수를 `wp-config.php` 파일의 `/* That's all, stop editing! */` 라인 위에 추가합니다.

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

자동 SSL을 활성화하려면 (권장):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. 통합 기능 활성화 {#3-enable-the-integration}

1.  WordPress 네트워크 관리자에서 **Ultimate Multisite** > **Settings**로 이동합니다.
2.  **Domain Mapping** 탭으로 이동합니다.
3.  **Host Integrations** 섹션까지 스크롤합니다.
4.  **CyberPanel** 통합 기능을 활성화합니다.
5.  **Save Changes**를 클릭합니다.

### 4. 연결 확인 {#4-verify-connectivity}

설정 마법사의 내장 연결 테스트를 사용합니다.

1.  **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**로 이동합니다.
2.  **Test Connection**을 클릭합니다.
3.  성공 메시지가 표시되면 플러그인이 CyberPanel API에 도달하고 올바르게 인증되었음을 확인합니다.

## 작동 방식 {#how-it-works}

### 도메인 매핑 {#domain-mapping}

Ultimate Multisite에서 도메인이 매핑될 때:

1.  통합 기능은 CyberPanel 호스트의 `/api/createWebsite`로 `POST` 요청을 보냅니다.
2.  CyberPanel은 구성된 패키지 아래에 해당 도메인에 대한 새로운 가상 호스트를 생성합니다.
3.  문서 루트는 WordPress 네트워크 루트 디렉토리를 가리키도록 설정됩니다.
4.  도메인 매핑이 제거되면, 통합 기능은 `/api/deleteWebsite`를 호출하여 가상 호스트를 정리합니다.

### 자동 SSL {#auto-ssl}

`WU_CYBERPANEL_AUTO_SSL`이 `true`일 때:

1.  가상 호스트가 생성된 후, 통합 기능은 해당 도메인에 대해 `/api/issueSSL`을 호출합니다.
2.  CyberPanel은 ACME HTTP-01 챌린지를 사용하여 Let's Encrypt 인증서를 요청합니다.
3.  인증서는 만료되기 전에 CyberPanel에 의해 자동으로 갱신됩니다.

> **중요:** Let's Encrypt가 도메인을 검증하려면 DNS가 서버의 IP 주소로 완전히 전파되어야 합니다. 매핑 직후 SSL 발급에 실패하면, DNS 전파를 기다린 후 CyberPanel 대시보드의 **SSL** > **Manage SSL**에서 SSL을 다시 트리거하십시오.

### www 서브도메인 {#www-subdomain}

도메인 매핑 설정에서 **Auto-create www subdomain**이 활성화된 경우, 통합 기능은 `www.<도메인>`에 대한 가상 호스트 별칭도 생성하며, 자동 SSL이 켜져 있으면 에이펙스(apex)와 www 변형을 모두 포함하는 인증서를 발급합니다.

### 이메일 포워더 {#email-forwarders}

[Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) 애드온이 활성화되면, CyberPanel은 고객 이메일 포워더도 제공할 수 있습니다. 포워더는 전체 메일박스를 생성하지 않고도 도메인 주소에서 다른 받은 편지함으로 메시지를 라우팅하므로, `info@customer-domain.test` 또는 `support@customer-domain.test`와 같은 별칭에 유용합니다.

고객을 위한 포워더를 활성화하기 전에:

1.  위의 CyberPanel 상수가 구성되었고 연결 테스트가 통과했는지 확인합니다.
2.  Emails 애드온 설정에서 CyberPanel 이메일 제공업체를 활성화합니다.
3.  포워더를 생성하기 전에 고객 도메인이 CyberPanel에 이미 존재하는지 확인합니다.
4.  운영 환경 플랜에 기능을 제공하기 전에 테스트 포워더를 생성하고 메시지를 전송해 봅니다.

포워더 생성에 실패하면, 먼저 Ultimate Multisite 활동 로그를 확인하고, CyberPanel에서 소스 도메인이 존재하는지, 그리고 API 사용자가 이메일 관리 권한을 가지고 있는지 확인합니다.

## 구성 참조 {#configuration-reference}

| 상수 | 필수 여부 | 기본값 | 설명 |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | 예 | — | 포트가 포함된 CyberPanel 인스턴스의 전체 URL. 예: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | 예 | — | CyberPanel 관리자 사용자 이름 |
| `WU_CYBERPANEL_PASSWORD` | 예 | — | CyberPanel 관리자 비밀번호 |
| `WU_CYBERPANEL_PACKAGE` | 예 | `Default` | 새로운 가상 호스트에 할당할 CyberPanel 호스팅 패키지 |
| `WU_CYBERPANEL_AUTO_SSL` | 아니요 | `true` | 도메인 생성 후 Let's Encrypt SSL 인증서 발급 여부 |
| `WU_CYBERPANEL_PHP_VERSION` | 아니요 | `PHP 8.2` | 새로운 가상 호스트의 PHP 버전 (CyberPanel에 설치된 버전과 일치해야 함) |
| `WU_CYBERPANEL_EMAIL` | 아니요 | — | SSL 인증서 등록용 연락처 이메일 |

## 중요 참고 사항 {#important-notes}

*   CyberPanel의 API는 세션 기반 토큰 인증을 사용합니다. 통합 기능은 각 API 호출 시 토큰 획득을 자동으로 처리합니다.
*   CyberPanel 관리자 계정은 웹사이트를 생성하고 삭제할 권한을 가지고 있어야 합니다.
*   CyberPanel은 기본적으로 포트 `8090`에서 실행됩니다. 서버에 방화벽이 있는 경우, 이 포트가 WordPress 애플리케이션 서버에서 접근 가능한지 확인하십시오.
*   통합 기능은 DNS 레코드를 관리하지 않습니다. Ultimate Multisite에서 도메인을 매핑하기 전에 도메인 DNS를 서버의 IP 주소로 지정해야 합니다.
*   OpenLiteSpeed (OLS)를 사용하는 경우, 가상 호스트 변경 후에는 정상적인 재시작(graceful restart)이 자동으로 트리거됩니다. 수동 개입은 필요하지 않습니다.

## 문제 해결 {#troubleshooting}

### API 연결 거부됨 (Connection Refused) {#api-connection-refused}

*   서버 방화벽에서 포트 `8090`이 열려 있는지 확인합니다.
*   `WU_CYBERPANEL_HOST` 값이 올바른 프로토콜(`https://`)과 포트를 포함하는지 확인합니다.
*   CyberPanel SSL 인증서가 유효한지 확인합니다. 자체 서명된 인증서는 TLS 검증 실패를 유발할 수 있습니다. `WU_CYBERPANEL_VERIFY_SSL`을 `false`로 설정하는 것은 신뢰할 수 있는 사설 네트워크 환경에서만 하십시오.

### 인증 오류 (Authentication Errors) {#authentication-errors}

*   CyberPanel에 직접 로그인하여 `WU_CYBERPANEL_USERNAME`과 `WU_CYBERPANEL_PASSWORD`가 올바른지 확인합니다.
*   CyberPanel은 반복적인 로그인 실패 시 계정을 잠급니다. 잠김 현상이 발생하면 CyberPanel의 **Security** > **Brute Force Monitor**를 확인하십시오.

### 도메인 생성 실패 (Domain Not Created) {#domain-not-created}

*   Ultimate Multisite 활동 로그(**Ultimate Multisite** > **Activity Logs**)에서 API 오류 메시지를 확인합니다.
*   `WU_CYBERPANEL_PACKAGE`에 정의된 패키지가 CyberPanel에 존재하는지 확인합니다(**Packages** > **List Packages**).
*   도메인이 CyberPanel에 이미 웹사이트로 등록되어 있지 않은지 확인하십시오. 중복 웹사이트 생성은 오류를 반환합니다.

### SSL 인증서 미발급 (SSL Certificate Not Issued) {#ssl-certificate-not-issued}

*   DNS가 완전히 전파되었는지 확인합니다: `dig +short your-domain.com`은 서버의 IP를 반환해야 합니다.
*   Let's Encrypt는 속도 제한을 적용합니다. 동일한 도메인에 대해 최근에 여러 인증서를 발급했다면, 재시도하기 전에 기다리십시오.
*   인증서 발급 실패에 대한 자세한 내용은 **Logs** > **Error Logs**에서 CyberPanel SSL 로그를 확인하십시오.
*   대안으로, CyberPanel에서 수동으로 SSL을 발급할 수 있습니다: **SSL** > **Manage SSL** > 도메인 선택 > **Issue SSL**.

## 참고 자료 {#references}

- CyberPanel API 문서: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL 관리: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt 속도 제한: https://letsencrypt.org/docs/rate-limits/
