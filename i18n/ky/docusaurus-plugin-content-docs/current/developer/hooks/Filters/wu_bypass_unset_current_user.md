---
id: wu_bypass_unset_current_user
title: Фильтр - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Чыпка: wu_bypass_unset_current_user

Иштеп чыгуучуларга учурдагы колдонуучуну unset кылуу кодун айланып өтүүгө уруксат берет.

nullдан башка нерсе кайтарылса, кирген учурдагы колдонуучуну unset кылуу айланып өтүлөт. Бул айрым учурларда пайдалуу болушу мүмкүн, мисалы, администратордук панелдер катары колдонулуп жаткан кошумча сайттар менен иштегенде.

## Параметрлер

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $null_or_bypass | `mixed` | Улантуу үчүн null, аны айланып өтүү үчүн башка каалаган нерсе. |
| $current_user | `false\|\WP_User` | Учурдагы колдонуучунун объектиси. |

### Кайсы версиядан баштап

- 2.0.11
### Булак

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) ичинде 221-сапта аныкталган


## Кайтарат
