---
id: signup_get_available_languages
title: Filtrační funkce - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

Filtruje seznam dostupných jazyků pro registraci na front-endu.

Pokud do tohoto hooku předáte prázdný pole (array), vypne se výpis nastavení na formuláři pro registraci, a při vytváření stránky se použije výchozí jazyk. Jazyky, které nejsou již nainstalovány, budou odstraněny.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $available_languages | `array` | Dostupné jazyky. |

### Od {#since}

- 4.4.0
### Zdroj {#source}

Definováno v [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) na řádku 117
