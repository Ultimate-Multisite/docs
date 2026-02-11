---
id: wu_page_load
title: アクション - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

プラグイン開発者が当社のページに追加のフックを追加できるようにします。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | このページの ID。 |
| $page_hook | `string` | このページのページフック。 |
| $admin_page | `self` | ページインスタンス。 |

### Since

- 1.8.2
- 2.0.4: 第3パラメータ（ページインスタンス）を追加しました。

### Source

以下で定義されています: [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) 318 行目
