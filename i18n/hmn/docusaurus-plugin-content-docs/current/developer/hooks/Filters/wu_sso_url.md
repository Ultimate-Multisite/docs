---
id: wu_sso_url
title: Lim - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Lim: wu_sso_url {#filter-wussourl}

Lim cov SSO URLs uas tsim los ua ntej lawv raug xa rov qab rau cov kev ua ntawm tus neeg siv khoom hla ntau domain.

Siv lim no thaum ib qho kev txuas ua ke yuav tsum ntxiv cov ntsiab lus uas ntseeg tau rau ib qho sovereign-tenant SSO link lossis hloov broker URL thaum tseem khaws Ultimate Multisite txoj kev kuaj xyuas token.

## Cov Parameters {#parameters}

| Npe | Hom | Kev piav qhia |
|------|------|-------------|
| $sso_url | `string` | SSO URL uas tsim los. |
| $user | `WP_User` | Tus neeg siv uas yuav raug lees paub los ntawm qhov SSO visit. |
| $site_id | `int` | Site ID phiaj rau qhov visit. |
| $redirect_to | `string` | URL mus txog tom qab SSO validation tiav lawm. |

### Txij li {#since}

- 2.13.0

### Chaw los {#source}

Txhais nyob hauv `inc/sso/class-sso.php`.


## Xa rov qab {#returns}

SSO URL uas lim lawm.
