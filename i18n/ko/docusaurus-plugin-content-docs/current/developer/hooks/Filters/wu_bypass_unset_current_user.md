---
id: wu_bypass_unset_current_user
title: 필터 - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

개발자가 현재 사용자 해제 코드를 우회하도록 허용합니다.

null이 아닌 값을 반환하면 로그인한 현재 사용자의 해제가 우회됩니다. 이는 예를 들어 관리 패널로 사용되는 하위 사이트를 다룰 때와 같은 일부 시나리오에서 유용할 수 있습니다.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null이면 진행, 다른 값이면 우회합니다. |
| $current_user | `false\|\WP_User` | 현재 사용자 객체. |

### Since

- 2.0.11

### Source

다음에서 정의됨: [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) (221번째 줄)

## Returns
