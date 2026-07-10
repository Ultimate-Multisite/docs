---
id: wu_magic_link_enforce_ip
title: Филтер - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Филтер: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Филтрира дали да се спроведе проверка на IP адресата.

Поставете на false за да дозволите token-и да работат од различни мрежи. Ова ја намалува безбедноста, но ја зголемува употребливоста (на пр., за мобилни корисници што менуваат мрежи).

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $enforce | `bool` | Дали да се спроведе совпаѓање на IP адресата. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) на линија 422
