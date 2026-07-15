---
id: wu_sso_url
title: Sía - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Sía: wu_sso_url

Síar myndaðar SSO URL áður en þeim er skilað fyrir aðgerðir viðskiptavina milli léna.

Notaðu þessa síu þegar samþætting þarf að bæta traustu samhengi við SSO hlekk fyrir sjálfstæðan tenant eða skipta út broker URL en varðveita token-staðfestingu Ultimate Multisite.

## Færibreytur {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | Mynduð SSO URL. |
| $user | `WP_User` | Notandi sem verður auðkenndur með SSO heimsókninni. |
| $site_id | `int` | Auðkenni marksíðu fyrir heimsóknina. |
| $redirect_to | `string` | Áfangaslóð eftir vel heppnaða SSO staðfestingu. |

### Frá {#since}

- 2.13.0

### Uppruni {#source}

Skilgreint í `inc/sso/class-sso.php`.


## Skilar {#returns}

Síað SSO URL.
