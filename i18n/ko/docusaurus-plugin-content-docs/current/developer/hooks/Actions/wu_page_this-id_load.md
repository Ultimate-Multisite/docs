---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# 액션: wu_page_\{$this->id\}_load

플러그인 개발자가 우리 페이지에 추가 훅을 추가할 수 있도록 허용합니다.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | 이 페이지의 ID입니다. |
| $page_hook | `string` | 이 페이지의 페이지 훅입니다. |
| $admin_page | `self` | TThe 페이지 인스턴스. |

### Since

- 1.8.2
- 2.0.4: 세 번째 매개변수(페이지 인스턴스)가 추가되었습니다.

### Source

정의됨 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) 332번째 줄에서
