---
id: wu_magic_link_enforce_ip
title: Фильтр - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Фильтр: wu_magic_link_enforce_ip

Фильтр, определяющий, следует ли проверять IP‑адрес.

Установите значение `false`, чтобы токены работали с разных сетей. Это снижает безопасность, но повышает удобство (например, для мобильных пользователей, переключающихся между сетями).

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $enforce | `bool` | Нужно ли проверять соответствие IP‑адреса. |

### С версии

- 2.0.0

### Источник

Определено в [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) на строке 422
