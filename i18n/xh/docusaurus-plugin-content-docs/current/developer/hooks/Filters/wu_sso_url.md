---
id: wu_sso_url
title: Isihluzi - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Isihluzi: wu_sso_url

Sihluza ii-URL ze-SSO ezenziweyo ngaphambi kokuba zibuyiselwe kwizenzo zabathengi ezinqumla ii-domain.

Sebenzisa esi sihluzi xa udibaniso lufuna ukongeza umxholo othembekileyo kwikhonkco le-SSO lomqeshi ozimeleyo okanye ukutshintsha i-URL yomlamli ngelixa kugcinwa uqinisekiso lwe-token lwe-Ultimate Multisite.

## Iiparamitha {#parameters}

| Igama | Uhlobo | Inkcazelo |
|------|------|-------------|
| $sso_url | `string` | I-URL ye-SSO eyenziweyo. |
| $user | `WP_User` | Umsebenzisi oza kuqinisekiswa lutyelelo lwe-SSO. |
| $site_id | `int` | I-ID yesiza ekujoliswe kuso kutyelelo. |
| $redirect_to | `string` | I-URL yendawo ekuyiwa kuyo emva koqinisekiso lwe-SSO oluphumeleleyo. |

### Ukususela {#since}

- 2.13.0

### Umthombo {#source}

Ichazwe kwi-`inc/sso/class-sso.php`.


## Ibuyisa {#returns}

I-URL ye-SSO ehluziweyo.
