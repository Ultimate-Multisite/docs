---
title: 이메일 및 브로드캐스트 보내기
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# 이메일 및 Broadcast 보내기 (v2) {#sending-emails-and-broadcasts-v2}

_**중요 참고: 이 문서는 Ultimate Multisite 버전 2.x에 관한 것입니다.**_

Ultimate Multisite에는 특정 사용자 또는 사용자 그룹에게 이메일을 보내고, 공지를 broadcast하기 위해 해당 사용자의 admin dashboard에 알림을 보내 고객과 소통할 수 있는 기능이 포함되어 있습니다

## Broadcast로 고객의 dashboard에 admin notices 추가하기 {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Ultimate Multisite broadcast 기능을 사용하면 사용자의 하위 사이트 admin dashboard에 **admin notices**를 추가할 수 있습니다.

시스템 유지 관리와 같은 공지나 기존 사용자에게 새 제품 또는 서비스를 제공하는 내용을 알릴 필요가 있을 때 매우 유용합니다. 사용자의 dashboard에서 admin notice는 다음과 같이 표시됩니다.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

admin notice를 시작하려면 네트워크 admin dashboard로 이동한 뒤 **Ultimate Multisite** 메뉴 아래에서 **Broadcasts** 옵션을 찾을 수 있습니다.

![Ultimate Multisite admin의 Broadcasts 목록 페이지](/img/admin/broadcasts-list.png)

기존 broadcasts도 편집할 수 있습니다:

![Broadcast 편집 인터페이스](/img/admin/broadcast-edit.png)

이 페이지에서 상단의 **Add Broadcast** 버튼을 클릭합니다.

그러면 보내려는 broadcast 유형을 선택할 수 있는 Add broadcast modal window가 표시됩니다.

계속해서 **Message**를 선택한 다음 **Next Step** 버튼을 클릭합니다.

![Message 옵션이 선택된 Add broadcast modal](/img/admin/broadcast-add-message.png)

다음 창에서는 **Target customer** 또는 **Target product**를 입력하라는 메시지가 표시됩니다. 한 명 이상의 사용자 또는 하나 이상의 제품을 선택할 수 있습니다.

사용자 account 또는 제품을 검색하려면 필드 안에 키워드를 입력하기 시작해야 합니다.

**Message type** 필드 아래에서 notice의 색상을 선택할 수 있습니다. 이렇게 하면 메시지의 긴급성을 강조할 수 있습니다.

그런 다음 **Next Step**을 클릭할 수 있습니다.

![Message broadcast용 Target customers, target product 및 message type 필드](/img/admin/broadcast-message-targets.png)

다음 창에서는 사용자에게 broadcast하려는 제목과 콘텐츠/메시지를 입력하여 메시지 작성을 시작할 수 있습니다.

![작성 단계의 Broadcast 메시지 제목 및 콘텐츠 편집기](/img/admin/broadcast-edit.png)

메시지를 만든 후 **Send** 버튼을 누를 수 있습니다.

이것으로 끝입니다. admin notice가 즉시 사용자의 dashboard에 표시되어야 합니다.

## 고객에게 이메일 보내기 {#send-emails-to-your-customers}

Ultimate Multisite broadcast 기능을 사용하면 사용자에게 이메일을 보낼 수 있습니다. 특정 사용자에게만 이메일을 보내거나, 구독 중인 제품 또는 플랜을 기준으로 특정 사용자 그룹을 대상으로 지정할 수 있는 옵션이 있습니다.

이메일 broadcast를 시작하려면 네트워크 admin dashboard로 이동한 뒤 Ultimate Multisite 메뉴 아래에서 Broadcast 옵션을 찾을 수 있습니다.

![이메일 broadcast의 시작점으로 사용되는 Broadcasts 목록 페이지](/img/admin/broadcasts-list.png)

이 페이지에서 상단의 **Add broadcast** 버튼을 클릭합니다.

그러면 보내려는 broadcast 유형을 선택할 수 있는 Add broadcast modal window가 표시됩니다. 계속해서 **Email**을 선택한 다음 **Next Step** 버튼을 클릭합니다.

![Email 옵션이 선택된 Add broadcast modal](/img/admin/broadcast-add-email.png)

