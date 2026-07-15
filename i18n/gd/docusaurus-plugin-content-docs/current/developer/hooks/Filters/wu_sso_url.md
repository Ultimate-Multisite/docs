---
id: wu_sso_url
title: Criathrag - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Criathrag: wu_sso_url

Criathraichidh e SSO URLs a chaidh a ghineadh mus tèid an tilleadh airson gnìomhan luchd-ceannach thar-àrainnean.

Cleachd a’ chriathrag seo nuair a dh’fheumas amalachadh co-theacsa earbsach a chur ri ceangal SSO de sovereign-tenant no URL a’ broker a chur na àite fhad ’s a tha e a’ gleidheadh dearbhadh token Ultimate Multisite.

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $sso_url | `string` | SSO URL a chaidh a ghineadh. |
| $user | `WP_User` | Cleachdaiche a thèid a dhearbhadh leis an tadhal SSO. |
| $site_id | `int` | ID na làraich targaid airson an tadhal. |
| $redirect_to | `string` | URL ceann-uidhe às dèidh dearbhadh SSO soirbheachail. |

### Bhon uair {#since}

- 2.13.0

### Tùs {#source}

Air a mhìneachadh ann an `inc/sso/class-sso.php`.


## Tillidhean {#returns}

SSO URL criathraichte.
