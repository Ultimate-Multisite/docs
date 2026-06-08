---
id: signup_get_available_languages
title: Филтър - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Филтър: signup_get_available_languages

Филтрира списъка с налични езици за регистрации на сайтове през фронтенда.

Ако предадете празен масив към този хук, показването на настройката във формата за регистрация ще бъде деактивирано, а при създаването на сайта ще се използва езика по подразбиране. Езиците, които вече не са инсталирани, ще бъдат премахнати.

## Параметри

| Име | Тип | Описание |
|------|------|-------------|
| $available_languages | `array` | Налични езици. |

### От

- 4.4.0
### Източник

Дефиниран в [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) на линия 117
