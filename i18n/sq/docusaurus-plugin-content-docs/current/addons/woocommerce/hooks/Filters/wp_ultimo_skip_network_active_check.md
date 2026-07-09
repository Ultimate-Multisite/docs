---
id: wp_ultimo_skip_network_active_check
title: Filtër - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filtër: wp_ultimo_skip_network_active_check

Lejon zhvilluesit të anashkalojnë kontrollin e aktivizimit të rrjetit.

Kjo është e dobishme kur përdoren konfigurime të bazuara në composer dhe konfigurime të tjera të personalizuara, si për shembull Bedrock, ku përdorimi i plugin-eve si mu-plugins është normë.

## Parametrat

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Nëse duhet ta anashkalojmë kontrollin apo jo, si parazgjedhje është false. |

### Që nga

- 2.0.0
### Burimi

Përcaktuar në [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) në rreshtin 272


## Kthen
true nëse dëshironi ta anashkaloni kontrollin, false përndryshe.
