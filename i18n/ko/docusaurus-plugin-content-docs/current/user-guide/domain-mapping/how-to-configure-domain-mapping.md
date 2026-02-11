---
title: '# 도메인 매핑 구성 방법'
sidebar_position: 6
_i18n_hash: 749818bf3eca7ddb6e6bfae1ddb7926f
---
# 도메인 매핑 설정 방법 (v2)

_**중요 안내: 이 문서는 Ultimate Multisite 버전 2.x를 기준으로 합니다.**_

프리미엄 네트워크의 가장 강력한 기능 중 하나는 고객에게 사이트에 최상위 도메인을 연결할 수 있는 기회를 제공하는 것입니다. 결국, 어느 것이 더 전문적으로 보일까요: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) 또는 [_**joesbikeshop.com**_](http://joesbikeshop.com)? 그래서 Ultimate Multisite는 서드파티 플러그인을 사용하지 않고도 이 기능을 기본으로 제공합니다.

## 도메인 매핑이란?

이름에서 알 수 있듯이, 도메인 매핑은 Ultimate Multisite가 사용자 정의 도메인 요청을 받아 해당 도메인이 연결된 네트워크 내의 해당 사이트에 매핑해 주는 기능입니다.

### Ultimate Multisite 네트워크에서 도메인 매핑 설정 방법

도메인 매핑은 작동하려면 귀하가 일부 설정을 해야 합니다. 다행히도 Ultimate Multisite는 어려운 작업을 자동화해 주어 요구 사항을 쉽게 충족할 수 있도록 해 줍니다.

Ultimate Multisite 설치 중에 마법사는 **sunrise.php**를 지정된 폴더에 자동으로 복사하고 설치합니다. **이 단계가 완료될 때까지 마법사는 진행을 허용하지 않습니다**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zrBdFs13Dy.png)

즉, Ultimate Multisite 설치 마법사가 네트워크 설정을 완료하면 바로 사용자 정의 도메인 매핑을 시작할 수 있습니다.

Ultimate Multisite에서 도메인 매핑은 필수가 아닙니다. WordPress Multisite 기본 도메인 매핑 기능이나 다른 도메인 매핑 솔루션을 사용할 수 있는 옵션이 있습니다.

다른 도메인 매핑 솔루션을 사용하려면 Ultimate Multisite 도메인 매핑을 비활성화해야 할 경우, **Ultimate Multisite > Settings > Domain Mapping**에서 이 기능을 비활성화할 수 있습니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bbrC47pTcX.png)

이 옵션 바로 아래에 **Force Admin Redirect** 옵션이 표시됩니다. 이 옵션은 고객이 사용자 정의 도메인과 서브도메인 모두에서 관리자 대시보드에 접근할 수 있는지, 아니면 하나의 도메인에서만 접근할 수 있는지를 제어합니다.

**Force redirect to mapped domain**를 선택하면 고객은 사용자 정의 도메인에서만 관리자 대시보드에 접근할 수 있습니다.

**Force redirect to network domain** 옵션은 반대로, 고객이 사용자 정의 도메인에 로그인하려 해도 서브도메인에서만 관리자 대시보드에 접근할 수 있도록 합니다.

그리고 **Allow access to the admin by both mapped domain domain and network domain** 옵션은 고객이 서브도메인과 사용자 정의 도메인 모두에서 관리자 대시보드에 접근할 수 있도록 합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JYwHPWhYwV.png)

사용자 정의 도메인을 매핑하는 방법은 두 가지가 있습니다. 첫 번째는 네트워크 관리자 대시보드에서 슈퍼 관리자 권한으로 도메인 이름을 매핑하는 것이고, 두 번째는 계정 페이지 아래의 서브사이트 관리자 대시보드에서 매핑하는 것입니다.

그러나 네트워크의 서브사이트 중 하나에 사용자 정의 도메인을 매핑하기 전에 도메인 이름의 **DNS 설정**이 올바르게 구성되어 있는지 확인해야 합니다.

### 

### 도메인 DNS 설정이 올바르게 구성되었는지 확인하기

매핑이 작동하려면 매핑하려는 도메인이 네트워크의 IP 주소를 가리키고 있는지 확인해야 합니다. 여기서 필요한 것은 네트워크 IP 주소, 즉 Ultimate Multisite가 설치된 도메인의 IP 주소이며, 매핑하려는 사용자 정의 도메인의 IP 주소가 아닙니다. 특정 도메인의 IP 주소를 검색하려면 예를 들어 [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html)로 이동하는 것을 권장합니다.

도메인을 올바르게 매핑하려면 **DNS** 설정에 해당 **IP 주소**를 가리키는 **A RECORD**를 추가해야 합니다. DNS 관리는 도메인 등록기관마다 크게 다르지만, " _Creating A Record on XXXX_ " (XXXX은 귀하의 도메인 등록기관, 예: " _Creating A Record on_ _GoDaddy_ ")를 검색하면 온라인에 많은 튜토리얼이 있습니다.

작동에 문제가 있으면 **도메인 등록기관 지원팀에 연락**하면 이 부분을 도와줄 수 있습니다.

클라이언트가 자신의 도메인을 매핑하도록 허용하려면 이 부분을 스스로 처리해야 합니다. A 레코드를 만들 수 없을 경우 등록기관 지원 시스템을 안내하세요.

