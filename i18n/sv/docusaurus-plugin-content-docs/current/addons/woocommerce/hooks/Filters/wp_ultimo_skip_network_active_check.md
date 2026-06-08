---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Låter utvecklare kringgå kontrollen för nätverksaktivering.

Detta är användbart när du använder Composer-baserade och andra anpassade uppsättningar, till exempel Bedrock, där det är vanligt att använda plugins som mu-plugins.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Om vi ska hoppa över kontrollen eller inte. Standardvärdet är false. |

### Sedan

- 2.0.0
### Källa

Definieras i [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) på rad 272


## Returnerar
true om du vill hoppa över kontrollen, annars false.
