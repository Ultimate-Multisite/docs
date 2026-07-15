---
id: wu_domain_registration_completed
title: アクション - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

ドメインが正常に登録された後に実行されます。

## パラメータ {#parameters}

| 名前 | 型 | 説明 |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 登録をトリガーした支払い情報。 |
| $registration_data | `array<string,mixed>` | 登録のメタデータ（ドメイン名、プロバイダーID、年数、有効期限など）。 |
| $result | `array<string,mixed>` | レジストラから返された生の（raw）結果配列。 |

### 利用可能バージョン {#since}

- 2.0.0
### 出典 {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) の1204行目で定義されています
