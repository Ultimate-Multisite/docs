---
title: PayPal 설정
sidebar_position: 10
_i18n_hash: 1744fb066b8291440fd7fb554aa8e2d9
---
# PayPal 게이트웨이 설정 (v2)

_**중요 참고: 이 문서는 Ultimate Multisite 버전 2.x를 기준으로 합니다.**_

결제 설정 페이지에서 최대 4개의 결제 방법을 활성화할 수 있습니다: Stripe, Stripe Checkout, PayPal 및 Manual. 이 문서에서는 **PayPal**과의 통합 방법을 살펴보겠습니다.

Stripe와 마찬가지로 PayPal은 특히 WordPress 웹사이트에서 온라인 결제에 널리 사용됩니다. 이 문서는 네트워크에서 사용 가능한 결제 수단으로 PayPal을 사용하는 방법을 안내합니다.

이 통합에 필요한 API 자격 증명을 얻으려면 **PayPal 비즈니스 계정**이 필요합니다.

## 네트워크에서 PayPal 활성화

네트워크에서 PayPal을 사용 가능한 결제 수단으로 활성화하려면 **Ultimate Multisite > Settings > Payments** 탭으로 이동하여 PayPal 옆의 확인란을 선택합니다.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## PayPal API 자격 증명 가져오기

PayPal이 결제 게이트웨이로 활성화되면 PayPal API **Username**, PayPal API **Password**, PayPal API **Signature** 필드를 입력해야 합니다.

이 자격 증명은 PayPal [Live](https://www.paypal.com/home) 또는 [Sandbox](https://www.sandbox.paypal.com/home) 계정에 로그인하여 얻을 수 있습니다.

(PayPal **sandbox 모드**를 사용하여 결제를 테스트하고 게이트웨이가 올바르게 설정되었는지 확인할 수 있습니다. 해당 섹션을 토글만 하면 됩니다.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

PayPal 계정에 대한 API Signature 또는 Certificate 자격 증명을 요청하려면:

1. 귀하의 [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess)로 이동합니다.
2. **API access** 섹션에서 **Update**를 클릭합니다.  
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)
3. **NVP/SOAP API integration (Classic)** 아래에서 **Manage API credentials**를 클릭합니다.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

   * 이미 API Signature 또는 Certificate를 생성한 경우, 자격 증명을 확인할 수 있는 페이지로 리디렉션됩니다.
   * _**참고:** PayPal 계정 확인을 요청받는 경우 화면 지침을 따르세요._

4. 다음 옵션 중 **하나**를 선택한 뒤 **Agree and Submit**을 클릭합니다.

   * **Request API Signature** – API Signature 인증을 위해 선택합니다.
   * **Request API Certificate** – API Certificate 인증을 위해 선택합니다.

5. PayPal은 다음과 같이 API 자격 증명을 생성합니다:  
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

   * **API Signature credentials**에는 만료되지 않는 API Username, API Password, Signature가 포함됩니다. 이 값들은 보안을 위해 기본적으로 숨겨져 있습니다. **Show/Hide**를 클릭해 표시/숨김을 전환합니다. 완료되면 **Done**을 클릭합니다.
   * **API Certificate credentials**에는 3년 후 자동으로 만료되는 API Username, API Password, Certificate가 포함됩니다. **Download Certificate**를 클릭해 API Certificate를 데스크톱에 저장합니다.

이제 PayPal 결제 통합이 완료되었습니다!

PayPal 설정에 대한 질문이 있으면 PayPal의 [Help Center](https://www.paypal.com/br/smarthelp/home)를 참조하세요.
