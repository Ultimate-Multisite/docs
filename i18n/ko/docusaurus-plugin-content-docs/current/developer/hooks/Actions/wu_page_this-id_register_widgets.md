---
id: wu_page_this-id_register_widgets
title: '액션 - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

이 페이지에 대한 위젯이 등록된 후에 실행됩니다.

훅 이름의 동적 부분인 `$this->id`는 페이지 ID를 가리킵니다.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | 페이지 ID. |
| $page_hook | `string` | 페이지 훅. |
| $page | `object` | 페이지 객체. |

### Since

- 2.4.10

### Source

다음 파일에서 정의됨: [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) (755번째 줄)
