---
title: 클라이언트 Account 페이지
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# 고객의 Account 페이지(v2)

_**중요 참고: 이 문서는 Ultimate Multisite 버전 2.x에 관한 것입니다.**_

고객이 네트워크에서 플랜을 구독하면 결제, 멤버십, 도메인, 플랜 제한 사항 등에 관한 중요한 정보가 있는 웹사이트와 해당 Dashboard에 접근할 수 있습니다...

이 튜토리얼에서는 고객의 Account 페이지를 안내하며, 고객이 그 안에서 무엇을 보고 무엇을 할 수 있는지 살펴보겠습니다.

## Account 페이지 {#the-account-page}

Account 페이지는 고객의 Dashboard 안에서 **Account**를 클릭하여 접근할 수 있습니다.

![고객 Dashboard의 Account 메뉴](/img/account-page/account-menu.png)

소버린 테넌트 네트워크에서 Ultimate Multisite v2.13.0은 이 고객 관리 경험을 메인 사이트에 유지합니다. 고객이 소버린 테넌트에서 Account, 체크아웃, 청구, 송장, 사이트 관리, 템플릿 전환 또는 도메인 매핑 작업을 열면, 해당 작업은 메인 사이트 고객 패널로 다시 연결되어 네트워크 청구 및 멤버십 기록이 권한 있는 상태로 유지됩니다.

고객이 소버린 테넌트에서 도착하면 메인 사이트 고객 패널에는 테넌트 사이트로 돌아가는 링크가 포함될 수 있습니다. 반환 링크는 Ultimate Multisite가 반환 대상을 고객의 사이트 중 하나로 검증할 수 있을 때만 표시되며, 이를 통해 테넌트 워크플로를 보존하면서 임의 리디렉션을 방지합니다.

![고객 Account 페이지 개요](/img/account-page/overview.png)

고객이 이를 클릭하면 멤버십, 청구 주소, 송장, 도메인, 사이트 제한 사항의 개요를 볼 수 있으며, 또한 ****사이트 템플릿**(네트워크에서 허용된 경우)**을 변경할 수 있습니다.

또한 멤버십을 다른 플랜으로 변경하거나, 제공하는 다른 패키지 또는 서비스를 구매할 수도 있습니다. 각 섹션을 따로 살펴보겠습니다.

### 멤버십 개요: {#your-membership-overview}

고객의 웹사이트 이름 바로 아래 첫 번째 블록에는 현재 플랜과 함께 구매한 서비스/패키지의 개요가 표시됩니다. 이 블록에는 멤버십 번호, 처음 지불한 금액, 플랜 및 서비스/패키지 비용, 그리고 이 멤버십에 대해 청구된 횟수도 표시됩니다. 또한 멤버십이 **활성** , **만료됨** 또는 **취소됨** 상태인지 확인할 수 있습니다.

![플랜, 금액 및 청구 세부 정보를 보여주는 멤버십 개요](/img/account-page/membership-card.png)

이 블록 바로 아래에서 고객은 **이 사이트 정보** 및 **사이트 제한** 블록을 볼 수 있습니다. 이 블록들은 디스크 공간, 글, 페이지, 방문 수 등 플랜에 포함된 모든 제한 사항을 보여줍니다... 이러한 제한은 **Ultimate Multisite > Products**의 각 플랜 페이지에서 구성할 수 있습니다.

![플랜 제한 사항을 보여주는 이 사이트 정보 및 사이트 제한 블록](/img/account-page/site-limits.png)

**멤버십**의 오른쪽에서 고객은 **변경**을 클릭할 수 있습니다. 그러면 사용 가능한 모든 플랜과 패키지/서비스가 표시됩니다. 다른 플랜을 선택하면, 다운그레이드든 업그레이드든 관계없이 해당 플랜의 제한 사항이 현재 멤버십 제한 사항 대신 적용됩니다.

이제 고객이 현재 멤버십에 대해 더 많은 디스크 공간이나 방문 수 같은 패키지 또는 서비스를 구매하기로 선택하면, 현재 멤버십은 변경되지 않고 새 패키지만 추가됩니다.

