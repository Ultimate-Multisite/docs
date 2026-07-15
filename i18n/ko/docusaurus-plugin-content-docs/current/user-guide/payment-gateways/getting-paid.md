---
title: 대금 받기
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# 결제 받기 (v2)

_**중요 참고: 이 문서는 Ultimate Multisite version 2.x를 기준으로 합니다.**_

Ultimate Multisite에는 내장된 멤버십 및 청구 시스템이 있습니다. 청구 시스템이 작동하도록 전자상거래에서 사용되는 가장 일반적인 결제 게이트웨이를 통합했습니다. Ultimate Multisite의 기본 결제 게이트웨이는 _Stripe_ , _PayPal_ , 그리고 수동 결제입니다. 또한 각각의 add-on을 설치하여 _WooCommerce_ , _GoCardless_ 및 _Payfast_ 를 사용해 결제를 받을 수도 있습니다.

## 기본 설정 {#basic-settings}

Ultimate Multisite 결제 설정에서 이러한 결제 게이트웨이 중 어느 것이든 구성할 수 있습니다. **Ultimate Multisite menu > Settings > Payments**로 이동하여 찾을 수 있습니다.

![Ultimate Multisite에서 Payments 패널을 표시하는 Payments 설정 페이지](/img/config/payments-settings-page.png)

결제 게이트웨이를 설정하기 전에, 구성할 수 있는 기본 결제 설정을 살펴보세요.

**자동 갱신 강제 적용** **:** 사용자가 선택한 청구 주기에 따라 각 청구 기간이 끝날 때 결제가 자동으로 반복되도록 보장합니다.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0은 자동 갱신이 활성화된 반복 멤버십을 저장하기 전에 활성 게이트웨이에 재사용 가능한 갱신 자격 증명이 있는지 확인합니다. 갱신 자격 증명은 게이트웨이 구독, 청구 계약, 저장된 vault 토큰 또는 이에 상응하는 재사용 가능한 결제 수단일 수 있습니다. 게이트웨이가 사용 가능한 자격 증명이 없다고 보고하면, Ultimate Multisite는 멤버십을 저장하지만 자동 갱신을 끄고 누락된 자격 증명 상태를 기록하여 관리자 또는 지원 흐름이 갱신일 전에 고객에게 결제 재승인을 요청할 수 있게 합니다.

이는 게이트웨이가 일회성 결제만 수금할 수 있는데도 멤버십이 자동 갱신되는 것처럼 보이는 상황을 방지합니다. 게이트웨이 add-on은 게이트웨이가 일회성 캡처와 vault/구독 결제 모드를 모두 지원하는 경우 특히, 반복 결제 과정에서 재사용 가능한 자격 증명이 저장되는지 확인해야 합니다.

**결제 수단 없이 체험 허용** **:** 이 옵션을 활성화하면 클라이언트가 등록 과정에서 금융 정보를 추가할 필요가 없습니다. 이는 체험 기간이 만료된 후에만 필요합니다.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**결제 확인 시 청구서 보내기:** 결제 후 청구서를 보낼지 여부를 선택할 수 있는 옵션입니다. 사용자는 자신의 subsite Dashboard에서 결제 내역에 접근할 수 있다는 점에 유의하세요. 이 옵션은 수동 게이트웨이에는 적용되지 않습니다.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**청구서 번호 체계:** 여기에서 결제 참조 코드 또는 순차 번호 체계를 선택할 수 있습니다. 청구서에 결제 참조 코드를 사용하기로 선택하면 아무것도 구성할 필요가 없습니다. 순차 번호 체계를 사용하기로 선택하면 **다음 청구서 번호**(이 번호는 시스템에서 생성되는 다음 청구서의 청구서 번호로 사용됩니다. 새 청구서가 생성될 때마다 1씩 증가합니다. 값을 변경하고 저장하여 청구서 순차 번호를 특정 값으로 재설정할 수 있습니다)와 **청구서 번호 접두사**를 구성해야 합니다.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## 게이트웨이를 찾을 위치: {#where-to-find-the-gateways}

같은 페이지( **Ultimate Multisite > Settings > Payments**)에서 결제 게이트웨이를 설정할 수 있습니다. **활성 결제 게이트웨이** 바로 아래에서 _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ 및 _Manual_을 볼 수 있습니다.

![Stripe, Stripe Checkout, PayPal 및 Manual을 나열하는 활성 결제 게이트웨이 섹션](/img/config/payments-active-gateways.png)

각 결제 게이트웨이마다 설정 단계를 안내하는 전용 문서가 있으며, 아래 링크에서 찾을 수 있습니다.

결제 세부 정보를 보고 편집할 수 있습니다.

![결제 편집 인터페이스](/img/admin/payment-edit.png)

결제 편집 페이지의 전체 보기입니다.

![결제 편집 전체 인터페이스](/img/admin/payment-edit-full.png)

결제 게이트웨이 설정의 전체 보기이기도 합니다.

![결제 게이트웨이 설정 전체 페이지](/img/config/settings-payments-gateways-full.png)

