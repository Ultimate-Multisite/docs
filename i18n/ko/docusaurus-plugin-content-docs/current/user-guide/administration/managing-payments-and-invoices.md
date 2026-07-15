---
title: 결제 및 송장 관리
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# 결제 및 송장 관리

## 결제 설정 {#payment-settings}

결제를 받기 시작하기 전에 결제 관련 설정을 구성해야 합니다. **Ultimate Multisite → Settings**로 이동한 뒤 **Payment** 탭을 클릭하세요.

![결제 설정 탭](/img/admin/settings-payments-top.png)

결제 설정 페이지의 전체 화면은 다음과 같습니다.

![결제 설정 전체 페이지](/img/admin/settings-payments-full.png)

### 일반 결제 옵션 {#general-payment-options}

일반 설정에서 다음을 구성할 수 있습니다.

- **통화** — 거래에 사용되는 기본 통화
- **통화 위치** — 통화 기호가 표시되는 위치(금액 앞/뒤)

![결제 게이트웨이 설정](/img/admin/settings-payments-options.png)

### 결제 게이트웨이 {#payment-gateways}

Ultimate Multisite는 여러 결제 게이트웨이를 지원합니다. Payment 설정 탭에서 각 게이트웨이를 활성화하고 구성할 수 있습니다.

![결제 게이트웨이 구성](/img/admin/settings-payments-gateways.png)

사용 가능한 게이트웨이는 다음과 같습니다.

- **Stripe** — Stripe를 통한 신용카드 결제
- **PayPal** — PayPal 결제
- **Manual** — 오프라인 또는 사용자 지정 결제 처리용

각 게이트웨이에는 API 키와 기타 설정을 입력하는 자체 구성 섹션이 있습니다.

![추가 게이트웨이 설정](/img/admin/settings-payments-gateways-2.png)

### 샌드박스 모드 {#sandbox-mode}

실서비스로 전환하기 전에 결제 연동을 테스트하려면 **Sandbox Mode**를 활성화할 수 있습니다. 샌드박스 모드가 활성화되어 있으면 실제 청구는 발생하지 않습니다.

## 결제 보기 {#viewing-payments}

네트워크 전체의 모든 거래를 보려면 Ultimate Multisite 아래의 **Payments** 페이지로 이동하세요.

![결제 목록](/img/admin/payments-list.png)

상태(완료, 보류 중, 실패, 환불됨)별로 결제를 필터링하고 특정 거래를 검색할 수 있습니다.

결제를 클릭하면 항목, 연결된 멤버십, 고객 정보, 결제 게이트웨이 데이터를 포함한 전체 세부 정보를 볼 수 있습니다.

## 송장 {#invoices}

Ultimate Multisite는 결제에 대한 송장을 자동으로 생성할 수 있습니다. Payment 설정에서 송장 템플릿과 번호 매기기 형식을 사용자 지정할 수 있습니다.

송장 사용자 지정 옵션에는 다음이 포함됩니다.

- 송장에 표시되는 **회사명 및 주소**
- **송장 번호 매기기** 형식 및 순서
- 송장 헤더에 표시되는 **로고**
- 약관, 메모 또는 법적 정보를 위한 **사용자 지정 푸터 텍스트**

송장 템플릿을 사용자 지정하려면 **Ultimate Multisite → Settings → Payment**로 이동하여 송장 관련 설정을 찾으세요.
