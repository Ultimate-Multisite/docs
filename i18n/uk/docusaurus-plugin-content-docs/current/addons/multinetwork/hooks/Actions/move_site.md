---
id: move_site
title: Дія - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site

Викликається після того, як сайт було переміщено до нової мережі.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | ID сайту, який було переміщено. |
| $old_network_id | `int` | ID початкової мережі для сайту. |
| $new_network_id | `int` | ID мережі, до якої було переміщено сайт. |

### Since

- 1.3.0
### Source

Визначено в [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) на рядку 1587
