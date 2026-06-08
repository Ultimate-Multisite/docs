---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise 파일 로더

Ultimate Multisite 2.8.0은 add-on 및 커스텀 MU-plugin 통합을 위한 sunrise 확장 로더를 추가했습니다. 이 로더를 사용하면 `wp-content/sunrise.php` 파일을 직접 수정하지 않고도 WordPress의 sunrise 부팅 과정 중에 코드를 실행할 수 있습니다.

## 사용 시점

커스텀 도메인 라우팅, 호스트별 요청 처리, 또는 초기 네트워크 부팅 조정 등 일반 플러그인 로드 이전에 통합 코드가 실행되어야 할 때 sunrise 확장을 사용하세요.

일반적인 통합의 경우, 일반 WordPress 플러그인, MU-plugin, 그리고 문서화된 Ultimate Multisite 훅을 사용하는 것이 좋습니다. sunrise 코드는 매우 초기에 실행되므로, 작고, 방어적이며, 의존성이 없는 코드를 유지해야 합니다.

## 파일 명명 규칙

`ultimate-multisite-`로 시작하는 이름의 add-on 디렉터리에 `sunrise.php`라는 이름의 PHP 파일을 생성하세요.

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

이 로더는 다음 패턴을 가진 플러그인 디렉터리에서 파일을 검색합니다.

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

일치하는 파일들은 add-on 경로별로 알파벳 순서로 로드됩니다.

## 파일 배치 위치

파일은 sunrise 동작을 소유한 add-on의 루트 디렉터리에 배치하세요.

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

이 검색 경로는 현재 `WP_PLUGIN_DIR` 값이 아닌 `WP_CONTENT_DIR`을 기준으로 해결됩니다. 이 덕분에 다중 테넌시(multi-tenancy)나 다른 초기 부팅 코드가 sunrise 과정 중에 플러그인 디렉터리 상수를 변경하더라도 검색이 안정적으로 유지됩니다.

절대로 생성된 `wp-content/sunrise.php` 파일을 직접 수정하지 마세요. 이 로더를 사용하면 Ultimate Multisite가 설치하고 업데이트하는 핵심 sunrise 파일을 포크(forking)하지 않고도 커스텀 코드로 sunrise 동작을 확장할 수 있습니다.

## 사용 가능한 훅 및 필터

Addon sunrise 파일은 Ultimate Multisite 도메인 매핑이 로드된 후, WordPress가 `ms_loaded`를 발생시키기 전에 실행됩니다. 이 시점에서 sunrise 파일은 다음 작업을 수행할 수 있습니다.

- `$current_site` 및 `$current_blog`를 읽거나 재정의할 수 있습니다.
- 데이터베이스 설정이 로드된 후 `$wpdb`에 접근할 수 있습니다.
- 필요할 때 `BLOG_ID_CURRENT_SITE`와 같은 sunrise 시간 상수(constant)를 정의할 수 있습니다.
- 다중 테넌시 통합에서 사용되는 라우팅 상태를 포함하여 Ultimate Multisite sunrise 헬퍼 상태를 읽을 수 있습니다.

Ultimate Multisite는 자신의 sunrise 로더가 완료된 후 `wu_sunrise_loaded` 액션을 발생시킵니다. 이 액션은 sunrise 부팅이 완료된 후에도 여전히 sunrise 라이프사이클에 속하는 코드를 실행해야 할 때 사용하세요.

sunrise 단계에서 이미 로드된 함수만 호출하세요. 데이터베이스 작업, 템플릿 렌더링, HTTP 요청, 그리고 일반적인 플러그인 로드 순서가 완료되었다고 가정하는 코드는 피해야 합니다.

## 최소 예제

```php
<?php
/**
 * 커스텀 호스트 통합을 위한 Sunrise 확장.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // ms_loaded 이전에 초기 라우팅이나 상수를 조정합니다.
}
```

파일 배포 후, 매핑된 도메인과 매핑되지 않은 메인 사이트 URL을 로드하여 두 경로 모두 올바르게 부팅되는지 확인하세요.
