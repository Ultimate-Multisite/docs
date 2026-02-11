---
id: wu_contains_element
title: 필터 - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element

개발자가 초기 검색 결과를 변경할 수 있도록 허용합니다.

이 기능은 서드파티 빌더 등에게 유용합니다.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | 요소가 콘텐츠에 포함되어 있는 경우. |
| $content | `string` | 검사 중인 콘텐츠. |
| $element | `self` | 현재 요소. |
| $post | `null\|\WP_Post` | 검사할 게시물. |

### Since

- 2.0.0

### Source

Defined in [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) at line 534
