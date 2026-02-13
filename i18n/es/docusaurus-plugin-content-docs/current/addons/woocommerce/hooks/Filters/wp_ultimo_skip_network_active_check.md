---
id: wp_ultimo_skip_network_active_check
title: Filtro - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filtro: wp_ultimo_skip_network_active_check

Permite a los desarrolladores omitir la comprobación de activación en la red.

Esto es útil al usar configuraciones basadas en Composer y otras configuraciones personalizadas, como Bedrock, por ejemplo, donde usar plugins como mu-plugins es la norma.

## Parámetros

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| $skip_network_activation_check | `bool` | Si debemos omitir la comprobación o no, por defecto es falso. |

### Desde

- 2.0.0

### Fuente

Definido en [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) en la línea 272

## Devuelve

verdadero si deseas omitir la comprobación, falso en caso contrario.
