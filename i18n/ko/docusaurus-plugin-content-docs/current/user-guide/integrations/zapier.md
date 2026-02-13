---
title: Zapier 통합
sidebar_position: 12
_i18n_hash: cf4bbd6dfae0fa99b3d009298cad3f19
---
# Zapier와 함께 Ultimate Multisite 통합하기

한 기사에서 우리는 [Webhooks](webhooks.md)와 그것이 3rd 파티 애플리케이션과 통합하는 데 어떻게 사용될 수 있는지에 대해 논의했습니다.

웹훅을 사용하는 것은 코딩과 페이로드를 포착하는 고급 지식이 필요하기 때문에 다소 복잡합니다. **Zapier**를 사용하면 이를 우회할 수 있는 방법입니다.

Zapier는 5000개 이상의 앱과 통합되어 서로 다른 애플리케이션 간의 통신을 더 쉽게 만듭니다.

네트워크에서 이벤트가 발생할 때 트리거되는 **Triggers**(예: 계정이 생성되고 account_create 이벤트가 트리거됨)를 만들거나 외부 이벤트에 반응하여 네트워크에서 **Actions**(예: Ultimate Multisite 네트워크에 새 계정 멤버십 생성)를 생성할 수 있습니다.

이것은 **Ultimate Multisite Zapier의 트리거**와 액션이 [REST API](https://developer.ultimatemultisite.com/api/docs/)에 의해 구동되기 때문에 가능합니다.

## 시작 방법

먼저 Zapier 앱 목록에서 Ultimate Multisite를 검색하세요. 또는 [이 링크](https://zapier.com/apps/wp-ultimo/integrations)를 클릭할 수도 있습니다.

대시보드로 이동하여 왼쪽 사이드바에서 **+** **Create Zap** 버튼을 눌러 새 Zap을 설정하세요.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Zap 생성 페이지로 리디렉션됩니다.

검색창에 'wp ultimo'를 입력하고 **Beta** 버전 옵션을 선택하세요.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

앱을 선택한 후 사용 가능한 이벤트를 선택하세요: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

이제 Zapier에 **귀하의 네트워크**에 대한 접근 권한을 부여해야 합니다. **Sign in**을 클릭하면 **API 자격 증명**이 필요한 새 창이 열립니다.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

네트워크 관리자 패널로 이동하여 **Ultimate Multisite > Settings** > **API & Webhooks**로 이동하고 API 설정 섹션을 찾으세요.

**Enable API** 옵션을 선택하세요. 이 연결이 작동하려면 필요합니다.

![API Settings with Enable API option in Ultimate Multisite](/img/admin/webhooks-list.png)

API Key 및 API Secret 필드에서 **Copy to Clipboard** 아이콘을 사용하고 해당 값을 통합 화면에 붙여넣으세요.

URL 필드에 프로토콜(HTTP 또는 HTTPS)을 포함한 네트워크 전체 URL을 입력하세요.

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

**Yes, Continue** 버튼을 클릭하여 다음 단계로 진행하세요. 모든 것이 잘 작동하면 새 연결된 계정이 표시됩니다! **Continue**를 클릭하여 새 트리거를 생성하세요.

## 새 트리거 만들기

계정이 연결되었으므로 사용 가능한 이벤트를 확인할 수 있습니다. 이번 튜토리얼에서는 **payment_received** 이벤트를 선택해 보겠습니다.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

이벤트를 선택하고 **continue**를 클릭하면 **test step**이 나타납니다.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

이 단계에서 Zapier는 Zap이 해당 이벤트에 대한 **특정 페이로드를 가져올 수 있는지** 테스트합니다. 같은 유형의 향후 이벤트에서는 동일한 구조의 정보가 전송됩니다.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

이번 튜토리얼에서는 테스트가 **성공적으로 완료**되었으며 페이로드 예시 정보를 반환했습니다. 이 예시 정보는 액션을 만들 때 유용합니다. 이제 트리거가 생성되어 다른 애플리케이션에 연결할 준비가 되었습니다.

## 액션 만들기

액션은 다른 트리거의 정보를 사용하여 네트워크에 새 항목을 만듭니다.

**creating an action step**에서 Ultimate Multisite **Beta**와 **Create Items on Ultimate Multisite** 옵션을 선택합니다.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

다음 단계에서는 **How to start**에서 했던 것처럼 인증을 새로 만들거나 기존 인증을 선택합니다. 이번 튜토리얼에서는 이전에 만든 동일한 인증을 선택합니다.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### 액션 설정

이것은 **액션의 주요 단계**이며 여기서는 약간 다릅니다. 먼저 선택할 정보는 **Item**입니다. Item은 **Customers, Payments, Sites, Emails** 등 네트워크의 **정보 모델**입니다.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

항목을 선택하면 양식이 **필수 및 선택 필드를 재배치**하여 선택한 항목에 필요한 필드를 표시합니다.

예를 들어, 항목 **Customer**를 선택하면 양식 필드가 네트워크에 새 Customer를 만들 때 필요한 모든 정보를 표시합니다.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

필수로 표시된 모든 필드를 입력하고 **continue**를 클릭하면 마지막 화면에서 입력한 필드와 입력하지 않은 필드를 보여줍니다.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

테스트가 완료되고 성공하면 액션이 구성됩니다. 또한 네트워크에서 액션 테스트로 항목이 생성되었는지 확인하는 것이 중요합니다.
