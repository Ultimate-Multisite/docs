---
id: wu_membership_post_renew
title: 액션 - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# 액션: wu_membership_post_renew

멤버십 갱신 시 트리거됩니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $expiration | `string` | 설정될 새로운 만료 날짜. |
| $membership_id | `int` | 멤버십의 ID. |
| $membership | `\Membership` | 멤버십 객체. |

### 버전

- 2.0

### 소스

다음 파일에서 정의됨: [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) (2235번째 줄)
