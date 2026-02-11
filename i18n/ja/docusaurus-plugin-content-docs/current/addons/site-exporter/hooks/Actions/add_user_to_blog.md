---
id: add_user_to_blog
title: アクション - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

ユーザーがサイトに追加された直後に発火します。

## Parameters

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $user_id | `int` | ユーザー ID。 |
| $role | `string` | ユーザー ロール。 |
| $blog_id | `int` | ブログ ID。 |

### Since

- MU: MU

### Source

定義済み [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) 行 174
