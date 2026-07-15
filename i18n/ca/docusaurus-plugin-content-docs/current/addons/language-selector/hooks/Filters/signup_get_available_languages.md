---
id: signup_get_available_languages
title: Filtre - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

Filtra la llista de llengües disponibles per a les inscripcions del front-end.

Passar un array buit a aquest hook desactiva l'exposició de la configuració al formul d'inscripció, i es trigarà la llengua predeterminada quan es crei el site. Les llengües que no estiguin ja instal·lades seran eliminades.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $available_languages | `array` | Llengües disponibles. |

### Desvinguts {#since}

- 4.4.0
### Font {#source}

Definit en [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) a la línia 117
