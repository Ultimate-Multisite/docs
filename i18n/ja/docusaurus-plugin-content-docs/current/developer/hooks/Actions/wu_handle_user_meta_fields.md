---
id: wu_handle_user_meta_fields
title: アクション - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

プラグイン開発者が必要に応じてユーザーメタデータをさまざまな方法で保存できるようにします。

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | メタフィールドのリスト（キー => 値の構造）。 |
| $user | `\WP_User` | WordPress ユーザーオブジェクト。 |
| $customer | `\Customer` | Ultimate Multisite カスタマーオブジェクト。 |
| $checkout | `\Checkout` | チェックアウトクラス。 |

### Since {#since}

- 2.0.4

### Source {#source}

以下のファイルで定義されています: [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) 行 1244
