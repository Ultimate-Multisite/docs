---
id: wu_sso_enabled
title: Filtr - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filtr: wu_sso_enabled

Umożliwia włączenie lub wyłączenie funkcji jednokrotnego logowania (single-sign-on) między domenami.

Użyj tego filtra, aby całkowicie wyłączyć jednokrotne logowanie lub włączyć je warunkowo.

## Parametry

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | Czy SSO ma być włączone? `true` oznacza włączone, `false` oznacza wyłączone. |

### Od

- 2.0.11
### Źródło

Zdefiniowane w [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) w linii 110


## Zwraca
Status włączenia lub wyłączenia SSO.
