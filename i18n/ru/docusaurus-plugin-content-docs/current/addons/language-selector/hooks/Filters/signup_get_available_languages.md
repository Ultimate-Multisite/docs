---
id: signup_get_available_languages
title: Фильтр - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Фильтр: signup_get_available_languages {#filter-signupgetavailablelanguages}

Фильтрует список доступных языков для регистраций сайтов во фронтенде.

Передача пустого массива в этот хук отключит вывод этой настройки в форме регистрации, а при создании сайта будет использоваться язык по умолчанию. Языки, которые еще не установлены, будут удалены.

## Параметры {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | Доступные языки. |

### С версии {#since}

- 4.4.0
### Источник {#source}

Определено в [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) на строке 117
