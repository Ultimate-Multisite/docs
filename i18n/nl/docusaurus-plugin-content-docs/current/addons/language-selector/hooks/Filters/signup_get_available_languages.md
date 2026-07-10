---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages {#filter-signupgetavailablelanguages}

Filtert de lijst met beschikbare talen voor front-end website-aanmeldingen.

Als je een lege array aan deze hook doorgeeft, wordt de uitvoer van de instelling op het aanmeldformulier uitgeschakeld en wordt de standaardtaal gebruikt bij het maken van de website. Talen die nog niet zijn geïnstalleerd, worden verwijderd.

## Parameters {#parameters}

| Naam | Type | Beschrijving |
|------|------|-------------|
| $available_languages | `array` | Beschikbare talen. |

### Sinds {#since}

- 4.4.0
### Bron {#source}

Gedefinieerd in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) op regel 117
