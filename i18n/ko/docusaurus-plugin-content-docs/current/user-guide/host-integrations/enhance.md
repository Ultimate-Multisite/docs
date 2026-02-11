---
title: 제어판 통합 강화
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel Integration

## 개요
Enhance는 강력한 호스팅 자동화 및 관리 기능을 제공하는 최신 컨트롤 패널입니다. 이 통합은 Ultimate Multisite와 Enhance Control Panel 간에 자동 도메인 동기화 및 SSL 인증서 관리를 가능하게 합니다.

**관련 토론:** 커뮤니티 팁 및 추가 정보를 위해 [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)를 확인하세요.

## 기능
- Ultimate Multisite에서 도메인이 매핑될 때 자동 도메인 동기화
- DNS가 해결될 때 LetsEncrypt를 통해 자동 SSL 인증서 프로비저닝
- 서브도메인 모드에서 실행되는 네트워크에 대한 서브도메인 지원
- 매핑이 삭제될 때 도메인 제거
- API 자격 증명을 확인하기 위한 연결 테스트

## 요구 사항

### 시스템 요구 사항
- Enhance Control Panel이 설치되고 접근 가능해야 함
- WordPress Multisite 설치가 Enhance 서버에 호스팅되거나 연결되어 있어야 함
- Apache 웹 서버 (Enhance는 현재 Apache 구성을 지원하며, LiteSpeed Enterprise는 할인 가격으로 제공됩니다)

### API 접근
API 토큰을 생성하려면 Enhance Control Panel에 관리자 접근 권한이 있어야 합니다.

## API 자격 증명 가져오기

### 1. API 토큰 생성

1. 관리자 권한으로 Enhance Control Panel에 로그인합니다.
2. 탐색 메뉴에서 **Settings**를 클릭합니다.
3. **Access Tokens**로 이동합니다.
4. **Create Token**을 클릭합니다.
5. 토큰에 설명적인 이름을 지정합니다 (예: "Ultimate Multisite Integration").
6. **System Administrator** 역할을 할당합니다.
7. 만료 날짜에 대해:
   - 토큰이 무기한 유효하도록 하려면 비워 두세요.
   - 또는 보안 목적으로 특정 만료 날짜를 설정하세요.
8. **Create**를 클릭합니다.

생성 후, **Access Token**과 **Organization ID**가 표시됩니다. **즉시 저장**하세요. 토큰은 한 번만 표시됩니다.

### 2. 조직 ID 가져오기

조직 ID는 **Access Tokens** 페이지의 파란색 정보 상자에 "Org ID: {your_id}" 라벨로 표시됩니다.

조직 ID는 다음과 같은 UUID 형식입니다: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

고객의 조직 ID를 찾으려면:

1. **Customers** 페이지로 이동합니다.
2. 해당 고객의 **Manage customer**를 클릭합니다.
3. URL을 확인하세요. 조직 ID는 `/customers/` 뒤의 영숫자 문자열입니다.

### 3. 서버 ID 가져오기

서버 ID(도메인 작업에 필요)를 찾으려면:

1. Enhance Control Panel에서 **Servers**로 이동합니다.
2. WordPress 설치가 실행 중인 서버를 클릭합니다.
3. 서버 ID( UUID 형식)는 URL 또는 서버 세부 정보에 표시됩니다.
4. 또는 API를 사용하여 서버 목록을 가져올 수 있습니다:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

서버 ID는 UUID 형식입니다: `00000000-0000-0000-0000-000000000000`

### 4. API URL 가져오기

API URL은 Enhance Control Panel URL에 `/api/`를 추가한 것입니다:

```
https://your-enhance-panel.com/api/
```

**중요:** `/api/` 경로가 필요합니다. 흔한 실수는 다음과 같습니다:

- 도메인만 사용하고 `/api/`를 생략하는 경우
- HTTPS 대신 HTTP를 사용하는 경우 (보안을 위해 HTTPS가 필요합니다)

## 구성

### 필수 상수

다음 상수를 `wp-config.php` 파일에 추가하세요:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### 통합 마법사를 통한 설정

1. WordPress 관리자에서 **Ultimate Multisite** > **Settings**로 이동합니다.
2. **Integrations** 탭으로 이동합니다.
3. **Enhance Control Panel Integration**을 찾아 **Configuration**을 클릭합니다.
4. 마법사는 설정 과정을 안내합니다:
   - **Step 1:** 소개 및 기능 개요
   - **Step 2:** API 자격 증명(토큰, API URL, 서버 ID)을 입력합니다.
   - **Step 3:** 연결 테스트
   - **Step 4:** 검토 및 활성화

다음 중 선택할 수 있습니다:

- 마법사가 `wp-config.php` 파일에 상수를 자동으로 삽입하도록 합니다.
- 상수 정의를 복사하여 수동으로 추가합니다.

