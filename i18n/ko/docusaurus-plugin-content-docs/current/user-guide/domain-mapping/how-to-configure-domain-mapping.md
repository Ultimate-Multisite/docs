---
title: Domain Mapping 구성 방법
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# 도메인 매핑 구성 방법(v2)

_**중요 참고: 이 문서는 Ultimate Multisite 버전 2.x를 기준으로 합니다.**_

프리미엄 네트워크의 가장 강력한 기능 중 하나는 고객에게 자신의 사이트에 최상위 도메인을 연결할 수 있는 기회를 제공하는 것입니다. 결국 무엇이 더 전문적으로 보일까요: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) 또는 [_**joesbikeshop.com**_](http://joesbikeshop.com)? 그래서 Ultimate Multisite는 타사 plugin을 사용할 필요 없이 해당 기능을 기본으로 제공합니다.

## 도메인 매핑이란 무엇인가요? {#whats-domain-mapping}

이름에서 알 수 있듯이, 도메인 매핑은 Ultimate Multisite가 사용자 지정 도메인에 대한 요청을 받아 그 특정 도메인이 연결된 네트워크의 해당 사이트로 그 요청을 매핑하는 기능입니다.

### Ultimate Multisite 네트워크에서 도메인 매핑을 설정하는 방법 {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

도메인 매핑이 작동하려면 사용자가 일부 설정을 해야 합니다. 다행히 Ultimate Multisite가 어려운 작업을 자동화해 주므로 요구 사항을 쉽게 충족할 수 있습니다.

Ultimate Multisite 설치 중에 마법사가 **sunrise.php**를 지정된 폴더로 자동 복사하고 설치합니다. **이 단계가 완료될 때까지 마법사는 진행을 허용하지 않습니다**.

<!-- 스크린샷 없음: sunrise.php 단계가 있는 Ultimate Multisite 설치 마법사 -->

즉, Ultimate Multisite 설치 마법사가 네트워크 설정을 완료하면 즉시 사용자 지정 도메인 매핑을 시작할 수 있습니다.

Ultimate Multisite의 도메인 매핑은 필수가 아닙니다. WordPress Multisite 기본 도메인 매핑 기능이나 다른 도메인 매핑 솔루션을 사용할 수 있는 옵션이 있습니다.

다른 도메인 매핑 솔루션을 사용하기 위해 Ultimate Multisite 도메인 매핑을 비활성화해야 하는 경우, **Ultimate Multisite > Settings > Domain Mapping**에서 이 기능을 비활성화할 수 있습니다.

![admin redirect, 매핑 메시지 및 DNS 옵션을 표시하는 도메인 매핑 설정 페이지](/img/config/domain-mapping-settings.png)

이 옵션 바로 아래에서 **Force Admin Redirect** 옵션도 볼 수 있습니다. 이 옵션을 통해 고객이 사용자 지정 도메인과 하위 도메인 모두에서 admin Dashboard에 접근할 수 있을지, 아니면 그중 하나에서만 접근할 수 있을지 제어할 수 있습니다.

**Force redirect to mapped domain**을 선택하면 고객은 사용자 지정 도메인에서만 admin Dashboard에 접근할 수 있습니다.

**Force redirect to** **network domain** 옵션은 정확히 반대로 동작합니다. 고객이 사용자 지정 도메인에서 로그인을 시도하더라도 하위 도메인에서만 Dashboard에 접근할 수 있습니다.

그리고 **Allow access to the admin by both mapped domain domain and network domain** 옵션은 하위 도메인과 사용자 지정 도메인 모두에서 admin Dashboard에 접근할 수 있도록 허용합니다.

![세 가지 redirect 옵션을 표시하도록 펼쳐진 Admin Redirect 드롭다운](/img/config/domain-mapping-redirect-options.png)

사용자 지정 도메인을 매핑하는 방법은 두 가지가 있습니다. 첫 번째는 super admin으로서 네트워크 admin Dashboard에서 도메인 이름을 매핑하는 것이고, 두 번째는 Account 페이지 아래의 하위 사이트 admin Dashboard를 통해 매핑하는 것입니다.

하지만 네트워크의 하위 사이트 중 하나에 사용자 지정 도메인을 매핑하기 전에, 도메인 이름의 **DNS 설정**이 올바르게 구성되어 있는지 확인해야 합니다.

###

### 도메인 DNS 설정이 올바르게 구성되었는지 확인하기 {#making-sure-the-domain-dns-settings-are-properly-configured}

매핑이 작동하려면 매핑하려는 도메인이 네트워크의 IP 주소를 가리키고 있는지 확인해야 합니다. 네트워크 IP 주소가 필요하다는 점에 유의하세요. 즉, Ultimate Multisite가 설치된 도메인의 IP 주소가 필요하며, 매핑하려는 사용자 지정 도메인의 IP 주소가 아닙니다. 특정 도메인의 IP 주소를 검색하려면 예를 들어 [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html)로 이동하는 것을 권장합니다.

도메인을 올바르게 매핑하려면 **DNS** 구성에 해당 **IP 주소**를 가리키는 **A RECORD**를 추가해야 합니다. DNS 관리는 도메인 등록기관마다 크게 다르지만, 온라인에는 관련 튜토리얼이 많이 있습니다. 도메인 등록기관이 XXXX라고 할 때 " _Creating A Record on XXXX_ "로 검색해 보세요(예: " _Creating A Record on_ _GoDaddy_ ").

이 작업을 수행하는 데 문제가 있다면 **도메인 등록기관 지원팀에 문의**하세요. 이 부분에 대해 도움을 받을 수 있습니다.

고객이 자신의 도메인을 매핑하도록 허용할 계획이라면, 고객이 이 부분의 작업을 직접 수행해야 합니다. 고객이 A Record를 만들 수 없다면 해당 등록기관 지원 시스템으로 안내하세요.

### Super Admin으로 사용자 지정 도메인 이름 매핑하기 {#mapping-custom-domain-name-as-super-admin}

네트워크에서 super admin으로 로그인한 경우 **Ultimate Multisite > Domains**로 이동하여 사용자 지정 도메인 이름을 쉽게 추가하고 관리할 수 있습니다.

![Ultimate Multisite의 Domains 목록 페이지](/img/admin/domains-list.png)

이 페이지에서 상단의 **Add Domain** 버튼을 클릭하면 모달 창이 표시되며, 여기에서 **사용자 지정 도메인 이름**, 사용자 지정 도메인 이름을 적용하려는 **하위 사이트**를 설정하고 입력할 수 있으며, 이를 **기본 도메인** 이름으로 설정할지 여부를 결정할 수 있습니다(하나의 하위 사이트에 **여러 도메인 이름을 매핑**할 수 있다는 점에 유의하세요).

![도메인 이름, 사이트 선택기 및 기본 도메인 토글이 있는 Add Domain 모달](/img/admin/domain-add-modal.png)

모든 정보를 입력한 후 하단의 **Add Existing Domain** 버튼을 클릭할 수 있습니다.

그러면 사용자 지정 도메인의 DNS 정보를 확인하고 가져오는 과정이 시작됩니다. 또한 페이지 하단에서 진행 중인 과정을 따라갈 수 있는 로그를 볼 수 있습니다. 이 과정은 완료하는 데 몇 분 정도 걸릴 수 있습니다.

Ultimate Multisite v2.13.0은 새 사이트가 사이트별 domain으로 처리되어야 하는 host에서 생성될 때 내부 domain 기록도 자동으로 생성합니다. host가 네트워크의 기본 domain이거나 **Site URL** 필드에 구성된 공유 checkout-form 기본 domain 중 하나인 경우, 자동 mapped-domain 기록은 건너뛰어 해당 공유 기본 domain이 이를 사용하는 모든 사이트에서 계속 사용 가능하도록 합니다.

고객이 Domain Seller v1.3.0 이상을 통해 새 domain을 등록하면, Ultimate Multisite는 기본적으로 등록된 domain을 고객의 네트워크 사이트에 자동으로 매핑합니다. 관리자는 기본 domain 플래그, 활성화 상태 또는 SSL 처리와 같은 옵션을 조정하려는 경우가 아니라면, 성공적인 등록 후 별도의 mapped-domain 기록을 더 이상 추가할 필요가 없습니다.

모든 것이 올바르게 설정되었다면 **Stage** 또는 상태가 **Checking DNS**에서 **Ready**로 변경되어야 합니다.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

domain 이름을 클릭하면 그 안의 몇 가지 옵션을 볼 수 있습니다. 빠르게 살펴보겠습니다:

![stage, 사이트, active, primary 및 SSL 토글이 있는 domain 상세 페이지](/img/admin/domain-edit.png)

**Stage:** 이것은 domain이 현재 있는 stage입니다. domain을 처음 추가하면 아마 **Checking DNS** stage에 있을 것입니다. 프로세스가 DNS 항목을 확인하고 올바른지 확인합니다. 그런 다음 domain은 **Checking SSL** stage에 놓입니다. Ultimate Multisite는 domain에 SSL이 있는지 여부를 확인하고 domain을 **Ready** 또는 **Ready (without SSL)**로 분류합니다.

**Site:** 이 domain과 연결된 subdomain입니다. mapped domain은 이 특정 사이트의 콘텐츠를 표시합니다.

**Active:** 이 옵션을 켜거나 꺼서 domain을 활성화하거나 비활성화할 수 있습니다.

**Is Primary Domain?:** 고객은 각 사이트에 대해 둘 이상의 mapped domain을 가질 수 있습니다. 이 옵션을 사용하여 이것이 특정 사이트의 primary domain인지 선택합니다.

**Is Secure?:** Ultimate Multisite가 domain을 활성화하기 전에 domain에 SSL 인증서가 있는지 여부를 확인하더라도, SSL 인증서를 사용하거나 사용하지 않고 domain을 로드하도록 수동으로 선택할 수 있습니다. 웹사이트에 SSL 인증서가 없는데 SSL로 강제 로드하려고 하면 오류가 발생할 수 있다는 점에 유의하세요.

### Subsite 사용자로 custom domain 이름 매핑하기 {#mapping-custom-domain-name-as-subsite-user}

Subsite 관리자는 자신의 subsite 관리 Dashboard에서도 custom domain 이름을 매핑할 수 있습니다.

먼저 **Domain mapping** 설정에서 이 옵션을 활성화했는지 확인해야 합니다. 아래 스크린샷을 참조하세요.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

이 옵션은 **Plan** 수준 또는 **Ultimate Multisite > Products**의 상품 옵션에서도 설정하거나 구성할 수 있습니다.

![상품 편집 페이지의 Custom Domains 섹션](/img/config/product-custom-domains.png)

이 옵션 중 하나가 활성화되어 있고 subsite 사용자가 custom domain 이름을 매핑할 수 있는 경우, subsite 사용자는 **Account** 페이지 아래에서 **Domains**라는 metabox를 볼 수 있어야 합니다.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

사용자는 **Add Domain** 버튼을 클릭할 수 있으며, 그러면 몇 가지 지침이 있는 modal 창이 표시됩니다.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

그런 다음 사용자는 **Next Step**을 클릭하고 custom domain 이름 추가를 진행할 수 있습니다. 또한 이것이 primary domain인지 여부도 선택할 수 있습니다.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain**을 클릭하면 custom domain의 DNS 정보를 확인하고 가져오는 프로세스가 시작됩니다.

### Domain Syncing 정보 {#about-domain-syncing}

Domain Syncing은 Ultimate Multisite가 custom domain 이름을 hosting Account에 add-on domain으로 추가하여 **domain mapping이 작동하도록 하는** 프로세스입니다.

hosting 제공자가 Ultimate Multisite domain mapping 기능과 통합되어 있으면 domain syncing이 자동으로 발생합니다. 현재 이러한 hosting 제공자는 _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ 및 _Cpanel_입니다.

host-provider 통합이 활성화되어 있으면, Ultimate Multisite는 새로 생성된 사이트에 대한 provider-side DNS 또는 subdomain 생성 작업도 대기열에 추가할 수 있습니다. 해당 작업을 수신하는 통합이 없으면, background job은 무작동 대기열 항목을 피하기 위해 건너뜁니다. mapped domain에 대한 DNS 및 SSL 확인은 정상적인 domain-stage 프로세스를 통해 계속 실행됩니다.

**Integration** 탭 아래 Ultimate Multisite 설정에서 이 통합을 활성화해야 합니다.

![hosting 제공자가 표시된 Ultimate Multisite 설정의 Integrations 탭](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_위에 언급된 제공자 중 귀하의 hosting 제공자가 없다면, **domain 이름을 hosting Account에 수동으로 동기화하거나 추가해야 합니다**._
