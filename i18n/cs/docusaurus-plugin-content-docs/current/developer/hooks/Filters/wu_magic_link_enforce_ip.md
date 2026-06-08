---
id: wu_magic_link_enforce_ip
title: Filtrační funkce - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Filtr, zda má být vynucena ověření IP adresy.

Nastavení na `false` umožní tokenům fungovat z různých sítí. To snižuje bezpečnost, ale zvyšuje uživatelskou přívětivost (např. pro mobilní uživatele, kteří přepínají sítě).

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $enforce | `bool` | Zda má být vynuceno shoda IP adresy. |

### Od

- 2.0.0
### Zdroj

Definováno v [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) na řádku 422
