---
id: wu_sso_url
title: Szűrő - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Szűri a generált SSO URL-eket, mielőtt azok visszaadásra kerülnek a domainek közötti ügyfélműveletekhez.

Használd ezt a filtert, amikor egy integrációnak megbízható kontextust kell hozzáadnia egy szuverén bérlős SSO linkhez, vagy le kell cserélnie a broker URL-t, miközben megőrzi az Ultimate Multisite token-érvényesítését.

## Paraméterek

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | Generált SSO URL. |
| $user | `WP_User` | Az a felhasználó, akit az SSO látogatás hitelesíteni fog. |
| $site_id | `int` | A látogatás céloldalának ID-ja. |
| $redirect_to | `string` | Cél URL a sikeres SSO-érvényesítés után. |

### Since

- 2.13.0

### Source

Meghatározva itt: `inc/sso/class-sso.php`.


## Returns

Szűrt SSO URL.
