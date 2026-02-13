---
title: 이메일 및 방송 전송
sidebar_position: 11
_i18n_hash: 2c58b558fa68e4dd6e81bec971d52536
---
# 이메일 전송 및 방송 (v2)

_**중요 참고: 이 문서는 Ultimate Multisite 버전 2.x를 참조합니다.**_

Ultimate Multisite는 대상 사용자 또는 사용자 그룹에게 이메일을 보내고, 관리 대시보드에 공지사항을 표시하여 공지사항을 방송할 수 있는 기능을 제공합니다.

## 방송을 통해 고객 대시보드에 관리자 공지사항 추가

Ultimate Multisite 방송 기능을 사용하면 **관리자 공지사항**을 사용자의 하위 사이트 관리자 대시보드에 추가할 수 있습니다.

시스템 유지보수나 기존 사용자에게 새로운 제품 또는 서비스를 제공하는 공지를 해야 할 때 매우 유용합니다. 아래는 사용자 대시보드에 표시되는 관리자 공지사항 예시입니다.

![Admin notice broadcast shown on customer dashboard](/img/admin/broadcasts-list.png)

관리자 공지사항을 시작하려면 네트워크 관리자 대시보드로 이동한 뒤 **Ultimate Multisite** 메뉴 아래에서 **Broadcasts** 옵션을 찾습니다.

![Broadcasts menu in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

이 페이지에서 상단의 **Add Broadcast** 버튼을 클릭합니다.

그러면 **Add broadcast** 모달 창이 열리며, 전송하려는 방송 유형을 선택할 수 있습니다.

**Message**를 선택한 뒤 **Next Step** 버튼을 클릭합니다.

![Add broadcast modal with Message type selected](/img/admin/broadcasts-list.png)

다음 창에서는 **Target customer** 또는 **Target product**를 선택하도록 요청합니다. 하나 이상의 사용자 또는 제품을 선택할 수 있습니다.

사용자 계정이나 제품을 검색하려면 필드에 키워드를 입력하기 시작합니다.

**Message type** 필드 아래에서 공지사항 색상을 선택할 수 있습니다. 이는 메시지의 긴급성을 강조합니다.

그런 다음 **Next Step** 버튼을 클릭합니다.

![Target customer and product selection for broadcast](/img/admin/broadcasts-list.png)

다음 창에서는 제목과 사용자에게 방송할 내용/메시지를 입력하여 메시지 작성을 시작할 수 있습니다.

![Broadcast message subject and content editor](/img/admin/broadcasts-list.png)

메시지를 작성한 후 **Send** 버튼을 클릭합니다.

이제 끝입니다. 관리자 공지사항이 즉시 사용자 대시보드에 표시됩니다.

## 고객에게 이메일 전송

Ultimate Multisite 방송 기능을 사용하면 사용자에게 이메일을 보낼 수 있습니다. 이메일을 특정 사용자에게만 보내거나, 구독 중인 제품 또는 플랜에 따라 특정 사용자 그룹을 대상으로 설정할 수 있는 옵션이 있습니다.

이메일 방송을 시작하려면 네트워크 관리자 대시보드로 이동한 뒤 **Ultimate Multisite** 메뉴 아래에서 **Broadcast** 옵션을 찾습니다.

![Broadcasts page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

이 페이지에서 상단의 **Add broadcast** 버튼을 클릭합니다.

그러면 **Add broadcast** 모달 창이 열리며, 전송하려는 방송 유형을 선택할 수 있습니다. **Email**을 선택한 뒤 **Next Step** 버튼을 클릭합니다.

![Add broadcast modal with Email type selected](/img/admin/broadcasts-list.png)

다음 창에서는 **Target customer** 또는 **Target produc** t를 선택하도록 요청합니다. 하나 이상의 사용자 또는 제품을 선택할 수 있습니다.

사용자 계정이나 제품을 검색하려면 필드에 키워드를 입력하기 시작합니다.

대상 청중을 선택한 후 **Next Step** 버튼을 클릭합니다.

![Target customer and product selection for email broadcast](/img/admin/broadcasts-list.png)

다음 창에서는 제목과 사용자에게 보낼 내용/메시지를 입력하여 이메일 작성을 시작할 수 있습니다.

![Email broadcast subject and content editor](/img/admin/broadcasts-list.png)

메시지를 작성한 후 **Send** 버튼을 클릭합니다.

이렇게 방송 기능을 사용하면 최종 사용자에게 이메일을 보내는 것이 얼마나 쉬운지 알 수 있습니다.

## 시스템 이메일

Ultimate Multisite의 시스템 이메일은 등록, 결제, 도메인 매핑 등 특정 작업 후 시스템에서 자동으로 전송되는 **자동 알림**입니다. 이 이메일은 Ultimate Multisite 설정에서 편집하거나 수정할 수 있습니다. 또한 다른 Ultimate Multisite 설치에서 기존 설정을 재설정하고 가져올 수 있는 기능이 포함되어 있습니다.

### 재설정 및 가져오기

새로운 Ultimate Multisite 버전과 애드온은 때때로 새로운 이메일을 등록할 수 있습니다.

충돌 및 기타 문제를 방지하기 위해 **특정 기능의 올바른 동작에 필수적인 경우를 제외하고는 새 이메일 템플릿을 시스템 이메일로 자동으로 추가하지 않습니다.**

그러나 슈퍼 관리자와 에이전트는 가져오기 도구를 통해 새로 등록된 이메일을 가져올 수 있습니다. 이 과정은 새 이메일 템플릿의 내용과 구성을 사용하여 새로운 시스템 이메일을 생성하며, 슈퍼 관리자는 원하는 대로 수정하거나 그대로 유지할 수 있습니다.

#### 시스템 이메일 가져오기 방법

Ultimate Multisite 설정 페이지로 이동하여 **Emails** 탭으로 이동합니다.

![Emails tab in Ultimate Multisite settings](/img/config/settings-emails.png)

그런 다음 사이드바에서 **Customize System Emails** 버튼을 클릭합니다.

![Customize System Emails button on sidebar](/img/config/settings-emails.png)

시스템 이메일 페이지에서 상단에 **Reset & Import** 작업 버튼이 표시됩니다. 해당 버튼을 클릭하면 가져오기 및 재설정 모달 창이 열립니다.

![Reset and Import action button on System Emails page](/img/config/settings-emails.png)

그런 다음 가져오기 이메일 옵션을 전환하여 가져올 수 있는 시스템 이메일을 확인할 수 있습니다.

![Import Emails options showing available system emails](/img/config/settings-emails.png)

#### 시스템 이메일 재설정

다른 경우에는 특정 이메일 템플릿에 가한 변경 사항이 더 이상 작동하지 않음을 깨닫고, 이를 **기본 상태**로 재설정하고 싶을 때가 있습니다.

이러한 경우 두 가지 옵션이 있습니다. 시스템 이메일을 삭제한 뒤 위 지침을 사용해 다시 가져올 수 있습니다. 이 방법은 전송 메트릭 및 기타 정보를 지우므로 가장 선호되지 않는 방법입니다.

또는 **Reset & Import** 도구를 사용하여 해당 이메일 템플릿을 재설정할 수 있습니다.

이메일 템플릿을 재설정하려면 위 단계들을 따라 Reset & Import 도구에 도달한 뒤 **Reset** 옵션을 전환하고 기본 내용으로 재설정할 이메일을 선택합니다.

![Reset option to restore email templates to defaults](/img/config/settings-emails.png)
