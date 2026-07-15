---
id: signup_get_available_languages
title: Фільтр - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

Фільтрує список доступних мов для реєстрації на фронтенд-сайті.

Передача порожнього масиву до цього хука вимкне виведення налаштування на формі реєстрації, і для створення сайту буде використана мова за замовчуванням. Мови, які ще не встановлені, будуть видалені.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | Доступні мови. |

### Since {#since}

- 4.4.0
### Source {#source}

Визначено в [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) у рядку 117
