---
id: wu_sso_url
title: Filter - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Filtrerer genererte SSO-URL-er før de returneres for kundetiltak på tvers av domener.

Bruk dette filteret når en integrasjon trenger å legge til klarert kontekst i en SSO-lenke for en suveren leietaker eller erstatte broker-URL-en samtidig som Ultimate Multisite sin tokenvalidering bevares.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $sso_url | `string` | Generert SSO-URL. |
| $user | `WP_User` | Bruker som blir autentisert av SSO-besøket. |
| $site_id | `int` | ID for målnettsted for besøket. |
| $redirect_to | `string` | Mål-URL etter vellykket SSO-validering. |

### Siden {#since}

- 2.13.0

### Kilde {#source}

Definert i `inc/sso/class-sso.php`.


## Returnerer {#returns}

Filtrert SSO-URL.
