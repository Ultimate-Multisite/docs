---
id: wu_apply_plan_limits
title: 필터 - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# 필터: wu_apply_plan_limits

플러그인 개발자가 제한을 우회하도록 허용합니다.

이 필터를 사용하여 제한이 시작되기 전에 임의의 코드를 실행할 수 있습니다. 필터가 진리값을 반환하면 프로세스가 계속 진행되고, 거짓값을 반환하면 코드가 반환되고 아래의 훅은 실행되지 않습니다.

### Since

- 1.7.0

### Source

- 정의됨 [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) at line 52
- 정의됨 [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) at line 98

## Returns

