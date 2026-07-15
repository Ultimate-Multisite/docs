---
id: wu_sso_url
title: Filtrilo - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtrilo: wu_sso_url

Filtras generitajn SSO URL-ojn antaŭ ol ili estas resenditaj por transdomajn klientajn agojn.

Uzu ĉi tiun filtrilon kiam integriĝo bezonas aldoni fidindan kuntekston al suveren-luanta SSO-ligilo aŭ anstataŭigi la perantan URL konservante la ĵetonan validigon de Ultimate Multisite.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $sso_url | `string` | Generita SSO URL. |
| $user | `WP_User` | Uzanto kiu estos aŭtentikigita per la SSO-vizito. |
| $site_id | `int` | Cela reteja ID por la vizito. |
| $redirect_to | `string` | Cela URL post sukcesa SSO-validigo. |

### Ekde {#since}

- 2.13.0

### Fonto {#source}

Difinita en `inc/sso/class-sso.php`.


## Revenoj {#returns}

Filtrita SSO URL.
