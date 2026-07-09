---
title: Zapier 통합
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite를 Zapier와 통합하기 {#integrating-ultimate-multisite-with-zapier}

한 문서에서 [Webhooks](webhooks.md)에 대해 논의했고, 이를 사용해 타사 애플리케이션과 통합하는 방법을 살펴보았습니다.

Webhooks를 사용하는 것은 코딩과 페이로드 처리에 대한 고급 지식이 필요하기 때문에 약간 복잡합니다. **Zapier**를 사용하는 것은 이를 우회할 수 있는 방법입니다.

Zapier는 5000개 이상의 앱과 통합되어 있어 서로 다른 애플리케이션 간의 통신을 더 쉽게 만들어 줍니다.

네트워크에서 이벤트가 발생할 때 실행되는 **트리거**를 만들 수 있습니다(예: Account가 생성되어 account_create 이벤트를 트리거함). 또는 외부 이벤트에 반응하여 네트워크에서 **작업**을 생성할 수 있습니다(예: Ultimate Multisite 네트워크에서 새 Account 멤버십 생성).

이는 **Ultimate Multisite Zapier의 트리거**와 작업이 [REST API](https://developer.ultimatemultisite.com/api/docs/)로 구동되기 때문에 가능합니다.

## 시작하는 방법 {#how-to-start}

먼저 Zapier 앱 목록에서 Ultimate Multisite를 검색하세요. 또는 [이 링크](https://zapier.com/apps/wp-ultimo/integrations)를 클릭할 수 있습니다.

Dashboard로 이동한 뒤 왼쪽 사이드바에서 **+** **Zap 만들기** 버튼을 눌러 새 Zap을 설정하세요.

![Zap 만들기 버튼이 있는 Zapier Dashboard](/img/admin/webhooks-list.png)

Zap 생성 페이지로 리디렉션됩니다.

검색 상자에 "wp ultimo"를 입력하세요. 클릭하여 **Beta** 버전 옵션을 선택하세요.

![Zapier 앱 목록에서 WP Ultimo 검색](/img/admin/webhooks-list.png)

앱을 선택한 후 사용 가능한 이벤트인 **새 Ultimate Multisite 이벤트**를 선택하세요.

![새 Ultimate Multisite 이벤트 트리거 선택](/img/admin/webhooks-list.png)

이제 Zapier가 **귀하의 네트워크**에 접근할 수 있도록 해야 합니다. **로그인**을 클릭하면 **API 자격 증명**을 요구하는 새 창이 열립니다.

![API 자격 증명을 요청하는 Zapier 로그인 프롬프트](/img/admin/webhooks-list.png)

네트워크 관리자 패널로 이동하여 **Ultimate Multisite > 설정** > **API 및 Webhooks**로 이동한 다음 API 설정 섹션을 찾으세요.

이 연결이 작동하려면 필요하므로 **API 활성화** 옵션을 선택하세요.

![API 설정 및 API 활성화 옵션이 있는 API 및 Webhooks 설정](/img/admin/settings-api-webhooks.png)

API Key 및 API Secret 필드에서 **클립보드에 복사** 아이콘을 사용하고, 해당 값을 통합 화면에 붙여넣으세요.

URL 필드에는 프로토콜(HTTP 또는 HTTPS)을 포함한 네트워크 전체 URL을 입력하세요.

![API Key, Secret, URL 필드가 있는 Zapier 통합 화면](/img/admin/webhooks-list.png)

다음 단계로 이동하려면 **예, 계속** 버튼을 클릭하세요. 모든 것이 정상적으로 작동하면 새로 연결된 Account가 표시됩니다! 새 트리거를 만들려면 **계속**을 클릭하세요.

## 새 트리거를 만드는 방법 {#how-to-create-a-new-trigger}

이제 Account가 연결되었으므로 사용 가능한 이벤트를 볼 수 있습니다. 이 튜토리얼에서는 **payment_received** 이벤트를 선택하겠습니다.

![Zapier 트리거에서 payment_received 이벤트 선택](/img/admin/webhooks-list.png)

이벤트를 선택하고 **계속**을 클릭하면 **테스트 단계**가 나타납니다.

![트리거에 대한 Zapier 테스트 단계](/img/admin/webhooks-list.png)

이 단계에서 Zapier는 Zap이 **해당 이벤트에 대한 특정 페이로드를 가져올 수 있는지** 테스트합니다. 같은 유형의 향후 이벤트에서는 이와 동일한 구조의 정보가 전송됩니다.

![페이로드와 함께 성공적으로 완료된 Zapier 트리거 테스트](/img/admin/webhooks-list.png)

이 튜토리얼에서 테스트는 **성공적으로 완료**되었고 페이로드 예시 정보를 반환했습니다. 이 예시 정보는 작업을 만들 때 지침으로 유용합니다. 이제 트리거가 생성되었으며 다른 애플리케이션에 연결할 준비가 되었습니다.

## 작업을 만드는 방법 {#how-to-create-actions}

작업은 다른 트리거의 정보를 사용하여 네트워크에 새 항목을 만듭니다.

**작업 생성 단계**에서 Ultimate Multisite **Beta**와 **Ultimate Multisite에 항목 만들기** 옵션을 선택합니다.

![Ultimate Multisite에 항목 만들기로 작업 생성](/img/admin/webhooks-list.png)

다음 단계에서는 **시작하는 방법**에서 했던 것처럼 인증을 만들거나, 생성된 인증을 선택합니다. 이 튜토리얼에서는 이전에 생성한 동일한 인증을 선택하겠습니다.

![Zapier 작업에 사용할 인증 선택](/img/admin/webhooks-list.png)

### 작업 설정하기 {#setting-up-the-action}

이것은 **작업의 주요 단계**이며 여기서는 조금 다르게 진행됩니다. 가장 먼저 선택할 정보는 **항목**입니다. 항목은 **고객, 결제, 사이트, 이메일** 등과 같은 네트워크의 **정보 모델**입니다.

![Zapier 작업에 사용할 항목 유형 선택](/img/admin/webhooks-list.png)

항목을 선택하면 양식이 선택한 항목에 대한 **필수 및 선택 필드를 표시하도록 재정렬**됩니다.

예를 들어 **고객** 항목을 선택하면, 양식 필드는 네트워크에서 새 고객을 만들기 위해 입력해야 하는 모든 내용을 표시합니다.

![Zapier 작업 설정의 고객 항목 필드](/img/admin/webhooks-list.png)

**필수**로 표시된 모든 필드를 입력하고 계속을 클릭하면, 마지막 화면에서 입력된 필드와 비워 둔 필드를 보여 줍니다.

![입력된 필드와 비워 둔 필드를 보여 주는 Zapier 작업 테스트](/img/admin/webhooks-list.png)

테스트가 완료되고 성공하면 작업이 구성됩니다. 또한 작업 테스트로 항목이 생성되었는지 네트워크에서 확인하는 것도 중요합니다.
