---
title: 요금제 다운그레이드
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# 플랜 다운그레이드(v2) {#downgrading-a-plan-v2}

_**중요 참고: 이 문서는 Ultimate Multisite 버전 2.x에 관한 것입니다.**_

플랜 또는 구독 다운그레이드는 예산이 제한되어 있거나 subsite를 운영하는 데 많은 리소스가 필요하지 않다고 판단한 client가 흔히 할 수 있는 작업입니다.

## 플랜을 다운그레이드하는 방법 {#how-to-downgrade-a-plan}

client는 언제든지 자신의 subsite admin dashboard에 로그인하고 Account 페이지에서 **변경**을 클릭하여 플랜을 다운그레이드할 수 있습니다.

![Your Membership 카드와 변경 버튼이 있는 고객 Account 페이지](/img/account-page/membership-change-button.png)

**변경** 버튼을 클릭하면 user/client는 구독을 변경할 플랜을 선택할 수 있는 checkout 페이지로 리디렉션됩니다.

![고객 측의 플랜 다운그레이드 옵션 페이지](/img/account-page/downgrade-picker.png)

이 예시에서는 플랜을 **Premium**에서 **Free**로 다운그레이드합니다.

진행하려면 user가 **Complete Checkout** 버튼을 클릭하기만 하면 됩니다. 그러면 membership의 보류 중인 변경 사항에 대한 메시지를 표시하는 Account 페이지로 다시 이동합니다. 변경 사항은 고객의 **다음 결제 주기**에 적용됩니다.

![보류 중인 membership 변경 배너를 표시하는 Account 페이지](/img/account-page/pending-change.png)

### user가 플랜을 다운그레이드하면 어떻게 되나요 {#what-happens-when-a-user-downgrades-their-plan}

플랜을 다운그레이드해도 user의 subsite에 있는 기존 구성은 변경되지 않는다는 점이 중요합니다.

site template을 변경하면 subsite가 완전히 삭제되고 재설정되므로 site template은 자동으로 변경되지 않습니다. 이는 불필요한 데이터 손실을 방지하기 위한 것입니다. 따라서 posts를 제외하고 디스크 공간, themes, plugins 등은 그대로 유지됩니다.

각 플랜에 설정한 limits와 quotas가 주요 우려 사항이라는 점은 이해하지만, 구성을 삭제하거나 변경할 경우 user의 subsite에 미칠 피해를 고려해야 합니다.

플랜에 설정된 한도를 초과하는 posts의 경우 3가지 옵션이 있습니다: **posts를 그대로 유지** *,* **posts를 휴지통으로 이동** *,* 또는 **posts를 초안으로 이동** *.* Ultimate Multisite 설정에서 이를 구성할 수 있습니다.

![post-limit-exceeded 동작 옵션을 표시하는 Network Admin Settings Sites 페이지](/img/account-page/settings-sites-post-limit.png)

### 결제는 어떻게 되나요 {#what-happens-to-the-payment}

버전 2.0에서는 더 이상 proration 측면에서 결제 조정이 필요하지 않습니다.

이는 시스템이 새 플랜/membership이 적용되기 **전에 기존 membership이 결제 주기를 완료할 때까지** 기다리기 때문입니다. 새 membership의 새 청구 금액은 다음 결제 주기에 자동으로 적용되어 청구됩니다.
