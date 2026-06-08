---
id: wu_pending_network_published
title: Acció - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

Es dispara després que una xarxa pendènt es publiqui.

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | La xarxa creada. |
| $membership | `\WP_Ultimo\Models\Membership` | L'admissió (o membresia). |
| $pending_network | `array` | Les dades originals de la xarxa pendènt. |

### Font

Definit en [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) a la línia 1815
