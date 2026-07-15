---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

Filtrerer listen over tilgjengelige språk for registrering på nettstedet (front-end).

Hvis du sender et tomt array til denne hooken, vil det deaktivere visningen av innstillingen på registreringsskjemaet, og standard språket vil bli brukt når nettstedet opprettes. Språk som ikke allerede er installert, vil bli fjernet.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $available_languages | `array` | Tilgjengelige språk. |

### Siden {#since}

- 4.4.0
### Kilde {#source}

Definert i [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) på linje 117
