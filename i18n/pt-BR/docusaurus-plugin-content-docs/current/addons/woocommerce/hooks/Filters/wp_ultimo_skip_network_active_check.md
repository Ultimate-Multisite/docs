---
id: wp_ultimo_skip_network_active_check
title: Filtro - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Permite que os desenvolvedores interrompam a verificação de ativação em rede.

Isso é útil ao usar configurações baseadas em composer e outras personalizadas, como Bedrock, por exemplo, onde usar plugins como mu-plugins é a norma.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| $skip_network_activation_check | `bool` | Se devemos pular a verificação ou não, o padrão é falso. |

### Desde

- 2.0.0

### Fonte

Definido em `inc/class-requirements.php` na linha 272

## Retorna
verdadeiro se você deseja pular a verificação, falso caso contrário.
