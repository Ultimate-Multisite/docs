---
title: Ultimate Multisite 설치
sidebar_position: 12
_i18n_hash: 400c7f9fc01ce3a8275a1710ef7e903a
---
# Ultimate Multisite 설치

:::note
이 튜토리얼은 이미 WordPress Multisite가 설치되고 구성되어 있다고 가정합니다. 설치 방법을 배우려면 WP Beginner의 [이 튜토리얼](https://www.wpbeginner.com/glossary/multisite/)을 확인하세요.
:::

## 플러그인 설치

Ultimate Multisite는 [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/)에서 무료로 제공됩니다.

네트워크 관리자 대시보드에서 **Plugins → Add New Plugin**으로 이동합니다.

![네트워크 관리자 새 플러그인 페이지](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"**(정확히 일치하도록 따옴표 포함)를 검색하면 첫 번째 결과로 표시됩니다. **Install Now**를 클릭합니다.

![Ultimate Multisite가 표시된 검색 결과](/img/installation/search-ultimate-multisite.png)

설치가 완료되면 **Network Activate**를 클릭하여 네트워크 전체에 플러그인을 활성화합니다.

![네트워크 활성화 버튼이 있는 플러그인 설치 완료](/img/installation/plugin-installed.png)

활성화 후 자동으로 설정 마법사로 리디렉션됩니다.

![플러그인 활성화 및 마법사로 리디렉션](/img/installation/plugin-activated.png)

## 설정 마법사

설정 마법사는 약 10분 안에 Ultimate Multisite를 구성하도록 안내합니다.

### 환영

**Get Started**를 클릭하여 시작합니다.

![설정 마법사 환영 화면](/img/installation/wizard-welcome.png)

### 사전 설치 검사

이 단계에서는 시스템 정보와 WordPress 설치가 Ultimate Multisite의 요구 사항을 충족하는지 확인합니다. 모든 것이 정상이면 **Go to the Next Step**을 클릭합니다.

![시스템 요구 사항을 보여주는 사전 설치 검사](/img/installation/wizard-pre-install-checks.png)

### 설치

설치 프로그램은 필요한 데이터베이스 테이블을 만들고 Ultimate Multisite가 기능을 수행하는 데 필요한 `sunrise.php` 파일을 설치합니다. **Install**을 클릭하여 진행합니다.

![데이터베이스 테이블 및 sunrise.php를 보여주는 설치 단계](/img/installation/wizard-installation.png)

### 회사

회사 정보를 입력하고 기본 통화를 설정합니다. 이 정보는 WaaS 플랫폼 전반에 걸쳐 사용됩니다. 완료되면 **Continue**를 클릭합니다.

![회사 설정 단계](/img/installation/wizard-your-company.png)

### 기본 콘텐츠

이 단계에서는 미리 정의된 템플릿, 제품 및 기타 시작 콘텐츠를 설치할 수 있습니다. 이는 Ultimate Multisite의 기능을 익히는 좋은 방법입니다. **Install**을 클릭하여 기본 콘텐츠를 추가하거나, 처음부터 시작하려면 이 단계를 건너뛵니다.

![기본 콘텐츠 설치 단계](/img/installation/wizard-default-content.png)

### 권장 플러그인

옵션으로 권장 동반 플러그인을 설치합니다. **Install**을 클릭하여 추가하거나 건너뛰어 계속 진행합니다.

![권장 플러그인 단계](/img/installation/wizard-recommended-plugins.png)

### 준비 완료!

이제 끝입니다! Ultimate Multisite 설치가 완료되었습니다. 이제 **Network Admin Dashboard**에서 Website as a Service 플랫폼을 구축할 수 있습니다.

![설정 완료 - 준비 화면](/img/installation/wizard-ready.png)

![Ultimate Multisite가 활성화된 네트워크 관리자 대시보드](/img/installation/network-dashboard.png)

자, 즐겁게 해보세요!
