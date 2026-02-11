---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# アクション: wu_page_{$this->id}_before_render

プラグイン開発者がページを出力する前に追加コンテンツを追加できるようにします。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $page_id | `string` | このページのIDです。 |
| $page | `object` | ページオブジェクトです。 |

### バージョン

- 1.8.2

### ソース

以下のファイルで定義されています: [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) 398 行目
