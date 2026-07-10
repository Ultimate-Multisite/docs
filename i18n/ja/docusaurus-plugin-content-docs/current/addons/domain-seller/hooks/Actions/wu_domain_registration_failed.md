---
id: wu_domain_registration_failed
title: アクション - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

ドメイン登録の試行が失敗した後に発火します。

## パラメータ {#parameters}

| 名前 | 型 | 説明 |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 登録をトリガーした支払い情報。 |
| $registration_data | `array&lt;string,mixed&gt;` | status=failed および error_message を含む登録メタデータ。 |
| $error_message | `string` | レジストラからの人間が読める形式のエラーメッセージ。 |

### 利用可能バージョン {#since}

- 2.0.0
### 出典 {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) の1250行目で定義されています
