---
id: move_site
title: Ação - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site

Disparada depois de um site ter sido movido para uma nova rede.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $site_id | `int` | ID do site que foi movido. |
| $old_network_id | `int` | ID da rede original para o site. |
| $new_network_id | `int` | ID da rede para a qual o site foi movido. |

### Desde

- 1.3.0
### Fonte

Definida em [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) na linha 1587