이 멤버십 변경 페이지에서는 쿠폰 코드를 추가할 수 없다는 점에 유의하세요. 고객이 첫 멤버십 구매 시 쿠폰 코드를 사용했다면, 해당 코드는 이 새 멤버십에도 적용됩니다.

### 청구 주소 업데이트: {#updating-the-billing-address}

Account 페이지에서 고객은 청구 주소도 업데이트할 수 있습니다. _청구 주소_ 옆의 **업데이트**를 클릭하기만 하면 됩니다.

![업데이트 버튼이 있는 청구 주소 섹션](/img/account-page/billing-address.png)

고객에게 새 창이 표시됩니다. 새 주소를 입력하고 _변경 사항 저장_을 클릭하기만 하면 됩니다.

![청구 주소 업데이트 양식](/img/account-page/billing-address-form.png)

### 사이트 템플릿 변경: {#changing-the-site-template}

고객이 사이트 템플릿을 변경할 수 있게 하려면 **Ultimate Multisite > Settings > Sites**로 이동하여 **Allow Template Switching** 옵션을 켜야 합니다.

또한 **Ultimate Multisite > Products**에서 플랜을 선택하고 **Site Templates** 탭으로 이동합니다. **Allow Site Templates** 옵션이 켜져 있고 **Site Template Selection Mode**에서 **Choose Available Site Templates** 옵션이 선택되어 있는지 확인하세요.

![템플릿 선택 모드가 있는 제품 사이트 템플릿 탭](/img/config/product-site-templates.png)

웹사이트에서 사용 가능한 모든 사이트 템플릿을 볼 수 있습니다. 이 플랜으로 구독한 고객에게 제공할 템플릿과 제공하지 않을 템플릿을 선택하세요. 이 옵션은 체크아웃 양식에도 영향을 주므로, **사용 불가**로 선택된 템플릿은 이 플랜의 등록 페이지에 나타나지 않습니다.

이제 고객은 Account 페이지 안에서 **사이트 템플릿 변경**을 클릭할 수 있습니다.

