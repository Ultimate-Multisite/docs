---
id: wu_connector_enforcement_option_keys
title: Филтер - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Филтрирајте ја листата на клучеви за опции на AI провајдери што се наметнуваат од главниот сајт.

Додајте клучеви за опции за прилагодени или third-party AI provider plugin-и, за нивните поставки исто така да се наследуваат од главниот сајт на подсајтовите.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $keys | `string[]` | Имиња на клучеви за опции што треба да се наметнат (веќе ги вклучува динамички откриените клучеви на конектори и EXTRA_PROVIDER_OPTIONS). |

### Од верзија {#since}

- 1.2.0
### Извор {#source}

Дефинирано во [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) на линија 206
