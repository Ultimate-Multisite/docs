---
id: wu_sso_url
title: Filter - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Filtrira generirane SSO URL-ove prije nego što se vrate za radnje korisnika između domena.

Koristite ovaj filter kada integracija treba dodati pouzdan kontekst u SSO link suverenog zakupca ili zamijeniti URL posrednika uz očuvanje validacije tokena Ultimate Multisite.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | Generirani SSO URL. |
| $user | `WP_User` | Korisnik koji će biti autentificiran SSO posjetom. |
| $site_id | `int` | ID ciljne stranice za posjetu. |
| $redirect_to | `string` | Odredišni URL nakon uspješne SSO validacije. |

### Od verzije

- 2.13.0

### Izvor

Definirano u `inc/sso/class-sso.php`.


## Vraća

Filtrirani SSO URL.
