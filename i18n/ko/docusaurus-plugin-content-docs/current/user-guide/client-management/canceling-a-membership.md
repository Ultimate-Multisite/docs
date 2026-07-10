---
title: 멤버십 취소하기
sidebar_position: 2
_i18n_hash: a34353ea4630d9815bde4ca7bcfeb95d
---
# Membership 취소하기 (v2) {#canceling-a-membership-v2}

_**중요 참고: 이 문서는 Ultimate Multisite 버전 2.x에 관한 것입니다.**_

고객 쪽에서 Membership을 취소하는 것은 매우 쉽습니다.

사용자가 자신의 Membership을 취소하려면 먼저 ****Account**** 페이지에 접속해야 합니다.

그곳에서 **Danger Zone**으로 이동한 다음 **Delete Account**를 클릭해야 합니다.

![Delete Account 버튼이 있는 Account 페이지 Danger Zone](/img/account-page/danger-zone.png)

확인을 요청하는 모듈이 열립니다. **Confirm Account Deletion** 옵션을 켜고 **Delete Account**를 클릭해야 합니다.

![Confirm Account Deletion 대화 상자](/img/account-page/delete-account-confirm.png)

이렇게 하면 사용자가 사이트에서 로그아웃되고 네트워크에서 해당 Membership이 취소되며, 해당 사이트도 네트워크에서 삭제됩니다.

![계정 삭제 후 로그아웃됨](/img/account-page/logged-out-after-delete.png)

![Membership 취소 확인](/img/account-page/membership-canceled.png)

**중요:** 이 작업은 고객을 네트워크에서 제외하지 않는다는 점에 유의하세요. 고객은 하나 이상의 Membership을 가지고 있거나 연결된 Membership이 없을 수도 있기 때문입니다.

![취소 후에도 고객이 네트워크에 계속 존재함](/img/admin/customer-after-cancel.png)

![활성 Membership이 없는 고객](/img/admin/memberships-customer-empty.png)
