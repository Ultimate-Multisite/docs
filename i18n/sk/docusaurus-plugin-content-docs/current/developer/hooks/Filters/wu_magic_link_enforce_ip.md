---
id: wu_magic_link_enforce_ip
title: Filter – wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Filter, či vynucovať overenie IP adresy.

Nastavte na false, aby tokeny mohli fungovať z rôznych sietí. Znižuje to bezpečnosť, ale zvyšuje použiteľnosť (napr. pre mobilných používateľov prepínajúcich siete).

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Či vynucovať zhodu IP adresy. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) na riadku 422
