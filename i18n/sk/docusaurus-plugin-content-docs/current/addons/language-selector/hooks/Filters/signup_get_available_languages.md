---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

Filtruje zoznam dostupných jazykov pre registrácie webov na front-ende.

Odovzdanie prázdneho poľa tomuto hooku zakáže zobrazenie nastavenia v registračnom formulári a pri vytváraní webu sa použije predvolený jazyk. Jazyky, ktoré ešte nie sú nainštalované, budú odstránené.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $available_languages | `array` | Dostupné jazyky. |

### Od verzie

- 4.4.0
### Zdroj

Definované v [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) na riadku 117