**Stripe 게이트웨이 설정하기**

**PayPal 게이트웨이 설정하기**** **

**수동 결제 설정하기**

이제 _WooCommerce_ , _GoCardless_ 또는 _Payfast_ 를 결제 게이트웨이로 사용하려면, 해당 **add-on을 설치하고 구성**해야 합니다.

### WooCommerce add-on 설치 방법: {#how-to-install-the-woocommerce-add-on}

_Stripe_ 와 _PayPal_ 은 일부 국가에서 사용할 수 없어 Ultimate Multisite 사용자가 우리 plugin을 효과적으로 사용하는 데 제한이 있거나 방해가 된다는 점을 이해합니다. 그래서 매우 인기 있는 전자상거래 plugin인 _WooCommerce,_ 를 통합하기 위한 add-on을 만들었습니다. 전 세계 개발자들이 여기에 다양한 결제 게이트웨이를 통합하기 위한 add-on을 만들었습니다. 우리는 이를 활용하여 Ultimate Multisite 청구 시스템과 함께 사용할 수 있는 결제 게이트웨이를 확장했습니다.

_**중요:** Ultimate Multisite: WooCommerce Integration은 적어도 메인 site에서 WooCommerce가 활성화되어 있어야 합니다._

먼저 add-on 페이지로 이동하세요. **Ultimate Multisite > Settings**로 이동하여 찾을 수 있습니다. **Add-ons** 표가 표시됩니다. **Check our Add-ons**를 클릭하세요.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

**Check our Add-ons**를 클릭하면 add-on 페이지로 리디렉션됩니다. 여기에서 모든 Ultimate Multisite add-on을 찾을 수 있습니다. **Ultimate Multisite: WooCommerce Integration** add-on을 클릭하세요.

![WooCommerce Integration을 포함한 Ultimate Multisite add-on을 나열하는 add-on 페이지](/img/addons/addons-page.png)

add-on 세부 정보가 있는 창이 팝업으로 표시됩니다. **Install Now**를 클릭하기만 하면 됩니다.

<!-- 스크린샷 없음: Install Now 버튼이 있는 Ultimate Multisite WooCommerce Integration add-on 세부 정보 대화 상자 -->

설치가 완료되면 plugins 페이지로 리디렉션됩니다. 여기서 **Network Activate**를 클릭하기만 하면 WooCommerce add-on이 네트워크에서 활성화됩니다.

<!-- 스크린샷 없음: WooCommerce Integration add-on의 Network Activate 링크가 있는 Plugins 페이지 -->

활성화한 후에도 웹사이트에 WooCommerce plugin이 아직 설치 및 활성화되어 있지 않다면 알림을 받게 됩니다.

<!-- 스크린샷 없음: 관리자에게 WooCommerce plugin을 설치하고 활성화하라고 알려 주는 관리자 알림 -->

WooCommerce Integration add-on에 대해 더 읽으려면 **여기를 클릭하세요**.

### GoCardless add-on 설치 방법: {#how-to-install-the-gocardless-add-on}

_GoCardless_ add-on을 설치하는 단계는 _WooCommerce_ add-on과 거의 같습니다. add-ons 페이지로 이동하여 **Ultimate Multisite: GoCardless Gateway** add-on을 선택하세요.

<!-- 스크린샷 없음: Ultimate Multisite GoCardless Gateway add-on이 강조 표시된 Add-ons 페이지 -->

add-on 창이 팝업으로 표시됩니다. **Install Now**를 클릭하세요.

<!-- 스크린샷 없음: Install Now 버튼이 있는 Ultimate Multisite GoCardless Gateway add-on 세부 정보 대화 상자 -->

설치가 완료되면 plugins 페이지로 리디렉션됩니다. 여기서 **Network Activate**를 클릭하기만 하면 _GoCardless_ add-on이 네트워크에서 활성화됩니다.

<!-- 스크린샷 없음: GoCardless Gateway add-on의 Network Activate 링크가 있는 Plugins 페이지 -->

_GoCardless_ gateway를 시작하는 방법을 알아보려면 **이 문서를 읽어보세요**.

### Payfast add-on 설치 방법: {#how-to-install-the-payfast-add-on}

add-ons 페이지로 이동하여 **Ultimate Multisite: Payfast Gateway** add-on을 선택하세요.

<!-- 스크린샷 없음: Ultimate Multisite Payfast Gateway add-on이 강조 표시된 Add-ons 페이지 -->

add-on 창이 팝업으로 표시됩니다. **Install Now.**를 클릭하세요.

<!-- 스크린샷 없음: Install Now 버튼이 있는 Ultimate Multisite Payfast Gateway add-on 세부 정보 대화 상자 -->

설치가 완료되면 plugins 페이지로 리디렉션됩니다. 여기서 **Network Activate**를 클릭하기만 하면 _Payfast_ add-on이 네트워크에서 활성화됩니다.

<!-- 스크린샷 없음: Payfast Gateway add-on의 Network Activate 링크가 있는 Plugins 페이지 -->
