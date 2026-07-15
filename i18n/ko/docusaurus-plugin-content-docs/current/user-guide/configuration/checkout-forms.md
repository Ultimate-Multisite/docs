---
title: 결제 양식
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# 결제 양식

결제 양식은 새 고객으로 전환하려고 할 때 다양한 접근 방식을 실험할 수 있는 쉽고 유연한 방법입니다.

Ultimate Multisite 2.0은 원하는 만큼 많은 양식을 만들 수 있고, 서로 다른 필드, 제공 상품 등을 설정할 수 있는 결제 양식 편집기를 제공합니다.

이 기능에 접근하려면 왼쪽 사이드바의 결제 양식 메뉴로 이동하세요.

![결제 양식 목록](/img/config/checkout-forms-list.png)

이 페이지에서 보유한 모든 결제 양식을 확인할 수 있습니다.

목록 표에는 각 양식이 현재 고객에게 제공되는지 확인할 수 있도록 **상태** 열이 포함되어 있습니다.

| 상태 | 의미 |
|---|---|
| **활성** | 해당 양식의 쇼트코드 또는 등록 페이지가 게시된 곳 어디에서나 양식을 사용할 수 있습니다. |
| **비활성** | 양식은 저장되어 있지만 비활성화되어 있습니다. 다시 활성화하기 전까지 고객은 이 양식으로 결제를 완료할 수 없습니다. |

공개 등록 흐름을 편집하기 전에, 특히 초안 또는 시즌별 결제 양식을 실제 운영 중인 양식과 함께 보관하는 경우 상태 열을 사용하세요.

새 양식을 만들고 싶다면 페이지 상단의 결제 양식 추가를 클릭하기만 하면 됩니다.

시작 지점으로 단일 단계, 다단계 또는 빈 양식 중 하나를 선택할 수 있습니다. 그런 다음 편집기로 이동을 클릭하세요.

시작 지점으로 **단일 단계** 또는 **다단계**를 선택하면 양식 템플릿에 기본적으로 **템플릿 선택** 필드가 포함됩니다. 이 필드를 통해 고객은 등록 과정에서 사이트 템플릿을 선택할 수 있습니다. 편집기의 다른 필드처럼 그대로 두거나, 제거하거나, 위치를 변경할 수 있습니다.

![결제 양식 편집기](/img/config/checkout-form-editor.png)

또는 이름 아래의 옵션을 클릭하여 이미 보유한 양식을 편집하거나 복제할 수 있습니다. 그곳에서 양식의 쇼트코드를 복사하거나 양식을 삭제하는 옵션도 찾을 수 있습니다.

![결제 양식 마우스오버 작업](/img/config/checkout-form-hover-actions.png)

#### 결제 양식 편집기 개요 {#checkout-form-editor-overview}

결제 양식 편집기는 등록 양식을 만들기 위한 포괄적인 인터페이스를 제공합니다. 다음은 편집기 레이아웃의 개요입니다.

![결제 양식 편집기 개요](/img/config/checkout-form-editor-overview.png)

### 결제 양식 편집하기 {#editing-a-checkout-form}

다양한 목적의 결제 양식을 만들 수 있습니다. 이 예시에서는 등록 양식을 작업하겠습니다.

결제 양식 편집기로 이동한 후, 양식 이름(내부 참조용으로만 사용됨)과 슬러그(예: 쇼트코드를 만드는 데 사용됨)를 지정하세요.

![결제 양식 편집기](/img/config/checkout-form-editor.png)

양식은 단계와 필드로 구성됩니다. 새 결제 단계 추가를 클릭하여 새 단계를 추가할 수 있습니다.

![새 결제 단계 추가](/img/config/checkout-form-add-step.png)

모달 창의 첫 번째 탭에서 양식 단계의 내용을 입력하세요. ID, 이름, 설명을 지정합니다. 이러한 항목은 대부분 내부적으로 사용됩니다.

![결제 양식 단계 콘텐츠 탭](/img/config/checkout-form-step-content.png)

다음으로 단계의 표시 여부를 설정하세요. "항상 표시", "로그인한 사용자에게만 표시" 또는 "게스트에게만 표시" 중에서 선택할 수 있습니다.

