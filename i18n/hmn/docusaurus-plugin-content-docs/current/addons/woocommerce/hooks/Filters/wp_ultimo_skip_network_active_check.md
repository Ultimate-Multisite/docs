---
id: wp_ultimo_skip_network_active_check
title: Lim - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Tso cai rau developers txiav hla qhov kev kuaj xyuas network activation.

Qhov no pab tau thaum siv composer-based thiab lwm yam kev teeb tsa custom, xws li Bedrock, piv txwv li, qhov uas siv plugins ua mu-plugins yog ib qho nquag siv.

## Parameters {#parameters}

| Npe | Hom | Kev piav qhia |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Seb peb yuav tsum hla qhov kev kuaj xyuas los tsis hla, lub neej ntawd yog false. |

### Txij li {#since}

- 2.0.0
### Source {#source}

Teev tseg hauv [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) ntawm kab 272


## Xa rov qab {#returns}
true yog tias koj xav hla qhov kev kuaj xyuas, tsis li ntawd ces false.
