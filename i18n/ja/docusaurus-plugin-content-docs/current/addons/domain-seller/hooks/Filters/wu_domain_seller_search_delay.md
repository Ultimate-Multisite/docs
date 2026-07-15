---
id: wu_domain_seller_search_delay
title: フィルター - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

ドメイン検索のデバウンス遅延（ミリ秒）をフィルターします。

この値を増やすことで、接続が遅い環境でのAPI呼び出し回数を減らすことができます。

## パラメータ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | デバウンス遅延（ミリ秒）。デフォルトは 500 です。 |

### Since {#since}

- 2.1.0
### Source {#source}

[`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) の 854 行目で定義されています。
