---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Bepaal of 'n mapping gebruik moet word

Normaal gesproke sal jy wil hê dat slegs aktiewe mappings gebruik word. As jy egter meer gevorderde logika wil gebruik, of nie-aktiewe domeine ook wil laat map nie, kan jy eenvoudig hier filter.

## Parameters

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $is_active | `bool` | Moet die mapping as aktief behandel word? |
| $mapping | `\Domain` | Die mapping wat ons ondersoek |
| $domain | `string` | |

### Bron

Gedefinieer in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) op lyn 391
