---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Razvijalcem omogoči, da premostijo preverjanje omrežne aktivacije.

To je uporabno pri uporabi nastavitev, ki temeljijo na Composerju, in drugih nastavitev po meri, kot je na primer Bedrock, kjer je uporaba vtičnikov kot mu-plugins običajna.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Ali naj preverjanje preskočimo ali ne; privzeto je false. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Določeno v [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) v vrstici 272


## Vrne {#returns}
true, če želite preskočiti preverjanje, sicer false.
