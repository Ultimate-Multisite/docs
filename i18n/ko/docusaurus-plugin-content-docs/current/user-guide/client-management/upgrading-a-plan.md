---
title: 요금제 업그레이드
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# 플랜 업그레이드(v2)

_**중요 참고: 이 문서는 Ultimate Multisite 버전 2.x를 기준으로 합니다.**_

고객은 언제든지 자신의 플랜을 업그레이드할 수 있습니다. 다른 플랜으로 업그레이드하거나 네트워크에서 제공하는 추가 서비스 또는 패키지를 구매할 수 있습니다.

이 튜토리얼에서는 고객이 플랜을 업그레이드하는 방법과 업그레이드 과정 이후에 어떤 일이 일어나는지 다룹니다.

플랜을 업그레이드하려면 고객은 자신의 Dashboard에 접속하여 **Account** 페이지로 이동해야 합니다.

![Account 메뉴 링크가 보이는 고객 서브사이트 Dashboard](/img/account-page/account-menu.png)

Account 페이지에는 현재 멤버십과 그에 연결된 플랜이 표시됩니다. 다른 플랜으로 업그레이드하려면 **Your Membership** 섹션의 오른쪽 위 모서리에 있는 **Change**를 클릭해야 합니다.

![Change 버튼이 있는 Account 페이지 Your Membership 카드](/img/account-page/membership-change-button.png)

그러면 사용 가능한 모든 플랜이 표시되는 결제 양식으로 리디렉션됩니다.

또한 플랜을 업그레이드하지 않고 특정 서비스나 패키지(여기 예시의 무제한 방문 또는 디스크 공간처럼)만 구매하려는 경우를 위해 **현재 플랜에서 이용 가능한 서비스 및 패키지**도 확인할 수 있습니다.

![고객 측에서 사용 가능한 플랜과 패키지를 보여주는 업그레이드 선택기](/img/account-page/upgrade-picker.png)

구매하려는 제품을 선택하면, 기존 크레딧을 제외하고 지금 지불해야 할 금액과 다음 청구일에 청구될 금액을 확인할 수 있습니다.

일반적으로 제품이 다른 플랜이고 결제가 멤버십 청구 사이에 이루어지는 경우, 첫 번째 플랜에 대해 지불한 금액만큼 크레딧을 받게 됩니다.

![적용된 크레딧과 다음 청구 금액을 보여주는 업그레이드 결제 요약](/img/account-page/upgrade-summary.png)

현재 구독에서 아무것도 변경하지 않는 플랜이나 패키지를 선택하면, 이를 설명하는 메시지가 표시됩니다.

![선택한 플랜이 구독을 변경하지 않을 때의 알림](/img/account-page/upgrade-no-change.png)

결제가 완료되면 새 제품이 고객의 계정에 추가되고, 새 제품의 모든 제한 또는 기능이 즉시 적용됩니다: 방문 수, 디스크 공간, 게시물 등...

##

##

## 업그레이드 및 다운그레이드 경로

각 제품에는 **Up & Downgrades** 탭이 있습니다. 해당 탭의 첫 번째 옵션은 **Plan Group**이라는 필드입니다.

**플랜 그룹**은 특정 플랜들이 같은 "계열"에 속한다는 것을 Ultimate Multisite에 알려, 업그레이드/다운그레이드 경로 옵션을 구성하는 데 사용할 수 있도록 해 주는 기능입니다.

![Plan Group 필드가 있는 제품 편집 Up and Downgrades 탭](/img/config/product-upgrades-plan-group.png)

예를 들어, **무료 플랜**, **Basic Plan**, **Premium Plan**을 사용할 수 있다고 가정해 보겠습니다. **Free Plan**에 가입한 사용자가 **Premium Plan**으로만 업그레이드할 수 있게 하고, "Basic Plan"은 업그레이드 옵션으로 보지 못하게 하고 싶습니다. 아래 스크린샷에 표시된 것처럼 Free 및 Premium 플랜 모두에 동일한 플랜 그룹 이름을 지정하기만 하면 됩니다.

![High End 플랜 그룹이 지정된 Free Plan 제품 페이지](/img/config/product-upgrades-free.png)

![High End 플랜 그룹이 지정된 Premium Plan 제품 페이지](/img/config/product-upgrades-premium.png)

이렇게 하면 Ultimate Multisite에 네트워크 안에 **High End**라는 플랜 "계열"이 있다는 것을 알려 주게 됩니다. 업그레이드 또는 다운그레이드를 제공할 때는 같은 계열의 플랜만 사용자에게 옵션으로 표시됩니다.
