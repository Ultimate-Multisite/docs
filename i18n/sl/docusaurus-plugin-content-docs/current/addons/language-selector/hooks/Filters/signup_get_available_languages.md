---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages {#filter-signupgetavailablelanguages}

Filtrira seznam razpoložljivih jezikov za registracije spletnih mest na čelnem delu.

Če temu hooku posredujete prazno polje, bo izpis nastavitve na obrazcu za registracijo onemogočen, pri ustvarjanju spletnega mesta pa bo uporabljen privzeti jezik. Jeziki, ki še niso nameščeni, bodo odstranjeni.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $available_languages | `array` | Razpoložljivi jeziki. |

### Od različice {#since}

- 4.4.0
### Vir {#source}

Definirano v [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) v vrstici 117
