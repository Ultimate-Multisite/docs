---
id: wu_page_added
title: アクション - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# アクション: wu_page_added

プラグイン開発者がページが登録されたときに追加の処理を実行できるようにします。

wu_page_loadとは異なり、特定のページが表示されているときのみ実行されるのに対し、このフックはWP Ultimoコードで追加されるすべての管理ページが登録される際に実行されます。

## パラメータ

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | このページのIDです。 |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | このページに生成されたフックです。 |

### 導入

- 2.0.0

### ソース

行203で定義されています。 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203)
