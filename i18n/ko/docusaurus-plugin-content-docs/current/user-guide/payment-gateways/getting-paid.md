---
title: 지급받기
sidebar_position: 15
_i18n_hash: b7e644488bb1bef802e024319be88725
---
# Getting Paid (v2)

_**중요한 주의: 이 문서는 Ultimate Multisite 버전 2.x를 참조합니다.**_

Ultimate Multisite에는 내장 멤버십 및 청구 시스템이 있습니다. 청구 시스템이 작동하려면 전자상거래에서 가장 일반적으로 사용되는 결제 게이트웨이를 통합했습니다. Ultimate Multisite의 기본 결제 게이트웨이는 _Stripe_, _PayPal_, 그리고 수동 결제입니다. _WooCommerce_, _GoCardless_, 그리고 _Payfast_를 사용하여 해당 애드온을 설치하면 결제를 받을 수 있습니다.

## Basic Settings

이 결제 게이트웨이 중 어느 것이든 Ultimate Multisite 결제 설정에서 구성할 수 있습니다. **Ultimate Multisite 메뉴 > 설정 > 결제** 로 이동하면 찾을 수 있습니다.

![Payment settings page in Ultimate Multisite](/img/config/settings-payment-gateways.png)

결제 게이트웨이를 설정하기 전에 구성할 수 있는 기본 결제 설정을 살펴보세요:

**Force auto-rene** **w:** 사용자가 선택한 청구 주기에 따라 결제가 매 청구 주기 종료 시 자동으로 갱신되도록 합니다.

![Force auto-renew toggle setting](/img/config/settings-payment-gateways.png)

**Allow trials without payment** **method:** 이 옵션을 활성화하면 고객이 등록 과정에서 재무 정보를 입력할 필요가 없습니다. 이는 체험 기간이 만료된 후에만 필요합니다.

![Allow trials without payment method toggle](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** 결제 후 송장 발송 여부를 선택할 수 있는 옵션입니다. 사용자는 하위 사이트 대시보드에서 결제 내역에 접근할 수 있습니다. 이 옵션은 수동 결제 게이트웨이에는 적용되지 않습니다.

![Send invoice on payment confirmation toggle](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** 여기서 결제 참조 코드 또는 순차 번호 체계를 선택할 수 있습니다. 송장에 결제 참조 코드를 사용하려면 별도 설정이 필요 없습니다. 순차 번호 체계를 사용하려면 **다음 송장 번호**(이 번호는 시스템에서 생성되는 다음 송장의 송장 번호로 사용됩니다. 새 송장이 생성될 때마다 1씩 증가합니다. 특정 값으로 송장 순차 번호를 재설정하려면 변경 후 저장하면 됩니다)와 **송장 번호 접두사**를 구성해야 합니다.

![Invoice numbering scheme selection](/img/config/settings-payment-gateways.png)

![Sequential invoice number and prefix settings](/img/config/settings-payment-gateways.png)

## Where to find the gateways:

결제 게이트웨이는 같은 페이지에서 설정할 수 있습니다 ( **Ultimate Multisite > Settings > Payments**). **active payment gateways** 아래에 _Stripe_, _Stripe Checkout_, _PayPal_, 그리고 _Manual_을 확인할 수 있습니다.

![Active payment gateways list](/img/config/settings-payment-gateways.png)

각 결제 게이트웨이에 대한 설정 절차를 안내하는 전용 문서가 있으며, 아래 링크에서 확인할 수 있습니다.

**Setting up the Stripe gateway**

**Setting up the PayPal gateway**** **

**Setting up manual payments**

이제 _WooCommerce_, _GoCardless_, 또는 _Payfast_를 결제 게이트웨이로 사용하려면 **애드온을 설치하고 구성**해야 합니다.

### How to install the WooCommerce add-on:

_Stripe_와 _PayPal_이 일부 국가에서 사용 불가하여 Ultimate Multisite 사용자가 플러그인을 효과적으로 이용하는 데 제한이 있다는 점을 이해합니다. 그래서 매우 인기 있는 전자상거래 플러그인 _WooCommerce_를 통합하는 애드온을 만들었습니다. 전 세계 개발자들이 다양한 결제 게이트웨이를 통합하는 애드온을 만들었고, 우리는 이를 활용해 Ultimate Multisite 청구 시스템에서 사용할 수 있는 결제 게이트웨이를 확장했습니다.

_**중요:** Ultimate Multisite: WooCommerce Integration은 최소한 메인 사이트에서 WooCommerce가 활성화되어 있어야 합니다._

먼저 애드온 페이지로 이동하세요. **Ultimate Multisite > Settings** 로 이동하면 찾을 수 있습니다. **Add-ons** 표가 표시됩니다. **Check our Add-ons** 를 클릭하세요.

![Settings page with add-ons section](/img/config/settings-general.png)

**Check our Add-ons** 를 클릭하면 애드온 페이지로 리디렉션됩니다. 여기에서 모든 Ultimate Multisite 애드온을 찾을 수 있습니다. **Ultimate Multisite: WooCommerce Integration** 애드온을 클릭하세요.

![Add-ons page listing available add-ons](/img/config/settings-general.png)

애드온 세부 정보가 표시된 창이 뜹니다. **Install Now** 를 클릭하세요.

![WooCommerce add-on install dialog](/img/config/settings-general.png)

설치가 완료되면 플러그인 페이지로 리디렉션됩니다. 여기서 **Network Activate** 를 클릭하면 WooCommerce 애드온이 네트워크에 활성화됩니다.

![Network Activate the WooCommerce add-on](/img/config/settings-general.png)

활성화 후에도 여전히 WooCommerce 플러그인이 설치 및 활성화되지 않은 경우 알림이 표시됩니다.

![WooCommerce activation reminder notice](/img/config/settings-general.png)

WooCommerce Integration 애드온에 대해 자세히 알아보려면 **여기를 클릭하세요**.

### How to install the GoCardless add-on:

_GoCardless_ 애드온 설치 단계는 _WooCommerce_ 애드온과 거의 동일합니다. 애드온 페이지로 이동해 **Ultimate Multisite: GoCardless Gateway** 애드온을 선택하세요.

![Add-ons page listing available add-ons](/img/config/settings-general.png)

애드온 창이 뜹니다. **Install Now** 를 클릭하세요.

![GoCardless add-on install dialog](/img/config/settings-general.png)

설치가 완료되면 플러그인 페이지로 리디렉션됩니다. 여기서 **Network Activate** 를 클릭하면 _GoCardless_ 애드온이 네트워크에 활성화됩니다.

![Network Activate the GoCardless add-on](/img/config/settings-general.png)

_GoCardless_ 게이트웨이 사용을 시작하는 방법을 배우려면 **이 문서를 읽으세요**.

### How to install the Payfast add-on:

애드온 페이지로 이동해 **Ultimate Multisite: Payfast Gateway** 애드온을 선택하세요.

![Add-ons page listing available add-ons](/img/config/settings-general.png)

애드온 창이 뜹니다. **Install Now.** 를 클릭하세요.

![Payfast add-on install dialog](/img/config/settings-general.png)

설치가 완료되면 플러그인 페이지로 리디렉션됩니다. 여기서 **Network Activate** 를 클릭하면 _Payfast_ 애드온이 네트워크에 활성화됩니다.

![Network Activate the Payfast add-on](/img/config/settings-general.png)
