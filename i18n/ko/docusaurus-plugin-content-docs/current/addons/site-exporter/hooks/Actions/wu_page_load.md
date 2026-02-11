---
id: wu_page_load
title: 액션 - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# 액션: wu_page_load

플러그인 개발자가 우리 페이지에 추가 훅을 추가할 수 있도록 허용합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 이 페이지의 ID입니다. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 이 페이지에 생성된 훅입니다. |

### 버전

- 1.8.2

### 소스

정의된 파일: [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) 라인 289에서
