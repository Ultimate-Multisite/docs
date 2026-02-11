---
id: wu_post_count
title: 필터 - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# 필터: wu_post_count

플러그인 개발자가 총 게시물 수를 변경할 수 있도록 허용합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $count | `int` | 전체 게시물 수 |
| $post_counts | `object` | wp_count_posts 함수가 반환하는 WordPress 객체 |
| $post_type | `string` | 게시물 유형 슬러그 |

### 버전

- 1.9.1

### 출처

Defined in [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) at line 136

## 반환값
새로운 총합
