---
id: wu_sso_url
title: Sefa - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Fyuluta: wu_sso_url

Imasefa ma SSO URLs opangidwa asanabwezedwe pa zochita za makasitomala kudutsa ma domain.

Gwiritsani ntchito fyuluta iyi pamene cholumikizira chikufunika kuwonjezera nkhani yodalirika ku ulalo wa sovereign-tenant SSO kapena kusintha broker URL pamene ikusunga kutsimikizira kwa token kwa Ultimate Multisite.

## Ma Parameter {#parameters}

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $sso_url | `string` | SSO URL yopangidwa. |
| $user | `WP_User` | Wogwiritsa ntchito amene adzatsimikiziridwa ndi ulendo wa SSO. |
| $site_id | `int` | ID ya site yolunjika pa ulendowo. |
| $redirect_to | `string` | URL yopita pambuyo pa kutsimikizira kwa SSO kopambana. |

### Kuyambira {#since}

- 2.13.0

### Gwero {#source}

Yafotokozedwa mu `inc/sso/class-sso.php`.


## Zobwezedwa {#returns}

SSO URL yosefedwa.
