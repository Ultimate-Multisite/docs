---
id: wu_sso_enabled
title: Filtro - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filtro: wu_sso_enabled

Habilitar/deshabilitar la capacidad de inicio de sesión único entre dominios.

Filtra este valor para desactivar completamente el inicio de sesión único, o habilitarlo condicionalmente en su lugar.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $enabled | `bool` | ¿Debería estar habilitado el SSO? Verdadero para activado, falso-ish para desactivado. |

### Desde

- 2.0.11

### Fuente

Definido en [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) en la línea 110

## Devuelve
Si el SSO está habilitado o no.
