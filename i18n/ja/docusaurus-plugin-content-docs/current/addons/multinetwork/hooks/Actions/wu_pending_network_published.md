---
id: wu_pending_network_published
title: アクション - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

保留中のネットワークが公開された後に発火します。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | 作成されたネットワーク。 |
| $membership | `\WP_Ultimo\Models\Membership` | メンバーシップ。 |
| $pending_network | `array` | 元の保留中ネットワークデータ。 |

### Source

定義は [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) の 1815 行目にあります
