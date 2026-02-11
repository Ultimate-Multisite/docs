---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
このページのウィジェットが登録された後に発火します。

フック名の動的部分である `$this->id` はページIDを指します。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ページID。 |
| $page_hook | `string` | ページフック。 |
| $page | `object` | ページオブジェクト。 |

### Since

- 2.4.10
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) at line 755
