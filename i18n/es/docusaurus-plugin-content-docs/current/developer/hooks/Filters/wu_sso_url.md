---
id: wu_sso_url
title: Filtro - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtro: wu_sso_url

Filtra las URL de SSO generadas antes de que se devuelvan para acciones de clientes entre dominios.

Usa este filtro cuando una integración necesite añadir contexto de confianza a un enlace SSO de tenant soberano o reemplazar la URL del broker mientras preserva la validación de token de Ultimate Multisite.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $sso_url | `string` | URL de SSO generada. |
| $user | `WP_User` | Usuario que será autenticado por la visita SSO. |
| $site_id | `int` | ID del sitio de destino para la visita. |
| $redirect_to | `string` | URL de destino después de una validación SSO correcta. |

### Desde

- 2.13.0

### Fuente

Definido en `inc/sso/class-sso.php`.


## Devuelve

URL de SSO filtrada.
