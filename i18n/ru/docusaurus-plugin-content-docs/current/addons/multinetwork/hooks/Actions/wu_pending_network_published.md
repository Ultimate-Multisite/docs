---
id: wu_pending_network_published
title: Действие - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

Вызывается после публикации ожидающей сети.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Созданная сеть. |
| $membership | `\WP_Ultimo\Models\Membership` | Членство. |
| $pending_network | `array` | Оригинальные данные ожидающей сети. |

### Источник

Определено в [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) на строке 1815
