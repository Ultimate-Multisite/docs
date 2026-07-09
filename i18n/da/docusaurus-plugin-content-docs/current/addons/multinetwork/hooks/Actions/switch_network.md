---
id: switch_network
title: Handling - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Handling: switch_network {#action-switchnetwork}

Udløses, når den aktuelle netværkskontekst skiftes.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $new_network_id | `int` | ID for netværket, der skiftes til. |
| $old_network_id | `int` | ID for det tidligere aktuelle netværk. |

### Siden {#since}

- 1.3.0
### Kilde {#source}

Defineret i [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) på linje 859
