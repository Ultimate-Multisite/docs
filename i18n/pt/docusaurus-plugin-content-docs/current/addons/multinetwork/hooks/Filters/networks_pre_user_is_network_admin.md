---
id: networks_pre_user_is_network_admin
title: Filtro - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filtro: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

Filtra as redes das quais um utilizador é o administrador, para encurtar o processo.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $ | `array\|bool\|null` | Lista de IDs de rede ou false. Qualquer coisa exceto null encurtará o processo. |
| $ | `int` | ID do utilizador para o qual as redes devem ser devolvidas. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) na linha 688
