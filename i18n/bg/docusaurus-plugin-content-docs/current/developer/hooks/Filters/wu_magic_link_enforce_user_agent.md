---
id: wu_magic_link_enforce_user_agent
title: Филтър - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Филтър: wu_magic_link_enforce_user_agent

Филтрира дали да се принуди проверка на User Agent.

Ако го зададете на `false`, токените могат да работят във различни браузъри/устройства. Това намалява сигурността, но увеличава използваемостта.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Дали да се принуди съответствие на User Agent. |

### Since

- 2.0.0
### Source

Дефиниран в [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) на линия 410
