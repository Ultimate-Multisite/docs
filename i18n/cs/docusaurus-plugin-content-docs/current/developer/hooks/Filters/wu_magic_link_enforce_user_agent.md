---
id: wu_magic_link_enforce_user_agent
title: Filtrační funkce - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

Filtruje, zda má být ověření uživatelského agenta vynuceno.

Pokud jej nastavíte na false, tokeny budou fungovat v různých prohlížečích a zařízeních. To snižuje bezpečnost, ale zvyšuje uživatelskou přívětivost.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Zda má být vynucena shoda uživatelského agenta. |

### Since {#since}

- 2.0.0
### Source {#source}

Definováno v [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) na řádku 410
