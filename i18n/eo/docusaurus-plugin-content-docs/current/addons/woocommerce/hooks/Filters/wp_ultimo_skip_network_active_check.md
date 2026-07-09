---
id: wp_ultimo_skip_network_active_check
title: Filtrilo - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filtrilo: wp_ultimo_skip_network_active_check

Permesas al programistoj antaŭhaltigi la kontrolon de reta aktivigo.

Tio utilas kiam oni uzas Composer-bazitajn kaj aliajn proprajn aranĝojn, kiel ekzemple Bedrock, kie uzi plugins kiel mu-plugins estas la normo.

## Parametroj

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Ĉu ni devus preterlasi la kontrolon aŭ ne; defaŭlte estas false. |

### Ekde

- 2.0.0
### Fonto

Difinita en [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) ĉe linio 272


## Redonas
true se vi volas preterlasi la kontrolon, false alie.
