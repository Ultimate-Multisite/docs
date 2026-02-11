---
id: signup_get_available_languages
title: Filtro - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: abfd9a9381c23503be93e034d42f32c8
---
# Filter: signup_get_available_languages

Filtra l'elenco delle lingue disponibili per le registrazioni sul front-end del sito.

Passare un array vuoto a questo hook disabiliterà l'output dell'impostazione sul modulo di registrazione, e la lingua predefinita verrà utilizzata durante la creazione del sito. Le lingue non già installate verranno rimosse.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | Lingue disponibili. |

### Since

- 4.4.0

### Source

Definito in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L125) alla riga 125
