---
id: wu_magic_link_enforce_user_agent
title: Филтер - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

Филтрира да ли треба наметнути проверу user agent-а.

Поставите на false да би token-и могли да раде у различитим прегледачима/уређајима. Ово смањује безбедност, али повећава употребљивост.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Да ли треба наметнути подударање user agent-а. |

### Од верзије

- 2.0.0
### Извор

Дефинисано у [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) у линији 410
