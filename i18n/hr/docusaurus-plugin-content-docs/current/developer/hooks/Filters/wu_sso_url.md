---
id: wu_sso_url
title: Filtar - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtar: wu_sso_url

Filtrira generirane SSO URL-ove prije nego što se vrate za korisničke radnje među domenama.

Upotrijebite ovaj filtar kada integracija treba dodati pouzdani kontekst SSO poveznici suverenog zakupca ili zamijeniti brokerski URL uz očuvanje provjere tokena Ultimate Multisite.

## Parametri

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $sso_url | `string` | Generirani SSO URL. |
| $user | `WP_User` | Korisnik koji će biti autentificiran SSO posjetom. |
| $site_id | `int` | ID ciljnog sitea za posjet. |
| $redirect_to | `string` | Odredišni URL nakon uspješne SSO provjere. |

### Od verzije

- 2.13.0

### Izvor

Definirano u `inc/sso/class-sso.php`.


## Vraća

Filtrirani SSO URL.
