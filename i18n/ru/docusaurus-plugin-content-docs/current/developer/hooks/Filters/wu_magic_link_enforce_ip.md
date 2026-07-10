---
id: wu_magic_link_enforce_ip
title: Фильтр - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Фильтр: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Фильтрует, следует ли применять проверку IP-адреса.

Установите значение false, чтобы разрешить токенам работать из разных сетей. Это снижает безопасность, но повышает удобство использования (например, для мобильных пользователей, переключающихся между сетями).

## Параметры {#parameters}

| Название | Тип | Описание |
|------|------|-------------|
| $enforce | `bool` | Whether to enforce IP address matching. |

### Начиная с версии {#since}

- 2.0.0
### Источник {#source}

Определено в [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) в строке 422
