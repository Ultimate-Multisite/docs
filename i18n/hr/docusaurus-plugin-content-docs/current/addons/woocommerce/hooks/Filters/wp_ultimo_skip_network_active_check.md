---
id: wp_ultimo_skip_network_active_check
title: Filtar - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Omogućuje programerima da zaobiđu provjeru mrežne aktivacije.

Ovo je korisno pri korištenju composer-based i drugih prilagođenih postavki, kao što je, primjerice, Bedrock, gdje je korištenje pluginova kao mu-pluginova uobičajeno.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Trebamo li preskočiti provjeru ili ne, zadano je false. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) u retku 272


## Vraća {#returns}
true ako želite preskočiti provjeru, false u suprotnom.
