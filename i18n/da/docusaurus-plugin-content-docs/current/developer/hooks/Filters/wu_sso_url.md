---
id: wu_sso_url
title: Filter - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Filtrerer genererede SSO URLs, før de returneres til kundens handlinger på tværs af domæner.

Brug dette filter, når en integration skal tilføje betroet kontekst til et SSO-link for en suveræn lejer eller erstatte broker-URL'en, samtidig med at Ultimate Multisite's tokenvalidering bevares.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $sso_url | `string` | Genereret SSO URL. |
| $user | `WP_User` | Bruger, som bliver autentificeret af SSO-besøget. |
| $site_id | `int` | Målsite-ID for besøget. |
| $redirect_to | `string` | Destinations-URL efter vellykket SSO-validering. |

### Siden {#since}

- 2.13.0

### Kilde {#source}

Defineret i `inc/sso/class-sso.php`.


## Returnerer {#returns}

Filtreret SSO URL.
