---
id: switch_network
title: Toiminto - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Toiminto: switch_network

Käynnistyy, kun nykyinen verkkokonteksti vaihdetaan.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $new_network_id | `int` | Sen verkon ID, johon vaihdetaan. |
| $old_network_id | `int` | Aiemmin nykyisenä olleen verkon ID. |

### Alkaen {#since}

- 1.3.0
### Lähde {#source}

Määritelty tiedostossa [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) rivillä 859
