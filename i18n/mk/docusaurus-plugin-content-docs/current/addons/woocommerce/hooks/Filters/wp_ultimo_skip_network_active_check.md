---
id: wp_ultimo_skip_network_active_check
title: Филтер - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Филтер: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Им овозможува на програмерите да ја заобиколат проверката за мрежна активација.

Ова е корисно при користење поставувања базирани на composer и други приспособени поставувања, како Bedrock, на пример, каде што користењето plugins како mu-plugins е норма.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Дали треба да ја прескокнеме проверката или не, стандардно е false. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) на линија 272


## Враќа {#returns}
true ако сакате да ја прескокнете проверката, инаку false.
