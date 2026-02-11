---
id: wu_page_this-id_load
title: 'アクション - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

プラグイン開発者がページに追加のフックを追加できるようにします。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | このページのIDです。 |
| $page_hook | `string` | このページのページフックです。 |
| $admin_page | `self` | ページインスタンスです。 |

### Since

- 1.8.2
- 2.0.4: 第三パラメータ（ページインスタンス）が追加されました。

### Source

定義は [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) の332行目にあります。
