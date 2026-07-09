---
id: signup_get_available_languages
title: Filtër - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filtri: signup_get_available_languages {#filter-signupgetavailablelanguages}

Filtron listën e gjuhëve të disponueshme për regjistrimet e site në front-end.

Kalimi i një vargu bosh te ky hook do të çaktivizojë shfaqjen e cilësimit në formularin e regjistrimit, dhe gjuha e parazgjedhur do të përdoret kur të krijohet site. Gjuhët që nuk janë tashmë të instaluara do të hiqen.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $available_languages | `array` | Gjuhët e disponueshme. |

### Që nga {#since}

- 4.4.0
### Burimi {#source}

Përcaktuar në [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) në rreshtin 117
