---
id: wu_post_count_statuses
title: 필터 - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# 필터: wu_post_count_statuses

플러그인 개발자들이 어떤 포스트 상태를 카운트할지 변경할 수 있도록 허용합니다. 기본적으로 게시된 포스트와 비공개 포스트가 카운트됩니다.

## 매개변수

| 이름 | 유형 | 설명 |
|------|------|-------------|
| $post_status | `array` | 포스트 상태 목록 |
| $post_type | `string` | 포스트 유형 슬러그 |

### 버전

- 1.9.1

### 출처

Defined in [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) 119번째 줄에서

## 반환값

포스트 상태의 새 배열
