---
id: signup_get_available_languages
title: Филтер - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages {#filter-signupgetavailablelanguages}

Го филтрира списокот на достапни јазици за регистрации на преден дел на site.

Проследувањето празна низа до оваа кука ќе го оневозможи прикажувањето на поставката на формуларот за регистрација, а стандардниот јазик ќе се користи при создавање на site. Јазиците што не се веќе инсталирани ќе бидат отстранети.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $available_languages | `array` | Достапни јазици. |

### Од верзија {#since}

- 4.4.0
### Извор {#source}

Дефинирано во [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) на линија 117
