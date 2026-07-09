---
id: wu_sso_url
title: Nzacha - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Nzacha: wu_sso_url {#filter-wussourl}

Na-enyocha SSO URLs emepụtara tupu eweghachite ha maka omume ndị ahịa gafee domain.

Jiri nzacha a mgbe njikọta chọrọ ịgbakwunye ọnọdụ a tụkwasịrị obi na njikọ SSO nke sovereign-tenant ma ọ bụ dochie broker URL ka ọ na-echekwa nkwado token nke Ultimate Multisite.

## Paramita {#parameters}

| Aha | Ụdị | Nkọwa |
|------|------|-------------|
| $sso_url | `string` | SSO URL emepụtara. |
| $user | `WP_User` | Onye ọrụ a ga-akwado site na nleta SSO. |
| $site_id | `int` | ID saịtị ebumnobi maka nleta ahụ. |
| $redirect_to | `string` | URL ebe a ga-aga mgbe nkwado SSO gara nke ọma. |

### Kemgbe {#since}

- 2.13.0

### Isi mmalite {#source}

A kọwara ya na `inc/sso/class-sso.php`.


## Nlaghachi {#returns}

SSO URL enyochara.
