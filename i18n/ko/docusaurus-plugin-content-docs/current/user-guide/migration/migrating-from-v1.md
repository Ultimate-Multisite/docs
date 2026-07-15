---
title: V1에서 마이그레이션
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1에서 마이그레이션하기

## Ultimate Multisite는 기존 1.x 릴리스 계열에서 2.x 릴리스 계열로 전환되었습니다. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite version 2.0 이상은 코드베이스를 완전히 다시 작성한 것으로, 이전 version과 새 version 사이에 공유되는 부분이 거의 없다는 뜻입니다. 따라서 1.x에서 2.x로 업그레이드할 때는 새 version이 이해할 수 있는 형식으로 데이터를 마이그레이션해야 합니다.

다행히 Ultimate Multisite 2.0+에는 이전 version의 데이터를 감지하고 새 형식으로 변환할 수 있는 마이그레이터가 코어에 내장되어 **함께 제공됩니다**. 이 마이그레이션은 version 2.0+의 **Setup Wizard** 중에 진행됩니다.

이 레슨에서는 마이그레이터가 작동하는 방식, 실패할 경우 해야 할 일, 그리고 이 과정에서 발생할 수 있는 문제를 해결하는 방법을 다룹니다.

_**중요: version 1.x에서 version 2.0으로 업그레이드를 시작하기 전에 사이트 데이터베이스의 백업을 생성했는지 확인하세요**_

## 첫 단계 {#first-steps}

첫 번째 단계는 plugin .zip 파일을 다운로드하고 네트워크 admin dashboard에 version 2.0을 설치하는 것입니다.

[version 2.0을 설치하고 활성화](../getting-started/installing-ultimate-multisite.md)하면, 시스템이 Multisite가 레거시 version에서 실행 중임을 자동으로 감지하고 plugin 페이지 상단에 이 메시지를 표시합니다.

_**참고:** Multisite에 Ultimate Multisite 1.x가 설치되어 있다면, 방금 다운로드한 version으로 plugin을 교체할 수 있는 옵션이 표시됩니다. 계속 진행하여 **Replace current with uploaded**를 클릭하세요._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

다음 페이지에서는 version 1.x와 함께 설치된 레거시 add-on을 알려줍니다. 사용 중인 version이 version 2.0과 호환되는지, 또는 마이그레이션 후 add-on의 업그레이드된 version을 설치해야 하는지에 대한 안내가 표시됩니다.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

진행할 준비가 되면 **Visit the Installer to finish the upgrade**라고 표시된 버튼을 클릭할 수 있습니다.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

그러면 몇 가지 환영 메시지가 있는 설치 wizard 페이지로 이동합니다. 다음 페이지로 이동하려면 **Get Started**를 클릭하기만 하면 됩니다.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started**를 클릭하면 Pre-install Checks_._로 리디렉션됩니다. 여기에서 시스템 정보와 WordPress 설치 상태가 표시되고 **Ultimate Multisite의 요구 사항**을 충족하는지 알려줍니다.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

다음 단계는 Ultimate Multisite 라이선스 키를 입력하고 plugin을 활성화하는 것입니다. 이렇게 하면 add-on을 포함한 모든 기능을 사이트에서 사용할 수 있습니다.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

키를 입력한 후 **Agree & Activate**를 클릭하세요.

라이선스 활성화 후 다음 페이지에서 **Install**을 클릭하여 실제 설치를 시작할 수 있습니다. 그러면 version 2.0이 작동하는 데 필요한 파일과 데이터베이스가 자동으로 생성됩니다.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## 이제 마이그레이션입니다 {#now-the-migration}

마이그레이터에는 모든 Ultimate Multisite 데이터를 문제없이 마이그레이션할 수 있는지 확인하기 위해 전체 multisite를 검사하는 내장 안전 기능이 있습니다. 프로세스를 시작하려면 **Run Check** 버튼을 클릭하세요.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

검사를 실행한 후에는 두 가지 가능성이 있습니다. 결과가 오류 **있음** 또는 **오류 없음**일 수 있습니다.

### 오류 있음 {#with-error}

오류 메시지가 표시되면 지원 팀에 연락하여 오류 수정을 도와달라고 해야 합니다. 티켓을 만들 때 **오류 로그를 제공**해야 합니다. 로그를 다운로드하거나 지원 팀에 문의하라는 링크를 클릭할 수 있습니다. 그러면 페이지 오른쪽에 도움말 위젯이 열리고, 설명 아래에 오류 로그를 포함하여 필드가 미리 채워집니다.

_**시스템에서 오류를 발견했기 때문에 version 2.0으로 마이그레이션을 진행할 수 없습니다. 그런 다음 오류가 수정될 때까지 네트워크 실행을 재개하기 위해 version 1.x로 롤백할 수 있습니다.**_

### 오류 없음 {#without-error}

시스템에서 오류를 찾지 못하면 성공 메시지와 함께 하단에 마이그레이션을 진행할 수 있는 **Migrate** 버튼이 표시됩니다. 이 페이지에서는 계속 진행하기 전에 데이터베이스 백업을 생성하라는 안내가 표시되며, 저희는 이를 강력히 권장합니다. 이미 백업이 있다면 **Migrate**를 누르세요.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

필요한 것은 이것이 전부입니다!

Wizard 설정을 계속 실행하여 네트워크의 로고와 기타 항목을 업데이트하거나, Ultimate Multisite version 2.0 메뉴와 새 인터페이스를 둘러보기 시작할 수 있습니다. 자유롭게 즐겨보세요.
