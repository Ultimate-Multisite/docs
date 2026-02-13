---
title: Sunrise 파일 오류
sidebar_position: 12
_i18n_hash: eec4276c1954a7f93d6d71ef2b15f106
---
# Sunrise 파일 설치 오류

sunrise.php 파일은 WordPress가 부트스트랩 중에 찾는 특수 파일입니다. WordPress가 sunrise.php 파일을 감지하려면 **wp-content 폴더** 안에 있어야 합니다.

Ultimate Multisite를 활성화하고 스크린샷에 있는 것과 같은 설정 마법사를 진행하면, Ultimate Multisite는 sunrise.php 파일을 wp-content 폴더로 복사하려고 시도합니다.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

대부분의 경우 파일을 성공적으로 복사하고 모든 것이 정상적으로 동작합니다. 그러나 설정이 제대로 되어 있지 않으면(예: 폴더 권한), Ultimate Multisite가 파일을 복사하지 못하는 상황이 발생할 수 있습니다.

Ultimo가 제공하는 오류 메시지를 보면, 바로 이 상황이 발생한 것입니다: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

이 문제를 해결하려면, wp-ultimo 플러그인 폴더 안에 있는 sunrise.php 파일을 복사해 wp-content 폴더에 붙여넣기만 하면 됩니다. 그 후 마법사 페이지를 새로고침하면 검사에 통과할 것입니다.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> In any case, this might warrant a general check of your folder permissions to avoid having problems in the future (not only with Ultimate Multisite but with other plugins and themes as well).

WordPress에 포함된 **Health Check 도구**(메인 사이트 **admin panel > Tools > Health Check**에서 접근 가능)는 폴더 권한이 WordPress에 문제를 일으킬 수 있는 값으로 설정되어 있는지 알려줄 수 있습니다.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
