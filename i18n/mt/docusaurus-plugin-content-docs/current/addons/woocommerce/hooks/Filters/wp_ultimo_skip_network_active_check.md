---
id: wp_ultimo_skip_network_active_check
title: Filtru - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filtru: wp_ultimo_skip_network_active_check

Jippermetti lill-iżviluppaturi jaqbżu minn qabel il-verifika tal-attivazzjoni tan-network.

Dan huwa utli meta tuża setups ibbażati fuq composer u oħrajn personalizzati, bħal Bedrock, pereżempju, fejn l-użu ta’ plugins bħala mu-plugins huwa n-norma.

## Parametri

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Jekk għandniex naqbżu l-verifika jew le, b’mod awtomatiku false. |

### Minn

- 2.0.0
### Sors

Iddefinit f’[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) fil-linja 272


## Jirritorna
true jekk tixtieq taqbeż il-verifika, false inkella.
