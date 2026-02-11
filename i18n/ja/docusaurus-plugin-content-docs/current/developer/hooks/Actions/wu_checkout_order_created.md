---
id: wu_checkout_order_created
title: アクション - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# アクション: wu_checkout_order_created

チェックアウト注文が完全に組み立てられた後に発火します。

アドオンは、独立した請求サイクルを持つ製品のために二次メンバーシップを作成するためにこれを使用できます。

## Parameters

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | カート/注文オブジェクトです。 |
| $customer | `\WP_Ultimo\Models\Customer` | 顧客です。 |
| $membership | `\WP_Ultimo\Models\Membership` | 主メンバーシップです。 |
| $payment | `\WP_Ultimo\Models\Payment` | 支払いです。 |

### 導入

- 2.5.0

### ソース

定義は [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) の 891 行目にあります
