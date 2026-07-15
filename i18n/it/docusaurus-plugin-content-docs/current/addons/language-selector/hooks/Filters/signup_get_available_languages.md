---
id: signup_get_available_languages
title: Filtro - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filtro: signup_get_available_languages

Filtra l'elenco delle lingue disponibili per le registrazioni del sito front-end.

Passare un array vuoto a questo hook disabiliterà l'output dell'impostazione nel modulo di registrazione, e la lingua predefinita verrà usata durante la creazione del sito. Le lingue non già installate verranno rimosse.

## Parametri {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $available_languages | `array` | Lingue disponibili. |

### Dalla versione {#since}

- 4.4.0
### Fonte {#source}

Definito in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) alla riga 117
