---
id: wu_sso_url
title: Filtro - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtro: wu_sso_url

Filtra gli URL SSO generati prima che vengano restituiti per le azioni dei clienti cross-domain.

Usa questo filtro quando un'integrazione deve aggiungere un contesto attendibile a un link SSO di tenant sovrano o sostituire l'URL del broker preservando la convalida del token di Ultimate Multisite.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | URL SSO generato. |
| $user | `WP_User` | Utente che verrà autenticato dalla visita SSO. |
| $site_id | `int` | ID del sito di destinazione per la visita. |
| $redirect_to | `string` | URL di destinazione dopo la convalida SSO riuscita. |

### Dalla versione {#since}

- 2.13.0

### Sorgente {#source}

Definito in `inc/sso/class-sso.php`.


## Restituisce {#returns}

URL SSO filtrato.
