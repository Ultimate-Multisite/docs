---
id: switch_network
title: Akcja - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network

Wywoływane, gdy zmienia się aktualny kontekst sieci.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $new_network_id | `int` | ID sieci, do której następuje przełączenie. |
| $old_network_id | `int` | ID wcześniej aktywnej sieci. |

### Od {#since}

- 1.3.0
### Źródło {#source}

Zdefiniowane w [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) w linii 859
