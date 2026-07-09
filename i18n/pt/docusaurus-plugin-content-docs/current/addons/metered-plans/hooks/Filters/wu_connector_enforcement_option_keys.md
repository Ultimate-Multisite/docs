---
id: wu_connector_enforcement_option_keys
title: Filtro - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filtro: wu_connector_enforcement_option_keys

Filtra a lista de chaves de opção de provedores de AI aplicadas a partir do site principal.

Adiciona chaves de opção para plugins de provedores de AI personalizados ou de terceiros, para que as suas definições também sejam herdadas do site principal nos subsites.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $keys | `string[]` | Nomes das chaves de opção a aplicar (já inclui chaves de conectores descobertas dinamicamente e EXTRA_PROVIDER_OPTIONS). |

### Desde

- 1.2.0
### Fonte

Definido em [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) na linha 206
