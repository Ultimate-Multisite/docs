---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks (v2) 첫 살펴보기

_**주의: 이 기능 또는 문서는 고급 사용자를 위한 것입니다.**_

**webhook**은 Ultimate Multisite 같은 앱이나 소프트웨어가 다른 애플리케이션에 실시간 정보를 제공하는 방법입니다. webhook은 데이터나 payload를 발생 즉시 다른 애플리케이션에 전달하므로, **데이터를 즉시 받게 됩니다.**

이는 이벤트가 트리거될 때마다 Ultimate Multisite에서 다른 CRM이나 시스템으로 특정 데이터를 통합하거나 전달해야 할 때 유용합니다. 예를 들어, 새 사용자 Account가 생성될 때마다 사용자의 이름과 이메일 주소를 메일링 리스트로 보내야 할 수 있습니다.

## webhook을 만드는 방법

webhook을 만들려면 네트워크 관리자 Dashboard로 이동하세요. **Ultimate Multisite > Webhooks > Add New Webhook**을 클릭하세요.

![Add New Webhook 버튼이 있는 비어 있는 Webhooks 목록 페이지](/img/admin/webhooks-list-empty.png)

그런 다음 webhook 구성을 편집할 수 있습니다.

![Name, Event, URL 필드가 있는 Add New Webhook 양식](/img/admin/webhook-add-modal.png)

새 webhook을 만들 때 **Name, URL,** 및 **Event** 같은 정보를 입력하라는 요청을 받습니다. webhook에는 원하는 이름을 사용할 수 있습니다. 가장 중요한 필드는 URL과 Event입니다.

![URL 필드와 payload 미리보기가 표시된 webhook 편집 인터페이스](/img/admin/webhook-url-field.png)

URL은 Ultimate Multisite가 **payload 또는 데이터**를 보낼 **endpoint 또는 대상**입니다. 이는 데이터를 받을 애플리케이션입니다.

Zapier는 사용자가 서드파티 애플리케이션과의 통합을 더 쉽게 만들기 위해 사용하는 가장 일반적인 솔루션입니다. Zapier 같은 플랫폼이 없으면 데이터를 받아 처리할 사용자 지정 함수를 직접 만들어야 합니다. **Zapier와 함께 Ultimate Multisite webhook을 사용하는 방법**에 대한 이 문서를 참고하세요.

이 문서에서는 webhook이 작동하는 기본 개념과 Ultimate Multisite에서 사용할 수 있는 이벤트를 살펴봅니다. [requestbin.com](https://requestbin.com/)이라는 서드파티 사이트를 사용할 것입니다. 이 사이트를 사용하면 코딩 없이 endpoint를 만들고 payload를 받을 수 있습니다. _**면책 조항: 이 사이트가 하는 일은 데이터가 수신되었음을 보여 주는 것뿐입니다.**_ payload에 대한 처리나 어떤 종류의 작업도 수행되지 않습니다.

[requestbin.com](https://requestbin.com/)으로 이동하여 Create Request Bin을 클릭하세요.

해당 버튼을 클릭하면 이미 Account가 있는 경우 로그인하거나 가입하라는 메시지가 표시됩니다. 이미 Account가 있으면 바로 해당 Dashboard로 이동합니다. 해당 Dashboard에서 Ultimate Multisite webhook을 만들 때 사용할 수 있는 endpoint 또는 URL을 즉시 볼 수 있습니다.

URL을 복사한 다음 Ultimate Multisite로 돌아가세요. URL 필드에 endpoint를 입력하고 드롭다운에서 이벤트를 선택하세요. 이 예에서는 **Payment Received**를 선택하겠습니다.

이 이벤트는 사용자가 결제를 할 때마다 트리거됩니다. 사용 가능한 모든 이벤트, 설명, payload는 페이지 하단에 나열되어 있습니다. webhook을 저장하려면 **Add New Webhook** 버튼을 클릭하세요.

![Payment Received가 선택된 webhook 이벤트 드롭다운](/img/admin/webhook-event-picker.png)

이제 생성한 webhook이 작동하는지 확인하기 위해 endpoint로 테스트 이벤트를 보낼 수 있습니다. 생성한 webhook 아래의 **Send Test Event**를 클릭하면 됩니다.

![구성된 webhook 하나와 Send Test 작업이 표시된 Webhooks 목록](/img/admin/webhooks-list-populated.png)

그러면 테스트가 성공했다는 확인 창이 표시됩니다.

![테스트 payload를 보낸 후의 webhook 테스트 이벤트 결과](/img/admin/webhook-test-result.png)

이제 _Requestbin_ 사이트로 돌아가면 일부 테스트 데이터가 포함된 payload가 수신된 것을 볼 수 있습니다.

이것이 webhook과 endpoint가 작동하는 기본 원리입니다. 사용자 지정 endpoint를 만들려면 Ultimate Multisite에서 받은 데이터를 처리할 사용자 지정 함수를 만들어야 합니다.
