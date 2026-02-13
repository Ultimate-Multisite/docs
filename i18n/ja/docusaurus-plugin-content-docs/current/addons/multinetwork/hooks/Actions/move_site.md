---
id: move_site
title: アクション - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# アクション: move_site

サイトが新しいネットワークに移動された後に発火します。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $site_id | `int` | 移動されたサイトのID。 |
| $old_network_id | `int` | サイトの元のネットワークのID。 |
| $new_network_id | `int` | サイトが移動されたネットワークのID。 |

### 導入

- 1.3.0

### ソース

以下のファイルで定義されています: [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) (行 1587)
