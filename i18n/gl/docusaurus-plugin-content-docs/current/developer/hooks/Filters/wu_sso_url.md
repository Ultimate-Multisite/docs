---
id: wu_sso_url
title: Filtro - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtro: wu_sso_url

Filtra as URL de SSO xeradas antes de que se devolvan para accións de clientes entre dominios.

Usa este filtro cando unha integración precisa engadir contexto de confianza a unha ligazón SSO dun tenant soberano ou substituír a URL do broker mantendo a validación do token de Ultimate Multisite.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $sso_url | `string` | URL de SSO xerada. |
| $user | `WP_User` | Usuario que será autenticado pola visita SSO. |
| $site_id | `int` | ID do sitio de destino para a visita. |
| $redirect_to | `string` | URL de destino despois dunha validación SSO correcta. |

### Desde {#since}

- 2.13.0

### Fonte {#source}

Definido en `inc/sso/class-sso.php`.


## Devolve {#returns}

URL de SSO filtrada.
