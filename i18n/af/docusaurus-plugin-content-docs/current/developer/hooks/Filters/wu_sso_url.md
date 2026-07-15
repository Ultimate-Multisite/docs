---
id: wu_sso_url
title: Filter - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Filter gegenereerde SSO-URL's voordat hulle vir kruisdomein-kliëntaksies teruggestuur word.

Gebruik hierdie filter wanneer ’n integrasie vertroude konteks by ’n soewereine-huurder-SSO-skakel moet voeg of die broker-URL moet vervang terwyl Ultimate Multisite se token-validering behou word.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $sso_url | `string` | Gegenereerde SSO-URL. |
| $user | `WP_User` | Gebruiker wat deur die SSO-besoek geverifieer sal word. |
| $site_id | `int` | Teiken-site-ID vir die besoek. |
| $redirect_to | `string` | Bestemming-URL ná suksesvolle SSO-validering. |

### Sedert {#since}

- 2.13.0

### Bron {#source}

Gedefinieer in `inc/sso/class-sso.php`.


## Gee terug {#returns}

Gefilterde SSO-URL.
