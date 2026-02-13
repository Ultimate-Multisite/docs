---
title: 클로스트에서 일출 상수 설정
sidebar_position: 16
_i18n_hash: e579b8554057b98fef08a0f2bd2a0e82
---
# Setting the Sunrise constant to true on Closte

일부 호스팅 제공업체는 보안상의 이유로 wp-config.php를 잠급니다. 이로 인해 Ultimate Multisite는 도메인 매핑 및 기타 기능을 작동시키는 데 필요한 상수를 파일에 자동으로 편집할 수 없습니다. Closte는 그러한 호스팅 중 하나입니다.

그러나 Closte는 wp-config.php에 상수를 안전하게 추가할 수 있는 방법을 제공합니다. 아래 단계만 따라하면 됩니다:

## On the Closte dashboard

먼저 [Closte 계정에 로그인](https://app.closte.com/), Sites 메뉴 항목을 클릭한 다음 현재 작업 중인 사이트의 Dashboard 링크를 클릭합니다:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

화면 왼쪽에 새로운 메뉴 항목이 표시됩니다. 해당 메뉴를 사용하여 **Settings** 페이지로 이동합니다:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

그런 다음 **Settings**에서 WP-Config 탭을 찾고, 그 탭에서 'Additional wp-config.php content' 필드를 찾습니다:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite 설치 맥락에서 해당 필드에 sunrise 상수를 추가해야 합니다. 새 줄을 추가하고 아래 줄을 붙여넣기만 하면 됩니다. 그 다음 **Save All** 버튼을 클릭합니다.

define('SUNRISE', true);

이제 완료되었습니다. Ultimate Multisite 설치 마법사로 돌아가 페이지를 새로 고쳐 과정을 계속 진행하세요.
