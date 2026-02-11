---
title: Stripe 설정
sidebar_position: 6
_i18n_hash: 44043734d0965a10c4e4b848dfed3f0b
---
# Stripe 게이트웨이 설정 (v2)

_**중요 참고: 이 문서는 Ultimate Multisite 버전 2.x를 기준으로 합니다.**_

결제 설정 페이지에서 최대 4개의 결제 방법을 활성화할 수 있습니다: Stripe, Stripe Checkout, PayPal, Manual. 이 문서에서는 **Stripe**와의 통합 방법을 살펴보겠습니다.

## Stripe 활성화

네트워크에서 Stripe를 사용 가능한 결제 게이트웨이로 활성화하려면 **Ultimate Multisite > Settings > Payments** 로 이동한 뒤, Active Payment Gateways 섹션에서 **Stripe** 또는 **Stripe Checkout** 옆의 토글을 켭니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UUtLaJgx7R.png)

### Stripe vs Stripe Checkout:

**Stripe:** 이 방법은 결제 시 신용카드 번호를 입력할 수 있는 공간을 표시합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-k73ZUl1hTW.png)

**Stripe Checkout:** 이 방법은 결제 시 고객을 Stripe Checkout 페이지로 리디렉션합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PCZ16DhYrj.png)

Stripe API 키 가져오기

Stripe가 결제 게이트웨이로 활성화되면 **Stripe Publishable Key**와 **Stripe Secret Key** 필드를 채워야 합니다. 이는 Stripe 계정에 로그인하여 확인할 수 있습니다.

_**참고:** 결제 방법이 정상 작동하는지 테스트하려면 **Sandbox mode**를 활성화할 수 있습니다._

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dhnvBN03ii.png)

Stripe 대시보드에서 오른쪽 상단의 **Developers**를 클릭한 뒤, 왼쪽 메뉴에서 **API Keys**를 선택합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HVqsu1SXuE.png)

**Test Data**(프로덕션 사이트에서 통합이 정상 작동하는지 테스트하려면) 사용 여부를 선택할 수 있습니다. 이를 변경하려면 **Viewing test data** 토글을 전환합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kdVC3W8Bsr.png)

**Publishable key**와 **Secret key**의 값을 **Token** 열에서 복사한 뒤, Ultimate Multisite Stripe Gateway 필드에 붙여넣습니다. 그런 다음 **Save Changes**를 클릭합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JyAifSGNOn.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4rFGxkXr1K.png)

## Stripe Webhook 설정

Stripe는 **당신의 stripe 계정**에서 이벤트가 발생할 때마다 Ultimate Multisite에 알리는 webhook 이벤트를 보냅니다.

**Developers**를 클릭한 뒤, 왼쪽 메뉴에서 **Webhooks** 항목을 선택합니다. 오른쪽에서 **Add endpoint**를 클릭합니다 *.*

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LmYsdylNdd.png)

**Endpoint URL**이 필요합니다 *.* Ultimate Multisite는 자동으로 엔드포인트 URL을 생성하며, 이는 **Ultimate Multisite Stripe Gateway** 섹션의 **Webhook Listener URL** 필드 바로 아래에서 확인할 수 있습니다_._

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sZrCX9OZaw.png)

**Copy** 엔드포인트 URL을 복사한 뒤, Stripe **Endpoint URL** 필드에 **paste**합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-tMlomo8gx1.png)

다음은 **Event**를 선택하는 단계입니다 *.* 이 옵션에서는 **Select all events** 박스를 체크하고 **Add events**를 클릭하면 됩니다. 그 후 **Add Endpoint**를 클릭해 변경 사항을 저장합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Hv8KzaGMrq.png)

그게 전부입니다. Stripe 결제 통합이 완료되었습니다!
