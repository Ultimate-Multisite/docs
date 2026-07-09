---
id: wu_magic_link_enforce_user_agent
title: Филтер - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Филтер: wu_magic_link_enforce_user_agent

Филтрира дали да се спроведе проверка на user agent.

Поставете на false за да им дозволите на токените да работат низ различни прелистувачи/уреди. Ова ја намалува безбедноста, но ја зголемува употребливоста.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $enforce | `bool` | Дали да се спроведе совпаѓање на user agent. |

### Од верзија

- 2.0.0
### Извор

Дефинирано во [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) на линија 410
