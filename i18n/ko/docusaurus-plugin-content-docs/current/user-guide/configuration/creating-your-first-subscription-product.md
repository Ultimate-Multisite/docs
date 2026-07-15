---
title: 첫 번째 구독 상품 만들기
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# 첫 Subscription Product 만들기 (v2)

_**중요 참고: 이 문서는 Ultimate Multisite version 2.x 사용자를 위한 것입니다. version 1.x를 사용 중이라면,**_ **_**이 문서를 참조하세요**_**.

네트워크 운영을 시작하고 잠재 사용자에게 서비스를 판매하려면 다양한 구독 옵션이 필요합니다. 이러한 상품은 어떻게 만들까요? 제공할 수 있는 상품 유형은 무엇일까요? 이 문서에서는 상품에 대해 알아야 할 모든 것을 다룹니다.

## 상품 유형 {#product-type}

Ultimate Multisite를 사용하면 클라이언트에게 두 가지 범주의 상품을 제공할 수 있습니다: **요금제**와 **추가 기능** **(Order Bump)**. 추가 기능은 두 가지 유형으로 나눌 수 있습니다:**패키지**와 **서비스**. 다음에서 차이점과 특징을 살펴보겠습니다.

  * **요금제** : Ultimate Multisite의 기본 상품입니다. 클라이언트는 요금제에 연결된 경우에만 멤버십을 가질 수 있습니다. 요금제는 상품 편집 페이지에서 설정한 제한 사항에 따라 클라이언트에게 하나 이상의 사이트를 제공합니다(이는 요금제 설정에 따라 달라집니다).

  * **패키지** : Ultimate Multisite 요금제의 기능에 직접적인 영향을 주는 추가 기능입니다. 클라이언트가 구매한 원래 요금제의 제한을 변경하거나 새 리소스, plugins 또는 themes를 추가합니다. 예를 들어 기본 요금제가 월 1,000회 방문을 허용한다면, 이 수를 10,000회로 확장하는 패키지를 제공할 수 있습니다.

  * **서비스:** Ultimate Multisite의 기능을 변경하지 않는 추가 기능입니다. 클라이언트가 구매한 요금제에 더해 클라이언트를 위해 수행할 작업입니다. 예를 들어 고객이 단일 사이트를 허용하는 요금제를 구매하고, 이 사이트 디자인을 만들어 줄 추가 서비스 비용도 지불할 수 있습니다.

## 상품 관리 {#managing-products}

많은 경우 Ultimate Multisite의 **Products** 탭 **(Ultimate Multisite > Products)** 은 전통적인 호스팅 환경의 요금제와 동일하게 볼 수 있습니다.

Ultimate Multisite 내에서 Products 탭은 특정 상품 또는 서비스에 적용되는 구성과 제한 사항을 정의합니다. 이러한 구성에는 상품 또는 서비스 설명, 가격, 세금, 권한이 포함됩니다.

이 섹션은 Ultimate Multisite의 이 필수적인 기반 요소를 이해하는 데 도움을 줄 것입니다.

![상품 목록 페이지](/img/config/products-list.png)

## 상품 추가 {#adding-products}

요금제, 패키지 또는 서비스 여부와 관계없이 새 항목을 정의하는 진입점은 **Ultimate Multisite > Products > Add Product**를 통해 이루어집니다.

![Add Product 버튼](/img/config/product-add-button.png)

인터페이스에는 두 가지 주요 섹션이 있습니다. 왼쪽에는 상품 정의를 돕는 여러 탭이 있으며, 오른쪽에는 상품의 기본 가격, 활성 상태, 상품 이미지를 정의하는 몇 가지 섹션이 있습니다.

![상품 편집 페이지 개요](/img/config/product-edit-full.png)

### 설명 {#description}

기본 상품 정보는 상품 이름과 설명을 제공하여 정의할 수 있습니다. 이러한 식별자는 요금제 및 가격 선택, 청구서, 업그레이드 등 상품 정보가 필요한 모든 곳에 표시됩니다.

![상품 설명 섹션](/img/config/product-description.png)

