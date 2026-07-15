---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Afgør, om en mapping skal bruges

Typisk vil du kun tillade, at aktive mappings bruges. Men hvis du vil bruge mere avanceret logik eller også tillade, at ikke-aktive domæner mappes, kan du blot filtrere her.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $is_active | `bool` | Skal mappingen behandles som aktiv? |
| $mapping | `\Domain` | Mapping, som vi inspicerer |
| $domain | `string` |  |

### Kilde {#source}

Defineret i [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) på linje 391
