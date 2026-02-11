---
id: signup_get_available_languages
title: Фильтр - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: abfd9a9381c23503be93e034d42f32c8
---
# Фильтр: signup_get_available_languages

Фильтрует список доступных языков для регистрации сайтов на фронтенде.

Передача пустого массива в этот хук отключит вывод настройки на форме регистрации, и при создании сайта будет использован язык по умолчанию. Языки, которые еще не установлены, будут удалены.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $available_languages | `array` | Доступные языки. |

### С версии

- 4.4.0

### Источник

Определено в [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L125) на строке 125
