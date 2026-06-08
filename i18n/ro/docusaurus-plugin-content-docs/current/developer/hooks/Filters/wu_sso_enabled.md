---
id: wu_sso_enabled
title: Filtru - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Activează/dezactivează capacitatea de *single-sign-on* (autentificare unică) între domenii.

Folosește acest filtru pentru a dezactiva complet *single-sign-on*-ul sau pentru a-l activa condițional.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | Ar trebui să fie activat SSO? `true` pentru activat, `false` pentru dezactivat. |

### Since

- 2.0.11
### Source

Definit în [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) la linia 110


## Returns
Dacă SSO este activat sau nu.