### 가격 유형 {#pricing-type}

인터페이스의 오른쪽에서 기본 가격을 정의할 수 있습니다.

![가격 및 저장 섹션](/img/config/product-pricing-save.png)

Ultimate Multisite는 세 가지 다른 가격 유형을 지원합니다. **유료** 옵션은 네트워크 관리자에게 상품 가격 및 청구 빈도에 관한 정보를 입력하도록 요청합니다.

### 가격 {#pricing}

가격 구성 요소는 기본 상품 가격과 청구 간격을 정의합니다.

![가격 및 저장 섹션](/img/config/product-pricing-save.png)

따라서 1개월 설정에 $29.99의 예시 가격을 지정하면 매월 $29.99가 청구됩니다. 마찬가지로 3개월 설정에 $89.97의 가격을 지정하면 매 분기마다 해당 금액이 청구됩니다.

### 청구 주기 {#billing-cycles}

청구 주기 섹션은 앞서 언급한 청구 간격의 빈도를 지정하며, 일반적으로 계약 또는 고정 기간의 관점에서 이해됩니다.

![가격 및 저장 섹션](/img/config/product-pricing-save.png)

예를 들어, 상품 가격이 $29.99이고 간격이 1개월이며 청구 주기가 12회인 경우, 이후 12개월 동안 해당 상품에 대해 매월 $29.99가 청구됩니다. 즉, 이러한 설정은 12개월 동안 월 $29.99의 고정 가격 기간을 설정한 뒤 청구를 중단합니다.

### 체험 기간 {#trial-period}

체험 제공 토글을 활성화하면 네트워크 관리자가 상품의 체험 기간을 정의할 수 있습니다.

![가격 및 저장 섹션](/img/config/product-pricing-save.png)

체험 기간 동안 고객은 상품을 무료로 사용할 수 있으며, 체험 기간이 종료될 때까지 청구되지 않습니다.

### 설정 수수료 {#setup-fee}

요금제에 설정 수수료를 적용할 수도 있습니다.

![가격 및 저장 섹션](/img/config/product-pricing-save.png)

이는 클라이언트가 첫 청구 시 (요금제 가격에 더해) 이 섹션에서 정의한 수수료에 해당하는 추가 금액을 지불한다는 의미입니다.

### 활성 {#active}

활성 토글은 상품이 신규 가입 고객에게 제공되는지 여부를 사실상 정의합니다.

![활성 토글](/img/config/product-active.png)

이 요금제에 기존 고객이 있는 경우 토글을 비활성화 상태로 설정하면 해당 요금제가 사실상 기존 고객에게만 유지되며 향후 가입에서는 제거됩니다. **요금제의 기존 고객은** 새 요금제로 전환되거나 해당 요금제에서 제거될 때까지 **계속 청구됩니다**.

### 상품 이미지 {#product-image}

**Upload Image** 버튼을 사용하면 네트워크 관리자가 미디어 라이브러리를 활용하여 상품 이미지를 선택하거나 업로드할 수 있습니다.

![상품 이미지 섹션](/img/config/product-image.png)

### 삭제 {#delete}

**Delete Product** 버튼은 시스템에서 상품을 삭제합니다. 상품이 게시되면 표시됩니다.

![상품 삭제 섹션](/img/config/product-delete.png)

다른 삭제와 달리 상품은 휴지통 상태로 이동하지 않습니다. 따라서 한 번 삭제하면 작업을 되돌릴 수 없습니다.

### 상품 옵션 {#product-options}

기본 수준의 product 정보가 정의되면, product 옵션은 네트워크 관리자가 product의 특정 속성을 추가로 정의하는 데 도움이 됩니다.

#### 일반 {#general}

**General** 탭은 다른 product별 탭에 적용되지 않는 product의 일반 속성을 정의합니다.

![General 탭](/img/config/product-general-tab.png)

자명한 **product slug**는 Ultimate Multisite의 URL 및 기타 영역에서 product를 식별하는 데 사용되는 slug를 정의합니다.

