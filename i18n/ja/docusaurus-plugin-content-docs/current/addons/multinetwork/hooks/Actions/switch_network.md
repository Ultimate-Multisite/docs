---
id: switch_network
title: アクション - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# アクション: switch_network

現在のネットワークコンテキストが切り替えられたときに発火します。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $new_network_id | `int` | 切り替え先のネットワークのID。 |
| $old_network_id | `int` | 以前の現在のネットワークのID。 |

### 以降

- 1.3.0

### ソース

以下で定義されています [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) 行 859
