---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Bestem om en mapping skal brukes

Vanligvis vil du bare tillate at aktive mappings brukes. Hvis du derimot ønsker å bruke mer avansert logikk, eller tillate at inaktive domener også mappes, kan du enkelt filtrere her.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $is_active | `bool` | Skal mappingen behandles som aktiv? |
| $mapping | `\Domain` | Mappingen vi inspiserer |
| $domain | `string` | |

### Kilde {#source}

Definert i [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) på linje 391
