---
id: move_site
title: Акција - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Радња: move_site

Покреће се након што је сајт премештен на нову мрежу.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $site_id | `int` | ID сајта који је премештен. |
| $old_network_id | `int` | ID првобитне мреже за сајт. |
| $new_network_id | `int` | ID мреже на коју је сајт премештен. |

### Од верзије {#since}

- 1.3.0
### Извор {#source}

Дефинисано у [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) у реду 1587
