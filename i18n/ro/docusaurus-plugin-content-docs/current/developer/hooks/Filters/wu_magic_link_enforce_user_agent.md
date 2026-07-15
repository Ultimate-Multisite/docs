---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

Filtrează dacă să se aplice verificarea agentului de utilizator (user agent).

Setarea la `false` permite token-urilor să funcționeze pe diferite browsere/dispozitive. Acest lucru reduce securitatea, dar crește ușurința de utilizare.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Dacă se va aplica potrivirea agentului de utilizator. |

### Since {#since}

- 2.0.0
### Source {#source}

Definit în [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) la linia 410
