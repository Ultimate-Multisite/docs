---
title: Cloudways 통합
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways 통합 {#cloudways-integration}

## 개요 {#overview}
Cloudways는 DigitalOcean, AWS, Google Cloud 등 다양한 클라우드 제공업체에 WordPress 사이트를 배포할 수 있게 해주는 관리형 클라우드 호스팅 플랫폼입니다. 이 통합은 Ultimate Multisite와 Cloudways 간의 자동 도메인 동기화 및 SSL 인증서 관리를 가능하게 합니다.

## 기능 {#features}
- 자동 도메인 동기화
- SSL 인증서 관리
- 추가 도메인 지원
- SSL 인증서를 위한 DNS 검증

## 요구 사항 {#requirements}
다음 상수는 `wp-config.php` 파일에 정의되어 있어야 합니다.

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

선택적으로 다음도 정의할 수 있습니다.

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## 설정 지침 {#setup-instructions}

### 1. Cloudways API 자격 증명 가져오기 {#1-get-your-cloudways-api-credentials}

1. Cloudways dashboard에 로그인합니다
2. "Account" > "API Keys"로 이동합니다
3. 아직 API 키가 없다면 생성합니다
4. 이메일과 API 키를 복사합니다

### 2. 서버 및 애플리케이션 ID 가져오기 {#2-get-your-server-and-application-ids}

1. Cloudways dashboard에서 "Servers"로 이동합니다
2. WordPress 멀티사이트가 호스팅되는 서버를 선택합니다
3. 서버 ID는 URL에서 확인할 수 있습니다: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications"로 이동하여 WordPress 애플리케이션을 선택합니다
5. 앱 ID는 URL에서 확인할 수 있습니다: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php에 상수 추가 {#3-add-constants-to-wp-configphp}

다음 상수를 `wp-config.php` 파일에 추가합니다.

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Cloudways 별칭 목록에 항상 유지되어야 하는 추가 **외부** 도메인(멀티사이트 네트워크 외부)이 있다면:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning 자체 네트워크의 와일드카드는 포함하지 마세요
`WU_CLOUDWAYS_EXTRA_DOMAINS`에 `*.your-network.com`(또는 자체 네트워크의 어떤 하위 도메인 패턴)도 추가하지 **마세요**. 이렇게 하면 테넌트별 SSL 인증서 발급이 방지되는 이유는 아래의 [중요 — 와일드카드 SSL 함정](#important--wildcard-ssl-pitfall)을 참조하세요.
:::

### 4. 통합 활성화 {#4-enable-the-integration}

1. WordPress 관리자에서 Ultimate Multisite > 설정으로 이동합니다
2. "도메인 매핑" 탭으로 이동합니다
3. "호스트 통합"까지 아래로 스크롤합니다
4. Cloudways 통합을 활성화합니다
5. "변경 사항 저장"을 클릭합니다

## 작동 방식 {#how-it-works}

### 도메인 동기화 {#domain-syncing}

Ultimate Multisite에서 도메인이 매핑되면:

1. 통합이 현재 매핑된 모든 도메인을 가져옵니다
2. 새 도메인을 목록에 추가합니다(해당하는 경우 www 버전도 함께)
3. API를 통해 전체 목록을 Cloudways로 보냅니다
4. Cloudways가 애플리케이션의 도메인 별칭을 업데이트합니다

참고: Cloudways API는 개별 도메인을 추가하거나 제거하는 것이 아니라, 매번 전체 도메인 목록을 보내야 합니다.

### SSL 인증서 관리 {#ssl-certificate-management}

도메인이 동기화된 후:

1. 통합이 어떤 도메인에 서버를 가리키는 유효한 DNS 레코드가 있는지 확인합니다
2. 해당 도메인에 Let's Encrypt SSL 인증서를 설치하도록 Cloudways에 요청을 보냅니다
3. Cloudways가 SSL 인증서 발급 및 설치를 처리합니다

통합은 항상 Cloudways에 **표준**(비와일드카드) Let's Encrypt 인증서를 요청합니다.
`WU_CLOUDWAYS_EXTRA_DOMAINS`에 와일드카드 패턴이 제공되면 SSL 요청 전에 선행
`*.`가 제거됩니다. 와일드카드 자체는 이 통합에 의해 설치되지 않습니다.
Cloudways에서 와일드카드 인증서를 사용하려면 수동으로 설치해야 하지만,
그렇게 하면 매핑된 사용자 지정 도메인에 대한 도메인별 Let's Encrypt 발급이 차단됩니다
(아래 함정 참조).

## 추가 도메인 {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` 상수를 사용하면 Cloudways 애플리케이션의 별칭 목록에 항상 유지되어야 하는 추가 **외부** 도메인을 지정할 수 있습니다. 다음에 사용하세요:

- Ultimate Multisite에서 관리하지 않는 외부 도메인(예: 같은 Cloudways 애플리케이션을 공유하는 별도 마케팅 사이트)
- 애플리케이션 별칭 목록에 유지하고 싶은 파킹 또는 스테이징 도메인

이 상수를 자체 네트워크의 하위 도메인 와일드카드에 사용하지 **마세요**
(예: `*.your-network.com`). 아래 와일드카드 SSL 함정을 참조하세요.

## 중요 — 와일드카드 SSL 함정 {#important--wildcard-ssl-pitfall}

Cloudways의 기본 설정을 따를 때 흔히 하는 실수는
`WU_CLOUDWAYS_EXTRA_DOMAINS`에 `*.your-network.com` 같은 와일드카드를 추가하거나, 해당 와일드카드에 대해 Cloudways
와일드카드 SSL 인증서를 수동으로 설치하는 것입니다.

**이렇게 하면 Cloudways가 Ultimate Multisite가 매핑하는 테넌트별 사용자 지정 도메인에 대해
Let's Encrypt 인증서 발급을 거부합니다.** Cloudways는 매번 애플리케이션의 활성
SSL 인증서를 교체하며, 애플리케이션에 기존 와일드카드 인증서가 있으면
통합이 의존하는 도메인별 Let's Encrypt 발급이 차단됩니다.

### Ultimate Multisite 네트워크를 위한 권장 Cloudways SSL 설정 {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways 애플리케이션의 **SSL 인증서** 탭에서 `your-network.com` 및 `www.your-network.com`만 포함하는 **표준
   Let's Encrypt 인증서**를 설치합니다
   — 와일드카드가 **아닙니다**.
2. `WU_CLOUDWAYS_EXTRA_DOMAINS`에 `*.your-network.com`(또는 자체 네트워크의 어떤 하위 도메인 패턴)도 넣지 **마세요**.
   해당 상수는 **외부** 도메인 전용으로만 남겨두세요.
3. 테넌트별 하위 도메인 와일드카드는 **DNS** 수준에서만 생성합니다(Cloudways 서버 IP를 가리키는
   `*.your-network.com`의 `A` 레코드). 그러면 하위 사이트가 확인됩니다. 개별 매핑된 사용자 지정 도메인의 SSL은
   이후 통합을 통해 Let's Encrypt로 자동 발급됩니다.

테넌트의 사용자 지정 도메인에 SSL이 없는 상태로 멈춰 있다면 Cloudways SSL 탭을 확인하세요. 그곳에 와일드카드 인증서가 활성화되어 있다면 제거하고, 기본 네트워크 도메인에만 표준 Let's Encrypt 인증서를 다시 발급한 뒤, `WU_CLOUDWAYS_EXTRA_DOMAINS`에서 모든 와일드카드 항목을 제거하세요. 그런 다음 도메인 매핑을 다시 트리거하거나 다음 매핑을 기다리면 통합이 도메인별 인증서를 다시 발급하기 시작합니다.

## 문제 해결 {#troubleshooting}

### API 연결 문제 {#api-connection-issues}
- 이메일과 API 키가 올바른지 확인하세요
- 서버와 애플리케이션 ID가 올바른지 확인하세요
- Cloudways Account에 필요한 권한이 있는지 확인하세요

### SSL 인증서 문제 {#ssl-certificate-issues}
- Cloudways는 SSL 인증서를 발급하기 전에 도메인에 서버를 가리키는 유효한 DNS 레코드가 있어야 합니다
- 통합은 SSL 인증서를 요청하기 전에 DNS 레코드를 검증합니다
- SSL 인증서가 발급되지 않는다면 도메인이 서버의 IP 주소를 올바르게 가리키고 있는지 확인하세요
- **테넌트별 사용자 지정 도메인에 SSL이 없는 상태로 멈춰 있나요?** Cloudways 애플리케이션의 SSL Certificate 탭을 확인하세요. 와일드카드 인증서(수동으로 설치되었거나 `*.your-network.com`을 포함하는)가 활성화되어 있으면 Cloudways는 개별적으로 매핑된 사용자 지정 도메인에 대해 Let's Encrypt 인증서를 발급하지 않습니다. 기본 네트워크 도메인(`your-network.com`, `www.your-network.com`)만 포함하는 표준 Let's Encrypt 인증서로 교체하고 `WU_CLOUDWAYS_EXTRA_DOMAINS`에서 모든 와일드카드 항목을 제거하세요. 그런 다음 도메인 매핑을 다시 트리거하거나 다음 매핑을 기다리면 통합이 도메인별 인증서를 요청합니다.

### 도메인이 추가되지 않음 {#domain-not-added}
- 오류 메시지가 있는지 Ultimate Multisite 로그를 확인하세요
- 도메인이 이미 Cloudways에 추가되어 있지 않은지 확인하세요
- Cloudways 플랜이 추가하려는 도메인 수를 지원하는지 확인하세요