Ultimate Multisite는 Plan, Package, Service라는 여러 product 유형을 지원합니다. **Product Options** 탭은 지정된 product 유형에 따라 동적으로 조정됩니다.

**Customer Role**은 사이트가 생성될 때 고객에게 할당되는 역할을 지정합니다. 일반적으로 대부분의 네트워크 관리자에게 이는 Ultimate Multisite 기본값 또는 Administrator가 됩니다. Ultimate Multisite 기본 역할은 **Ultimate Multisite > Settings > Login & Registration**에서 설정할 수 있습니다.

![Customer role 설정](/img/config/product-customer-role-settings.png)

#### 업그레이드 및 다운그레이드 {#up--downgrades}

이 탭은 고객이 자신의 특정 등급 내에서 이용할 수 있는 업그레이드 및 다운그레이드 경로를 지정합니다.

이 개념을 이해하기 위해, 특정 분야의 Ultimate Multisite 설치가 고객에게 학습 관리 솔루션을 제공하는 예를 생각해 보겠습니다. 이를 위해 세 가지 plan(Basic, Plus, Premium)이 정의되고 각 plan에 대해 특정 plugin이 활성화됩니다(plugin을 활성화하는 방법은 이 섹션의 뒷부분을 참조하세요).

Ultimate Multisite 설치가 비즈니스 웹사이트나 eCommerce 웹사이트도 서비스하는 경우, 해당 plan에는 다른 plugin을 설치하고 활성화해야 할 수 있습니다.

이러한 측면에서, eLearning 고객이 eCommerce plan으로 전환하도록 허용하는 것은 바람직하지 않고 문제가 될 수 있습니다. 이러한 plan, 가격, 제한 사항이 적절하지 않을 수 있기 때문입니다.

따라서 고객의 경로를 제한하고 사고를 방지하기 위해 네트워크 관리자는 plan 그룹을 정의하고 그 그룹 내에서 고객이 전환할 수 있는 plan을 지정할 수 있습니다.

![업그레이드 및 다운그레이드 탭](/img/config/product-upgrades.png)

plan 그룹을 정의하려면 **plan group** 목록 내에서 호환되는 plan을 지정하세요. **product order**는 plan이 가장 낮은 것부터 가장 높은 것까지 어떤 순서로 정렬되고 표시되는지를 결정합니다.

Ultimate Multisite에는 적절한 추가 product와 서비스를 plan에 추가할 수 있는 **order bump** 기능도 포함되어 있습니다. 이러한 항목은 checkout 시 또는 업그레이드 중에 plan에 추가할 수 있는 추가 항목으로 고객에게 제공됩니다.

#### 가격 변형 {#price-variations}

가격 변형을 사용하면 네트워크 관리자가 기간에 따라 대체 가격 등급을 지정할 수 있습니다. 이 설정을 통해 동일한 product에 대해 월간, 분기별, 연간 또는 기타 청구 기간을 제공할 수 있습니다. 예를 들어, 월 $29.99의 product를 설정하고 연 $249.99의 할인된 연간 옵션을 제공할 수 있습니다.

![Price Variations 탭](/img/config/product-price-variations-tab.png)

가격 변형을 설정하려면 **Enable Price Variations** 토글을 활성 상태로 설정하고 **Add new Price Variation** 버튼을 클릭하세요.

![Product 가격 변형](/img/config/product-price-variations.png)

변형을 입력하려면 변형의 기간, 주기, 가격을 설정하세요. 버튼을 다시 클릭하여 추가 변형을 입력할 수 있습니다.

예를 들어, 기본 product 가격이 월 $29.99라면 다음을 추가할 수 있습니다.

  * **3개월** $79.99(월간 대비 소폭 할인)
  * **1년** $249.99(연간 약정에 대한 상당한 할인)

:::tip Frontend에 청구 기간 토글 표시하기

