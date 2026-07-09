---
id: wu_sso_url
title: Filtro - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtro: wu_sso_url {#filter-wussourl}

Filtra URLs de SSO geradas antes de serem devolvidas para ações de clientes entre domínios.

Use este filtro quando uma integração precisar de adicionar contexto confiável a um link de SSO de inquilino soberano ou substituir a URL do broker, preservando a validação de token do Ultimate Multisite.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $sso_url | `string` | URL de SSO gerada. |
| $user | `WP_User` | Utilizador que será autenticado pela visita de SSO. |
| $site_id | `int` | ID do site de destino para a visita. |
| $redirect_to | `string` | URL de destino após validação de SSO bem-sucedida. |

### Desde {#since}

- 2.13.0

### Fonte {#source}

Definido em `inc/sso/class-sso.php`.


## Devolve {#returns}

URL de SSO filtrada.
