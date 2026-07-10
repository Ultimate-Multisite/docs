---
id: signup_get_available_languages
title: Filtru - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filtru: signup_get_available_languages {#filter-signupgetavailablelanguages}

Filtrează lista de limbi disponibile pentru înregistrările de site pe partea de față (front-end).

Trecerea unui array gol la acest hook va dezactiva afișarea setării pe formularul de înscriere, iar pentru crearea site-ului va fi folosită limba implicită. Limbile care nu sunt deja instalate vor fi eliminate.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $available_languages | `array` | Limbile disponibile. |

### De la versiunea {#since}

- 4.4.0
### Sursă {#source}

Definit în [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) la linia 117
