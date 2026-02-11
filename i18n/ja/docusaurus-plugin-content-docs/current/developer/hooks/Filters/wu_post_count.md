---
id: wu_post_count
title: フィルタ - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# フィルタ: wu_post_count

プラグイン開発者が合計投稿数を変更できるようにします

## Parameters

| 名前 | 型 | 説明 |
|------|------|-------------|
| $count | `int` | 合計投稿数 |
| $post_counts | `object` | wp_count_posts 関数が返す WordPress オブジェクト |
| $post_type | `string` | 投稿タイプのスラッグ |

### Since

- 1.9.1

### Source

定義場所: [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) の 136 行目

## Returns

新しい合計
