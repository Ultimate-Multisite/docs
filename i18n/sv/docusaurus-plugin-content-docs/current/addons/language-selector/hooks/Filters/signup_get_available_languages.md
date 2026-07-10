---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages {#filter-signupgetavailablelanguages}

Filtrerar listan över tillgängliga språk för användarregistrering på webbplatsens front-end.

Om du skickar ett tomt array till denna hook kommer utskriften av inställningen på registreringsformuläret att inaktiveras, och standard-språket kommer att användas när webbplatsen skapas. Språk som inte redan är installerade kommer att tas bort.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $available_languages | `array` | Tillgängliga språk. |

### Sedan {#since}

- 4.4.0
### Källa {#source}

Definieras i [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) på rad 117
