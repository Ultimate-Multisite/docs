---
id: wu_sso_url
title: Filter - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Filtert generéiert SSO-URLen, éier se fir Cross-Domain-Clientaktiounen zeréckgi ginn.

Benotzt dëse Filter, wann eng Integratioun vertrauenswürdege Kontext zu engem Sovereign-Tenant-SSO-Link bäifüge muss oder d'Broker-URL ersetze muss, wärend d'Token-Validéierung vun Ultimate Multisite erhale bleift.

## Parameteren

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $sso_url | `string` | Generéiert SSO-URL. |
| $user | `WP_User` | Benotzer, deen duerch de SSO-Besuch authentifizéiert gëtt. |
| $site_id | `int` | Zil-site-ID fir de Besuch. |
| $redirect_to | `string` | Destinatiouns-URL no erfollegräicher SSO-Validéierung. |

### Zanter

- 2.13.0

### Quell

Definéiert an `inc/sso/class-sso.php`.


## Retouren

Gefiltert SSO-URL.
