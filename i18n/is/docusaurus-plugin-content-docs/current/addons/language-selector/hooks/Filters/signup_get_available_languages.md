---
id: signup_get_available_languages
title: Sía - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Sía: signup_get_available_languages

Síar listann yfir tiltæk tungumál fyrir skráningar vefja í framenda.

Ef tómt fylki er sent í þennan hook verður birting stillingarinnar á skráningareyðublaðinu óvirkjuð og sjálfgefið tungumál verður notað þegar vefurinn er búinn til. Tungumál sem eru ekki þegar uppsett verða fjarlægð.

## Færibreytur

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $available_languages | `array` | Tiltæk tungumál. |

### Síðan

- 4.4.0
### Uppruni

Skilgreint í [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) í línu 117
