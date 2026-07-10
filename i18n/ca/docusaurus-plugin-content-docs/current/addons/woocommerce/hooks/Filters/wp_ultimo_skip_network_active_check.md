---
id: wp_ultimo_skip_network_active_check
title: Filtre - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Permet als desenvolupadors saltar la comprobació d'activació de la xarxa.

Això és útil quan es treballa amb configuracions personalitzades basades en composer, com Bedrock, per exemple, on l'ús de plugins com a mu-plugins és la norma.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Si hem de saltar la comprobació o no; per defecte, és false. |

### Desvingut {#since}

- 2.0.0
### Font {#source}

Definit en [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) a la línia 272


## Retornar {#returns}
`true` si desitges saltar la comprobació, `false` de forma contrària.
