---
id: wu_membership_pre_renew
title: 액션 - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# 액션: wu_membership_pre_renew

멤버십 갱신 전에 트리거됩니다.

## 매개변수

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | 새 만료 날짜를 설정합니다. |
| $membership_id | `int` | 멤버십의 ID입니다. |
| $membership | `\Membership` | 멤버십 객체입니다. |

### 버전

- 2.0

### 소스

다음에서 정의됨: [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) (2204번째 줄)
