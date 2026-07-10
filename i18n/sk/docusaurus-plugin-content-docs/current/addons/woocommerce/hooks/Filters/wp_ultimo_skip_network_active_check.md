---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Umožňuje vývojárom obísť kontrolu aktivácie siete.

Je to užitočné pri používaní nastavení založených na composer a iných vlastných nastavení, ako je napríklad Bedrock, kde je používanie pluginov ako mu-plugins štandardom.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Či máme kontrolu preskočiť alebo nie, predvolene false. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) na riadku 272


## Vracia {#returns}
true, ak chcete kontrolu preskočiť, inak false.
