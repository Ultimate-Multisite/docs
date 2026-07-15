---
title: Stripe 설정하기
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway 설정하기 (v2)

_**중요 참고: 이 문서는 Ultimate Multisite 버전 2.x에 관한 것입니다.**_

결제 설정 페이지에서 최대 네 가지 결제 방법을 활성화할 수 있습니다: Stripe, Stripe Checkout, PayPal 및 수동. 이 문서에서는 **Stripe**와 통합하는 방법을 살펴보겠습니다.

## Stripe 활성화하기 {#enabling-stripe}

네트워크에서 Stripe를 사용 가능한 결제 gateway로 활성화하려면 **Ultimate Multisite > Settings > Payments**로 이동하여 Active Payment Gateways 섹션에서 **Stripe** 또는 **Stripe Checkout** 옆의 토글을 선택하세요.

![활성 결제 gateway에서 Stripe 활성화하기](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** 이 방법은 checkout 중에 신용카드 번호를 입력할 공간을 표시합니다.

![checkout 중 Stripe 인라인 신용카드 필드](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** 이 방법은 checkout 중에 고객을 Stripe Checkout 페이지로 리디렉션합니다.

![checkout 중 Stripe Checkout 리디렉션 페이지](/img/config/settings-payment-gateways.png)

Stripe API 키 가져오기

Stripe가 결제 gateway로 활성화되면 **Stripe Publishable Key** 및 **Stripe Secret Key** 필드를 입력해야 합니다. Stripe Account에 로그인하여 이를 가져올 수 있습니다.

_**참고:** 결제 방법이 작동하는지 테스트하려면 **Sandbox mode**를 활성화할 수 있습니다._

![Stripe API 키 필드 및 sandbox mode 토글](/img/config/settings-payment-gateways.png)

Stripe Dashboard에서 오른쪽 상단의 **Developers**를 클릭한 다음 왼쪽 메뉴에서 **API Keys**를 클릭하세요.

![API Keys가 있는 Stripe Dashboard Developers 섹션](/img/config/settings-payment-gateways.png)

**Test Data**를 사용하거나(프로덕션 사이트에서 통합이 작동하는지 테스트하기 위해) 사용하지 않을 수 있습니다. 이를 변경하려면 **Viewing test data** 토글을 전환하세요.

![Stripe Viewing test data 토글](/img/config/settings-payment-gateways.png)

**Publishable key** 및 **Secret key**의 값을 **Token** 열에서 복사하여 Ultimate Multisite Stripe Gateway 필드에 붙여넣으세요. 그런 다음 **Save Changes**를 클릭하세요.

![Stripe publishable 및 secret key 값](/img/config/settings-payment-gateways.png)

![Ultimate Multisite 설정에 Stripe 키 붙여넣기](/img/config/settings-payment-gateways.png)

## Stripe Webhook 설정하기 {#setting-up-stripe-webhook}

Stripe는 **귀하의 Stripe account**에서 이벤트가 발생할 때마다 Ultimate Multisite에 알리는 webhook 이벤트를 보냅니다.

**Developers**를 클릭한 다음 왼쪽 메뉴에서 **Webhooks** 항목을 선택하세요. 그런 다음 오른쪽에서 **Add endpoint** *.*를 클릭하세요.

![Add endpoint 버튼이 있는 Stripe Webhooks 페이지](/img/config/settings-payment-gateways.png)

**Endpoint URL** *.*이 필요합니다. Ultimate Multisite는 endpoint URL을 자동으로 생성하며, 이는 **Ultimate Multisite Stripe Gateway** 섹션의 **Webhook Listener URL** 필드 바로 아래에서 찾을 수 있습니다_._

![Stripe gateway 설정의 Webhook Listener URL 필드](/img/config/settings-payment-gateways.png)

endpoint URL을 **복사**하여 Stripe **Endpoint URL** 필드에 **붙여넣으세요**.

![Stripe webhook 설정에 endpoint URL 붙여넣기](/img/config/settings-payment-gateways.png)

다음은 **Event** *.*를 선택하는 것입니다. 이 옵션 아래에서 **Select all events** 상자를 선택하고 **Add events**를 클릭하기만 하면 됩니다. 그런 다음 **Add Endpoint**를 클릭하여 변경 사항을 저장하세요.

![모든 이벤트를 선택하고 Stripe endpoint 추가하기](/img/config/settings-payment-gateways.png)

이제 완료되었습니다. Stripe 결제 통합이 완료되었습니다!