### 슈퍼 관리자 권한으로 사용자 정의 도메인 매핑

네트워크에서 슈퍼 관리자 권한으로 로그인한 경우 **Ultimate Multisite > Domains**에서 사용자 정의 도메인 이름을 쉽게 추가하고 관리할 수 있습니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5XxtXP622s.png)

이 페이지에서 상단의 **Add Domain** 버튼을 클릭하면 모달 창이 열리며 **custom domain name**, **적용하려는 서브사이트**, 그리고 **primary domain**으로 설정할지 여부를 입력할 수 있습니다 (여러 도메인 이름을 하나의 서브사이트에 매핑할 수 있다는 점을 참고하세요).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rD6fnbzRe9.png)

모든 정보를 입력한 후 하단의 **Add Existing Domain** 버튼을 클릭하면 됩니다.

이렇게 하면 사용자 정의 도메인의 DNS 정보를 확인하고 가져오는 프로세스가 시작됩니다. 진행 상황을 확인할 수 있도록 페이지 하단에 로그가 표시됩니다. 이 프로세스는 완료까지 몇 분이 걸릴 수 있습니다.

**Stage** 또는 상태는 모든 것이 제대로 설정되면 **Checking DNS**에서 **Ready**로 변경됩니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-3g2mkrlk75we98uhscagnr3ini0s)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5dIPdYQfZi.png)

도메인 이름을 클릭하면 내부 옵션을 확인할 수 있습니다. 빠르게 살펴보겠습니다:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5tCiNUIKih.png)

**Stage:** 도메인이 현재 어느 단계에 있는지를 나타냅니다. 도메인을 처음 추가하면 아마도 **Checking DNS** 단계일 것입니다. 프로세스는 DNS 항목을 확인하고 올바른지 확인합니다. 그 다음 도메인은 **Checking SSL** 단계로 이동합니다. Ultimate Multisite는 도메인에 SSL이 있는지 여부를 확인하고 도메인을 **Ready** 또는 **Ready (without SSL)**로 분류합니다.

**Site:** 이 도메인과 연결된 서브도메인입니다. 매핑된 도메인은 해당 특정 사이트의 콘텐츠를 표시합니다.

**Active:** 이 옵션을 켜거나 끄면 도메인을 활성화하거나 비활성화할 수 있습니다.

**Is Primary Domain?:** 고객은 각 사이트에 대해 여러 매핑된 도메인을 가질 수 있습니다. 이 옵션을 사용하여 특정 사이트의 기본 도메인인지 선택합니다.

**Is Secure?:** Ultimate Multisite는 도메인에 SSL 인증서가 있는지 여부를 확인한 후 활성화하지만, 수동으로 SSL 인증서가 있는 경우와 없는 경우를 선택할 수 있습니다. 웹사이트에 SSL 인증서가 없고 SSL로 강제 로드하려 하면 오류가 발생할 수 있습니다.

### 서브사이트 사용자로서 사용자 정의 도메인 매핑

서브사이트 관리자는 서브사이트 관리자 대시보드에서 사용자 정의 도메인 이름을 매핑할 수 있습니다.

먼저 **Domain mapping** 설정에서 이 옵션을 활성화했는지 확인해야 합니다. 아래 스크린샷을 참조하세요.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-M3MO6RKBWe.png)

또한 **Ultimate Multisite > Products**에서 **Plan** 수준 또는 제품 옵션에서 이 옵션을 설정하거나 구성할 수 있습니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JRqx7Uhqsa.png)

이 옵션 중 하나라도 활성화되고 서브사이트 사용자가 사용자 정의 도메인 매핑을 허용받으면, 서브사이트 사용자는 **Account** 페이지 아래에 **Domains**라는 메타박스를 볼 수 있습니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DUeHUY66yP.png)

사용자는 **Add Domain** 버튼을 클릭하면 지침이 포함된 모달 창이 열립니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-n5mNhDpL38.png)

그런 다음 사용자는 **Next Step**를 클릭하고 사용자 정의 도메인 이름을 추가할 수 있습니다. 또한 이 도메인이 기본 도메인인지 여부를 선택할 수 있습니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0vlbs2dcaz.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-zez2zeiqz8mi67o7izkg3d7x43ve) **Add Domain**을 클릭하면 사용자 정의 도메인의 DNS 정보를 확인하고 가져오는 프로세스가 시작됩니다.

### 도메인 동기화에 대하여

도메인 동기화는 Ultimate Multisite가 사용자 정의 도메인 이름을 호스팅 계정에 추가 도메인으로 추가하여 도메인 매핑이 작동하도록 하는 프로세스입니다.

도메인 동기화는 호스팅 제공업체가 Ultimate Multisite 도메인 매핑 기능과 통합되어 있는 경우 자동으로 발생합니다. 현재 이 호스팅 제공업체는 _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ 및 _Cpanel_입니다.

이 통합을 활성화하려면 Ultimate Multisite 설정의 **Integration** 탭에서 활성화해야 합니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-k6i46r4x2yddii0op4x343jizq20)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JMADuxaH62.png)

_위에 언급된 호스팅 제공업체 중 하나가 아닌 경우, **호스팅 계정에 도메인 이름을 수동으로 동기화하거나 추가**해야 합니다._
