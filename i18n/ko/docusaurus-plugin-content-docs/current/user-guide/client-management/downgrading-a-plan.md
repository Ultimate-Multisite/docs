---
title: 플랜 다운그레이드
sidebar_position: 7
_i18n_hash: 6513875b161bca42a0dc0612f40b0ce5
---
# 플랜 다운그레이드 (v2)

_**중요한 주의: 이 문서는 Ultimate Multisite 버전 2.x를 참조합니다.**_

## 플랜 다운그레이드 방법

고객은 서브사이트 관리자 대시보드에 로그인하고 계정 페이지에서 **Change**를 클릭하여 언제든 플랜을 다운그레이드할 수 있습니다.

![Account page with Change button under membership](/img/admin/memberships-list.png)

**Change** 버튼을 클릭하면 사용자는 결제 페이지로 리디렉션되어 구독을 변경하려는 플랜을 선택할 수 있습니다.

![Checkout page showing plan options for downgrade](/img/admin/memberships-list.png)

이 예에서는 **Premium**에서 **Free**로 플랜을 다운그레이드합니다.

계속하려면 사용자는 **Complete Checkout** 버튼을 클릭하기만 하면 됩니다. 그러면 계정 페이지로 돌아가 멤버십의 보류 중인 변경 사항에 대한 메시지가 표시됩니다. 변경 사항은 고객의 **다음 청구 주기**에 적용됩니다.

![Account page showing pending membership change message](/img/admin/memberships-list.png)

### 사용자가 플랜을 다운그레이드하면 발생하는 일

플랜을 다운그레이드해도 사용자의 서브사이트에 있는 기존 구성을 변경하지 않는다는 점에 유의해야 합니다.

사이트 템플릿을 변경하면 서브사이트가 완전히 지워지고 재설정되므로 플랜 다운그레이드 시 사이트 템플릿이 자동으로 변경되지 않습니다. 이는 불필요한 데이터 손실을 방지하기 위함입니다. 따라서 디스크 공간, 테마, 플러그인 등은 게시물만 제외하고 그대로 유지됩니다.

각 플랜에 설정한 한계와 할당량이 가장 큰 관심사일 수 있다는 점을 이해하지만, 서브사이트의 구성을 삭제하거나 변경할 경우 발생할 수 있는 손상을 고려해야 합니다.

플랜에 설정된 한도를 초과하는 게시물에 대해 세 가지 옵션이 있습니다: **게시물을 그대로 유지**, **게시물을 휴지통으로 이동**, 또는 **게시물을 초안으로 이동**. 이 설정은 Ultimate Multisite 설정에서 구성할 수 있습니다.

![Post limit exceeded options in Ultimate Multisite settings](/img/config/settings-sites.png)

### 결제에 대한 영향

버전 2.0에서는 비례 계산에 따른 결제 조정이 필요하지 않습니다.

이는 시스템이 기존 멤버십이 **청구 주기를 완료한 후** 새 플랜/멤버십이 적용되도록 기다리기 때문입니다. 새 멤버십의 새로운 청구 금액은 자동으로 적용되어 다음 청구 주기에 청구됩니다.
