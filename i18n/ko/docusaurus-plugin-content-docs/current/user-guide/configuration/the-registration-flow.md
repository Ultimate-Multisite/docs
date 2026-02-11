---
title: 등록 흐름
sidebar_position: 3
_i18n_hash: 3e38d2f50683a422650956e5a3b0dff9
---
# 등록 흐름 (v2)

_**중요 참고: 이 문서는 Ultimate Multisite 버전 2.x를 참조합니다.**_

사용자는 네트워크에 등록하는 다양한 방법이 있습니다. 등록 양식이나 사전 선택된 플랜에 대한 공유 가능한 링크를 사용할 수 있습니다. 여기에서는 사용 가능한 경로를 통해 고객이 네트워크에 등록하는 방법과 등록 후 발생하는 일에 대해 설명합니다.

## 등록 양식 사용하기:

이것은 표준 등록 프로세스입니다. **체크아웃 폼**이 있는 등록 페이지를 만들면 고객이 네트워크에 등록하고 플랜을 구독하기 위해 방문하는 곳이 됩니다. 필요하다면 서로 다른 등록 양식을 가진 여러 등록 페이지를 만들 수 있습니다.

등록 기본 페이지는 [_**yourdomain.com/register**_](http://yourdomain.com/register)이며, 언제든지 **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**에서 변경할 수 있습니다.

사용자가 등록 페이지에 도착하면(보통 **Sign in** 또는 **Buy now** 버튼을 클릭하면), 그곳에서 등록 양식을 확인합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hDcy7S8pBK.png)

그들이 해야 할 일은 필수 필드(이메일, 사용자 이름, 비밀번호 등)를 모두 입력하고 플랜 비용을 지불하거나, 무료 플랜 또는 결제 정보 없이 체험 기간이 있는 유료 플랜에 등록하는 경우 이메일 주소를 확인하는 것입니다.

“감사합니다” 페이지에서 이메일 주소를 확인해야 하는지, 아니면 웹사이트가 이미 활성화되어 사용을 시작할 수 있는지 알려주는 메시지를 확인합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FnXxCLt0YW.png)

이메일 주소 확인이 필요한 경우, 이메일 수신함으로 이동해 확인 링크를 클릭해야 합니다. 이메일 주소가 확인되지 않으면 웹사이트가 활성화되지 않습니다.

유료 플랜에 등록했거나 네트워크에서 이메일 확인이 필수가 아닌 경우, 결제 직후 웹사이트가 활성화되고 대시보드에 로그인할 수 있는 링크가 표시됩니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DJwvUqQnQU.png)

## 공유 가능한 링크 사용하기:

공유 가능한 링크를 사용한 등록 과정은 기본적으로 등록 양식과 동일하며, 차이점은 공유 링크를 사용하면 고객이 체크아웃 양식에서 제품 또는 웹사이트 템플릿이 사전 선택되어 있거나 쿠폰 코드가 추가될 수 있다는 점입니다(URL 매개변수를 통한 제품 및 템플릿 사전 선택 섹션 참조, URL 매개변수 사용 섹션 참조).

등록 과정은 동일합니다: 이름, 사용자 이름, 이메일 주소, 웹사이트 이름 및 제목 등을 입력해야 하지만, 플랜이나 사이트 템플릿은 이미 사전 선택되어 있습니다.

### 수동 결제 사용한 등록:

PayPal, Stripe 또는 Ultimate Multisite가 제공하는 다른 결제 게이트웨이(또는 부가 통합)를 사용하고 싶지 않은 경우, 고객을 위해 수동 결제를 사용할 수 있습니다. 이렇게 하면 네트워크에 등록한 후 선호하는 결제 프로세서에서 결제할 수 있는 송장을 생성할 수 있습니다.

등록 과정은 위와 동일하지만, 등록 페이지에서 고객은 결제를 완료하기 위한 추가 지침이 포함된 이메일을 받을 것이라는 메시지를 확인합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-iSli6MoFGw.png)

등록이 완료되면 설정한 결제 지침을 확인할 수 있으며(그리고 이메일에서도 수신합니다).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hX0GPWYfEA.png)

결제 지침은 **Ultimate Multisite > Settings > Payments**에서 **Manual** 결제 옵션을 활성화한 후 변경할 수 있습니다:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RpPGDd0BZo.png)

고객이 수동 결제를 완료하고 확인서를 보내면, **수동으로 결제 확인**을 수행하여 고객 멤버십과 웹사이트를 활성화해야 합니다.

이렇게 하려면 **Ultimate Multisite > Payments**로 이동해 고객 결제를 찾습니다. 아직도 **Pending** 상태가 표시됩니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-2rW0tFemEP.png)

결제 번호를 클릭하면 상태를 **Completed**로 변경할 수 있습니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-KiRQKw3wGg.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-NPFNchZrUa.png)

상태를 **Completed**로 변경한 후 **Activate membership** 메시지가 표시됩니다. 이 옵션을 **on**으로 전환해 고객과 연결된 멤버십 및 웹사이트를 활성화한 다음 **Save Payment**를 클릭합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-e3R91KmnUV.png)

고객은 이제 대시보드와 구독한 모든 기능에 접근할 수 있어야 합니다.