가격 변형만으로는 frontend checkout에 토글이나 스위치가 추가되지 않습니다. 고객이 청구 기간(예: 월간 / 연간)을 전환할 수 있도록 하려면 checkout 양식에 **Period Selection** 필드를 추가해야 합니다. 단계별 지침은 [Checkout Forms: 기간 선택 토글 추가하기](checkout-forms#adding-a-period-selection-toggle)를 참조하세요.
:::

#### 세금 {#taxes}

**Taxes** 탭은 **Ultimate Multisite > Settings > Taxes**에 지정된 세금 설정, 더 구체적으로는 정의된 세율과 연동됩니다. 세금을 활성화하고 적용 가능한 세율을 정의하려면 **Ultimate Multisite: Settings** 문서를 참조하세요.

![Taxes 탭](/img/config/product-taxes.png)

이전 예시에서는 California(United States of America)의 고객에게 적용되는 7.25%의 지역 세율을 정의했습니다.

세율이 **Ultimate Multisite > Settings > Manage Tax Rates**에 정의되면 product 수준에서 선택할 수 있습니다.

![Taxes 탭](/img/config/product-taxes.png)

product가 과세 대상 항목임을 나타내려면 **Is Taxable** 토글을 활성 상태로 설정하고 Tax Category 드롭다운에서 적용 가능한 세율을 선택하세요.

#### 사이트 템플릿 {#site-templates}

본질적으로 사이트 템플릿은 subscription 시작 시 고객의 사이트로 복제되는 완전한 WordPress 웹사이트입니다.

![Site Templates 탭](/img/config/product-site-templates.png)

네트워크 관리자는 활성화 및 구성된 theme, plugin, 콘텐츠를 갖춘 일반 WordPress 사이트처럼 템플릿 사이트를 생성하고 구성합니다. 템플릿 사이트는 고객에게 그대로 복제됩니다.

이 탭을 통해 네트워크 관리자는 새 subscription 시 사이트 템플릿의 동작을 지정할 수 있습니다. 이 plan에 사이트 템플릿을 사용하려면 **Allow Site Templates** 토글을 활성 상태로 설정하세요.

**Allow Site Templates**가 비활성화되면 checkout 양식, 공유 가능한 링크 또는 URL 매개변수에서 템플릿을 사용할 수 있게 하더라도 해당 plan의 고객은 템플릿을 선택할 수 없습니다. 이제 Ultimate Multisite는 사용 가능한 진입점 전반의 fallback 체인을 통해 이 제한을 적용합니다. plan 설정을 먼저 확인한 다음 checkout 양식 템플릿 설정, 그다음 사전 선택되었거나 URL로 제공된 템플릿을 확인합니다. 이를 통해 plan 제한이 일관되게 유지되고, 템플릿을 제공해서는 안 되는 product에 템플릿이 표시되는 것을 방지합니다.

**사이트 템플릿 선택 모드**는 구독 과정에서 사이트 템플릿의 동작을 정의합니다.

**D** **efault** 설정은 결제 양식의 단계를 따릅니다. 네트워크 관리자가 결제 과정에서 템플릿 선택 단계를 정의했고 해당 단계가 템플릿과 함께 정의된 경우, 이 설정은 결제 단계에서 설정된 지시를 따릅니다.

**A** **ssign Site Template**을 지정하면 지정된 템플릿 선택이 강제됩니다. 따라서 결제 과정의 모든 템플릿 선택 단계가 제거됩니다.

마지막으로, **C** **hoose Available Site Templates**는 결제 단계에서 지정된 템플릿을 이 설정에서 선택한 템플릿으로 재정의합니다. 고객의 선택을 돕기 위해 미리 선택된 템플릿도 정의할 수 있습니다.

궁극적으로 네트워크 관리자가 결제 단계에서 템플릿 선택이 이루어지기를 원한다면 ' _default_ ' 설정이면 충분합니다. 또는 템플릿 선택을 제거하고 잠그며 선택을 플랜 설정에 위임하려면 ' _assign new template_ ' 또는 ' _choose available site templates_ ' 옵션이 바람직할 수 있습니다.

#### 사이트 {#sites}

**사이트** 탭은 Ultimate Multisite의 제한 기능의 일부입니다.

![사이트 탭](/img/config/product-sites.png)

이 설정은 고객이 멤버십 아래에서 만들 수 있는 최대 사이트 수를 지정합니다.

제한을 활성화하려면 **사이트 제한** 토글을 활성 상태로 설정하고 **사이트 허용량** 필드에 최대 사이트 수를 지정합니다.

#### 방문 {#visits}

**방문** 탭은 Ultimate Multisite의 제한 시스템의 추가 부분입니다. 이 설정을 통해 고객 사이트의 고유 방문자를 집계하고 이후 제한할 수 있습니다.

![방문 탭](/img/config/product-visits.png)

마케팅 관점에서 네트워크 관리자는 한도에 도달하면 고객이 플랜을 업그레이드하도록 유도하는 수단으로 이 설정을 활용할 수 있습니다. 또한 이 설정은 네트워크 관리자가 시스템 리소스를 보존하기 위해 사이트에 대한 과도한 트래픽을 억제하고 방지하는 데 도움을 줄 수 있습니다.

이 기능을 사용하려면 **고유 방문 제한** 토글을 활성 상태로 설정하고 **고유 방문 할당량** 필드에 고유 방문자의 최대 수를 지정합니다.

이 한도에 도달하면 Ultimate Multisite는 한도를 초과했다는 메시지를 표시하는 대신 고객의 사이트 제공을 중단합니다.

#### 사용자 {#users}

Ultimate Multisite의 '사용자' 제한은 네트워크 관리자가 생성되어 역할에 할당될 수 있는 사용자 수에 제한을 부과할 수 있게 합니다.

![사용자 탭](/img/config/product-users.png)

제한 기능을 활성화하려면 **사용자 제한** 토글을 오른쪽으로 밀어 활성 상태로 설정합니다.

다음으로 제한할 각 역할에 대해, 그 옆의 토글을 활성 상태로 설정하고 적절한 필드에 최대 상한을 정의합니다.

#### 게시물 유형 {#post-types}

**게시물 유형** 탭은 네트워크 관리자가 WordPress 내의 광범위한 게시물 유형 배열에 세분화된 제한을 부과할 수 있게 합니다.

![게시물 유형 탭](/img/config/product-post-types.png)

WordPress의 구조상 게시물과 게시물 유형은 핵심 기능의 중요한 구성 요소이므로, Ultimate Multisite의 제한 시스템은 네트워크 관리자가 제한을 설정하고 유지하는 데 도움을 주도록 설계되었습니다.

이 제한 하위 시스템을 활성화하려면 **게시물 유형 제한** 토글을 오른쪽으로 밀어 활성 상태로 설정합니다.

다음으로, 제한할 각 게시물 유형에 대해 오른쪽으로 밀어 켜고 적절한 필드에 최대 상한을 지정합니다.

#### 디스크 공간 {#disk-space}

**디스크 공간** 탭은 네트워크 관리자가 고객이 사용하는 공간을 제한할 수 있게 합니다.

![디스크 공간 탭](/img/config/product-disk-space.png)

일반적으로 WordPress 멀티사이트에서는 핵심 파일이 모든 사이트 간에 공유되며, 미디어 파일과 업로드를 위해 개별 디렉터리가 생성되고 이러한 설정과 제한이 적용됩니다.

디스크 사용량 제한을 활성화하려면 **사이트당 디스크 크기 제한** 토글을 오른쪽으로 밀어 활성 상태로 설정합니다.

다음으로 **디스크 공간 허용량** 필드에 메가바이트 단위로 최대 상한을 지정합니다.

#### 사용자 지정 도메인 {#custom-domain}

이 옵션을 토글하면 이 플랜에서 특별히 사용자 지정 도메인을 허용할 수 있습니다.

![사용자 지정 도메인 탭](/img/config/product-custom-domains.png)

#### 테마 {#themes}

제품 옵션 내의 **테마** 탭은 네트워크 관리자가 고객이 선택할 수 있도록 테마를 제공하고 선택적으로 테마의 상태를 강제할 수 있게 합니다.

![테마 탭](/img/config/product-themes.png)

_**참고: 테마를 고객에게 제공하려면 네트워크 관리자가 네트워크에서 활성화해야 합니다.**_

![네트워크 테마 페이지](/img/config/product-themes-network-enabled.png)

**표시 여부** 옵션은 고객이 자신의 사이트 내 **외모 > 테마** 탭을 볼 때 이 테마가 표시되는지 여부를 정의합니다. 이 옵션을 **숨김**으로 설정하면 테마가 보기에서 제거되어 선택하고 활성화할 수 있는 기능이 제한됩니다.

![테마 탭](/img/config/product-themes.png)

**동작** 선택은 네트워크 관리자가 고객 사이트 생성 시 테마의 상태를 정의할 수 있게 합니다.

**A** **vailable** 상태에서는 고객이 직접 활성화할 수 있도록 테마가 제공됩니다. 반대로 **사용할 수 없음** 상태는 고객이 테마를 활성화할 수 있는 기능을 제거합니다. 마지막으로 **강제 활성화** 옵션은 테마의 선택과 활성화를 강제하여 사이트 생성 시 기본값으로 설정합니다.

#### 플러그인 {#plugins}

Themes 탭과 유사하게, Ultimate Multisite는 네트워크 관리자가 고객에게 plugin의 표시 여부와 새 사이트 생성 시 plugin의 상태를 정의할 수 있게 합니다.

![플러그인 탭](/img/config/product-plugins.png)

**표시 여부** 드롭다운을 통해 고객이 자신의 사이트에서 Plugins 메뉴 옵션을 통해 볼 때 plugin을 표시하거나 숨길 수 있습니다.

네트워크 관리자는 동작 드롭다운의 옵션을 사용하여 plugins의 동작을 추가로 조작할 수 있습니다.

![Plugins 탭](/img/config/product-plugins.png)

**Default** 선택은 고객이 선택한 사이트 템플릿에 정의된 plugin 상태를 따릅니다. 따라서 템플릿 내에서 활성화된 plugins는 템플릿이 고객의 사이트로 복제될 때도 활성화된 상태로 유지됩니다.

**Force Activate**는 사이트 생성 시 plugin을 활성 상태로 두며, 반대로 **Force Inactivate**는 사이트 생성 시 plugin을 비활성화합니다. 이 두 경우 모두 고객은 WordPress Plugins 메뉴를 통해 plugin의 상태를 수동으로 변경할 수 있습니다.

**Force Activate & Lock** 설정은 유사하게 작동하지만, 고객이 plugin 상태를 변경하지 못하도록 방지합니다. 따라서 Force Activate and Lock 설정은 plugin을 활성 상태로 강제하고 고객이 비활성화하지 못하게 합니다. 마찬가지로 **Force Inactivate & Lock** 설정은 plugin을 비활성 상태로 강제하고 사용자가 plugin을 활성화하지 못하게 합니다.

네트워크 관리자는 Force Activate & Lock 및 Force Inactivate & Lock 설정을 사이트 템플릿과 함께 고려할 수 있습니다. 선택된 경우 템플릿 내의 plugins 및 plugin 상태가 이러한 설정의 영향을 받을 수 있기 때문입니다.

#### 제한 초기화 {#reset-limitations}

**Reset Limitations** 탭은 product에 정의된 모든 사용자 지정 제한을 초기화합니다. 제한을 초기화하려면 **reset limitations** 버튼을 클릭하세요.

![Reset Limitations 탭](/img/config/product-reset-limitations.png)

작업을 확인하려면 **confirm reset** 토글을 오른쪽의 활성 상태로 밀고 **reset limitations** 버튼을 클릭하세요.

![Reset Limitations 탭](/img/config/product-reset-limitations.png)

## product 편집, 복제 또는 삭제 {#edit-duplicate-or-delete-product}

기존 products는 **Ultimate Multisite > Products**로 이동한 뒤 기존 product 이름 위에 마우스를 올려 편집, 복제 또는 삭제할 수 있습니다.

![product 마우스 오버 작업](/img/config/product-hover-actions.png)
