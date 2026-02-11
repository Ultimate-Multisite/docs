---
id: wu_return_url
title: フィルタ - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

開発者がチェックアウトプロセス後に使用されるゲートウェイの戻りURLを変更できるようにします。

## Parameters

| 名前 | 型 | 説明 |
|------|------|-------------|
| $return_url | `string` | 処理後にリダイレクトするURL。 |
| $gateway | `self` | ゲートウェイインスタンス。 |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisiteの支払いインスタンス。 |
| $cart | `\WP_Ultimo\Checkout\Cart` | 現在のUltimate Multisiteカート注文。 |

### 導入

- 2.0.20

### ソース

定義されている [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) 行 683

## 戻り値

