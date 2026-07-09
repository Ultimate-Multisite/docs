---
id: wu_use_domain_mapping
title: Filtrs - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filtrs: wu_use_domain_mapping

Nosaka, vai jāizmanto kartējums

Parasti jūs vēlēsieties atļaut izmantot tikai aktīvus kartējumus. Tomēr, ja vēlaties izmantot sarežģītāku loģiku vai atļaut kartēt arī neaktīvus domēnus, vienkārši filtrējiet šeit.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $is_active | `bool` | Vai kartējums jāuzskata par aktīvu? |
| $mapping | `\Domain` | Kartējums, kuru pārbaudām |
| $domain | `string` |  |

### Avots

Definēts [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) 391. rindā
