---
id: wp_ultimo_skip_network_active_check
title: Фильтр - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Фильтр: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Позволяет разработчикам обойти проверку сетевой активации.

Это полезно при использовании установок на основе Composer и других пользовательских конфигураций, например Bedrock, где использование плагинов в качестве mu‑плагинов является нормой.

## Параметры {#parameters}

| Имя | Тип | Описание |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Если нужно пропустить проверку, по умолчанию false. |

### С версии {#since}

- 2.0.0

### Источник {#source}

Определено в [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) на строке 272

## Возвращает {#returns}

true, если вы хотите пропустить проверку, иначе false.
