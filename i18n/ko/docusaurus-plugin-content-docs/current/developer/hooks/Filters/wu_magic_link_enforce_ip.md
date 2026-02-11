---
id: wu_magic_link_enforce_ip
title: 필터 - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

IP 주소 검증을 적용할지 여부를 필터링합니다.

false로 설정하면 다른 네트워크에서도 토큰이 동작하도록 허용합니다. 이는 보안을 낮추지만 사용성을 높입니다 (예: 네트워크를 전환하는 모바일 사용자).

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | IP 주소 일치를 적용할지 여부. |

### Since

- 2.0.0

### Source

정의된 위치: [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) (라인 422)
