---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filtert d’Redirect-URL nodeems eng Domain primär gemaach gouf.

Erlaabt Entwéckler unzepassen, wou Benotzer higeleet ginn, nodeems se eng Domain erfollegräich als primär festgeluecht hunn. Standardméisseg gëtt op déi aktuell URL um Haaptsite weidergeleet, oder op d’Admin-URL vum Site, dee geännert gëtt.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $redirect_url | `string` | Déi standardméisseg Redirect-URL. Entweder déi aktuell URL (wann Haaptsite) oder d’Admin-URL vum aktuelle Site. |
| $current_site | `int` | D’ID vum Site, deem seng Domain primär gemaach gëtt. |
| $domain | `\Domain` | Den Domain-Objet, deen primär gemaach gouf. |
| $old_primary_domains | `array` | Array vun IDen vun Domainen, déi virdru primär waren. |

### Zënter {#since}

- 2.0.0
### Quell {#source}

Definéiert an [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) op der Zeil 639


## Retouren {#returns}
Déi gefiltert Redirect-URL.
