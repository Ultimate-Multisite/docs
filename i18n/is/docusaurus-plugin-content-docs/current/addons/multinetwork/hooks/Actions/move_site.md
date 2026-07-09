---
id: move_site
title: Aðgerð - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Aðgerð: move_site

Keyrist eftir að vefur hefur verið færður yfir á nýtt net.

## Færibreytur

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $site_id | `int` | ID vefsins sem hefur verið færður. |
| $old_network_id | `int` | ID upprunalega netsins fyrir vefinn. |
| $new_network_id | `int` | ID netsins sem vefurinn hefur verið færður yfir á. |

### Frá útgáfu

- 1.3.0
### Uppruni

Skilgreint í [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) í línu 1587
