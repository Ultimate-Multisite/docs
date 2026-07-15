---
id: move_site
title: Action - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site

Inapangwa kutekelezwa baada ya tovuti (site) kuhamishwa kwenye mtandao (network) mpya.

## Vigezo {#parameters}

| Name | Type | Maelezo |
|------|------|-------------|
| $site_id | `int` | ID ya tovuti ambayo imehama. |
| $old_network_id | `int` | ID ya mtandao wa awali wa tovuti. |
| $new_network_id | `int` | ID ya mtandao ambao tovuti imahamishwa kwenda. |

### Tangu {#since}

- 1.3.0
### Chanzo {#source}

Imefafanuliwa katika [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) kwenye mstari wa 1587
