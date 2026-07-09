---
id: wu_sso_url
title: Tātari - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Tātari: wu_sso_url

Ka tātari i ngā SSO URLs kua hangaia i mua i te whakahokinga mō ngā mahi kiritaki whakawhiti-rohe.

Whakamahia tēnei tātari ina me tāpiri tētahi integration i te horopaki pono ki tētahi hononga SSO sovereign-tenant, me whakakapi rānei i te broker URL, me te pupuri tonu i te whakamanatanga token a Ultimate Multisite.

## Ngā tawhā

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $sso_url | `string` | SSO URL kua hangaia. |
| $user | `WP_User` | Kaiwhakamahi ka whakamanaia e te toronga SSO. |
| $site_id | `int` | ID o te pae ūnga mō te toronga. |
| $redirect_to | `string` | URL ūnga i muri i te whakamanatanga SSO angitu. |

### Mai i

- 2.13.0

### Pūtake

Kua tautuhia ki `inc/sso/class-sso.php`.


## Ngā whakahokinga

SSO URL kua tātaria.
