---
id: wu_enforce_password_rules
title: Фильтр - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Фильтр: wu_enforce_password_rules

Фильтр, определяющий, следует ли применять дополнительные правила пароля.

Если установлено в true, применяются требования к минимальной длине и символам. Автоматически включено для настройки «Super Strong» или когда функция «Strong Password» Defender Pro активна.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $enforce_rules | `bool` | Нужно ли применять дополнительные правила. |
| $strength_setting | `string` | Значение настройки администратора. |
| $defender_active | `bool` | Активна ли функция Strong Password Defender Pro. |

### С версии

- 2.4.0

### Источник

Определено в [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) на строке 531
