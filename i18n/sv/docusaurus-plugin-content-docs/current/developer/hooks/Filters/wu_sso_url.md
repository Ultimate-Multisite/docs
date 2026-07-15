---
id: wu_sso_url
title: Filter - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Filtrerar genererade SSO-URL:er innan de returneras för kundåtgärder över domäner.

Använd detta filter när en integration behöver lägga till betrodd kontext till en sovereign-tenant SSO-länk eller ersätta broker-URL:en samtidigt som Ultimate Multisite:s tokenvalidering bevaras.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $sso_url | `string` | Genererad SSO-URL. |
| $user | `WP_User` | Användare som kommer att autentiseras av SSO-besöket. |
| $site_id | `int` | ID för målwebbplatsen för besöket. |
| $redirect_to | `string` | Destinations-URL efter lyckad SSO-validering. |

### Sedan {#since}

- 2.13.0

### Källa {#source}

Definierad i `inc/sso/class-sso.php`.


## Returnerar {#returns}

Filtrerad SSO-URL.
