---
id: wu_sso_url
title: Filter - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Filtert gegenereerde SSO-URL's voordat ze worden teruggegeven voor klantacties over domeinen heen.

Gebruik dit filter wanneer een integratie vertrouwde context moet toevoegen aan een SSO-link voor een soevereine tenant of de broker-URL moet vervangen terwijl de tokenvalidatie van Ultimate Multisite behouden blijft.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | Gegenereerde SSO-URL. |
| $user | `WP_User` | Gebruiker die door het SSO-bezoek wordt geauthenticeerd. |
| $site_id | `int` | Doel-site-ID voor het bezoek. |
| $redirect_to | `string` | Bestemmings-URL na succesvolle SSO-validatie. |

### Sinds {#since}

- 2.13.0

### Bron {#source}

Gedefinieerd in `inc/sso/class-sso.php`.


## Retourneert {#returns}

Gefilterde SSO-URL.
