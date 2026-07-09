---
title: Cloudflare 통합
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare 통합 {#cloudflare-integration}

## 개요 {#overview}
Cloudflare는 웹사이트를 보호하고 가속하는 데 도움이 되는 선도적인 콘텐츠 전송 네트워크(CDN) 및 보안 제공업체입니다. 이 통합은 Ultimate Multisite와 Cloudflare 간의 자동 도메인 관리를 가능하게 하며, 특히 하위 도메인 멀티사이트 설치에 유용합니다.

## 기능 {#features}
- Cloudflare에서 자동 하위 도메인 생성
- 프록시된 하위 도메인 지원
- DNS 레코드 관리
- Ultimate Multisite 관리자에서 향상된 DNS 레코드 표시

## 요구 사항 {#requirements}
다음 상수는 `wp-config.php` 파일에 정의되어 있어야 합니다.

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## 설정 지침 {#setup-instructions}

### 1. Cloudflare API 키 받기 {#1-get-your-cloudflare-api-key}

1. Cloudflare Dashboard에 로그인합니다
2. "내 프로필"로 이동합니다(오른쪽 상단의 이메일을 클릭)
3. 메뉴에서 "API 토큰"을 선택합니다
4. 다음 권한이 있는 새 API 토큰을 생성합니다.
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. API 토큰을 복사합니다

### 2. Zone ID 받기 {#2-get-your-zone-id}

1. Cloudflare Dashboard에서 사용하려는 도메인을 선택합니다
2. Zone ID는 "개요" 탭의 오른쪽 사이드바에서 "API" 아래에 표시됩니다
3. Zone ID를 복사합니다

### 3. wp-config.php에 상수 추가 {#3-add-constants-to-wp-configphp}

다음 상수를 `wp-config.php` 파일에 추가합니다.

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. 통합 활성화 {#4-enable-the-integration}

1. WordPress 관리자에서 Ultimate Multisite > 설정으로 이동합니다
2. "도메인 매핑" 탭으로 이동합니다
3. "호스트 통합"까지 아래로 스크롤합니다
4. Cloudflare 통합을 활성화합니다
5. "변경 사항 저장"을 클릭합니다

## 작동 방식 {#how-it-works}

### 하위 도메인 관리 {#subdomain-management}

하위 도메인 멀티사이트 설치에서 새 사이트가 생성되면:

1. 통합이 Cloudflare의 API에 요청을 보내 하위 도메인에 대한 CNAME 레코드를 추가합니다
2. 하위 도메인은 기본적으로 Cloudflare를 통해 프록시되도록 구성됩니다(필터로 변경할 수 있음)
3. 사이트가 삭제되면 통합이 Cloudflare에서 하위 도메인을 제거합니다

### DNS 레코드 표시 {#dns-record-display}

이 통합은 다음을 통해 Ultimate Multisite 관리자에서 DNS 레코드 표시를 향상합니다.

1. Cloudflare에서 DNS 레코드를 직접 가져옵니다
2. 레코드가 프록시되었는지 여부를 표시합니다
3. DNS 레코드에 대한 추가 정보를 보여줍니다

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames**(이전 명칭 "Cloudflare for SaaS")는 고객이 멀티사이트 네트워크에서 SSL과 함께 자신의 도메인을 사용할 수 있게 해 주는 Cloudflare 기능입니다. Cloudflare가 각 사용자 지정 도메인의 SSL 인증서 발급과 갱신을 자동으로 관리하므로, Cloudflare를 사용하는 도메인 매핑 멀티사이트 설치에 권장되는 방식입니다.

### 표준 Cloudflare 통합과의 차이점 {#how-it-differs-from-the-standard-cloudflare-integration}

| | 표준 통합 | Cloudflare Custom Hostnames |
|---|---|---|
| **목적** | 하위 도메인용 DNS 레코드를 자동 생성 | Cloudflare가 관리하는 SSL을 사용해 사용자 지정(매핑된) 도메인을 활성화 |
| **적합한 용도** | 하위 도메인 멀티사이트 | 도메인 매핑 멀티사이트 |
| **SSL** | 별도로 처리 | Cloudflare가 자동으로 관리 |

### Cloudflare Custom Hostnames 설정 {#setting-up-cloudflare-custom-hostnames}

1. Cloudflare Dashboard에서 기본 도메인의 영역을 엽니다.
2. **SSL/TLS > Custom Hostnames**로 이동합니다.
3. 서버의 IP 또는 호스트 이름을 가리키는 대체 원본을 추가합니다.
4. Ultimate Multisite에 매핑된 각 고객 도메인에 대해 Cloudflare에 Custom Hostname 항목을 추가합니다. Cloudflare API를 사용하여 이 단계를 자동화할 수 있습니다.
5. 고객의 DNS가 네트워크를 가리키면 Cloudflare가 각 사용자 지정 호스트 이름에 대한 TLS 인증서를 자동으로 발급하고 갱신합니다.

전체 API 참조는 [Cloudflare Custom Hostnames 문서](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/)를 참조하세요.

:::note 용어 업데이트
Ultimate Multisite v2.6.1부터 이 기능은 모든 plugin 설정 및 레이블에서 **Cloudflare Custom Hostnames**로 지칭됩니다. 이전 버전에서는 기본 Cloudflare 제품명인 "Cloudflare for SaaS"라는 이름을 사용했습니다.
:::

## 중요 참고 사항 {#important-notes}

Cloudflare의 최근 업데이트에 따라 이제 모든 고객이 와일드카드 프록시를 사용할 수 있습니다. 즉, Cloudflare에서 와일드카드 DNS 레코드를 간단히 설정할 수 있으므로, 표준 Cloudflare DNS 통합은 이전보다 하위 도메인 멀티사이트 설치에서 덜 중요해졌습니다.

## 문제 해결 {#troubleshooting}

### API 연결 문제 {#api-connection-issues}
- API 토큰이 올바르고 필요한 권한이 있는지 확인합니다
- Zone ID가 올바른지 확인합니다
- Cloudflare Account에 필요한 권한이 있는지 확인합니다

### 하위 도메인이 추가되지 않음 {#subdomain-not-added}
- 오류 메시지가 있는지 Ultimate Multisite 로그를 확인합니다
- 하위 도메인이 이미 Cloudflare에 추가되어 있지 않은지 확인합니다
- Cloudflare 요금제가 생성 중인 DNS 레코드 수를 지원하는지 확인합니다

### 프록시 문제 {#proxying-issues}
- 하위 도메인이 프록시되지 않도록 하려면 `wu_cloudflare_should_proxy` 필터를 사용할 수 있습니다
- 프록시된 경우 일부 기능이 제대로 작동하지 않을 수 있습니다(예: 특정 WordPress 관리자 기능)
- 관리자 페이지의 캐시를 우회하려면 Cloudflare의 페이지 규칙 사용을 고려하세요
