---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

Filtrerer listen over tilgængelige sprog for frontend-tilmeldinger af websteder.

Hvis du sender et tomt array til dette hook, deaktiveres visningen af indstillingen på tilmeldingsformularen, og standardsproget vil blive brugt, når webstedet oprettes. Sprog, der ikke allerede er installeret, vil blive fjernet.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $available_languages | `array` | Tilgængelige sprog. |

### Siden {#since}

- 4.4.0
### Kilde {#source}

Defineret i [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) på linje 117
