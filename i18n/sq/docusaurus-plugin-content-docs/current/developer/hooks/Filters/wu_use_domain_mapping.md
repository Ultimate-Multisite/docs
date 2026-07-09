---
id: wu_use_domain_mapping
title: Filtër - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Përcaktoni nëse duhet të përdoret një mapping

Zakonisht, do të dëshironi të lejoni përdorimin vetëm të mappings aktive. Megjithatë, nëse dëshironi të përdorni logjikë më të avancuar, ose të lejoni që edhe domenet joaktive të bëhen mapped, thjesht filtroni këtu.

## Parametrat

| Emri | Type | Përshkrimi |
|------|------|-------------|
| $is_active | `bool` | A duhet që mapping të trajtohet si aktive? |
| $mapping | `\Domain` | Mapping që po inspektojmë |
| $domain | `string` |  |

### Burimi

Përcaktuar në [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) në rreshtin 391
