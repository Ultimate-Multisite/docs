---
id: wu_pending_network_published
title: Радња - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

Покреће се након што је мрежа на чекању објављена.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Креирана мрежа. |
| $membership | `\WP_Ultimo\Models\Membership` | Чланство. |
| $pending_network | `array` | Оригинални подаци мреже на чекању. |

### Извор {#source}

Дефинисано у [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) у реду 1815
