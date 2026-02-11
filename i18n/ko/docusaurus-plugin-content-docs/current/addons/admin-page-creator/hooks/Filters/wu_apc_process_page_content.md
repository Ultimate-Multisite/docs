---
id: wu_apc_process_page_content
title: Could you please provide the Markdown/MDX content that needs to be translated?
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# 필터: wu_apc_process_page_content

개발자가 최종 콘텐츠를 조작할 수 있도록 허용합니다

## 매개변수

| 이름 | 유형 | 설명 |
|------|------|-------------|
| $content | `string` | 대체 후 콘텐츠. |
| $content_before_processing | `string` | 대체 전 콘텐츠. |
| $to_replace | `array` | 플레이스홀더를 보유한 배열. |
| $placeholder_count | `int` | 찾은 플레이스홀더 수. |

### 버전

- 1.4.0

### 출처

정의된 위치: [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) 46번째 줄

## 반환값

수정된 콘텐츠.
