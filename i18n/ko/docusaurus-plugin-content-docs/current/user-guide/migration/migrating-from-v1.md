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

![](https://support.delta.nextpress.co/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDRjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c2aff9b312e5b7ec95c9e2c5355480d4aa7258fd/Migration.png)

다음 페이지에서는 버전 1.x와 함께 설치된 레거시 애드온을 알려줍니다. 사용 중인 버전이 버전 2.0과 호환되는지, 아니면 마이그레이션 후 애드온을 업그레이드해야 하는지에 대한 지침이 표시됩니다.

![플러그인 페이지 상단 메시지: Ultimate Multisite 버전 2.0으로 업데이트해 주셔서 감사합니다. 아래에 버전 업그레이더로 연결되는 링크가 있습니다. 그 다음, 업데이트가 필요한 애드온 목록이 표시됩니다.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4E9kAFlcb5.png)

진행할 준비가 되면 **업그레이드 완료를 위해 설치 프로그램 방문** 버튼을 클릭할 수 있습니다.

![빨간색 테두리: '업그레이드 완료를 위해 설치 프로그램 방문' 버튼](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BnJrjt7Drw.png)

그런 다음 설치 마법사 페이지로 이동하며 환영 메시지가 표시됩니다. **시작** 버튼을 클릭하면 다음 페이지로 이동합니다.

![설정 마법사의 환영 페이지. 오른쪽 하단에 빨간색 테두리: '시작' 버튼](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1dvRbsEnrN.png)

**시작** 버튼을 클릭하면 사전 설치 확인 페이지로 리디렉션됩니다. 이 페이지에서는 시스템 정보와 WordPress 설치 상태를 확인하고 **Ultimate Multisite 요구 사항**을 충족하는지 알려줍니다.

![사전 설치 확인 페이지. 설치가 Ultimate Multisite 요구 사항을 충족한다는 확인 메시지가 표시됩니다. 빨간색 테두리, 오른쪽 하단에 '다음 단계로 이동' 버튼](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-i0SwDNkaEO.png)

다음 단계는 Ultimate Multisite 라이선스 키를 입력하고 플러그인을 활성화하는 것입니다. 이렇게 하면 애드온을 포함한 모든 기능이 사이트에서 사용 가능해집니다.

![라이선스 활성화 페이지. 지원 내용과 제외되는 항목이 나열됩니다. 하단에 플러그인 라이선스를 입력하는 상자가 있습니다. 빨간색 테두리, 오른쪽 하단에 '동의 및 활성화' 버튼](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-QAwmR9oLQL.png)

키를 입력한 후 **동의 및 활성화** 버튼을 클릭하세요.

라이선스 활성화 후 다음 페이지에서 **설치** 버튼을 클릭하면 실제 설치를 시작할 수 있습니다. 이 과정에서 버전 2.0이 동작하는 데 필요한 파일과 데이터베이스가 자동으로 생성됩니다.

![설치 페이지. Ultimate Multisite가 동작하도록 업데이트될 내용이 표시됩니다. 빨간색 테두리, 오른쪽 하단에 '설치' 버튼](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FCyBH12y4d.png)

## 이제 마이그레이션

마이그레이터는 전체 멀티사이트를 검사하여 모든 Ultimate Multisite 데이터를 문제 없이 마이그레이션할 수 있는지 확인하는 내장 안전 기능을 제공합니다. **검사 실행** 버튼을 클릭하여 프로세스를 시작하세요.

![마이그레이션 페이지. v1의 모든 데이터를 변환할 수 있는지 확인하는 검사를 실행합니다. 빨간색 테두리, 오른쪽 하단에 '검사 실행' 버튼](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vXLXFLjogz.png)

검사를 실행한 후 두 가지 결과가 나올 수 있습니다: **오류가 있는 경우**와 **오류가 없는 경우**.

### 오류 발생 시

오류 메시지가 표시되면 지원팀에 연락하여 오류를 해결하도록 도와달라고 요청해야 합니다. 티켓을 생성할 때 **오류 로그를 제공**하세요. 로그를 다운로드하거나 '지원팀에 연락'이라는 링크를 클릭할 수 있습니다. 그러면 페이지 오른쪽에 도움말 위젯이 열리고, 설명란에 오류 로그가 미리 채워진 상태로 표시됩니다.

_**시스템이 오류를 발견했으므로 버전 2.0으로 마이그레이션을 진행할 수 없습니다. 오류가 해결될 때까지 네트워크를 실행하려면 버전 1.x로 롤백할 수 있습니다.**_

### 오류 없음 시

시스템이 오류를 찾지 못하면 성공 메시지와 하단에 **이동** 버튼이 표시되어 마이그레이션을 진행할 수 있습니다. 이 페이지에서는 진행하기 전에 데이터베이스 백업을 만들도록 상기시켜 주며, 이를 강력히 권장합니다. 이미 백업이 있다면 **이동** 버튼을 클릭하세요.

![마이그레이션 페이지. 성공 메시지와 백업을 만들 것을 권장하는 내용이 표시됩니다.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-T5ELIgTX5a.png)

![빨간색 테두리, 오른쪽 하단에 '이동' 버튼](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y2AfV93rpf.png)

이것이 전부입니다!

Wizard 설정을 계속 진행하여 로고 및 기타 항목을 업데이트하거나 Ultimate Multisite 버전 2.0 메뉴와 새로운 인터페이스를 탐색할 수 있습니다. 진행해 보세요.
