---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

Filtruje, či sa má vynucovať overenie user agent.

Nastavte na false, aby tokeny fungovali naprieč rôznymi prehliadačmi/zariadeniami. Znižuje to bezpečnosť, ale zvyšuje použiteľnosť.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $enforce | `bool` | Či sa má vynucovať zhoda user agent. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) na riadku 410
