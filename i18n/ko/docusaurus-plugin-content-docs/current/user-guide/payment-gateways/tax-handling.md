---
title: 세금 처리
sidebar_position: 4
_i18n_hash: 087a366fc43cafff9e887f68e71e23fe
---
# 세금 처리

Ultimate Multisite는 핵심 플러그인에 세금 수집 모듈이 내장되어 있어, 플랜, 패키지 및 서비스에 대한 판매세를 수집해야 할 경우 애드온을 설치할 필요 없이 쉽게 수집할 수 있습니다.

유럽에 위치한 기업을 위해, 우리는 VAT 규정 준수를 보다 잘 지원하기 위한 도구와 기능을 추가하는 **애드온**을 제공합니다.

Ultimate Multisite는 정부에 대신 세금을 신고하거나 납부하지 않습니다; 우리는 단지 거래 시점에 적절한 세금을 수집하도록 도와줄 뿐입니다. **여전히 직접 세금을 납부해야 합니다.**

## 세금 수집 활성화

세금 수집은 기본적으로 활성화되어 있지 않습니다. 이를 활성화하려면 **Ultimate Multisite > Settings > Taxes**로 이동하여 세금 활성화 설정을 토글해야 합니다.

![Enable Taxes toggle in tax settings](/img/config/settings-taxes.png)

### 세금 제외 vs. 세금 포함

기본적으로 모든 제품 가격은 세금이 제외된 상태이며, 이는 세금이 제품 가격에 포함되지 않음을 의미합니다. 고객이 특정 구매에 대해 세금을 지불해야 한다고 판단되면, 우리는 세금을 소계 위에 추가합니다.

제품 가격에 세금을 포함하고 싶다면, 포함 세금 설정을 활성화하면 됩니다.

![Inclusive Tax setting toggle](/img/config/settings-taxes.png)

변경 사항을 **저장**하는 것을 잊지 마세요.

## 세율 만들기

세금 수집을 활성화한 후, 특정 지역에 대한 세율을 우리 세율 편집기를 사용해 만들어야 합니다.

세금 설정 페이지의 사이드바에서 **Manage Tax Rates** 버튼을 클릭하면 편집기에 접근할 수 있습니다.

![Manage Tax Rates button on the sidebar](/img/config/settings-taxes.png)

세율 편집기 페이지에서 **Add new Row** 버튼을 클릭해 새 세율을 추가할 수 있습니다.

![Tax rates editor with Add new Row button](/img/config/settings-taxes.png)

각 세율에 **제목**(송장에 사용됨)을 지정해야 합니다. 그 다음 **국가**(필수), **주**, **도시**(둘 다 선택 사항)를 선택해 이 세율이 부과될 위치를 지정합니다. 마지막으로 **세율(%)**을 입력합니다.

### 세금 범주

또한 여러 세금 범주를 만들어 서로 다른 종류의 제품에 대해 다른 세율을 부과할 수 있습니다.

**Add new Tax Category**를 클릭한 뒤 범주의 이름을 입력하고 **Create**를 누릅니다.

![Add new Tax Category button](/img/config/settings-taxes.png)

![Creating a new tax category](/img/config/settings-taxes.png)

범주를 탐색하려면 **Switch**를 클릭하고 새 세금을 추가하려는 범주를 선택합니다.

![Switch between tax categories](/img/config/settings-taxes.png)

![Selecting a tax category to view](/img/config/settings-taxes.png)

특정 제품에 대한 세금 범주를 설정하려면 **Product edit page**로 이동한 뒤 세금 탭으로 이동합니다.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

같은 화면에서 **Is Taxable?** 토글을 끄면 Ultimate Multisite가 해당 제품에 대해 세금을 수집하지 않도록 알립니다.

## 유럽 부가가치세 지원

앞서 언급한 바와 같이, EU에 있는 고객을 위해 유럽 부가가치세 규정으로 인한 추가 요구 사항을 충족하는 애드온을 제공합니다.

우리의 VAT 도구는 다음과 같은 몇 가지 중요한 기능을 지원합니다:

- EU 부가가치세율을 쉽게 불러오기;
- VAT 번호 수집 및 검증 - 그리고 VAT 면제 기업(유효한 VAT 번호를 가진 기업 등)에 대한 역과세;

해당 애드온을 설치하려면 **Ultimate Multisite > Settings**로 이동한 뒤 사이드바에서 **Check our Add-ons** 링크를 클릭합니다.

![Settings page with add-ons sidebar link](/img/config/settings-taxes.png)

그곳에서 **Ultimate Multisite VAT add-on**을 검색하고 설치할 수 있습니다.

![VAT add-on on the add-ons page](/img/config/settings-taxes.png)

![VAT add-on install dialog](/img/config/settings-taxes.png)

그런 다음 **Network Admin > Plugins**로 이동해 해당 애드온을 네트워크 전체에서 활성화합니다.

![Network Activate the VAT add-on](/img/config/settings-taxes.png)

**Tax Settings tab**으로 돌아가면 새로운 옵션이 표시됩니다. **Enable VAT Support** 옵션을 토글해 새로운 VAT 도구를 활성화하세요. **save**를 잊지 말고 설정을 저장하세요!

![Enable VAT Support toggle in tax settings](/img/config/settings-taxes.png)

### VAT 세율 불러오기

우리 통합이 제공하는 도구 중 하나는 EU 회원국의 세율을 불러오는 기능입니다. 이는 EU 부가가치세 지원을 활성화한 후 세율 편집기 페이지를 방문하면 수행할 수 있습니다.

페이지 하단에서 VAT 불러오기 옵션을 확인할 수 있습니다. 요율 유형을 선택하고 **Update EU VAT Rates** 버튼을 클릭하면 각 EU 회원국의 세율이 표에 자동으로 채워집니다. 그 다음에는 저장만 하면 됩니다.

### ![VAT rates pulling options with Update EU VAT Rates button](/img/config/settings-taxes.png)

불러온 값을 편집할 수도 있습니다. 편집하려면 필요한 표 행을 수정한 뒤 새 값을 저장하면 됩니다.

### VAT 검증

VAT 지원이 활성화되면 Ultimate Multisite는 결제 양식에 청구 주소 필드 아래에 추가 필드를 추가합니다. 이 필드는 EU에 있는 고객에게만 표시됩니다.

![VAT number field on the checkout form](/img/config/settings-taxes.png)

Ultimate Multisite는 VAT 번호를 검증하고 유효한 경우 역과세 메커니즘이 적용되어 해당 주문의 세율이 0%로 설정됩니다.
