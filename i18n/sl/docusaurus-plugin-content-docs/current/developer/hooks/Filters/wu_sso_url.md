---
id: wu_sso_url
title: Filter - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url {#filter-wussourl}

Filtrira ustvarjene SSO URL-je, preden so vrnjeni za meddomenska dejanja strank.

Uporabite ta filter, ko mora integracija dodati zaupanja vreden kontekst povezavi SSO suverenega najemnika ali zamenjati URL posrednika, pri tem pa ohraniti preverjanje žetona Ultimate Multisite.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | Ustvarjeni SSO URL. |
| $user | `WP_User` | Uporabnik, ki bo overjen ob obisku SSO. |
| $site_id | `int` | ID ciljnega mesta za obisk. |
| $redirect_to | `string` | Ciljni URL po uspešnem preverjanju SSO. |

### Od različice {#since}

- 2.13.0

### Vir {#source}

Določeno v `inc/sso/class-sso.php`.


## Vrne {#returns}

Filtrirani SSO URL.
