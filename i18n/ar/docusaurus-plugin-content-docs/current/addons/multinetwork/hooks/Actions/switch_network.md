---
id: switch_network
title: الإجراء - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network {#action-switchnetwork}

يتم إطلاقه عندما يتم تبديل سياق الشبكة الحالي.

## Parameters {#parameters}

| الاسم | النوع | الوصف |
|------|------|-------------|
| $new_network_id | `int` | معرف الشبكة التي يتم التبديل إليها. |
| $old_network_id | `int` | معرف الشبكة الحالية السابقة. |

### Since {#since}

- 1.3.0

### Source {#source}

[مُعرَّف في inc/functions/network.php في السطر 859](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859)
