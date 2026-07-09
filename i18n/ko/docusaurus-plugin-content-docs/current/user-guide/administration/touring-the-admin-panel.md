---
title: 관리자 패널 둘러보기
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Admin Panel 둘러보기

Ultimate Multisite는 최대한 간단하고 직관적으로 설계되었지만, 이처럼 강력한 도구는 안내 투어가 있으면 도움이 됩니다. Admin 페이지를 함께 살펴보며 익숙해져 보겠습니다.

## Dashboard

Ultimate Multisite **Dashboard**는 수익, 사이트 활동, 멤버십 성장, 방문자 수, 지리적 데이터를 포함한 기본 보고서와 분석을 보여줍니다.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

다음은 Dashboard 전체 보기입니다.

![Ultimate Multisite Dashboard 전체 페이지](/img/admin/um-dashboard-full.png)

그리고 Dashboard의 하단 섹션입니다.

![Ultimate Multisite Dashboard 하단 섹션](/img/admin/um-dashboard-bottom.png)

네트워크 Dashboard의 전체 보기도 있습니다.

![Network Dashboard 전체 페이지](/img/admin/network-dashboard-full-page.png)

## Checkout Forms

**Checkout Forms**는 맞춤형 등록 페이지를 만들 수 있는 유연성을 제공합니다. 필드를 사용자 지정하고, 맞춤 클래스를 삽입하고 스크립트를 추가하며, 방문자의 국가나 위치를 기준으로 접근을 제한할 수 있습니다.

![Checkout Forms 목록](/img/admin/checkout-forms-list.png)

## 제품

**제품** 섹션은 네트워크를 위한 다양한 플랜, 패키지, 서비스를 만드는 곳입니다. 제품 수준에서 가격, 청구 주기, 한도 및 할당량을 정의합니다.

![제품 목록](/img/admin/products-list.png)

## 멤버십

**멤버십** 페이지는 네트워크의 모든 구독을 보여줍니다. 플랜, 제품, 청구 금액과 주기, 결제 내역, 타임스탬프를 포함한 구독 세부 정보를 검토하고 편집합니다.

![멤버십 목록](/img/admin/memberships-list.png)

## 결제

**결제** 페이지는 특정 제품 및 금액을 포함한 자세한 거래 정보와 함께 전체 네트워크의 결제 내역을 빠르게 보여줍니다.

![결제 목록](/img/admin/payments-list.png)

## 고객

**고객** 페이지는 이름, 이메일 주소, 마지막 로그인, 해당 하위 사이트에 로그인하기 위한 "전환" 링크를 포함한 기본 사용자 정보와 함께 네트워크에 등록된 모든 회원을 보여줍니다.

![고객 목록](/img/admin/customers-list.png)

## 사이트

**사이트** 페이지는 사이트 템플릿과 고객 소유 사이트를 포함하여 네트워크의 모든 하위 사이트를 나열합니다. 매핑된 도메인, 한도 및 할당량, 플러그인과 테마, 사이트 썸네일을 쉽게 관리할 수 있습니다.

![사이트 목록](/img/admin/sites-list.png)

## 도메인

**도메인** 페이지는 하위 사이트에 매핑된 맞춤 도메인을 전담합니다. Super admin으로서 맞춤 도메인 이름을 수동으로 추가하거나 매핑하고 DNS 레코드와 로그를 볼 수 있습니다.

![도메인 목록](/img/admin/domains-list.png)

## 할인 코드

**할인 코드**를 사용하면 최종 사용자에게 할인을 제공하기 위한 쿠폰 코드를 만들 수 있습니다. 할인 값을 지정하고 특정 사용자나 그룹을 대상으로 설정합니다.

![할인 코드 목록](/img/admin/discount-codes-list.png)

## Broadcasts

**Broadcasts**는 공지사항을 배포하거나 하위 사이트 사용자에게 비공개 메시지를 보내기 위한 도구입니다. 사용자가 구독 중인 플랜이나 제품을 기준으로 특정 사용자 그룹을 대상으로 지정합니다.

![Broadcasts 목록](/img/admin/broadcasts-list.png)

## Settings

**Settings** 페이지는 Ultimate Multisite를 구성하는 곳입니다 — 등록 설정, 결제, API 및 webhooks, 도메인 매핑, 기타 통합.

AI connector 설정에는 현재 지원되는 OAuth provider pool이 나열됩니다: Anthropic Max, OpenAI ChatGPT/Codex, Google AI Pro. 각 provider card를 통해 super admin은 Account를 연결하고, 저장된 Account를 새로 고치고, 이메일로 Account를 제거하며, sandbox 환경이 브라우저 리디렉션을 차단할 때 수동 OAuth 대체 방식을 사용할 수 있습니다. Cursor Pro 설정 옵션은 Admin Panel에서 제거되었습니다.

ChatGPT/Codex Account는 작업에서 도구를 허용하는 경우 connector 기반 도구 사용을 지원하므로, connector 지원 작업에 의존하는 admin 워크플로는 OpenAI Account가 연결된 후 Codex 도구 동작을 사용할 수 있습니다.

![Settings 페이지](/img/admin/settings-general.png)

다음은 일반 설정 페이지의 전체 보기입니다.

![Settings 일반 전체 페이지](/img/admin/settings-general-full.png)

그리고 이메일 설정 페이지입니다.

![Settings 이메일 전체 페이지](/img/admin/settings-emails-full.png)

그리고 결제 설정 페이지입니다.

![Settings 결제 전체 페이지](/img/admin/settings-payments-full.png)

그리고 결제 설정의 하단 섹션입니다.

![Settings 결제 하단 섹션](/img/admin/settings-payments-bottom.png)

그리고 사이트 설정 페이지입니다.

![Settings 사이트 전체 페이지](/img/admin/settings-sites-full.png)

## 이벤트

**이벤트** 페이지는 네트워크의 모든 이벤트와 로그를 기록해 둡니다. 플랜 변경, 가입, 기타 움직임과 같은 활동을 추적하므로 멀티사이트를 모니터링하는 데 유용합니다.

![이벤트 목록](/img/admin/events-list.png)

## Webhooks

**Webhooks**를 사용하면 데이터를 다른 애플리케이션으로 전달할 수 있습니다. Ultimate Multisite에서 Zapier 같은 플랫폼으로 데이터를 보내는 데 유용합니다.

![Webhooks 목록](/img/admin/webhooks-list.png)
