---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Lar utviklere omgå sjekken for nettverksaktivering.

Dette er nyttig når du bruker composer-baserte og andre tilpassede oppsett, for eksempel Bedrock, der det er vanlig å bruke plugins som mu-plugins.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Om vi skal hoppe over sjekken eller ikke. Standardverdien er `false`. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) på linje 272


## Returnerer {#returns}
`true` hvis du ønsker å hoppe over sjekken, ellers `false`.
