---
id: wu_bypass_unset_current_user
title: フィルタ - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
## フィルタ: wu_bypass_unset_current_user

開発者が現在のユーザーを解除するコードをバイパスできるようにします。

null以外の値を返すと、現在ログインしているユーザーの解除をバイパスします。これは、管理パネルとして使用されるサブサイトを扱う場合など、いくつかのシナリオで役立ちます。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $null_or_bypass | `mixed` | Nullの場合は次へ進み、その他の場合はバイパスします。 |
| $current_user | `false\|\WP_User` | 現在のユーザーオブジェクト。 |

### バージョン

- 2.0.11

### ソース

Defined in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) 行221

## 戻り値
