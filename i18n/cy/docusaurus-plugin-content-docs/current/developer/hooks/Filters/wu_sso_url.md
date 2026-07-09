---
id: wu_sso_url
title: Hidlydd - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Hidlydd: wu_sso_url

Yn hidlo URLs SSO a gynhyrchir cyn iddynt gael eu dychwelyd ar gyfer gweithredoedd cwsmeriaid traws-barth.

Defnyddiwch yr hidlydd hwn pan fo angen i integreiddiad ychwanegu cyd-destun dibynadwy at ddolen SSO tenant sofran neu ddisodli URL y broker wrth gadw dilysiad token Ultimate Multisite.

## Paramedrau

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $sso_url | `string` | URL SSO a gynhyrchwyd. |
| $user | `WP_User` | Defnyddiwr a gaiff ei ddilysu gan yr ymweliad SSO. |
| $site_id | `int` | ID y safle targed ar gyfer yr ymweliad. |
| $redirect_to | `string` | URL cyrchfan ar ôl dilysiad SSO llwyddiannus. |

### Ers

- 2.13.0

### Ffynhonnell

Diffinnir yn `inc/sso/class-sso.php`.


## Dychweliadau

URL SSO wedi'i hidlo.
