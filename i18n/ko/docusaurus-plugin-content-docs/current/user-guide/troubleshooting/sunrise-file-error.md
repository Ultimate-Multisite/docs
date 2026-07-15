---
title: Sunrise 파일 오류
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise 파일 설치 오류

sunrise.php 파일은 WordPress가 자체적으로 부트스트랩하는 동안 찾는 특수 파일입니다. WordPress가 sunrise.php 파일을 감지할 수 있으려면 **wp-content 폴더** 안에 위치해야 합니다.

Ultimate Multisite를 활성화하고 스크린샷에 있는 것과 같은 설정 마법사를 진행하면, Ultimate Multisite는 우리의 sunrise.php 파일을 wp-content 폴더로 복사하려고 시도합니다.

<!-- 스크린샷 사용할 수 없음: sunrise.php 설치 단계를 보여주는 설정 마법사 페이지 -->

대부분의 경우 파일을 성공적으로 복사할 수 있으며 모든 것이 작동합니다. 하지만 무언가가 제대로 설정되어 있지 않다면(예: 폴더 권한), Ultimate Multisite가 파일을 복사하지 못하는 상황이 발생할 수 있습니다.

Ultimo가 표시하는 오류 메시지를 읽어보면, 여기서 정확히 그런 일이 발생했다는 것을 알 수 있습니다: **Sunrise 복사 실패**.

<!-- 스크린샷 사용할 수 없음: Sunrise 복사 실패를 보여주는 오류 메시지 -->

이를 해결하려면 wp-ultimo plugin 폴더 안에 있는 sunrise.php 파일을 복사하여 wp-content 폴더에 붙여넣기만 하면 됩니다. 그런 다음 마법사 페이지를 다시 로드하면 검사에 통과할 것입니다.

<!-- 스크린샷 사용할 수 없음: wp-ultimo plugin 폴더 안의 sunrise.php를 보여주는 파일 관리자 --> 어떤 경우든, 향후 문제가 발생하지 않도록 폴더 권한을 전반적으로 확인하는 것이 좋습니다(Ultimate Multisite뿐만 아니라 다른 plugins 및 themes에서도 마찬가지입니다).

WordPress의 일부인 **Health Check 도구**(기본 site의 **관리자 패널 > 도구 > Health Check**를 통해 접근할 수 있음)는 WordPress에 문제를 일으킬 수 있는 값으로 폴더 권한이 설정되어 있는지 알려줄 수 있습니다.

<!-- 스크린샷 사용할 수 없음: 폴더 권한 상태를 보여주는 WordPress Health Check 도구 -->
