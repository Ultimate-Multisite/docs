---
id: wu_pending_network_published
title: Дія - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published {#action-wupendingnetworkpublished}

Виконується після публікації очікувальної мережі.

## Параметри {#parameters}

| Name | Type | Опис |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Створена мережа. |
| $membership | `\WP_Ultimo\Models\Membership` | Членство. |
| $pending_network | `array` | Початкові дані очікувальної мережі. |

### Джерело {#source}

Визначено в [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) на рядку 1815