## 추가 WordPress 구성

커뮤니티 피드백([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265))에 따라 다음 추가 설정을 구성해야 할 수 있습니다:

### .htaccess 구성

도메인 매핑에 문제가 있는 경우:

1. 원본 Enhance `.htaccess` 파일을 삭제합니다.
2. 표준 WordPress Multisite `.htaccess` 파일로 교체합니다.

### 쿠키 상수

다음 상수를 `wp-config.php`에 추가하여 매핑된 도메인 간 쿠키 처리를 보장합니다:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## 작동 방식

### 도메인이 매핑될 때

1. 사용자가 Ultimate Multisite에서 사용자 정의 도메인을 매핑하거나(또는 서브도메인 모드에서 새 사이트가 생성될 때)
2. 통합은 Enhance API에 POST 요청을 보냅니다: `/servers/{server_id}/domains`
3. Enhance는 도메인을 서버 구성에 추가합니다.
4. DNS가 서버를 가리키면 Enhance는 LetsEncrypt를 통해 SSL 인증서를 자동으로 프로비저닝합니다.
5. 도메인이 HTTPS로 활성화됩니다.

### 도메인이 제거될 때

1. Ultimate Multisite에서 도메인 매핑이 삭제됩니다.
2. 통합은 Enhance에서 도메인 ID를 조회합니다.
3. DELETE 요청이 `/servers/{server_id}/domains/{domain_id}`에 전송됩니다.
4. Enhance는 도메인을 서버 구성에서 제거합니다.

### DNS 및 SSL 확인

Ultimate Multisite는 내장 DNS 및 SSL 확인 기능을 포함합니다:

- **Domain Mapping Settings**에서 확인 간격을 구성할 수 있습니다(기본값: 300초/5분).
- 시스템은 도메인을 활성화하기 전에 DNS 전파를 확인합니다.
- SSL 인증서 유효성이 자동으로 확인됩니다.
- Enhance는 SSL 프로비저닝을 자동으로 처리하므로 수동 SSL 구성이 필요 없습니다.

## 설정 확인

### 연결 테스트

1. 통합 마법사에서 **Test Connection** 단계를 사용합니다.
2. 플러그인은 서버의 도메인 목록을 가져오려고 시도합니다.
3. 성공 메시지가 다음을 확인합니다:
   - API 자격 증명이 올바릅니다.
   - API URL에 접근할 수 있습니다.
   - 서버 ID가 유효합니다.
   - 권한이 올바르게 설정되었습니다.

### 도메인 매핑 후

1. Ultimate Multisite에서 테스트 도메인을 매핑합니다.
2. Ultimate Multisite 로그(**Ultimate Multisite** > **Logs** > **integration-enhance**)를 확인합니다.
3. Enhance Control Panel에서 도메인이 추가되었는지 확인합니다:
   - **Servers** > **Your Server** > **Domains**로 이동합니다.
   - 새 도메인이 목록에 표시됩니다.
4. DNS 전파가 완료되면 SSL이 자동으로 프로비저닝되는지 확인합니다.

## 문제 해결

### API 연결 문제

**오류: "Failed to connect to Enhance API"**

- `WU_ENHANCE_API_URL`에 `/api/`가 끝에 포함되어 있는지 확인합니다.
- HTTPS를 사용하고 HTTP가 아닌지 확인합니다.
- Enhance 패널이 WordPress 서버에서 접근 가능한지 확인합니다.
- 방화벽 규칙이 연결을 차단하지 않는지 확인합니다.

**오류: "Enhance API Token not found"**

- `WU_ENHANCE_API_TOKEN`이 `wp-config.php`에 정의되어 있는지 확인합니다.
- 토큰이 Enhance에서 삭제되거나 만료되지 않았는지 확인합니다.
- 토큰 값에 오타가 없는지 확인합니다.

**오류: "Server ID is not configured"**

- `WU_ENHANCE_SERVER_ID`이 `wp-config.php`에 정의되어 있는지 확인합니다.
- 서버 ID가 유효한 UUID 형식인지 확인합니다.
- 서버가 Enhance 패널에 존재하는지 확인합니다.

### 도메인이 추가되지 않음

**로그를 확인하세요:**

1. **Ultimate Multisite** > **Logs**로 이동합니다.
2. **integration-enhance**로 필터링합니다.
3. 문제를 나타내는 오류 메시지를 찾습니다.

**일반적인 원인:**

- 도메인 이름 형식이 잘못되었습니다.
- 도메인이 Enhance에 이미 존재합니다.
- API 권한이 부족합니다(토큰에 System Administrator 역할이 있는지 확인).
- 서버 ID가 Enhance의 실제 서버와 일치하지 않습니다.

### SSL 인증서 문제

**SSL이 프로비저닝되지 않음:**

