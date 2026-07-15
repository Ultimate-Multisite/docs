---
id: wp_ultimo_skip_network_active_check
title: Filtro - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filtro: wp_ultimo_skip_network_active_check

Permite que programadores façam curto-circuito à verificação de ativação de rede.

Isto é útil ao usar configurações baseadas em composer e outras configurações personalizadas, como Bedrock, por exemplo, onde usar plugins como mu-plugins é a norma.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Se devemos ignorar a verificação ou não, por predefinição é false. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) na linha 272


## Devolve {#returns}
true se quiser ignorar a verificação, false caso contrário.
