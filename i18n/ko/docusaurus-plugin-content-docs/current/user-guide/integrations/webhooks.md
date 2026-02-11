---
title: 웹훅
sidebar_position: 15
_i18n_hash: 31948dc4c1b47114e296e95813b25348
---
# Webhooks (v2) 첫 번째 살펴보기

_**주의: 이 기능 또는 기사는 고급 사용자용입니다.**_

A **webhook**는 Ultimate Multisite와 같은 앱이나 소프트웨어가 다른 애플리케이션에 실시간 정보를 제공하는 방법입니다. 웹훅은 발생 즉시 다른 애플리케이션에 데이터나 페이로드를 전달하므로 **즉시 데이터를 받을 수 있습니다.**

이 기능은 이벤트가 발생할 때마다 Ultimate Multisite에서 다른 CRM이나 시스템으로 특정 데이터를 통합하거나 전달해야 할 때 유용합니다. 예를 들어, 새 사용자 계정이 생성될 때마다 사용자의 이름과 이메일 주소를 메일링 리스트에 전송해야 할 경우가 있습니다.

## 웹훅 생성 방법

웹훅을 생성하려면 네트워크 관리자 대시보드로 이동합니다. **Ultimate Multisite > Webhooks > Add New Webhook**을 클릭합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7cBdC7uhfX.png)

새 웹훅을 만들 때 **Name, URL, Event**와 같은 정보를 입력하라는 요청을 받습니다. 웹훅에 원하는 이름을 지정할 수 있습니다. 가장 중요한 필드는 URL과 Event입니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7MmyV3wafK.png)

URL은 Ultimate Multisite가 **payload 또는 데이터**를 보낼 **엔드포인트 또는 목적지**입니다. 이는 데이터를 수신하는 애플리케이션입니다.

Zapier는 사용자가 타사 애플리케이션과의 통합을 쉽게 하기 위해 가장 흔히 사용하는 솔루션입니다. Zapier와 같은 플랫폼이 없으면 데이터를 수집하고 처리할 커스텀 함수를 수동으로 만들어야 합니다. **Ultimate Multisite webhook을 Zapier와 함께 사용하는 방법**에 대한 이 기사를 참조하세요.

이 기사에서는 웹훅이 어떻게 동작하는지와 Ultimate Multisite에서 사용 가능한 이벤트에 대한 기본 개념을 살펴보겠습니다. 우리는 [requestbin.com](https://requestbin.com/)이라는 타사 사이트를 사용할 것입니다. 이 사이트는 코딩 없이 엔드포인트를 만들고 페이로드를 수집할 수 있게 해줍니다. _**면책 조항: 이 사이트가 할 일은 데이터가 수신되었음을 보여주는 것뿐입니다.**_ 페이로드에 대한 처리나 어떠한 동작도 수행되지 않습니다.

[requestbin.com](https://requestbin.com/)으로 이동하여 Create Request Bin을 클릭합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-J0e5FzS04g.png)

버튼을 클릭하면 이미 계정이 있으면 로그인하도록 요청하고, 없으면 가입하도록 안내합니다. 이미 계정이 있으면 바로 대시보드로 이동합니다. 대시보드에서 Ultimate Multisite 웹훅을 만들 때 사용할 수 있는 엔드포인트 또는 URL을 즉시 확인할 수 있습니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-M40kPMGsji.png)

URL을 복사한 뒤 Ultimate Multisite로 돌아갑니다. URL 필드에 엔드포인트를 입력하고 드롭다운에서 이벤트를 선택합니다. 이 예시에서는 **Payment Received**를 선택합니다.

이 이벤트는 사용자가 결제를 할 때마다 트리거됩니다. 사용 가능한 모든 이벤트, 설명 및 페이로드는 페이지 하단에 나열됩니다. **Add New Webhook** 버튼을 클릭하여 웹훅을 저장합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1NwqQP4bP0.png)

이제 생성한 웹훅이 작동하는지 확인하기 위해 엔드포인트에 테스트 이벤트를 보낼 수 있습니다. 생성한 웹훅 아래에 있는 **Send Test Event**를 클릭하면 됩니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zTDhrG4wlP.png)

이것은 테스트가 성공했다는 확인 창을 표시합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9jP9r7yRT9.png)

이제 _Requestbin_ 사이트로 돌아가면 테스트 데이터가 포함된 페이로드가 수신된 것을 확인할 수 있습니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RZke5xnrAg.png)

이것이 웹훅과 엔드포인트가 동작하는 기본 원리입니다. 커스텀 엔드포인트를 만들려면 Ultimate Multisite에서 받은 데이터를 처리할 커스텀 함수를 만들어야 합니다.
