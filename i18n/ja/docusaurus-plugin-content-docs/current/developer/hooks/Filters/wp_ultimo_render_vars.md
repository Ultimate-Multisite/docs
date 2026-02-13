---
id: wp_ultimo_render_vars
title: フィルタ - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# フィルタ: wp_ultimo_render_vars

プラグイン開発者がグローバルにレンダリングコンテキストに追加変数を設定できるようにします。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $args | `array` | レンダリング呼び出しで渡された変数を含む配列。 |
| $view | `string` | レンダリングされるビューの名前。 |
| $default_view | `string` | フォールバックビューの名前。 |

### バージョン

- 2.0.0

### ソース

定義場所: [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) の31行目

## 戻り値
