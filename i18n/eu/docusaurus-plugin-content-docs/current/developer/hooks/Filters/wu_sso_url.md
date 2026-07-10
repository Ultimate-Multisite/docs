---
id: wu_sso_url
title: Iragazkia - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Iragazkia: wu_sso_url {#filter-wussourl}

Domeinuen arteko bezeroen ekintzetarako itzuli aurretik sortutako SSO URLak iragazten ditu.

Erabili iragazki hau integrazio batek tenant burujabe baten SSO estekari testuinguru fidagarria gehitu behar dionean edo broker URL ordeztu behar duenean, Ultimate Multisite-ren tokenaren balidazioa mantenduz.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $sso_url | `string` | Sortutako SSO URL. |
| $user | `WP_User` | SSO bisitak autentifikatuko duen erabiltzailea. |
| $site_id | `int` | Bisitaren helburuko gunearen IDa. |
| $redirect_to | `string` | SSO balidazioa behar bezala egin ondorengo helmugako URLa. |

### Noiztik {#since}

- 2.13.0

### Iturburua {#source}

`inc/sso/class-sso.php` fitxategian definitua.


## Itzultzen du {#returns}

Iragazitako SSO URLa.
