---
id: wu_dashboard_this-tab_widgets
title: 'アクション - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# アクション: wu_dashboard_\{$this->tab\}_widgets

プラグイン開発者がネットワークダッシュボードパネルにウィジェットを追加できるようにします。

## パラメータ

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $tab | `string` | 現在のタブです。 |
| $screen | `\WP_Screen` | 画面オブジェクトです。 |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | Ultimate Multisite 管理ページインスタンスです。 |

### バージョン

- 2.0.0

### ソース

定義されている [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) で、行 214
