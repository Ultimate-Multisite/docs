---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Дазваляе рэкарытарыям (developers) праскочыць праверку актывацыі сеткі.

Гэта вельмі карысна, калі вы выкарыстоўваеце ўстаноўкі, заснаваныя на composer, або іншыя спецыяльныя канфігурацыі, такія як Bedrock. У такіх выпадках звычайнымі ўстаноўкамі з плагінамі ў фармаце mu-plugins.

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Ці павінны мы праскочыць праверку, ці nie. Па спісывам не вызначаецца `false`. |

### З {#since}

- 2.0.0
### Выказварэнне {#source}

Вызначаны ў [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) у 272-й пасылцы.


## Павяртае {#returns}
`true`, калі вы хочаце праскочыць праверку, інакш `false`.
