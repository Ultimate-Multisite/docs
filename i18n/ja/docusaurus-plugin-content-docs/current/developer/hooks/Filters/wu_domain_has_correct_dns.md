---
id: wu_domain_has_correct_dns
title: フィルタ - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# フィルタ: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

プラグイン開発者が新しいチェックを追加して結果を定義できるようにします。

## Parameters {#parameters}

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $result | `bool` | 現在の結果。 |
| $domain | `self` | 現在のドメインインスタンス。 |
| $domains_and_ips | `array` | DNSルックアップで見つかったドメインとIPのリスト。 |

### バージョン {#since}

- 2.0.4

### ソース {#source}

定義されている [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) 行番号 455

## 戻り値 {#returns}

DNS が正しく設定されているかどうかを返します。
