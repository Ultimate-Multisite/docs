---
id: wu_make_primary_domain_redirect_url
title: フィルタ - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# フィルタ: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

ドメインをプライマリに設定した後のリダイレクト URL をフィルタリングします。

開発者は、ドメインをプライマリに設定した後にユーザーがリダイレクトされる場所をカスタマイズできます。デフォルトでは、メインサイトの現在の URL、または変更対象のサイトの管理 URL にリダイレクトします。

## パラメータ {#parameters}

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $redirect_url | `string` | デフォルトのリダイレクト URL。メインサイトの場合は現在の URL、そうでない場合は現在のサイトの管理 URL。 |
| $current_site | `int` | ドメインがプライマリに設定されるサイトの ID。 |
| $domain | `\Domain` | プライマリに設定されたドメインオブジェクト。 |
| $old_primary_domains | `array` | 以前プライマリだったドメインの ID の配列。 |

### 付録 {#since}

- 2.0.0

### ソース {#source}

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) の 639 行目で定義されています。

## 戻り値 {#returns}
フィルタリングされたリダイレクト URL。
