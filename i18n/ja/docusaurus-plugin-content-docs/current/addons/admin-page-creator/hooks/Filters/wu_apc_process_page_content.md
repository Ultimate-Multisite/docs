---
id: wu_apc_process_page_content
title: 申し訳ありませんが、翻訳する対象のMarkdown/MDXコンテンツが提供されていません。翻訳したいテキストを共有していただけますか？
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# フィルタ: wu_apc_process_page_content

開発者が最終コンテンツを変更できるようにする

## パラメータ

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $content | `string` | 置換後のコンテンツ。 |
| $content_before_processing | `string` | 置換前のコンテンツ。 |
| $to_replace | `array` | プレースホルダーを保持する配列。 |
| $placeholder_count | `int` | 見つかったプレースホルダーの数。 |

### バージョン

- 1.4.0

### ソース

定義済み [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) at line 46

## 戻り値

変更後のコンテンツ。
