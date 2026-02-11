---
id: wu_contains_element
title: フィルタ - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# フィルタ: wu_contains_element

開発者が初期検索結果を変更できるようにします。  
これはサードパーティのビルダーなどに便利です。

## Parameters

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $contains_elements | `bool` | 要素がコンテンツに含まれているかどうか。 |
| $content | `string` | 調べられているコンテンツ。 |
| $element | `self` | 現在の要素。 |
| $post | `null|WP_Post` | チェックする投稿。 |

### 以降

- 2.0.0

### Source

定義は [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) の 534 行目にあります。
