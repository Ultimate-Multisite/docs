---
id: wu_page_load
title: 액션 - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# 액션: wu_page_load

플러그인 개발자가 우리 페이지에 추가 훅을 추가할 수 있도록 허용합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $id | `string` | 이 페이지의 ID입니다. |
| $page_hook | `string` | 이 페이지의 페이지 훅입니다. |
| $admin_page | `self` | 페이지 인스턴스입니다. |

### 버전

- 1.8.2
- 2.0.4: 세 번째 매개변수(페이지 인스턴스)가 추가되었습니다.

### 소스

정의 위치: [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) (318번째 줄)
