---
id: wu_magic_link_enforce_user_agent
title: Фильтр - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Фильтр: wu_magic_link_enforce_user_agent

Фильтр, определяющий, следует ли проверять пользовательский агент.

Установите значение false, чтобы токены работали в разных браузерах/устройствах. Это снижает безопасность, но повышает удобство использования.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $enforce | `bool` | Нужно ли применять проверку соответствия пользовательского агента. |

### С версии

- 2.0.0

### Источник

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) at line 410
