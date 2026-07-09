---
title: 수동 결제 설정
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Manual Payments 설정하기 (v2) {#setting-up-manual-payments-v2}

_**중요 참고: 이 문서는 Ultimate Multisite 버전 2.x에 해당합니다.**_

Manual payments는 사용자가 **Stripe** 또는 **PayPal**을 사용할 수 없을 때 다른 결제 방법을 제공할 수 있는 방식입니다. 전신 송금이나 은행 이체, 또는 사용자의 지역에서 이용 가능한 다른 결제 방법이 될 수 있습니다.

## Manual Payments 활성화 방법 {#how-to-enable-manual-payments}

Manual payment 설정은 매우 쉽습니다. 결제 게이트웨이에서 활성화하고, 사용자가 결제를 보내는 방법에 대한 자세한 안내를 입력하기만 하면 됩니다.

먼저 **Ultimate Multisite > Settings > Payments**로 이동합니다. **Payment Gateways** 아래에서 **Manual**을 켭니다. 그러면 **Payment Instructions** 상자가 표시됩니다.

이 상자에 고객이 결제하는 데 필요한 정보를 추가합니다. 예를 들어 은행 계좌 정보와 고객이 결제 확인을 보낼 수 있는 이메일을 입력할 수 있습니다.

![Payment Instructions 텍스트 영역이 있는 Manual payment gateway 토글](/img/config/manual-gateway-expanded.png)

Manual gateway 설정 인터페이스는 다음과 같습니다.

![Manual gateway 설정](/img/config/manual-gateway-settings.png)

설정한 후 **Save Settings**를 클릭하면 완료됩니다. 사용자가 네트워크에 등록하면 구매를 완료하기 위한 안내를 받게 된다는 메시지를 보게 됩니다.

![사용자가 결제 안내를 받게 된다고 알리는 등록 확인 메시지](/img/frontend/registration-manual-notice.png)

또한 **Thank You** 페이지에서도 결제 안내가 포함된 메시지를 받게 됩니다.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Manual payments 확인하기 {#confirming-manual-payments}

Manual payment를 확인하려면 왼쪽 바의 **Payments** 메뉴로 이동합니다. 여기에서 네트워크의 모든 결제와 **status**를 포함한 세부 정보를 볼 수 있습니다. Manual payment는 직접 변경하기 전까지 항상 **Pending** 상태입니다.

![대기 중인 manual payment가 표시된 결제 목록](/img/admin/payments-list.png)

**reference code**를 클릭하여 결제 페이지로 들어갑니다. 이 페이지에는 참조 ID, 상품, 타임스탬프 등 대기 중인 결제의 모든 세부 정보가 있습니다.

![reference code, 상품 및 합계가 표시된 결제 세부 정보 페이지](/img/admin/payment-edit.png)

오른쪽 열에서 결제 상태를 변경할 수 있습니다. 이를 **Completed**로 변경하고 **Activate Membership** 옵션을 토글하면 고객의 사이트가 활성화되고 멤버십이 활성 상태가 됩니다.

![Status가 Completed로 설정되고 Activate Membership 토글이 있는 결제 편집 페이지](/img/admin/payment-activate-membership.png)
