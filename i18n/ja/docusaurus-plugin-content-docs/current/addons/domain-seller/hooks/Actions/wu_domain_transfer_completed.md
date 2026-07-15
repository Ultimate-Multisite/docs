---
id: wu_domain_transfer_completed
title: アクション - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed

ドメインの移管が完了した後に発火します。

## パラメータ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | ドメインオブジェクト。 |
| $transfer_data | `array` | 移管完了データ。 |

### Since {#since}

- 2.1.0
### Source {#source}

[`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) の690行目で定義されています。
