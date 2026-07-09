---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled {#filter-wussoenabled}

Omogućavanje/onemogućavanje mogućnosti jednoprofilne prijave (single-sign-on) preko različitih domena.

Koristite ovu vrijednost da potpuno isključite jednoprofilnu prijavu, ili da je umjesto toga omogućite uslovno.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | Treba li da je SSO omogućen? `True` za uključeno, `false` za isključeno. |

### Since {#since}

- 2.0.11
### Source {#source}

Definisano u [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) na liniji 110


## Returns {#returns}
Vraća da li je SSO omogućen ili ne.
