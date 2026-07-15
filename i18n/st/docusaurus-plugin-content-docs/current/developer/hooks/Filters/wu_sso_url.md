---
id: wu_sso_url
title: Sefe - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

E sefa li-URL tsa SSO tse hlahisitsoeng pele li khutlisetsoa bakeng sa liketso tsa bareki tse tšelang domain.

Sebelisa filter ena ha kopanyo e hloka ho eketsa moelelo o tšeptjoang ho sehokelo sa SSO sa sovereign-tenant kapa ho nkela URL ea broker sebaka ha e ntse e boloka netefatso ea token ea Ultimate Multisite.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | URL ea SSO e hlahisitsoeng. |
| $user | `WP_User` | Mosebelisi ea tla netefatsoa ke ketelo ea SSO. |
| $site_id | `int` | ID ea sebaka se lebisitsoeng bakeng sa ketelo. |
| $redirect_to | `string` | URL ea moo ho eang teng ka mor'a netefatso e atlehileng ea SSO. |

### Ho tloha {#since}

- 2.13.0

### Mohloli {#source}

E hlalositsoe ho `inc/sso/class-sso.php`.


## E khutlisa {#returns}

URL ea SSO e sefiloeng.
