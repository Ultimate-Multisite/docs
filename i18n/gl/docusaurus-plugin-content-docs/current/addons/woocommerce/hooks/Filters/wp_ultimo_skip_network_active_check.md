---
id: wp_ultimo_skip_network_active_check
title: Filtro - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filtro: wp_ultimo_skip_network_active_check

Permite aos desenvolvedores interromper anticipadamente a comprobación de activación de rede.

Isto é útil cando se usan configuracións baseadas en composer e outras configuracións personalizadas, como Bedrock, por exemplo, onde o uso de plugins como mu-plugins é a norma.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Se debemos omitir a comprobación ou non; por defecto é false. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido en [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) na liña 272


## Devolve {#returns}
true se desexas omitir a comprobación; false en caso contrario.
