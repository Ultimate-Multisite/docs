---
title: 수동 결제 설정
sidebar_position: 20
_i18n_hash: a780a809c96da21ceb3ec6bb67a016d7
---
# 수동 결제 설정 (v2)

_**중요 안내: 이 문서는 Ultimate Multisite 버전 2.x를 기준으로 작성되었습니다.**_

수동 결제는 Stripe 또는 PayPal이 사용자에게 제공되지 않을 때 다른 결제 수단을 제공할 수 있는 방법입니다. 은행 송금이나 현지에서 사용 가능한 다른 결제 수단이 될 수 있습니다.

## 수동 결제 활성화 방법

수동 결제 설정은 매우 간단합니다. 결제 게이트웨이에서 활성화하고 사용자가 결제를 보내는 방법에 대한 자세한 지침을 입력하면 됩니다.

먼저 **Ultimate Multisite > Settings > Payments** 으로 이동합니다. **Payment Gateways** 아래에서 **Manual** 를 켭니다. 그러면 **Payment Instructions** 박스가 표시됩니다.

이 박스에 고객이 결제를 진행하는 데 필요한 정보를 입력합니다. 예를 들어, 은행 계좌 정보와 결제 확인을 보낼 수 있는 이메일을 입력할 수 있습니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U0K40VsARU.png)

설정이 완료되면 **Save Settings** 를 클릭하면 됩니다. 사용자가 네트워크에 등록하면 구매를 완료하기 위한 지침을 받을 것이라는 메시지가 표시됩니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-drAYOHh331.png)

또한 **Thank You** 페이지에서도 결제 지침이 포함된 메시지를 받게 됩니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Nf6HTYbu2g.png)

## 수동 결제 확인

수동 결제를 확인하려면 왼쪽 바의 **Payments** 메뉴로 이동합니다. 거기에서 네트워크의 모든 결제와 그 상세 정보(상태 포함)를 확인할 수 있습니다. 수동 결제는 수동으로 변경하기 전까지 항상 **Pending** 상태를 가집니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C3U9LgT2Ev.png)

**reference code** 를 클릭하여 결제 페이지에 진입합니다. 이 페이지에서 보류 중인 결제의 모든 세부 정보(참조 ID, 제품, 타임스탬프 등)를 확인할 수 있습니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sXfbxcYFs6.png)

오른쪽 열에서 결제 상태를 변경할 수 있습니다. **Completed** 로 바꾸고 **Activate Membership** 옵션을 켜면 고객의 사이트가 활성화되고 멤버십이 활성화됩니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-q5hHRxdhfg.png)
