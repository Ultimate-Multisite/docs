---
title: V1에서 마이그레이션
sidebar_position: 17
_i18n_hash: ab3379eeae93ce385ad01c599fc181cb
---
# V1에서 마이그레이션

## Ultimate Multisite는 원래 1.x 릴리스 시리즈에서 2.x 릴리스 시리즈로 전환되었습니다.

Ultimate Multisite 버전 2.0 이상은 코드베이스를 완전히 재작성한 것으로, 이전 버전과 새로운 버전 간에 공유되는 부분이 거의 없습니다. 따라서 1.x에서 2.x로 업그레이드할 때는 데이터가 새로운 버전이 이해할 수 있는 형식으로 마이그레이션되어야 합니다.

다행히도 Ultimate Multisite 2.0+는 핵심에 **마이그레이터**가 내장되어 있어 이전 버전의 데이터를 감지하고 새 형식으로 변환할 수 있습니다. 이 마이그레이션은 버전 2.0+의 **설정 마법사**에서 수행됩니다.

이 강의에서는 마이그레이터가 어떻게 작동하는지, 실패 시 어떻게 대처해야 하는지, 그리고 이 과정에서 발생할 수 있는 문제를 해결하는 방법을 다룹니다.

_**중요: 버전 1.x에서 버전 2.0으로 업그레이드하기 전에 사이트 데이터베이스를 백업했는지 확인하세요**_

## 첫 번째 단계

첫 번째 단계는 플러그인 .zip 파일을 다운로드하고 네트워크 관리 대시보드에 버전 2.0을 설치하는 것입니다.

버전 2.0을 [설치하고 활성화하면](../getting-started/installing-ultimate-multisite.md), 시스템은 Multisite가 레거시 버전을 실행 중임을 자동으로 감지하고 플러그인 페이지 상단에 이 메시지가 표시됩니다.

_**참고:** Multisite에 Ultimate Multisite 1.x가 설치되어 있다면 방금 다운로드한 버전으로 플러그인을 교체할 수 있는 옵션이 있습니다. 지금 바로 **현재 버전 교체**를 클릭하세요._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

다음 페이지에서는 버전 1.x와 함께 설치된 레거시 애드온을 알려줍니다. 사용 중인 버전이 버전 2.0과 호환되는지, 아니면 마이그레이션 후 애드온을 업그레이드해야 하는지에 대한 지침이 표시됩니다.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

진행할 준비가 되면 **업그레이드 완료를 위해 설치 프로그램 방문** 버튼을 클릭할 수 있습니다.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

그런 다음 설치 마법사 페이지로 이동하며 환영 메시지가 표시됩니다. **시작** 버튼을 클릭하면 다음 페이지로 이동합니다.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**시작** 버튼을 클릭하면 사전 설치 확인 페이지로 리디렉션됩니다. 이 페이지에서는 시스템 정보와 WordPress 설치 상태를 확인하고 **Ultimate Multisite 요구 사항**을 충족하는지 알려줍니다.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

다음 단계는 Ultimate Multisite 라이선스 키를 입력하고 플러그인을 활성화하는 것입니다. 이렇게 하면 애드온을 포함한 모든 기능이 사이트에서 사용 가능해집니다.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

키를 입력한 후 **동의 및 활성화** 버튼을 클릭하세요.

라이선스 활성화 후 다음 페이지에서 **설치** 버튼을 클릭하면 실제 설치를 시작할 수 있습니다. 이 과정에서 버전 2.0이 동작하는 데 필요한 파일과 데이터베이스가 자동으로 생성됩니다.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## 이제 마이그레이션

마이그레이터는 전체 멀티사이트를 검사하여 모든 Ultimate Multisite 데이터를 문제 없이 마이그레이션할 수 있는지 확인하는 내장 안전 기능을 제공합니다. **검사 실행** 버튼을 클릭하여 프로세스를 시작하세요.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

검사를 실행한 후 두 가지 결과가 나올 수 있습니다: **오류가 있는 경우**와 **오류가 없는 경우**.

### 오류 발생 시

오류 메시지가 표시되면 지원팀에 연락하여 오류를 해결하도록 도와달라고 요청해야 합니다. 티켓을 생성할 때 **오류 로그를 제공**하세요. 로그를 다운로드하거나 '지원팀에 연락'이라는 링크를 클릭할 수 있습니다. 그러면 페이지 오른쪽에 도움말 위젯이 열리고, 설명란에 오류 로그가 미리 채워진 상태로 표시됩니다.

_**시스템이 오류를 발견했으므로 버전 2.0으로 마이그레이션을 진행할 수 없습니다. 오류가 해결될 때까지 네트워크를 실행하려면 버전 1.x로 롤백할 수 있습니다.**_

### 오류 없음 시

시스템이 오류를 찾지 못하면 성공 메시지와 하단에 **이동** 버튼이 표시되어 마이그레이션을 진행할 수 있습니다. 이 페이지에서는 진행하기 전에 데이터베이스 백업을 만들도록 상기시켜 주며, 이를 강력히 권장합니다. 이미 백업이 있다면 **이동** 버튼을 클릭하세요.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

이것이 전부입니다!

Wizard 설정을 계속 진행하여 로고 및 기타 항목을 업데이트하거나 Ultimate Multisite 버전 2.0 메뉴와 새로운 인터페이스를 탐색할 수 있습니다. 진행해 보세요.
