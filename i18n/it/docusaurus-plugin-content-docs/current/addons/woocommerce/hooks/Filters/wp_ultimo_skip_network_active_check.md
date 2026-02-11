---
id: wp_ultimo_skip_network_active_check
title: Filtro - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Consente agli sviluppatori di interrompere il controllo di attivazione della rete.

Questo è utile quando si utilizzano configurazioni basate su composer e altre configurazioni personalizzate, come Bedrock, ad esempio, dove l'uso di plugin come mu-plugins è la norma.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Se dovremmo saltare il controllo o meno, di default è false. |

### Since

- 2.0.0

### Source

Definito in [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) at line 272

## Returns

true se vuoi saltare il controllo, false altrimenti.
