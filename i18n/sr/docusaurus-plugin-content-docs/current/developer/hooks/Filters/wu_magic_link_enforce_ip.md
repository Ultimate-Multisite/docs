---
id: wu_magic_link_enforce_ip
title: Филтер - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Филтер: wu_magic_link_enforce_ip

Филтрира да ли треба спроводити проверу IP адресе.

Поставите на false да бисте омогућили да токени раде са различитих мрежа. Ово смањује безбедност, али повећава употребљивост (нпр. за мобилне кориснике који мењају мреже).

## Параметри

| Назив | Тип | Опис |
|------|------|-------------|
| $enforce | `bool` | Да ли треба спроводити поклапање IP адресе. |

### Од верзије

- 2.0.0
### Извор

Дефинисано у [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) у реду 422
