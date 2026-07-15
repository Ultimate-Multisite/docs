---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Låter utvecklare manipulera domän/sökväpar.

Detta kan vara användbart för flera saker, till exempel för att implementera någon form av staging-lösning, olika servrar, etc.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $d | `object` | Det nuvarande objektet som innehåller nycklar för domän och sökväg. |
| $path_or_subdomain | `string` | Den ursprungliga sökvägen/subdomänen som skickades till funktionen. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) på rad 235


## Returnerar {#returns}
Ett objekt som innehåller nycklar för domän och sökväg.
