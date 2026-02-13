---
title: 할인 코드 만들기
sidebar_position: 19
_i18n_hash: 3c7a42fff1710e14a95a32365f893dc3
---
# 할인 코드 만들기 (v2)

_**중요 안내: 이 문서는 Ultimate Multisite 버전 2.x를 참조합니다.**_

Ultimate Multisite를 사용하면 고객의 구독에 할인 코드를 만들어 제공할 수 있습니다. 그리고 만들기도 쉽습니다!

## 할인 코드 만들기 및 편집

할인 코드를 만들거나 편집하려면 **Ultimate Multisite > Discount Codes**로 이동합니다.

![](/img/config/discount-codes-list.png)

여기에는 이미 생성한 할인 코드 목록이 표시됩니다.

**Add Discount** **Code**를 클릭하면 새 쿠폰을 만들 수 있고, 기존 쿠폰을 편집하려면 마우스를 올려 **Edit**를 클릭하면 됩니다.

![Discount codes list with hover actions](/img/config/discount-codes-list.png)

![Add Discount Code button](/img/config/discount-codes-list.png)

이 페이지로 리디렉션되어 쿠폰 코드를 만들거나 편집할 수 있습니다. 이 예시에서는 새 쿠폰을 만들 것입니다.

![Discount code edit page](/img/config/discount-codes-list.png)

여기에서 사용할 수 있는 설정을 살펴보겠습니다:

**Enter Discount Code:** 이 필드는 할인 코드의 이름입니다. 이는 고객이 결제 시 입력해야 할 코드가 아닙니다.

**Description:** 여기에서 쿠폰의 용도를 간단히 설명할 수 있습니다.

![Discount code name and description fields](/img/config/discount-codes-list.png)

**Coupon code:** 여기에서 고객이 결제 시 입력해야 할 코드를 정의합니다.

![Coupon code field](/img/config/discount-codes-list.png)

**Discount:** 여기에서 할인 코드에 대한 **퍼센트** 또는 **고정 금액**을 설정할 수 있습니다.

![Discount percentage or fixed amount setting](/img/config/discount-codes-list.png)

**Apply to renewals:** 이 옵션이 꺼져 있으면, 이 할인 코드는 **첫 번째 결제**에만 적용됩니다. 나머지 결제에는 할인이 적용되지 않습니다. 이 옵션이 켜져 있으면, 할인 코드는 모든 향후 결제에 유효합니다.

**Setup fee discount:** 이 옵션이 꺼져 있으면, 쿠폰 코드는 주문의 **설정 수수료**에 대해 할인을 제공하지 않습니다. 이 옵션이 켜져 있으면, 쿠폰 코드가 귀하의 플랜 설정 수수료에 적용할 할인(퍼센트 또는 고정 금액)을 설정할 수 있습니다.

![Apply to renewals and setup fee discount options](/img/config/discount-codes-list.png)

**Active:** 쿠폰 코드를 수동으로 활성화하거나 비활성화합니다.

![Active toggle for discount code](/img/config/discount-codes-list.png)

**Advanced Options** 아래에는 다음 설정이 있습니다:

**Limit uses:**

  * **Uses:** 여기에서 할인 코드가 사용된 횟수를 확인할 수 있습니다.

  * **Max uses:** 이 값은 사용자가 할인 코드를 사용할 수 있는 최대 횟수를 제한합니다. 예를 들어, 10을 입력하면 쿠폰은 10회만 사용될 수 있습니다. 이 한도 이후에는 쿠폰 코드를 더 이상 사용할 수 없습니다.

![Limit uses setting with uses and max uses fields](/img/config/discount-codes-list.png)**Start & expiration dates:** Here you will have the option to add a start date and/or an expiration date to your coupon.

**Start & expiration dates:** 여기에서 쿠폰에 시작 날짜 및/또는 만료 날짜를 추가할 수 있는 옵션이 있습니다.

![Start and expiration date fields](/img/config/discount-codes-list.png)

**Limit products:** **Select products** 옵션을 켜면 모든 제품이 표시됩니다. 수동으로 (켜기/끄기) 쿠폰 코드를 사용할 수 있는 제품을 선택할 수 있습니다. 여기에서 끈 제품은 고객이 쿠폰 코드를 사용해도 변경 사항이 표시되지 않습니다.

![Limit products selection toggles](/img/config/discount-codes-list.png)

이 모든 옵션을 설정한 후 **Save Discount Code**를 클릭하여 쿠폰을 저장하면 완료됩니다!

![Save Discount Code button](/img/config/discount-codes-list.png)

쿠폰이 이제 목록에 표시되며, 거기에서 **edit or delete**를 클릭할 수 있습니다.

![Discount code in the list with edit and delete options](/img/config/discount-codes-list.png)

### 

### URL 매개변수 사용하기:

가격표를 사용자 정의하거나 웹사이트에 멋진 쿠폰 코드 페이지를 만들고 결제 양식에 할인 코드를 자동으로 적용하려면 URL 매개변수를 통해 이 작업을 수행할 수 있습니다.

먼저, 귀하의 플랜에 대한 공유 가능한 링크를 가져와야 합니다. 이를 위해 **Ultimate Multisite > Products**로 이동하여 플랜을 선택합니다.

**Click to Copy Shareable Link** 버튼을 클릭합니다. 그러면 해당 플랜에 대한 공유 가능한 링크가 제공됩니다. 예시에서는 공유 링크가 [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_였습니다.

![Product page with shareable link button](/img/config/products-list.png)

이 특정 플랜에 할인 코드를 적용하려면 URL에 **?discount_code=XXX** 매개변수를 추가하면 됩니다. 여기서 **XXX**는 쿠폰 코드입니다.

이 예시에서는 쿠폰 코드 **50OFF**를 이 특정 제품에 적용할 것입니다.

이 특정 플랜에 50OFF 할인 코드가 적용된 URL은 다음과 같습니다: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
