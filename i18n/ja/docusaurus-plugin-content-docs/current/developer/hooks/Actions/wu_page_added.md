---
id: wu_page_added
title: アクション - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

プラグイン開発者がページが登録された際に追加の処理を実行できるようにします。

wu_page_loadは特定のページが表示されているときのみ実行されますが、このフックはUltimate Multisiteコードで追加されるすべての管理ページが登録される際に実行されます。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | このページのIDです。 |
| $page_hook | `string` | このページのフック名です。 |

### Since

- 2.0.0

### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
