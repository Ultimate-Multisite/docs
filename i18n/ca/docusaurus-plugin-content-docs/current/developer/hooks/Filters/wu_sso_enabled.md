---
id: wu_sso_enabled
title: Filtre - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filtre: wu_sso_enabled

Activa/desactiva la capacitat d'inici de sessió únic entre dominis.

Filtra aquest valor per desactivar completament l'inici de sessió únic, o per activar-lo condicionalment.

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $enabled | `bool` | S'ha d'activar SSO? True per activar-lo, un valor similar a false per desactivar-lo. |

### Des de

- 2.0.11
### Font

Definit a [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) a la línia 110


## Retorna
Si SSO està activat o no.