![결제 양식 단계 표시 여부 탭](/img/config/checkout-form-step-visibility.png)

마지막으로 단계 스타일을 구성하세요. 이 필드들은 선택 사항입니다.

![결제 양식 단계 스타일 탭](/img/config/checkout-form-step-style.png)

이제 첫 번째 단계에 필드를 추가할 차례입니다. 새 필드 추가를 클릭하고 원하는 섹션 유형을 선택하기만 하면 됩니다.

![필드가 있는 결제 양식 단계](/img/config/checkout-form-step-with-fields.png)

각 필드에는 입력해야 하는 서로 다른 매개변수가 있습니다. 이 첫 번째 항목에서는 "사용자 이름" 필드를 선택하겠습니다.

![필드 유형 선택 드롭다운](/img/config/checkout-form-field-type-dropdown.png)

![사용자 이름 필드 콘텐츠 설정](/img/config/checkout-form-username-content.png)

![사용자 이름 필드 표시 여부 설정](/img/config/checkout-form-username-visibility.png)

![사용자 이름 필드 스타일 설정](/img/config/checkout-form-username-style.png)

필요한 만큼 단계와 필드를 추가할 수 있습니다. 고객이 상품을 선택할 수 있도록 상품을 표시하려면 가격표 필드를 사용하세요. 클라이언트가 템플릿을 선택할 수 있게 하려면 템플릿 선택 필드를 추가하세요. 이와 같은 방식으로 진행하면 됩니다.

![새 필드 추가 대화 상자](/img/config/checkout-form-add-field-dialog.png)

_**참고:** 사용자 이름, 이메일, 비밀번호, 사이트 제목, 사이트 URL, 주문 요약, 결제, 제출 버튼은 결제 양식을 만들기 위한 필수 필드입니다._

결제 양식을 작업하는 동안 미리보기 버튼을 사용하여 클라이언트가 양식을 어떻게 보게 될지 언제든지 확인할 수 있습니다. 또한 기존 사용자 또는 방문자로 보기 간에 전환할 수도 있습니다

![결제 양식 미리보기 버튼](/img/config/checkout-form-preview-button.png)

![결제 양식 미리보기 모달](/img/config/checkout-form-preview-modal.png)

마지막으로, 고급 옵션에서 "감사합니다" 페이지의 메시지를 구성하고, 전환 추적용 스니펫을 추가하고, 결제 양식에 사용자 지정 CSS를 추가하거나, 특정 국가로 제한할 수 있습니다.

![고급 옵션](/img/config/checkout-form-advanced.png)

오른쪽 열에서 이 옵션을 전환하여 결제 양식을 수동으로 활성화하거나 비활성화할 수도 있고, 양식을 영구적으로 삭제할 수도 있습니다.

![활성 토글](/img/config/checkout-form-active.png)

양식을 삭제하려면 양식 작업에서 삭제 옵션을 클릭하세요.

![결제 양식 삭제 옵션](/img/config/checkout-form-delete.png)

결제 양식을 저장하는 것을 잊지 마세요!

![저장 버튼](/img/config/checkout-form-save.png)

양식의 쇼트코드를 가져오려면 쇼트코드 생성을 클릭하고 모달 창에 표시된 결과를 복사하세요.

![쇼트코드가 있는 저장 버튼](/img/config/checkout-form-save.png)

### 가격표 필드 {#the-pricing-table-field}

**가격표** 필드는 고객이 요금제를 선택할 수 있도록 결제 양식에 상품을 표시합니다. 이 필드를 편집할 때 여러 옵션을 구성할 수 있습니다.

![가격표 필드 설정](/img/config/pricing-table-field-settings.png)

프런트엔드 등록 양식에서 가격표가 표시되는 방식은 다음과 같습니다:

