---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Zapnutí/vypnutí funkce jednorázového přihlášení (SSO) napříč doménami.

Použijte tuto hodnotu k úplnému vypnutí jednorázového přihlášení, nebo k jeho podmíněnému zapnutí.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $enabled | `bool` | Má SSO být povoleno? `true` pro zapnuté, `false` pro vypnuté. |

### Od {#since}

- 2.0.11
### Zdroj {#source}

Definováno v [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) na řádku 110


## Vrátí {#returns}
Hodnotu, zda je SSO povoleno, nebo ne.
