---
id: wu_magic_link_enforce_ip
title: Филтър - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Филтър: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Филтрира дали да се принуждава проверка на IP адреса.

Ако го зададете на `false`, токените могат да работят от различни мрежи. Това намалява сигурността, но увеличава използваемостта (например за мобилни потребители, които превключват мрежи).

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Дали да се принуждава съответствие на IP адреса. |

### Since {#since}

- 2.0.0
### Source {#source}

Дефиниран в [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) на линия 422
