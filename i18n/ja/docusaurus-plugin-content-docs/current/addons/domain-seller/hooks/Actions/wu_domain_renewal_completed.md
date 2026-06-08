---
id: wu_domain_renewal_completed
title: アクション - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

ドメインが正常に更新された後に発火します。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 更新をトリガーした支払い情報。 |
| $renewal_data | `array<string,mixed>` | 更新のメタデータ（ドメイン名、年数、顧客IDなど）。 |
| $result | `array<string,mixed>` | 新しい有効期限日を含む、レジストラから返される生の（raw）結果配列。 |

### 利用可能バージョン

- 2.0.0
### 出典

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) の594行目で定義されています。
