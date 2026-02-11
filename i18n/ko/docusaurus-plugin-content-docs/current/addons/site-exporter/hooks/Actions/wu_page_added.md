---
id: wu_page_added
title: 액션 - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

플러그인 개발자가 페이지가 등록될 때 추가 작업을 실행할 수 있도록 허용합니다.

wu_page_load와 달리 특정 페이지가 표시될 때만 실행되는 반면, 이 훅은 WP Ultimo 코드를 사용해 추가되는 모든 관리자 페이지가 등록될 때 실행됩니다.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 이 페이지의 ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 이 페이지에 생성된 훅. |

### Since

- 2.0.0

### Source

다음에서 정의됨: [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) (203번째 줄)
