---
id: move_site
title: Toiminto - siirrä_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site

Käynnistyy sen jälkeen, kun sivusto on siirretty uuteen networkiin.

## Parametrit {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | Siirretyn sivuston ID. |
| $old_network_id | `int` | Sivuston alkuperäisen networkin ID. |
| $new_network_id | `int` | Sen networkin ID, johon sivusto on siirretty. |

### Alkaen {#since}

- 1.3.0
### Lähde {#source}

Määritelty tiedostossa [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) rivillä 1587
