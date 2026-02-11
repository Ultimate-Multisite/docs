---
title: Cloudflare 통합
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare 통합

## 개요
Cloudflare는 웹사이트를 보호하고 가속화하는 데 도움을 주는 선도적인 콘텐츠 전송 네트워크(CDN) 및 보안 제공업체입니다. 이 통합은 Ultimate Multisite와 Cloudflare 간의 자동 도메인 관리를 가능하게 하며, 특히 서브도메인 멀티사이트 설치에 적용됩니다.

## 기능
- Cloudflare에서 자동 서브도메인 생성
- 프록시된 서브도메인 지원
- DNS 레코드 관리
- Ultimate Multisite 관리자에서 향상된 DNS 레코드 표시

## 요구 사항
다음 상수는 `wp-config.php` 파일에 정의되어야 합니다:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## 설정 지침

### 1. Cloudflare API 키 가져오기
1. Cloudflare 대시보드에 로그인하세요  
2. 오른쪽 상단에 있는 이메일을 클릭하여 **My Profile**로 이동하세요  
3. 메뉴에서 **API Tokens**를 선택하세요  
4. 다음 권한을 가진 새 API 토큰을 생성하세요:  
   - Zone.Zone: Read  
   - Zone.DNS: Edit  
5. API 토큰을 복사하세요  

### 2. Zone ID 가져오기
1. Cloudflare 대시보드에서 사용하려는 도메인을 선택하세요  
2. Zone ID는 **Overview** 탭의 오른쪽 사이드바에서 **API** 아래에 표시됩니다  
3. Zone ID를 복사하세요  

### 3. wp-config.php에 상수 추가
다음 상수를 `wp-config.php` 파일에 추가하세요:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. 통합 활성화
1. WordPress 관리자에서 **Ultimate Multisite > Settings**로 이동하세요  
2. **Domain Mapping** 탭으로 이동하세요  
3. **Host Integrations**까지 스크롤하세요  
4. Cloudflare 통합을 활성화하세요  
5. **Save Changes**를 클릭하세요  

## 작동 방식

### 서브도메인 관리
서브도메인 멀티사이트 설치에서 새 사이트가 생성될 때:
1. 통합은 Cloudflare API에 요청을 보내 서브도메인에 대한 CNAME 레코드를 추가합니다  
2. 서브도메인은 기본적으로 Cloudflare를 통해 프록시되도록 구성됩니다(필터를 사용해 변경할 수 있음)  
3. 사이트가 삭제되면 통합은 Cloudflare에서 서브도메인을 제거합니다  

### DNS 레코드 표시
통합은 다음과 같이 Ultimate Multisite 관리자에서 DNS 레코드 표시를 향상시킵니다:
1. Cloudflare에서 직접 DNS 레코드를 가져옵니다  
2. 레코드가 프록시되는지 여부를 표시합니다  
3. DNS 레코드에 대한 추가 정보를 표시합니다  

## 중요 사항
Cloudflare의 최근 업데이트 이후, 모든 고객에게 와일드카드 프록시가 제공됩니다. 이는 Cloudflare 통합이 과거보다 서브도메인 멀티사이트 설치에 덜 중요해졌음을 의미하며, Cloudflare에서 와일드카드 DNS 레코드를 설정하면 됩니다.  

## 문제 해결

### API 연결 문제
- API 토큰이 올바르고 필요한 권한이 있는지 확인하세요  
- Zone ID가 올바른지 확인하세요  
- Cloudflare 계정에 필요한 권한이 있는지 확인하세요  

### 서브도메인 추가되지 않음
- Ultimate Multisite 로그에서 오류 메시지를 확인하세요  
- 서브도메인이 이미 Cloudflare에 추가되지 않았는지 확인하세요  
- Cloudflare 플랜이 생성 중인 DNS 레코드 수를 지원하는지 확인하세요  

### 프록시 문제
- 서브도메인을 프록시하고 싶지 않다면 `wu_cloudflare_should_proxy` 필터를 사용할 수 있습니다  
- 프록시될 때 일부 기능이 제대로 작동하지 않을 수 있습니다(예: 특정 WordPress 관리자 기능)  
- 관리자 페이지의 캐시를 우회하려면 Cloudflare의 Page Rules를 사용하는 것을 고려하세요
