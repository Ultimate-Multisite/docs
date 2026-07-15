---
id: wp_ultimo_skip_network_active_check
title: Филтер - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Филтер: wp_ultimo_skip_network_active_check

Омогућава програмерима да прекину проверу активације мреже.

Ово је корисно када се користе composer-based и друга прилагођена подешавања, као што је Bedrock, на пример, где је коришћење plugin-а као mu-plugins уобичајено.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Да ли треба да прескочимо проверу или не, подразумевано је false. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) у реду 272


## Враћа {#returns}
true ако желите да прескочите проверу, false у супротном.
