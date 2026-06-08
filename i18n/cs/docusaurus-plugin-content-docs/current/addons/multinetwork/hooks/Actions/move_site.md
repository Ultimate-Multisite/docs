---
id: move_site
title: Akce - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site

Spustí se, když je místo přesunuto do nové sítě.

## Parametry

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | ID místa, které bylo přesunuto. |
| $old_network_id | `int` | ID původní sítě pro toto místo. |
| $new_network_id | `int` | ID sítě, do které bylo místo přesunuto. |

### Od

- 1.3.0
### Zdroj

Definováno v [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) na řádku 1587
