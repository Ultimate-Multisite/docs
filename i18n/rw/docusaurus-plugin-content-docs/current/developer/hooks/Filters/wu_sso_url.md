---
id: wu_sso_url
title: Akayunguruzo - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Akayunguruzo: wu_sso_url

Kayungurura SSO URLs zakozwe mbere y’uko zisubizwa ku bikorwa by’abakiriya byambukiranya domaines.

Koresha aka kayunguruzo igihe integration ikeneye kongera imiterere yizewe kuri link ya SSO y’umukodezi wigenga cyangwa gusimbuza broker URL, mu gihe igumana igenzura rya token rya Ultimate Multisite.

## Ibipimo {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $sso_url | `string` | SSO URL yakozwe. |
| $user | `WP_User` | Umukoresha uzemezwa n’uruzinduko rwa SSO. |
| $site_id | `int` | ID ya site igenewe uruzinduko. |
| $redirect_to | `string` | URL y’aho kujya nyuma yo kugenzura SSO neza. |

### Kuva kuri {#since}

- 2.13.0

### Inkomoko {#source}

Byasobanuwe muri `inc/sso/class-sso.php`.


## Ibisubizwa {#returns}

SSO URL yayunguruwe.
