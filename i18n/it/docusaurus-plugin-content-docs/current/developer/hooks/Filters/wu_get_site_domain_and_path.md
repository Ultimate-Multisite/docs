---
id: wu_get_site_domain_and_path
title: Filtro - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Consenti agli sviluppatori di manipolare le coppie dominio/percorso.

Questo può essere utile per diverse cose, come implementare una sorta di soluzione di staging, server diversi, ecc.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | L'oggetto corrente contenente le chiavi dominio e percorso. |
| $path_or_subdomain | `string` | Il percorso/sottodominio originale passato alla funzione. |

### Since

- 2.0.0
### Source

Defined in [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) at line 235


## Returns
Un oggetto contenente le chiavi dominio e percorso.
