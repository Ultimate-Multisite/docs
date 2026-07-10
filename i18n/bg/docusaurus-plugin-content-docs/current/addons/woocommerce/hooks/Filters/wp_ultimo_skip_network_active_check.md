---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Позволява на разработчиците да прескочат проверката за активност на мрежата.

Това е полезно, когато използвате настройки, базирани на Composer и други персонализирани конфигурации, като например Bedrock, където нормално е да се използват плагини като mu-plugins.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Ако трябва да прескочим проверката или не, по подразбиране е false. |

### Since {#since}

- 2.0.0
### Source {#source}

Дефиниран в [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) на линия 272


## Returns {#returns}
true, ако желаете да прескочите проверката, false в против случай.
