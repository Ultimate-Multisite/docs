---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

Filtrira listu dostupnih jezika za registraciju na web stranici (front-end).

Ako ovom hook-u proslijedite prazan niz (empty array), ispis podešavanja na formularu za registraciju će biti onemogućen, a za kreiranje stranice će se koristiti podrazumevani jezik. Jezici koji već nisu instalirani će biti uklonjeni.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $available_languages | `array` | Dostupni jezici. |

### Od {#since}

- 4.4.0
### Izvor {#source}

Definisano u [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) na liniji 117