![Frontend checkout 가격표](/img/config/frontend-checkout-pricing-table.png)

  * **상품**: 표시할 상품과 표시 순서를 선택합니다.
  * **서로 다른 기간 강제 적용**: 활성화하면 현재 선택된 청구 기간에 일치하는 가격 변형이 있는지와 관계없이 모든 상품이 표시됩니다. 비활성화하면(기본값) 선택된 기간에 대한 변형이 없는 상품은 숨겨집니다.
    ![가격표 기간 강제 적용 옵션](/img/config/pricing-table-force-durations.png)
  * **미리 선택된 경우 숨기기**: URL을 통해 플랜이 이미 선택된 경우(예: `/register/premium`) 가격표를 숨깁니다.
  * **가격표 템플릿**: 가격표의 시각적 템플릿을 선택합니다(단순 목록, 레거시 등).

양식에 해당 상품의 checkout 흐름을 완료하는 데 필요한 필드가 포함되기 전에 상품을 가격표에 추가하면, 편집기에 이제 경고가 표시됩니다. 라이브 등록 양식의 변경 사항을 게시하거나 저장하기 전에 이 경고를 사용해 누락된 필수 필드를 추가하세요.

### 기간 선택 토글 추가하기 {#adding-a-period-selection-toggle}

상품에 [가격 변형](creating-your-first-subscription-product#price-variations)을 구성한 경우(예: 월간 및 연간 가격), checkout 양식에 **기간 선택** 필드를 추가할 수 있습니다. 이 필드는 고객이 청구 기간을 전환할 수 있는 토글을 표시하며, 가격표는 실시간으로 동적으로 업데이트됩니다.

#### 1단계: 상품에 가격 변형 설정하기 {#step-1-set-up-price-variations-on-your-products}

기간 선택 필드를 추가하기 전에 상품에 가격 변형이 구성되어 있는지 확인하세요. **Ultimate Multisite > 상품**으로 이동해 상품을 편집한 다음, **가격 변형** 탭으로 이동하여 대체 청구 기간(예: 할인된 가격의 연간)을 추가합니다.

![상품의 가격 변형 탭](/img/config/product-price-variations-tab.png)

#### 2단계: checkout 양식에 기간 선택 필드 추가하기 {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. **Ultimate Multisite > Checkout 양식**으로 이동해 checkout 양식을 편집합니다.

2. **가격표** 필드가 포함된 단계까지 아래로 스크롤하고 **새 필드 추가**를 클릭합니다.

3. 필드 유형 선택 대화 상자에서 **기간 선택**을 클릭합니다.

![기간 선택을 보여주는 새 필드 추가 대화 상자](/img/config/checkout-form-add-field-dialog.png)

4. 기간 옵션을 구성합니다. 각 옵션에는 다음이 필요합니다:
   * **기간**: 숫자(예: `1`)
   * **기간 단위**: 기간 유형(일, 주, 월 또는 년)
   * **레이블**: 고객에게 표시될 텍스트(예: "월간", "연간")

5. 기간 선택지를 더 추가하려면 **+ 옵션 추가**를 클릭합니다. 이 옵션들은 상품에 구성한 가격 변형과 일치해야 합니다.

![기간 선택 필드 설정](/img/config/period-selection-field-settings.png)

6. **기간 선택기 템플릿**을 선택합니다(Clean이 기본값이며, 사용자 지정 CSS에 바로 사용할 수 있는 단순한 스타일의 선택기를 렌더링합니다).

7. **필드 저장**을 클릭합니다.

#### 3단계: 가격표 위에 필드 배치하기 {#step-3-position-the-field-above-the-pricing-table}

최상의 사용자 경험을 위해 checkout 단계에서 기간 선택 필드가 가격표 필드 **앞에** 표시되도록 하세요. checkout 양식 편집기에서 필드를 드래그하여 순서를 변경할 수 있습니다. 이렇게 하면 고객은 먼저 청구 기간을 선택한 다음 해당 기간의 가격을 확인합니다.

![필드 순서를 보여주는 checkout 양식 편집기](/img/config/checkout-form-editor-with-fields.png)

#### Frontend에서 작동하는 방식 {#how-it-works-on-the-frontend}

구성이 완료되면 등록 페이지를 방문한 고객은 가격표 위에 기간 선택기를 보게 됩니다. 다른 청구 기간을 클릭하면:

  * 가격표가 즉시 업데이트되어 선택한 기간의 가격을 표시합니다(페이지 새로고침 필요 없음).
  * 가격표 필드에서 **서로 다른 기간 강제 적용**이 비활성화되어 있으면, 선택한 기간에 대한 가격 변형이 없는 상품은 숨겨집니다.
  * **서로 다른 기간 강제 적용**이 활성화되어 있으면, 선택한 기간에 대한 변형이 없어도 모든 상품이 계속 표시됩니다(기본 가격이 표시됩니다).

#### URL을 통해 청구 기간 미리 선택하기 {#pre-selecting-a-billing-period-via-url}

URL을 통해 상품과 청구 기간을 미리 선택할 수도 있습니다. Ultimate Multisite는 다음 URL 패턴을 지원합니다:

  * `/register/premium` — "Premium" 상품만 미리 선택합니다
  * `/register/premium/12` — 상품과 12개월 기간을 미리 선택합니다
  * `/register/premium/1/year` — 1년 기간으로 상품을 미리 선택합니다

### 템플릿 선택 필드 {#the-template-selection-field}

**템플릿 선택** 필드를 통해 고객은 checkout 중에 사이트 템플릿을 선택할 수 있습니다. 이제 Ultimate Multisite v2.6.1에 추가된 **단일 단계** 및 **다단계** checkout 양식 템플릿에 기본으로 포함됩니다.

#### 필드 수동 추가하기 {#adding-the-field-manually}

v2.6.1 이전에 생성된 양식으로 작업 중이거나 빈 템플릿에서 시작한 경우:

1. **Ultimate Multisite > Checkout 양식**으로 이동해 checkout 양식을 편집합니다.
2. 사이트 세부 정보가 수집되는 단계에서 **새 필드 추가**를 클릭합니다.
3. 필드 유형 대화 상자에서 **템플릿 선택**을 선택합니다.
4. 필드를 구성합니다:
   - **레이블** — 고객이 템플릿 그리드 위에서 보는 제목(예: "사이트 템플릿 선택").
   - **필수** — 고객이 계속 진행하기 전에 템플릿을 선택해야 하는지 여부.

#### 작동 방식 {#how-it-works}

고객이 checkout 중 템플릿을 선택하면, Ultimate Multisite는 새 사이트를 프로비저닝할 때 해당 템플릿을 사용합니다. 표시되는 템플릿은 **사이트 템플릿** 목록(**Ultimate Multisite > 사이트 템플릿**)에서 가져옵니다. 고객에게 사용 가능으로 표시된 템플릿만 여기에 나타납니다.

### Checkout 양식 기본 도메인 {#checkout-form-base-domains}

Ultimate Multisite v2.13.0은 checkout 양식 **사이트 URL** 필드에 구성된 도메인을 네트워크 기본 도메인으로 처리합니다. 고객이 `example.com` 및 `sites.example.com`과 같은 하나 이상의 공유 등록 도메인 아래에 사이트를 생성하도록 하려는 경우, 해당 필드의 사용 가능한 도메인 설정을 사용하세요.

공유 체크아웃 양식 기본 도메인은 사이트별 사용자 지정 도메인 매핑으로 처리되지 않습니다. 고객이 이러한 기본 도메인 중 하나에 하위 디렉터리 사이트를 만들면 Ultimate Multisite는 공유 호스트가 해당 사이트 하나에만 속하게 만드는 매핑된 도메인 레코드를 생성하지 않습니다. 공유 호스트는 동일한 체크아웃 양식 기본 도메인을 사용하는 형제 사이트에서 계속 사용할 수 있습니다.

`customer-example.com`과 같은 고객별 매핑 호스트에는 사용자 지정 도메인을 사용하세요. 여러 사이트가 사용할 수 있는 공유 등록 호스트에는 체크아웃 양식 기본 도메인을 사용하세요.

#### 필드 제거하기 {#removing-the-field}

사이트 템플릿을 제공하지 않는 경우 양식에서 템플릿 선택 필드를 제거하세요. 그러면 고객은 **Ultimate Multisite > Settings > Site Templates**에서 구성된 기본 템플릿을 받게 됩니다.
