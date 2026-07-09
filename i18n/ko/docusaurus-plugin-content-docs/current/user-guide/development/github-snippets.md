---
title: GitHub 스니펫
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# GitHub repository에서 Ultimate Multisite snippet을 사용하는 방법 {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

가입 페이지에 Google Analytics 스크립트를 추가하거나 관리자 Dashboard에서 메타 박스를 숨기는 것처럼 작은 기능을 추가하려는 Ultimate Multisite 사용자가 자주 요청하는 코드 snippet이 GitHub repository에 있습니다.

이 글에서는 이러한 코드를 사용하는 방법, 더 구체적으로는 어디에 배치해야 하는지 보여드립니다.

아래 링크에서 snippet을 찾을 수 있습니다.

https://github.com/next-press/wp-ultimo-snippets/

코드를 추가하는 방법은 2가지입니다

  1. theme의 functions.php 파일에 추가.

  2. Must-Use Plugins (mu-plugins)

# theme의 functions.php 파일에 snippet을 추가하는 방법. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. WordPress 네트워크 관리자 Dashboard에 로그인하고 Themes >Theme Editor로 이동합니다(아래 스크린샷 참조).

  2. "Edit Themes" 페이지에서 화면 오른쪽 상단에 있는 드롭다운 field에서 활성 theme가 선택되어 있는지 확인하세요(아래 스크린샷의 #3).

  3. "Theme Files" 섹션 아래의 functions.php 파일을 클릭하여 파일을 불러옵니다. 맨 아래로 스크롤한 뒤 GitHub repository에서 가져온 Ultimate Multisite snippet을 붙여 넣습니다.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins)을 만드는 방법 {#how-to-create-must-use-plugins-mu-plugins}

WordPress에는 "Must-Use Plugins", 줄여서 "mu-plugins"라고 하는 사용자 지정 기능을 불러올 수 있는 기능이 있습니다.

이러한 특별한 mu-plugins는 다른 모든 일반 plugins보다 먼저 불러오며 비활성화할 수 없습니다. multisite 네트워크에서는 이러한 mu-plugins의 코드가 설치의 모든 사이트에서 불러와집니다.

1\. FTP 또는 SSH를 사용하여 WordPress 설치의 파일 시스템에 액세스합니다.

2\. WordPress 설치의 wp-content 디렉터리 안에 mu-plugins라는 새 디렉터리를 만듭니다.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Notepad 또는 원하는 코드 편집기를 사용하여 컴퓨터에 wu-snippet.php라는 새 PHP 파일을 만듭니다.

4\. GitHub repository에서 가져온 Ultimate Multisite 코드 snippet을 파일에 넣고 저장합니다. mu plugin에 라벨을 붙이기 위해 코드 snippet 위에 이 코드를 추가할 수도 있습니다.
