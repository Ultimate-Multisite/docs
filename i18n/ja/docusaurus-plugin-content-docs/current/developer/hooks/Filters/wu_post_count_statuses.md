---
id: wu_post_count_statuses
title: フィルタ - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# フィルタ: wu_post_count_statuses

プラグイン開発者がカウント対象の投稿ステータスを変更できるようにします。デフォルトでは、公開済みと非公開の投稿がカウントされます。

## パラメータ

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $post_status | `array` | 投稿ステータスのリスト |
| $post_type | `string` | 投稿タイプのスラッグ |

### 以降

- 1.9.1

### ソース

Defined in [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) at line 119

## 戻り値

投稿ステータスの新しい配列
