---
id: wu_sso_url
title: Filter - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Filtreerib loodud SSO URL-e enne, kui need tagastatakse domeenidevaheliste klienditoimingute jaoks.

Kasuta seda filtrit, kui integratsioon peab lisama usaldusväärset konteksti suveräänse üürniku SSO lingile või asendama vahendaja URL-i, säilitades Ultimate Multisite'i tokeni valideerimise.

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $sso_url | `string` | Loodud SSO URL. |
| $user | `WP_User` | Kasutaja, kes autentitakse SSO külastusega. |
| $site_id | `int` | Külastuse sihtsaidi ID. |
| $redirect_to | `string` | Sihtkoha URL pärast edukat SSO valideerimist. |

### Alates versioonist

- 2.13.0

### Allikas

Määratletud failis `inc/sso/class-sso.php`.


## Tagastab

Filtreeritud SSO URL.
