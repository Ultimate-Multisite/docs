---
title: Closte에서 Sunrise 상수 설정하기
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte에서 Sunrise 상수를 true로 설정하기

일부 호스트 제공업체는 보안상의 이유로 wp-config.php를 잠급니다. 이는 Ultimate Multisite가 도메인 매핑과 기타 기능이 작동하는 데 필요한 상수를 포함하도록 파일을 자동으로 편집할 수 없다는 뜻입니다. Closte가 그런 호스트 중 하나입니다.

하지만 Closte는 wp-config.php에 안전한 방식으로 상수를 추가하는 방법을 제공합니다. 아래 단계를 따라 하기만 하면 됩니다.

## Closte dashboard에서

먼저, [Closte account에 로그인](https://app.closte.com/)하고 Sites 메뉴 항목을 클릭한 다음, 현재 작업 중인 site의 Dashboard 링크를 클릭하세요.

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

화면 왼쪽에 여러 새 메뉴 항목이 표시됩니다. 해당 메뉴를 사용해 **Settings** 페이지로 이동하세요.

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

그런 다음 **Settings**에서 WP-Config 탭을 찾고, 해당 탭의 "Additional wp-config.php content" 필드를 찾으세요.

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite 설치와 관련하여, 해당 필드에 sunrise 상수를 추가해야 합니다. 새 줄을 추가하고 아래 줄을 붙여넣기만 하면 됩니다. 그런 다음 **Save All** 버튼을 클릭하세요.

define('SUNRISE', true);

이제 완료되었습니다. Ultimate Multisite 설치 wizard로 돌아가 페이지를 새로 고쳐 절차를 계속하세요.
