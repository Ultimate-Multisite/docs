---
id: wu_magic_link_enforce_ip
title: 필터 - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

IP 주소 확인을 적용할지 여부를 필터링합니다.

토큰이 다른 네트워크에서도 작동하도록 하려면 false로 설정하세요. 이렇게 하면 보안은 낮아지지만 사용성은 향상됩니다(예: 네트워크를 전환하는 모바일 사용자).

## 매개변수

| 이름 | 유형 | 설명 |
|------|------|-------------|
| $enforce | `bool` | Whether to enforce IP address matching. |

### 도입 버전

- 2.0.0
### 소스

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422)의 422번째 줄에 정의됨
