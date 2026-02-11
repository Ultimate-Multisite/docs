---
id: wu_maybe_create_customer
title: アクション - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# アクション: wu_maybe_create_customer

プラグイン開発者が顧客が追加されたときに追加の処理を実行できるようにします。

ここでは、例えば顧客→ユーザーをメインサイトに追加するフックを追加します。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $customer | `\Customer` | 作成された可能性のある顧客です。 |
| $checkout | `\Checkout` | 現在のチェックアウトクラスです。 |

### バージョン

- 2.0.0

### ソース

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) at line 1156
