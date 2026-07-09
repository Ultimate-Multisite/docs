---
id: wu_sso_url
title: Sefa - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Sefa: wu_sso_url

Inosefa SSO URLs dzakagadzirwa dzisati dzadzoserwa kune zviito zvevatengi zvepakati pemadomain.

Shandisa sefa iyi kana integration ichida kuwedzera mamiriro akavimbika ku sovereign-tenant SSO link kana kutsiva broker URL ichichengetedza token validation yeUltimate Multisite.

## Maparamita

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $sso_url | `string` | SSO URL yakagadzirwa. |
| $user | `WP_User` | Mushandisi achasimbiswa neSSO visit. |
| $site_id | `int` | Target site ID yevisit. |
| $redirect_to | `string` | Destination URL mushure mekubudirira kweSSO validation. |

### Kubvira

- 2.13.0

### Kwakabva

Yakatsanangurwa mu `inc/sso/class-sso.php`.


## Zvinodzosa

SSO URL yakasefwa.
