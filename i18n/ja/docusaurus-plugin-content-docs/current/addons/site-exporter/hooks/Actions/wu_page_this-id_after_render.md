---
id: wu_page_this-id_after_render
title: 'アクション - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# アクション: wu_page_\{$this->id\}_after_render

特定のページがレンダリングされた後に発火します。

使用例: 動的部分を有効なページIDに置き換える必要があります。例: add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ページのIDです。 |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Pageインスタンスです。 |

### Since

- 1.8.2

### Source

定義は [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) の 394 行目にあります。
