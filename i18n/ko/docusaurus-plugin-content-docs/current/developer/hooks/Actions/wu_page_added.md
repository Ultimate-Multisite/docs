---
id: wu_page_added
title: 액션 - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# 작업: wu_page_added

플러그인 개발자가 페이지가 등록될 때 추가 작업을 실행할 수 있도록 허용합니다.

wu_page_load와 달리 특정 페이지가 표시될 때만 실행되는 반면, 이 훅은 Ultimate Multisite 코드를 사용해 추가되는 모든 관리자 페이지가 등록될 때 실행됩니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $page_id | `string` | 이 페이지의 ID입니다. |
| $page_hook | `string` | 이 페이지의 훅 이름입니다. |

### 버전

- 2.0.0

### 출처

정의됨 in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) 라인 228에서
