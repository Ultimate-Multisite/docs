---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Bepaal of een mapping moet worden gebruikt

Typisch wil je alleen actieve mappings toestaan. Maar als je meer geavanceerde logica wilt gebruiken, of niet-actieve domeinen ook wilt toewijzen, filter hier eenvoudig.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $is_active | `bool` | Moet de mapping als actief worden behandeld? |
| $mapping | `\Domain` | Mapping die we inspecteren |
| $domain | `string` |  |

### Bron

Gedefinieerd in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) op regel 391
