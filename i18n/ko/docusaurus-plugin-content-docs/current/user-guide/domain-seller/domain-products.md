---
title: 도메인 제품 및 가격 책정
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# 도메인 상품 및 가격 책정

도메인 상품은 가격 책정, TLD, WHOIS 개인정보 보호, 제공업체 선택 등을 관리하는 방법입니다. 각 도메인 상품은 추가 **도메인 설정** 탭이 있는 표준 Ultimate Multisite 상품입니다.

## 도메인 상품 생성 {#creating-a-domain-product}

1. **Network Admin › Ultimate Multisite › Products**로 이동합니다.
2. **Add New**를 클릭합니다.
3. 상품 유형을 **Domain**으로 설정합니다.
4. **도메인 설정** 탭을 구성합니다 (아래 참조).
5. 저장합니다.

도메인 상품은 상품 목록에서 보라색 **Domain** 배지로 표시되며 **도메인 상품** 탭을 사용하여 필터링할 수 있습니다.

## 도메인 설정 탭 {#domain-settings-tab}

### Provider {#provider}

이 상품에 대한 등록을 처리할 등록기관(registrar)을 선택합니다. 기본값은 도메인 판매자(Domain Seller) 설정에 지정된 전역 **기본 제공업체(Default provider)**를 따릅니다.

### Supported TLDs {#supported-tlds}

비워 두면 다른 상품으로 일치하지 않는 모든 TLD에 적용되는 **캐치올 상품**이 생성됩니다.

쉼표로 구분된 TLD 목록(예: `.com, .net, .org`)을 입력하면 해당 확장자에만 적용되는 **TLD별 상품**이 생성됩니다.

**상품 일치 작동 방식:** 고객이 도메인을 검색하면 애드온이 가장 구체적으로 일치하는 상품을 선택합니다. TLD 목록에 `.com`이 포함된 상품이 캐치올 상품보다 우선합니다. TLD별 상품이 일치하는 것이 없으면 캐치올 상품이 사용됩니다. 상품이 존재하지 않으면 도메인 검색이 표시되지 않습니다.

### Markup type {#markup-type}

세 가지 모드가 도매가로부터 판매가를 계산하는 방식을 제어합니다.

| Mode | 작동 방식 |
|---|---|
| **Percentage** | 도매가에 일정 비율을 추가합니다. 도매가 10달러인 도메인에 20% 마크업을 적용하면 12달러가 됩니다. |
| **Fixed markup** | 고정된 금액을 추가합니다. 10달러 도메인에 5달러 마크업을 적용하면 15달러가 됩니다. |
| **Fixed price** | 도매가를 완전히 무시합니다. 항상 입력한 금액을 청구합니다. |

### Introductory pricing {#introductory-pricing}

할인된 첫 해 가격을 제공할 수 있도록 활성화합니다. 일반적인 **갱신 가격**(2년 차 이상)과 별도로 **초기 할인 가격**(1년 차)을 설정합니다. 고객은 결제 과정에서 두 가격을 모두 보게 되어 갱신 시 예상 비용을 알 수 있습니다.

### WHOIS privacy {#whois-privacy}

이 상품을 통해 등록된 도메인에 WHOIS 개인정보 보호가 제공되는지 여부를 제어합니다.

| Setting | Behaviour |
|---|---|
| **Disabled** | WHOIS 개인정보 보호는 절대 제공되거나 활성화되지 않습니다. |
| **Always Included** | WHOIS 개인정보 보호는 등록 시 추가 비용 없이 자동으로 활성화됩니다. |
| **Customer Choice** | 결제 과정에서 체크박스가 나타납니다. **개인정보 보호 가격**을 연간 단위로 설정하거나 $0으로 두어 무료로 제공할 수 있습니다. |

Namecheap의 경우 WHOIS 개인정보 보호는 WhoisGuard(항상 무료)를 사용합니다. OpenSRS의 경우 OpenSRS 개인정보 보호 서비스를 사용합니다(도매가에서 비용이 발생할 수 있음).

---

## TLD 가져오기 및 동기화 {#tld-import-and-sync}

도메인 상품은 연결된 제공업체로부터 가져온 실시간 도매 가격을 표시합니다. 이를 작동시키려면 TLD를 가져와야 합니다.

- **수동 동기화:** Settings › Domain Seller › Sync TLDs (제공업체별)
- **자동 동기화:** 모든 구성된 제공업체에 대해 예약 크론 작업으로 매일 실행됩니다.

동기화 후, 아무 도메인 상품의 도메인 설정 탭으로 이동하여 TLD 선택기를 사용하여 현재 도매 가격이 표시되는 사용 가능한 TLD를 확인합니다.

---

## 자동 갱신 {#auto-renewal}

도메인 갱신은 고객의 멤버십 상태와 연결됩니다.

- 멤버십이 갱신되고 도메인이 연결되면 도메인 갱신이 자동으로 대기열에 추가됩니다.
- 갱신 시도는 고객의 활성 결제 게이트웨이를 사용합니다.
- 갱신 실패 시도는 지수 백오프(exponential backoff) 방식으로 자동으로 재시도됩니다.
- 성공적인 갱신, 실패, 그리고 곧 만료되는 경우에 이메일 알림이 전송됩니다.

도메인 수명 주기 이벤트용 이메일 템플릿 ID:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## 관리자: 수동 도메인 등록 {#admin-manual-domain-registration}

고객이 결제 과정을 거치지 않고 대신 도메인을 등록하려면:

1. **Network Admin › Ultimate Multisite › Register Domain**으로 이동합니다.
2. 고객을 선택하고 도메인 이름을 입력합니다.
3. 등록자 연락처 정보(이름, 주소, 전화번호)를 작성합니다.
4. **Register**를 클릭합니다.

도메인 기록이 생성되어 고객 계정에 연결됩니다.
