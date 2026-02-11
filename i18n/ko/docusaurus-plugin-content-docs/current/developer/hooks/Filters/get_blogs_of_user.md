---
id: get_blogs_of_user
title: 필터 - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# 필터: get_blogs_of_user

원본 WP 필터를 여기서 복제합니다, 좋은 측정값을 위해.

사용자가 속한 사이트 목록을 필터링합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $sites | `object[]` | 사용자가 소유한 사이트 객체 배열 |
| $user_id | `int` | 사용자 ID |
| $all | `bool` | 반환된 사이트 배열에 'deleted', 'archived', 또는 'spam'으로 표시된 사이트를 포함하여 모든 사이트를 포함해야 하는지 여부. 기본값은 false |

### 버전

- 2.0.11

### 소스

정의된 위치: [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) 851번째 줄
