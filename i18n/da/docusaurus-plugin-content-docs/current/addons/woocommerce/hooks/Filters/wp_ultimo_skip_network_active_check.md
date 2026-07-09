---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Giver udviklere mulighed for at kortslutte kontrollen af netværksaktivering.

Dette er nyttigt ved brug af composer-baserede og andre brugerdefinerede opsætninger, såsom Bedrock, for eksempel, hvor brug af plugins som mu-plugins er normen.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Om vi skal springe kontrollen over eller ej, er som standard false. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) på linje 272


## Returnerer {#returns}
true hvis du ønsker at springe kontrollen over, ellers false.