다음 창에서는 **Target customer** 또는 **Target produc** t를 입력하라는 메시지가 표시됩니다. 한 명 이상의 사용자 또는 하나 이상의 제품을 선택할 수 있습니다.

사용자 account 또는 제품을 검색하려면 필드 안에 키워드를 입력하기 시작해야 합니다.

대상 청중이 선택되면 **Next Step**을 클릭할 수 있습니다.

![Email broadcast용 Target customers 및 target product 선택](/img/admin/broadcast-email-targets.png)

다음 창에서는 사용자에게 보내려는 제목과 콘텐츠/메시지를 입력하여 이메일 작성을 시작할 수 있습니다.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

메시지를 만든 후 **Send** 버튼을 누를 수 있습니다.

broadcast 기능을 사용하여 최종 사용자에게 이메일을 보내는 방법은 이처럼 쉽습니다.

## 시스템 이메일 {#system-emails}

Ultimate Multisite의 시스템 이메일은 등록, 결제, 도메인 매핑 등과 같은 특정 작업 후 시스템이 보내는 **자동 알림**입니다. 이러한 이메일은 Ultimate Multisite 설정에서 편집하거나 수정할 수 있습니다. 또한 다른 Ultimate Multisite 설치에서 기존 설정을 재설정하고 가져올 수 있는 기능도 함께 제공됩니다.

### 재설정 및 가져오기 {#resetting--importing}

새 Ultimate Multisite 버전과 add-ons는 때때로 새 이메일을 등록할 수 있으며 실제로 등록합니다.

충돌 및 기타 문제를 방지하기 위해, 특정 기능이 올바르게 작동하는 데 필수적인 경우가 아니라면 **새 이메일 템플릿을 설치의 System Emails로 자동 추가하지 않습니다** .

그러나 super admins와 agents는 importer 도구를 통해 새로 등록된 이메일을 가져올 수 있습니다. 이 과정은 새 이메일 템플릿의 콘텐츠와 구성으로 새 시스템 이메일을 생성하여, super admin이 원하는 수정 사항을 적용하거나 그대로 유지할 수 있게 합니다.

#### 시스템 이메일 가져오는 방법 {#how-to-import-system-emails}

Ultimate Multisite Settings 페이지로 이동하여 **Emails** 탭으로 이동합니다.

![System Emails 섹션을 보여주는 Ultimate Multisite 설정의 Emails 탭](/img/config/settings-emails-tab.png)

그런 다음 사이드바에서 **Customize System Emails** 버튼을 클릭합니다.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

System Emails 페이지 상단에 **Reset & Import** 작업 버튼이 표시됩니다. 해당 버튼을 클릭하면 가져오기 및 재설정 modal window가 열립니다.

![System Emails admin 페이지의 Reset 또는 Import 작업 버튼](/img/admin/system-emails-reset-import.png)

그런 다음 Import Emails 옵션을 전환하여 가져올 수 있는 시스템 이메일을 확인할 수 있습니다.

<!-- Screenshot unavailable: 기본값으로 재설정 및 가져오기 모달에서 이메일 가져오기 옵션이 펼쳐진 상태 -->

#### 시스템 이메일 재설정 {#reseting-system-emails}

때로는 특정 이메일 템플릿에 적용한 변경 사항이 더 이상 적합하지 않다는 것을 깨닫고 해당 템플릿을 **기본 상태**로 재설정하고 싶을 수 있습니다.

이러한 경우 두 가지 옵션이 있습니다. 시스템 이메일을 삭제한 뒤 다시 가져올 수 있습니다(위의 지침 사용). 하지만 이렇게 하면 발송 지표와 기타 항목이 지워지므로 이 방법은 가장 권장되지 않습니다.

또는 **Reset & Import 도구**를 사용하여 해당 이메일 템플릿을 재설정할 수 있습니다.

이메일 템플릿을 재설정하려면 Reset & Import 도구에 도달할 때까지 위의 단계를 따른 다음, **Reset** 옵션을 전환하고 기본 콘텐츠로 재설정하려는 이메일을 선택하면 됩니다.

<!-- Screenshot unavailable: 기본값으로 재설정 및 가져오기 모달에서 이메일 재설정 옵션이 펼쳐진 상태 -->
