---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# 액션: wu_page_{$this->id}_load

플러그인 개발자가 특정 페이지에 추가 훅을 추가할 수 있도록 허용합니다.

사용법: 동적 부분은 유효한 페이지 ID로 교체해야 합니다. 예: add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 이 페이지의 ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 이 페이지에 생성된 훅. |

### 버전

- 1.8.2

### 소스

정의 위치: [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) at line 301
