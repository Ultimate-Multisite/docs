---
title: GitHub 스니펫
sidebar_position: 3
_i18n_hash: fad95473848ba3a1089d657550a45182
---
# GitHub 저장소에서 Ultimate Multisite 스니펫 사용 방법

GitHub 저장소에는 Ultimate Multisite 사용자가 가입 페이지에 Google Analytics 스크립트를 추가하거나 관리자 대시보드에서 메타 박스를 숨기는 등 작은 기능을 추가하고자 할 때 자주 요청하는 코드 스니펫이 있습니다.

이 문서에서는 이러한 코드를 어떻게 사용하고, 구체적으로 어디에 배치해야 하는지 보여줍니다.

아래 링크에서 스니펫을 찾을 수 있습니다.

https://github.com/next-press/wp-ultimo-snippets/

코드를 추가하는 방법은 두 가지가 있습니다

  1. 테마의 functions.php 파일에 추가하기

  2. Must-Use Plugins (mu-plugins)

# 테마의 functions.php 파일에 스니펫 추가하기

  1. WordPress 네트워크 관리자 대시보드에 로그인한 뒤, Themes > Theme Editor로 이동합니다 (아래 스크린샷 참조).

  2. 'Edit Themes' 페이지에서 화면 오른쪽 상단에 있는 드롭다운 필드에서 활성 테마가 선택되어 있는지 확인합니다 (#3 스크린샷 참조).

  3. 'Theme Files' 섹션에서 functions.php 파일을 클릭해 파일을 불러옵니다. 아래로 스크롤하여 GitHub 저장소에서 받은 Ultimate Multisite 스니펫을 붙여넣습니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-image.png)

# Must-Use Plugins (mu-plugins) 생성 방법

WordPress에는 'Must-Use Plugins' 또는 줄여서 'mu-plugins'이라고 부르는, 사용자 정의 기능을 로드할 수 있는 기능이 있습니다.

이러한 특수 mu-plugins는 다른 일반 플러그인보다 먼저 로드되며 비활성화할 수 없습니다. 멀티사이트 네트워크에서는 이 mu-plugins의 코드가 설치된 모든 사이트에서 로드됩니다.

  1. FTP 또는 SSH를 사용해 WordPress 설치 파일 시스템에 접근합니다.

  2. WordPress 설치의 wp-content 디렉터리 안에 mu-plugins라는 새 디렉터리를 만듭니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-image.png)

  3. 컴퓨터에서 Notepad 또는 다른 코드 편집기를 사용해 wu-snippet.php라는 새 PHP 파일을 만듭니다.

  4. GitHub 저장소에서 받은 Ultimate Multisite 코드 스니펫을 파일에 넣고 저장합니다. 또한 mu 플러그인에 라벨을 붙이려면 코드 스니펫 상단에 이 코드를 추가할 수 있습니다.
