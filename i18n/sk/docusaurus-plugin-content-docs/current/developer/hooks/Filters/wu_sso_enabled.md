---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Povoľte/zakážte možnosť cross-domain single-sign-on.

Filtrujte túto hodnotu, aby ste single-sign-on úplne vypli, alebo ho namiesto toho podmienene povolili.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $enabled | `bool` | Má byť SSO povolené? True pre zapnuté, hodnota podobná false pre vypnuté. |

### Od verzie {#since}

- 2.0.11
### Zdroj {#source}

Definované v [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) na riadku 110


## Vráti {#returns}
Či je SSO povolené alebo nie.
