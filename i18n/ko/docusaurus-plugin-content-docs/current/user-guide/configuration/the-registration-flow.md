---
title: 등록 흐름
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# 등록 흐름 (v2) {#the-registration-flow-v2}

_**중요 참고: 이 문서는 Ultimate Multisite 버전 2.x를 다룹니다.**_

사용자는 다양한 방식으로 네트워크에 등록할 수 있습니다. 등록 양식을 사용하거나 미리 선택된 플랜으로 연결되는 공유 가능한 링크를 사용할 수 있습니다. 여기서는 고객이 사용할 수 있는 경로를 통해 네트워크에 등록하는 방법과 네트워크에 등록한 후 어떤 일이 발생하는지 보여드립니다.

## 등록 양식 사용: {#using-the-registration-form}

이것은 표준 등록 과정입니다. **결제 양식**이 있는 등록 페이지를 만들면, 고객은 이 페이지로 이동해 네트워크에 등록하고 플랜을 구독하게 됩니다. 원한다면 여러 등록 페이지를 만들 수 있으며, 각 페이지마다 서로 다른 등록 양식을 둘 수 있습니다.

등록 기본 페이지는 [_**yourdomain.com/register**_](http://yourdomain.com/register)이지만, **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**에서 언제든지 변경할 수 있습니다.

사용자가 등록 페이지에 도착하면(보통 **로그인** 또는 **지금 구매** 버튼을 클릭), 그곳에서 등록 양식을 보게 됩니다.

![등록 페이지에 표시된 등록 양식](/img/frontend/registration-form.png)

다음은 프런트엔드에 표시되는 결제 양식의 예입니다.

![프런트엔드 결제 등록 양식](/img/config/checkout-frontend-registration.png)

사용자가 해야 할 일은 이메일, 사용자 이름, 비밀번호 등 모든 필수 필드를 입력하고 플랜 비용을 결제하는 것입니다. 무료 플랜 또는 결제 정보 없이 체험 기간이 있는 유료 플랜에 등록하는 경우에는 이메일 주소를 확인하면 됩니다.

"감사합니다" 페이지에서는 이메일 주소를 확인해야 하는지, 또는 웹사이트가 이미 활성화되어 바로 사용할 수 있는지를 알려주는 메시지를 보게 됩니다.

![등록 후 감사 페이지](/img/frontend/registration-thank-you.png)

이메일 주소 확인이 필요한 경우, 사용자는 이메일 받은편지함으로 이동해 인증 링크를 클릭해야 합니다. 이메일 주소가 인증되지 않으면 웹사이트는 활성화되지 않습니다.

유료 플랜에 등록했거나 네트워크에서 이메일 인증이 필수가 아닌 경우, 결제 직후 웹사이트가 활성화되며 Dashboard에 로그인할 수 있는 링크가 표시됩니다.

![Dashboard에 로그인할 수 있는 링크가 있는 활성화된 사이트](/img/frontend/site-activated.png)

## 공유 가능한 링크 사용: {#using-a-shareable-link}

공유 가능한 링크를 사용한 등록 과정은 기본적으로 등록 양식과 동일합니다. 유일한 차이점은 공유 가능한 링크를 사용하면 고객에게 결제 양식에서 제품 또는 웹사이트 템플릿이 미리 선택되어 있을 수 있다는 점입니다(URL 매개변수를 통한 제품 및 템플릿 사전 선택 섹션 참조). 또는 쿠폰 코드가 추가되어 있을 수도 있습니다(URL 매개변수 사용 섹션 참조).

등록 과정은 동일합니다. 이름, 사용자 이름, 이메일 주소, 웹사이트 이름과 제목 등을 입력해야 하지만, 플랜 또는 사이트 템플릿은 이미 고객을 위해 미리 선택되어 있습니다.

### 수동 결제를 사용한 등록: {#registering-using-manual-payments}

PayPal, Stripe 또는 Ultimate Multisite나 그 애드온 통합에서 제공하는 다른 결제 게이트웨이를 사용하고 싶지 않다면, 고객을 위해 수동 결제를 사용할 수 있습니다. 이렇게 하면 고객이 네트워크에 등록한 후 선호하는 결제 처리 서비스에서 결제할 수 있도록 청구서를 생성할 수 있습니다.

등록 과정은 위와 정확히 동일하지만, 등록 페이지에서 고객은 결제를 완료하기 위한 추가 지침이 포함된 이메일을 받게 된다는 메시지를 보게 됩니다.

![등록 중 수동 결제 메시지](/img/frontend/registration-manual-notice.png)

그리고 등록이 완료된 후에는 설정해 둔 결제 지침을 보게 됩니다(이 지침은 이메일로도 받게 됩니다).

![등록 후 표시되는 결제 지침](/img/frontend/registration-payment-instructions.png)

결제 지침은 **Ultimate Multisite > Settings > Payments**에서 **Manual** 결제 옵션을 켠 후 변경할 수 있습니다.

![결제 지침 필드가 있는 수동 결제 토글](/img/config/manual-gateway-settings.png)

고객이 수동 결제를 완료하고 확인 내용을 보내면, 고객 멤버십과 웹사이트를 활성화하기 위해 **결제를 수동으로 확인**해야 합니다.

이 작업을 하려면 **Ultimate Multisite > Payments**로 이동해 고객 결제를 찾으세요. 아직 **Pending** 상태로 표시되어 있어야 합니다.

![대기 중인 수동 결제가 있는 결제 목록](/img/admin/payments-list.png)

결제 번호를 클릭하면 상태를 **Completed**로 변경할 수 있습니다.

![결제 상세 페이지](/img/admin/payment-edit.png)

![결제 상태를 Completed로 변경](/img/admin/payment-status-completed.png)

상태를 **Completed**로 변경한 후에는 **멤버십 활성화** 메시지가 표시되어야 합니다. 이 옵션을 **켜기**로 전환하여 이 고객과 연결된 멤버십과 웹사이트를 활성화하세요. 그런 다음 **결제 저장**을 클릭하세요.

![멤버십 활성화 토글 및 결제 저장 버튼](/img/admin/payment-activate-membership.png)

이제 고객은 Dashboard와 구독한 모든 기능에 접근할 수 있어야 합니다.
