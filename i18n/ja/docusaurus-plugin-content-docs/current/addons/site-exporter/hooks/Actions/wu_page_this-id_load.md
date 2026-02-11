---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# アクション: wu_page_\{$this->id\}_load

プラグイン開発者が特定のページに追加フックを追加できるようにします。

使用例: 動的部分は有効なページIDに置き換える必要があります。例: add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## パラメータ

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | このページのIDです。 |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | このページに生成されたフックです。 |

### バージョン

- 1.8.2

### ソース

定義されている場所: [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) 301 行目
