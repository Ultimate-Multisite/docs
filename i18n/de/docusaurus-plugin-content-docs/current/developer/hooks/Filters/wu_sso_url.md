---
id: wu_sso_url
title: Filter - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url {#filter-wussourl}

Filtert generierte SSO-URLs, bevor sie für domainübergreifende Kundenaktionen zurückgegeben werden.

Verwende diesen Filter, wenn eine Integration einem SSO-Link für einen souveränen Tenant vertrauenswürdigen Kontext hinzufügen oder die Broker-URL ersetzen muss, während die Token-Validierung von Ultimate Multisite erhalten bleibt.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | Generierte SSO-URL. |
| $user | `WP_User` | Benutzer, der durch den SSO-Besuch authentifiziert wird. |
| $site_id | `int` | Ziel-Website-ID für den Besuch. |
| $redirect_to | `string` | Ziel-URL nach erfolgreicher SSO-Validierung. |

### Seit {#since}

- 2.13.0

### Quelle {#source}

Definiert in `inc/sso/class-sso.php`.


## Rückgabewerte {#returns}

Gefilterte SSO-URL.
