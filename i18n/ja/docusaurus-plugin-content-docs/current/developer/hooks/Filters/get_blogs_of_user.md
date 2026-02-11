---
id: get_blogs_of_user
title: フィルタ - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# フィルタ: get_blogs_of_user

念のため、元のWPフィルタを再現しています。

ユーザーが所属するサイトのリストをフィルタします。

## パラメータ

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $sites | `object[]` | ユーザーに属するサイトオブジェクトの配列。 |
| $user_id | `int` | ユーザーID。 |
| $all | `bool` | 戻り値のサイト配列に、'deleted'、'archived'、または'spam'とマークされたサイトを含めるかどうか。デフォルトはfalse。 |

### バージョン

- 2.0.11

### ソース

定義されている [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) の851行目。
