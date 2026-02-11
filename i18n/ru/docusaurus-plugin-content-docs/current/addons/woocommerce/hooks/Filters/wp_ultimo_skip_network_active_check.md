---
id: wp_ultimo_skip_network_active_check
title: Фильтр - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Фильтр: wp_ultimo_skip_network_active_check

Позволяет разработчикам обойти проверку сетевой активации.

Это полезно при использовании установок на основе Composer и других пользовательских конфигураций, например Bedrock, где использование плагинов в качестве mu‑плагинов является нормой.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Если нужно пропустить проверку, по умолчанию false. |

### С версии

- 2.0.0

### Источник

Определено в [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) на строке 272

## Возвращает

true, если вы хотите пропустить проверку, иначе false.
