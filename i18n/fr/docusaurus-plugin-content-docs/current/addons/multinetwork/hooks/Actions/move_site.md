---
id: move_site
title: Action - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action : move_site {#action-movesite}

Se déclenche après qu'un site a été déplacé vers un nouveau réseau.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | ID du site qui a été déplacé. |
| $old_network_id | `int` | ID du réseau d'origine du site. |
| $new_network_id | `int` | ID du réseau vers lequel le site a été déplacé. |

### Since {#since}

- 1.3.0

### Source {#source}

Defined in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) at line 1587
