---
title: Ultimate Multisite 설치하기
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite 설치하기 {#installing-ultimate-multisite}

:::note
이 튜토리얼은 이미 WordPress Multisite가 설치 및 구성되어 있다고 가정합니다. 설치 방법은 WP Beginner의 [이 튜토리얼](https://www.wpbeginner.com/glossary/multisite/)을 참조하세요.
:::

## 플러그인 설치하기 {#installing-the-plugin}

Ultimate Multisite는 [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/)에서 무료로 다운로드할 수 있습니다.

**네트워크 관리자 대시보드**에서 **플러그인 → 새 플러그인 추가**로 이동합니다.

![네트워크 관리자, 새 플러그인 추가 페이지](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"**(따옴표를 사용하여 정확히 일치하도록 검색)를 검색하면 첫 번째 결과로 나타납니다. **지금 설치**를 클릭합니다.

![검색 결과에 Ultimate Multisite 표시됨](/img/installation/search-ultimate-multisite.png)

설치가 완료되면 **네트워크 활성화**를 클릭하여 전체 네트워크에서 플러그인을 활성화합니다.

![플러그인이 설치되었고, 네트워크 활성화 버튼이 있음](/img/installation/plugin-installed.png)

활성화 후에는 자동으로 설정 마법사로 리디렉션됩니다.

![플러그인이 활성화되고 마법사로 리디렉션됨](/img/installation/plugin-activated.png)

## 설정 마법사 {#setup-wizard}

설정 마법사는 약 10분 안에 Ultimate Multisite를 구성하는 과정을 안내합니다.

### 시작하기 {#welcome}

**시작하기**를 클릭하여 시작합니다.

![설정 마법사 환영 화면](/img/installation/wizard-welcome.png)

### 사전 설치 확인 {#pre-install-checks}

이 단계에서는 시스템 정보 및 WordPress 설치를 확인하여 Ultimate Multisite의 요구 사항을 충족하는지 확인합니다. 모든 것이 제대로 작동하면 **다음 단계로 이동**을 클릭합니다.

![시스템 요구 사항을 보여주는 사전 설치 확인](/img/installation/wizard-pre-install-checks.png)

:::note 네트워크 활성화 버튼 (v2.6.1+)
Ultimate Multisite가 설치되었지만 아직 네트워크에 활성화되지 않은 경우(예: 네트워크 플러그인 화면에서 **활성화**(단일 사이트) 대신 **네트워크 활성화**를 클릭한 경우), 사전 설치 확인 단계에서 이를 감지하고 **네트워크 활성화** 버튼을 표시합니다.

**네트워크 활성화**를 클릭하면 전체 멀티사이트 네트워크에서 플러그인이 자동으로 활성화됩니다. 활성화되면 마법사가 정상적으로 다음 단계인 설치 단계로 진행됩니다. 마법사를 종료하여 활성화 상태를 수정할 필요가 없습니다.
:::

### 설치 {#installation}

설치 프로그램은 필요한 데이터베이스 테이블을 생성하고 Ultimate Multisite의 작동에 필요한 `sunrise.php` 파일을 설치합니다. **설치**를 클릭하여 계속합니다.

![데이터베이스 테이블 및 sunrise.php를 보여주는 설치 단계](/img/installation/wizard-installation.png)

### 회사 정보 {#your-company}

회사 정보를 입력하고 기본 통화를 설정합니다. 이 정보는 WaaS 플랫폼 전체에서 사용됩니다. 완료되면 **계속**을 클릭합니다.

![회사 정보 구성 단계](/img/installation/wizard-your-company.png)

### 기본 콘텐츠 {#default-content}

이 단계를 통해 미리 정의된 템플릿, 제품 및 기타 시작 콘텐츠를 설치할 수 있습니다. Ultimate Multisite의 기능을 익히는 데 좋은 방법입니다. 기본 콘텐츠를 추가하려면 **설치**를 클릭하거나 처음부터 시작하려면 이 단계를 건너뜁니다.

![기본 콘텐츠 설치 단계](/img/installation/wizard-default-content.png)

### 권장 플러그인 {#recommended-plugins}

선택적으로 권장되는 보조 플러그인을 설치합니다. 추가하려면 **설치**를 클릭하거나 계속 진행합니다.

![권장 플러그인 단계](/img/installation/wizard-recommended-plugins.png)

### 완료! {#ready}

이제 Ultimate Multisite 설치가 완료되었습니다. 이제 **네트워크 관리자 대시보드**에서 Website as a Service 플랫폼을 구축할 수 있습니다.

![설정 완료 - 준비 화면](/img/installation/wizard-ready.png)

![Ultimate Multisite가 활성화된 네트워크 관리자 대시보드](/img/installation/network-dashboard.png)

재미있게 사용하세요!
