---
id: wu_membership_calculated_date_expiration
title: 필터 - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# 필터: wu_membership_calculated_date_expiration

계산된 만료 날짜를 필터링합니다.

## 매개변수

| 이름 | 형식 | 설명 |
|------|------|-------------|
| $expiration | `string` | MySQL 형식으로 계산된 만료 날짜. |
| $membership_id | `int` | 멤버십 ID. |
| $membership | `\WP_Ultimo\Models\Membership` | 멤버십 객체. |

### 버전

- 2.0

### 출처

정의됨 [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) 라인 1309
