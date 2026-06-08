---
id: wu_use_domain_mapping
title: Filtre - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Determina si s'ha de fer servir una assignació (mapping)

Normalment, només voleu permetre que es facin servir les assignacions actives. No obstant això, si voleu utilitzar lògica més avançada, o permetre que domínis no actius també es mapegin, simplement filtreu aquí.

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $is_active | `bool` | Vull que l'assignació es tracti com a activa? |
| $mapping | `\Domain` | L'assignació que estem inspeccionant |
| $domain | `string` | |

### Font

Definit en [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) a la línia 391
