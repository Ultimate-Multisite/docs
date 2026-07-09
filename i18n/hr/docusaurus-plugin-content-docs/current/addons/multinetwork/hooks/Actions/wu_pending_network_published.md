---
id: wu_pending_network_published
title: Radnja - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Akcija: wu_pending_network_published

Pokreće se nakon što je mreža na čekanju objavljena.

## Parametri

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Stvorena mreža. |
| $membership | `\WP_Ultimo\Models\Membership` | Članstvo. |
| $pending_network | `array` | Izvorni podaci mreže na čekanju. |

### Izvor

Definirano u [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) u retku 1815
