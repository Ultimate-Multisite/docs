---
title: PayPal 설정하기
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal 게이트웨이 설정하기 (v2)

_**중요 참고: 이 문서는 Ultimate Multisite 버전 2.x에 관한 것입니다.**_

결제 설정 페이지에서 최대 네 가지 결제 방법을 활성화할 수 있습니다: Stripe, Stripe Checkout, PayPal, 수동. 이 문서에서는 **PayPal**과 통합하는 방법을 살펴봅니다.

Stripe와 마찬가지로 PayPal은 온라인 결제에 널리 사용되며, 특히 WordPress 웹사이트에서 많이 사용됩니다. 이 문서는 네트워크에서 사용할 수 있는 결제 방법으로 PayPal을 사용하는 방법을 안내합니다.

이 통합에 필요한 API 자격 증명을 얻으려면 **PayPal Business Account**가 필요합니다.

## 네트워크에서 PayPal 활성화하기

네트워크에서 사용할 수 있는 결제 방법으로 PayPal을 활성화하려면 **Ultimate Multisite > Settings > Payments** 탭으로 이동하여 PayPal 옆의 상자를 선택하세요.

![활성 결제 게이트웨이에서 PayPal 활성화](/img/config/settings-payment-gateways.png)

## 안내 설정 마법사 사용하기

Ultimate Multisite 2.10.0은 결제 게이트웨이 설정에 안내형 PayPal 설정 마법사를 추가합니다. PayPal을 활성화한 후 **Ultimate Multisite > Settings > Payments**에서 마법사를 사용해 게이트웨이를 연결할 방법을 선택하고, 저장하기 전에 아직 필요한 자격 증명이 무엇인지 확인하세요.

마법사는 두 가지 설정 경로를 지원합니다:

* **수동 자격 증명 입력**: 이미 PayPal API 자격 증명이 있거나, Account에서 OAuth 설정을 사용할 수 없거나, PayPal에서 자격 증명을 직접 복사하는 것을 선호할 때 이 경로를 사용하세요. PayPal 필드에 API Username, API Password, API Signature를 입력한 다음 결제 설정을 저장하세요.
* **OAuth 연결 게이트**: 이 경로는 설치에서 OAuth 옵션을 사용할 수 있고 활성화된 경우에만 사용하세요. 마법사는 기능 플래그 뒤에 OAuth 흐름을 표시하므로, 플래그가 없는 네트워크는 계속 수동 자격 증명 입력 필드를 사용합니다.

마법사에 OAuth 옵션이 표시되지 않으면 아래의 수동 자격 증명 입력 흐름을 완료하세요. 게이트웨이는 이전 Ultimate Multisite 2.x 릴리스와 동일한 PayPal Business API 자격 증명으로 작동합니다.

## PayPal API 자격 증명 얻기

PayPal이 결제 게이트웨이로 활성화되면 PayPal API **Username**, PayPal API **Password**, PayPal API **Signature** 필드를 채워야 합니다.

PayPal [라이브](https://www.paypal.com/home) 또는 [샌드박스](https://www.sandbox.paypal.com/home) Account에 로그인하여 이를 얻을 수 있습니다.

(**샌드박스 모드**를 사용해 결제를 테스트하고 게이트웨이가 올바르게 설정되었는지 확인할 수 있다는 점을 기억하세요. 해당 섹션을 켜기만 하면 됩니다.)

![PayPal API 자격 증명 필드와 샌드박스 모드 토글](/img/config/settings-payment-gateways.png)

PayPal Account의 API Signature 또는 Certificate 자격 증명을 요청하려면:

  1. [Account 설정](https://www.paypal.com/businessmanage/account/accountAccess)으로 이동하세요.

  2. **API 액세스** 섹션에서 **업데이트**를 클릭하세요.
![API 액세스 섹션이 있는 PayPal Account 설정](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API 통합(클래식)** 아래에서 **API 자격 증명 관리**를 클릭하세요.
![PayPal NVP/SOAP API 통합 API 자격 증명 관리](/img/config/settings-payment-gateways.png)

     * 이미 API Signature 또는 Certificate를 생성했다면 자격 증명을 확인할 수 있는 페이지로 리디렉션됩니다.

     * _**참고:** PayPal Account 확인을 요청받으면 화면의 안내를 따르세요._

  4. 다음 옵션 중 _하나_를 선택한 다음 **동의 및 제출**을 클릭하세요.

     * **API Signature 요청** – API Signature 인증을 위해 선택합니다.

     * **API Certificate 요청** – API Certificate 인증을 위해 선택합니다.

  5. PayPal은 다음과 같이 API 자격 증명을 생성합니다:
![PayPal이 생성한 API 자격 증명](/img/config/settings-payment-gateways.png)

     * **API Signature 자격 증명**에는 만료되지 않는 API Username, API Password, Signature가 포함됩니다. 이러한 값은 보안 강화를 위해 기본적으로 숨겨져 있습니다. **표시/숨기기**를 클릭하여 켜고 끌 수 있습니다. 완료되면 **완료**를 클릭하세요.

     * **API Certificate 자격 증명**에는 3년 후 자동으로 만료되는 API Username, API Password, Certificate가 포함됩니다. **Certificate 다운로드**를 클릭하여 API Certificate를 데스크톱에 저장하세요.

이제 PayPal 결제 통합이 완료되었습니다!

PayPal 설정에 대해 질문이 있으면 PayPal의 [도움말 센터](https://www.paypal.com/br/smarthelp/home)를 참조할 수 있습니다.
