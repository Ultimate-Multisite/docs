---
id: wu_connector_enforcement_option_keys
title: Filtro - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

Filtra a lista de chaves de opção do provedor de IA aplicadas pelo site principal.

Adicione chaves de opção para plugins de provedor de IA personalizados ou de terceiros para que suas configurações também sejam herdadas do site principal nos subsites.

## Parâmetros {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Nomes das chaves de opção a serem aplicadas (já inclui chaves de conector descobertas dinamicamente e EXTRA_PROVIDER_OPTIONS). |

### Desde {#since}

- 1.2.0
### Fonte {#source}

Definido em [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) na linha 206
