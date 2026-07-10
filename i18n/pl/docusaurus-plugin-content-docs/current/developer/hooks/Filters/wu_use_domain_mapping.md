---
id: wu_use_domain_mapping
title: Filtr - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping {#filter-wuusedomainmapping}

Określ, czy mapowanie powinno być użyte

Zazwyczaj chcesz, aby działały tylko aktywne mapowania. Jeśli jednak chcesz zastosować bardziej zaawansowaną logikę lub pozwolić na mapowanie nieaktywnych domen, po prostu filtruj tutaj.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Czy mapowanie powinno być traktowane jako aktywne? |
| $mapping | `\Domain` | Mapowanie, które badamy |
| $domain | `string` | |

### Źródło {#source}

Zdefiniowane w [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) w linii 391
