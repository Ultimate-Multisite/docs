---
title: 헤더 도메인 검색
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header 도메인 검색 {#header-domain-search}

Ultimate Multisite checkout 안에서 고객이 사용 가능한 도메인 중에서 선택할 수 있도록, 도메인 검색을 시작하는 작은 Header 양식이 필요할 때 이 설정을 사용하세요.

## 요구 사항 {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- 다음을 갖춘 활성 도메인 등록 상품이 하나 이상 있어야 합니다:
  - `domain_provider`가 구성된 제공업체로 설정되어 있어야 합니다.
  - 지원되는 TLD가 구성되어 있어야 합니다. 예: `com`, `net`, `org`.
- **도메인 선택** 필드를 포함한 유효한 checkout 양식.

## Checkout 양식 {#checkout-form}

1. 등록 페이지에서 사용하는 checkout 양식을 생성하거나 편집합니다.
2. **Username**을 포함하여 일반적으로 필요한 checkout/Account 필드를 추가합니다. 도메인 필드만 포함된 checkout 양식은 Ultimate Multisite 유효성 검사에서 거부됩니다.
3. **도메인 선택** 필드를 추가합니다.
4. 흐름이 무료 서브도메인이나 기존 도메인보다 등록된 도메인에 집중해야 하는 경우 Domain Selection 모드를 **Register Only**로 설정합니다.
5. 도메인 등록 상품을 해당 필드에 할당합니다.

등록 페이지는 예를 들어 다음과 같이 checkout 양식을 렌더링해야 합니다:

```text
[wu_checkout slug="domain-form"]
```

## Header 양식 {#header-form}

입력된 검색어를 `domain_name`으로 checkout 페이지에 보내는 작은 `GET` 양식을 사이트 Header에 추가합니다:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

사용자 지정 Header JavaScript에서 도메인을 미리 선택하지 마세요. Header는 검색어만 전달해야 합니다. Domain Seller checkout 스크립트는 `?domain_name=example`을 읽고 checkout 검색 상자를 채운 다음, 사용 가능 여부 검색을 실행하여 고객이 반환된 도메인 중에서 선택할 수 있게 합니다.

## 예상 동작 {#expected-behaviour}

Header에서 `example`을 검색하면 다음이 열려야 합니다:

```text
/register/?domain_name=example
```

그러면 checkout은 다음과 같은 선택 가능한 결과를 표시해야 합니다:

- `example.com`
- `example.net`
- `example.org` 사용 불가
- 제공업체가 지원하는 다른 TLD

사용 가능한 결과를 선택한 후에는 주문 요약에 도메인 등록 상품과 선택한 도메인 이름이 포함되어야 합니다.

## 확인 {#verification}

1. 홈 페이지를 엽니다.
2. 예를 들어 `example`처럼 확장자 없는 이름을 검색합니다.
3. checkout URL에 `?domain_name=example`이 포함되어 있는지 확인합니다.
4. checkout 도메인 필드에 `example`이 포함되어 있는지 확인합니다.
5. 도메인 선택 목록이 나타나는지 확인합니다.
6. 사용 가능한 도메인에 대해 **선택**을 클릭합니다.
7. 주문 요약에 `Domain Registration - example.com` 또는 선택한 도메인이 포함되어 있는지 확인합니다.

## 문제 해결 {#troubleshooting}

- 목록이 나타나지 않으면 브라우저 네트워크 탭에서 `admin-ajax.php?action=wu_domain_search`를 확인하고, 비어 있지 않은 `domains` 또는 `results`를 반환하는지 확인합니다.
- checkout 양식 저장 중 유효성 검사에 실패하면 **Username**과 같은 필수 Account 필드를 추가합니다.
- 도메인을 선택해도 장바구니가 업데이트되지 않으면 `window.wu_checkout_form`이 존재하는지, 그리고 Domain Seller checkout assets가 checkout 페이지에 로드되었는지 확인합니다.
