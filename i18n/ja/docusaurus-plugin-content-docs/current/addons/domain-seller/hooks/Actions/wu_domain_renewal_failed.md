---
id: wu_domain_renewal_failed
title: アクション - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

ドメイン更新の試行が失敗した後に発火します。

## パラメータ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 更新をトリガーした支払い情報。 |
| $renewal_data | `array<string,mixed>` | 更新のメタデータ（ドメイン名、年数など）。 |
| $error_message | `string` | レジストラから返された、人間が読める形式のエラーメッセージ。 |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) の630行目で定義されています。
