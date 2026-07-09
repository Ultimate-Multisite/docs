---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Določi, ali naj se uporabi preslikava

Običajno boste želeli dovoliti uporabo samo aktivnih preslikav. Če pa želite uporabiti naprednejšo logiko ali dovoliti, da se preslikajo tudi neaktivne domene, preprosto filtrirajte tukaj.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $is_active | `bool` | Ali naj se preslikava obravnava kot aktivna? |
| $mapping | `\Domain` | Preslikava, ki jo pregledujemo |
| $domain | `string` |  |

### Vir

Določeno v [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) v vrstici 391