![Account 페이지의 사이트 템플릿 변경 버튼](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0은 새로 디자인된 템플릿 전환 패널을 표시합니다. 이 패널은 **현재 템플릿 카드**로 시작하여 고객이 대체 템플릿을 선택하기 전에 어떤 템플릿이 활성 상태인지 확인할 수 있게 합니다.

사용 가능한 사이트 템플릿의 지속적인 그리드는 고객이 옵션을 검토하는 동안 계속 표시됩니다. 이를 통해 현재 선택 항목을 놓치지 않고 플랜에서 허용된 템플릿을 비교할 수 있습니다.

![플랜에 사용 가능한 사이트 템플릿 목록](/img/config/site-templates-list.png)

변경하려는 템플릿을 선택한 후에는 변경을 확인하라는 요청을 받게 됩니다.

![사이트 템플릿 전환 확인 대화상자](/img/account-page/template-switch-confirm.png)

확인을 켜고 **전환 처리**를 클릭하면 새 사이트 템플릿이 고객의 웹사이트에 사용됩니다.

고객은 이 패널에서 **Reset current template**도 사용할 수 있으며, 사이트를 현재 할당된 템플릿으로 되돌려야 할 때 사용할 수 있습니다. 다른 템플릿으로 전환하는 것과 마찬가지로, 템플릿을 재설정하면 사이트 콘텐츠를 덮어쓸 수 있으므로 고객은 재설정 동작을 이해한 경우에만 확인해야 합니다.

### 사용자 지정 도메인 추가: {#adding-custom-domains}

고객은 Account 페이지에서 이 플랜에 사용자 지정 도메인을 추가할 수도 있습니다. 고객이 사용자 지정 도메인을 사용할 수 있도록 하려면 **Ultimate Multisite > Settings >** **Domain Mapping**으로 이동하세요.

**Enable Domain Mapping** 옵션을 켜세요. 이렇게 하면 고객이 네트워크 수준에서 사용자 지정 도메인을 사용할 수 있습니다.

제품별로 도메인 매핑이 활성화되어 있는지도 확인하는 것을 잊지 마세요. 고객이 사용자 지정 도메인을 사용하지 못하도록 제품을 제한할 수 있기 때문입니다.

**Ultimate Multisite > Products**로 이동하세요. 원하는 플랜을 선택하고 **Custom Domains** 탭으로 이동하세요. **Allow Custom Domains** 옵션을 켜세요.

![사용자 지정 도메인 허용 토글이 있는 Custom Domains 탭](/img/config/product-custom-domains.png)

이렇게 하면 이 특정 플랜을 구독한 모든 고객이 사용자 지정 도메인을 사용할 수 있습니다. 이제 Account 페이지에서 고객은 **Add Domain**을 클릭하여 사용자 지정 도메인을 추가할 수 있습니다.

![Account 페이지의 Add Domain 버튼](/img/account-page/add-domain-button.png)

처음 열리는 창에는 이 사용자 지정 도메인이 네트워크에서 작동하도록 DNS 레코드를 업데이트하는 방법을 안내하는 메시지가 고객에게 표시됩니다.

![사용자 지정 도메인을 추가할 때 표시되는 DNS 안내](/img/account-page/add-domain-dns.png)

이 메시지는 **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**에서 (사용자가) 편집할 수 있습니다.

![Domain Mapping의 Add New Domain Instructions 설정](/img/config/settings-domain-mapping.png)

도메인 매핑 설정 페이지의 전체 보기는 다음과 같습니다.

![도메인 매핑 설정 전체 페이지](/img/config/settings-domain-mapping-full.png)

**Next Step**을 클릭한 후, 고객은 사용자 지정 도메인 이름을 추가하고 이 사용자 지정 도메인을 기본 도메인으로 할지 선택할 수 있습니다. 고객은 웹사이트에 둘 이상의 사용자 지정 도메인을 사용할 수 있으므로, 어떤 도메인을 기본 도메인으로 할지 선택할 수 있다는 점에 유의하세요.

![기본 도메인 옵션이 있는 사용자 지정 도메인 이름 입력](/img/account-page/add-domain-primary.png)

**Add Domain**을 클릭한 후, 도메인이 고객의 Account에 추가됩니다. 이제 고객이 해야 할 일은 도메인 등록기관에서 이 사용자 지정 도메인의 DNS 레코드를 변경하는 것뿐입니다.

### 비밀번호 변경: {#changing-password}

Account Dashboard 안에서 고객은 **Change Password**를 클릭하여 비밀번호를 변경할 수도 있습니다.

![Account 페이지의 Change Password 버튼](/img/account-page/change-password-button.png)

그러면 고객이 현재 비밀번호를 입력한 다음 사용하려는 새 비밀번호를 입력해야 하는 새 창이 표시됩니다.

![현재 및 새 비밀번호 필드가 있는 비밀번호 변경 양식](/img/account-page/change-password-form.png)

### 위험 영역: {#danger-zone}

**Danger Zone** 부분에는 **Delete Site**와 **Delete Account**라는 두 가지 옵션도 표시됩니다. 이 두 작업은 되돌릴 수 없기 때문에 둘 다 Danger Zone 부분에 있습니다. 고객이 웹사이트나 Account를 삭제하면 다시 복구할 수 없습니다.

![Delete Site 및 Delete Account 옵션이 있는 Danger Zone](/img/account-page/danger-zone.png)

고객이 이 두 옵션 중 하나를 클릭하면, 웹사이트 또는 Account를 제거하는 옵션을 켜야 하는 창이 표시되며 이 작업은 취소할 수 없다는 경고를 받게 됩니다.

![Delete Site 확인 대화 상자](/img/account-page/delete-site-confirm.png)

![Delete Account 확인 대화 상자](/img/account-page/delete-account-confirm.png)

고객이 웹사이트를 삭제해도 Account와 멤버십은 그대로 유지됩니다. 웹사이트의 모든 콘텐츠만 잃게 됩니다. Account를 삭제하면 이 Account와 관련된 모든 웹사이트, 멤버십 및 정보가 손실됩니다.
