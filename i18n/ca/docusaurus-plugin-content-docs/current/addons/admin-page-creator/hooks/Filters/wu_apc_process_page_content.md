---
id: wu_apc_process_page_content
title: Filtre - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filtre: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Permet als desenvolupadors modificar el contingut final.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $content | `string` | Contingut després de les substitucions. |
| $content_before_processing | `string` | Contingut abans de les substitució. |
| $to_replace | `array` | Arreig que conté els marcadors de posició (placeholders). |
| $placeholder_count | `int` | Nombre de marcadors de posició trobats. |

### Des de {#since}

- 1.4.0
### Font {#source}

Definit a [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) a la línia 46


## Retorn {#returns}
Contingut després de la modificació.
