---
id: wu_magic_link_enforce_user_agent
title: 필터 - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

사용자 에이전트 검증을 적용할지 여부를 필터링합니다.

false로 설정하면 토큰이 서로 다른 브라우저/디바이스에서 동작하도록 허용합니다. 이는 보안을 낮추지만 사용성을 높입니다.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | 사용자 에이전트 일치를 적용할지 여부. |

### Since

- 2.0.0

### Source

정의된 파일: [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) at line 410
