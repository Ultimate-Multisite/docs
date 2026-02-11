---
id: wu_get_checkout_variables
title: フィルタ - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# フィルタ: wu_get_checkout_variables

プラグイン開発者がチェックアウトページのプリセットをフィルタリングできるようにします。

注意してください。キーが欠落すると、フロントエンドでチェックアウトが完全に壊れる可能性があります。

## パラメータ

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $variables | `array` | ローカライズされた変数。 |
| $checkout | `\Checkout` | チェックアウトクラス。 |

### バージョン

- 2.0.0

### ソース

以下のファイルで定義されています [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) 1970 行目

## 戻り値

新しい変数配列。
