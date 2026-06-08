---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Umožňuje vývojářům zkratnout kontrolu aktivace sítě.

Je to užitečné, když používáte systémy založené na Composeru nebo jiné vlastní nastavení, jako je Bedrock, kde je normou používání pluginů jako mu-plugins.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Zda máme kontrolu přeskočit, nebo ne. Výchozí hodnota je `false`. |

### Od

- 2.0.0
### Zdroj

Definováno v [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) na řádku 272

## Vrátí
`true`, pokud chcete kontrolu přeskočit, jinak `false`.
