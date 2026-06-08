---
id: move_site
title: Действие - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Действие: move_site

Изпълнява се след като един сайт е преместен в нова мрежа.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | ID на сайта, който е преместен. |
| $old_network_id | `int` | ID на оригиналната мрежа за сайта. |
| $new_network_id | `int` | ID на мрежата, в която е преместен сайтът. |

### От

- 1.3.0
### Източник

Дефиниран в [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) на линия 1587
