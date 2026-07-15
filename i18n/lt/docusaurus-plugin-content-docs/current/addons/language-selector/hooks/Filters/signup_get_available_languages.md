---
id: signup_get_available_languages
title: Filtras - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filtras: signup_get_available_languages

Filtruoja prieinamų kalbų sąrašą priekinės dalies site registracijoms.

Perdavus tuščią masyvą šiam hook, nustatymo išvestis registracijos formoje bus išjungta, o kuriant site bus naudojama numatytoji kalba. Kalbos, kurios dar neįdiegtos, bus pašalintos.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $available_languages | `array` | Prieinamos kalbos. |

### Nuo {#since}

- 4.4.0
### Šaltinis {#source}

Apibrėžta faile [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117), 117 eilutėje
