---
id: wu_admin_notices
title: 필터 - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# 필터: wu_admin_notices {#filter-wuadminnotices}

개발자가 Ultimate Multisite에서 추가한 관리자 알림을 필터링할 수 있게 합니다.

## 매개변수 {#parameters}

| 이름 | 유형 | 설명 |
|------|------|-------------|
| $notices | `array` | 해당 특정 패널의 알림 목록. |
| $all_notices | `array` | 추가된 알림 목록으로, 패널별로 구분됩니다. |
| $panel | `string` | 알림을 가져올 패널. |
| $filter | `string` | 해제 가능한 알림이 필터링되어 제외되었는지 여부. |
| $dismissed_messages | `array` | 해제된 알림 키 목록. |

### 이후 {#since}

- 2.0.0
### 소스 {#source}

121번째 줄의 [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121)에 정의됨


## 반환값 {#returns}
