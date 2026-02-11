---
id: wu_membership_renewal_expiration_date
title: 필터 - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# 필터: wu_membership_renewal_expiration_date

갱신 후에 설정될 계산된 만료 날짜를 필터링합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $expiration | `string` | 계산된 만료 날짜. |
| $plan | `\Product` | 멤버십 수준 객체. |
| $membership_id | `int` | 멤버십 ID. |
| $membership | `\Membership` | 멤버십 객체. |

### 버전

- 2.0.0

### 출처

다음 파일에서 정의됨: [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) (2192번째 줄)