- DNS가 서버 IP 주소를 가리키는지 확인합니다.
- 도메인이 올바르게 해결되는지 확인합니다: `nslookup yourdomain.com`
- Enhance는 SSL을 프로비저닝하기 전에 DNS가 해결되어야 합니다.
- SSL 프로비저닝은 DNS 전파 후 5-10분이 걸립니다.
- Enhance Control Panel 로그에서 SSL 관련 오류를 확인합니다.

**Enhance에서 수동 SSL 문제 해결:**

1. **Servers** > **Your Server** > **Domains**로 이동합니다.
2. 도메인을 찾아 SSL 상태를 확인합니다.
3. 필요하면 수동으로 SSL 프로비저닝을 트리거할 수 있습니다.

### DNS 확인 간격

도메인 또는 SSL 인증서가 활성화되는 데 시간이 오래 걸리는 경우:

1. **Ultimate Multisite** > **Settings** > **Domain Mapping**으로 이동합니다.
2. **DNS Check Interval** 설정을 찾습니다.
3. 기본값 300초에서 더 낮은 값(최소 10초)으로 조정합니다.
4. **참고:** 낮은 간격은 더 자주 확인하지만 서버 부하가 증가합니다.

### 인증 오류

**HTTP 401/403 오류:**

- Enhance에서 API 토큰을 재생성합니다.
- 토큰에 **System Administrator** 역할이 있는지 확인합니다.
- 토큰이 만료되지 않았는지 확인합니다.
- 올바른 조직 ID를 사용하고 있는지 확인합니다(일반적으로 URL에 필요하지 않음).

### 로그 분석

자세한 로깅을 활성화합니다:

```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

그런 다음 로그를 확인합니다:

- Ultimate Multisite 로그: **Ultimate Multisite** > **Logs**
- WordPress 디버그 로그: `wp-content/debug.log`
- Enhance 패널 로그: Enhance 관리 인터페이스에서 확인 가능

## API 참조

### 인증

모든 API 요청은 Bearer 토큰 인증을 사용합니다:

```
Authorization: Bearer YOUR_TOKEN_HERE
```

### 일반적으로 사용되는 엔드포인트

**서버 목록:**

```
GET /servers
```

**서버의 도메인 목록:**

```
GET /servers/{server_id}/domains
```

**도메인 추가:**

```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**도메인 삭제:**

```
DELETE /servers/{server_id}/domains/{domain_id}
```

### 전체 API 문서

완전한 API 문서: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## 모범 사례

### 보안

- **API 토큰을 버전 관리에 커밋하지 마세요**
- `wp-config.php`에 토큰을 저장하고 Git에서 제외하세요
- 적절한 권한(전체 통합을 위해 System Administrator)을 가진 토큰을 사용하세요
- 프로덕션 환경에서 토큰 만료 날짜를 설정하세요
- 토큰을 주기적으로 회전하세요

### 성능

- 과도한 API 호출을 방지하려면 기본 DNS 확인 간격(300초)을 사용하세요
- 대규모 도메인 작업을 실행할 때 Enhance 서버 리소스를 모니터링하세요
- 한 번에 많은 도메인을 매핑하는 경우 도메인 추가를 분산하세요

### 모니터링

- 통합 오류를 위해 Ultimate Multisite 로그를 정기적으로 확인하세요
- 실패한 도메인 추가를 모니터링하도록 설정하세요
- SSL 인증서가 올바르게 프로비저닝되는지 확인하세요
- Enhance 서버 용량 및 도메인 한도를 주시하세요

## 추가 자료

- **Enhance 공식 문서:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API 문서:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance 커뮤니티 포럼:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub 토론:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite 도메인 매핑 가이드:** 위키 페이지 "How to Configure Domain Mapping v2"를 참조하세요

## 지원

문제가 발생하면:

1. 위의 문제 해결 섹션을 확인하세요.
2. Ultimate Multisite 로그를 검토하세요.
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)를 참조하세요.
4. 패널 관련 문제는 Enhance 지원팀에 문의하세요.
5. 커뮤니티 지원을 위해 상세 오류 로그와 함께 새 토론을 생성하세요.

## 참고 사항

- 이 통합은 도메인 별칭만 처리합니다; Enhance는 SSL을 자동으로 관리합니다
- 이 통합은 사용자 정의 도메인 매핑과 서브도메인 기반 사이트를 모두 지원합니다
- 자동 www 서브도메인 생성은 도메인 매핑 설정에서 구성할 수 있습니다
- Enhance는 현재 Apache 구성을 지원합니다(LiteSpeed Enterprise는 사용 가능)
- Ultimate Multisite에서 도메인을 제거하면 Enhance에서 도메인이 삭제되지만 관련 SSL 인증서는 즉시 삭제되지 않을 수 있습니다
