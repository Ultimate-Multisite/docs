---
id: wu_sso_url
title: Filtrum - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtrum: wu_sso_url

Filtrat SSO URLs generatas antequam redduntur pro actionibus emptoris inter dominia.

Hoc filtrum utere cum integratio debet contextum fidum addere vinculo SSO tenentis-sui-iuris aut broker URL substituere, servata validatione token Ultimate Multisite.

## Parametra

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $sso_url | `string` | SSO URL generata. |
| $user | `WP_User` | Usor qui per visitationem SSO authenticabitur. |
| $site_id | `int` | ID situs destinati pro visitatione. |
| $redirect_to | `string` | URL destinationis post prosperam validationem SSO. |

### Ex versione

- 2.13.0

### Fons

Definitum in `inc/sso/class-sso.php`.


## Reddit

SSO URL filtrata.
