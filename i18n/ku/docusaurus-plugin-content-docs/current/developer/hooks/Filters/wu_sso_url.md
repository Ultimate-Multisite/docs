---
id: wu_sso_url
title: Parzûn - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url {#filter-wussourl}

SSO URLên çêkirî filter dike berî ku ji bo çalakiyên xerîdar ên di navbera domenan de bên vegerandin.

Vê filterê bikar bîne dema ku entegrasyonek hewce bike konteksê pêbawer li girêdaneke SSO ya kirêdarê serwer zêde bike an jî URL ya brokerê biguherîne, di heman demê de piştrastkirina token ya Ultimate Multisite biparêze.

## Parameter {#parameters}

| Nav | Cure | Danasîn |
|------|------|-------------|
| $sso_url | `string` | SSO URL ya çêkirî. |
| $user | `WP_User` | Bikarhênerê ku bi serdana SSO dê were piştrastkirin. |
| $site_id | `int` | ID ya malpera armanc ji bo serdanê. |
| $redirect_to | `string` | URL ya mebestê piştî piştrastkirina serkeftî ya SSO. |

### Ji guhertoya {#since}

- 2.13.0

### Çavkanî {#source}

Di `inc/sso/class-sso.php` de hatiye pênasekirin.


## Vedigerîne {#returns}

SSO URL ya filterkirî.
