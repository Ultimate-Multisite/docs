---
id: wp_ultimo_skip_network_active_check
title: フィルタ - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# フィルタ: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

開発者がネットワークアクティベーションチェックを短絡させることを可能にします。

これは、Composer ベースや Bedrock などのカスタムセットアップで、プラグインを mu-plugins として使用するのが一般的な場合に便利です。

## パラメータ {#parameters}

| 名前 | 型 | 説明 |
|------|------|-------------|
| $skip_network_activation_check | `bool` | チェックをスキップするかどうか。デフォルトは false。 |

### バージョン {#since}

- 2.0.0

### ソース {#source}

定義は [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) の 272 行目にあります

## 戻り値 {#returns}

チェックをスキップしたい場合は true、そうでない場合は false を返します。
