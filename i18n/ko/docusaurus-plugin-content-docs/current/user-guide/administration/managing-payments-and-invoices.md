---
title: 결제 및 송장 관리
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# 결제 및 송장 관리

## 결제 설정

결제를 받기 시작하기 전에 결제 관련 설정을 구성해야 합니다. **Ultimate Multisite → Settings** 로 이동한 뒤 **Payment** 탭을 클릭하세요.

![Payment settings tab](/img/admin/settings-payments-top.png)

### 일반 결제 옵션

일반 설정에서 다음을 구성할 수 있습니다:

- **Currency** — 거래에 사용되는 기본 통화
- **Currency Position** — 통화 기호가 표시되는 위치 (금액 앞/뒤)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### 결제 게이트웨이

Ultimate Multisite는 여러 결제 게이트웨이를 지원합니다. 결제 설정 탭에서 각각을 활성화하고 구성할 수 있습니다.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

사용 가능한 게이트웨이는 다음과 같습니다:

- **Stripe** — Stripe를 통한 신용카드 결제
- **PayPal** — PayPal 결제
- **Manual** — 오프라인 또는 맞춤 결제 처리용

각 게이트웨이마다 API 키 및 기타 설정을 입력할 수 있는 자체 구성 섹션이 있습니다.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### 샌드박스 모드

**Sandbox Mode** 를 활성화하면 라이브 전 결제 통합을 테스트할 수 있습니다. 샌드박스 모드가 활성화되면 실제 요금이 부과되지 않습니다.

## 결제 보기

Ultimate Multisite에서 **Payments** 페이지로 이동하면 네트워크 전체의 모든 거래를 확인할 수 있습니다.

![Payments list](/img/admin/payments-list.png)

결제 상태(완료, 보류, 실패, 환불)별로 필터링하고 특정 거래를 검색할 수 있습니다.

결제를 클릭하면 항목, 관련 멤버십, 고객 정보 및 결제 게이트웨이 데이터를 포함한 전체 세부 정보를 확인할 수 있습니다.

## 송장

Ultimate Multisite는 결제에 대한 송장을 자동으로 생성할 수 있습니다. 결제 설정에서 송장 템플릿과 번호 매기기 형식을 사용자 정의할 수 있습니다.

송장 사용자 정의 옵션은 다음과 같습니다:

- **Company name and address** — 송장에 표시되는 회사명 및 주소
- **Invoice numbering** — 번호 매기기 형식 및 순서
- **Logo** — 송장 헤더에 표시되는 로고
- **Custom footer text** — 약관, 메모 또는 법적 정보를 위한 사용자 정의 바닥글 텍스트

송장 템플릿을 사용자 정의하려면 **Ultimate Multisite → Settings → Payment** 으로 이동하여 송장 관련 설정을 찾으세요.
