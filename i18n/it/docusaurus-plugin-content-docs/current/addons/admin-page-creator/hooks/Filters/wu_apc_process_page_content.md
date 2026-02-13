---
id: wu_apc_process_page_content
title: Filtro - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filtro: wu_apc_process_page_content

Consente agli sviluppatori di modificare il contenuto finale

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $content | `string` | Contenuto dopo le sostituzioni. |
| $content_before_processing | `string` | Contenuto prima delle sostituzioni. |
| $to_replace | `array` | Array contenente i segnaposto da sostituire. |
| $placeholder_count | `int` | Numero di segnaposto trovati. |

### Since

- 1.4.0

### Source

Defined in [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) at line 46

## Returns

Contenuto dopo la modifica.
