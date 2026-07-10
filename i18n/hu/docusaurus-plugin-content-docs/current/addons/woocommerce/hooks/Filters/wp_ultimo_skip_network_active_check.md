---
id: wp_ultimo_skip_network_active_check
title: Szűrő - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Engedi a fejlesztőknek kihugarni a hálózat aktivációs ellenőrzést.

Ez hasznos, ha composer-al alapuló vagy más egyedi beállításokat (például Bedrock-ot) használsz, ahol a mu-pluginként való plugin használata az általános gyakorlat.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Ha kihagyjuk az ellenőrzést, vagy nem, alapértelmezett értéke `false`. |

### Since {#since}

- 2.0.0
### Source {#source}

Definíciója található [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) fájlban, 272-sorban.


## Vrági {#returns}
`true`, ha kihagyni szeretnéd az ellenőrzést, más esetben `false`.
