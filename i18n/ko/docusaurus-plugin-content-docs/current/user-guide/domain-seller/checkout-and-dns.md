---
title: 결제 필드 및 고객 DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# 체크아웃 필드 및 고객 DNS 관리

## Domain Selection 체크아웃 필드

**Domain Selection** 필드는 고객에게 사이트의 도메인을 얻는 방법을 선택하게 해 주는 체크아웃 요소입니다. 도메인 판매를 활성화하려면 어떤 체크아웃 양식에든 추가하세요.

### 체크아웃 양식에 필드 추가하기

1. **Network Admin › Ultimate Multisite › Checkout Forms**로 이동합니다
2. 체크아웃 양식을 열거나 만듭니다
3. 체크아웃 편집기에서 **Add Field**를 클릭합니다
4. 필드 목록에서 **Domain Selection**을 선택합니다
5. 필드 옵션을 구성합니다(아래 참조)
6. 양식을 저장합니다

### 필드 옵션

**도메인 모드** — 고객에게 표시할 탭을 선택합니다. 각 모드는 독립적으로 활성화하거나 비활성화할 수 있습니다.

| 모드 | 수행하는 작업 |
|---|---|
| **서브도메인** | 고객이 네트워크의 무료 서브도메인을 사용합니다(예: `mysite.yournetwork.com`). 결제가 필요하지 않습니다. |
| **새 도메인 등록** | 고객이 새 도메인을 검색하고 구성된 제공업체를 통해 등록합니다. 가격 책정에는 일치하는 도메인 상품을 사용합니다. |
| **기존 도메인** | 고객이 이미 소유한 도메인을 매핑합니다. 등록 수수료가 없습니다. 도메인은 고객의 사이트에 자동으로 매핑됩니다. |

**기본 모드** — 세 가지 모드가 모두 활성화된 경우, 어떤 탭을 먼저 열지 설정합니다. 도메인 등록을 선택 사항으로 유지하려면 **서브도메인**으로 설정하고, 구매를 유도하려면 **새 도메인 등록**으로 설정하세요.

**도메인 상품** — 선택적으로 이 필드를 특정 도메인 상품에 고정합니다. 설정하지 않으면, 애드온이 고객이 검색한 TLD를 기준으로 일치하는 상품을 자동 선택합니다.

### 등록자 연락처 필드

고객이 **새 도메인 등록** 탭을 선택하면, 체크아웃 양식에 등록자 연락처 필드가 인라인으로 추가됩니다.

- 이름 / 성
- 이메일 주소
- 주소(주소 1, 도시, 주/도, 우편번호, 국가)
- 전화번호

이 필드들은 모든 등록기관에서 요구하며, 등록 API 호출이 이루어지기 전에 검증됩니다. 전화번호는 등록기관에서 기대하는 `+CC.NNN` 국제 형식으로 자동 서식 지정됩니다.

### 자동 생성되는 사이트 URL

고객이 도메인을 등록하거나 매핑하면, 사이트 URL 필드가 선택한 도메인으로 자동 채워집니다. 고객은 별도의 URL 필드를 입력할 필요가 없습니다.

### 검색 동작

- 고객이 입력하는 동안 AJAX로 도메인 사용 가능 여부를 실시간으로 확인합니다
- 선호하는 도메인을 사용할 수 없는 경우 대체 TLD 제안이 표시됩니다
- 가격을 실시간으로 가져와 명확하게 표시합니다(등록 가격, 갱신 가격, 선택적 WHOIS 개인정보 보호 수수료)
- 쿠폰 코드는 다른 상품과 동일하게 도메인 상품에도 적용됩니다

**검색 응답성 조정:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**도메인 검색 양식에 사용자 지정 필드 추가:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## 고객 DNS 관리

고객은 **My Account** 페이지의 해당 도메인 항목 아래에서 등록된 도메인의 DNS 레코드를 관리할 수 있습니다.

### 지원되는 레코드 유형

| 유형 | 용도 |
|---|---|
| **A** | 호스트 이름을 IPv4 주소에 매핑 |
| **AAAA** | 호스트 이름을 IPv6 주소에 매핑 |
| **CNAME** | 다른 호스트 이름을 가리키는 별칭 생성 |
| **MX** | 메일 교환 서버 설정 |
| **TXT** | SPF, DMARC, 인증 또는 기타 텍스트 레코드 추가 |

### 어떤 제공업체가 DNS 관리를 지원하나요?

DNS 관리(레코드 추가, 편집, 삭제)는 **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, **Openprovider**에서 사용할 수 있습니다. **Hostinger** 도메인은 Domain Seller를 통해 네임서버를 업데이트할 수 있으며, 호스팅된 도메인의 DNS 레코드는 핵심 Hostinger 도메인 매핑 통합에서 관리됩니다. Namecheap, GoDaddy, NameSilo 도메인은 상태 및 만료 정보를 표시하지만 DNS는 등록기관의 제어판에서 직접 관리해야 합니다.

### 기본 DNS 레코드

도메인이 등록될 때 자동으로 적용되는 기본 DNS 레코드를 구성할 수 있습니다. **Settings › Domain Seller › Default DNS Records**로 이동합니다.

기본 레코드 값은 두 가지 토큰을 지원합니다.

| 토큰 | 대체되는 값 |
|---|---|
| `{DOMAIN}` | 등록된 도메인 이름(예: `example.com`) |
| `{SITE_URL}` | 고객 사이트의 WordPress 사이트 URL |

**예시 — apex 도메인과 www를 서버 IP로 지정:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### 관리자: DNS 보기 및 편집

네트워크 관리자는 **Network Admin › Ultimate Multisite › Domains**의 도메인 편집 페이지에서 모든 고객 도메인의 DNS 레코드를 보고 편집할 수 있습니다.
