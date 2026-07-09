---
id: signup_get_available_languages
title: Филтер - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Филтер: signup_get_available_languages

Филтрира листу доступних језика за регистрације сајтова на предњем делу.

Прослеђивање празног низа овом hook-у ће онемогућити приказ подешавања на обрасцу за регистрацију, а подразумевани језик ће се користити при креирању сајта. Језици који нису већ инсталирани биће уклоњени.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $available_languages | `array` | Доступни језици. |

### Од верзије

- 4.4.0
### Извор

Дефинисано у [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) у линији 117
