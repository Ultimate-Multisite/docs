---
id: wu_use_domain_mapping
title: Filtro - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filtro: wu_use_domain_mapping

Determinare se un mapping dovrebbe essere utilizzato

Di solito, vuoi consentire solo l'uso dei mapping attivi. Tuttavia, se desideri utilizzare una logica più avanzata, o consentire anche i domini non attivi di essere mappati, filtra semplicemente qui.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $is_active | `bool` | Il mapping dovrebbe essere considerato attivo? |
| $mapping | `\Domain` | Mapping che stiamo ispezionando |
| $domain | `string` |  |

### Fonte

Definito in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) alla riga 391
