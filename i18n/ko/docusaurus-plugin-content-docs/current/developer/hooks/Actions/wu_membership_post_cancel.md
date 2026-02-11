---
id: wu_membership_post_cancel
title: 액션 - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# 액션: wu_membership_post_cancel

멤버십이 취소된 후에 트리거됩니다.

이 트리거는 취소 이메일을 전송합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $membership_id | `int` | 멤버십의 ID. |
| $membership | `\WP_Ultimo\Models\Membership` | 멤버십 객체. |

### 버전

- 2.0

### 소스

정의된 위치: [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) 2290번째 줄
