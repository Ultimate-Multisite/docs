---
title: 자주 묻는 질문
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# 자주 묻는 질문

지원 요청 중 자주 나오는 **자주 묻는 질문**은 다음과 같습니다.

  * **Ultimate Multisite란 무엇인가요?**

Ultimate Multisite는 WordPress 멀티사이트 설치용으로 만들어진 WordPress plugin으로, WordPress 설치를 [WordPress.com](https://WordPress.com)처럼 premium site 네트워크로 변환하여 client가 월간, 분기별 또는 연간 요금으로 site를 만들 수 있게 해 줍니다(무료 plan도 만들 수 있습니다).

  * **Ultimate Multisite는 Multisite 없이 작동하나요?**

아니요. Ultimate Multisite에는 WordPress 멀티사이트, 하위 디렉터리 또는 하위 도메인이 필요합니다.

  * **Ultimate Multisite의 요구 사항은 무엇인가요?**

Ultimate Multisite에는 다음이 필요합니다.

**WordPress Version** : v5.3+ (권장: 최신 안정 버전)
**PHP Version** : 7.4.x (> 8.0 지원 예정)
**MySQL Version** : v5+ (권장: 버전 5.6, 호스팅 제공업체에서 8.0을 사용할 수 없는 경우)

_멀티사이트(하위 도메인 또는 하위 디렉터리)도 활성화되어 있어야 합니다._ [WordPress Multisite 설치 방법](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **Ultimate Multisite는 하위 디렉터리를 사용하는 Multisite에서 작동하나요?**

예. Ultimate Multisite는 하위 디렉터리 설치와 하위 디렉터리 설치를 모두 지원합니다.

  * **Ultimate Multisite는 하위 도메인을 사용하는 Multisite에서 작동하나요?**

예. Ultimate Multisite는 하위 디렉터리 설치와 하위 도메인 설치를 모두 지원합니다.

  * **Ultimate Multisite를 사용해 사용자가 사용할 수 있는 Plugins와 Themes를 제한할 수 있나요?**

예. Ultimate Multisite를 사용하면 네트워크의 각 plan에서 사용할 수 있는 plugins와 themes를 선택할 수 있습니다.

  * **Ultimate Multisite를 사용해 사용자가 자신의 site에 만들 수 있는 게시물 수를 제한할 수 있나요?**

예. Ultimate Multisite를 사용하면 네트워크에서 **사용 가능한 모든 게시물 유형**에 대해 게시물 할당량을 설정할 수 있습니다. 또한 admin이 초대할 수 있는 사용자 수, **디스크 공간 용량,** 등 훨씬 더 많은 항목을 제한할 수 있습니다.

  * **Ultimate Multisite는 Site Templates를 지원하나요?**

예. Ultimate Multisite를 사용하면 원하는 만큼 Site Templates를 만들 수 있습니다. Site Templates는 themes가 아니라 네트워크의 일반 site입니다. plugins와 themes를 활성화하고 해당 Site Template를 원하는 방식으로 사용자 지정할 수 있습니다. 사용자가 그 template를 선택하면, 그 사용자의 site는 모든 사용자 지정이 적용된 상태로 해당 template의 복사본으로 생성됩니다.

특정 template를 plan에 설정할 수도 있습니다. 이렇게 하면 해당 plan에 가입하는 모든 사용자의 site가 그 Site Template의 복제본으로 생성됩니다.

  * **Ultimate Multisite는 WooCommerce와 통합되나요?**

예!

네트워크 사용자가 WooCommerce를 사용할 수 있게 하여 스토어를 설정하도록 하고 싶다면, Ultimate Multisite를 사용해 가능합니다. 각 plan 등급에서 client가 만들 수 있는 product 수를 제한할 수도 있습니다.

Ultimate Multisite의 subscription 결제 측면에서는, [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/)을 사용하여 Ultimate Multisite client가 메인 site에서 WooCommerce 게이트웨이를 통해 결제할 수 있게 할 수 있습니다. 그렇게 하면 WooCommerce용으로 개발된 방대한 결제 게이트웨이 라이브러리를 활용하여 Ultimate Multisite client에게 청구할 수 있습니다.

  * **WPMUDEV Pro Sites에서 subscription을 마이그레이션할 방법이 있나요?**

예, Ultimate Multisite는 이제 Pro Sites 네트워크를 [마이그레이션할 수 있도록 도와주는 유용한 도구](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/)를 제공합니다.

  * **내 Plan Edit Page에서 “Allowed Plugins” 탭이 비어 있는 이유는 무엇인가요?**

Ultimate Multisite는 네트워크에서 network-activated되지 않은 plugins에 대한 접근만 허용하거나 거부할 수 있게 합니다. plugin이 network-activated되면, 그 특성상 네트워크의 모든 site에서 기본적으로 로드됩니다.

“Allowed Plugins” 탭에 plugins가 하나도 표시되지 않는다면, 원하는 plugin이 network-active인지 아닌지 확인하세요.

  * **나만의 Pricing Table 디자인을 사용할 수 있나요?**

예. 버전 1.4.0부터 Ultimate Multisite는 template overrides를 지원합니다.

  * **Ultimate Multisite는 WP Engine에서 작동하나요?**

예. Ultimate Multisite는 항상 WP Engine에서 지원되었지만, 도메인 매핑을 작동시키려면 admin이 수동으로 추가 단계를 수행해야 했습니다(WP Engine panel에 도메인 추가). **버전 1.6.0부터는 더 이상 그렇지 않습니다.** Ultimate Multisite는 WP Engine API와 직접 통합되며 매핑 후 도메인이 panel에 자동으로 추가됩니다.

  * **어떤 호스팅 제공업체를 추천하나요?**

Ultimate Multisite는 어떤 호스팅 제공업체에서도 작동해야 합니다. 유일한 차이는 Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane 및 [Runcloud.io](http://Runcloud.io) 같은 일부 호스팅 회사가 도메인 매핑 기능에 더 긴밀하게 통합되어 있어 별도 설정 없이 작동한다는 점입니다. 다른 호스팅의 경우, 도메인 매핑을 수동으로 설정해야 할 수 있습니다.
