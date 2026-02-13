---
title: API 엔드포인트 등록
sidebar_position: 6
_i18n_hash: 8185a928b84bdc9e5563d14f7ddbe7d7
---
# Ultimate Multisite 등록 API 엔드포인트

이 튜토리얼에서는 Ultimate Multisite /register API 엔드포인트를 사용하여 네트워크에 새로운 고객을 온보딩하는 전체 프로세스를 만들고, Zapier를 사용해 이를 수행하는 방법을 배웁니다.

이 엔드포인트는 POST 메서드를 사용하며 URL _**https://yoursite.com/wp-json/wu/v2/register**_ 로 호출됩니다. 이 호출에서는 네트워크 내에서 4개의 프로세스가 실행됩니다:

* 새로운 WordPress 사용자 또는 사용자 ID를 통한 식별이 생성됩니다.
* Ultimate Multisite에서 새로운 고객 또는 고객 ID를 통한 식별이 생성됩니다.
* WordPress 네트워크에 새로운 사이트가 생성됩니다.
* 마지막으로 Ultimate Multisite에서 새로운 멤버십이 생성됩니다.

이 프로세스를 위해 API 자격 증명이 필요합니다. 이를 얻으려면 네트워크 관리자 패널로 이동하여 **Ultimate Multisite > Settings** > **API & Webhooks** 로 이동한 뒤 API Settings 섹션을 찾으세요.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)
**Enable API** 를 선택하고 API 자격 증명을 받으세요.

이제 엔드포인트를 살펴보고 Zapier에서 등록 액션을 만들어 보겠습니다.

## 엔드포인트 본문 매개변수

엔드포인트에 전송해야 할 최소 정보를 개요합니다. 이 글의 끝에서 전체 호출을 확인할 수 있습니다.

### 고객

사용자와 Ultimate Multisite 고객을 생성하는 과정에 필요한 정보입니다:

```json
"customer_id" : integer
```

네트워크에서 생성된 고객 ID를 전송할 수 있습니다. 제출되지 않으면 아래 정보를 사용해 새 고객과 새 WordPress 사용자를 생성합니다. 사용자 ID도 고객 ID와 동일한 방식으로 전송할 수 있습니다.

```json
"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },
```

### **멤버십**

이 객체에서 필요한 유일한 정보는 멤버십 상태입니다.

```json
"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },
```

### **제품**

제품은 네트워크의 1개 이상의 제품 ID를 배열로 제공합니다. 주의: 이 엔드포인트는 제품을 생성하지 않습니다. 제품 생성 엔드포인트를 더 잘 이해하려면 Ultimate Multisite 문서를 확인하세요.

```json
"products" : [1,2],
```

### **결제**

멤버십과 마찬가지로 상태만 필요합니다.

```json
"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },
```

### **사이트**

본문을 마무리하려면 사이트의 URL과 제목이 필요합니다. 두 항목 모두 Site 객체 안에 포함됩니다.

```json
"site" : { "site_url" : "string", "site_title" : "string" }
```

등록 엔드포인트의 반환값은 새로 생성된 멤버십 정보를 포함하는 배열입니다.

## Zapier에서 액션 만들기

이 새롭고 더 견고한 계정 생성 엔드포인트 도입으로 Zapier에서 새로운 액션을 사용할 수 있습니다.

Zapier의 새 버전이 제공하는 모든 기능을 어떻게 활용하고 즐길 수 있는지 아시나요? 자세히 알아보려면 여기를 클릭하세요. (링크?)

### 액션 만들기

Zapier와 함께 등록 엔드포인트를 사용하는 방법을 더 잘 보여주기 위해 Google Forms와의 통합을 만들어 보겠습니다. 이 양식이 작성되고 답변 시트에 정보가 저장될 때마다 Ultimate Multisite 네트워크에 새 멤버십이 생성됩니다.

Google Forms에서 네트워크에 새 멤버십을 만들기 위해 필요한 최소 필드만 포함한 양식을 만드세요.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

이제 Zapier에서 새 Zap을 만들고 Google에서 생성한 양식을 데이터가 저장된 스프레드시트를 통해 연결하세요.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

완료! Google Forms 양식이 Zapier와 연결되어 네트워크와 통합될 준비가 되었습니다. 이제 Google Forms가 작성될 때마다 트리거되는 액션으로 넘어가 보겠습니다.

새 Ultimate Multisite 앱을 찾아 선택하세요. 이 종류의 Zap에서는 Register 옵션을 선택합니다.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

이 첫 번째 단계 이후, 이 Zap에 연결될 계정을 선택하세요.

After this first step, choose the account that will be connected with this Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

이는 전체 프로세스에서 가장 민감한 부분입니다. Google Forms에서 가져온 필드를 등록 엔드포인트에 필요한 최소 필드와 매칭해야 합니다. 앞서 본 섹션을 참고하세요.

이 예시에서는 사용자 이름, 이메일, 비밀번호, 이름 및 웹사이트 URL만 구성하면 됩니다. 나머지는 미리 지정되어 있어 Google Forms에서 생성되는 모든 멤버십이 동일한 제품 및 상태 패턴을 따릅니다.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

정보를 설정한 후 최종 테스트를 진행하세요. 마지막 화면에서 엔드포인트에 전송될 모든 필드와 해당 정보, 빈 필드를 확인할 수 있습니다.

With the information set up, proceed to the final test. On the last screen you can see all the fields that will be sent to the endpoint, their respective information and the fields that will be sent empty.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

새 Zap을 테스트하고 성공적으로 완료되어야 합니다. 오류가 발생하면 모든 필드를 확인하고 올바르게 전송되는지 점검하세요. 정보가 많아 놓치기 쉬운 부분이 있을 수 있습니다.

### 완전한 엔드포인트 매개변수

아래는 전체 호출과 전송 가능한 모든 필드 옵션입니다.

```json
"customer_id" : integer,
"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },
"membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", },
"products" : [1,2],
"duration" : "string",
"duration_unit" : "string",
"discount_code" : "string",
"auto_renew" : "boolean",
"country" : "string",
"currency" : "string",
"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" },
"payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", },
"site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
```
