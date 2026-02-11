---
id: wu_apc_process_page_content
title: >-
  I’m ready to translate the content, but I need the actual Markdown/MDX text to
  work with. Could you please provide the file’s contents?
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filtro: wu_apc_process_page_content

Consente agli sviluppatori di modificare il contenuto finale

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $content | `string` | Contenuto dopo le sostituzioni. |
| $content_before_processing | `string` | Contenuto prima delle sostituzioni. |
| $to_replace | `array` | Array contenente i segnaposto. |
| $placeholder_count | `int` | Numero di segnaposto trovati. |

### Dal

- 1.4.0

### Fonte

Definito in [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) alla riga 46

## Restituisce
Contenuto dopo la modifica.
