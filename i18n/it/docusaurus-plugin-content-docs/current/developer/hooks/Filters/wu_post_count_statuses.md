---
id: wu_post_count_statuses
title: Filtro - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filtro: wu_post_count_statuses

Consenti agli sviluppatori di plugin di modificare lo stato del post da contare. Per impostazione predefinita, i post pubblicati e privati sono conteggiati.

## Parameters

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $post_status | `array` | L'elenco degli stati dei post |
| $post_type | `string` | Lo slug del tipo di post |

### Since

- 1.9.1

### Source

Definito in [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) alla riga 119

## Returns

Nuovo array di stati dei post
