---
id: wu_use_domain_mapping
title: Filtro - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filtro: wu_use_domain_mapping

Determina se um mapeamento deve ser usado

Normalmente, vai querer permitir apenas que mapeamentos ativos sejam usados. No entanto, se quiser usar uma lógica mais avançada, ou permitir que domínios não ativos também sejam mapeados, basta filtrar aqui.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $is_active | `bool` | O mapeamento deve ser tratado como ativo? |
| $mapping | `\Domain` | Mapeamento que estamos a inspecionar |
| $domain | `string` |  |

### Fonte {#source}

Definido em [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) na linha 391
